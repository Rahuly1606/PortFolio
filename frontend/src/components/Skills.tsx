import { motion } from "framer-motion";
import { Code, Palette, Server, Cloud, Zap, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SKILLS } from "@/lib/portfolio-data";
import { useReveal, onSpotlightMove } from "@/lib/motion";

const ICONS = { Code, Palette, Server, Cloud, Zap, Users };

export function Skills() {
  const { container, item } = useReveal(0.06);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Toolbox"
          title="Technical Skills"
          description="The tools and technologies I use to bring ideas to life."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SKILLS.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={s.title}
                variants={item}
                onMouseMove={onSpotlightMove}
                className="spotlight group rounded-2xl border border-border bg-card p-6 hover-lift hover:border-foreground/40"
              >
                <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.items.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-subtext transition-colors duration-300 group-hover:bg-secondary/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
