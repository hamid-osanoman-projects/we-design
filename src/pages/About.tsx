import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Target, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import FAQ from "@/components/FAQ";



export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Add padding so content is never hidden behind header */}
      <main className="flex-1 pt-28">
        
        {/* About Title + Orange Line */}
        {/* <section className="container mx-auto px-4 pb-6">
          <div className="flex items-center gap-4">
            <h1 className="font-tajawal text-3xl sm:text-4xl font-bold whitespace-nowrap">
              About
            </h1>

         
            <div className="h-[3px] bg-accent flex-1"></div>
          </div>
        </section> */}
        {/* =========================================================
            UPDATED COMPANY OVERVIEW SECTION
            - Fixed Width: Removed max-w-6xl to match other sections
            - Added: Creative Stats & Decorative Orange Shape
           ========================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 font-tajawal relative overflow-hidden">
          {/* Decorative faint background text or shape (Optional creative touch) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* LEFT TEXT CONTENT */}
              <div className="space-y-8 animate-fade-in-up">
                
                {/* Creative Header Group */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="h-[2px] w-10 bg-[#F28C28]"></span>
                    <span className="text-[#F28C28] font-bold tracking-widest text-sm uppercase">
                      Who We Are
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-600 leading-tight">
                    Crafting <span className="text-[#F28C28]">Inspiring</span> <br /> 
                    Spaces Since 2009
                  </h2>
                </div>

                {/* Justified Description */}
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  WE DESIGN is a premium interior, furniture, and landscape design company based in Oman.
                  We blend creativity and craftsmanship to create elegant, functional, and luxury spaces
                  with complete concept-to-execution solutions. From our headquarters in Barka and office
                  in Ghubra, Muscat, we serve homeowners, corporate offices, retail, hotels, and commercial
                  properties across Oman.
                </p>

                {/* Creative Feature: Stats / Highlights Row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center lg:text-left">
                    <h4 className="text-3xl font-bold text-[#F28C28]">15+</h4>
                    <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                  </div>
                  <div className="text-center lg:text-left border-l border-gray-200 pl-4">
                    <h4 className="text-3xl font-bold text-[#F28C28]">500+</h4>
                    <p className="text-sm text-gray-500 font-medium">Projects Done</p>
                  </div>
                  <div className="text-center lg:text-left border-l border-gray-200 pl-4">
                    <h4 className="text-3xl font-bold text-[#F28C28]">100%</h4>
                    <p className="text-sm text-gray-500 font-medium">Client Satisfaction</p>
                  </div>
                </div>

              </div>

              {/* RIGHT IMAGES - Creative Composition */}
              <div className="relative">
                {/* Decorative Orange Box Behind */}
                {/* <div className="absolute top-10 right-10 w-full h-full border-2 border-[#F28C28]/30 rounded-2xl -z-10 hidden lg:block translate-x-4 translate-y-4"></div> */}
                
                <div className="flex gap-4 lg:gap-6 justify-center lg:justify-end items-center">
                  {/* Image 1 (Taller) */}
                  <div className="relative group">
                    <img
                      src="https://i.pinimg.com/1200x/6e/87/05/6e8705c33df03d4eefe001d1fff38923.jpg"
                      alt="Interior Design Vertical"
                      className="w-44 sm:w-56 lg:w-64 h-[320px] sm:h-[400px] rounded-lg shadow-xl object-cover transition-transform duration-500 group-hover:-translate-y-2"
                    />
                  </div>

                  {/* Image 2 (Shorter/Offset) */}
                  <div className="relative group mt-12 lg:mt-24">
                     {/* Floating Badge on Image */}
                    {/* <div className="absolute -top-6 -right-6 bg-white p-3 shadow-lg rounded-full z-10 hidden sm:block">
                      <Sparkles className="text-[#F28C28] w-6 h-6" />
                    </div> */}
                    
                    <img
                      src="https://i.pinimg.com/736x/d5/40/e4/d540e474eae88aa7bcbadbe1ce643feb.jpg"
                      alt="Interior Design Square"
                      className="w-44 sm:w-56 lg:w-64 h-[280px] sm:h-[320px] rounded-lg shadow-xl object-cover transition-transform duration-500 group-hover:translate-y-2"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* ========================================================= 
            END UPDATED SECTION 
           ========================================================= */}


        {/* Philosophy Section */}
