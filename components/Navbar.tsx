"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X, Sparkles } from "lucide-react";
import { personalInfo as p } from "@/data/portfolio";
const links = ["about", "projects", "skills", "experience", "education", "contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false); const [dark, setDark] = useState(true); const [active, setActive] = useState("");
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const io = new IntersectionObserver((es) => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(l => { const el = document.getElementById(l); if (el) io.observe(el); }); return () => io.disconnect();
  }, []);
  const toggle = () => { const d = document.documentElement.classList.toggle("dark"); localStorage.theme = d ? "dark" : "light"; setDark(d); };
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"><nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#071329]/65 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">
    <a href="/" className="flex items-center gap-3"><span className="logo-mark">SK</span><span className="hidden font-bold tracking-tight sm:inline">Sahil Kumar</span></a>
    <ul className="hidden items-center gap-1 md:flex">{["home",...links].map(l => <li key={l}><a href={l === "home" ? "#home" : `#${l}`} className={`relative rounded-lg px-3 py-2 text-sm capitalize transition ${active === l ? "text-white" : "text-slate-400 hover:text-white"}`}>{active===l && <motion.span layoutId="navpill" className="absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"/>}{l}</a></li>)}</ul>
    <div className="flex items-center gap-2"><button onClick={toggle} className="min-h-11 min-w-11 rounded-xl p-2 text-slate-300 hover:bg-white/10" aria-label="Toggle theme">{dark?<Sun size={18}/>:<Moon size={18}/>}</button><a href={`mailto:${p.email}`} className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 md:inline-flex"><Sparkles size={15}/> Let&apos;s Connect</a><button onClick={()=>setOpen(!open)} className="min-h-11 min-w-11 rounded-xl p-2 text-slate-300 hover:bg-white/10 md:hidden" aria-label="Menu" aria-expanded={open}>{open?<X/>:<Menu/>}</button></div>
  </nav><AnimatePresence>{open && <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#071329]/95 p-3 backdrop-blur-xl md:hidden">{["home",...links].map(l=><a onClick={()=>setOpen(false)} key={l} href={l==="home"?"#home":`#${l}`} className="block rounded-xl px-4 py-3 capitalize text-slate-200 hover:bg-white/10">{l}</a>)}</motion.div>}</AnimatePresence></header>;
}
