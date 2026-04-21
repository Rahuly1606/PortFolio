import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Competitive } from "@/components/Competitive";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahul Kumar — Full-Stack Developer & Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Rahul Kumar — Full-Stack Developer crafting elegant, scalable products with React, Node, AI and cloud.",
      },
      { property: "og:title", content: "Rahul Kumar — Full-Stack Developer" },
      {
        property: "og:description",
        content: "Modern full-stack portfolio with featured projects, skills, and experience.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Experience />
        <Skills />
        <Competitive />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
