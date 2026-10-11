import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS } from "@/lib/portfolio-data";
import { useReveal, onSpotlightMove } from "@/lib/motion";

/** A live link is only "real" if it points somewhere other than a repo or a placeholder. */
function hasRealLive(p: { live: string; github: string }) {
  if (!p.live) return false;
  if (p.live === p.github) return false;
  if (/example\.com|github\.com$/.test(p.live)) return false;
  return true;
}

export function Projects() {
  const { container, item } = useReveal(0.08);
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1, 4);

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected Projects"
            description="A curated selection of products and experiments I've built."
          />
          <Link
            to="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            All projects
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 space-y-5"
        >
          {/* Featured project — large card */}
          <motion.article
            variants={item}
            onMouseMove={onSpotlightMove}
            className="spotlight group relative rounded-2xl glass-panel overflow-hidden hover-lift hover:border-accent/40"
          >
            <div className="grid lg:grid-cols-[1fr_2fr] gap-0">
              {/* Visual panel */}
              <div className="relative h-56 lg:h-auto min-h-[220px] overflow-hidden bg-gradient-to-br from-accent/25 via-accent-glow/15 to-transparent">
                <div className="absolute inset-0 grid-pattern opacity-40 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-8xl font-bold text-black/10 transition-transform duration-500 group-hover:scale-110 select-none">
                    01
                  </span>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full glass-dark px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  Featured
                </div>
              </div>

              {/* Content panel */}
              <div className="p-7 lg:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{featured.title}</h3>
                    <span className="shrink-0 text-xs font-semibold text-muted-foreground bg-black/[0.03] border border-black/10 rounded-md px-2 py-1">
                      #01
                    </span>
                  </div>
                  <p className="mt-3 text-subtext leading-relaxed">{featured.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {featured.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-7 flex items-center gap-3">
                  {hasRealLive(featured) && (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noreferrer"
                      className="press btn-shine group/live inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-accent to-accent-glow text-accent-foreground px-5 py-2.5 text-sm font-semibold shadow-[0_6px_24px_oklch(0.94_0.18_110/0.35)]"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                    </a>
                  )}
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${featured.title} on GitHub`}
                    className="press inline-flex items-center gap-2 rounded-xl border border-black/12 bg-black/[0.02] px-4 py-2.5 text-sm font-medium text-foreground hover:bg-black/[0.05] hover:border-black/25 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Secondary projects grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {rest.map((p, i) => (
              <motion.article
                key={p.title}
                variants={item}
                onMouseMove={onSpotlightMove}
                className="spotlight group relative flex flex-col rounded-2xl glass-panel overflow-hidden hover-lift hover:border-accent/40"
              >
                <div className="h-36 relative overflow-hidden bg-gradient-to-br from-accent/20 via-accent-glow/10 to-transparent">
                  <div className="absolute inset-0 grid-pattern opacity-40 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-black/10 transition-transform duration-500 group-hover:scale-125 select-none">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-subtext flex-1 leading-relaxed">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    {hasRealLive(p) ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="press group/live flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-br from-accent to-accent-glow text-accent-foreground px-3 py-2 text-xs font-semibold"
                      >
                        Live
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                      </a>
                    ) : (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="press group/live flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-black/12 bg-black/[0.02] text-foreground px-3 py-2 text-xs font-semibold hover:bg-black/[0.05] transition-colors"
                      >
                        View Code
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="press inline-flex items-center justify-center rounded-lg border border-black/12 bg-black/[0.02] px-3 py-2 text-foreground hover:bg-black/[0.05] hover:border-black/25 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
