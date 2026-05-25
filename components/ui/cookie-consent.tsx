"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";

const STORAGE_KEY = "cookie-consent";

type ConsentChoice = "accepted" | "declined";
type ConsentState = ConsentChoice | "none";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) emitChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function getConsentState(): ConsentState {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "accepted" || stored === "declined") return stored;
  return "none";
}

/** Hide the banner during SSR; client snapshot reads localStorage. */
function getServerConsentState(): ConsentState {
  return "accepted";
}

export function CookieConsent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: SiteDictionary;
}) {
  const consent = useSyncExternalStore(
    subscribe,
    getConsentState,
    getServerConsentState,
  );
  const c = dict.cookieConsent;
  const visible = consent === "none";

  function dismiss(choice: ConsentChoice) {
    localStorage.setItem(STORAGE_KEY, choice);
    emitChange();
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={c.message}
      className={cn(
        "fixed bottom-0 inset-x-0 z-40",
        "border-t border-white/10 bg-pitch/95 backdrop-blur-md",
        "px-4 py-4 sm:px-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-white/75 max-w-2xl">
          {c.message}{" "}
          <Link
            href={`/${locale}/privacy`}
            className="text-brand underline-offset-2 hover:underline"
          >
            {c.privacyLinkText}
          </Link>
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => dismiss("declined")}
            className="text-xs uppercase tracking-[0.16em] text-white/50 hover:text-white/80 transition-colors"
          >
            {c.decline}
          </button>
          <button
            type="button"
            onClick={() => dismiss("accepted")}
            className="inline-flex items-center rounded-full bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink hover:bg-brand-light transition-colors"
          >
            {c.accept}
          </button>
          <button
            type="button"
            onClick={() => dismiss("declined")}
            aria-label="Close"
            className="text-white/40 hover:text-white/70 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
