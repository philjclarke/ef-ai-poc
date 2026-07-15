import { buildTeachingResource } from "@/lib/mock-data";
import type { GenerateRequest } from "@/lib/types";

const SIMULATED_LATENCY_MS = 2500;

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<GenerateRequest>;

  if (!body.resourceId || !body.topic) {
    return Response.json(
      { error: "resourceId and topic are required" },
      { status: 400 }
    );
  }

  const req: GenerateRequest = {
    webAccountId: body.webAccountId ?? "",
    resourceId: body.resourceId,
    topic: body.topic,
    yearGroup: body.yearGroup ?? "",
    location: body.location ?? "",
    interests: body.interests ?? [],
    occupations: body.occupations ?? [],
  };

  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));

  return Response.json(buildTeachingResource(req));
}
