import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import MarqueeSection from "@/components/MarqueeSection";
import serviceConstruction from "@/assets/service-construction-project-execution.webp";
import inspiringspace from "@/assets/inspiringspace.jpg"
import interiordesign from "@/assets/interiordesign.jpg"
import spaceplanning from "@/assets/spaceplanning.jpg"
import remodeling from "@/assets/remodeling.jpg"
import customefurniture from "@/assets/customfurniture.jpg"
import wardrobe from "@/assets/wardrobe.jpg";
import lighting from "@/assets/lighting.jpg";
import bathroom from "@/assets/bathroom.jpg";
import flooring from "@/assets/flooring.jpg";
import landscape from "@/assets/landscape.jpg";
import featuredInterior from "@/assets/featuredinterior.jpg"
import Fitout from "@/assets/Fitout.jpg"



export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        


        {/* Services – Style Layout */}
<section className="py-16 lg:py-24 bg-muted/20">
  <div className="container mx-auto  space-y-10">

    {/* Section Title */}
    <div className="flex items-center mb-6 gap-4">
  <h2 className="text-4xl sm:text-5xl font-tajawal font-bold tracking-tight text-gray-600">
    Premium Services Tailored <span className="text-[#F28C28]">for Every Space</span>
  </h2>
  <div className="flex-1 h-1 bg-[#F28C28] rounded"></div>
</div>
<p className="mt-3 text-muted-foreground text-lgfont-tajawal">
  From interior architecture to landscaping, our full-suite design and execution
  services ensure refined aesthetics and lasting quality.
</p>


    <MarqueeSection />


    {/* 1. Interior Architecture */}
    <div className="grid lg:grid-cols-2 gap-12 items-center text-gray-600 space-y-4 font-tajawal">
      <div>
        <div className="h-1 w-12 bg-[#F28C28] mb-4 "></div>
        <h3 className="text-4xl font-bold mb-4 text-gray-600">Interior Architecture</h3>
        <p className="text-muted-foreground text-lg mb-6">
          Complete interior design services including drawings, specifications,
          material selection, color consulting, and space planning for residential
          and commercial projects.
        </p>
      </div>
      <img src={interiordesign} className="rounded-lg shadow-lg object-cover w-full h-[340px]" />
    </div>

    


    {/* 2. Space Planning – reversed */}
    <div className="grid lg:grid-cols-2 gap-12 items-center text-gray-600">
      <img src={spaceplanning} className="rounded-lg shadow-lg object-cover w-full h-[340px]" />

      <div>
        <div className="h-1 w-12 bg-[#F28C28] mb-4"></div>
        <h3 className="text-4xl font-tajawal font-bold mb-4">Space Planning</h3>
        <p className="text-muted-foreground mb-6 font-tajawal text-lg">
          Functional and aesthetic space planning solutions that optimize flow,
          maximize utility, and create harmonious environments.
        </p>
      </div>
    </div>

    {/* 3. Remodeling & Fit-Out */}
    <div className="grid lg:grid-cols-2 gap-12 items-center text-gray-600">
      <div>
        <div className="h-1 w-12 bg-[#F28C28] mb-4"></div>
        <h3 className="text-4xl font-tajawal font-bold mb-4">Remodeling & Fit-Out</h3>
        <p className="text-muted-foreground mb-6 font-tajawal text-lg">
          Turnkey fit-out execution from demolition to final handover, including
          contractor coordination, scheduling, and strict quality control.
        </p>
      </div>
      <img src={remodeling} className="rounded-lg shadow-lg object-cover w-full h-[340px]" />
    </div>

    {/* 4. Custom Furniture & Joinery – reversed */}
    <div className="grid lg:grid-cols-2 gap-12 items-center text-gray-600">
      <img src={customefurniture} className="rounded-lg shadow-lg object-cover w-full h-[340px]" />

      <div>
        <div className="h-1 w-12 bg-[#F28C28] mb-4"></div>
        <h3 className="text-4xl font-tajawal font-bold mb-4">Custom Furniture & Joinery</h3>
        <p className="text-muted-foreground mb-6 font-tajawal text-lg">
          Precision manufactured bespoke furniture, wardrobes, wood panels,
          and joinery crafted in our Barka production facility.
        </p>
      </div>
    </div>

    {/* 5. Kitchens & Wardrobes */}
    <div className="grid lg:grid-cols-2 gap-12 items-center text-gray-600">
      <div>
        <div className="h-1 w-12 bg-[#F28C28] mb-4"></div>
        <h3 className="text-4xl font-tajawal font-bold mb-4">Kitchens & Wardrobes</h3>
        <p className="text-muted-foreground mb-6 font-tajawal text-lg">
          Premium kitchen cabinetry and bedroom wardrobes with fully customized
          layouts, finishes, storage systems, and expert installation.
        </p>
      </div>
      <img src={wardrobe} className="rounded-lg shadow-lg object-cover w-full h-[340px]" />
    </div>

    {/* 6. Lighting & Ceilings – reversed */}
    <div className="grid lg:grid-cols-2 gap-12 items-center text-gray-600">
      <img src={lighting} className="rounded-lg shadow-lg object-cover w-full h-[340px]" />

      <div>
        <div className="h-1 w-12 bg-[#F28C28] mb-4"></div>
        <h3 className="text-4xl font-tajawal font-bold mb-4">Lighting & Ceilings</h3>
        <p className="text-muted-foreground mb-6 font-tajawal text-lg">
          Decorative ceilings, integrated lighting systems, accent lighting,
          and modern fixture selection designed to enhance spatial ambience.
        </p>
      </div>
    </div>

    {/* 7. Bathroom & Kitchen Design */}
    <div className="grid lg:grid-cols-2 gap-12 items-center text-gray-600">
      <div>
        <div className="h-1 w-12 bg-[#F28C28] mb-4"></div>
        <h3 className="text-4xl font-tajawal font-bold mb-4">Bathroom & Kitchen Design</h3>
        <p className="text-muted-foreground mb-6 font-tajawal text-lg">
          Complete bathroom and kitchen design services including layout planning,
          materials specification, fixture selection, and 3D visualization.
        </p>
      </div>
      <img src={bathroom} className="rounded-lg shadow-lg object-cover w-full h-[340px]" />
    </div>

    {/* 8. Flooring Solutions – reversed */}
    <div className="grid lg:grid-cols-2 gap-12 items-center text-gray-600">
      <img src={flooring} className="rounded-lg shadow-lg object-cover w-full h-[340px]" />

      <div>
        <div className="h-1 w-12 bg-[#F28C28] mb-4"></div>
        <h3 className="text-4xl font-tajawal font-bold mb-4">Flooring Solutions</h3>
        <p className="text-muted-foreground mb-6 font-tajawal text-lg">
          Premium flooring options including hardwood, marble, tiles, and
          decorative flooring for residential and commercial interiors.
        </p>
      </div>
    </div>

    {/* 9. Landscape Design */}
    <div className="grid lg:grid-cols-2 gap-12 items-center text-gray-600">
      <div>
        <div className="h-1 w-12 bg-[#F28C28] mb-4"></div>
        <h3 className="text-4xl font-tajawal font-bold mb-4">Landscape Design</h3>
        <p className="text-muted-foreground mb-6 font-tajawal text-lg">
          Outdoor living design, hardscaping, planting plans, garden layouts,
          and complete landscape development for homes and commercial properties.
        </p>
      </div>
      <img src={landscape} className="rounded-lg shadow-lg object-cover w-full h-[340px]" />
    </div>

    {/* 10. Construction & Project Execution – reversed */}
