import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CompetitiveCoding from "@/components/CompetitiveCoding";
import Contact from "@/components/Contact";

const Index = () => {
  const sections = [
    { 
      id: "hero", 
      component: <Hero />,
      animation: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    { 
      id: "about", 
      component: <About />,
      animation: { opacity: 0, x: -100, rotateY: -15 },
      whileInView: { opacity: 1, x: 0, rotateY: 0 },
      transition: { duration: 0.7, ease: "easeOut" }
    },
    { 
      id: "projects", 
      component: <Projects />,
      animation: { opacity: 0, y: 100, scale: 0.95 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    { 
      id: "certificates", 
      component: <Certificates />,
      animation: { opacity: 0, x: 100, rotateY: 15 },
      whileInView: { opacity: 1, x: 0, rotateY: 0 },
      transition: { duration: 0.7, ease: "easeOut" }
    },
    { 
      id: "experience", 
      component: <Experience />,
      animation: { opacity: 0, y: 80, rotate: -2 },
      whileInView: { opacity: 1, y: 0, rotate: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    { 
      id: "skills", 
      component: <Skills />,
      animation: { opacity: 0, scale: 0.8, rotateX: 10 },
      whileInView: { opacity: 1, scale: 1, rotateX: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    { 
      id: "coding", 
      component: <CompetitiveCoding />,
      animation: { opacity: 0, y: 100, x: -50 },
      whileInView: { opacity: 1, y: 0, x: 0 },
      transition: { duration: 0.7, ease: "easeOut" }
    },
    { 
      id: "contact", 
      component: <Contact />,
      animation: { opacity: 0, scale: 0.9, y: 50 },
      whileInView: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      <div className="relative">
        {sections.map((section) => (
          <motion.section
            key={section.id}
            initial={section.animation}
            whileInView={section.whileInView}
            viewport={{ once: true, margin: "-100px", amount: 0.2 }}
            transition={section.transition}
            className="relative bg-background will-change-transform"
            style={{ perspective: 1000 }}
          >
            {section.component}
          </motion.section>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Rahul Kumar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
