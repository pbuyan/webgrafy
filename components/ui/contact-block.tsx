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
  website: "", // honeypot — must stay empty for real users
};

type ValidatedField = "name" | "email" | "service" | "message";
type FieldErrors = Partial<Record<ValidatedField, string>>;

const inputClass =
  "rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white outline-none focus:border-white/50";
const labelClass = "text-xs uppercase tracking-[0.16em] text-white/55";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

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
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const errors = dict.contactBlock.form.errors;

  function clearFieldError(field: ValidatedField) {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (form.name.trim().length < 2) next.name = errors.name;
    if (!form.email.trim() || !isValidEmail(form.email.trim())) next.email = errors.email;
    if (!form.service) next.service = errors.service;
    if (form.message.trim().length < 10) next.message = errors.message;
    return next;
  }

  function fieldProps(field: ValidatedField, inputId: string) {
    const message = fieldErrors[field];
    return {
      id: inputId,
      "aria-invalid": message ? true : undefined,
      "aria-describedby": message ? `${inputId}-error` : undefined,
    } as const;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    setFieldErrors({});
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? errors.generic);
        return;
      }

      setSuccess(result.message ?? dict.contactBlock.form.success);
      setForm(initialState);
    } catch {
      setError(errors.generic);
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
              <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
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
                  <div className="grid gap-1">
                    <label htmlFor="contact-name" className={labelClass}>
                      {dict.contactBlock.form.name}
                    </label>
                    <input
                      {...fieldProps("name", "contact-name")}
                      name="name"
                      required
                      autoComplete="name"
                      className={inputClass}
                      value={form.name}
                      onChange={(e) => {
                        clearFieldError("name");
                        setForm((prev) => ({ ...prev, name: e.target.value }));
                      }}
                    />
                    {fieldErrors.name ? (
                      <p id="contact-name-error" className="text-sm text-red-400" role="alert">
                        {fieldErrors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="grid gap-1">
                    <label htmlFor="contact-email" className={labelClass}>
                      {dict.contactBlock.form.email}
                    </label>
                    <input
                      {...fieldProps("email", "contact-email")}
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => {
                        clearFieldError("email");
                        setForm((prev) => ({ ...prev, email: e.target.value }));
                      }}
                    />
                    {fieldErrors.email ? (
                      <p id="contact-email-error" className="text-sm text-red-400" role="alert">
                        {fieldErrors.email}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid gap-1">
                    <label htmlFor="contact-business" className={labelClass}>
                      {dict.contactBlock.form.businessName}
                    </label>
                    <input
                      id="contact-business"
                      name="businessName"
                      autoComplete="organization"
                      className={inputClass}
                      value={form.businessName}
                      onChange={(e) => setForm((prev) => ({ ...prev, businessName: e.target.value }))}
                    />
                  </div>
                  <div className="grid gap-1">
                    <label htmlFor="contact-service" className={labelClass}>
                      {dict.contactBlock.form.service}
                    </label>
                    <select
                      {...fieldProps("service", "contact-service")}
                      name="service"
                      required
                      className={`${inputClass} ${form.service ? "text-white" : "text-white/45"}`}
                      value={form.service}
                      onChange={(e) => {
                        clearFieldError("service");
                        setForm((prev) => ({ ...prev, service: e.target.value }));
                      }}
                    >
                      <option value="" disabled className="bg-black text-white/45">
                        —
                      </option>
                      {dict.services.map((service) => (
                        <option key={service.title} value={service.title} className="bg-black text-white">
                          {service.title}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.service ? (
                      <p id="contact-service-error" className="text-sm text-red-400" role="alert">
                        {fieldErrors.service}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="grid gap-1">
                  <label htmlFor="contact-message" className={labelClass}>
                    {dict.contactBlock.form.message}
                  </label>
                  <textarea
                    {...fieldProps("message", "contact-message")}
                    name="message"
                    required
                    className="min-h-[120px] rounded-none border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-white/50"
                    value={form.message}
                    onChange={(e) => {
                      clearFieldError("message");
                      setForm((prev) => ({ ...prev, message: e.target.value }));
                    }}
                  />
                  {fieldErrors.message ? (
                    <p id="contact-message-error" className="text-sm text-red-400" role="alert">
                      {fieldErrors.message}
                    </p>
                  ) : null}
                </div>
                <div aria-live="polite" role="status">
                  {error ? <p className="text-sm text-red-400">{error}</p> : null}
                  {success ? <p className="text-sm text-green-400">{success}</p> : null}
                </div>
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
