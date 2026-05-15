import { Box, Camera, Eye, Hammer, Layers, MapPin, Printer, Sparkles, Truck, Wrench, Zap } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Event Branding & Corporate Setups',
    desc: 'Branded event environments for stages, entrances, registration areas, photo zones, and guest experience touchpoints.',
    accent: '#C5E139',
  },
  {
    icon: Box,
    title: 'Exhibition Stands & Booth Fabrication',
    desc: 'Custom booths, shell scheme enhancements, counters, product displays, and branded spaces built for professional presentation.',
    accent: '#00A6E0',
  },
  {
    icon: Eye,
    title: 'Stage, Backdrop & Media Walls',
    desc: 'Corporate stages, press backdrops, photo-op walls, media briefing setups, and camera-ready scenic structures.',
    accent: '#C5E139',
  },
  {
    icon: Zap,
    title: 'Brand Activations & Product Launches',
    desc: 'High-impact branded setups for launches, mall activations, outdoor campaigns, sampling zones, and roadshows.',
    accent: '#00A6E0',
  },
  {
    icon: MapPin,
    title: 'Signage, Wayfinding & Environmental Branding',
    desc: 'Indoor and outdoor signage, directional systems, 3D letters, acrylic signs, vinyl graphics, and branded panels.',
    accent: '#C5E139',
  },
  {
    icon: Printer,
    title: 'Large-Format Printing & Graphics Production',
    desc: 'Print production for backdrops, banners, panels, vinyl graphics, wall branding, floor graphics, and event skins.',
    accent: '#00A6E0',
  },
  {
    icon: Hammer,
    title: 'Custom Displays, Props & Fabricated Structures',
    desc: 'Tailor-made displays, themed props, counters, plinths, arches, showcases, and reusable fabricated structures.',
    accent: '#C5E139',
  },
  {
    icon: Truck,
    title: 'Installation, Logistics & Site Execution',
    desc: 'Delivery, site coordination, installation, finishing, dismantling, and return handling by experienced setup teams.',
    accent: '#00A6E0',
  },
  {
    icon: Wrench,
    title: 'Workshop Fabrication & Production Process',
    desc: 'In-house fabrication, painting, vinyl application, assembly, finishing, and quality control before dispatch.',
    accent: '#C5E139',
  },
  {
    icon: Camera,
    title: 'Premium Private & Lifestyle Events',
    desc: 'High-finish branded and themed environments for lifestyle events, photo moments, entrances, and premium guest experiences.',
    accent: '#00A6E0',
  },
];

const buyerTypes = [
  { label: 'Corporate teams', value: 'Events, conferences, launches' },
  { label: 'Agencies & planners', value: 'Production and site execution' },
  { label: 'Procurement teams', value: 'Clear scope, delivery, handover' },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#0e0f0e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_0.55fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C5E139]" />
              <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">Browse by Capability</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Find the type of brand environment{' '}
              <span className="text-[#C5E139]">you need built</span>
            </h2>
          </div>
          <p className="text-white/66 text-base md:text-lg leading-8 max-w-2xl lg:ml-auto">
            Corporate buyers usually search by requirement, not by old project names. Use these capability areas to understand where WNG can support your event, exhibition, launch, activation, signage, print, fabrication, or installation brief.
          </p>
        </div>

        <div className="mb-8 grid gap-4 border-y border-white/10 py-6 md:grid-cols-3">
          {buyerTypes.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <Sparkles size={18} className="mt-1 shrink-0 text-[#C5E139]" />
              <div>
                <p className="font-bold text-white">{item.label}</p>
                <p className="mt-1 text-sm text-white/55">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 overflow-hidden">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <a
                key={service.title}
                href="#final-cta"
                className="group relative min-h-[260px] overflow-hidden bg-[#0e0f0e] p-6 transition-colors duration-300 hover:bg-[#141816]"
              >
                <div
                  className="absolute left-0 right-0 top-0 h-0.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: service.accent }}
                />
                <div className="mb-5 flex items-center justify-between gap-4">
                  <Icon size={24} style={{ color: service.accent }} />
                  <span className="text-xs font-black text-white/18">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mb-3 text-base font-black leading-snug text-white transition-colors duration-200 group-hover:text-[#C5E139]">
                  {service.title}
                </h3>
                <p className="text-sm leading-6 text-white/56">{service.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#C5E139]">
                  Request this
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm leading-6 text-white/55">
            Each capability can be supported with concept development, technical production advice, materials selection, fabrication, print production, logistics, installation, and final handover.
          </p>
          <a
            href="#final-cta"
            className="inline-flex items-center justify-center bg-[#C5E139] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#0e0f0e] transition-colors duration-200 hover:bg-[#d4f04a]"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
