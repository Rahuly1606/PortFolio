import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { COMPETITIVE } from "@/lib/portfolio-data";

export function Competitive() {
  return (
    <section className="relative py-24 sm:py-32 bg-card-dark text-background overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-60" />
      <div className="absolute -top-40 left-1/2 h-[400px] w-[400px] rounded-full bg-accent/15 blur-3xl -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3 py-1 text-xs font-medium">
            <Trophy className="h-3 w-3 text-accent" />
            Competitive Coding
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Sharpening edge on <span className="text-accent">global arenas</span>.
          </h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPETITIVE.map((c, i) => (
            <motion.a
              key={c.platform}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-background/15 bg-background/5 backdrop-blur p-6 hover:border-accent transition-all hover:-translate-y-2"
            >
              <div
                className="absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ backgroundColor: c.color }}
              />
              <div className="relative flex items-center justify-between">
                <span
                  className="font-display text-sm font-bold"
                  style={{ color: c.color }}
                >
                  {c.platform}
                </span>
                <ExternalLink className="h-4 w-4 text-background/50 group-hover:text-accent" />
              </div>
              <p className="relative mt-6 font-display text-4xl font-bold">{c.stat}</p>
              <p className="relative mt-1 text-xs text-background/60 uppercase tracking-wider">
                {c.label}
              </p>
              <div className="relative mt-5 inline-flex items-center gap-1.5 rounded-md border border-background/15 px-2 py-1 text-[10px] font-semibold uppercase">
                {c.badge}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
