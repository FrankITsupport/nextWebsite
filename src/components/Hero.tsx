import { ArrowRight, Images, MessageCircle } from 'lucide-react';

const proofPoints = [
  { val: '10+', label: 'Years delivering' },
  { val: '500+', label: 'Projects completed' },
  { val: 'Nairobi', label: 'Production hub' },
  { val: 'End-to-end', label: 'Design to install' },
];

const projectImages = [
  {
    src: '/assets/projects media/Custom Builds/IMG_20230915_181657_optimized_large.jpg',
    alt: 'Finished event branding installation by Woodnork Green',
  },
  {
    src: '/assets/projects media/Custom Builds/IMG_20231027_103341_optimized_large.jpg',
    alt: 'Custom branded display fabrication by Woodnork Green',
  },
  {
    src: '/assets/projects media/Custom Builds/IMG_20240126_131539_optimized_large.jpg',
    alt: 'Corporate event setup and branded backdrop by Woodnork Green',
  },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-[#0e0f0e] pt-28">
      <img
        src="/assets/projects media/Custom Builds/IMG_20230913_010142_optimized_large.jpg"
        alt="Large corporate event branding setup produced by Woodnork Green"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,15,14,0.96)_0%,rgba(14,15,14,0.84)_36%,rgba(14,15,14,0.22)_72%,rgba(14,15,14,0.04)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[linear-gradient(0deg,#0e0f0e_0%,rgba(14,15,14,0)_100%)]" />

      <div className="w-full px-6 pb-10 md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.55fr)] lg:items-end">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="h-px w-10 bg-[#C5E139]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5E139]">
                Woodnork Green Ltd
              </span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-white/55 sm:inline">
                Nairobi production partner
              </span>
            </div>

            <h1 className="max-w-5xl text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Event branding and fabrication for brand experiences that need to look finished.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
              We design, print, fabricate, deliver, and install corporate event environments, exhibition stands, launch sets, signage, displays, and activation spaces across Kenya.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#final-cta"
                className="group inline-flex items-center justify-center gap-2 rounded bg-[#C5E139] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#0e0f0e] transition-colors duration-200 hover:bg-[#d4f04a]"
              >
                Request a Quote
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/254780397798?text=Hello%20Woodnork%20Green%20team.%20I%20would%20like%20to%20share%20a%20brief%20for%20an%20event%20branding%20or%20fabrication%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-200 hover:border-[#C5E139] hover:text-[#C5E139]"
              >
                <MessageCircle size={18} />
                Share Brief
              </a>
              <a
                href="#featured-projects"
                className="inline-flex items-center justify-center gap-2 rounded border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:border-[#00A6E0] hover:text-[#00A6E0]"
              >
                <Images size={18} />
                View Work
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              {proofPoints.map((item) => (
                <div key={item.label}>
                  <div className="text-xl font-black text-[#C5E139] md:text-2xl">{item.val}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/56">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="mb-5 ml-auto max-w-[330px] border-l border-[#C5E139] pl-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C5E139]">
                Production ready
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                Built for launches, conferences, exhibitions, activations, and premium corporate environments.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {projectImages.map((image) => (
                <a
                  key={image.src}
                  href="#featured-projects"
                  className="group relative aspect-[4/5] overflow-hidden rounded border border-white/15 bg-white/5"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <span className="absolute inset-0 border border-transparent transition-colors duration-200 group-hover:border-[#C5E139]/70" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
