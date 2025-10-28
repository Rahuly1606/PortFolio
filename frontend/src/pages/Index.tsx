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
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />

      <div className="relative">
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Experience />
        <Skills />
        <CompetitiveCoding />
        <Contact />
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
