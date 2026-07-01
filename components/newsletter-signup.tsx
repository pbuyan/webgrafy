"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function NewsletterSignup({
  locale,
  dict,
  tone = "dark",
  className,
}: {
  locale: Locale;
  dict: SiteDictionary;
  tone?: "dark" | "light";
  className?: string;
}) {
  const n = dict.newsletter;
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const isDark = tone === "dark";
  const inputClass = cn(
    "flex-1 rounded-none border-0 border-b bg-transparent px-0 py-3 outline-none",
    isDark
      ? "border-white/20 text-white placeholder:text-white/40 focus:border-white/50"
      : "border-ink/20 text-ink placeholder:text-ink-subtle focus:border-ink/50",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!isValidEmail(email.trim())) {
      setError(n.errors.email);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), website, locale }),
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? n.errors.generic);
        return;
      }

      setSuccess(result.message ?? n.success);
      setEmail("");
    } catch {
      setError(n.errors.generic);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={className}>
      <p
        className={cn(
          "text-xs uppercase tracking-[0.18em]",
          isDark ? "text-white/45" : "text-ink-subtle",
        )}
      >
        {n.eyebrow}
      </p>
      <p
        className={cn(
          "mt-3 text-lg font-semibold tracking-[-0.02em]",
          isDark ? "text-white" : "text-ink-strong",
        )}
      >
        {n.title}
      </p>
      <p className={cn("mt-2 text-sm leading-7", isDark ? "text-white/70" : "text-ink-base")}>
        {n.text}
      </p>
      <form className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end" onSubmit={handleSubmit} noValidate>
        <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="newsletter-website">Leave this field empty</label>
          <input
            id="newsletter-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            {n.placeholder}
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={n.placeholder}
            className={inputClass}
            value={email}
            onChange={(e) => {
              setError(null);
              setEmail(e.target.value);
            }}
          />
        </div>
        <Button
          variant={isDark ? "primary" : "dark"}
          size="sm"
          disabled={loading}
          className="w-full shrink-0 sm:w-auto"
        >
          {loading ? n.sending : n.button}
        </Button>
      </form>
      <div aria-live="polite" role="status" className="mt-3 min-h-5">
        {error ? <p className="text-sm text-red-400">{error}</p> : null}
        {success ? (
          <p className={cn("text-sm", isDark ? "text-green-400" : "text-green-600")}>{success}</p>
        ) : null}
        {!error && !success ? (
          <p className={cn("text-xs", isDark ? "text-white/40" : "text-ink-subtle")}>
            {n.disclaimer}
          </p>
        ) : null}
      </div>
    </div>
  );
}
