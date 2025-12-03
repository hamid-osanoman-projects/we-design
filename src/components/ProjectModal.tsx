import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, MapPin, Calendar, Layers, ArrowUpRight, Clock } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  const hasTransformation = project.beforeImage && project.afterImage;

  // --- WHATSAPP LOGIC ---
  const handleWhatsApp = () => {
    // Country Code (968) + Number (98502850)
    const phoneNumber = "96898502850"; 
    
    const message = `Hello, I viewed the project "${project.title}" (${project.category}) on your website and I am interested in building something similar. Can we discuss?`;
    
    // Using api.whatsapp.com for better reliability
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={`
          p-0 border-none rounded-2xl bg-white shadow-2xl outline-none max-h-[90vh] overflow-y-auto custom-scrollbar
          ${hasTransformation ? 'max-w-[95vw] lg:max-w-6xl' : 'max-w-[95vw] lg:max-w-4xl font-tajawal'}
        `}
      >
        <DialogTitle className="sr-only">{project.title}</DialogTitle>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className={`
            absolute z-50 rounded-full p-2 transition-all duration-300 group shadow-md border
            ${hasTransformation 
              ? 'right-4 top-4 bg-white/80 backdrop-blur-md hover:bg-[#F28C28] hover:text-white border-gray-100' 
              : 'right-4 top-4 bg-black/40 hover:bg-[#F28C28] text-white border-transparent' 
            }
          `}
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
        </button>

        {/* ============================================================
            SCENARIO 1: WITH SLIDER (Split Layout)
           ============================================================ */}
        {hasTransformation ? (
          <div className="flex flex-col font-tajawal">
            
            {/* TOP SECTION: Split Image & Text */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[450px]">
              
              {/* IMAGE LEFT */}
              <div className="lg:col-span-7 relative h-[300px] lg:h-auto bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                   <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#F28C28]"></span>
                      <span className="text-xs font-bold tracking-widest text-gray-700 uppercase">
                        {project.category}
                      </span>
                   </div>
                </div>
              </div>

              {/* TEXT RIGHT */}
              <div className="lg:col-span-5 p-8 lg:p-10 bg-white flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-700 leading-[1.1] mb-2">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-500 font-medium">
                    <MapPin className="w-4 h-4 text-[#F28C28]" /> 
                    <span className="tracking-wide text-sm uppercase">{project.location}</span>
                  </div>
                </div>

                <div className="space-y-6 text-gray-600 font-tajawal text-[15px] leading-relaxed text-justify">
                   <p>{project.description}</p>
                </div>

                {/* DETAILS GRID */}
                <div className="grid grid-cols-3 gap-4 py-6 mt-6 border-t border-gray-100">
                   <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Timeline</p>
                      <p className="font-bold text-gray-600">8 Weeks</p>
                   </div>
                   <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Services</p>
                      <p className="font-bold text-gray-600">Fitout</p>
                   </div>
                   <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Year</p>
                      <p className="font-bold text-gray-600">2024</p>
                   </div>
                </div>

                {/* ADDED: WHATSAPP BUTTON (Scenario 1) */}
                <div className="pt-2">
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-[#F28C28] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group"
                  >
                    Start Your Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

            {/* BOTTOM SECTION: SLIDER */}
            <div className="w-full bg-gray-50 p-8 lg:p-12 border-t border-gray-100">
               <div className="flex items-center gap-3 mb-6 justify-center">
                  <h3 className="font-tajawal text-2xl font-bold text-gray-700">
                    The Transformation
                  </h3>
               </div>

               <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-[21/9]">
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage!}
                    afterImage={project.afterImage!}
                    beforeAlt="Before Construction"
                    afterAlt="After Completion"
                  />
               </div>
               
               <p className="text-center text-gray-400 text-sm mt-4 italic">
                 Drag the slider handle to reveal the before & after comparison
               </p>
            </div>
          </div>

        ) : (
          
          // ============================================================
          // SCENARIO 2: NO SLIDER (Vertical Layout)
          // ============================================================
          <div className="flex flex-col">
            {/* HERO IMAGE */}
            <div className="relative h-[350px] sm:h-[400px] w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                 <div className="inline-block px-3 py-1 rounded-full bg-[#F28C28] text-white text-xs font-bold uppercase tracking-widest mb-3">
                   {project.category}
                 </div>
                 <h2 className="font-playfair text-4xl font-bold mb-2 shadow-sm">{project.title}</h2>
                 <p className="text-gray-200 flex items-center gap-2 font-medium">
                   <MapPin className="w-4 h-4 text-[#F28C28]" /> {project.location}
                 </p>
              </div>
            </div>

            {/* CONTENT BODY */}
            <div className="p-8 sm:p-10 space-y-8 bg-white">
              <div className="prose max-w-none">
                <h3 className="font-playfair text-2xl font-bold mb-3 text-gray-600 border-b border-gray-100 pb-2">
                  Project Overview
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 font-tajawal text-justify">
                  {project.description}
                  <span className="block mt-4">
                     With a focus on timeless elegance and modern functionality, this project demonstrates 
                     our capability to deliver turnkey solutions. Every material was hand-picked to ensure 
                     durability without compromising on the aesthetic vision.
                  </span>
                </p>
              </div>

              {/* DETAILS GRID */}
              <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-4 h-4 text-[#F28C28]" />
                    <h4 className="font-bold text-gray-600 text-sm uppercase">Services</h4>
                  </div>
                  <p className="text-sm text-gray-500">
                    Interior Design, Space Planning
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#F28C28]" />
                    <h4 className="font-bold text-gray-600 text-sm uppercase">Timeline</h4>
                  </div>
                  <p className="text-sm text-gray-500">8 weeks</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#F28C28]" />
                    <h4 className="font-bold text-gray-600 text-sm uppercase">Year</h4>
                  </div>
                  <p className="text-sm text-gray-500">2024</p>
                </div>
              </div>

              {/* WHATSAPP BUTTON (Scenario 2) */}
              <div className="pt-4">
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-[#F28C28] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group"
                  >
                    Start Your Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};