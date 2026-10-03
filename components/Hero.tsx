"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, Download, Github, Linkedin, MapPin, GraduationCap, Code2 } from "lucide-react";
import { personalInfo as p } from "@/data/portfolio";
import ChibiCursor from "./ChibiCursor";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="hero mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-12 pt-32 sm:px-8 md:grid-cols-[1.05fr_.95fr] md:pt-28">
      <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <div className="status-pill"><span /> Open to Entry-Level Opportunities</div>
        <h1 className="hero-title">Hi, I&apos;m <span className="name-accent">Sahil Kumar</span></h1>
        <h2 className="hero-role">MCA (AI &amp; ML) Student &amp; AI/ML Enthusiast</h2>
        <p className="hero-copy">{p.tagline} My focus is Python, NLP, RAG pipelines, Large Language Models, machine learning and data-driven applications.</p>
        <div className="hero-meta"><span><MapPin size={18} /> {p.location}</span><i /><span><GraduationCap size={18} /> MCA (AI &amp; Machine Learning)</span></div>
        <div className="mt-7 flex flex-wrap gap-3"><a href="#projects" className="primary-btn"><Code2 size={18} /> View Projects <ArrowUpRight size={16} /></a><a href={p.resume} download className="secondary-btn"><Download size={18} /> Download Resume</a></div>
        <div className="social-row"><a href={p.github} target="_blank" rel="noreferrer"><Github size={20} /> GitHub <ArrowUpRight size={15} /></a><a href={p.linkedin} target="_blank" rel="noreferrer"><Linkedin size={20} /> LinkedIn <ArrowUpRight size={15} /></a></div>
        <div className="terminal-card"><div className="terminal-head"><span /><span /><span /><em>sahil@portfolio:~</em></div><div className="terminal-body"><div><p>&gt; MCA (AI &amp; ML) Student <b>|</b> <strong>AI/ML Enthusiast</strong></p><p>&gt; <strong>Building practical AI systems...</strong></p><p>&gt; Data + NLP + intelligent workflows...</p><p>&gt; <span className="cursor-block" /></p></div><div className="terminal-stack"><span>🐍 Python</span><span>🧠 NLP</span><span>🔎 RAG</span><span>✨ LLMs</span><span>📊 Power BI</span></div></div></div>
      </motion.div>

      <motion.div initial={reduce ? false : { opacity: 0, scale: .9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .1 }} className="hero-visual">
        <motion.div className="portrait-ring" whileHover={reduce ? undefined : { scale: 1.06, rotate: 3 }} transition={{ type: "spring", stiffness: 180, damping: 12 }}>
          <div className="portrait photo-hover-target">
            <Image src="/profile.jpg" alt="Sahil Kumar" fill priority sizes="210px" className="object-cover object-top portrait-image" />
            <span className="photo-greeting" role="tooltip">HI, I AM SAHIL KUMAR 👋</span>
          </div>
          <span className="portrait-spark spark-one">✦</span><span className="portrait-spark spark-two">+</span>
        </motion.div>
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-star">✦</div><div className="cursor-orb">⌁</div>
      </motion.div>
      <ChibiCursor />
    </section>
  );
}
