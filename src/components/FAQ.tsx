'use client'

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What services does Woodnork Green offer?",
    answer: "Woodnork Green offers comprehensive event branding and fabrication services including corporate event setups, exhibition stands, stage backdrops, brand activations, signage, large-format printing, custom displays, and end-to-end installation services in Nairobi and across Kenya."
  },
  {
    question: "How long does it take to complete a branding project?",
    answer: "Project timelines vary based on complexity and scope. Simple signage projects can be completed in 3-5 days, while corporate event setups may require 2-4 weeks from design to installation. We recommend contacting us at least 3-4 weeks before your event date for optimal planning."
  },
  {
    question: "Do you serve clients outside Nairobi?",
    answer: "Yes, while our main production facility is in Nairobi, we serve clients across Kenya and East Africa. We have successfully delivered projects in Mombasa, Kisumu, Eldoret, and other major cities. Travel and logistics costs are factored into project quotes."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on factors like design complexity, materials required, installation complexity, and timeline. We provide detailed quotes after understanding your specific requirements. Contact us for a free consultation and customized quote."
  },
  {
    question: "Do you provide design services or do I need to provide designs?",
    answer: "We offer complete design services including concept development, 3D rendering, and graphic design. However, we also work with client-provided designs and can adapt them for production. Our in-house design team ensures your vision translates effectively into physical branding."
  },
  {
    question: "What materials do you use for fabrication?",
    answer: "We use high-quality materials including wood, metal, acrylic, PVC, foam boards, and various printing substrates. Material selection is based on project requirements, durability needs, budget, and environmental considerations. We prioritize sustainable and eco-friendly materials where possible."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 bg-[#0e0f0e]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C5E139]" />
            <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">Frequently Asked Questions</span>
            <div className="h-px w-10 bg-[#C5E139]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Got Questions?<br />
            <span className="text-[#00A6E0]">We Have Answers</span>
          </h2>
          <p className="text-[#77788A] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our event branding, fabrication, and production services in Nairobi and across Kenya.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111211] border border-white/5 rounded-xl overflow-hidden hover:border-[#C5E139]/20 transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#161716] transition-colors duration-200"
              >
                <h3 className="text-white font-semibold text-lg pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-[#C5E139]" />
                  ) : (
                    <ChevronDown size={20} className="text-[#C5E139]" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-[#77788A] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#77788A] mb-6">Still have questions? We're here to help.</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-bold px-8 py-4 rounded hover:bg-[#d4f04a] transition-all duration-200"
          >
            Contact Our Team
          </a>
        </div>
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
