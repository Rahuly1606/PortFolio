import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { EXPERIENCE } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked"
          description="Real-world impact across teams and stakeholders."
        />

        <div className="mt-12 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 mb-10"
            >
              <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-accent ring-4 ring-background animate-glow" />

              <div className="sm:text-right sm:pr-12">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {e.duration}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold">{e.role}</h3>
                <p className="mt-1 text-sm font-medium">{e.company}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {e.location}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pl-12">
                <div className="rounded-2xl border border-border bg-card p-6 hover-lift hover:border-accent">
                  <Briefcase className="h-5 w-5 text-accent-foreground bg-accent rounded-lg p-1 box-content" />
                  <ul className="mt-4 space-y-3">
                    {e.achievements.map((a, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-subtext">
                        <span className="mt-2 h-1 w-1 rounded-full bg-foreground shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
