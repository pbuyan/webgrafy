"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";

const initialState = {
  name: "",
  businessName: "",
  email: "",
  service: "",
  message: "",
  website: "", // honeypot — must stay empty for real users
};

export function ContactBlock({
  locale,
  dict,
  id,
  title,
  text,
}: {
  locale: Locale;
  dict: SiteDictionary;
  id?: string;
  title?: string;
  text?: string;
}) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Something went wrong.");
        return;
      }

      setSuccess(result.message ?? dict.contactBlock.form.success);
      setForm(initialState);
    } catch {
      setError("Something went wrong while sending your inquiry.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id={id} className="bg-pitch py-20 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">{dict.contactBlock.eyebrow}</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl">
              {title ?? dict.contactBlock.title}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">{text ?? dict.contactBlock.text}</p>
            <div className="space-y-5 text-sm text-white/72">
              <p className="mt-3 text-brand">{dict.common.replyWindow}</p>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-6">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="name"
                    required
                    className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/45"
                    placeholder={dict.contactBlock.form.name}
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  />
                  <input
                    name="email"
                    required
                    className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/45"
                    placeholder={dict.contactBlock.form.email}
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="businessName"
                    className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/45"
                    placeholder={dict.contactBlock.form.businessName}
                    value={form.businessName}
                    onChange={(e) => setForm((prev) => ({ ...prev, businessName: e.target.value }))}
                  />
                  <select
                    name="service"
                    required
                    className={`rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 outline-none ${form.service ? "text-white" : "text-white/45"}`}
                    value={form.service}
                    onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                  >
                    <option value="" className="bg-black text-white">
                      {dict.contactBlock.form.service}
                    </option>
                    {dict.services.map((service) => (
                      <option key={service.title} value={service.title} className="bg-black text-white">
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="message"
                  required
                  className="min-h-[120px] rounded-none border border-white/20 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/45"
                  placeholder={dict.contactBlock.form.message}
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                />
                {error ? <p className="text-sm text-red-400">{error}</p> : null}
                {success ? <p className="text-sm text-green-400">{success}</p> : null}
                <Button variant="primary" className="w-fit" disabled={loading}>
                  {loading ? dict.contactBlock.form.sending : dict.common.sendInquiry}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
