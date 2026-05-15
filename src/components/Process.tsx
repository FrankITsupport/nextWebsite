import { CheckCircle, ClipboardList, FileSearch, Layers, PackageCheck, Paintbrush, PenTool, Printer, Ruler, Truck, Wrench } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Client brief and objectives',
    desc: 'We clarify event goals, dates, location, brand requirements, quantities, approvals, and site expectations.',
    phase: 'Brief',
  },
  {
    icon: PenTool,
    title: 'Concept and design development',
    desc: 'We translate the brief into layouts, artwork direction, build approach, and visual presentation where required.',
    phase: 'Design',
  },
  {
    icon: Ruler,
    title: 'Technical drawings and measurements',
    desc: 'Where needed, we define dimensions, materials, fixing details, structural logic, and production-ready specifications.',
    phase: 'Plan',
  },
  {
    icon: Wrench,
    title: 'Workshop fabrication',
    desc: 'Frames, counters, panels, stands, props, letters, display structures, and custom elements move into fabrication.',
    phase: 'Build',
  },
  {
    icon: Printer,
    title: 'Large-format printing',
    desc: 'Graphics, backdrops, vinyls, banners, wall skins, event panels, and brand visuals are produced to specification.',
    phase: 'Print',
  },
  {
    icon: Paintbrush,
    title: 'Painting, branding, and finishing',
    desc: 'Fabricated pieces are finished, branded, cleaned, aligned, and prepared for client-facing presentation.',
    phase: 'Finish',
  },
  {
    icon: FileSearch,
    title: 'Quality control checks',
    desc: 'We review print quality, finishing, branding accuracy, completeness, fit, and readiness before dispatch.',
    phase: 'QC',
  },
  {
    icon: Truck,
    title: 'Loading and dispatch',
    desc: 'Elements are packed, loaded, protected, and moved to site with the installation plan in mind.',
    phase: 'Logistics',
  },
  {
    icon: Layers,
    title: 'Site installation',
    desc: 'The team coordinates setup, alignment, placement, touch-ups, and site adjustments for the final environment.',
    phase: 'Install',
  },
  {
    icon: PackageCheck,
    title: 'Final setup and handover',
    desc: 'We confirm completion with the client or site lead so the space is ready for the event, launch, or activation.',
    phase: 'Handover',
  },
];

const proofPoints = [
  'One coordinated production process',
  'Workshop and site execution visibility',
  'Quality checks before dispatch',
  'Built for urgent corporate timelines',
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#e9efe6] py-24 text-[#0e0f0e]">
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,#0e0f0e_1px,transparent_1px),linear-gradient(0deg,#0e0f0e_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute left-0 top-0 h-full w-1/3 bg-[linear-gradient(90deg,rgba(197,225,57,0.18),rgba(197,225,57,0))]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative mb-12 grid gap-8 lg:grid-cols-[0.74fr_0.52fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C5E139]" />
              <span className="text-[#236111] text-xs font-black tracking-[0.25em] uppercase">Process Proof</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0e0f0e] mb-6">
              From brief to build{' '}
              <span className="text-[#236111]">to installation</span>
            </h2>
          </div>
          <p className="text-[#334032] text-base md:text-lg leading-8 max-w-2xl lg:ml-auto">
            Finished photos matter, but corporate buyers also need confidence in the process behind them. WNG manages the practical steps that turn a brief into a physical brand environment on site.
          </p>
        </div>

        <div className="relative mb-10 grid gap-px border border-[#0e0f0e]/10 bg-[#0e0f0e]/10 md:grid-cols-4">
          {proofPoints.map((item) => (
            <div key={item} className="flex items-center gap-3 bg-[#f8fbf3] p-5">
              <CheckCircle size={18} className="shrink-0 text-[#236111]" />
              <span className="text-sm font-bold text-[#334032]">{item}</span>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-8 right-8 top-1/2 hidden h-1 -translate-y-1/2 bg-[linear-gradient(90deg,#236111,#00A6E0,#236111)] opacity-30 lg:block" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLower = index % 2 === 1;

            return (
              <article
                key={step.title}
                className={`group relative bg-[#f8fbf3] p-5 shadow-[0_18px_50px_rgba(14,15,14,0.10)] ring-1 ring-[#0e0f0e]/10 transition-transform duration-300 hover:-translate-y-1 ${
                  isLower ? 'lg:mt-24' : 'lg:mb-24'
                }`}
              >
                <div className="absolute left-1/2 top-full hidden h-24 w-px -translate-x-1/2 bg-[#0e0f0e]/15 lg:block" />
                {isLower && <div className="absolute bottom-full left-1/2 hidden h-24 w-px -translate-x-1/2 bg-[#0e0f0e]/15 lg:block" />}
                <div className="absolute -top-3 left-5 bg-[#0e0f0e] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#C5E139]">
                  {step.phase}
                </div>

                <div className="mb-6 flex items-start justify-between gap-4 pt-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#0e0f0e]/10 bg-[#e9efe6]">
                    <Icon size={22} className="text-[#236111]" />
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-black leading-none text-[#0e0f0e]/12">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <h3 className="text-lg font-black leading-snug text-[#0e0f0e] transition-colors duration-200 group-hover:text-[#236111]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#4d594b]">{step.desc}</p>
              </article>
            );
          })}
          </div>
        </div>

        <div className="relative mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#0e0f0e]/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm leading-6 text-[#4d594b]">
            This process is what separates WNG from a basic print supplier: production planning, fabrication control, print quality, logistics, site setup, and final handover are treated as one connected delivery system.
          </p>
          <a
            href="#final-cta"
            className="inline-flex items-center justify-center bg-[#C5E139] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#0e0f0e] transition-colors duration-200 hover:bg-[#d4f04a]"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
