import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    // { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-600 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN HEADER BAR */}
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-24">

          {/* LOGO */}
          <Link to="/" className="flex items-center justify-start">
            <div className="font-tajawal text-3xl font-bold tracking-tight text-white">
              WE <span className="text-[#F28C28]">DESIGN</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-tajawal text-[15px] font-semibold transition-all
                    ${isActive ? "text-[#F28C28]" : "text-white hover:text-[#F28C28]"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden md:flex items-center justify-end">
            <Link to="/contact">
              <Button
                variant="premium"
                className="font-tajawal border-2 border-[#F28C28] text-[#F28C28] bg-transparent hover:bg-[#F28C28] hover:text-white"
              >
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden flex items-center justify-end pr-2">
            <button
              className="p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md py-6 px-4 space-y-6 animate-slide-down">

            {navigation.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-tajawal text-lg font-semibold transition
                    ${isActive ? "text-[#F28C28]" : "text-white hover:text-[#F28C28]"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

          </div>
        )}

      </nav>
    </header>
  );
};

export default Header;
