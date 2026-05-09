import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Ruler, Box, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Exhibition Stands & Booth Fabrication Nairobi | Woodnork Green Ltd',
  description: 'Custom exhibition stands and booth fabrication services in Nairobi, Kenya. We design and build professional exhibition booths, shell scheme enhancements, and trade show displays.',
  keywords: [
    'exhibition stands Nairobi',
    'booth fabrication Kenya',
    'trade show displays',
    'exhibition booth design',
    'shell scheme enhancement',
    'exhibition stand builder Nairobi',
    'woodnork green exhibition'
  ],
  openGraph: {
    title: 'Exhibition Stands & Booth Fabrication Nairobi | Woodnork Green Ltd',
    description: 'Custom exhibition stands and booth fabrication services in Nairobi, Kenya.',
    url: 'https://www.woodnorkgreen.co.ke/services/exhibition-stands',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Exhibition Stand Services by Woodnork Green',
      },
    ],
  },
}

export default function ExhibitionStandsPage() {
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
              Exhibition Stands<br />
              <span className="text-[#00A6E0]">& Booth Fabrication</span>
            </h1>
            <p className="text-[#77788A] text-lg leading-relaxed mb-8">
              Stand out at trade shows and exhibitions with custom-built exhibition booths that attract attention and drive engagement. Our Nairobi-based team delivers complete exhibition solutions from design to installation across Kenya and East Africa.
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
              <h2 className="text-3xl font-bold mb-6">Our Exhibition Solutions</h2>
              <div className="space-y-4">
                {[
                  'Custom exhibition booth design and fabrication',
                  'Shell scheme enhancement and branding',
                  'Modular and portable exhibition systems',
                  'Product display counters and showcases',
                  'Interactive display integration',
                  'Lighting and audio-visual integration',
                  'Storage and assembly solutions',
                  'International exhibition shipping support'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C5E139] mt-1 flex-shrink-0" />
                    <span className="text-[#77788A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Booth Types</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#0e0f0e] p-6 rounded-xl border border-white/5">
                  <Box className="text-[#C5E139] mb-3" size={24} />
                  <h3 className="font-bold mb-2">Custom Built</h3>
                  <p className="text-[#77788A] text-sm">Fully customized booths designed to your specifications</p>
                </div>
                <div className="bg-[#0e0f0e] p-6 rounded-xl border border-white/5">
                  <Ruler className="text-[#00A6E0] mb-3" size={24} />
                  <h3 className="font-bold mb-2">Modular Systems</h3>
                  <p className="text-[#77788A] text-sm">Reusable and configurable exhibition solutions</p>
                </div>
                <div className="bg-[#0e0f0e] p-6 rounded-xl border border-white/5">
                  <Users className="text-[#C5E139] mb-3" size={24} />
                  <h3 className="font-bold mb-2">Shell Scheme</h3>
                  <p className="text-[#77788A] text-sm">Enhanced standard exhibition packages</p>
                </div>
                <div className="bg-[#0e0f0e] p-6 rounded-xl border border-white/5">
                  <Box className="text-[#00A6E0] mb-3" size={24} />
                  <h3 className="font-bold mb-2">Portable Displays</h3>
                  <p className="text-[#77788A] text-sm">Easy transport and setup exhibition solutions</p>
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
            <h2 className="text-4xl font-bold mb-4">Exhibition Timeline</h2>
            <p className="text-[#77788A] max-w-2xl mx-auto">We recommend starting your exhibition project 4-6 weeks before the event date.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Brief & Design', desc: 'Requirements gathering and concept development' },
              { step: '02', title: 'Production', desc: 'Fabrication and graphics production' },
              { step: '03', title: 'Quality Check', desc: 'Pre-assembly and quality inspection' },
              { step: '04', title: 'Installation', desc: 'On-site assembly and event support' }
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
          <h2 className="text-4xl font-bold mb-6">Exhibition Success Starts Here</h2>
          <p className="text-[#77788A] text-lg mb-8">
            Let us create an exhibition booth that drives traffic and generates leads at your next trade show.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-bold px-8 py-4 rounded hover:bg-[#d4f04a] transition-all duration-200"
          >
            Discuss Your Exhibition
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
            "name": "Exhibition Stands & Booth Fabrication",
            "description": "Custom exhibition stands and booth fabrication services in Nairobi, Kenya",
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
            "serviceType": "Exhibition Services"
          })
        }}
      />
    </div>
  )
}
