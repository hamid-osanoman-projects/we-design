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
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CHANGED: Switched from Grid to Flex for better spacing control */}
        <div className="flex items-center justify-between h-24">

          {/* LOGO */}
          {/* Added flex-shrink-0 to prevent logo squishing */}
          <Link to="/" className="flex-shrink-0 flex items-center justify-start">
            <div className="font-tajawal text-3xl font-bold tracking-tight text-white">
              <img src="/we-design-logo-1.png" alt="WE DESIGN Logo" className="h-20 w-auto" />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          {/* CHANGED: 'md:flex' to 'lg:flex'. Hides menu on iPad, shows on Laptop */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-tajawal text-[17px] font-semibold transition-all
                    ${isActive ? "text-[#F28C28]" : "text-gray-500 hover:text-[#F28C28]"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CALL BUTTON */}
          {/* CHANGED: 'md:flex' to 'lg:flex'. Hides button on iPad, shows on Laptop */}
          <div className="hidden lg:flex items-center justify-end">
            <Link to="/contact">
              <Button
                variant="premium"
                className="font-tajawal border-2 border-[#F28C28] text-md text-gray-600 bg-transparent rounded-none hover:bg-[#F28C28] hover:text-white transition-colors duration-300"
              >
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* MOBILE MENU ICON */}
          {/* CHANGED: 'md:hidden' to 'lg:hidden'. Shows hamburger on iPad now */}
          <div className="lg:hidden flex items-center justify-end">
            <button
              className="p-2 text-gray-600 hover:text-[#F28C28] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {/* CHANGED: 'md:hidden' to 'lg:hidden' to ensure it works on iPad */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-700 backdrop-blur-md py-6 px-4 space-y-6 animate-slide-down mb-2 rounded-b-lg shadow-xl">
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
            
            {/* Added Button to Mobile Menu as well since it's hidden on iPad header now */}
            <div className="pt-4">
               <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#F28C28] hover:bg-[#d97b20] text-white font-tajawal">
                    Book Consultation
                  </Button>
               </Link>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Header;