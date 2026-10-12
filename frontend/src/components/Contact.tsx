import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Github, Linkedin, Twitter, Instagram,
  Send, Mail, MapPin, MessageSquare,
  CheckCircle2, AlertCircle, Loader2,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";

// ─── EmailJS config ────────────────────────────────────────────────────────
// 1. Sign up free at https://emailjs.com
// 2. Add an Email Service (Gmail / Outlook) → copy the Service ID
// 3. Create an Email Template with variables:
//      {{from_name}}  {{from_email}}  {{subject}}  {{message}}
//    Set "To Email" to your own address → copy the Template ID
// 4. Go to Account → API Keys → copy the Public Key
// 5. Replace the three placeholder strings below (or use env vars)
const EJ_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
const EJ_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EJ_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";

const OWNER_EMAIL = "alexrahul9576@gmail.com";

type Status = "idle" | "loading" | "success" | "error";

function validate(
  name: string, email: string, subject: string, message: string,
): string | null {
  if (!name.trim()) return "Name is required.";
  if (!email.trim()) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email address.";
  if (!subject.trim()) return "Subject is required.";
  if (message.trim().length < 10) return "Message must be at least 10 characters.";
  return null;
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const subject = fd.get("subject") as string;
    const message = fd.get("message") as string;

    const err = validate(name, email, subject, message);
    if (err) { setErrMsg(err); setStatus("error"); return; }

    setStatus("loading");
    setErrMsg("");

    try {
      await emailjs.send(
        EJ_SERVICE_ID,
        EJ_TEMPLATE_ID,
        { from_name: name, from_email: email, subject, message },
        { publicKey: EJ_PUBLIC_KEY },
      );
      setStatus("success");
      formRef.current?.reset();
    } catch (error: any) {
      // EmailJS not configured yet — show a clear setup message in dev
      const isNotConfigured =
        EJ_SERVICE_ID === "YOUR_SERVICE_ID" ||
        EJ_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
        EJ_PUBLIC_KEY === "YOUR_PUBLIC_KEY";

      setStatus("error");
      setErrMsg(
        isNotConfigured
          ? "EmailJS is not configured yet. See the setup instructions in Contact.tsx."
          : (error?.text ?? error?.message ?? "Failed to send. Please try again."),
      );
    }
  };

  const resetStatus = () => {
    if (status !== "idle") { setStatus("idle"); setErrMsg(""); }
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
          {/* ── Info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 rounded-2xl glass-solid text-foreground p-8 relative overflow-hidden hover-lift"
          >
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-accent/20 blur-3xl blob-drift pointer-events-none" style={{ contain: 'strict', willChange: 'transform' }} />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-success/10 blur-2xl pointer-events-none" style={{ contain: 'strict', willChange: 'transform' }} />

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
                  <a
                    href={`mailto:${OWNER_EMAIL}`}
                    className="text-foreground/80 hover:text-accent transition-colors truncate"
                  >
                    {OWNER_EMAIL}
                  </a>
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

          {/* ── Form ── */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={onSubmit}
            onChange={resetStatus}
            className="lg:col-span-3 rounded-2xl glass-solid p-8 space-y-5"
          >
            {/* Success */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 rounded-xl bg-success/10 border border-success/25 px-4 py-3 text-sm text-success"
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Message sent! I'll get back to you within 24 hours.</span>
              </motion.div>
            )}

            {/* Error */}
            {status === "error" && errMsg && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 rounded-xl bg-destructive/10 border border-destructive/25 px-4 py-3 text-sm text-destructive"
              >
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{errMsg}</span>
              </motion.div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  required
                  name="name"
                  autoComplete="name"
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
                  autoComplete="email"
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
              type="submit"
              disabled={status === "loading"}
              className="btn-shine press group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-accent to-accent-glow text-accent-foreground px-6 py-3.5 text-sm font-semibold shadow-[0_8px_30px_oklch(0.94_0.18_110/0.35)] disabled:opacity-60 disabled:pointer-events-none transition-shadow hover:shadow-[0_10px_40px_oklch(0.94_0.18_110/0.5)]"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
