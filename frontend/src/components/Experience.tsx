import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/portfolio-data";
import { DrawnUnderline } from "./annotations";

export function Experience() {
  return (
    <section id="experience" className="experience-editorial">
      <div className="editorial-shell">
        <div className="experience-title">
          <span className="meta-label">06 / Experience</span>
          <h2>
            Where I’ve
            <br />
            <em>worked.</em>
          </h2>
          <DrawnUnderline className="experience-underline" color="var(--lavender)" />
        </div>
        <div className="experience-list">
          {EXPERIENCE.map((entry, index) => (
            <motion.article
              key={entry.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="experience-meta">
                <span>{entry.duration}</span>
                <span>{entry.location}</span>
              </div>
              <div className="experience-role">
                <span>0{index + 1}</span>
                <h3>{entry.role}</h3>
                <p>{entry.company}</p>
              </div>
              <ul>
                {entry.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
