'use client'

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Download } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#111211]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C5E139]" />
              <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Let's Build<br />
              <span className="text-[#00A6E0]">Something Great</span>
            </h2>
            <p className="text-[#77788A] leading-relaxed mb-10">
              Whether you have a full brief or just an idea, we'd love to hear from you. Our team typically responds within one business day.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Phone, label: '+254 780 397 798', sub: 'Mon–Fri, 8am–6pm EAT' },
                { icon: Mail, label: 'hey@woodnorkgreen.co.ke', sub: 'We reply within 24hrs' },
                { icon: MapPin, label: 'Karen Village, Ngong Road, Nairobi', sub: 'Workshop & HQ' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C5E139]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#C5E139]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.label}</div>
                      <div className="text-[#77788A] text-xs">{item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="#"
                className="flex items-center gap-3 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-200 group"
              >
                <MessageSquare size={18} className="text-[#C5E139]" />
                <div>
                  <div className="text-white text-sm font-semibold">Share Your Brief</div>
                  <div className="text-[#77788A] text-xs">Tell us what you need</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-200 group"
              >
                <Calendar size={18} className="text-[#00A6E0]" />
                <div>
                  <div className="text-white text-sm font-semibold">Book a Site Visit</div>
                  <div className="text-[#77788A] text-xs">See our workshop</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-200 group"
              >
                <Download size={18} className="text-[#C5E139]" />
                <div>
                  <div className="text-white text-sm font-semibold">Company Profile</div>
                  <div className="text-[#77788A] text-xs">Download PDF</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-200 group"
              >
                <Phone size={18} className="text-[#00A6E0]" />
                <div>
                  <div className="text-white text-sm font-semibold">WhatsApp</div>
                  <div className="text-[#77788A] text-xs">Quick inquiry</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#0e0f0e] rounded-2xl p-8 border border-white/5">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#C5E139]/15 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-[#C5E139]" />
                </div>
                <h3 className="text-white font-black text-xl mb-2">Brief Received!</h3>
                <p className="text-[#77788A] text-sm">Our team will be in touch within one business day to discuss your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-white font-bold text-lg mb-6">Request a Quote</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#77788A] text-xs font-semibold tracking-wide uppercase block mb-2">Full Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#111211] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-[#77788A]/50 focus:outline-none focus:border-[#C5E139]/50 transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="text-[#77788A] text-xs font-semibold tracking-wide uppercase block mb-2">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#111211] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-[#77788A]/50 focus:outline-none focus:border-[#C5E139]/50 transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#77788A] text-xs font-semibold tracking-wide uppercase block mb-2">Company</label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-[#111211] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-[#77788A]/50 focus:outline-none focus:border-[#C5E139]/50 transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="text-[#77788A] text-xs font-semibold tracking-wide uppercase block mb-2">Service Required</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#111211] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C5E139]/50 transition-colors"
                  >
                    <option value="" className="text-[#77788A]">Select a service...</option>
                    <option>Event Branding & Corporate Setups</option>
                    <option>Exhibition Stands & Booth Fabrication</option>
                    <option>Stage, Backdrop & Media Walls</option>
                    <option>Brand Activations & Product Launches</option>
                    <option>Signage, Wayfinding & Environmental Branding</option>
                    <option>Large-Format Printing & Graphics Production</option>
                    <option>Custom Displays, Props & Fabricated Structures</option>
                    <option>Installation, Logistics & Site Execution</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-[#77788A] text-xs font-semibold tracking-wide uppercase block mb-2">Project Brief</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#111211] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-[#77788A]/50 focus:outline-none focus:border-[#C5E139]/50 transition-colors resize-none"
                    placeholder="Tell us about your event, timeline, and budget..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-black py-4 rounded-lg hover:bg-[#d4f04a] transition-colors duration-200 group"
                >
                  Send Enquiry
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
