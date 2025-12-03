import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { projects, Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react"; 

// 1. UPDATED MARQUEE SECTION
// const MarqueeSection = () => {
//   const textItem = "WE CARE ✦ WE'RE CREATIVE ✦ WE DELIVER ✦";
//   const repeatCount = 8;
//   const repeatedText = Array(repeatCount).fill(textItem);

//   return (
//     // CHANGE: Added 'container mx-auto px-4' to the outer wrapper.
//     // This forces the marquee to stop at the same width as your other content.
//     <div className="container mx-auto px-4 my-12">
      
//       {/* The Orange Bar: Added rounded corners for a cleaner look since it's now a "bar" */}
//       <div className="w-full overflow-hidden bg-[#F28C28] py-1 ">
        
//         <div className="marquee-track">
//           <div className="marquee-content">
//             {repeatedText.map((item, index) => (
//               <span key={`p1-${index}`} className="marquee-item">{item}</span>
//             ))}
//           </div>
//           <div className="marquee-content" aria-hidden="true">
//             {repeatedText.map((item, index) => (
//               <span key={`p2-${index}`} className="marquee-item">{item}</span>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

const categories = ["All", "Interior Design", "Commercial Fit-Out", "Custom Furniture", "Landscape", "Hospitality"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col font-tajawal">
      <Header />
      
      <main className="flex-1 pt-32">

        {/* =========================================================
            1. PROJECT INTRO SECTION 
           ========================================================= */}
        <section className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT: Text Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <span className="h-[3px] w-12 bg-[#F28C28]"></span>
                 <span className="text-[#F28C28] font-bold tracking-widest text-sm uppercase">
                   Our Portfolio
                 </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-600 leading-tight">
                Where Design Meets <br />
                <span className="text-[#F28C28]">Perfection.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed text-justify text-gray-500">
                Explore a curated selection of our finest work. From luxurious residential 
                villas in Muscat to high-end commercial fit-outs, every project reflects 
                our commitment to precision, aesthetics, and functionality.
              </p>

              {/* <div className="pt-6 border-t border-gray-100 flex gap-8">
                <div>
                   <p className="text-3xl font-bold text-gray-600">100<span className="text-[#F28C28]">+</span></p>
                   <p className="text-sm text-gray-400 font-medium">Completed Projects</p>
                </div>
                <div className="border-l pl-8">
                   <p className="text-3xl font-bold text-gray-600">15<span className="text-[#F28C28]">+</span></p>
                   <p className="text-sm text-gray-400 font-medium">Years Expertise</p>
                </div>
              </div> */}
            </div>

            {/* RIGHT: Featured Project Image */}
            <div className="relative flex justify-center lg:justify-end">
               <img 
                 src="https://i.pinimg.com/1200x/16/5d/bc/165dbcc7056f19cdf09e708c948d6475.jpg" 
                 alt="Featured Project"
                 className="w-full max-w-md rounded-lg shadow-xl object-cover h-[300px]"
               />

               {/* Featured Card */}
               <div className="absolute bottom-8 -left-4 sm:left-4 bg-white p-5 rounded-lg shadow-2xl max-w-[200px] border-l-4 border-[#F28C28] hidden sm:block">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Latest Project</p>
                  <p className="text-gray-600 font-bold leading-snug">Private Villa in Muscat Hills</p>
                  {/* <div className="mt-3 flex items-center text-[#F28C28] text-xs font-bold gap-1 cursor-pointer">
                    VIEW DETAILS <ArrowUpRight className="w-3 h-3" />
                  </div> */}
               </div>
            </div>

          </div>
        </section>


        {/* =========================================================
            2. MARQUEE DIVIDER (NOW ALIGNED WITH CONTAINER)
           ========================================================= */}
        {/* <MarqueeSection /> */}


      {/* =========================================================
    3. FILTER & GRID SECTION
   ========================================================= */}
<section className="pb-24 pt-8">
  <div className="container mx-auto px-4">
    
    {/* CREATIVE FILTER BAR 
        Instead of heavy buttons, we use a sleek text-based list 
        with an elegant active state. 
    */}
    <div className="flex flex-col items-center mb-16 space-y-4">
      <h2 className="text-sm font-bold tracking-[0.2em] text-[#F28C28] uppercase">
        Discover
      </h2>
      
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                relative px-5 py-2 text-sm sm:text-base font-medium transition-all duration-300 rounded-full border
                ${
                  isActive
                    ? "border-[#F28C28] bg-[#F28C28] text-white shadow-lg shadow-orange-500/20"
                    : "border-transparent bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>

    {/* Projects Grid 
        Using 'gap-y-12' to give more vertical breathing room between rows
    */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {filteredProjects.map((project, index) => (
        // Adding a staggered fade-in animation for a premium load feel
        <div 
          key={project.id} 
          className="animate-fade-in-up" 
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ProjectCard 
            {...project} 
            onClick={() => setSelectedProject(project)}
          />
        </div>
      ))}
    </div>

    {/* Empty State */}
    {filteredProjects.length === 0 && (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
          <span className="text-2xl">?</span>
        </div>
        <p className="text-gray-500 text-lg">No projects found in this category.</p>
        <button 
          onClick={() => setActiveCategory("All")}
          className="mt-4 text-[#F28C28] font-semibold hover:underline"
        >
          View all projects
        </button>
      </div>
    )}

  </div>
</section>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      <Footer />
    </div>
  );
}