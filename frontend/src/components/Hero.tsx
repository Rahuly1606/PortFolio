import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { DrawnCircle, HandDrawnLabel, HandDrawnStar, HandwrittenText } from "./annotations";

const stats = [
  ["10+", "Projects"],
  ["450+", "DSA solved"],
  ["7+", "Credentials"],
  ["2+", "Internships"],
];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="marginalia-hero">
      <div className="hero-editorial-shell">
        <motion.div
          className="hero-overline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span>Portfolio · 2026</span>
          <span>Full-stack developer</span>
        </motion.div>

        <div className="hero-title-stage">
          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Portfolio
          </motion.h1>
          <DrawnCircle className="hero-circle" color="var(--lavender)" delay={0.9} />
          <HandwrittenText className="hero-signature" color="var(--ink)" delay={0.75}>
            by Rahul Kumar
          </HandwrittenText>
          <HandDrawnStar className="hero-star" color="var(--lavender)" delay={1.45} />
        </div>

        <motion.div
          className="hero-lower"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <div className="hero-intro">
            <HandDrawnLabel>Software engineer</HandDrawnLabel>
            <p>
              B.Tech CS & IT at K L University, building scalable products across modern web, AI and
              cloud technologies.
            </p>
          </div>
          <div className="hero-stats" aria-label="Portfolio highlights">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#work">
              Explore work <ArrowDown />
            </a>
            <a href="/activity">
              Live activity <ArrowUpRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
