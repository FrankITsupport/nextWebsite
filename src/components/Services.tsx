import { Box, Layers, Zap, Truck, Wrench, Eye, Printer, MapPin, Hammer } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Event Branding & Corporate Setups',
    desc: 'Branded event environments built to give corporate events a polished, visible, and professional presence across stages, entrances, registration areas, photo zones, and guest experience touchpoints.',
    accent: '#C5E139',
  },
  {
    icon: Box,
    title: 'Exhibition Stands & Booth Fabrication',
    desc: 'Custom exhibition booths, shell scheme enhancements, counters, product displays, and branded spaces designed to attract attention, support engagement, and represent brand professionally.',
    accent: '#00A6E0',
  },
  {
    icon: Eye,
    title: 'Stage, Backdrop & Media Walls',
    desc: 'Corporate stages, press backdrops, photo-op walls, media briefing setups, and branded scenic structures fabricated with attention to proportion, finish, visibility, and camera readiness.',
    accent: '#C5E139',
  },
  {
    icon: Zap,
    title: 'Brand Activations & Product Launches',
    desc: 'High-impact branded setups for launches, mall activations, outdoor campaigns, sampling zones, roadshows, and experiential marketing engagements.',
    accent: '#00A6E0',
  },
  {
    icon: MapPin,
    title: 'Signage, Wayfinding & Environmental Branding',
    desc: 'Indoor and outdoor signage, directional systems, branded panels, 3D letters, acrylic signs, vinyl graphics, and environmental branding for clear visibility and professional presentation.',
    accent: '#C5E139',
  },
  {
    icon: Printer,
    title: 'Large-Format Printing & Graphics Production',
    desc: 'High-quality print production for backdrops, banners, panels, vinyl graphics, wall branding, floor graphics, event skins, and campaign materials.',
    accent: '#00A6E0',
  },
  {
    icon: Hammer,
    title: 'Custom Displays, Props & Fabricated Structures',
    desc: 'Tailor-made brand displays, themed props, counters, plinths, arches, product showcases, and fabricated structures built for visual impact and repeated event use.',
    accent: '#C5E139',
  },
  {
    icon: Truck,
    title: 'Installation, Logistics & Site Execution',
    desc: 'Delivery, site coordination, installation, finishing, dismantling, and return handling managed by experienced teams for smooth event execution.',
    accent: '#00A6E0',
  },
  {
    icon: Wrench,
    title: 'Workshop Fabrication & Production',
    desc: 'In-house production capability covering carpentry, metalwork, painting, vinyl application, and quality control — ensuring every element meets specification before it leaves the workshop.',
    accent: '#C5E139',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0e0f0e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#C5E139]" />
            <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">What We Do</span>
            <div className="h-px w-10 bg-[#C5E139]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Complete Range of{' '}
            <span className="text-[#C5E139]">Event Branding</span>
            {' '}Services
          </h2>
          <p className="text-[#77788A] text-lg max-w-3xl mx-auto">
            Woodnork Green provides a complete range of event branding, fabrication, printing, signage, display, activation, and installation services. Our work is built around one objective: helping brands create strong, visible, and well-executed physical experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-[#0e0f0e] p-8 group hover:bg-[#161716] transition-colors duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: s.accent }}
                />
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${s.accent}15` }}
                >
                  <Icon size={22} style={{ color: s.accent }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#C5E139] transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-[#77788A] text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
