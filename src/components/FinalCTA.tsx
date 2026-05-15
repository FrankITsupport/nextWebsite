import { ArrowRight, CalendarCheck, Download, Mail, MessageCircle, Phone } from 'lucide-react';

const whatsappBrief = `https://wa.me/254780397798?text=${encodeURIComponent(
  'Hello Woodnork Green team. I would like to share a brief for a branding / fabrication / event setup project. Project name, date, location, scope, dimensions, quantity, and reference images/artwork files are below:'
)}`;

const emailBrief =
  'mailto:hey@woodnorkgreen.co.ke?subject=Request for Quote - [Project Name]&body=Project Name:%0D%0AProject Type:%0D%0AEvent / Installation Date:%0D%0ALocation:%0D%0AScope Required:%0D%0ADimensions / Quantities:%0D%0ADelivery / Installation Requirements:%0D%0AArtwork / Brand Guidelines Attached: Yes / No%0D%0AContact Person:%0D%0A%0D%0AKindly review and advise on the recommended production approach, costing, and timeline.%0D%0ARegards,%0D%0A[Name]';

const actions = [
  {
    icon: ArrowRight,
    title: 'Request a Quote',
    description: 'Send project scope for costing and production advice.',
    href: emailBrief,
    accent: '#C5E139',
  },
  {
    icon: CalendarCheck,
    title: 'Book a Site Visit',
    description: 'Discuss your event, venue, fabrication needs, or workshop visit.',
    href: 'tel:+254780397798',
    accent: '#00A6E0',
  },
  {
    icon: MessageCircle,
    title: 'Share Your Brief',
    description: 'Use WhatsApp for fast project details and reference images.',
    href: whatsappBrief,
    accent: '#25D366',
  },
  {
    icon: Download,
    title: 'Company Profile',
    description: 'Request the latest WNG capability profile.',
    href: emailBrief,
    accent: '#C5E139',
  },
];

const briefItems = [
  'Project or event name',
  'Required service category',
  'Event or installation date',
  'Location or venue',
  'Dimensions and quantities',
  'Brand guidelines or artwork files',
  'Reference images or inspiration',
  'Delivery and installation needs',
  'Budget guidance where available',
  'Contact person and approval timeline',
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#07110f] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(197,225,57,0.16)_0%,rgba(0,166,224,0.12)_42%,rgba(7,17,15,0)_78%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#C5E139,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_0.5fr] lg:items-start">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C5E139]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5E139]">
                Start a Project
              </span>
            </div>

            <h2 className="max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl">
              Planning a corporate event, exhibition, launch, or activation?
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-lg">
              Share your brief with WNG. Our team can support concept development, technical design, fabrication, printing, logistics, installation, and final site handover from one coordinated production process.
            </p>

            <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2">
              {actions.map((action) => {
                const Icon = action.icon;
                const isExternal = action.href.startsWith('http') || action.href.startsWith('mailto');

                return (
                  <a
                    key={action.title}
                    href={action.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group bg-[#0e0f0e] p-6 transition-colors duration-300 hover:bg-[#151b14]"
                  >
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <Icon size={25} style={{ color: action.accent }} />
                      <ArrowRight size={18} className="text-white/28 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#C5E139]" />
                    </div>
                    <h3 className="text-xl font-black text-white group-hover:text-[#C5E139]">{action.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/56">{action.description}</p>
                  </a>
                );
              })}
            </div>
          </div>

          <aside className="border border-white/10 bg-[#0e0f0e]/82 p-7">
            <h3 className="text-2xl font-black text-white">What to include in your brief</h3>
            <p className="mt-3 text-sm leading-6 text-white/58">
              The more specific the brief, the faster WNG can advise on production approach, costing, timeline, and installation planning.
            </p>

            <div className="mt-7 grid gap-px bg-white/10">
              {briefItems.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-[#111411] p-3">
                  <span className="h-1.5 w-1.5 shrink-0 bg-[#C5E139]" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-white/62">
              <a href="tel:+254780397798" className="flex items-center gap-3 hover:text-[#C5E139]">
                <Phone size={16} className="text-[#C5E139]" />
                <span>+254 780 397 798</span>
              </a>
              <a href="mailto:hey@woodnorkgreen.co.ke" className="flex items-center gap-3 hover:text-[#C5E139]">
                <Mail size={16} className="text-[#C5E139]" />
                <span>hey@woodnorkgreen.co.ke</span>
              </a>
              <a href={whatsappBrief} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#C5E139]">
                <MessageCircle size={16} className="text-[#C5E139]" />
                <span>WhatsApp brief sharing available</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
