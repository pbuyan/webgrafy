import { getSupabaseServerClient } from "@/lib/supabase-server";
import type { ContactInput } from "@/lib/contact-schema";

type LeadMeta = {
  ip: string;
  elapsedMs: number;
  userAgent: string | null;
  formId: string;
};

export async function saveLeadToSupabase(input: ContactInput & { meta: LeadMeta }) {
  const supabase = getSupabaseServerClient();

  const { error } = await supabase.from("leads").insert({
    locale: input.locale,
    business_name: input.businessName,
    city: input.city,
    services: input.services,
    website: input.website || null,
    has_gbp_access: input.hasGbpAccess,
    main_goal: input.mainGoal,
    preferred_contact: input.preferredContact,
    email: input.email || null,
    phone: input.phone || null,
    message: input.message || null,
    meta: input.meta
  });

  if (error) throw error;
}
