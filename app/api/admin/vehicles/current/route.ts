import { NextResponse } from "next/server";
import { auth } from "@/auth";

function decodeBase64(value: string) {
  return Buffer.from(
    value.replace(/\n/g, ""),
    "base64"
  ).toString("utf8");
}

function parseQuotedField(
  block: string,
  field: string
): string {
  const pattern = new RegExp(
    `${field}:\\s*["']([^"']*)["']`
  );

  return block.match(pattern)?.[1] || "";
}

function parseNumberField(
  block: string,
  field: string
): number {
  const pattern = new RegExp(
    `${field}:\\s*(\\d+)`
  );

  return Number(block.match(pattern)?.[1] || 0);
}

function parseBooleanField(
  block: string,
  field: string
): boolean {
  const pattern = new RegExp(
    `${field}:\\s*(true|false)`
  );

  return block.match(pattern)?.[1] === "true";
}

function parseImages(block: string): string[] {
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

function parseVehicles(content: string) {
  const arrayStart = content.indexOf(
    "export const vehicles: Vehicle[] = ["
  );

  if (arrayStart === -1) {
    throw new Error(
      "Could not find the vehicles array in data/vehicles.ts."
    );
  }

  const arrayContent = content.slice(
    arrayStart
  );

  const blocks = arrayContent.match(
    /\{\s*id:\s*["'][^"']+["'][\s\S]*?\n\s*\},/g
  );

  if (!blocks) {
    return [];
  }

  return blocks.map((block) => {
    const images = parseImages(block);

    return {
      id: parseQuotedField(block, "id"),
      name: parseQuotedField(block, "name"),
      year: parseNumberField(block, "year"),
      condition: parseQuotedField(block, "condition"),
      price: parseQuotedField(block, "price"),
      location: parseQuotedField(block, "location"),
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
  });
}

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const githubToken = process.env.GITHUB_TOKEN;
    const githubOwner = process.env.GITHUB_OWNER;
    const githubRepo = process.env.GITHUB_REPO;
    const githubBranch =
      process.env.GITHUB_BRANCH || "main";

    if (
      !githubToken ||
      !githubOwner ||
      !githubRepo
    ) {
      return NextResponse.json(
        {
          error:
            "GitHub environment variables are not configured.",
        },
        { status: 500 }
      );
    }

    const fileUrl = `https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/data/vehicles.ts`;

    const response = await fetch(
      `${fileUrl}?ref=${encodeURIComponent(
        githubBranch
      )}`,
      {
        headers: {
          Accept:
            "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data.message ||
            "Could not read vehicle inventory from GitHub.",
        },
        { status: 502 }
      );
    }

    const content = decodeBase64(data.content);
    const vehicles = parseVehicles(content);

    return NextResponse.json({
      vehicles,
      source: "github",
      branch: githubBranch,
    });
  } catch (error) {
    console.error(
      "Current vehicles API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not load current vehicle inventory.",
      },
      { status: 500 }
    );
  }
}
