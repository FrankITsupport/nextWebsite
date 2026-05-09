import Image from 'next/image'

const stats = [
  { val: '500+', label: 'Projects Delivered', sub: 'Across corporate, NGO, and premium events' },
  { val: '10+', label: 'Years of Experience', sub: 'Nairobi-based production since 2014' },
  { val: '72hr', label: 'Fastest Turnaround', sub: 'Full branded environment build' },
  { val: 'End-to-End', label: 'In-House Capability', sub: 'Design, fabrication, print, install' },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-[#111211] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* SEO: Semantic HTML with proper heading hierarchy */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((s, index) => (
            <article key={s.label} className="bg-[#111211] px-8 py-10 text-center">
              <div className="text-4xl md:text-5xl font-black text-[#C5E139] mb-2" role="heading" aria-level={3}>
                {s.val}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-[#77788A] text-xs">{s.sub}</div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C5E139]" />
              <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">About Woodnork Green</span>
            </div>
            <h2 className="text-4xl font-black leading-tight mb-5">
              Woodnork Green Ltd<br />
              <span className="text-[#00A6E0]">Production & Fabrication Partner</span>
            </h2>
            <p className="text-[#77788A] leading-relaxed mb-5">
              Woodnork Green Ltd is a Nairobi-based event branding, fabrication, printing, and creative production partner delivering corporate event environments, exhibition stands, signage, activations, custom displays, and installation support for brands, agencies, institutions, NGOs, and premium clients.
            </p>
            <p className="text-[#77788A] leading-relaxed">
              Woodnork Green is not just a supplier of printed materials — we are an end-to-end creative production and fabrication partner for serious corporate and premium clients. Our in-house workshop, large-format printing capability, and experienced installation teams ensure every project is delivered with precision and reliability.
            </p>
          </div>
          <div className="relative">
            {/* SEO: Optimized image with proper alt text and loading */}
            <Image
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Woodnork Green workshop production facility showing event branding and fabrication equipment"
              width={800}
              height={600}
              className="rounded-2xl w-full h-72 object-cover"
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -bottom-4 -left-4 bg-[#C5E139] rounded-xl p-5">
              <div className="text-[#0e0f0e] text-2xl font-black">10+</div>
              <div className="text-[#0e0f0e]/70 text-xs font-semibold tracking-wide">Years of Delivery</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#00A6E0] rounded-xl p-5">
              <div className="text-white text-2xl font-black">In-House</div>
              <div className="text-white/70 text-xs font-semibold tracking-wide">Production Capability</div>
            </div>
          </div>
        </div>

        {/* SEO: Structured data for business statistics */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Woodnork Green Ltd",
              "description": "Nairobi-based event branding, fabrication, printing, and creative production partner",
              "foundingDate": "2014",
              "areaServed": {
                "@type": "Country",
                "name": "Kenya"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Event Production Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Event Branding",
                      "description": "Corporate event branding and visual identity"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fabrication Services",
                      "description": "Custom event structure and display fabrication"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Printing Services",
                      "description": "Large-format printing for events and exhibitions"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
      </div>
    </section>
  )
}
