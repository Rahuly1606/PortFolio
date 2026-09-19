import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS } from "@/lib/portfolio-data";
import { useReveal, onSpotlightMove } from "@/lib/motion";

export function Projects() {
  const { container, item } = useReveal();

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected Projects"
            description="A curated selection of products and experiments I've built."
          />
          <Link
            to="/projects"
            className="group inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
          >
            All projects{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.slice(0, 3).map((p, i) => (
            <motion.article
              key={p.title}
              variants={item}
              className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover-lift hover:border-foreground/40"
            >
              <div
                className={`h-44 relative overflow-hidden bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 grid-pattern opacity-50 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-5xl font-bold text-foreground/20 transition-transform duration-500 group-hover:scale-125">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute top-4 left-4 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                  Featured
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-subtext flex-1">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary px-2 py-1 text-[11px] font-medium text-subtext"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="press group/live flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-foreground text-background px-3 py-2 text-xs font-semibold hover:bg-accent hover:text-accent-foreground"
                  >
                    Live{" "}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="press inline-flex items-center justify-center rounded-lg border border-border px-3 py-2 hover:bg-secondary hover:border-foreground/40"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
