import { motion } from "framer-motion";
import { DrawnUnderline, HandDrawnArrow } from "./annotations";

export function Education() {
  return (
    <section className="education-editorial">
      <div className="editorial-shell">
        <div className="education-head">
          <div className="meta-label">02 / Education</div>
          <div className="education-title">
            <h2>
              Learning,
              <br />
              <em>always.</em>
            </h2>
            <DrawnUnderline className="education-underline" color="var(--lavender)" />
          </div>
          <p>
            Formal education provides the foundation. Building real products, competing and
            experimenting keep it moving.
          </p>
        </div>
        <motion.article
          className="education-entry"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="education-date">2023 — 2027</span>
          <div>
            <h3>B.Tech in Computer Science & IT</h3>
            <p>K L University</p>
          </div>
          <span className="education-place">India</span>
        </motion.article>
        <div className="education-foot">
          <HandDrawnArrow className="education-arrow" color="var(--lavender)" />
          <p className="hand-note">
            building the bridge
            <br />
            between theory & practice
          </p>
          <div className="education-metrics">
            <span>
              <strong>450+</strong> DSA problems
            </span>
            <span>
              <strong>7+</strong> verified credentials
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
