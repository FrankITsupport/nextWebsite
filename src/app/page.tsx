'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import Positioning from '../components/Positioning'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import Process from '../components/Process'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="font-sans antialiased bg-[#0e0f0e] text-white overflow-x-hidden">
      <Header scrolled={scrolled} />
      <Hero />
      {/* Featured Projects Section - New component */}
      <section id="featured-projects" className="relative border-t border-white/10">
        <FeaturedProjects />
      </section>
      {/* Short Positioning Section - New component */}
      <section id="positioning" className="relative border-t border-white/10">
        <Positioning />
      </section>
      {/* Key Services Section - Updated component */}
      <section id="services" className="relative border-t border-white/10">
        <Services />
      </section>
      {/* Our Process Section - Updated component */}
      <section id="process" className="relative border-t-4 border-[#C5E139]">
        <Process />
      </section>
      {/* Why Choose Woodnork Green Section - New component */}
      <section id="why-choose" className="relative border-t border-white/10">
        <WhyChoose />
      </section>
      {/* Final CTA Section - New component */}
      <section id="final-cta" className="relative border-t border-[#C5E139]/40">
        <FinalCTA />
      </section>
      <Footer />
    </main>
  )
}
