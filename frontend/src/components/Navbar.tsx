import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", action: () => navigate("/") },
    { name: "About", action: () => scrollToSection("about") },
    { name: "Projects", action: () => navigate("/projects") },
    { name: "Experience", action: () => scrollToSection("experience") },
    { name: "Skills", action: () => scrollToSection("skills") },
    { name: "Certificates", action: () => navigate("/certificates") },
    { name: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/90 backdrop-blur-xl border-b border-gray-200 shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-display font-bold tracking-tight">
            <span className="text-text">RAHUL KU.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-sm font-medium text-subtext hover:text-text transition-colors relative group uppercase tracking-wide"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-text hover:bg-accent/10 hover:text-text rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg rounded-2xl mt-4 border border-gray-200 shadow-soft"
            >
              <div className="flex flex-col gap-4 py-6 px-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="text-left text-sm font-medium text-subtext hover:text-text transition-colors uppercase tracking-wide py-2 px-3 rounded-xl hover:bg-accent/10"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
