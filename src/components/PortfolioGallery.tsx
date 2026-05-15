'use client'

import { useState } from 'react';
import { X, MapPin, Calendar, Layers, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectData } from '../data/projectsData';

interface PortfolioGalleryProps {
  projects: ProjectData[];
  title?: string;
  showTitle?: boolean;
}

export default function PortfolioGallery({ projects, title = "Portfolio", showTitle = true }: PortfolioGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev < selectedProject.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : selectedProject.images.length - 1
      );
    }
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openFullImage = () => {
    setShowFullImage(true);
  };

  const closeFullImage = () => {
    setShowFullImage(false);
  };

  return (
    <section className="py-20 bg-[#0e0f0e]">
      <div className="max-w-7xl mx-auto px-6">
        {showTitle && (
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C5E139]" />
              <span className="text-[#C5E139] text-xs font-bold tracking-[0.25em] uppercase">{title}</span>
              <div className="h-px w-10 bg-[#C5E139]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Our <span className="text-[#00A6E0]">Work</span>
            </h2>
            <p className="text-[#77788A] max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of brand experiences, from corporate launches to experiential activations.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-[#111211] border border-white/5 hover:border-[#C5E139]/20 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={`${project.title} - ${project.category} for ${project.client}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f0e]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-[#C5E139] text-xs font-bold tracking-wider uppercase mb-1">{project.category}</div>
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <p className="text-[#77788A] text-sm">{project.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-[#0e0f0e] w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image Section */}
              <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden cursor-pointer group" onClick={openFullImage}>
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${selectedProject.category}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    console.error('Image failed to load:', selectedProject.images[currentImageIndex]);
                    e.currentTarget.src = '/placeholder-image.jpg'; // fallback
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                    Click to view full image
                  </div>
                </div>

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                >
                  <X size={20} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Image Strip */}
              {selectedProject.images.length > 1 && (
                <div className="p-4 border-b border-white/10 bg-[#111411]">
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => selectImage(index)}
                        className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-colors rounded ${
                          index === currentImageIndex
                            ? 'border-[#C5E139] ring-2 ring-[#C5E139]/30'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`View ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.error('Thumbnail failed to load:', image);
                            e.currentTarget.src = '/placeholder-image.jpg';
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="max-h-96 overflow-y-auto p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">{selectedProject.title}</h3>
                    <div className="flex items-center gap-4 text-[#77788A] text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {selectedProject.location}
                      </span>
                      <span className="text-[#C5E139] font-semibold">{selectedProject.client}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#C5E139]/20 text-[#C5E139] text-xs font-bold uppercase">
                        {selectedProject.industry}
                      </span>
                      <span className="px-3 py-1 bg-[#00A6E0]/20 text-[#00A6E0] text-xs font-bold uppercase">
                        {selectedProject.service}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Layers size={18} className="text-[#C5E139]" />
                      Project Scope
                    </h4>
                    <p className="text-[#77788A] leading-relaxed">{selectedProject.scope}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <ArrowRight size={18} className="text-[#00A6E0]" />
                      WNG Role
                    </h4>
                    <p className="text-[#77788A] leading-relaxed">{selectedProject.role}</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mb-8">
                  <h4 className="text-white font-bold mb-3">Results</h4>
                  <p className="text-[#77788A] leading-relaxed">{selectedProject.result}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-bold px-6 py-3 hover:bg-[#d4f04a] transition-colors"
                  >
                    Request Similar Project
                    <ArrowRight size={18} />
                  </a>
                  <button
                    onClick={closeModal}
                    className="flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 hover:border-[#C5E139] hover:text-[#C5E139] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Image Viewer */}
        {showFullImage && selectedProject && (
          <div
            className="fixed inset-0 bg-black z-[60] flex items-center justify-center"
            onClick={closeFullImage}
          >
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} - ${selectedProject.category} - Full view`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation Arrows */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>

            <button
              onClick={closeFullImage}
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center rounded-full"
            >
              <X size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}