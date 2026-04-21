import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { CERTIFICATES } from "@/lib/portfolio-data";

export function Certificates() {
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

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {CERTIFICATES.slice(0, 3).map((c, i) => (
            <motion.a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 hover-lift hover:border-accent"
            >
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-xl bg-foreground text-accent grid place-items-center">
                  <Award className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
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
        </div>
      </div>
    </section>
  );
}
