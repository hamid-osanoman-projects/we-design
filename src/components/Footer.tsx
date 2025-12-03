import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-600 text-white font-tajawal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-tajawal text-2xl font-bold">
              WE <span className="text-[#F28C28]">DESIGN</span>
            </div>
            <p className="text-primary-foreground/80 text-sm font-inter">
              Premium interior, furniture & landscape design solutions in Oman
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-white">
            <h3 className="font-tajawal text-lg font-semibold">Quick Links</h3>
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
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-[#F28C28] transition-colors">
                  Gallery
                </Link>
              </li>
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
                <span>Office: Ghoubra near Bank Muscat, Muscat<br/>Factory: Barka, Oman</span>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-5 w-5 text-[#F28C28] flex-shrink-0" />
                <a href="tel:+96898502850" className="hover:text-[#F28C28] transition-colors">
                  +968 98502850
                </a>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-5 w-5 text-[#F28C28] flex-shrink-0" />
                <a href="mailto:milad@wedesign-om.com" className="hover:text-[#F28C28] transition-colors">
                  milad@wedesign-om.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm font-inter">
              © {currentYear} WE DESIGN. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm font-inter">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-[#F28C28] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-[#F28C28] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
