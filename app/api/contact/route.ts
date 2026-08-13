import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  MAX_ATTACHMENT_BYTES,
  buildSafeFilename,
  extensionKind,
  formatFileSize,
  hasAllowedDeclaredType,
  sniffAttachment,
} from "@/lib/contact-attachment";
import { isRateLimited } from "@/lib/rate-limit";
import { reportError } from "@/lib/report-error";

const toEmail = process.env.CONTACT_EMAIL ?? "info@webgrafy.com";
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

const TOO_LARGE_MESSAGE = "That file is larger than the 4 MB limit.";
const BAD_TYPE_MESSAGE = "Accepted formats: PDF, PNG, JPEG and WebP.";

/**
 * Read a text field off the multipart body. Narrowing on `typeof === "string"`
 * rather than `instanceof File` keeps this correct across realms — undici's
 * `File` and the test environment's are different constructors.
 */
function readString(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/** Escape user input before interpolating into the notification email HTML. */
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

  // Cheap pre-check before undici buffers the body. `content-length` is absent
  // on chunked requests, hence the isFinite guard — `file.size` is the real gate.
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_ATTACHMENT_BYTES + 512 * 1024) {
    return NextResponse.json({ error: TOO_LARGE_MESSAGE }, { status: 413 });
  }

  try {
    let form: FormData;
    try {
      form = await request.formData();
    } catch (caught) {
      await reportError(caught, { source: "contact-api", extra: { stage: "parse-formdata" } });
      return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
    }

    // Honeypot: real users never see/fill this field. Bots that do are
    // accepted with a success response (so they don't retry) but no email is sent.
    // Checked before any file work, so a bot's upload is never read or encoded.
    const honeypot = readString(form, "website");
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Your inquiry has been received." },
        { status: 200 }
      );
    }

    const name = readString(form, "name");
    const businessName = readString(form, "businessName");
    const email = readString(form, "email");
    const service = readString(form, "service");
    const message = readString(form, "message");

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!service) {
      return NextResponse.json({ error: "Please select a service." }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Please provide a short description of your project." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      await reportError(new Error("RESEND_API_KEY is not configured"), {
        source: "contact-api",
      });
      return NextResponse.json(
        { error: "Something went wrong while sending your inquiry." },
        { status: 503 }
      );
    }

    const locale = readString(form, "locale");

    // Optional attachment. Extracted after the API-key check so a misconfigured
    // deployment never spends CPU base64-encoding 4 MB it can't send.
    const fileEntry = form.get("file");
    let attachment: { filename: string; content: string; contentType: string; size: number } | null =
      null;

    // An untouched file input submits a zero-byte entry in some browsers — that,
    // an absent key, and a plain string all mean "no attachment".
    if (fileEntry !== null && typeof fileEntry !== "string" && fileEntry.size > 0) {
      if (fileEntry.size > MAX_ATTACHMENT_BYTES) {
        return NextResponse.json({ error: TOO_LARGE_MESSAGE }, { status: 400 });
      }

      // Cheap metadata pre-filter before the bytes are pulled into memory.
      if (!hasAllowedDeclaredType(fileEntry.type) || extensionKind(fileEntry.name) === null) {
        return NextResponse.json({ error: BAD_TYPE_MESSAGE }, { status: 400 });
      }

      const buffer = Buffer.from(await fileEntry.arrayBuffer());

      // Authoritative check: the declared MIME type is client-supplied, so the
      // file signature decides. Requiring the extension to agree also rejects a
      // real PNG named `invoice.pdf` — the inbox never sees a misleading name.
      const signature = sniffAttachment(buffer.subarray(0, 12));
      if (!signature || signature.kind !== extensionKind(fileEntry.name)) {
        return NextResponse.json({ error: BAD_TYPE_MESSAGE }, { status: 400 });
      }

      attachment = {
        filename: buildSafeFilename(fileEntry.name, signature),
        content: buffer.toString("base64"), // Resend reads a string `content` as base64
        contentType: signature.mime,
        size: fileEntry.size,
      };
    }

    const { error } = await getResend().emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New inquiry from ${name}${businessName ? ` (${businessName})` : ""}`,
      html: `
        ${locale ? `<p><strong>Locale:</strong> ${escapeHtml(locale)}</p>` : ""}
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        ${businessName ? `<p><strong>Company:</strong> ${escapeHtml(businessName)}</p>` : ""}
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        ${attachment
          ? `<p><strong>Attachment:</strong> ${escapeHtml(attachment.filename)} (${formatFileSize(attachment.size)})</p>`
          : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
      // Spread conditionally so the key is absent entirely when there's no file.
      ...(attachment
        ? {
            attachments: [
              {
                filename: attachment.filename,
                content: attachment.content,
                contentType: attachment.contentType,
              },
            ],
          }
        : {}),
    });

    if (error) {
      await reportError(error, { source: "contact-api", extra: { stage: "resend-send" } });
      return NextResponse.json(
        { error: "Something went wrong while sending your inquiry." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Your inquiry has been received." },
      { status: 200 }
    );
  } catch (caught) {
    await reportError(caught, { source: "contact-api", extra: { stage: "handler" } });
    return NextResponse.json(
      { error: "Something went wrong while sending your inquiry." },
      { status: 500 }
    );
  }
}
