"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const SheetContext = React.createContext<{ open: boolean; setOpen: (v: boolean) => void } | null>(null);

export function Sheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>;
}

export function SheetTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) {
  const ctx = React.useContext(SheetContext);
  if (!ctx) return null;

  const onClick = () => ctx.setOpen(true);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as any, { onClick });
  }
  return (
    <button onClick={onClick} className="inline-flex">
      {children}
    </button>
  );
}

export function SheetContent({ side, className, children }: { side?: "right" | "left"; className?: string; children: React.ReactNode }) {
  const ctx = React.useContext(SheetContext);
  if (!ctx) return null;

  if (!ctx.open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => ctx.setOpen(false)} />
      <div
        className={cn(
          "absolute top-0 h-full w-[320px] bg-background p-6 shadow-xl",
          side === "left" ? "left-0" : "right-0",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props} />;
}

export function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("text-lg font-bold", className)} {...props} />;
}
