'use client'

interface HeaderProps {
  scrolled: boolean;
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'About', href: '#stats' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ scrolled }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0e0f0e]/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/assets/logo/logo1.png" 
            alt="Woodnork Green Branding, Print & Promo" 
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#77788A] hover:text-[#C5E139] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#C5E139] text-[#0e0f0e] text-sm font-bold px-5 py-2.5 rounded hover:bg-[#d4f04a] transition-colors duration-200 tracking-wide"
        >
          Request a Quote
        </a>

        <button className="md:hidden text-white p-1">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
