import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-45% 0px -48%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="editorial-nav">
      <div className="editorial-nav-inner">
        <div className="nav-year">
          <span>{new Date().getFullYear()}</span>
          <i />
        </div>
        <span className="nav-cv" aria-label="Curriculum vitae not available as a download">
          Curriculum vitae
        </span>
        <div className="nav-right">
          <a href="/#top" className="nav-name">
            Rahul Kumar
          </a>
          <nav aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={link.href} data-active={active === link.id}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <motion.div className="nav-progress" style={{ scaleX: progress }} />
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <span>0{index + 1}</span>
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
