const steps = [
  {
    num: '01',
    title: 'Brief',
    desc: 'We receive the client brief, clarify objectives, timelines, site details, brand requirements, and project expectations.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We develop concepts, artwork, renders, layouts, and technical direction based on the approved brief.',
  },
  {
    num: '03',
    title: 'Costing',
    desc: 'We prepare a clear quotation based on scope, materials, fabrication, print requirements, logistics, and installation needs.',
  },
  {
    num: '04',
    title: 'Production',
    desc: 'Once approved, the project moves into fabrication, printing, branding, finishing, and preparation.',
  },
  {
    num: '05',
    title: 'Quality Check',
    desc: 'We inspect the work before dispatch to confirm quality, branding accuracy, finish, completeness, and readiness.',
  },
  {
    num: '06',
    title: 'Delivery & Installation',
    desc: 'We coordinate dispatch, delivery, site setup, installation, and any required adjustments.',
  },
  {
    num: '07',
    title: 'Handover',
    desc: 'We confirm final delivery, site completion, and project closure with the client or assigned representative.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-[#0e0f0e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#C5E139]" />
            <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">How We Work</span>
            <div className="h-px w-10 bg-[#C5E139]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Structured Project{' '}
            <span className="text-[#C5E139]">Workflow</span>
          </h2>
          <p className="text-[#77788A] text-lg max-w-3xl mx-auto">
            We use a structured project workflow to reduce ambiguity, improve execution, and help clients move from idea to delivery with clarity.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-[#C5E139] via-[#00A6E0] to-[#C5E139] opacity-20 hidden lg:block" />

          <div className="space-y-3">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-xl border border-white/10 group-hover:border-[#C5E139]/50 flex flex-col items-center justify-center transition-colors duration-300 bg-[#111211] z-10">
                  <span className="text-[10px] text-[#77788A] font-bold tracking-wider">{step.num}</span>
                  <div
                    className="w-3 h-3 rounded-full mt-1"
                    style={{ backgroundColor: i % 2 === 0 ? '#C5E139' : '#00A6E0' }}
                  />
                </div>
                <div className="flex-1 bg-[#111211] rounded-xl p-6 border border-white/5 group-hover:border-white/10 transition-colors duration-300">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C5E139] transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-[#77788A] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
