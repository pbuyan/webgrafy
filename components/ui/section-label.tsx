import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-xs uppercase tracking-[0.22em] text-ink-subtle">{children}</p>;
}
