const testimonials = [
  {
    quote: "Woodnork Green delivered within a tight timeline and maintained strong finishing quality across setup. The stage and backdrop execution was flawless.",
    name: "Corporate Events Director",
    role: "Leading Financial Institution, Nairobi",
    initials: "CE",
    color: "#C5E139",
  },
  {
    quote: "From first concept sketch to final installation, every step was professional, creative, and stress-free. Woodnork Green understood our brand vision immediately.",
    name: "Brand Manager",
    role: "International Technology Company",
    initials: "BM",
    color: "#00A6E0",
  },
  {
    quote: "The exhibition stand they built for our product launch generated more engagement than any previous event. Truly spectacular work and reliable execution.",
    name: "Marketing Lead",
    role: "NGO / Development Organization",
    initials: "ML",
    color: "#C5E139",
  },
];

const clientLogos = ['MICROSOFT', 'NCBA', 'MASTERCARD', 'AGRA', 'BRITAM', 'ISUZU', "L'OREAL", 'KWAL', 'IFC', 'JUBILEE'];

export default function Clients() {
  return (
    <section className="py-28 bg-[#0e0f0e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Client Logo Wall */}
        <div className="mb-20">
          <p className="text-center text-[#77788A] text-xs tracking-[0.25em] uppercase font-bold mb-8">
            Trusted By Leading Brands & Institutions
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-[#77788A]/40 font-black text-base tracking-wider hover:text-[#77788A]/70 transition-colors duration-200 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C5E139]" />
            <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">Client Stories</span>
            <div className="h-px w-10 bg-[#C5E139]" />
          </div>
          <h2 className="text-4xl font-black">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#111211] rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-colors duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={t.color}>
                    <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-[#b0b1b0] text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#0e0f0e] font-black text-sm"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-[#77788A] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
