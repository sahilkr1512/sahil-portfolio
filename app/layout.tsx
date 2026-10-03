import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import { personalInfo as p } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${p.name} | AI/ML & Full Stack Developer`,
  description: "Portfolio of Sahil Kumar featuring AI/ML, RAG, data analytics and full-stack projects.",
  keywords: ["Sahil Kumar", "AI ML Developer", "Full Stack Developer", "RAG", "Python", "Data Analytics"],
  authors: [{ name: p.name }],
  openGraph: { title: `${p.name} | AI/ML & Full Stack Developer`, description: p.tagline, type: "website" },
};

const themeScript = `try{if(localStorage.theme!=="light")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={inter.className}><ScrollProgress /><Background /><Navbar />{children}</body>
    </html>
  );
}
