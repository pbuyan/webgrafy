"use server";

import { contactSchema } from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { saveLeadToSupabase } from "@/lib/supabase-leads";
import { headers } from "next/headers";

type ActionState =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> };

function getIPFromHeaders(h: Headers) {
  const xfwd = h.get("x-forwarded-for");
  if (xfwd) return xfwd.split(",")[0].trim();
  return h.get("x-real-ip") ?? "unknown";
}

export async function submitContact(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const locale = String(formData.get("locale") ?? "en") === "fr" ? "fr" : "en";
  const t = {
    err: locale === "fr" ? "Veuillez corriger les erreurs." : "Please fix the errors.",
    ok: locale === "fr" ? "Merci ! Nous vous contacterons sous 1 jour ouvrable." : "Thanks! We’ll reply within 1 business day.",
    busy: locale === "fr" ? "Trop de tentatives. Réessayez dans quelques minutes." : "Too many attempts. Please try again in a few minutes."
  };

  // Honeypot
  const website2 = String(formData.get("website2") ?? "");
  if (website2.trim().length > 0) {
    return { ok: true, message: t.ok };
  }

  // Time-to-submit
  const startedAtRaw = String(formData.get("startedAt") ?? "");
  const startedAt = Number(startedAtRaw);
  const elapsedMs = Number.isFinite(startedAt) ? Date.now() - startedAt : 0;
  if (elapsedMs > 0 && elapsedMs < 1200) {
    return { ok: true, message: t.ok };
  }

  // Rate limit
  const h = await headers();
  const ip = getIPFromHeaders(h);
  const rl = await checkRateLimit({ key: `contact:${ip}`, limit: 8, windowSeconds: 10 * 60 });
  if (!rl.ok) return { ok: false, message: t.busy };

  const raw = {
    locale,
    businessName: String(formData.get("businessName") ?? ""),
    city: String(formData.get("city") ?? ""),
    services: formData.getAll("services").map(String),
    website: String(formData.get("website") ?? ""),
    hasGbpAccess: String(formData.get("hasGbpAccess") ?? "no"),
    mainGoal: String(formData.get("mainGoal") ?? "new_clients"),
    preferredContact: String(formData.get("preferredContact") ?? "email"),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? "")
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      message: t.err,
      fieldErrors: parsed.error.flatten().fieldErrors
    };
  }

  try {
    await saveLeadToSupabase({
      ...parsed.data,
      meta: {
        ip,
        elapsedMs,
        userAgent: h.get("user-agent") ?? null,
        formId: String(formData.get("formId") ?? "contact-v1")
      }
    });
  } catch (e) {
    console.error("Lead save failed:", e);
    // still return success to user; your business can follow up manually
  }

  return { ok: true, message: t.ok };
}
