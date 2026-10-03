import { motion } from "framer-motion";
import { Code, Palette, Server, Cloud, Zap, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SKILLS } from "@/lib/portfolio-data";
import { useReveal, onSpotlightMove } from "@/lib/motion";

const ICONS = { Code, Palette, Server, Cloud, Zap, Users };

const ACCENT_CLASSES = [
  "bg-accent",
  "bg-foreground text-background",
  "bg-accent",
  "bg-foreground text-background",
  "bg-accent",
  "bg-foreground text-background",
];

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
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SKILLS.map((s, idx) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            const iconClass = ACCENT_CLASSES[idx % ACCENT_CLASSES.length];
            return (
              <motion.div
                key={s.title}
                variants={item}
                onMouseMove={onSpotlightMove}
                className="spotlight group rounded-2xl border border-border bg-card p-6 hover-lift hover:border-foreground/25 flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <div className={`h-11 w-11 rounded-xl ${iconClass} grid place-items-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-muted-foreground bg-secondary rounded-md px-2 py-1 uppercase tracking-wider">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5 flex-1">
                  {s.items.map((tag) => (
                    <span key={tag} className="tag group-hover:border-foreground/20">
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
