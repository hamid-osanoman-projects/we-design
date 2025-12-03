import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/Lightbox";
import { projects } from "@/data/projects";

const categories = ["All", "Interior Design", "Commercial Fit-Out", "Custom Furniture", "Landscape", "Hospitality"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const galleryImages = filteredProjects.map(project => ({
    url: project.image.replace('w=800', 'w=1920'), // Get higher res version
    title: project.title,
    location: project.location
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[30vh] sm:h-[35vh] lg:h-[40vh] flex items-center justify-center bg-gradient-elegant text-white">
          <div className="container mx-auto text-center">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              Project Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 px-4">
              Browse Our Portfolio of Interior Design & Custom Furniture Projects in Oman
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 sm:py-10 lg:py-12 border-b bg-background sticky top-0 z-40">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 sm:px-6 text-sm sm:text-base"
                >
                  {cat}
                </Button>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} in {activeCategory === "All" ? "all categories" : activeCategory}
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-elegant cursor-pointer hover:shadow-gold transition-all duration-300"
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.location} - WE DESIGN interior project in Oman`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-playfair text-lg font-bold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/90">{project.location}</p>
                    <span className="inline-block mt-2 text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  {/* View icon overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <Footer />
    </div>
  );
}
