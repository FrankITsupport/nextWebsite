import { ArrowRight, MapPin, Calendar } from 'lucide-react';

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: "Microsoft AI Launch",
      client: "Microsoft",
      category: "Corporate Launch / Stage Branding",
      scope: "Stage backdrop, branded panels, print production, fabrication, delivery, and installation.",
      location: "Nairobi, Kenya",
      image: "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "Delivered a polished branded launch environment ready for corporate event execution."
    },
    {
      id: 2,
      title: "NCBA Corporate Summit",
      client: "NCBA",
      category: "Corporate Event / Stage Branding",
      scope: "Stage backdrop, media wall, branded registration area, and signage installation.",
      location: "Nairobi, Kenya",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "Full branded corporate summit environment delivered on schedule with premium finishing."
    },
    {
      id: 3,
      title: "Mastercard Brand Activation",
      client: "Mastercard",
      category: "Brand Activation / Experiential",
      scope: "Activation zone, branded displays, custom counters, and large-format print production.",
      location: "Nairobi, Kenya",
      image: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "High-impact activation space that drove strong attendee engagement and brand visibility."
    },
    {
      id: 4,
      title: "AGRA Forum",
      client: "AGRA",
      category: "Conference / Environmental Branding",
      scope: "Conference stage, wayfinding signage, branded panels, and delegate experience touchpoints.",
      location: "Nairobi, Kenya",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "Professional conference environment with clear wayfinding and strong institutional branding."
    },
    {
      id: 5,
      title: "Isuzu Activation",
      client: "Isuzu",
      category: "Brand Activation / Product Launch",
      scope: "Product display area, activation booth, branded signage, and experiential setup.",
      location: "Nairobi, Kenya",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "Engaging product launch experience that effectively communicated key features and benefits."
    },
    {
      id: 6,
      title: "L'Oréal Campaign",
      client: "L'Oréal / Maybelline",
      category: "Beauty / Brand Activation",
      scope: "Beauty activation setup, branded counters, photo-op areas, and display structures.",
      location: "Nairobi, Kenya",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      result: "Premium beauty activation space that enhanced brand perception and customer engagement."
    }
  ];

  return (
    <section className="py-20 bg-[#0e0f0e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#C5E139]" />
            <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">
              Selected Works Done
            </span>
            <div className="h-px w-10 bg-[#C5E139]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Our Portfolio Shows{' '}
            <span className="text-[#C5E139]">Real Capability</span>
          </h2>
          <p className="text-[#77788A] text-lg max-w-3xl mx-auto">
            Our portfolio shows the range of projects we support across events, exhibitions, signage, display fabrication, printing, brand activations, and corporate setups. Explore selected work to see how Woodnork Green turns briefs into finished physical brand experiences.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group bg-[#1a1b1a] border border-white/10 rounded-xl overflow-hidden hover:border-[#C5E139]/30 transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} for ${project.client} in ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f0e]/80 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C5E139]/20 backdrop-blur-sm text-[#C5E139] text-xs font-bold px-3 py-1 rounded-full border border-[#C5E139]/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#C5E139] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[#00A6E0] text-sm font-semibold">
                    {project.client}
                  </span>
                </div>

                <p className="text-[#77788A] text-sm mb-4 line-clamp-2">
                  {project.scope}
                </p>

                <div className="flex items-center gap-4 text-[#77788A] text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-[#77788A] text-xs line-clamp-1">
                    {project.result}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[#C5E139] text-sm font-semibold hover:gap-2 transition-all"
                  >
                    View Project
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 bg-[#00A6E0] text-white font-bold px-8 py-4 rounded hover:bg-[#00b8f0] transition-all duration-200 group"
          >
            View Full Portfolio
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
