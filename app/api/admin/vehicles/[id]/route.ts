import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const githubApiBase = "https://api.github.com";

function decodeBase64(value: string) {
  return Buffer.from(
    value.replace(/\n/g, ""),
    "base64"
  ).toString("utf8");
}

function getGithubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";

  if (!token || !owner || !repo) {
    throw new Error(
      "GitHub environment variables are not configured."
    );
  }

  return {
    token,
    owner,
    repo,
    branch,
  };
}

async function getVehiclesFile() {
  const {
    token,
    owner,
    repo,
    branch,
  } = getGithubConfig();

  const url = `${githubApiBase}/repos/${owner}/${repo}/contents/data/vehicles.ts?ref=${encodeURIComponent(
    branch
  )}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        "Could not read vehicles from GitHub."
    );
  }

  return {
    content: decodeBase64(data.content),
    sha: data.sha,
    token,
    owner,
    repo,
    branch,
  };
}

function findVehicleBlock(
  content: string,
  id: string
) {
  const escapedId = id.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  const pattern = new RegExp(
    `\\{\\s*id:\\s*["']${escapedId}["'][\\s\\S]*?\\n\\s*\\},?`,
    "m"
  );

  const match = content.match(pattern);

  if (!match || match.index === undefined) {
    return null;
  }

  return {
    text: match[0],
    index: match.index,
  };
}

function parseQuotedField(
  block: string,
  field: string
) {
  const pattern = new RegExp(
    `${field}:\\s*["']([^"']*)["']`
  );

  return block.match(pattern)?.[1] || "";
}

function parseNumberField(
  block: string,
  field: string
) {
  const pattern = new RegExp(
    `${field}:\\s*(\\d+)`
  );

  return Number(
    block.match(pattern)?.[1] || 0
  );
}

function parseBooleanField(
  block: string,
  field: string
) {
  const pattern = new RegExp(
    `${field}:\\s*(true|false)`
  );

  return block.match(pattern)?.[1] === "true";
}

function parseImages(block: string) {
  const match = block.match(
    /images:\s*(\[[\s\S]*?\]),\s*featured:/
  );

  if (!match) {
    return [];
  }

  try {
    return JSON.parse(match[1]);
  } catch {
    return [];
  }
}

function parseVehicle(block: string) {
  const images = parseImages(block);

  return {
    id: parseQuotedField(block, "id"),
    name: parseQuotedField(block, "name"),
    year: parseNumberField(block, "year"),
    condition: parseQuotedField(
      block,
      "condition"
    ),
    price: parseQuotedField(block, "price"),
    location: parseQuotedField(
      block,
      "location"
    ),
    image:
      parseQuotedField(block, "image") ||
      images[0] ||
      "",
    images,
    featured: parseBooleanField(
      block,
      "featured"
    ),
    transmission: parseQuotedField(
      block,
      "transmission"
    ),
    fuelType: parseQuotedField(
      block,
      "fuelType"
    ),
  };
}

async function commitVehiclesFile(
  content: string,
  sha: string,
  message: string
) {
  const {
    token,
    owner,
    repo,
    branch,
  } = getGithubConfig();

  const url = `${githubApiBase}/repos/${owner}/${repo}/contents/data/vehicles.ts`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(content).toString(
        "base64"
      ),
      sha,
      branch,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        "Could not update vehicles on GitHub."
    );
  }

  return data;
}

export async function GET(
  _request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { id } = await context.params;
    const file = await getVehiclesFile();
    const vehicleBlock = findVehicleBlock(
      file.content,
      id
    );

    if (!vehicleBlock) {
      return NextResponse.json(
        { error: "Vehicle not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      vehicle: parseVehicle(
        vehicleBlock.text
      ),
    });
  } catch (error) {
    console.error(
      "Get vehicle error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not load vehicle.",
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { id } = await context.params;
    const body = await request.json();

    const {
      name,
      year,
      condition,
      price,
      location,
      images,
      featured,
      transmission,
      fuelType,
    } = body;

    if (
      !name ||
      !year ||
      !condition ||
      !price ||
      !location ||
      !Array.isArray(images) ||
      images.length === 0
    ) {
      return NextResponse.json(
        {
          error:
            "Name, year, condition, price, location and at least one image are required.",
        },
        { status: 400 }
      );
    }

    const file = await getVehiclesFile();
    const vehicleBlock = findVehicleBlock(
      file.content,
      id
    );

    if (!vehicleBlock) {
      return NextResponse.json(
        { error: "Vehicle not found." },
        { status: 404 }
      );
    }

    const newId = `${name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}-${year}`;

    if (newId !== id) {
      const duplicate = findVehicleBlock(
        file.content,
        newId
      );

      if (duplicate) {
        return NextResponse.json(
          {
            error:
              "Another vehicle already uses the generated ID.",
          },
          { status: 409 }
        );
      }
    }

    const newVehicle = `{
    id: "${newId}",
    name: "${String(name).replace(/"/g, '\\"')}",
    year: ${Number(year)},
    condition: "${String(condition).replace(/"/g, '\\"')}",
    price: "${String(price).replace(/"/g, '\\"')}",
    location: "${String(location).replace(/"/g, '\\"')}",
    image: "${String(images[0]).replace(/"/g, '\\"')}",
    images: ${JSON.stringify(images, null, 2)},
    featured: ${Boolean(featured)},
    transmission: "${String(transmission || "Automatic").replace(/"/g, '\\"')}",
    fuelType: "${String(fuelType || "Petrol").replace(/"/g, '\\"')}",
  },`;

    const updatedContent =
      file.content.slice(
        0,
        vehicleBlock.index
      ) +
      newVehicle +
      file.content.slice(
        vehicleBlock.index +
          vehicleBlock.text.length
      );

    const commit = await commitVehiclesFile(
      updatedContent,
      file.sha,
      `Update vehicle: ${name}`
    );

    return NextResponse.json({
      success: true,
      vehicleId: newId,
      commitSha: commit.commit?.sha,
    });
  } catch (error) {
    console.error(
      "Update vehicle error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not update vehicle.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { id } = await context.params;
    const file = await getVehiclesFile();

    const vehicleBlock = findVehicleBlock(
      file.content,
      id
    );

    if (!vehicleBlock) {
      return NextResponse.json(
        { error: "Vehicle not found." },
        { status: 404 }
      );
    }

    const vehicle = parseVehicle(
      vehicleBlock.text
    );

    const before =
      file.content.slice(
        0,
        vehicleBlock.index
      );

    const after =
      file.content.slice(
        vehicleBlock.index +
          vehicleBlock.text.length
      );

    const updatedContent =
      before + after;

    const commit = await commitVehiclesFile(
      updatedContent,
      file.sha,
      `Delete vehicle: ${vehicle.name}`
    );

    return NextResponse.json({
      success: true,
      deletedVehicle: {
        id: vehicle.id,
        name: vehicle.name,
      },
      commitSha: commit.commit?.sha,
    });
  } catch (error) {
    console.error(
      "Delete vehicle error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not delete vehicle.",
      },
      { status: 500 }
    );
  }
}
