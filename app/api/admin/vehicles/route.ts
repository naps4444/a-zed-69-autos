import { NextResponse } from "next/server";
import { auth } from "@/auth";

interface VehicleImage {
  url: string;
  publicId: string;
  name: string;
}

interface VehiclePayload {
  name: string;
  year: number;
  condition: "Brand New" | "Foreign Used";
  price: string;
  location: string;
  transmission: string;
  fuelType: string;
  featured: boolean;
  images: VehicleImage[];
}

function createVehicleId(name: string, year: number) {
  return `${name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}-${year}`;
}

function encodeBase64(value: string) {
  return Buffer.from(value, "utf8").toString("base64");
}

function decodeBase64(value: string) {
  return Buffer.from(value.replace(/\n/g, ""), "base64").toString("utf8");
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = (await request.json()) as VehiclePayload;

    if (
      !body.name ||
      !body.year ||
      !body.condition ||
      !body.price ||
      !body.location ||
      !body.transmission ||
      !body.fuelType ||
      !Array.isArray(body.images) ||
      body.images.length === 0
    ) {
      return NextResponse.json(
        {
          error:
            "Please provide all vehicle details and at least one image.",
        },
        { status: 400 }
      );
    }

    const githubToken = process.env.GITHUB_TOKEN;
    const githubOwner = process.env.GITHUB_OWNER;
    const githubRepo = process.env.GITHUB_REPO;
    const githubBranch = process.env.GITHUB_BRANCH || "main";

    if (!githubToken || !githubOwner || !githubRepo || !githubBranch) {
      return NextResponse.json(
        { error: "GitHub environment variables are not configured." },
        { status: 500 }
      );
    }

    const vehicleId = createVehicleId(body.name, body.year);

    const githubHeaders = {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${githubToken}`,
      "X-GitHub-Api-Version": "2022-11-28",
    };

    const fileUrl = `https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/data/vehicles.ts`;

    const fileResponse = await fetch(
      `${fileUrl}?ref=${encodeURIComponent(githubBranch)}`,
      {
        method: "GET",
        headers: githubHeaders,
        cache: "no-store",
      }
    );

    const fileData = await fileResponse.json();

    if (!fileResponse.ok) {
      return NextResponse.json(
        {
          error:
            fileData.message ||
            "Could not read data/vehicles.ts from GitHub.",
        },
        { status: 502 }
      );
    }

    const currentContent = decodeBase64(fileData.content);

    const escapedVehicleId = vehicleId.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    const idPattern = new RegExp(
      `id:\\s*["']${escapedVehicleId}["']`
    );

    if (idPattern.test(currentContent)) {
      return NextResponse.json(
        {
          error: `A vehicle with the ID "${vehicleId}" already exists.`,
        },
        { status: 409 }
      );
    }

    const imageUrls = body.images.map((image) => image.url);

    const newVehicle = `
  {
    id: "${vehicleId}",
    name: ${JSON.stringify(body.name)},
    year: ${body.year},
    condition: ${JSON.stringify(body.condition)},
    price: ${JSON.stringify(body.price)},
    location: ${JSON.stringify(body.location)},
    image: ${JSON.stringify(imageUrls[0])},
    images: ${JSON.stringify(imageUrls, null, 2)
      .split("\n")
      .map((line, index) => (index === 0 ? line : `    ${line}`))
      .join("\n")},
    featured: ${body.featured},
    transmission: ${JSON.stringify(body.transmission)},
    fuelType: ${JSON.stringify(body.fuelType)},
  },
`;

    const arrayStart = currentContent.indexOf("[");

    if (arrayStart === -1) {
      return NextResponse.json(
        {
          error:
            "Could not find the beginning of the vehicles array in data/vehicles.ts.",
        },
        { status: 500 }
      );
    }

    const updatedContent =
      currentContent.slice(0, arrayStart + 1) +
      newVehicle +
      currentContent.slice(arrayStart + 1);

    const commitResponse = await fetch(fileUrl, {
      method: "PUT",
      headers: {
        ...githubHeaders,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Add vehicle: ${body.name} ${body.year}`,
        content: encodeBase64(updatedContent),
        sha: fileData.sha,
        branch: githubBranch,
      }),
    });

    const commitData = await commitResponse.json();

    if (!commitResponse.ok) {
      return NextResponse.json(
        {
          error:
            commitData.message ||
            "GitHub could not publish the vehicle.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Vehicle published successfully.",
      vehicle: {
        id: vehicleId,
        name: body.name,
        year: body.year,
        image: imageUrls[0],
        images: imageUrls,
      },
      commit: {
        sha: commitData.commit?.sha || null,
        url: commitData.commit?.html_url || null,
      },
    });
  } catch (error) {
    console.error("Vehicle publishing error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while publishing the vehicle.",
      },
      { status: 500 }
    );
  }
}
