'use client'

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CategoryData } from '../data/categoriesData';

interface CategoryGalleryProps {
  categories: CategoryData[];
  title?: string;
  showTitle?: boolean;
}

export default function CategoryGallery({ categories, title = "Categories", showTitle = true }: CategoryGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);

  const openModal = (category: CategoryData) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prev) =>
        prev < selectedCategory.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : selectedCategory.images.length - 1
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
              Browse by <span className="text-[#00A6E0]">Service</span>
            </h2>
            <p className="text-[#77788A] max-w-2xl mx-auto leading-relaxed">
              Explore our work organized by service categories, showcasing different aspects of our production capabilities.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="group relative overflow-hidden bg-[#111211] border border-white/5 hover:border-[#C5E139]/20 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(category)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={category.images[0]}
                  alt={`${category.name} service examples`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f0e]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{category.name}</h3>
                  <p className="text-[#77788A] text-sm">{category.images.length} examples</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Modal */}
        {selectedCategory && (
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
                  src={selectedCategory.images[currentImageIndex]}
                  alt={`${selectedCategory.name} service example`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                    Click to view full image
                  </div>
                </div>

                {/* Navigation Arrows */}
                {selectedCategory.images.length > 1 && (
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
                  {currentImageIndex + 1} / {selectedCategory.images.length}
                </div>
              </div>

              {/* Image Strip */}
              {selectedCategory.images.length > 1 && (
                <div className="p-4 border-b border-white/10">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedCategory.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => selectImage(index)}
                        className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-colors ${
                          index === currentImageIndex
                            ? 'border-[#C5E139]'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`View ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Category Info */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-white mb-2">{selectedCategory.name}</h3>
                  <p className="text-[#77788A] leading-relaxed">
                    Examples of our {selectedCategory.name.toLowerCase()} work, showcasing our production quality and attention to detail.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-[#C5E139] text-[#0e0f0e] font-bold px-6 py-3 hover:bg-[#d4f04a] transition-colors"
                  >
                    Request {selectedCategory.name} Service
                    <ChevronRight size={18} />
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
        {showFullImage && selectedCategory && (
          <div
            className="fixed inset-0 bg-black z-[60] flex items-center justify-center"
            onClick={closeFullImage}
          >
            <img
              src={selectedCategory.images[currentImageIndex]}
              alt={`${selectedCategory.name} service example - Full view`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation Arrows */}
            {selectedCategory.images.length > 1 && (
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
              {currentImageIndex + 1} / {selectedCategory.images.length}
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