import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CERTIFICATES } from "@/lib/portfolio-data";
import { useReveal, onSpotlightMove } from "@/lib/motion";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Rahul Kumar" },
      { name: "description", content: "Verified certifications from Microsoft, MongoDB, and Salesforce." },
      { property: "og:title", content: "Certificates — Rahul Kumar" },
      { property: "og:description", content: "Industry credentials validating expertise across platforms." },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  const { container, item } = useReveal(0.07);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground shadow-soft mb-5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Certifications
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              Verified{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Credentials</span>
                <span className="absolute inset-x-0 bottom-1 h-[0.2em] bg-accent z-0 rounded-sm" />
              </span>
            </h1>
            <p className="mt-4 text-subtext max-w-xl text-lg">
              Industry certifications validating expertise across platforms and technologies.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {CERTIFICATES.map((c) => (
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
      </main>
      <Footer />
    </div>
  );
}
