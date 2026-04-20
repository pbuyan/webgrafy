"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import type { Locale } from "@/lib/routes";
import { submitContact } from "@/app/[locale]/(site)/contact/actions";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const SERVICES = [
  { value: "nails", en: "Nails", fr: "Ongles" },
  { value: "lashes", en: "Lashes", fr: "Cils" },
  { value: "hair", en: "Hair", fr: "Coiffure" },
  { value: "laser_skin", en: "Laser / Skin", fr: "Laser / Peau" },
  { value: "massage", en: "Massage", fr: "Massage" },
  { value: "chiro", en: "Chiro", fr: "Chiro" }
] as const;

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "..." : label}
    </Button>
  );
}

export default function ContactForm({ locale }: { locale: Locale }) {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContact, null);

  const isFr = locale === "fr";
  const t = {
    title: isFr ? "Réservez votre audit gratuit" : "Book your free audit",
    desc: isFr
      ? "Recevez un plan d’action en 5 points adapté à votre salon/clinique."
      : "Get a free 5-point action plan tailored to your salon/clinic.",
    businessName: isFr ? "Nom de l’entreprise" : "Business name",
    city: isFr ? "Ville / secteur" : "City / area",
    services: isFr ? "Services" : "Services",
    website: isFr ? "Site web (optionnel)" : "Website (optional)",
    gbp: isFr ? "Accès à la fiche Google Business Profile ?" : "Do you have access to the Google Business Profile?",
    yes: isFr ? "Oui" : "Yes",
    no: isFr ? "Non" : "No",
    goal: isFr ? "Objectif principal" : "Main goal",
    goalA: isFr ? "Plus de nouveaux clients" : "More new clients",
    goalB: isFr ? "Plus de retours/rendez-vous" : "More repeat bookings",
    goalC: isFr ? "Promouvoir un service" : "Promote a service",
    contactPref: isFr ? "Contact préféré" : "Preferred contact",
    email: isFr ? "Email" : "Email",
    phone: isFr ? "Téléphone" : "Phone",
    whatsapp: isFr ? "WhatsApp" : "WhatsApp",
    message: isFr ? "Message (optionnel)" : "Message (optional)",
    submit: isFr ? "Envoyer" : "Submit"
  };

  useEffect(() => {
    if (!state) return;
    toast({
      title: state.ok ? (isFr ? "Envoyé" : "Sent") : isFr ? "Erreur" : "Error",
      description: state.message,
      variant: state.ok ? "default" : "destructive"
    });
  }, [state, toast, isFr]);

  const fe = state && !state.ok ? state.fieldErrors ?? {} : {};

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription>{t.desc}</CardDescription>
      </CardHeader>

      <CardContent>
        <form action={formAction} className="grid gap-5">
          <input type="hidden" name="locale" value={locale} />

          {/* Spam protection */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website2">Website</label>
            <input id="website2" name="website2" tabIndex={-1} autoComplete="off" />
          </div>
          <input type="hidden" name="startedAt" value={String(Date.now())} />
          <input type="hidden" name="formId" value="contact-v1" />

          <div className="grid gap-2">
            <Label htmlFor="businessName">{t.businessName}</Label>
            <Input id="businessName" name="businessName" placeholder="Ex: Studio Bella" />
            {fe.businessName && <p className="text-sm text-destructive">{fe.businessName[0]}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="city">{t.city}</Label>
            <Input id="city" name="city" placeholder={isFr ? "Ex: Montréal, Laval…" : "e.g., Montreal, Laval…"} />
            {fe.city && <p className="text-sm text-destructive">{fe.city[0]}</p>}
          </div>

          <div className="grid gap-2">
            <Label>{t.services}</Label>
            <div className="grid gap-2 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <label key={s.value} className="flex items-center gap-2 rounded-md border p-3">
                  <input type="checkbox" name="services" value={s.value} className="h-4 w-4" />
                  <span className="text-sm">{isFr ? s.fr : s.en}</span>
                </label>
              ))}
            </div>
            {fe.services && <p className="text-sm text-destructive">{fe.services[0]}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="website">{t.website}</Label>
            <Input id="website" name="website" placeholder="https://..." />
            {fe.website && <p className="text-sm text-destructive">{fe.website[0]}</p>}
          </div>

          <div className="grid gap-2">
            <Label>{t.gbp}</Label>
            <div className="grid gap-2 sm:grid-cols-2">
              <label className="flex items-center gap-2 rounded-md border p-3">
                <input type="radio" name="hasGbpAccess" value="yes" className="h-4 w-4" />
                <span className="text-sm">{t.yes}</span>
              </label>
              <label className="flex items-center gap-2 rounded-md border p-3">
                <input type="radio" name="hasGbpAccess" value="no" className="h-4 w-4" defaultChecked />
                <span className="text-sm">{t.no}</span>
              </label>
            </div>
            {fe.hasGbpAccess && <p className="text-sm text-destructive">{fe.hasGbpAccess[0]}</p>}
          </div>

          <div className="grid gap-2">
            <Label>{t.goal}</Label>
            <select name="mainGoal" className="h-10 rounded-md border bg-background px-3 text-sm">
              <option value="new_clients">{t.goalA}</option>
              <option value="repeat_bookings">{t.goalB}</option>
              <option value="promote_service">{t.goalC}</option>
            </select>
            {fe.mainGoal && <p className="text-sm text-destructive">{fe.mainGoal[0]}</p>}
          </div>

          <div className="grid gap-2">
            <Label>{t.contactPref}</Label>
            <select name="preferredContact" className="h-10 rounded-md border bg-background px-3 text-sm">
              <option value="email">{t.email}</option>
              <option value="phone">{t.phone}</option>
              <option value="whatsapp">{t.whatsapp}</option>
            </select>
            {fe.preferredContact && <p className="text-sm text-destructive">{fe.preferredContact[0]}</p>}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="email">{t.email}</Label>
              <Input id="email" name="email" placeholder="name@email.com" />
              {fe.email && <p className="text-sm text-destructive">{fe.email[0]}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">{t.phone}</Label>
              <Input id="phone" name="phone" placeholder={isFr ? "Ex: 514..." : "e.g., 514..."} />
              {fe.phone && <p className="text-sm text-destructive">{fe.phone[0]}</p>}
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">{t.message}</Label>
            <Textarea id="message" name="message" rows={5} placeholder={isFr ? "Dites-nous en plus…" : "Tell us more…"} />
            {fe.message && <p className="text-sm text-destructive">{fe.message[0]}</p>}
          </div>

          <SubmitButton label={t.submit} />
        </form>
      </CardContent>
    </Card>
  );
}
