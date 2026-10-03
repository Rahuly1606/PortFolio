import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PROJECTS } from "@/lib/portfolio-data";
import { useReveal, onSpotlightMove } from "@/lib/motion";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rahul Kumar" },
      { name: "description", content: "Full showcase of projects by Rahul Kumar across web, AI, and cloud." },
      { property: "og:title", content: "Projects — Rahul Kumar" },
      { property: "og:description", content: "Featured products and experiments built with modern stacks." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { container, item } = useReveal(0.08);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground shadow-soft mb-5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              All Projects
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              Things I've{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Built</span>
                <span className="absolute inset-x-0 bottom-1 h-[0.2em] bg-accent z-0 rounded-sm" />
              </span>
            </h1>
            <p className="mt-4 text-subtext max-w-xl text-lg">
              Shipped, prototyped, and experimented — a full showcase of my work.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-14 grid md:grid-cols-2 gap-6"
          >
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                variants={item}
                onMouseMove={onSpotlightMove}
                className="spotlight group rounded-2xl border border-border bg-card overflow-hidden hover-lift hover:border-foreground/30"
              >
                <div className={`h-52 bg-gradient-to-br ${p.accent} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-pattern opacity-40 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-8xl font-bold text-foreground/10 transition-transform duration-500 group-hover:scale-110 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {i === 0 && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <h2 className="font-display text-2xl font-bold">{p.title}</h2>
                  <p className="mt-3 text-sm text-subtext leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-2.5">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="press group/live flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-foreground text-background px-4 py-2.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground"
                    >
                      Live demo
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="press inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium hover:bg-secondary hover:border-foreground/30"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
