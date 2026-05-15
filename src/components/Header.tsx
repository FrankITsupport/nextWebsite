'use client'

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const navLinks = [
  { label: 'Work', href: '#featured-projects' },
  { label: 'Capabilities', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why WNG', href: '#why-choose' },
  { label: 'Portfolio', href: '/portfolio/' },
];

export default function Header({ scrolled }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl border transition-all duration-300 ${
          scrolled || open
            ? 'border-white/10 bg-[#0e0f0e]/96 shadow-2xl'
            : 'border-white/15 bg-[#0e0f0e]/78 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-5">
          <a href="#" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src="/assets/logo/logo1.png"
              alt="Woodnork Green Branding, Print & Promo"
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden items-center bg-black/20 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border-l border-white/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white/78 transition-colors duration-200 first:border-l-0 hover:bg-white/5 hover:text-[#C5E139]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#final-cta"
              className="inline-flex items-center bg-[#C5E139] px-5 py-3 text-sm font-black uppercase tracking-wide text-[#0e0f0e] transition-colors duration-200 hover:bg-[#d4f04a]"
            >
              Request Quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-white transition-colors hover:border-[#C5E139] hover:text-[#C5E139] md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-[#0e0f0e] md:hidden">
            <nav className="grid">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white/80 hover:bg-white/5 hover:text-[#C5E139]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#final-cta"
                onClick={() => setOpen(false)}
                className="bg-[#C5E139] px-5 py-4 text-center text-sm font-black uppercase tracking-wide text-[#0e0f0e]"
              >
                Request Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
