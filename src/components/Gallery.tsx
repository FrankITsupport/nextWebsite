'use client'

import { useState } from 'react';
import { ArrowRight, X, MapPin, Calendar, Layers, ChevronRight } from 'lucide-react';

const featuredProjects = [
  {
    img: 'https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Microsoft AI Launch event branding by Woodnork Green - professional stage backdrop and branded panels in Nairobi',
    title: 'Microsoft AI Launch',
    client: 'Microsoft',
    category: 'Corporate Launch / Stage Branding',
    scope: 'Stage backdrop, branded panels, print production, fabrication, delivery, and installation.',
    location: 'Nairobi, Kenya',
    result: 'Delivered a polished branded launch environment ready for corporate event execution.',
    industry: 'Technology',
    service: 'Event Branding & Corporate Setups',
  },
  {
    img: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'NCBA Corporate Summit stage branding and media wall by Woodnork Green in Nairobi',
    title: 'NCBA Corporate Summit',
    client: 'NCBA',
    category: 'Corporate Event / Stage Branding',
    scope: 'Stage backdrop, media wall, branded registration area, and signage installation.',
    location: 'Nairobi, Kenya',
    result: 'Full branded corporate summit environment delivered on schedule with premium finishing.',
    industry: 'Financial Services',
    service: 'Stage, Backdrop & Media Walls',
  },
  {
    img: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mastercard brand activation setup with custom displays and counters by Woodnork Green',
    title: 'Mastercard Brand Activation',
    client: 'Mastercard',
    category: 'Brand Activation / Experiential',
    scope: 'Activation zone, branded displays, custom counters, and large-format print production.',
    location: 'Nairobi, Kenya',
    result: 'High-impact activation space that drove strong attendee engagement and brand visibility.',
    industry: 'Financial Services',
    service: 'Brand Activations & Product Launches',
  },
  {
    img: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'AGRA Forum conference stage and wayfinding signage by Woodnork Green in Nairobi',
    title: 'AGRA Forum',
    client: 'AGRA',
    category: 'Conference / Environmental Branding',
    scope: 'Conference stage, wayfinding signage, branded panels, and delegate experience touchpoints.',
    location: 'Nairobi, Kenya',
    result: 'Professional conference environment with clear wayfinding and strong institutional branding.',
    industry: 'NGO / Development Sector',
    service: 'Signage, Wayfinding & Environmental Branding',
  },
  {
    img: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Safaricom Product Launch',
    client: 'Safaricom',
    category: 'Product Launch / Experiential',
    scope: 'Launch stage, product displays, branded zones, and experiential installations.',
    location: 'Nairobi, Kenya',
    result: 'Dynamic launch environment that showcased new products with strong brand presence.',
    industry: 'Telecommunications',
    service: 'Brand Activations & Product Launches',
  },
  {
    img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'UNDP Climate Conference',
    client: 'UNDP',
    category: 'Conference / Stage Branding',
    scope: 'Main conference stage, breakout rooms, wayfinding, and environmental branding.',
    location: 'Nairobi, Kenya',
    result: 'Comprehensive conference setup with professional execution and on-time delivery.',
    industry: 'NGO / Development Sector',
    service: 'Stage, Backdrop & Media Walls',
  },
];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);

  return (
    <section id="gallery" className="py-28 bg-[#0e0f0e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C5E139]" />
            <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">Portfolio</span>
            <div className="h-px w-10 bg-[#C5E139]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Recent <span className="text-[#00A6E0]">Projects</span>
          </h2>
          <p className="text-[#77788A] max-w-2xl mx-auto leading-relaxed">
            Selected work showcasing our expertise in event branding, fabrication, printing, and installation for corporate clients, agencies, and premium brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-[#111211] border border-white/5 hover:border-[#C5E139]/20 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.alt || project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f0e]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-[#C5E139] text-xs font-bold tracking-wider uppercase mb-1">{project.category}</div>
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">{project.client}</div>
                    <div className="text-[#77788A] text-sm">{project.industry}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#C5E139] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-[#0e0f0e] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.alt || selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover"
                  loading="eager"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">{selectedProject.title}</h3>
                    <div className="flex items-center gap-4 text-[#77788A] text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {selectedProject.location}
                      </span>
                      <span className="text-[#C5E139] font-semibold">{selectedProject.client}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#C5E139]/20 text-[#C5E139] text-xs font-bold rounded-full">
                      {selectedProject.industry}
                    </span>
                    <span className="px-3 py-1 bg-[#00A6E0]/20 text-[#00A6E0] text-xs font-bold rounded-full">
                      {selectedProject.service}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Layers size={18} className="text-[#C5E139]" />
                      Project Scope
                    </h4>
                    <p className="text-[#77788A] leading-relaxed">{selectedProject.scope}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <ArrowRight size={18} className="text-[#00A6E0]" />
                      Results
                    </h4>
                    <p className="text-[#77788A] leading-relaxed">{selectedProject.result}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-bold px-6 py-3 rounded hover:bg-[#d4f04a] transition-colors"
                  >
                    Request Similar Project
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded hover:border-[#C5E139] hover:text-[#C5E139] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
