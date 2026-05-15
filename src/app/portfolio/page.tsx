'use client'

import { useState, useEffect } from 'react';
import { ArrowRight, Images, Settings } from 'lucide-react';
import PortfolioGallery from '../../components/PortfolioGallery';
import CategoryGallery from '../../components/CategoryGallery';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { projectsData } from '../../data/projectsData';
import { categoriesData } from '../../data/categoriesData';

type ViewType = 'categories' | 'projects';

export default function PortfolioPage() {
  const [currentView, setCurrentView] = useState<ViewType>('projects');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0f0e] text-white">
      <Header scrolled={scrolled} />
      <main className="pt-24">
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            {/* Title Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#C5E139]" />
                <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">Portfolio</span>
                <div className="h-px w-10 bg-[#C5E139]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Our <span className="text-[#00A6E0]">Work</span>
              </h2>
              <p className="text-[#77788A] max-w-2xl mx-auto leading-relaxed">
                Explore our portfolio of brand experiences, from corporate launches to experiential activations.
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#111411] border border-white/10 p-1 flex">
                <button
                  onClick={() => setCurrentView('projects')}
                  className={`px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                    currentView === 'projects'
                      ? 'bg-[#C5E139] text-[#0e0f0e]'
                      : 'text-white hover:text-[#C5E139]'
                  }`}
                >
                  Browse by Project
                </button>
                <button
                  onClick={() => setCurrentView('categories')}
                  className={`px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                    currentView === 'categories'
                      ? 'bg-[#C5E139] text-[#0e0f0e]'
                      : 'text-white hover:text-[#C5E139]'
                  }`}
                >
                  Browse by Category
                </button>
              </div>
            </div>

            {/* Content */}
            {currentView === 'projects' ? (
              <PortfolioGallery projects={projectsData} title="Projects" showTitle={false} />
            ) : (
              <CategoryGallery categories={categoriesData} title="Service Categories" showTitle={false} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
