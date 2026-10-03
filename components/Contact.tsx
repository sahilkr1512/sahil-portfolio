"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Sparkles } from "lucide-react";
import { personalInfo as p } from "@/data/portfolio";

export default function Contact() {
  const [err, setErr] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const x: Record<string, string> = {};
    if (!d.name.trim()) x.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(d.email)) x.email = "Enter a valid email.";
    if (d.message.trim().length < 10) x.message = "Message needs at least 10 characters.";
    setErr(x); if (Object.keys(x).length) return;
    window.location.href = `mailto:${p.email}?subject=${encodeURIComponent("Portfolio message from " + d.name)}&body=${encodeURIComponent(d.message + "\n\n" + d.email)}`;
    setSent(true);
  };
  const cls = "contact-input w-full rounded-xl border border-line bg-card px-4 py-3 outline-none transition focus:border-acc focus:ring-2 focus:ring-acc/30";
  return (
    <div className="contact-wrap">
      <motion.div className="contact-intro" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .6 }}>
        <div className="contact-orb"><Mail size={26} /></div>
        <h3>Let&apos;s build something useful.</h3>
        <p>Have a project, internship opportunity, or AI/data problem to discuss? Send me a message and let&apos;s connect.</p>
        <a href={`mailto:${p.email}`}><Mail size={16} /> {p.email}</a>
      </motion.div>
      <motion.form onSubmit={submit} noValidate className="max-w-xl space-y-4 contact-form" initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: .08 } } }}>
        {(["name", "email", "message"] as const).map((k) => (
          <motion.div key={k} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
            <label htmlFor={k} className="mb-1.5 block text-sm capitalize text-mute">{k}</label>
            {k === "message" ? <textarea id={k} name={k} rows={5} className={cls} aria-invalid={!!err[k]} /> : <input id={k} name={k} type={k === "email" ? "email" : "text"} className={cls} aria-invalid={!!err[k]} />}
            {err[k] && <p role="alert" className="mt-1 text-sm text-red-400">{err[k]}</p>}
          </motion.div>
        ))}
        <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-3">
          <button className="contact-send rounded-xl bg-fg px-5 py-3 font-medium text-bg"><Send size={16} /> Send message</button>
          <a href={`mailto:${p.email}`} className="contact-email rounded-xl border border-line px-5 py-3 font-medium"><Sparkles size={16} /> Email me</a>
        </motion.div>
        {sent && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="status" className="text-sm text-mute">Opening your mail app...</motion.p>}
      </motion.form>
    </div>
  );
}
