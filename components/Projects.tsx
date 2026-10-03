"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import GlassCard from "./GlassCard";

export default function Projects() {
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [f, setF] = useState("All");
  const list = projects.filter((p) => f === "All" || p.category === f);

  return (
    <>
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {cats.map((c) => (
          <button key={c} onClick={() => setF(c)} aria-pressed={f === c}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${f === c ? "border-cyan-300/60 bg-cyan-300/10 text-white" : "border-white/10 text-slate-400 hover:text-white"}`}>
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div layout key={p.slug} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }}>
              <GlassCard className="project-glass flex h-full flex-col p-6 pt-7" glow={p.color}>
                <span className="absolute inset-x-0 top-0 h-1 rounded-t-[inherit]" style={{ background: `linear-gradient(90deg,${p.color},transparent)` }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: p.color }}>{p.category}</span>
                <h3 className="mt-1 text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-mute">{p.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="glass-chip">{t}</li>)}</ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={`/projects/${p.slug}`}
                    className="relative z-20 inline-flex cursor-pointer items-center gap-1 text-sm font-medium"
                    style={{ color: p.color }}
                    aria-label={`View details for ${p.title}`}
                  >
                    <Sparkles size={14} /> Details <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={p.github || "https://github.com/sahilkr1512"}
                    target="_blank"
                    rel="noopener noreferrer external"
                    onClick={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    className="relative z-20 inline-flex cursor-pointer items-center gap-1 rounded-xl border border-white/10 px-3 py-1.5 text-sm transition hover:bg-white/10"
                    aria-label={`Open GitHub repository for ${p.title}`}
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
