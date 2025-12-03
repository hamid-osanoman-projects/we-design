import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroInterior from "@/assets/hero-interior-architecture.jpg";
import heroCNC from "@/assets/hero-cnc-factory.jpg";
import heroFitout from "@/assets/hero-fitout.jpg";
import heroLandscape from "@/assets/hero-landscape.jpg";

const slides = [
  {
    title: "Interior Architecture",
    subtitle: "Transforming spaces with modern & functional concepts.",
    cta: "Request Consultation",
    image: heroInterior
  },
  {
    title: "Custom Furniture & Joinery",
    subtitle: "In-house CNC factory — precision workmanship since 2009.",
    cta: "Explore Factory",
    image: heroCNC
  },
  {
    title: "Turnkey Fit-Out",
    subtitle: "Complete project execution from concept to delivery.",
    cta: "View Projects",
    image: heroFitout
  },
  {
    title: "Landscape Design",
    subtitle: "Outdoor design for residential & commercial spaces.",
    cta: "Contact Us",
    image: heroLandscape
  }
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">


      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`${slide.title} - WE DESIGN Oman premium interior design and custom furniture`}
            className="w-full h-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
  <div className="container mx-auto">
  <div
    key={current}
    className="relative max-w-2xl pl-10 py-10 font-tajawal frame-box"
  >
    <span className="line-top"></span>
    <span className="line-vertical"></span>
    <span className="line-bottom"></span>

    <h1 className="text-white font-bold text-5xl lg:text-7xl">
      {slide.title}
    </h1>

    <p className="text-white/90 text-xl lg:text-2xl">
      {slide.subtitle}
    </p>

    {/* <Button variant="premium" size="lg">{slide.cta}</Button> */}
  </div>
</div>

</div>

        </div>
      ))}
      
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-8 sm:w-12 h-1 rounded-full transition-all ${
              idx === current ? "bg-[#F28C28]" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
