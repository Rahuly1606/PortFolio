import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { EXPERIENCE } from "@/lib/portfolio-data";
import { onSpotlightMove } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked"
          description="Real-world impact across teams and stakeholders."
        />

        <div className="mt-14 space-y-6">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseMove={onSpotlightMove}
              className="spotlight group rounded-2xl border border-border bg-card hover-lift hover:border-foreground/25 overflow-hidden"
            >
              <div className="grid lg:grid-cols-[280px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-border">
                {/* Left: meta */}
                <div className="p-7 flex flex-col justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {e.duration}
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold leading-tight">{e.role}</h3>
                    <p className="mt-1.5 text-sm font-semibold text-subtext">{e.company}</p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {e.location}
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-accent grid place-items-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Briefcase className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>

                {/* Right: achievements */}
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                    Key Contributions
                  </p>
                  <ul className="space-y-4">
                    {e.achievements.map((a, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-subtext leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
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
