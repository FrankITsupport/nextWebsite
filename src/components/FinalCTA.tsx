import { ArrowRight, MessageCircle, Mail, Phone, FileText } from 'lucide-react';

export default function FinalCTA() {
  const contactOptions = [
    {
      icon: ArrowRight,
      title: "Request a Quote",
      description: "Get a detailed quotation for your project",
      action: "#contact",
      color: "#C5E139"
    },
    {
      icon: MessageCircle,
      title: "Share Your Brief",
      description: "Send your project requirements directly",
      action: `https://wa.me/254780397798?text=${encodeURIComponent('Hello Woodnork Green team. I would like to request a quote for a branding / fabrication / event setup project. Here are the details: project name, date, location, scope required, dimensions, quantity, and any reference images or artwork files.')}`,
      color: "#25D366"
    },
    {
      icon: Mail,
      title: "Email the Team",
      description: "Send detailed project information",
      action: "mailto:hey@woodnorkgreen.co.ke?subject=Request for Quote - [Project Name]&body=Project Name:%0D%0AProject Type:%0D%0AEvent / Installation Date:%0D%0ALocation:%0D%0AScope Required:%0D%0ADimensions / Quantities:%0D%0ADelivery / Installation Requirements:%0D%0AArtwork / Brand Guidelines Attached: Yes / No%0D%0AContact Person:%0D%0A%0D%0AKindly review and advise on the recommended production approach, costing, and timeline.%0D%0ARegards,%0D%0A[Name]",
      color: "#00A6E0"
    },
    {
      icon: FileText,
      title: "View Works Done",
      description: "See our portfolio of completed projects",
      action: "#portfolio",
      color: "#77788A"
    }
  ];

  return (
    <section className="py-20 bg-[#1a1b1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#C5E139]" />
            <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">
              Get Started
            </span>
            <div className="h-px w-10 bg-[#C5E139]" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Have an Event, Exhibition, Launch,{' '}
            <span className="text-[#C5E139]">Signage</span>
            , or Branding Project Coming Up?
          </h2>
          
          <p className="text-[#77788A] text-lg max-w-3xl mx-auto">
            Share your brief with Woodnork Green and we will help you define the right solution, materials, production approach, delivery plan, and installation support.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <a
                key={index}
                href={option.action}
                className="group bg-[#0e0f0e] border border-white/10 rounded-xl p-6 hover:border-[#C5E139]/30 transition-all duration-300 text-left"
                target={option.action.startsWith('http') || option.action.startsWith('mailto') ? '_blank' : '_self'}
                rel={option.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${option.color}20` }}
                  >
                    <Icon size={32} className="text-white" style={{ color: option.color }} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C5E139] transition-colors">
                    {option.title}
                  </h3>
                  
                  <p className="text-[#77788A] text-sm">
                    {option.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* What to Include in Your Brief */}
        <div className="bg-[#0e0f0e] border border-white/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            What to Include in Your Brief
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Project name or event name",
              "Type of project",
              "Required service",
              "Event or installation date",
              "Location or venue",
              "Required dimensions or site measurements",
              "Brand guidelines or artwork files",
              "Reference images or inspiration",
              "Quantity required",
              "Delivery or installation requirements",
              "Budget guidance where available",
              "Contact person and approval timeline"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5E139]" />
                <span className="text-[#77788A] text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#77788A] mb-6">
              The more details you provide, the better we can respond with accurate recommendations and pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254780397798"
                className="inline-flex items-center justify-center gap-2 bg-[#00A6E0] text-white font-bold px-8 py-4 rounded hover:bg-[#00b8f0] transition-all duration-200"
              >
                <Phone size={18} />
                Call Us Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold px-8 py-4 rounded hover:border-[#C5E139] hover:text-[#C5E139] transition-all duration-200"
              >
                Visit Our Workshop
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 text-[#77788A] text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#C5E139]" />
              <span>hey@woodnorkgreen.co.ke</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#C5E139]" />
              <span>+254 780 397 798</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-[#C5E139]" />
              <span>WhatsApp Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
