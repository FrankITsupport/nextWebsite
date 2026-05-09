import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Clock, MapPin, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Event Branding & Corporate Setups in Nairobi | Woodnork Green Ltd',
  description: 'Professional event branding and corporate setup services in Nairobi, Kenya. We create branded environments for corporate events, conferences, product launches with full production and installation.',
  keywords: [
    'event branding Nairobi',
    'corporate event setup Kenya',
    'conference branding',
    'product launch branding',
    'corporate event production',
    'event branding company Nairobi',
    'woodnork green event branding'
  ],
  openGraph: {
    title: 'Event Branding & Corporate Setups in Nairobi | Woodnork Green Ltd',
    description: 'Professional event branding and corporate setup services in Nairobi, Kenya.',
    url: 'https://www.woodnorkgreen.co.ke/services/event-branding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Event Branding Services by Woodnork Green',
      },
    ],
  },
}

export default function EventBrandingPage() {
  return (
    <div className="min-h-screen bg-[#0e0f0e] text-white">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 text-[#77788A] hover:text-[#C5E139] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C5E139]" />
              <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Event Branding<br />
              <span className="text-[#00A6E0]">& Corporate Setups</span>
            </h1>
            <p className="text-[#77788A] text-lg leading-relaxed mb-8">
              Transform your corporate events into memorable brand experiences with our comprehensive event branding services. From concept to execution, we create immersive branded environments that captivate audiences and reinforce your brand message across Nairobi and Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-bold px-8 py-4 rounded hover:bg-[#d4f04a] transition-all duration-200"
              >
                Get Quote
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold px-8 py-4 rounded hover:border-[#00A6E0] hover:text-[#00A6E0] transition-all duration-200"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-[#111211]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Include</h2>
              <div className="space-y-4">
                {[
                  'Stage design and backdrop fabrication',
                  'Branded entrance and registration areas',
                  'Photo zones and social media walls',
                  'Directional signage and wayfinding',
                  'Table branding and centerpieces',
                  'Lighting integration and effects',
                  'Audio-visual support structures',
                  'On-site installation and management'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C5E139] mt-1 flex-shrink-0" />
                    <span className="text-[#77788A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#0e0f0e] p-6 rounded-xl border border-white/5">
                  <Users className="text-[#C5E139] mb-3" size={24} />
                  <h3 className="font-bold mb-2">Corporate Events</h3>
                  <p className="text-[#77788A] text-sm">Annual conferences, board meetings, corporate retreats</p>
                </div>
                <div className="bg-[#0e0f0e] p-6 rounded-xl border border-white/5">
                  <MapPin className="text-[#00A6E0] mb-3" size={24} />
                  <h3 className="font-bold mb-2">Product Launches</h3>
                  <p className="text-[#77788A] text-sm">New product introductions, brand launches, unveilings</p>
                </div>
                <div className="bg-[#0e0f0e] p-6 rounded-xl border border-white/5">
                  <Clock className="text-[#C5E139] mb-3" size={24} />
                  <h3 className="font-bold mb-2">Award Ceremonies</h3>
                  <p className="text-[#77788A] text-sm">Gala dinners, recognition events, celebration nights</p>
                </div>
                <div className="bg-[#0e0f0e] p-6 rounded-xl border border-white/5">
                  <Users className="text-[#00A6E0] mb-3" size={24} />
                  <h3 className="font-bold mb-2">Trade Shows</h3>
                  <p className="text-[#77788A] text-sm">Exhibition booths, trade show displays, expo setups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-[#77788A] max-w-2xl mx-auto">From concept to execution, we ensure your event branding is delivered with precision and impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your brand, event goals, and audience' },
              { step: '02', title: 'Design', desc: 'Creating concepts and 3D visualizations for approval' },
              { step: '03', title: 'Production', desc: 'Fabrication and printing in our Nairobi workshop' },
              { step: '04', title: 'Installation', desc: 'On-site setup and event day support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-black text-[#C5E139] mb-4">{item.step}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-[#77788A] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111211]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Event?</h2>
          <p className="text-[#77788A] text-lg mb-8">
            Let us create an unforgettable branded experience for your next corporate event in Nairobi.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-bold px-8 py-4 rounded hover:bg-[#d4f04a] transition-all duration-200"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Event Branding & Corporate Setups",
            "description": "Professional event branding and corporate setup services in Nairobi, Kenya",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Woodnork Green Ltd",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "Kenya"
              }
            },
            "areaServed": "Nairobi, Kenya",
            "serviceType": "Event Branding"
          })
        }}
      />
    </div>
  )
}
