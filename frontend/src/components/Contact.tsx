import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Twitter, Instagram, Send, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulated submit (Web3Forms can be wired by adding access_key)
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Message sent! I'll get back to you shortly.");
    (e.target as HTMLFormElement).reset();
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's build something great"
          description="Have an opportunity or idea in mind? Drop a message — I usually reply within 24 hours."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl bg-card-dark text-background p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
            <h3 className="font-display text-2xl font-bold">Contact info</h3>
            <p className="mt-2 text-sm text-background/70">
              Available for freelance, internships, and collaborations.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <span className="h-9 w-9 rounded-lg bg-background/10 grid place-items-center">
                  <Mail className="h-4 w-4 text-accent" />
                </span>
                Use the form to reach me
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="h-9 w-9 rounded-lg bg-background/10 grid place-items-center">
                  <MapPin className="h-4 w-4 text-accent" />
                </span>
                India · Remote-friendly
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {[
                { icon: Github, href: SOCIAL_LINKS.github },
                { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                { icon: Twitter, href: SOCIAL_LINKS.twitter },
                { icon: Instagram, href: SOCIAL_LINKS.instagram },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-xl bg-background/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Subject
              </label>
              <input
                required
                name="subject"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Tell me a bit more..."
              />
            </div>
            <button
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-accent px-6 py-3.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send message"} <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
