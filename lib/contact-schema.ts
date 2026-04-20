import { z } from "zod";

export const contactSchema = z
  .object({
    locale: z.enum(["en", "fr"]).default("en"),
    businessName: z.string().min(2, "Business name is required"),
    city: z.string().min(2, "City/area is required"),
    services: z
      .array(z.enum(["nails", "lashes", "hair", "laser_skin", "massage", "chiro"]))
      .min(1, "Select at least one service"),
    website: z.string().url("Enter a valid URL").optional().or(z.literal("")),
    hasGbpAccess: z.enum(["yes", "no"]),
    mainGoal: z.enum(["new_clients", "repeat_bookings", "promote_service"]),
    preferredContact: z.enum(["email", "phone", "whatsapp"]),
    email: z.string().email("Enter a valid email").optional().or(z.literal("")),
    phone: z.string().optional().or(z.literal("")),
    message: z.string().max(1000).optional().or(z.literal(""))
  })
  .superRefine((data, ctx) => {
    if (data.preferredContact === "email" && !data.email) {
      ctx.addIssue({ code: "custom", path: ["email"], message: "Email is required" });
    }
    if ((data.preferredContact === "phone" || data.preferredContact === "whatsapp") && !data.phone) {
      ctx.addIssue({ code: "custom", path: ["phone"], message: "Phone number is required" });
    }
  });

export type ContactInput = z.infer<typeof contactSchema>;
