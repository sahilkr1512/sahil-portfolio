"use client";
import { useEffect, useRef } from "react";

export default function Background() {
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!glow.current) return;
      glow.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="aurora aurora-one" /><div className="aurora aurora-two" /><div className="aurora aurora-three" />
      <div className="starfield" />
      <div className="bg-grid" />
      <div ref={glow} className="cursor-glow" />
      <div className="floor-grid" />
    </div>
  );
}
