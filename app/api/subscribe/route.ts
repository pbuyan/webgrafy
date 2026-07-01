import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isRateLimited } from "@/lib/rate-limit";
import { reportError } from "@/lib/report-error";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale, isValidLocale } from "@/lib/i18n/config";

const notifyEmail = process.env.CONTACT_EMAIL ?? "info@webgrafy.com";
const fromEmail =
  process.env.RESEND_FROM_EMAIL ?? "Webgrafy Contact <noreply@contact.webgrafy.com>";

// Lazily instantiated so the module loads without RESEND_API_KEY at build time.
let resend: Resend | null = null;
function getResend(): Resend {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Escape user input before interpolating into notification email HTML. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (await isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();

    // Honeypot: real users never see/fill this field. Bots that do are
    // accepted with a success response (so they don't retry) but no email is sent.
    const honeypot = typeof body.website === "string" ? body.website.trim() : "";
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "You're subscribed." },
        { status: 200 }
      );
    }

    const email = typeof body.email === "string" ? body.email.trim() : "";
    const locale = isValidLocale(body.locale) ? body.locale : defaultLocale;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      await reportError(new Error("RESEND_API_KEY is not configured"), {
        source: "subscribe-api",
      });
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 503 }
      );
    }

    const dict = await getDictionary(locale);
    const n = dict.newsletter;
    const client = getResend();

    // Best-effort: add to the mailing list audience when configured. A failure
    // here must not block the welcome email or the success response.
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (audienceId) {
      try {
        await client.contacts.create({ email, audienceId, unsubscribed: false });
      } catch (audienceError) {
        await reportError(audienceError, {
          source: "subscribe-api",
          extra: { stage: "audience-create" },
        });
      }
    }

    const checklistHtml = n.checklistItems
      .map((item) => `<li style="margin-bottom:8px">${item}</li>`)
      .join("");

    const { error } = await client.emails.send({
      from: fromEmail,
      to: [email],
      subject: n.welcomeSubject,
      html: `
        <p>${n.welcomeIntro}</p>
        <h2>${n.checklistTitle}</h2>
        <ol>${checklistHtml}</ol>
        <p>${n.welcomeOutro}</p>
      `,
    });

    if (error) {
      await reportError(error, { source: "subscribe-api", extra: { stage: "resend-send" } });
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    // Notify the studio of the new subscriber (fire-and-forget; don't fail the
    // request if this secondary email bounces).
    try {
      await client.emails.send({
        from: fromEmail,
        to: [notifyEmail],
        subject: `New newsletter subscriber: ${escapeHtml(email)}`,
        html: `<p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Locale:</strong> ${escapeHtml(locale)}</p>`,
      });
    } catch (notifyError) {
      await reportError(notifyError, {
        source: "subscribe-api",
        extra: { stage: "notify-send" },
      });
    }

    return NextResponse.json(
      { success: true, message: n.success },
      { status: 200 }
    );
  } catch (caught) {
    await reportError(caught, { source: "subscribe-api", extra: { stage: "handler" } });
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
