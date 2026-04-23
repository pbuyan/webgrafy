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
};

export function ContactBlock({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
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
    <section className="bg-[#0c0c0c] py-20 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">{dict.contactBlock.eyebrow}</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl">
              {dict.contactBlock.title}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">{dict.contactBlock.text}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
            <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-6">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/45"
                    placeholder={dict.contactBlock.form.name}
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  />
                  <input
                    className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/45"
                    placeholder={dict.contactBlock.form.email}
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/45"
                    placeholder={dict.contactBlock.form.businessName}
                    value={form.businessName}
                    onChange={(e) => setForm((prev) => ({ ...prev, businessName: e.target.value }))}
                  />
                  <select
                    className="rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none"
                    value={form.service}
                    onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                  >
                    <option value="" className="text-black">{dict.contactBlock.form.service}</option>
                    {dict.services.map((service) => (
                      <option key={service.title} value={service.title} className="text-black">
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  className="min-h-[120px] rounded-none border border-white/20 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/45"
                  placeholder={dict.contactBlock.form.message}
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                />
                {error ? <p className="text-sm text-red-400">{error}</p> : null}
                {success ? <p className="text-sm text-green-400">{success}</p> : null}
                <Button variant="primary" className="w-fit rounded-none" disabled={loading}>
                  {loading ? dict.contactBlock.form.sending : dict.common.sendInquiry}
                </Button>
              </form>
            </div>

            <div className="space-y-5 text-sm text-white/72">
              <p>{dict.common.replyWindow}</p>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4" />
                <span>{dict.contactBlock.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4" />
                <span>{dict.contactBlock.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>{dict.contactBlock.location}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
