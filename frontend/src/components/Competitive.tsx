import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COMPETITIVE } from "@/lib/portfolio-data";

export function Competitive() {
  return (
    <section className="coding-editorial">
      <div className="editorial-shell">
        <div className="coding-head">
          <div>
            <span className="meta-label">07 / Practice</span>
            <h2>
              Keeping
              <br />
              the edge.
            </h2>
          </div>
          <p>Problem solving across global competitive programming platforms.</p>
        </div>
        <motion.div
          className="coding-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {COMPETITIVE.map((profile) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            >
              <div>
                <span>{profile.platform}</span>
                <ArrowUpRight />
              </div>
              <strong>{profile.stat}</strong>
              <p>{profile.label}</p>
              <small>{profile.badge}</small>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
