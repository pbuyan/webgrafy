"use client";

import { useSyncExternalStore } from "react";

export const CONSENT_STORAGE_KEY = "cookie-consent";

export type ConsentChoice = "accepted" | "declined";
export type ConsentState = ConsentChoice | "none";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY) emitChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function emitChange() {
  for (const listener of listeners) listener();
}

function getConsentState(): ConsentState {
  const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (stored === "accepted" || stored === "declined") return stored;
  return "none";
}

// Stable server snapshots. The banner defaults to "accepted" so it never
// renders during SSR (avoids a flash for returning visitors); analytics
// defaults to "none" so trackers are never emitted before explicit consent.
function getServerSnapshotNone(): ConsentState {
  return "none";
}
function getServerSnapshotAccepted(): ConsentState {
  return "accepted";
}

/** Persist the visitor's choice and notify all subscribers. */
export function setConsent(choice: ConsentChoice) {
  localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  emitChange();
}

/**
 * Subscribe to the visitor's cookie-consent choice.
 *
 * `serverDefault` controls the value used during SSR / initial hydration:
 * pass "none" for consumers that must stay inert until consent is granted
 * (e.g. analytics), and "accepted" for the banner so it doesn't flash for
 * visitors who have already chosen.
 */
export function useConsent(serverDefault: ConsentState = "none"): ConsentState {
  const getServerSnapshot =
    serverDefault === "accepted" ? getServerSnapshotAccepted : getServerSnapshotNone;
  return useSyncExternalStore(subscribe, getConsentState, getServerSnapshot);
}
