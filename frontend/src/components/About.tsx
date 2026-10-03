import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Sparkles, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal, onSpotlightMove } from "@/lib/motion";

export function About() {
  const { container, item } = useReveal(0.1);

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About" title="Who I Am" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid lg:grid-cols-12 gap-5"
        >
          {/* Dark feature card — spans 5 cols */}
          <motion.div
            variants={item}
            className="lg:col-span-5 rounded-2xl bg-card-dark text-background p-8 relative overflow-hidden hover-lift"
          >
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl blob-drift pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-success/10 blur-2xl pointer-events-none" />
            <Sparkles className="h-6 w-6 text-accent" />
            <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold leading-tight">
              Passionate about building{" "}
              <span className="text-accent">scalable, elegant</span>{" "}
              software that makes a difference.
            </h3>
            <p className="mt-4 text-sm text-background/65 leading-relaxed">
              I'm a full-stack developer who loves turning complex problems into clean, intuitive products. From AI-powered systems to real-time applications — I build with purpose.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-background/10" />
              <span className="text-xs text-background/40 uppercase tracking-widest">Currently</span>
              <div className="h-px flex-1 bg-background/10" />
            </div>
            <p className="mt-4 text-sm font-medium text-background/80">
              Exploring AI agents, systems design & cloud-native architectures.
            </p>
          </motion.div>

          {/* Right column — stacked cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {/* Education */}
            <motion.div
              variants={item}
              onMouseMove={onSpotlightMove}
              className="spotlight group rounded-2xl border border-border bg-card p-6 hover-lift hover:border-accent/60"
            >
              <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <GraduationCap className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">Education</h3>
              <p className="mt-2 text-sm text-subtext">B.Tech in Computer Science & IT</p>
              <p className="mt-1 text-sm font-semibold">K L University</p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                2023 — 2027
              </div>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              variants={item}
              onMouseMove={onSpotlightMove}
              className="spotlight rounded-2xl border border-border bg-card p-6 hover-lift hover:border-accent/60"
            >
              <h3 className="font-display text-lg font-semibold">Quick Facts</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-subtext">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  India · open to remote
                </li>
                <li className="flex items-start gap-2.5 text-sm text-subtext">
                  <Mail className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  Reach me via the contact form
                </li>
                <li className="flex items-start gap-2.5 text-sm text-subtext">
                  <Code2 className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  450+ DSA problems solved
                </li>
              </ul>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="sm:col-span-2 rounded-2xl border border-border bg-card p-6 hover-lift"
            >
              <div className="flex items-center gap-2 mb-5">
                <Rocket className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">At a glance</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: "10+", label: "Projects", accent: false },
                  { value: "450+", label: "DSA Solved", accent: false },
                  { value: "7+", label: "Certs", accent: true },
                  { value: "2+", label: "Internships", accent: false },
                ].map((s) => (
                  <div
                    key={s.label}
                    className={`rounded-xl p-3 text-center transition-transform duration-300 hover:-translate-y-1 ${
                      s.accent ? "bg-accent" : "bg-secondary"
                    }`}
                  >
                    <p className="stat-number text-xl sm:text-2xl">{s.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
