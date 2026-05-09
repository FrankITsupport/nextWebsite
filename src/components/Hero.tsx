import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  // Project images for background gallery
  const projectImages = [
    "/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/00f25320-3188-46c6-ab4a-b41c66cfae23_optimized_small.jpg",
    "/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/0f419462-89e0-487e-a1e8-124d26fbb8bc_optimized_small.jpg",
    "/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/21d3e163-aa8c-41e8-87c0-5b75a45b0b42_optimized_small.jpg",
    "/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/309c6aaf-9395-41e6-8f8e-a4a398d25389_optimized_small.jpg",
    "/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/328a4ba1-5672-4dd1-98e8-b188d33df52f_optimized_small.jpg",
    "/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/380b2d54-0d76-458c-ba23-beb6760c048b_optimized_small.jpg",
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-[#0e0f0e]">
      <div className="w-full px-6 py-20">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Words and CTA */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#C5E139]" />
                <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">
                  Corporate Event Branding & Fabrication
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight mb-6">
                Event Branding, Fabrication, Printing & Installation
                <br />
                for{' '}
                <span className="relative inline-block">
                  <span className="text-[#C5E139]">Serious Brand</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C5E139]/30" />
                </span>
                <br />
                <span className="text-[#00A6E0]">Experiences.</span>
              </h1>

              <p className="text-[#77788A] text-lg leading-relaxed mb-10 max-w-xl">
                Woodnork Green designs, fabricates, prints, delivers, and installs branded environments for corporate events, exhibitions, product launches, activations, conferences, and premium experiences. This portfolio showcases selected work delivered for brands, agencies, institutions, NGOs, and corporate teams that require strong visual impact, reliable production, and clean site execution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-bold px-8 py-4 rounded hover:bg-[#d4f04a] transition-all duration-200 group"
                >
                  Request a Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="#featured-projects"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold px-8 py-4 rounded hover:border-[#00A6E0] hover:text-[#00A6E0] transition-all duration-200 group"
                >
                  <Play size={16} className="fill-current" />
                  View Our Works Done
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold px-8 py-4 rounded hover:border-[#C5E139] hover:text-[#C5E139] transition-all duration-200"
                >
                  Share Your Brief
                </a>
              </div>

              <div className="flex items-center gap-8 flex-wrap">
                {[
                  { val: '10+', label: 'Years of Delivery' },
                  { val: '500+', label: 'Projects Delivered' },
                  { val: 'Nairobi', label: 'Production Hub' },
                  { val: 'End-to-End', label: 'Design to Install' },
                ].map((item) => (
                  <div key={item.label} className="border-l border-white/10 pl-6 first:border-0 first:pl-0">
                    <div className="text-2xl font-black text-[#C5E139]">{item.val}</div>
                    <div className="text-[#77788A] text-xs tracking-wide mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Photo collage */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/74dd3a95-1ce5-4e9b-b79c-775130a0912b_optimized_small.jpg",
                "/assets/projects%20media/WNG-PROJECTS-VISUALS/NCBA/optimized/WhatsApp%20Image%202025-10-09%20at%208.16.42%20PM%20(1)_optimized_small.jpeg",
                "/assets/projects%20media/WNG-PROJECTS-VISUALS/MICROSOFT%20AI%20LAUNCH/optimized/9598aa24-bc0c-4129-b113-2644f86a3ec4_optimized_small.jpg",
                "/assets/projects%20media/WNG-PROJECTS-VISUALS/L_OREAL/optimized/a1909fcb-c204-4603-b023-d922ec8b9919_optimized_small.jpg",
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={image}
                    alt={`Woodnork Green project ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Subtle border effect */}
                  <div className="absolute inset-0 border border-white/20 hover:border-[#C5E139]/60 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute right-8 bottom-16 hidden lg:block">
        <div className="bg-[#1a1b1a] border border-white/10 rounded-xl p-5 max-w-[220px]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#C5E139] animate-pulse" />
            <span className="text-[#C5E139] text-xs font-bold tracking-wider uppercase">Available</span>
          </div>
          <p className="text-white text-sm font-semibold leading-snug">Currently booking Q3 2026 corporate events</p>
          <p className="text-[#77788A] text-xs mt-1">Limited production slots remaining</p>
        </div>
      </div>
    </section>
  );
}
