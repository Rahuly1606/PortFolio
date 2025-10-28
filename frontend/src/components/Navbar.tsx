import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
          {/* Profile Image with Hover Card */}
          <HoverCard openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Link
                to="/"
                className="group relative flex items-center justify-center"
              >
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-accent transition-all duration-300 shadow-soft group-hover:shadow-accent cursor-pointer transform group-hover:scale-105">
                  <img
                    src="/profile.jpg"
                    alt="Rahul Kumar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://ui-avatars.com/api/?name=Rahul+Kumar&background=E9F460&color=0B0B0B&size=200&bold=true";
                    }}
                  />
                </div>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent
              className="w-64 sm:w-72 p-0 border-2 border-gray-200 shadow-lift overflow-hidden bg-white"
              sideOffset={8}
              align="start"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative"
              >
                {/* Profile Image */}
                <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-accent/10 to-gray-50 flex items-center justify-center p-4">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lift">
                    <img
                      src="/profile.jpg"
                      alt="Rahul Kumar"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://ui-avatars.com/api/?name=Rahul+Kumar&background=E9F460&color=0B0B0B&size=400&bold=true";
                      }}
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-4 sm:p-5 space-y-2">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-text">
                    RAHUL KUMAR
                  </h3>
                  <p className="text-xs sm:text-sm text-subtext font-medium">
                    Full Stack Developer & AI Enthusiast
                  </p>
                  <p className="text-xs text-gray-600 pt-1">
                    Building scalable applications with modern technologies
                  </p>
                </div>
              </motion.div>
            </HoverCardContent>
          </HoverCard>          {/* Desktop Navigation */}
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
