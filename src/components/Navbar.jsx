"use client";
import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { site, navLinks } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${scrolled ? "border-line bg-bg/90" : "border-transparent bg-bg/40"}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-semibold text-white">{site.name}</a>
        <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navLinks.map(([label, href]) => (
            <li key={href}><a href={href} className="transition-colors hover:text-white">{label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-muted transition-colors hover:text-white">
            <Github size={20} />
          </a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="text-muted md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line bg-bg/95 px-5 py-3 md:hidden">
          {navLinks.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)} className="block py-2 text-muted hover:text-white">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
