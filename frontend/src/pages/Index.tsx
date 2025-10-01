import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import CompetitiveCoding from '@/components/CompetitiveCoding';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Experience />
      <Skills />
      <CompetitiveCoding />
      <Contact />

      {/* Footer */}
      <footer className="bg-secondary/50 py-8 text-center">
        <p className="text-muted-foreground">
          © 2024 Rahul Kumar. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
