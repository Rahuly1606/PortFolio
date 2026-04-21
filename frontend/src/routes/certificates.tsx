import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CERTIFICATES } from "@/lib/portfolio-data";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Rahul Kumar" },
      {
        name: "description",
        content: "Verified certifications from Microsoft, MongoDB, and Salesforce.",
      },
      { property: "og:title", content: "Certificates — Rahul Kumar" },
      {
        property: "og:description",
        content: "Industry credentials validating expertise across platforms.",
      },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-display text-5xl sm:text-6xl font-bold tracking-tight"
          >
            Verified <span className="bg-accent px-2">Credentials</span>
          </motion.h1>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-7 hover-lift hover:border-accent"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-xl bg-foreground text-accent grid place-items-center">
                    <Award className="h-5 w-5" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.issuer} · {c.date}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-subtext">{c.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
