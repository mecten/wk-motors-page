"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Performance", href: "#performance" },
  { label: "Werkstatt", href: "#werkstatt" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Top red line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#e30000] to-transparent" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img
            src="http://wk-motors.de/wp-content/uploads/2014/06/logo-kontakt.jpg"
            alt="WK Motors Emblem"
            className="h-9 w-9 object-contain"
          />
          <img
            src="http://wk-motors.de/wp-content/uploads/2014/05/head-logo2.png"
            alt="WK Motors"
            className="h-7 w-auto brightness-0 invert hidden sm:block"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.3em] uppercase text-zinc-500 hover:text-white transition-colors font-mono"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4960079395373"
            className="ml-2 px-5 py-2 border border-[#e30000]/50 text-[#e30000] text-xs tracking-widest uppercase font-mono hover:bg-[#e30000] hover:text-white hover:border-[#e30000] transition-all"
          >
            Anrufen
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#080808]/98 border-t border-white/5 px-8 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-[0.3em] uppercase text-zinc-500 hover:text-white transition-colors font-mono"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4960079395373"
            className="text-xs tracking-widest uppercase font-mono text-[#e30000] border border-[#e30000]/50 px-5 py-3 text-center"
          >
            06007 / 939 53 73
          </a>
        </div>
      )}
    </header>
  );
}
