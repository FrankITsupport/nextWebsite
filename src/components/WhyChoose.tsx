import { ArrowRight, Award, CheckCircle, Clock, Factory, ShieldCheck, Truck, Users } from 'lucide-react';

const trustFactors = [
  {
    icon: Factory,
    title: 'In-house production control',
    description: 'Workshop capability gives WNG better control over fabrication, branding, finishing, checks, and dispatch readiness.',
    metric: 'Workshop-led',
  },
  {
    icon: ShieldCheck,
    title: 'Quality before dispatch',
    description: 'Projects are reviewed for finish, branding accuracy, print quality, completeness, and site readiness before delivery.',
    metric: 'QC checks',
  },
  {
    icon: Truck,
    title: 'Delivery and site execution',
    description: 'The team coordinates delivery, installation, adjustments, dismantling, and handover so clients avoid disconnected vendors.',
    metric: 'Site support',
  },
  {
    icon: Users,
    title: 'Corporate buyer understanding',
    description: 'WNG works with marketing teams, procurement departments, agencies, NGOs, institutions, and premium event teams.',
    metric: 'Multi-sector',
  },
  {
    icon: Clock,
    title: 'Built for urgent timelines',
    description: 'The workflow supports projects with fast approvals, fixed event dates, multiple suppliers, and tight production windows.',
    metric: 'Fast turnarounds',
  },
  {
    icon: Award,
    title: 'Design-to-production thinking',
    description: 'Ideas are considered through materials, build method, transport, installation, visibility, and final presentation.',
    metric: 'Practical design',
  },
];

const confidenceStats = [
  { value: '10+', label: 'Years of delivery experience' },
  { value: '500+', label: 'Projects delivered' },
  { value: '1', label: 'Coordinated production process' },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#0e0f0e] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_0.55fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C5E139]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5E139]">
                Corporate Trust Factors
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Why serious clients choose{' '}
              <span className="text-[#C5E139]">Woodnork Green</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-white/66 md:text-lg lg:ml-auto">
            Corporate projects require more than attractive visuals. They require production discipline, material understanding, site coordination, reliable delivery, and clear accountability from brief to handover.
          </p>
        </div>

        <div className="mb-8 grid gap-px bg-white/10 md:grid-cols-3">
          {confidenceStats.map((item) => (
            <div key={item.label} className="bg-[#151816] p-6">
              <div className="text-4xl font-black text-[#C5E139]">{item.value}</div>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white/58">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {trustFactors.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="group bg-[#111411] p-7 transition-colors duration-300 hover:bg-[#171b17]">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                    <Icon size={23} className="text-[#C5E139]" />
                  </div>
                  <span className="border border-[#00A6E0]/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#00A6E0]">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white transition-colors duration-200 group-hover:text-[#C5E139]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-px bg-white/10 lg:grid-cols-[0.62fr_0.38fr]">
          <div className="bg-[#151816] p-8">
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle size={20} className="text-[#C5E139]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#C5E139]">Buyer confidence</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              A production partner that understands approvals, deadlines, and site pressure.
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/58">
              WNG is positioned for corporate teams that need a partner who can interpret a brief, advise on production, manage the build, and show up properly on site when the event date is fixed.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 bg-[#1b2119] p-8">
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#C5E139] px-8 py-4 font-black uppercase tracking-wide text-[#0e0f0e] transition-colors duration-200 hover:bg-[#d4f04a]"
            >
              Request a Quote
              <ArrowRight size={18} />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center border border-white/15 px-8 py-4 font-bold uppercase tracking-wide text-white transition-all duration-200 hover:border-[#00A6E0] hover:text-[#00A6E0]"
            >
              View Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
