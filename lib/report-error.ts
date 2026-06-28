/**
 * Server-side error reporting.
 *
 * Emits a single structured JSON line to stderr (captured by Vercel runtime
 * logs / log drains) and, when `ERROR_WEBHOOK_URL` is configured, forwards a
 * compact summary to that webhook (e.g. a Slack/Discord incoming webhook or a
 * custom endpoint). Reporting never throws — a monitoring outage must not break
 * the request that triggered it.
 *
 * `ERROR_WEBHOOK_URL` has no `NEXT_PUBLIC_` prefix, so it is only ever read on
 * the server and is never exposed to the browser bundle. Client-side errors are
 * funnelled here through the `/api/log-error` route.
 */

export type ErrorSource =
  | "contact-api"
  | "log-error-api"
  | "client-boundary"
  | "global-error";

export interface ErrorContext {
  source: ErrorSource;
  /** Next.js error digest, when available. */
  digest?: string;
  /** URL where the error occurred (client errors). */
  url?: string;
  /** Additional non-sensitive context. */
  extra?: Record<string, unknown>;
}

function normalizeError(error: unknown): { message: string; stack?: string } {
  if (error instanceof Error) {
    return { message: error.message, stack: error.stack };
  }
  if (typeof error === "string") return { message: error };
  try {
    return { message: JSON.stringify(error) };
  } catch {
    return { message: String(error) };
  }
}

async function postToWebhook(
  webhookUrl: string,
  payload: Record<string, unknown>,
): Promise<void> {
  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `:rotating_light: ${payload.source} error: ${payload.message}`,
        ...payload,
      }),
      // Don't let a slow/hanging webhook stall the request indefinitely.
      signal: AbortSignal.timeout(3000),
    });
  } catch (webhookError) {
    console.error(
      JSON.stringify({
        level: "error",
        source: "report-error",
        message: "Failed to deliver error to ERROR_WEBHOOK_URL",
        cause: normalizeError(webhookError).message,
      }),
    );
  }
}

/**
 * Report an error from server-side code. Always logs; optionally forwards to a
 * webhook. Safe to `await` or fire-and-forget — it never rejects.
 */
export async function reportError(
  error: unknown,
  context: ErrorContext,
): Promise<void> {
  const { message, stack } = normalizeError(error);

  const payload = {
    level: "error" as const,
    timestamp: new Date().toISOString(),
    source: context.source,
    message,
    ...(context.digest ? { digest: context.digest } : {}),
    ...(context.url ? { url: context.url } : {}),
    ...(stack ? { stack } : {}),
    ...(context.extra ? { extra: context.extra } : {}),
  };

  console.error(JSON.stringify(payload));

  const webhookUrl = process.env.ERROR_WEBHOOK_URL;
  if (webhookUrl) {
    await postToWebhook(webhookUrl, payload);
  }
}
