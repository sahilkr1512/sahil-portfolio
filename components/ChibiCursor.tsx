"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

export default function ChibiCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
    const current = { ...target };
    const lastCursor = { ...target };

    const onMove = (e: MouseEvent) => {
      // Keep the character close to the pointer, with a small offset so it never hides the cursor.
      target.x = e.clientX + 18;
      target.y = e.clientY + 18;
      lastCursor.x = e.clientX;
      lastCursor.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      // Smooth spring-like interpolation. Higher value = more responsive, while still avoiding jumps.
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;

      if (ref.current) {
        const dx = lastCursor.x - current.x;
        const dy = lastCursor.y - current.y;
        const tilt = Math.max(-8, Math.min(8, dx * 0.035));

        ref.current.style.transform =
          `translate3d(${current.x}px, ${current.y}px, 0) rotate(${tilt}deg)`;
        ref.current.style.setProperty(
          "--look-x",
          `${Math.max(-4, Math.min(4, dx * 0.045))}px`,
        );
        ref.current.style.setProperty(
          "--look-y",
          `${Math.max(-3, Math.min(3, dy * 0.035))}px`,
        );
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="pixel-character" aria-hidden="true">
      <div className="pixel-speech">I AM FOLLOWING YOU</div>
      
      <div className="pixel-shadow" />
      <div className="pixel-arm pixel-arm-left" />
      <div className="pixel-arm pixel-arm-right" />
      <div className="pixel-leg pixel-leg-left" />
      <div className="pixel-leg pixel-leg-right" />
      <div className="pixel-body"><span className="pixel-badge">SK</span></div>
      <div className="pixel-head">
        <div className="pixel-hair" />
        <div className="pixel-face">
          <span className="pixel-eye eye-left" />
          <span className="pixel-eye eye-right" />
          <span className="pixel-mouth" />
        </div>
      </div>
    </div>
  );
}
