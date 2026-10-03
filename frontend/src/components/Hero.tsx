import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Download, FolderGit2, Code2, BadgeCheck, Briefcase } from "lucide-react";
import { HeroVisual } from "./HeroVisual";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";

const ROLES = [
  "Full-Stack Developer",
  "Software Engineer",
  "AI/ML Enthusiast",
  "Cloud Architect",
  "Open Source Builder",
];

const TECH_MARQUEE = [
  "React", "TypeScript", "Node.js", "Python", "AWS",
  "MongoDB", "Spring Boot", "Tailwind", "Docker", "Next.js",
  "Socket.IO", "PostgreSQL", "Redis", "OpenAI",
];

const STATS = [
  { value: "10+",   label: "Projects",       icon: FolderGit2, color: "text-sky-500",     bg: "bg-sky-500/10",     border: "border-sky-500/20",     glow: "group-hover:shadow-[0_0_24px_oklch(0.65_0.2_250/0.25)]",  bar: "bg-sky-500"     },
  { value: "1000+", label: "DSA Solved",     icon: Code2,      color: "text-yellow-500",  bg: "bg-yellow-500/10",  border: "border-yellow-500/20",  glow: "group-hover:shadow-[0_0_24px_oklch(0.94_0.18_110/0.3)]",  bar: "bg-yellow-500"  },
  { value: "7+",    label: "Certifications", icon: BadgeCheck,  color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:shadow-[0_0_24px_oklch(0.68_0.18_145/0.25)]", bar: "bg-emerald-500" },
  { value: "2+",    label: "Internships",    icon: Briefcase,  color: "text-purple-500",  bg: "bg-purple-500/10",  border: "border-purple-500/20",  glow: "group-hover:shadow-[0_0_24px_oklch(0.6_0.2_300/0.25)]",   bar: "bg-purple-500"  },
];

const SOCIALS = [
  { icon: Github,    href: SOCIAL_LINKS.github,    label: "GitHub" },
  { icon: Linkedin,  href: SOCIAL_LINKS.linkedin,  label: "LinkedIn" },
  { icon: Twitter,   href: SOCIAL_LINKS.twitter,   label: "Twitter / X" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
];

/* ── Role rotator ── */
function RoleRotator() {
  const [idx, setIdx]   = useState(0);
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROLES.length);
        setShow(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <span className="relative inline-block overflow-hidden h-[1.2em] align-bottom min-w-[260px]">
      <AnimatePresence mode="wait">
        {show && (
          <motion.span
            key={idx}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%",   opacity: 1 }}
            exit={{   y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 text-accent"
          >
            {ROLES[idx]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

/* ── Premium stat card ── */
function StatCard({
  value, label, icon: Icon, color, bg, border, glow, bar, delay,
}: {
  value: string; label: string;
  icon: React.ElementType;
  color: string; bg: string; border: string; glow: string; bar: string;
  delay: number;
}) {
  const [counted, setCounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCounted(true); }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col items-center gap-2 px-3 py-4 rounded-2xl border ${border} bg-card cursor-default overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${glow}`}
    >
      {/* Hover bg fill */}
      <div className={`absolute inset-0 ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

      {/* Icon bubble */}
      <div className={`relative z-10 h-9 w-9 rounded-xl ${bg} border ${border} grid place-items-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        <Icon className={`h-4 w-4 ${color}`} />
      </div>

      {/* Value */}
      <motion.span
        className={`relative z-10 stat-number text-2xl sm:text-3xl ${color}`}
        initial={{ opacity: 0, y: 6 }}
        animate={counted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
      >
        {value}
      </motion.span>

      {/* Label */}
      <span className="relative z-10 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground text-center leading-tight">
        {label}
      </span>

      {/* Bottom accent bar */}
      <motion.div
        className={`absolute bottom-0 left-0 h-[2.5px] ${bar} origin-left rounded-full`}
        initial={{ scaleX: 0 }}
        animate={counted ? { scaleX: 1 } : {}}
        transition={{ duration: 0.55, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: "100%" }}
      />
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax mouse glow */
  const glowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduce) return;
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      glowRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, oklch(0.94 0.18 110 / 0.10), transparent 60%)`;
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduce]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={sectionRef} className="relative pt-20 pb-0 overflow-hidden flex flex-col">

      {/* ── Background stack ── */}
      {/* 1. Dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-[0.35] pointer-events-none" />
      {/* 2. Animated mesh gradient */}
      <div className="absolute inset-0 hero-mesh pointer-events-none" />
      {/* 3. Mouse-follow glow */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none transition-all duration-300" />
      {/* 4. Soft vignette edges */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, oklch(0.975 0.006 95 / 0.6) 100%)" }}
      />

      {/* ── Ambient blobs ── */}
      <motion.div
        className="absolute -top-48 -right-48 h-[700px] w-[700px] rounded-full bg-accent/15 blur-[120px] pointer-events-none"
        animate={reduce ? {} : { scale: [1, 1.08, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -left-48 h-[600px] w-[600px] rounded-full bg-success/8 blur-[100px] pointer-events-none"
        animate={reduce ? {} : { scale: [1, 1.06, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-0 lg:py-0">
        <div className="w-full grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
              className="inline-flex items-center gap-2.5 self-start rounded-full border border-border bg-card/90 backdrop-blur px-4 py-2 text-xs font-medium shadow-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for opportunities
              <span className="h-3 w-px bg-border" />
              <span className="text-muted-foreground">Open to work</span>
            </motion.div>

            {/* Name — letter-by-letter entrance */}
            <div className="mt-7 overflow-hidden">
              <motion.h1
                className="font-display font-bold leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(3.8rem, 9vw, 7rem)" }}
              >
                {"RAHUL".split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 60, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 + i * 0.06, ease }}
                    className="inline-block"
                    style={{ transformOrigin: "bottom center", perspective: 400 }}
                  >
                    {ch}
                  </motion.span>
                ))}
                <br />
                <span className="relative inline-block">
                  {"KUMAR".split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 60, rotateX: -40 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ duration: 0.55, delay: 0.35 + i * 0.06, ease }}
                      className="inline-block relative z-10"
                      style={{ transformOrigin: "bottom center", perspective: 400 }}
                    >
                      {ch}
                    </motion.span>
                  ))}
                  {/* Accent underline sweep */}
                  <motion.span
                    className="absolute inset-x-0 bottom-1 h-[0.2em] bg-accent z-0 rounded-sm origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.85, ease }}
                  />
                </span>
              </motion.h1>
            </div>

            {/* Role rotator */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.75, ease }}
              className="mt-5 flex items-center gap-3"
            >
              <motion.div
                className="h-px bg-foreground/25"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
              <p className="text-base sm:text-lg font-medium text-subtext">
                <RoleRotator />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85, ease }}
              className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md"
            >
              B.Tech CS & IT · K L University · Building scalable products with modern web, AI, and cloud technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="btn-shine press group inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 text-sm font-semibold shadow-soft hover:bg-accent hover:text-accent-foreground"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="btn-shine press inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:border-foreground/40 hover:bg-secondary"
              >
                Get in Touch
              </a>
              <a
                href="#"
                className="press group inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.05, ease }}
              className="mt-7 flex items-center gap-2"
            >
              <span className="text-xs text-muted-foreground mr-1">Find me on</span>
              {SOCIALS.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 1.1 + i * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="h-9 w-9 grid place-items-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-foreground hover:text-accent hover:border-foreground transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="mt-9 pt-7 border-t border-border"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATS.map((s, i) => (
                  <StatCard
                    key={s.label}
                    value={s.value}
                    label={s.label}
                    icon={s.icon}
                    color={s.color}
                    bg={s.bg}
                    border={s.border}
                    glow={s.glow}
                    bar={s.bar}
                    delay={1.25 + i * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right column: visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* ── Marquee strip ── */}
      <div
        className="relative overflow-hidden border-t border-border bg-card-dark py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex marquee-track gap-10 whitespace-nowrap">
          {[0, 1].map((i) => (
            <div key={i} className="flex gap-10 shrink-0">
              {TECH_MARQUEE.map((s) => (
                <span key={s} className="flex items-center gap-10 font-display text-lg font-semibold uppercase tracking-widest text-background/60">
                  {s}
                  <span className="text-accent text-xs">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