<section className="py-16 lg:py-24 bg-muted/30 font-tajawal">
  <div className="container mx-auto ">
 
    {/* Title */}
    <h2 className="font-tajawal text-gray-600 text-4xl sm:text-5xl font-bold text-center mb-20 relative">
      Our Philosophy
      <span className="block w-20 h-1 bg-[#F28C28] mx-auto mt-4 rounded-full"></span>
    </h2>

    <div className="space-y-28">


      {/* BLOCK 1 - WE CARE */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <span className="text-[#F28C28] font-semibold tracking-widest text-sm">
            WE CARE
          </span>

          <h3 className="font-tajawal text-4xl font-bold text-gray-600">
            Elevate Your <span className="text-[#F28C28]">Experience</span>
          </h3>

          <p className="text-muted-foreground leading-relaxed text-lg">
            We invest time understanding our clients before designing. 
            We deliver tailored solutions—not templates—and accompany 
            our clients throughout the entire project journey.
          </p>

          {/* Quote section */}
          <div className="flex items-start gap-4 mt-6">
            <span className="text-[#F28C28] text-6xl -mt-4 leading-none">“</span>

            <p className="text-gray-600 italic">
              Transform your space with thoughtful, client-focused solutions—crafted to suit
              your lifestyle and elevate everyday living.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE WITH ORANGE LINE */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/1200x/9e/e7/3f/9ee73f3b40daf4c4efa2d1c09eb1b1df.jpg"
            alt="We Care"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />

          {/* Orange corner line */}
          {/* <div className="absolute -left-8 top-1/2 hidden lg:block">
            <div className="w-20 h-[3px] bg-[#F28C28]"></div>
            <div className="h-28 w-[3px] bg-[#F28C28] ml-[17px]"></div>
          </div> */}
        </div>

      </div>



      {/* BLOCK 2 - WE'RE CREATIVE */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* FLIP IMAGE LEFT FOR VARIATION */}
        <div className="relative order-2 lg:order-1">
          <img
            src="https://i.pinimg.com/736x/9b/8a/7b/9b8a7b090ccc3111d8130fb0031e6525.jpg"
            alt="We’re Creative"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />

          {/* Orange corner line */}
          {/* <div className="absolute -right-8 top-1/2 hidden lg:block">
            <div className="w-20 h-[3px] bg-[#F28C28]"></div>
            <div className="h-28 w-[3px] bg-[#F28C28] ml-[17px]"></div>
          </div> */}
        </div>

        {/* CONTENT */}
        <div className="space-y-6 order-1 lg:order-2 text-left">
          <span className="text-[#F28C28] font-semibold tracking-widest text-sm">
            WE’RE CREATIVE
          </span>

          <h3 className="font-tajawal text-4xl font-bold text-gray-600">
            Design With <span className="text-[#F28C28]">Meaning</span>
          </h3>

          <p className="text-muted-foreground text-lg leading-relaxed">
            We blend aesthetics, function, and emotional experience in every design. 
            Our approach creates timeless spaces that inspire and reflect the unique 
            personality of each client.
          </p>

          <div className="flex items-start gap-4 mt-6">
            <span className="text-[#F28C28] text-6xl -mt-4 leading-none">“</span>
            <p className="text-gray-600 italic">
              Creativity rooted in purpose—crafted to shape the way you live.
            </p>
          </div>
        </div>
      </div>



      {/* BLOCK 3 - WE DELIVER */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* CONTENT */}
        <div className="space-y-6">
          <span className="text-[#F28C28] font-semibold tracking-widest text-sm">
            WE DELIVER
          </span>

          <h3 className="font-tajawal text-4xl font-bold text-gray-600">
            Excellence in <span className="text-[#F28C28]">Execution</span>
          </h3>

          <p className="text-muted-foreground leading-relaxed text-lg">
            We plan thoroughly and deliver on time and within budget. 
            With our in-house factory and expert craftsmen, we ensure 
            quality execution from concept to completion.
          </p>

          <div className="flex items-start gap-4 mt-6">
            <span className="text-[#F28C28] text-6xl -mt-4 leading-none">“</span>
            <p className="text-gray-600 italic">
              Precision, planning, and craftsmanship—your project delivered flawlessly.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/736x/ec/4a/6d/ec4a6d096079c28431744771029af570.jpg"
            alt="We Deliver"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />

          {/* Orange L-line */}
          {/* <div className="absolute -left-8 top-1/2 hidden lg:block">
            <div className="w-20 h-[3px] bg-[#F28C28]"></div>
            <div className="h-28 w-[3px] bg-[#F28C28] ml-[17px]"></div>
          </div> */}
        </div>

      </div>

    </div>
  </div>
</section>


       {/* Factory & History */}
<section className="py-20 font-tajawal">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT – PREMIUM CENTERED SLIDER */}
    <div className="relative">

      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        loop={true}
        centeredSlides={true}
        slidesPerView={3}    // center + 1 small on each side (but scaled)
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={800}
        coverflowEffect={{
          rotate: 0,
          stretch: 120,
          depth: 250,
          modifier: 1.5,
          scale: 1,
          slideShadows: false
        }}
        className="factorySlider"
      >
        {[
            "https://i.pinimg.com/736x/27/12/32/2712329704b72fa366a62629bb15d7f9.jpg",
            "https://i.pinimg.com/1200x/3a/84/c4/3a84c4768fc03f007c62b7c86f7ba198.jpg",
            "https://i.pinimg.com/1200x/fb/65/4e/fb654e7a3b29d47308eac077df3898eb.jpg",
            "https://i.pinimg.com/736x/f7/41/5c/f7415c5c520b424e85b6416db7aaf3ff.jpg",
            "https://i.pinimg.com/1200x/cf/c9/12/cfc912699a448335329823ee419d4ef4.jpg"
          ].map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt="Factory"
              className="rounded-xl object-cover w-full h-[420px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>

    {/* RIGHT – TEXT CONTENT */}
    <div className="space-y-6 text-gray-600">
      <h2 className="font-tajawal text-4xl sm:text-5xl font-bold leading-tight text-gray-600">
        Factory & Manufacturing Excellence
      </h2>

      <span className="block w-20 h-1 bg-[#F28C28] rounded-full"></span>

      <p className="text-gray-600 leading-relaxed">
        Our state-of-the-art factory in Barka, established in 2009, is equipped
        with cutting-edge CNC machinery and advanced woodworking tools—delivering
        unmatched precision and craftsmanship.
      </p>

      <p className="text-gray-600 leading-relaxed">
        From wardrobes and kitchens to custom furniture, doors, and large-scale
        joinery, we provide complete manufacturing solutions trusted across Oman.
      </p>

      <p className="text-gray-600 leading-relaxed">
        With more than 15 years of expertise, WE DESIGN stands for quality,
        innovation, and reliability in the interior design & furniture industry.
      </p>
    </div>

  </div>
</section>





       {/* Why Choose Us */}
<section className="py-16 bg-muted/30 font-tajawal">
  <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE TEXT */}
    <div>
      <p className="text-[#F28C28] font-semibold tracking-wide mb-3">
        TRANSFORM HOME TODAY!
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-600">
        Why Choose Us?
      </h2>

      <ul className="space-y-6 text-gray-600">
        {[
          "Efficient Production",
          "Fast & Timely Delivery",
          "Follow-Up on Project Completion",
          "Personalized Assistance & Expert Advice"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            {/* PREMIUM ICON / BADGE */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F28C28] to-[#F28C28] flex items-center justify-center text-white font-bold shadow-md">
              {String(i + 1).padStart(2, "0")}
            </div>

            <span className="text-lg font-medium">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT SIDE VIDEO */}
    <div className="rounded-xl overflow-hidden shadow-xl h-96">
      <video
        src="/videos/From KlickPin CF Pin by Cozy Nest _ Home Decor & Desig on Ваши пины in 2025 _ Interior deisgn Interior architecture design Interior design.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>


        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
