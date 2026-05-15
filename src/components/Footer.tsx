import { Facebook, Instagram, Linkedin } from 'lucide-react';

const linkGroups = {
  Services: [
    { label: 'Event Branding', href: '#services' },
    { label: 'Exhibition Stands', href: '#services' },
    { label: 'Stage & Backdrop', href: '#services' },
    { label: 'Brand Activations', href: '#services' },
    { label: 'Signage & Wayfinding', href: '#services' },
    { label: 'Print Production', href: '#services' },
  ],
  Company: [
    { label: 'Featured Work', href: '#featured-projects' },
    { label: 'Our Process', href: '#process' },
    { label: 'Why WNG', href: '#why-choose' },
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'Start a Project', href: '#final-cta' },
  ],
  Contact: [
    { label: 'Request a Quote', href: '#final-cta' },
    { label: 'Call +254 780 397 798', href: 'tel:+254780397798' },
    { label: 'Email the Team', href: 'mailto:hey@woodnorkgreen.co.ke' },
  ],
};

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/woodnork-green',
    icon: Linkedin,
    hover: 'hover:border-[#00A6E0] hover:bg-[#00A6E0]',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/woodnorkgreen',
    icon: Instagram,
    hover: 'hover:border-[#C5E139] hover:bg-[#C5E139]',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/woodnorkgreen',
    icon: Facebook,
    hover: 'hover:border-[#C5E139] hover:bg-[#C5E139]',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0b0a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo/logo1.png"
                alt="Woodnork Green Branding, Print & Promo"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-[#77788A] text-sm leading-relaxed mb-5">
              Nairobi-based event branding, fabrication, printing, and creative production partner. Design to installation, delivered with precision.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Woodnork Green on ${social.label}`}
                    title={social.label}
                    className={`flex h-9 w-9 items-center justify-center border border-white/15 bg-white/5 text-white transition-all duration-200 hover:text-[#0e0f0e] ${social.hover}`}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(linkGroups).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[#77788A] text-sm hover:text-[#C5E139] transition-colors duration-200">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#77788A] text-xs">
            &copy; {new Date().getFullYear()} Woodnork Green Ltd. All rights reserved.
          </p>
          <p className="text-[#77788A]/40 text-xs">
            Crafted with precision in Nairobi, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
