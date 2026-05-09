import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";

const toEmail = process.env.CONTACT_EMAIL ?? "hello@webgrafy.co";

// Lazily instantiated so the module loads without RESEND_API_KEY at build time.
let resend: Resend | null = null;
function getResend(): Resend {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const businessName = typeof body.businessName === "string" ? body.businessName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

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

    await getResend().emails.send({
      from: "Webgrafy Contact <noreply@webgrafy.com>",
      to: [toEmail],
      replyTo: email,
      subject: `New inquiry from ${name}${businessName ? ` (${businessName})` : ""}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        ${businessName ? `<p><strong>Company:</strong> ${businessName}</p>` : ""}
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Your inquiry has been received." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending your inquiry." },
      { status: 500 }
    );
  }
}
