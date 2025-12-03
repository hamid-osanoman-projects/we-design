import { Award, Factory, Clock, Sparkles } from "lucide-react";

const usps = [
  { icon: Award, text: "15+ Years" },
  { icon: Factory, text: "In-House Factory" },
  { icon: Clock, text: "On-Time Delivery" },
  { icon: Sparkles, text: "Creative Team" }
];

export const USPGrid = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {usps.map((usp, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2 sm:space-y-3 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <usp.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
              </div>
              <p className="font-playfair text-sm sm:text-base lg:text-lg font-semibold">{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};