import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectPhoneMockup } from "@/components/ProjectPhoneMockup";
import { DrawnUnderline } from "@/components/annotations";
import { PROJECTS } from "@/lib/portfolio-data";

function hasRealLive(project: { live: string; github: string }) {
  return Boolean(
    project.live &&
    project.live !== project.github &&
    !/example\.com|github\.com$/.test(project.live),
  );
}

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rahul Kumar" },
      {
        name: "description",
        content: "Full showcase of projects by Rahul Kumar across web, AI, and cloud.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="project-index-page">
      <Navbar />
      <main>
        <header className="project-index-hero editorial-shell">
          <Link to="/" className="project-back">
            <ArrowLeft /> Back to portfolio
          </Link>
          <div>
            <span className="meta-label">Project index / 05 builds</span>
            <h1>
              Things I’ve
              <br />
              <em>built.</em>
            </h1>
            <DrawnUnderline className="project-index-underline" color="var(--lavender)" />
          </div>
          <p>
            Shipped, prototyped and experimented across full-stack web, real-time software, AI and
            cloud.
          </p>
        </header>
        <section className="project-index-list editorial-shell">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="project-index-number">0{index + 1}</span>
              <ProjectPhoneMockup project={project} index={index} compact />
              <div className="project-index-copy">
                <small>{project.tech.join(" · ")}</small>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div>
                  {hasRealLive(project) && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live <ArrowUpRight />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github /> Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
