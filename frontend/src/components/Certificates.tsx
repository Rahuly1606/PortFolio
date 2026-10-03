import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { CERTIFICATES } from "@/lib/portfolio-data";
import { useReveal, onSpotlightMove } from "@/lib/motion";

export function Certificates() {
  const { container, item } = useReveal(0.08);

  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Certifications"
            title="Verified Credentials"
            description="Industry certifications validating expertise across platforms."
          />
          <Link
            to="/certificates"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            View all
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid md:grid-cols-3 gap-5"
        >
          {CERTIFICATES.slice(0, 3).map((c) => (
            <motion.a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              variants={item}
              onMouseMove={onSpotlightMove}
              className="spotlight group rounded-2xl border border-border bg-card p-6 hover-lift hover:border-accent/60 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-xl bg-foreground text-accent grid place-items-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Award className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground/50 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="mt-5 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.issuer} · {c.date}
                </p>
              </div>

              <h3 className="mt-2 font-display text-lg font-semibold leading-tight flex-1">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-subtext leading-relaxed">{c.description}</p>

              <div className="mt-5 pt-4 border-t border-border">
                <span className="text-xs font-semibold text-accent group-hover:underline">
                  View credential →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
