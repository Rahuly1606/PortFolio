import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal, onSpotlightMove } from "@/lib/motion";

export function About() {
  const { container, item } = useReveal();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About" title="Who I Am" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid lg:grid-cols-3 gap-6"
        >
          {/* Education */}
          <motion.div
            variants={item}
            onMouseMove={onSpotlightMove}
            className="spotlight group rounded-2xl border border-border bg-card p-7 hover-lift hover:border-accent"
          >
            <div className="h-12 w-12 rounded-xl bg-accent grid place-items-center group-hover:scale-110 transition-transform">
              <GraduationCap className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">Education</h3>
            <p className="mt-2 text-sm text-subtext">B.Tech in Computer Science & IT</p>
            <p className="mt-1 text-sm font-medium">K L University</p>
            <p className="mt-3 text-xs text-muted-foreground">2023 — 2027</p>
          </motion.div>

          {/* Dark card */}
          <motion.div
            variants={item}
            className="lg:row-span-1 rounded-2xl bg-card-dark text-background p-7 hover-lift relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-accent/20 blur-2xl blob-drift" />
            <Sparkles className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">
              Passionate full-stack developer focused on building{" "}
              <span className="text-accent">scalable applications</span> with modern
              technologies.
            </h3>
            <p className="mt-4 text-sm text-background/70">
              Eager to learn and contribute to innovative projects across web, AI, and
              cloud.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            variants={item}
            onMouseMove={onSpotlightMove}
            className="spotlight rounded-2xl border border-border bg-card p-7 hover-lift hover:border-accent"
          >
            <h3 className="font-display text-xl font-semibold">Quick Facts</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span>Based in India · open to remote</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span>Reach me via the contact form below</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Sparkles className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span>Currently exploring AI agents & systems design</span>
              </li>
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-secondary p-3 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-2xl font-bold">10+</p>
                <p className="text-[10px] text-muted-foreground uppercase">Projects</p>
              </div>
              <div className="rounded-xl bg-secondary p-3 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-2xl font-bold">1000+</p>
                <p className="text-[10px] text-muted-foreground uppercase">DSA</p>
              </div>
              <div className="rounded-xl bg-accent p-3 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-2xl font-bold">6+</p>
                <p className="text-[10px] uppercase">Certs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
