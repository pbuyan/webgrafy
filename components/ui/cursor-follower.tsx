"use client";

import { useEffect, useRef, useState } from "react";

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

export function CursorFollower() {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const flyRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const circleRefPos = useRef({ x: 0, y: 0 });
  const flyRefPos = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isCoarsePointer) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      if (!enabled) {
        circleRefPos.current = { x: event.clientX, y: event.clientY };
        flyRefPos.current = { x: event.clientX, y: event.clientY };
        setEnabled(true);
      }
    };

    const animate = () => {
      circleRefPos.current.x = lerp(circleRefPos.current.x, targetRef.current.x, 0.14);
      circleRefPos.current.y = lerp(circleRefPos.current.y, targetRef.current.y, 0.14);
      flyRefPos.current.x = lerp(flyRefPos.current.x, targetRef.current.x, 0.24);
      flyRefPos.current.y = lerp(flyRefPos.current.y, targetRef.current.y, 0.24);

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circleRefPos.current.x}px, ${circleRefPos.current.y}px, 0)`;
      }

      if (flyRef.current) {
        flyRef.current.style.transform = `translate3d(${flyRefPos.current.x}px, ${flyRefPos.current.y}px, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden lg:block" aria-hidden>
      <div
        ref={circleRef}
        className={`absolute left-0 top-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-white/8 shadow-[0_0_35px_rgba(255,255,255,0.25)] backdrop-blur-[2px] transition-opacity duration-300 ${enabled ? "opacity-100" : "opacity-0"}`}
      />
      <div
        ref={flyRef}
        className={`absolute left-0 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_16px_rgba(187,163,136,0.8)] transition-opacity duration-300 ${enabled ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
