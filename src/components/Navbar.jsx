import { useState, useEffect } from "react";
import { Dumbbell, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? "glass py-4 shadow-lg backdrop-blur-lg"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Dumbbell className="text-white w-6 h-6" />
          </div>

          <span className="text-2xl font-black italic tracking-tighter">
            TITAN<span className="text-primary">GYM</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold hover:text-primary transition-colors uppercase text-sm tracking-widest"
            >
              {link.name}
            </a>
          ))}

          <button className="bg-primary text-white px-6 py-2 rounded-full font-bold uppercase text-sm hover:scale-105 transition-transform hover:shadow-lg">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col gap-5 items-center text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold hover:text-primary transition-colors text-lg uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <button className="bg-primary text-white w-full py-3 rounded-full font-bold uppercase mt-2 hover:scale-105 transition-transform">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;