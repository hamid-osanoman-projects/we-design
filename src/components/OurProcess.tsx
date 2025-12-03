import React from "react";

interface Step {
  title: string;
  subtitle: string;
  number: string;
  image: string;
}

const steps: Step[] = [
  {
    title: "The Consultation Visit",
    subtitle: "Understanding your needs & project goals",
    number: "01",
    image: "https://i.pinimg.com/736x/c0/8b/75/c08b7541b5ada9871e98a679a02c5afe.jpg",
  },
  {
    title: "Designing Your Vision",
    subtitle: "Concept design, space planning & material selection",
    number: "02",
    image: "https://i.pinimg.com/1200x/f7/e0/35/f7e035a433a26583160faeb9da414e50.jpg",
  },
  {
    title: "Crafting With Precision",
    subtitle: "In-house CNC manufacturing & craftsmanship",
    number: "03",
    image: "https://i.pinimg.com/1200x/11/3f/85/113f854c9a9fcb086e0fef91232d41c2.jpg",
  },
  {
    title: "The Final Touch",
    subtitle: "Installation & project handover",
    number: "04",
    image: "https://i.pinimg.com/1200x/f0/f2/e9/f0f2e9e51b92838afee0701041af0ff6.jpg",
  },
];

export function OurProcess() {
  return (
    <section className="py-16 lg:py-20 bg-white font-tajawal">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-600">
          Our Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group shadow-elegant"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <p className="text-lg font-medium opacity-90">{step.subtitle}</p>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <span className="text-6xl font-extrabold opacity-90">
                  {step.number}
                </span>
              </div>

              {/* Orange Line */}
              <div className="absolute top-0 left-0 h-1 w-20 bg-orange-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
