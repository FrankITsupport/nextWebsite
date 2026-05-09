const links = {
  Services: ['Event Branding', 'Exhibition Stands', 'Stage & Backdrop', 'Brand Activations', 'Signage & Wayfinding', 'Print Production'],
  Company: ['About Woodnork Green', 'Our Process', 'Portfolio', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0b0a] border-t border-white/5 pt-16 pb-8">
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
              {['in', 'ig', 'fb', 'x'].map((s) => (
                <button
                  key={s}
                  className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-[#77788A] hover:bg-[#C5E139] hover:text-[#0e0f0e] transition-all duration-200 text-xs font-bold uppercase"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#77788A] text-sm hover:text-[#C5E139] transition-colors duration-200">
                      {item}
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
