import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import GlassCard from "@/components/GlassCard";

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="project-detail-main">
      <Link href="/#projects" className="inline-flex items-center gap-1 text-sm text-mute hover:text-fg"><ArrowLeft size={14} /> All projects</Link>
      <GlassCard className="project-detail-card mt-6" glow={p.color}>
        <span className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
        <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: p.color }}>{p.category}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">{p.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-mute">{p.summary}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={p.github || "https://github.com/sahilkr1512"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2.5 font-medium text-bg"><Github size={17} /> View GitHub</a>
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 font-medium hover:bg-line">Live demo <ArrowUpRight size={16} /></a>}
        </div>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">Project Overview</h2>
          <p className="leading-relaxed text-mute">{p.overview}</p>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">Problem Statement</h2>
          <p className="leading-relaxed text-mute">{p.problem}</p>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">Key Features</h2>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-mute marker:text-[var(--pc)]">
            {p.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">How It Works</h2>
          <div className="rounded-xl border border-line bg-fg/[.03] p-4 text-center font-medium leading-relaxed" style={{ borderColor: `${p.color}55` }}>
            {p.workflow}
          </div>
          <p className="mt-4 leading-relaxed text-mute">{p.workflowDescription}</p>
        </section>

        {p.dataset && (
          <section className="mt-10">
            <h2 className="mb-3 text-xl font-semibold">Dataset</h2>
            <p className="leading-relaxed text-mute">{p.dataset}</p>
          </section>
        )}

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">Technologies</h2>
          <ul className="flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-lg border border-line bg-fg/[.04] px-3 py-1.5 text-sm">{t}</li>)}</ul>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">My Role</h2>
          <p className="leading-relaxed text-mute">{p.role}</p>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">Outcome</h2>
          <p className="leading-relaxed text-mute">{p.outcome}</p>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">What I Learned</h2>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-mute marker:text-[var(--pc)]">
            {p.learned.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </GlassCard>
    </main>
  );
}
