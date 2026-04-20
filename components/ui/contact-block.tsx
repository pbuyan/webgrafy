"use client";

import { useState } from "react";
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
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.75rem] border border-[#d9d0c5] bg-[#111111] px-8 py-12 text-white shadow-[0_30px_100px_rgba(0,0,0,0.18)] lg:px-14 lg:py-16">
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/40">{dict.contactBlock.eyebrow}</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                {dict.contactBlock.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">{dict.contactBlock.text}</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-black shadow-[0_20px_50px_rgba(0,0,0,0.24)]">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <input
                  className="rounded-2xl border border-black/10 px-4 py-3 outline-none"
                  placeholder={dict.contactBlock.form.name}
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                />
                <input
                  className="rounded-2xl border border-black/10 px-4 py-3 outline-none"
                  placeholder={dict.contactBlock.form.businessName}
                  value={form.businessName}
                  onChange={(e) => setForm((prev) => ({ ...prev, businessName: e.target.value }))}
                />
                <input
                  className="rounded-2xl border border-black/10 px-4 py-3 outline-none"
                  placeholder={dict.contactBlock.form.email}
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                />
                <select
                  className="rounded-2xl border border-black/10 px-4 py-3 outline-none"
                  value={form.service}
                  onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                >
                  <option value="">{dict.contactBlock.form.service}</option>
                  {dict.services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                <textarea
                  className="min-h-[120px] rounded-2xl border border-black/10 px-4 py-3 outline-none"
                  placeholder={dict.contactBlock.form.message}
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                />

                {error ? <p className="text-sm text-red-600">{error}</p> : null}
                {success ? <p className="text-sm text-green-700">{success}</p> : null}

                <Button className="rounded-2xl" disabled={loading}>
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
