import { cn } from "@/lib/utils";

type BlogCalloutProps = {
  variant?: "tip" | "note" | "warning";
  children: React.ReactNode;
};

const variantStyles = {
  tip: "border-brand/40 bg-brand/10 text-ink-rich",
  note: "border-stroke bg-surface-pale text-ink-base",
  warning: "border-stroke-mid bg-tint-1 text-ink-rich",
};

export function BlogCallout({ variant = "note", children }: BlogCalloutProps) {
  return (
    <aside
      className={cn(
        "my-8 rounded-2xl border px-5 py-4 text-base leading-7",
        variantStyles[variant],
      )}
    >
      {children}
    </aside>
  );
}
