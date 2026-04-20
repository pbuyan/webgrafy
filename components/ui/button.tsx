import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
  size?: "default" | "sm" | "icon";
  asChild?: boolean;
};

export function Button({ className, variant = "default", size = "default", asChild, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors disabled:opacity-50 disabled:pointer-events-none";
  const variants: Record<string, string> = {
    default: "bg-foreground text-background hover:opacity-90",
    ghost: "hover:bg-muted"
  };
  const sizes: Record<string, string> = {
    default: "h-10 px-4",
    sm: "h-9 px-3",
    icon: "h-10 w-10"
  };

  if (asChild) {
    // Simple asChild support for <Link>
    const child = (props as any).children;
    const href = (child?.props?.href as string) ?? undefined;
    if (href) {
      return (
        <Link
          href={href}
          className={cn(base, variants[variant], sizes[size], className)}
        >
          {child.props.children}
        </Link>
      );
    }
  }

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
