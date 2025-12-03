import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden cursor-pointer hover:shadow-elegant transition-all duration-300">
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 text-white">
          <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{title}</h3>
          <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-3">{description}</p>
          {/* <div className="flex items-center gap-2 text-[#F28C28] group-hover:gap-3 transition-all">
            <span className="text-xs sm:text-sm font-semibold">Learn More</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </div> */}
        </div>
      </div>
    </Card>
  );
};