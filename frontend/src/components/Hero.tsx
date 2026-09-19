import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Download } from "lucide-react";
import { HeroVisual } from "./HeroVisual";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";
import { useReveal } from "@/lib/motion";

export function Hero() {
  const { container, item } = useReveal(0.12);

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl blob-drift" />
      <div
        className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-success/10 blur-3xl blob-drift"
        style={{ animationDelay: "-8s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium shadow-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight"
            >
              RAHUL
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">KUMAR</span>
                <motion.span
                  className="absolute inset-x-0 bottom-2 h-4 bg-accent z-0 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-lg text-subtext max-w-xl">
              Full-Stack Developer crafting elegant solutions with modern technologies.
            </motion.p>

            <motion.p variants={item} className="mt-2 text-sm text-muted-foreground">
              B.Tech in Computer Science & IT · K L University
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="press group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-accent hover:shadow-lift"
              >
                View Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="press inline-flex items-center gap-2 rounded-xl border border-foreground/20 bg-card px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-background"
              >
                Get in Touch
              </a>
              <a
                href="#"
                className="press group inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium hover:bg-secondary"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />{" "}
                Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-4">
              {[
                { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
                { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter / X" },
                { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-10 w-10 grid place-items-center rounded-xl border border-border bg-card hover:bg-foreground hover:text-accent hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <HeroVisual />
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative mt-12 overflow-hidden border-y border-border bg-card-dark py-5"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex marquee-track gap-12 whitespace-nowrap text-background font-display text-2xl uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "MongoDB", "PostgreSQL", "Tailwind"].map(
                (s) => (
                  <span key={s} className="flex items-center gap-12">
                    {s}
                    <span className="text-accent">●</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
