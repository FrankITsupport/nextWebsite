import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Positioning() {
  const capabilities = [
    "Creative design and concept development",
    "Workshop fabrication and production",
    "Large-format printing and graphics",
    "Branding and finishing",
    "Logistics and delivery coordination",
    "Site installation and setup",
    "Quality control and handover"
  ];

  return (
    <section className="py-20 bg-[#1a1b1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C5E139]" />
              <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">
                End-to-End Partner
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Your End-to-End{' '}
              <span className="text-[#C5E139]">Brand Visibility</span>
              {' '}Partner
            </h2>
            
            <p className="text-[#77788A] text-lg leading-relaxed mb-8">
              Woodnork Green Ltd delivers practical, creative, and production-ready branding solutions for organizations that need to show up professionally in physical spaces. We combine creative design, workshop fabrication, print production, branding, logistics, and installation to help clients execute events, exhibitions, launches, displays, and branded environments with confidence.
            </p>
            
            <p className="text-[#77788A] text-lg leading-relaxed mb-8">
              We work with corporate teams, agencies, event organizers, institutions, NGOs, financial institutions, and consumer brands that require reliable execution, clear communication, and quality finishing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-bold px-8 py-4 rounded hover:bg-[#d4f04a] transition-all duration-200 group"
              >
                Request a Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold px-8 py-4 rounded hover:border-[#00A6E0] hover:text-[#00A6E0] transition-all duration-200"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right Column - Capabilities */}
          <div className="bg-[#0e0f0e] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              Complete Production{' '}
              <span className="text-[#00A6E0]">Capability</span>
            </h3>
            
            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#C5E139] flex-shrink-0 mt-0.5" />
                  <span className="text-[#77788A] text-sm">{capability}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">From Brief to Handover</p>
                  <p className="text-[#77788A] text-xs mt-1">One coordinated production process</p>
                </div>
                <div className="text-2xl font-black text-[#C5E139]">
                  10+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
