import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import HeroSkeleton from "./skeletons/HeroSkeleton";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft border border-gray-200"
            >
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-subtext">Available for opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-text tracking-tight leading-none"
            >
              <span className="block md:inline">RAHUL</span>
              <span className="block md:inline md:ml-4">
                <span className="text-subtext">KUMAR</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-subtext max-w-2xl mx-auto font-medium"
            >
              Full-Stack Developer crafting elegant solutions with modern technologies.
              <br />
              <span className="text-gray-600">B.Tech in Computer Science & IT</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-2"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-accent hover:bg-accent/90 text-text font-bold px-6 py-5 text-base rounded-xl shadow-accent hover:shadow-lift transition-all duration-300 hover:-translate-y-1"
              >
                View Work
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-text text-text hover:bg-text hover:text-background font-bold px-6 py-5 text-base rounded-xl transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="text-subtext hover:text-text font-medium px-6 py-5 text-base rounded-xl transition-all duration-300"
                asChild
              >
                <a href="/Resume.pdf" download="Resume.pdf" className="flex items-center gap-2">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center justify-center gap-3 pt-4"
            >
              <a
                href="https://github.com/Rahuly1606"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-text hover:bg-text hover:text-background transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-lift"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-text hover:bg-text hover:text-background transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-lift"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="pt-8"
            >
              <button
                onClick={() => scrollToSection("about")}
                className="group flex flex-col items-center gap-2 text-subtext hover:text-text transition-colors duration-300"
              >
                <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-subtext group-hover:border-text transition-colors duration-300"
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
