import { MapPin, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  category?: string; // Optional: helpful for the badge
  onClick?: () => void;
}

export const ProjectCard = ({ title, location, description, image, category, onClick }: ProjectCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="group relative cursor-pointer flex flex-col gap-4"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] shadow-sm transition-all duration-500 hover:shadow-2xl">
        
        {/* The Image - slight zoom on hover */}
        <img
          src={image}
          alt={`${title} - ${location}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay - Darkens slightly on hover for text contrast if you had text over it, 
            but here it creates depth for the button */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

        {/* Floating Location Badge (Top Left) */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
            {location}
          </span>
        </div>

        {/* Action Button - Slides up and fades in on hover */}
        <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="h-12 w-12 bg-white text-[#F28C28] rounded-full flex items-center justify-center shadow-lg hover:bg-[#F28C28] hover:text-white transition-colors">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* TEXT CONTENT - Clean and below the image */}
      <div className="space-y-1">
        <h3 className="font-tajawal text-xl sm:text-2xl font-bold text-gray-600 group-hover:text-[#F28C28] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed font-tajawal">
          {description}
        </p>
      </div>
    </div>
  );
};