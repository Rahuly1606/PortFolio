import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { CERTIFICATES } from "@/lib/portfolio-data";
import { useReveal, onSpotlightMove } from "@/lib/motion";

export function Certificates() {
  const { container, item } = useReveal();

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
            className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
          >
            View all <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {CERTIFICATES.slice(0, 3).map((c) => (
            <motion.a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              variants={item}
              onMouseMove={onSpotlightMove}
              className="spotlight group rounded-2xl border border-border bg-card p-6 hover-lift hover:border-accent"
            >
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-xl bg-foreground text-accent grid place-items-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Award className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {c.issuer} · {c.date}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-subtext">{c.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
