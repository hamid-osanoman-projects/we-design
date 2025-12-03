import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How does your design process work?",
      a: "We study your space, needs, and vision, prepare concept plans, layouts, material selection, budgeting, and deliver a full design and build execution.",
    },
    {
      q: "Do you offer custom furniture?",
      a: "Yes. Our in-house Barka factory produces wardrobes, kitchens, doors, cabinets, flooring, mouldings, and complete woodwork using CNC and advanced machinery.",
    },
    {
      q: "Can WE DESIGN handle full fit-out work?",
      a: "Absolutely. We manage everything including planning, modelling, manufacturing, installation, and finishing—delivered on time.",
    },
    {
      q: "Do you work on residential or office projects?",
      a: "Both. We design homes, offices, retail spaces, and outdoor landscapes, blending functionality, creativity, and long-term efficiency.",
    },
    {
      q: "Where is your office and factory located?",
      a: "Office: Ghoubra near Bank Muscat.  Factory: Barka, Oman.",
    },
  ];

  return (
    <section className="py-20 font-tajawal bg-white">
      <div className="container mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h3 className="text-[#F28C28] font-semibold uppercase tracking-wide mb-2">
            FAQs
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-600">
            Questions? Look here.
          </h2>
        </div>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT FAQ ACCORDION */}
          <div className="md:col-span-2 space-y-4 text-gray-600">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-5 cursor-pointer transition"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">{item.q}</h4>

                  {/* ICON */}
                  <span className={`text-[#F28C28] text-2xl font-bold transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CONTACT CARD */}
          <div className="bg-[#F28C28] text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Have different questions?</h3>
              <p className="opacity-90 mb-6">
                Our team is here to help with your interior, furniture, or landscape inquiries.
              </p>

              <a href="mailto:milad@wedesign-om.com">
                <button className="bg-white text-[#F28C28] font-semibold px-6 py-3 rounded-xl w-full shadow-md hover:opacity-90 transition">
                  Contact Us
                </button>
              </a>
            </div>

            <div className="mt-10 bg-white/20 rounded-xl p-5 backdrop-blur-sm">
              <p className="text-sm opacity-90 mb-1">Phone / WhatsApp</p>
              <h4 className="text-2xl font-bold">+968 98502850</h4>
              <p className="text-sm mt-1 opacity-80">24/7 Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
