import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { useRef, useState } from "react";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";
import { DrawnUnderline, HandDrawnArrow, HandwrittenSignature } from "./annotations";
import profilePhoto from "../../profile-photo-modified.jpg";

const EJ_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
const EJ_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EJ_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";
const OWNER_EMAIL = "alexrahul9576@gmail.com";
type Status = "idle" | "loading" | "success" | "error";

function validate(name: string, email: string, subject: string, message: string) {
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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const validationError = validate(name, email, subject, message);
    if (validationError) {
      setErrMsg(validationError);
      setStatus("error");
      return;
    }
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
    } catch (error: unknown) {
      const response = error as { text?: string; message?: string };
      const unconfigured = [EJ_SERVICE_ID, EJ_TEMPLATE_ID, EJ_PUBLIC_KEY].some((value) =>
        value.startsWith("YOUR_"),
      );
      setStatus("error");
      setErrMsg(
        unconfigured
          ? "Email delivery is not configured yet. Please use the email link instead."
          : (response.text ?? response.message ?? "Failed to send. Please try again."),
      );
    }
  };

  const resetStatus = () => {
    if (status !== "idle") {
      setStatus("idle");
      setErrMsg("");
    }
  };

  return (
    <section id="contact" className="contact-editorial">
      <div className="editorial-shell">
        <div className="contact-thanks">
          <div className="contact-portrait">
            <img src={profilePhoto} alt="Rahul Kumar" loading="lazy" decoding="async" />
          </div>
          <div className="contact-title">
            <span className="meta-label">08 / Contact</span>
            <h2>Thank you.</h2>
            <DrawnUnderline className="contact-underline" color="var(--lavender)" />
          </div>
          <div className="contact-message">
            <p className="hand-note">
              Have an idea?
              <br />
              Let’s make it useful.
            </p>
            <HandDrawnArrow className="contact-arrow" color="var(--lavender)" />
            <HandwrittenSignature className="contact-signature" color="var(--ink)" />
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              Available for freelance work, internships, full-time opportunities and thoughtful
              collaborations.
            </p>
            <a href={`mailto:${OWNER_EMAIL}`} className="contact-email">
              {OWNER_EMAIL}
              <ArrowUpRight />
            </a>
            <span>India · Remote-friendly</span>
            <div className="contact-socials">
              {Object.entries(SOCIAL_LINKS).map(([label, url]) => (
                <a key={label} href={url} target="_blank" rel="noreferrer">
                  {label}
                  <ArrowUpRight />
                </a>
              ))}
            </div>
          </div>

          <form ref={formRef} onSubmit={onSubmit} onChange={resetStatus} className="editorial-form">
            <div className="form-heading">
              <span>Send a note</span>
              <p>I usually reply within 24 hours.</p>
            </div>
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  className="form-status success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <CheckCircle2 />
                  Message sent. I’ll be in touch soon.
                </motion.div>
              )}
              {status === "error" && errMsg && (
                <motion.div
                  className="form-status error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <AlertCircle />
                  {errMsg}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="form-row">
              <label>
                <span>Name</span>
                <input required name="name" autoComplete="name" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input required name="subject" placeholder="What’s this about?" />
            </label>
            <label>
              <span>Message</span>
              <textarea required name="message" rows={4} placeholder="Tell me a little more..." />
            </label>
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 className="spin" />
                  Sending
                </>
              ) : (
                <>
                  Send message
                  <Send />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
