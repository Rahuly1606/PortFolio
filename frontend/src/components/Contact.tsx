import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Twitter, Instagram, Send, Mail, MapPin, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";
import { onSpotlightMove } from "@/lib/motion";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Message sent! I'll get back to you shortly.");
    (e.target as HTMLFormElement).reset();
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's build something great"
          description="Have an opportunity or idea in mind? Drop a message — I usually reply within 24 hours."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 rounded-2xl glass-panel text-foreground p-8 relative overflow-hidden hover-lift"
          >
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-accent/20 blur-3xl blob-drift pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-success/10 blur-2xl pointer-events-none" />

            <div className="relative">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-accent to-accent-glow grid place-items-center">
                <MessageSquare className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">Contact info</h3>
              <p className="mt-2 text-sm text-subtext leading-relaxed">
                Available for freelance, internships, and collaborations.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm">
                  <span className="h-9 w-9 rounded-lg bg-black/[0.03] border border-black/10 grid place-items-center shrink-0">
                    <Mail className="h-4 w-4 text-accent" />
                  </span>
                  <span className="text-foreground/80">Use the form to reach me</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="h-9 w-9 rounded-lg bg-black/[0.03] border border-black/10 grid place-items-center shrink-0">
                    <MapPin className="h-4 w-4 text-accent" />
                  </span>
                  <span className="text-foreground/80">India · Remote-friendly</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-black/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Find me on
                </p>
                <div className="flex gap-2.5">
                  {[
                    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
                    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter / X" },
                    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="h-10 w-10 grid place-items-center rounded-xl bg-black/[0.03] border border-black/10 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-transparent hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={onSubmit}
            onMouseMove={onSpotlightMove}
            className="spotlight lg:col-span-3 rounded-2xl glass-panel p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  required
                  name="name"
                  className="w-full rounded-xl border border-black/12 bg-black/[0.02] text-foreground placeholder:text-muted-foreground/60 px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-black/12 bg-black/[0.02] text-foreground placeholder:text-muted-foreground/60 px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Subject
              </label>
              <input
                required
                name="subject"
                className="w-full rounded-xl border border-black/12 bg-black/[0.02] text-foreground placeholder:text-muted-foreground/60 px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full rounded-xl border border-black/12 bg-black/[0.02] text-foreground placeholder:text-muted-foreground/60 px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="Tell me a bit more..."
              />
            </div>
            <button
              disabled={loading}
              className="btn-shine press group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-accent to-accent-glow text-accent-foreground px-6 py-3.5 text-sm font-semibold shadow-[0_8px_30px_oklch(0.94_0.18_110/0.35)] disabled:opacity-60 disabled:pointer-events-none transition-shadow hover:shadow-[0_10px_40px_oklch(0.94_0.18_110/0.5)]"
            >
              {loading ? "Sending..." : "Send message"}
              <Send
                className={`h-4 w-4 transition-transform duration-300 ${
                  loading ? "animate-pulse" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                }`}
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
