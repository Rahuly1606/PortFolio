import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Download } from "lucide-react";
import { Hero3D } from "./Hero3D";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-success/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium shadow-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight"
            >
              RAHUL
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">KUMAR</span>
                <span className="absolute inset-x-0 bottom-2 h-4 bg-accent -z-0" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg text-subtext max-w-xl"
            >
              Full-Stack Developer crafting elegant solutions with modern technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-2 text-sm text-muted-foreground"
            >
              B.Tech in Computer Science & IT · K L University
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-accent hover:scale-105 transition-transform"
              >
                View Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 bg-card px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium hover:bg-secondary"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              {[
                { icon: Github, href: SOCIAL_LINKS.github },
                { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                { icon: Twitter, href: SOCIAL_LINKS.twitter },
                { icon: Instagram, href: SOCIAL_LINKS.instagram },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-xl border border-border bg-card hover:bg-foreground hover:text-accent hover:scale-110 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px] overflow-hidden"
          >
            <Hero3D />
            <div className="absolute bottom-4 right-4 glass rounded-2xl px-4 py-3 border border-border">
              <p className="text-xs text-muted-foreground">Built with</p>
              <p className="font-display font-semibold text-sm">React · Three.js</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-12 overflow-hidden border-y border-border bg-card-dark py-5">
        <div className="flex marquee-track gap-12 whitespace-nowrap text-background font-display text-2xl uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "MongoDB", "Three.js", "Tailwind"].map(
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
