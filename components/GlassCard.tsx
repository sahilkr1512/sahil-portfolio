"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

type Props = { children: React.ReactNode; className?: string; glow?: string };

export default function GlassCard({ children, className = "", glow = "rgba(96,165,250,.22)" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sy = useSpring(ry, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(sy, [-1, 1], [5, -5]);
  const rotateY = useTransform(sx, [-1, 1], [-5, 5]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    const r = el?.getBoundingClientRect(); if (!el || !r) return;
    rx.set((e.clientX - r.left) / r.width * 2 - 1);
    ry.set((e.clientY - r.top) / r.height * 2 - 1);
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  const reset = () => { rx.set(0); ry.set(0); };

  return <motion.div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} style={{ rotateX, rotateY, transformPerspective: 900, "--card-glow": glow } as any} whileHover={{ y: -6 }} className={`interactive-glass ${className}`}>
    {children}<span className="glass-sheen" />
  </motion.div>;
}
