import { ArrowRight, MapPin, Settings } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'Microsoft AI Launch',
    client: 'Microsoft',
    category: 'Corporate Launch / Stage Branding',
    scope: 'Stage backdrop, branded panels, print production, fabrication, delivery, and installation.',
    role: 'Design support, fabrication, printing, logistics, and installation.',
    location: 'Nairobi, Kenya',
    image: '/assets/projects media/WNG-PROJECTS-VISUALS/MICROSOFT AI LAUNCH/optimized/d00d02fe-b14e-41b3-a449-2a343845b293_optimized_small.jpg',
    result: 'Delivered a polished launch environment ready for corporate presentation and media visibility.',
  },
  {
    id: 2,
    title: 'NCBA Corporate Setup',
    client: 'NCBA',
    category: 'Corporate Event / Environmental Branding',
    scope: 'Stage branding, branded walls, registration touchpoints, print production, and site setup.',
    role: 'Fabrication, large-format graphics, delivery, and installation support.',
    location: 'Nairobi, Kenya',
    image: '/assets/projects media/WNG-PROJECTS-VISUALS/NCBA/optimized/WhatsApp Image 2025-10-09 at 8.16.42 PM_optimized_small.jpeg',
    result: 'Created a clean branded environment for a high-trust corporate audience.',
  },
  {
    id: 3,
    title: 'Mastercard Activation',
    client: 'Mastercard',
    category: 'Brand Activation / Experiential',
    scope: 'Activation zone, branded displays, custom counters, large-format print, and installation.',
    role: 'Custom display production, print finishing, logistics, and site execution.',
    location: 'Nairobi, Kenya',
    image: '/assets/projects media/WNG-PROJECTS-VISUALS/MASTERCARD/sarit boooth/optimized/f388ca15-b236-464f-b2e6-2e7d90a8ad14_optimized_small.jpg',
    result: 'Built a high-impact activation space designed for visibility and attendee engagement.',
  },
  {
    id: 4,
    title: 'AGRA Forum',
    client: 'AGRA',
    category: 'Conference / Wayfinding / Branding',
    scope: 'Conference signage, branded panels, wayfinding, delegate touchpoints, and setup support.',
    role: 'Print production, finishing, delivery coordination, and installation.',
    location: 'Nairobi, Kenya',
    image: '/assets/projects media/WNG-PROJECTS-VISUALS/AGRA/optimized/99b1104c-97e5-46de-a11d-78c916305615_optimized_small.jpg',
    result: 'Supported a professional conference environment with clear branding and navigation.',
  },
  {
    id: 5,
    title: 'Britam Corporate Event',
    client: 'Britam',
    category: 'Corporate Event / Brand Experience',
    scope: 'Branded event setup, display elements, print production, finishing, and installation.',
    role: 'Production planning, fabrication, branding, delivery, and setup.',
    location: 'Nairobi, Kenya',
    image: '/assets/projects media/WNG-PROJECTS-VISUALS/PREVIOUS EVENTS/BRITAM @60/optimized/WhatsApp Image 2025-11-08 at 6.02.00 PM_optimized_small.jpeg',
    result: 'Delivered a finished corporate setup with strong brand presence and clean execution.',
  },
  {
    id: 6,
    title: 'Isuzu Activation',
    client: 'Isuzu',
    category: 'Product Launch / Brand Activation',
    scope: 'Product display area, branded signage, experiential setup, graphics, and installation.',
    role: 'Fabrication, print production, site logistics, and activation setup.',
    location: 'Nairobi, Kenya',
    image: '/assets/projects media/WNG-PROJECTS-VISUALS/ISUZU ACTIVATION/optimized/c3e4059e-43ba-4baf-bafa-597da30bfcdc_optimized_small.jpg',
    result: 'Presented the brand in a structured activation space built for product visibility.',
  },
];

const capabilityTags = [
  'Corporate events',
  'Stage branding',
  'Activations',
  'Large-format print',
  'Fabrication',
  'Site installation',
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-[linear-gradient(135deg,#07110f_0%,#10251c_34%,#072033_68%,#0e0f0e_100%)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_0.52fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C5E139]" />
              <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">
                Featured Corporate Projects
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Selected work that proves{' '}
              <span className="text-[#C5E139]">production capability</span>
            </h2>
          </div>
          <p className="text-white/68 text-base md:text-lg leading-8 max-w-2xl lg:ml-auto">
            A curated set of real WNG projects showing the scope behind the photos: what was delivered, where it was installed, and how our team supported the build from production to site execution.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {capabilityTags.map((item) => (
            <span
              key={item}
              className="border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/62"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#101412] border border-white/10 overflow-hidden hover:border-[#C5E139]/40 transition-all duration-300"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0e0f0e]">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} for ${project.client} in ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f0e]/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0e0f0e]/70 backdrop-blur-sm text-[#C5E139] text-[11px] font-bold px-3 py-1 border border-[#C5E139]/30 uppercase tracking-[0.16em]">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-black text-white group-hover:text-[#C5E139] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[#00A6E0] text-sm font-bold shrink-0">
                    {project.client}
                  </span>
                </div>

                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-white/42 text-[11px] font-bold uppercase tracking-[0.16em]">Scope</dt>
                    <dd className="mt-1 text-white/70 leading-6">{project.scope}</dd>
                  </div>
                  <div>
                    <dt className="text-white/42 text-[11px] font-bold uppercase tracking-[0.16em]">WNG role</dt>
                    <dd className="mt-1 text-white/70 leading-6">{project.role}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-white/52 text-xs">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings size={12} />
                    <span>Design to install support</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="text-white/64 text-sm leading-6">
                    {project.result}
                  </p>
                  <a
                    href="#final-cta"
                    className="mt-4 inline-flex items-center gap-2 text-[#C5E139] text-sm font-bold hover:gap-3 transition-all"
                  >
                    Request Similar Setup
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="max-w-2xl text-sm leading-6 text-white/58">
            These are selected examples. The full portfolio should expand into service filters, industry filters, and project case studies as more approved project data is collected.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="/portfolio/"
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-4 font-bold text-white transition-all duration-200 hover:border-[#C5E139] hover:text-[#C5E139]"
            >
              View Portfolio
            </a>
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#00A6E0] text-white font-bold px-8 py-4 hover:bg-[#00b8f0] transition-all duration-200 group shrink-0"
            >
              Share Your Brief
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
