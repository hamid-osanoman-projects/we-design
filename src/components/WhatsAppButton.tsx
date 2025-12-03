import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const whatsappNumber = "96891789898";
  const message = encodeURIComponent("Hello WE DESIGN, I am interested in a consultation.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-elegant flex items-center justify-center transition-all hover:scale-110 animate-fade-in"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};
