import { NextResponse } from "next/server";
import { inMemoryRateLimit } from "@/lib/rate-limit";
import { reportError, type ErrorSource } from "@/lib/report-error";

// Generous limit: a single broken render can legitimately fire a couple of
// reports, but this still caps abuse of the public endpoint.
const LOG_LIMIT = 20;
const LOG_WINDOW_MS = 60_000;
const MAX_FIELD_LENGTH = 4000;

const allowedSources: ReadonlySet<ErrorSource> = new Set([
  "client-boundary",
  "global-error",
]);

function clamp(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, MAX_FIELD_LENGTH);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  // Rate limit silently — a 204 keeps client error boundaries simple and gives
  // bots no useful signal.
  if (inMemoryRateLimit(`log-error:${ip}`, LOG_LIMIT, LOG_WINDOW_MS)) {
    return new NextResponse(null, { status: 204 });
  }

  try {
    const body = await request.json();

    const message = clamp(body?.message) ?? "Unknown client error";
    const source: ErrorSource =
      typeof body?.source === "string" && allowedSources.has(body.source as ErrorSource)
        ? (body.source as ErrorSource)
        : "client-boundary";

    const error = new Error(message);
    const stack = clamp(body?.stack);
    if (stack) error.stack = stack;

    await reportError(error, {
      source,
      digest: clamp(body?.digest),
      url: clamp(body?.url),
      extra: { userAgent: request.headers.get("user-agent") ?? undefined },
    });
  } catch {
    // Malformed payloads are ignored — this endpoint must never error loudly.
  }

  return new NextResponse(null, { status: 204 });
}
