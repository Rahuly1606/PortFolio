import { motion } from "framer-motion";
import { HandDrawnArrow, HandDrawnBorder, HandDrawnStar } from "./annotations";
import profilePhoto from "../../profile-photo-modified.jpg";

export function About() {
  return (
    <section id="about" className="about-editorial">
      <div className="editorial-shell about-grid">
        <motion.div
          className="portrait-composition"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="portrait-monogram">
            <img src={profilePhoto} alt="Rahul Kumar" loading="lazy" decoding="async" />
            <i>
              Full-stack
              <br />
              developer
            </i>
          </div>
          <HandDrawnBorder className="portrait-border" color="var(--ink)" />
          <HandDrawnArrow className="portrait-arrow" color="var(--lavender)" delay={0.5} />
          <HandDrawnStar className="portrait-star" color="var(--lavender)" delay={0.8} />
          <p className="hand-note portrait-note">
            curious mind,
            <br />
            careful craft
          </p>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="meta-label">01 / About</div>
          <h2>
            Hello<span>.</span>
          </h2>
          <p className="about-lead">
            I’m a full-stack developer who loves turning complex problems into clean, intuitive
            products.
          </p>
          <p>
            From AI-powered systems to real-time applications, I build with purpose. I’m currently
            exploring AI agents, systems design and cloud-native architectures.
          </p>
          <div className="about-facts editorial-rule">
            <div>
              <span>Based in</span>
              <strong>India · Remote-friendly</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Web, AI & cloud</strong>
            </div>
            <div>
              <span>Currently</span>
              <strong>Open to opportunities</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
