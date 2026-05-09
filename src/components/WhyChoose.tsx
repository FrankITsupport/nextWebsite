import { CheckCircle, ArrowRight, Award, Users, Settings, Truck, Clock, Target } from 'lucide-react';

export default function WhyChoose() {
  const differentiators = [
    {
      icon: Target,
      title: "End-to-End Execution",
      description: "We support projects from brief capture, design, costing, and production to delivery, installation, handover, and post-project review.",
      color: "#C5E139"
    },
    {
      icon: Settings,
      title: "In-House Workshop Capability",
      description: "Our workshop and production setup allows us to fabricate, brand, finish, and prepare a wide range of custom event and display structures.",
      color: "#00A6E0"
    },
    {
      icon: Award,
      title: "Design-to-Production Thinking",
      description: "We do not only design for appearance. We design with materials, fabrication, transport, installation, safety, and site conditions in mind.",
      color: "#C5E139"
    },
    {
      icon: Users,
      title: "Corporate Project Experience",
      description: "We understand the needs of marketing teams, procurement departments, agencies, event planners, NGOs, financial institutions, and premium brands.",
      color: "#00A6E0"
    },
    {
      icon: CheckCircle,
      title: "Quality Control Before Dispatch",
      description: "Projects are checked for finish, branding accuracy, structural suitability, print quality, completeness, and readiness before dispatch.",
      color: "#C5E139"
    },
    {
      icon: Truck,
      title: "Reliable Delivery and Installation",
      description: "Our team supports site delivery, setup, installation, dismantling, and handover so that clients do not have to manage multiple disconnected vendors.",
      color: "#00A6E0"
    },
    {
      icon: Clock,
      title: "Built for Urgent and Complex Work",
      description: "We are used to projects that require fast coordination, multiple departments, quick approvals, and accurate execution under time pressure.",
      color: "#C5E139"
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
              Corporate Trust Factors
            </span>
            <div className="h-px w-10 bg-[#C5E139]" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Why Corporate Clients{' '}
            <span className="text-[#C5E139]">Work With Woodnork Green</span>
          </h2>
          
          <p className="text-[#77788A] text-lg max-w-3xl mx-auto">
            Corporate projects require more than attractive designs. They require planning, production discipline, material understanding, site coordination, quality control, and reliable delivery. Woodnork Green brings these elements together through a practical design-to-production workflow.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group bg-[#1a1b1a] border border-white/10 rounded-xl p-6 hover:border-[#C5E139]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon size={24} className="text-white" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C5E139] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#77788A] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-[#1a1b1a] border border-white/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready for a Production Partner That{' '}
            <span className="text-[#C5E139]">Understands Corporate</span>
            {' '}Requirements?
          </h3>
          <p className="text-[#77788A] mb-6 max-w-2xl mx-auto">
            Share your project brief with Woodnork Green and experience the difference of working with a structured, reliable, and production-focused partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-bold px-8 py-4 rounded hover:bg-[#d4f04a] transition-all duration-200 group"
            >
              Request a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold px-8 py-4 rounded hover:border-[#00A6E0] hover:text-[#00A6E0] transition-all duration-200"
            >
              View Our Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
