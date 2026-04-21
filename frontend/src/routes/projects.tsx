import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PROJECTS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rahul Kumar" },
      {
        name: "description",
        content: "Full showcase of projects by Rahul Kumar across web, AI, and cloud.",
      },
      { property: "og:title", content: "Projects — Rahul Kumar" },
      {
        property: "og:description",
        content: "Featured products and experiments built with modern stacks.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-display text-5xl sm:text-6xl font-bold tracking-tight"
          >
            All <span className="bg-accent px-2">Projects</span>
          </motion.h1>
          <p className="mt-4 text-subtext max-w-xl">
            Things I've built — shipped, prototyped, or experimented with.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover-lift"
              >
                <div className={`h-56 bg-gradient-to-br ${p.accent} relative`}>
                  <div className="absolute inset-0 grid-pattern opacity-50" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-7xl font-bold text-foreground/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h2 className="font-display text-2xl font-semibold">{p.title}</h2>
                  <p className="mt-3 text-sm text-subtext">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary px-2 py-1 text-[11px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-foreground text-background px-3 py-2.5 text-xs font-semibold hover:bg-accent hover:text-accent-foreground"
                    >
                      Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-border px-3 py-2.5 hover:bg-secondary"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
