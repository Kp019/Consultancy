import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/buttons";

export const Navbar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textColor = isScrolled ? "text-gray-900" : "text-white";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`flex justify-between items-center ${textColor} transition-colors duration-300 relative w-full`}>
      <div onClick={() => { window.location.href = "/" }} className="text-xl md:text-2xl font-serif cursor-pointer">Kallarckal</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <a href="#about" className="cursor-pointer hover:opacity-70 transition-opacity">About</a>
        <a href="#services" className="cursor-pointer hover:opacity-70 transition-opacity">Services</a>
        <a href="#projects" className="cursor-pointer hover:opacity-70 transition-opacity">Projects</a>
        <a href="#contact" className="cursor-pointer hover:opacity-70 transition-opacity">Contact</a>
        <Button
          name="Get Quote"
          version="Secondary"
          isScrolled={isScrolled}
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`md:hidden ${textColor} focus:outline-none transition-colors duration-300`}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
            onClick={closeMenu}
          />
          {/* Menu */}
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white shadow-xl rounded-lg py-4 md:hidden z-50">
            <div className="flex flex-col gap-1 px-4">
              <a 
                href="#about"
                className="cursor-pointer hover:bg-gray-50 transition-colors text-gray-900 py-3 px-4 rounded-md block"
                onClick={closeMenu}
              >
                About
              </a>
              <a 
                href="#services"
                className="cursor-pointer hover:bg-gray-50 transition-colors text-gray-900 py-3 px-4 rounded-md block"
                onClick={closeMenu}
              >
                Services
              </a>
              <a 
                href="/projects"
                className="cursor-pointer hover:bg-gray-50 transition-colors text-gray-900 py-3 px-4 rounded-md block"
                onClick={closeMenu}
              >
                Projects
              </a>
              <a 
                href="#contact"
                className="cursor-pointer hover:bg-gray-50 transition-colors text-gray-900 py-3 px-4 rounded-md block"
                onClick={closeMenu}
              >
                Contact
              </a>
              <div className="pt-2 px-4">
                <Button
                  name="Get Quote"
                  version="Secondary"
                  isScrolled={true}
                  onClick={() => {
                    closeMenu();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
