import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Assuming you use react-router
import heroInterior from "@/assets/hero-interior-architecture.jpg";
import heroCNC from "@/assets/hero-cnc-factory.jpg";
import heroFitout from "@/assets/hero-fitout.jpg";
import heroLandscape from "@/assets/hero-landscape.jpg";
import fitout from "@/assets/Fitout.jpg";
import landscapedesign from "@/assets/landscapedesign.jpg"
import interior from "@/assets/interior.jpg"

const slides = [
  {
    title: "Interior Architecture",
    subtitle: "Transforming spaces with modern & functional concepts.",
    cta: "Request Consultation",
    link: "/contact",
    image: interior,
  },
  {
    title: "Custom Furniture & Joinery",
    subtitle: "In-house factory — precision workmanship since 2009.",
    cta: "Explore More",
    link: "/about",
    image: heroCNC,
  },
  {
    title: "Turnkey Fit-Out",
    subtitle: "Complete project execution from concept to delivery.",
    cta: "View Projects",
    link: "/projects",
    image: fitout,
  },
  {
    title: "Landscape Design",
    subtitle: "Outdoor design for residential & commercial spaces.",
    cta: "Contact Us",
    link: "/contact",
    image: landscapedesign,
  },
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset timer function
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 6000); // Increased slightly to 6s to allow reading time
    }
    return () => resetTimeout();
  }, [current, isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden group margin-left-4">
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with Ken Burns Zoom Effect */}
            {/* Background Image with Ken Burns Zoom Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={`${slide.title} - WE DESIGN Oman`}
                // UPDATED LINE BELOW: Removed duration-[8000ms]
                className={`w-full h-full object-cover transition-transform ease-out ${
                  isActive ? "scale-110" : "scale-100"
                }`}
                // NEW LINE ADDED:
                style={{ transitionDuration: "8000ms" }} 
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>

            {/* Gradient Overlay - Darker on left for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl">
                  <div
                    className={`pl-6 sm:pl-8 border-l-4 border-[#F28C28] space-y-6 transition-all duration-1000 transform ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                  >
                    {/* Title */}
                    <h1 className="font-tajawal font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight">
                      <span className="block">{slide.title.split(" ")[0]}</span>
                      <span className="text-white/90 font-light">
                        {slide.title.split(" ").slice(1).join(" ")}
                      </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                      className={`font-tajawal text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-xl transition-all duration-1000 delay-300 transform ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA Button */}
                    <div
                      className={`pt-4 transition-all duration-1000 delay-500 transform ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      <Link to={slide.link}>
                        <Button
                          size="lg"
                          className="bg-[#F28C28] hover:bg-[#d97b20] text-white rounded-none px-8 py-6 text-lg font-tajawal group/btn"
                        >
                          {slide.cta}
                          <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows (Glassmorphism) */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-[#F28C28] hover:border-[#F28C28] transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-[#F28C28] hover:border-[#F28C28] transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(idx);
                }}
                className={`h-1 transition-all duration-500 rounded-full ${
                  idx === current ? "w-12 bg-[#F28C28]" : "w-6 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};