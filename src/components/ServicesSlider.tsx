import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import serviceInterior from "@/assets/service-interior-architecture.jpg";
import servicePlanning from "@/assets/service-space-planning.jpg";
import serviceFitout from "@/assets/service-fitout.jpg";
import serviceFurniture from "@/assets/service-furniture.jpg";
import serviceConstruction from "@/assets/service-construction-project-execution.jpg";

type ServiceItem = {
  title: string;
  image: string;
  link: string;
};

const services: ServiceItem[] = [
  {
    title: "Interior Architecture",
    image: serviceInterior,
    link: "#interior-architecture",
  },
  {
    title: "Space Planning",
    image: servicePlanning,
    link: "#space-planning",
  },
  {
    title: "Fit-Out & Remodeling",
    image: serviceFitout,
    link: "#fitout",
  },
  {
    title: "Custom Furniture & Joinery",
    image: serviceFurniture,
    link: "#joinery",
  },
  {
    title: "Construction",
    image: serviceConstruction,
    link: "#construction",
  },
];

export function ServicesSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      spaceBetween={30}
      slidesPerView={1.2}
      breakpoints={{
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3.5 },
      }}
      className="py-10"
    >
      {services.map((service, i) => (
        <SwiperSlide key={i}>
          <a
            href={service.link}
            aria-label={`View ${service.title}`}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-xl font-bold font-tajawal">
                  {service.title}
                </h3>
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
