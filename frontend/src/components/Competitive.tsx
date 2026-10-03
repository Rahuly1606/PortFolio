import { motion } from "framer-motion";
import { ExternalLink, Trophy, TrendingUp } from "lucide-react";
import { COMPETITIVE } from "@/lib/portfolio-data";
import { useReveal } from "@/lib/motion";

export function Competitive() {
  const { container, item } = useReveal(0.08);

  return (
    <section className="relative py-24 sm:py-32 bg-card-dark text-background overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-50 pointer-events-none" />
      <div className="absolute -top-48 left-1/2 h-[500px] w-[500px] rounded-full bg-accent/12 blur-[80px] -translate-x-1/2 blob-drift pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-success/8 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/8 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest">
              <Trophy className="h-3 w-3 text-accent" />
              Competitive Coding
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Sharpening edge on{" "}
              <span className="text-accent">global arenas</span>.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-background/50 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>Actively competing</span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {COMPETITIVE.map((c) => (
            <motion.a
              key={c.platform}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              variants={item}
              className="group relative rounded-2xl border border-background/12 bg-background/6 backdrop-blur p-6 hover:border-accent/60 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Color glow */}
              <div
                className="absolute top-0 right-0 h-28 w-28 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundColor: c.color }}
              />
              <div
                className="absolute bottom-0 left-0 h-16 w-16 rounded-full blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundColor: c.color }}
              />

              <div className="relative flex items-center justify-between mb-6">
                <span className="font-display text-sm font-bold" style={{ color: c.color }}>
                  {c.platform}
                </span>
                <ExternalLink className="h-4 w-4 text-background/40 group-hover:text-accent transition-colors" />
              </div>

              <p className="relative stat-number text-5xl text-background">{c.stat}</p>
              <p className="relative mt-2 text-xs text-background/55 uppercase tracking-widest">
                {c.label}
              </p>

              <div className="relative mt-6 pt-4 border-t border-background/10">
                <div className="inline-flex items-center gap-1.5 rounded-md border border-background/15 bg-background/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.color }} />
                  {c.badge}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
