import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-600 text-white font-tajawal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-tajawal text-2xl font-bold">
              {/* WE <span className="text-[#F28C28]">DESIGN</span> */}
               <img src="/we-design-logo-2.png" alt="WE DESIGN Logo" className="h-20 w-auto" />
            </div>
            <p className="text-primary-foreground/80 text-sm font-inter">
  WE DESIGN is a Muscat-based interior design, construction, and custom furniture company, providing premium residential, commercial, and corporate solutions across Oman. 
  
</p>

          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-white">
            <h3 className="font-tajawal text-lg font-semibold text-[#F28C28]">Quick Links</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-[#F28C28] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-[#F28C28] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary-foreground/80 hover:text-[#F28C28] transition-colors">
                  Projects
                </Link>
              </li>
              {/* <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-[#F28C28] transition-colors">
                  Gallery
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-[#F28C28] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Services</h3>
            <ul className="space-y-2 font-inter text-sm text-primary-foreground/80">
              <li>Interior Architecture</li>
              <li>Custom Furniture</li>
              <li>Fit-Out Solutions</li>
              <li>Landscape Design</li>
            </ul>
          </div>

         
          {/* Contact Info */}
<div className="space-y-4">
  <h3 className="font-playfair text-lg font-semibold">Contact</h3>
  <ul className="space-y-3 font-inter text-sm">
    <li className="flex items-start space-x-2 text-primary-foreground/80">
      <MapPin className="h-5 w-5 text-[#F28C28] flex-shrink-0 mt-0.5" />
      <span>
        Office: ONEIC Head Office Building, 2nd Floor, Al Khuwair St, Muscat 133
        <span> &nbsp;| &nbsp;Factory: Barka, Oman</span>
      </span>
    </li>

    {/* Mobile */}
    <li className="flex items-center space-x-2 text-primary-foreground/80">
      <Phone className="h-5 w-5 text-[#F28C28] flex-shrink-0" />
      <a
        href="tel:+96871119834"
        className="hover:text-[#F28C28] transition-colors"
      >
        +968 71119834
      </a>
    </li>

    {/* Landline */}
    <li className="flex items-center space-x-2 text-primary-foreground/80">
      <Phone className="h-5 w-5 text-[#F28C28] flex-shrink-0" />
      <a
        href="tel:24488689"
        className="hover:text-[#F28C28] transition-colors"
      >
        Landline: 2448 8689
      </a>
    </li>

    <li className="flex items-center space-x-2 text-primary-foreground/80">
      <Mail className="h-5 w-5 text-[#F28C28] flex-shrink-0" />
      <a
        href="mailto:info@wedesignoman.com"
        className="hover:text-[#F28C28] transition-colors"
      >
        info@wedesignoman.com
      </a>
    </li>
  </ul>
</div>

        </div>

        {/* Bottom Bar */}
{/* Bottom Bar */}
<div className="mt-8 pt-6 border-t border-primary-foreground/20">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">

    {/* Left Side */}
    <div className="text-center md:text-left">
      <p className="text-primary-foreground/60 text-sm font-inter">
        © {currentYear} We Design LLC - Leading Interior Design Company in Oman. All rights reserved.
      </p>

      <p className="text-primary-foreground/40 text-[11px] font-inter mt-1">
        Developed by{" "}
        <a
          href="https://www.instagram.com/hamid_waff/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F28C28] transition-colors"
        >
          Hamid U V
        </a>
      </p>
    </div>

    {/* Right Side – Social Media Icons */}
    <div className="flex items-center space-x-4">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/wedesign_om/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-foreground/60 hover:text-[#F28C28] transition-colors"
      >
        <Instagram size={18} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/wedesignoman"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-foreground/60 hover:text-[#F28C28] transition-colors"
      >
        <Facebook size={18} />
      </a>

      {/* LinkedIn */}
<a
  href="https://www.linkedin.com/company/we-design-l-l-c"
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary-foreground/60 hover:text-[#F28C28] transition-colors"
>
  <Linkedin size={18} />
</a>

    </div>

  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