<div className="grid lg:grid-cols-2 gap-12 items-center text-gray-600">
  <img
    src={serviceConstruction}
    className="rounded-lg shadow-lg object-cover w-full h-[340px]"
  />

  <div>
    <div className="h-1 w-12 bg-[#F28C28] mb-4"></div>
    <h3 className="text-4xl font-tajawal font-bold mb-4">
      Construction & Project Execution
    </h3>
    <p className="text-muted-foreground mb-6 font-tajawal text-lg">
      End-to-end construction services including civil works, structural
      execution, MEP coordination, and complete project management for
      residential and commercial developments across Oman.
    </p>
  </div>
</div>

  </div>
</section>


  


{/* OUR PROCESS SECTION */}
<section className="py-20 bg-white text-gray-600">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

{/* LEFT SIDE – 4 IMAGE GRID WITH TORN EFFECT */}
<div className="grid grid-cols-2 gap-10">

  {[
    {
      img: "https://i.pinimg.com/1200x/0a/29/93/0a299338bb7e4126c7bd56c1d8b5ccb1.jpg",
      rotate: "-rotate-2",
    },
    {
      
      img: "https://i.pinimg.com/1200x/c2/69/29/c26929b0cc38c98c7a6860cc8955464a.jpg", 
      rotate: "rotate-1",
    },
    {
      img: "https://i.pinimg.com/1200x/5b/36/d0/5b36d0e9222a9035141f064a1628010d.jpg",
      rotate: "-rotate-1",
    },
    {
      img: "https://i.pinimg.com/736x/42/f7/3a/42f73a9261572478cabce6041283c3b1.jpg",
      rotate: "rotate-2",
    },
  ].map((item, i) => (
    <div
      key={i}
      className={`relative bg-gray-100 p-3 shadow-lg w-[85%] torn-mask rounded-sm ${item.rotate}`}
    >
      {/* TAPE TOP LEFT */} 
      <span className="absolute -top-2 left-4 w-10 h-3 bg-[#F28C28] opacity-80 rotate-[-6deg] rounded-sm"></span>

      {/* TAPE RIGHT */}
      <span className="absolute top-1/2 -right-3 w-10 h-3 bg-[#F28C28] opacity-70 rotate-[12deg] rounded-sm"></span>

      {/* IMAGE */}
      <img
        src={item.img}
        className="w-full h-full object-cover rounded-sm"
      />
    </div>
  ))}

</div>


{/* RIGHT SIDE – PROCESS STEPS */}
<div>
  <h2 className="font-tajawal text-5xl font-bold mb-12">Our Process</h2>

  <div className="space-y-8">
    {[
      {
        step: "01",
        title: "Consultation",
        desc: "We meet to understand your vision, requirements, space, budget, and timeline."
      },
      {
        step: "02",
        title: "Concept & Design Development",
        desc: "We create concepts, mood boards, 2D drawings, 3D renders, and finalize materials and specifications."
      },
      {
        step: "03",
        title: "Manufacturing",
        desc: "Custom furniture and interior components are produced in our factory in Barka with precision craftsmanship."
      },
      {
        step: "04",
        title: "Installation & Handover",
        desc: "Professional installation, on-site execution, final inspection, quality checks, and complete handover."
      }
    ].map((item, i) => (
      <div key={i} className="flex gap-6 items-start">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">{item.step}</span>
          </div>
        </div>

        <div>
          <h3 className="font-tajawal text-2xl font-bold mb-1">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  </div>
</section>



      </main>

      <Footer />
    </div>
  );
}
