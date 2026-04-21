import { motion } from "framer-motion";
import { Code, Palette, Server, Cloud, Zap, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SKILLS } from "@/lib/portfolio-data";

const ICONS = { Code, Palette, Server, Cloud, Zap, Users };

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Toolbox"
          title="Technical Skills"
          description="The tools and technologies I use to bring ideas to life."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl border border-border bg-card p-6 hover-lift hover:border-foreground/40"
              >
                <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-subtext"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
