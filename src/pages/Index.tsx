import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutOffice from "@/assets/about-office.jpg";
import factoryCNC from "@/assets/factory-cnc-closeup.webp";
import factoryCraftsmanship from "@/assets/factory-craftsmanship.jpg";
import factoryMachinery from "@/assets/factory-machinery.jpg";
import factoryProduction from "@/assets/factory-production.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceFurniture from "@/assets/service-furniture.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import ClientsMarquee from "@/components/ClientMarqee";
import { OurProcess } from "@/components/OurProcess";
import { ServicesSlider } from "@/components/ServicesSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import servicePlanning from "@/assets/service-space-planning.jpg";
import serviceConstruction from "@/assets/service-construction-project-execution.webp";
import { Navigation, Autoplay } from "swiper/modules";
import serviceInterior from "@/assets/service-interior-architecture.jpg";
import serviceFitout from "@/assets/service-fitout.jpg";
import serviceWardrobes from "@/assets/service-wardrobes.jpg";
import serviceLighting from "@/assets/service-lighting.jpg";
import serviceBathroom from "@/assets/service-bathroom.jpg";
import serviceFlooring from "@/assets/service-flooring.jpg";
import serviceLandscape from "@/assets/service-landscape.jpg";



// Sample clients for marquee
const clients = [
  { name: "Client A", logo: "https://via.placeholder.com/150x50?text=Client+A" },
  { name: "Client B", logo: "https://via.placeholder.com/150x50?text=Client+B" },
  { name: "Client C", logo: "https://via.placeholder.com/150x50?text=Client+C" },
  { name: "Client D", logo: "https://via.placeholder.com/150x50?text=Client+D" },
  { name: "Client E", logo: "https://via.placeholder.com/150x50?text=Client+E" },
  { name: "Client A", logo: "https://via.placeholder.com/150x50?text=Client+A" },
  { name: "Client B", logo: "https://via.placeholder.com/150x50?text=Client+B" },
  { name: "Client C", logo: "https://via.placeholder.com/150x50?text=Client+C" },
  { name: "Client D", logo: "https://via.placeholder.com/150x50?text=Client+D" },
  { name: "Client E", logo: "https://via.placeholder.com/150x50?text=Client+E" },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />

        {/* About Preview */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/30 text-gray-600">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
  <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl font-bold">
  Crafting Inspiring <span className="text-[#F28C28]">Spaces Since 2009</span>
</h2>



  <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground font-tajawal">
    WE DESIGN is a Muscat-based interior design and construction company serving residential,
    commercial, and corporate clients across Oman. Our head office is located in Al Khuwair,
    Muscat, with an in-house joinery and custom furniture factory in Barka.
    <br />
    <br />
    We specialize in interior design, construction, turnkey fit-out solutions, and bespoke
    furniture manufacturing. From concept design to execution, our team delivers high-quality
    craftsmanship, functional spaces, and timeless designs tailored to each client’s needs.
  </p>
  {/* <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-tajawal">
    
  </p> */}
  {/* <p className="text-sm text-[#F28C28] font-tajawal">
  Interior Design&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Construction&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Fit-Out&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Custom Furniture&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Joinery Works
</p> */}
<p className="text-md text-[#F28C28] font-tajawal flex flex-wrap gap-x-2">
  <span>Interior Design</span>
  <span>|</span>
  <span>Construction</span>
  <span>|</span>
  <span>Fit-Out</span>
  <span>|</span>
  <span>Custom Furniture</span>
  <span>|</span>
  <span>Joinery Works</span>
</p>





  <Link to="/about" className="block pt-4 sm:pt-6 lg:pt-8 text-gray-600">
    <Button variant="outline" size="lg" className="group font-tajawal text-gray-600">
      Learn More About Us
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  </Link>
</div>


              <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={aboutOffice}
                  alt="WE DESIGN Interior Design Studio Muscat Oman"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <ClientsMarquee clients={clients} /> */}

        {/* Services */}
<section className="py-12 sm:py-16 lg:py-20 font-tajawal">
  <div className="container mx-auto">

    {/* Title */}
    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-600">
        Premium Interior <span className="text-[#F28C28]">& Furniture Solutions</span>
      </h2>

      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
        From interior architecture to custom joinery — complete design and manufacturing solutions in Oman
      </p>
    </div>

    {/* Slider Wrapper */}
    <div className="relative">

      {/* Left Arrow */}
      <button className="services-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-[#F28C28] hover:text-white transition">
        <ChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button className="services-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-[#F28C28] hover:text-white transition">
        <ChevronRight size={22} />
      </button>

      {/* swiper */}
      <Swiper
  modules={[Navigation, Autoplay]}
  navigation={{
    prevEl: ".services-prev",
    nextEl: ".services-next",
  }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  spaceBetween={24}
  slidesPerView={1.1}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  <SwiperSlide>
    <Link to="/services">
      <ServiceCard
        title="Interior Architecture"
        description="Complete interior design, drawings, specifications, and material selection for residential and commercial projects."
        image={serviceInterior}
      />
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link to="/services">
      <ServiceCard
        title="Space Planning"
        description="Functional and aesthetic layouts that optimize flow, efficiency, and spatial harmony."
        image={servicePlanning}
      />
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link to="/services">
      <ServiceCard
        title="Remodeling & Fit-Out"
        description="Turnkey fit-out execution from demolition to final handover with strict quality control."
        image={serviceFitout}
      />
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link to="/services">
      <ServiceCard
        title="Custom Furniture & Joinery"
        description="Bespoke furniture, wardrobes, and joinery crafted in our Barka production facility."
        image={serviceFurniture}
      />
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link to="/services">
      <ServiceCard
        title="Kitchens & Wardrobes"
        description="Premium kitchen cabinetry and customized wardrobes with expert installation."
        image={serviceWardrobes}
      />
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link to="/services">
      <ServiceCard
        title="Lighting & Ceilings"
        description="Decorative ceilings and integrated lighting systems to enhance interior ambience."
        image={serviceLighting}
      />
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link to="/services">
      <ServiceCard
        title="Bathroom & Kitchen Design"
        description="Complete bathroom and kitchen design with layouts, materials, fixtures, and 3D visualization."
        image={serviceBathroom}
      />
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link to="/services">
      <ServiceCard
        title="Flooring Solutions"
        description="Hardwood, marble, tiles, and decorative flooring for residential and commercial interiors."
        image={serviceFlooring}
      />
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link to="/services">
      <ServiceCard
        title="Landscape Design"
        description="Outdoor living design, garden planning, and complete landscape development."
        image={serviceLandscape}
      />
    </Link>
  </SwiperSlide>

  <SwiperSlide>
    <Link to="/services">
      <ServiceCard
        title="Construction & Project Execution"
        description="End-to-end construction, MEP coordination, and complete project management across Oman."
        image={serviceConstruction}
      />
    </Link>
  </SwiperSlide>
      </Swiper>

    </div>

  </div>
</section>




        

        {/* Factory Highlight */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/20 font-tajawal">
          <div className="container mx-auto"> 
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              {/* <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-600">
                In-House Furniture Factory
              </h2> */}
              <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-600">
  In-House <span className="text-[#F28C28]">Furniture Factory</span>
</h2>


              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Established in 2009, our state-of-the-art manufacturing facility in Barka delivers precision woodwork with exceptional quality
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto font-tajawal text-gray-600">
              {/* Images Grid */}
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="relative h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-elegant group">
                      <img
                        src={factoryCNC}
                        alt="Furniture Factory Barka Oman - Advanced machinery"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative h-36 sm:h-40 lg:h-48 rounded-2xl overflow-hidden shadow-elegant group">
                      <img
                        src={factoryCraftsmanship}
                        alt="Custom Joinery Workshop Oman - Quality craftsmanship"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                    <div className="relative h-36 sm:h-40 lg:h-48 rounded-2xl overflow-hidden shadow-elegant group">
                      <img
                        src={factoryMachinery}
                        alt="Machinery Woodwork Factory"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-elegant group">
                      <img
                        src={factoryProduction}
                        alt="Furniture Manufacturing Barka - Modern production line"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 lg:space-y-8 order-1 lg:order-2 font-tajawal">
                {[
                  {
                    title: "Advanced Technology",
                    desc: "Precision manufacturing with state-of-the-art machines, lipping equipment, and beam saws",
                  },
                  {
                    title: "Complete Woodwork Solutions",
                    desc: "Custom furniture, cabinetry, wardrobes, kitchens, doors, and decorative joinery",
                  },
                  {
                    title: "Trusted Across Oman",
                    desc: "Proven track record with contractors and major commercial clients throughout Oman",
                  },
                  {
                    title: "Fast-Track Production",
                    desc: "Rapid turnaround for large-scale projects without compromising on quality",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-lg border border-border/50 hover:border-[#F28C28]/50 transition-colors">
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-md sm:text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <Link to="/about">
                  <Button size="lg" className="w-full sm:w-auto group font-tajawal mt-5" >
                    Explore Factory Capabilities
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section> 

        
        <OurProcess />
                {/* Featured Projects */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-600">
  Featured Interior{" "}
  <span className="text-[#F28C28]">Projects</span>
</h2>

              <p className="text-base sm:text-lg text-muted-foreground px-4 font-tajawal">
                Explore our portfolio of luxury interior and custom furniture projects across Muscat and Oman
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12 font-tajawal text-gray-600">
              <ProjectCard
                title="Al Mouj Villa Interior"
                location="Muscat, Oman"
                description="Complete luxury interior design and custom furniture for a premium waterfront villa with modern aesthetics"
                image={projectVilla}
              />
              <ProjectCard
                title="Corporate Office Fit-Out"
                location="Ghubra, Muscat"
                description="Modern office space design with custom workstations, meeting rooms, and premium joinery"
                image={aboutOffice}
              />
              <ProjectCard
                title="Premium Kitchen & Wardrobes"
                location="Barka, Oman"
                description="Custom kitchen cabinetry and bedroom wardrobes with precision joinery and premium finishes"
                image={serviceKitchen}
              />
            </div>
            {/* <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center px-4 font-tajawal">
              <Link to="/projects">
                <Button variant="outline" size="lg" className="group w-full sm:w-auto">
                  View All Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="default" size="lg" className="group w-full sm:w-auto">
                  Browse Gallery
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
