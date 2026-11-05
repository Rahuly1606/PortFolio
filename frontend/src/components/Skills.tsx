import { motion } from "framer-motion";
import { SKILLS } from "@/lib/portfolio-data";
import { DrawnCircle, DrawnUnderline, HandDrawnArrow } from "./annotations";

const marks = ["JS", "PY", "JV", "DB", "AI", "UX"];

function BookStack() {
  return (
    <div className="book-stack" role="img" aria-label="Hand-drawn stack of technology books">
      <div className="book book-one">
        <span>Systems</span>
      </div>
      <div className="book book-two">
        <span>Interfaces</span>
      </div>
      <div className="book book-three">
        <span>Cloud</span>
      </div>
      <div className="book book-four">
        <span>AI</span>
      </div>
      <i className="book-leaf leaf-one" />
      <i className="book-leaf leaf-two" />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="skills-editorial">
      <div className="editorial-shell">
        <div className="skills-top">
          <motion.div
            className="skills-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="meta-label">03 / Toolbox</div>
            <h2>Skills.</h2>
            <DrawnUnderline className="skills-underline" color="var(--lavender)" />
            <div className="skills-marks">
              {marks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
              <DrawnCircle className="skills-circle" color="var(--lavender)" />
            </div>
            <p className="hand-note">
              tools I reach for
              <br />
              to make ideas real
            </p>
            <HandDrawnArrow className="skills-arrow" color="var(--lavender)" />
          </motion.div>
          <BookStack />
        </div>

        <motion.div
          className="skills-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {SKILLS.map((group, index) => (
            <motion.article
              key={group.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <span>0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.items.join(" · ")}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
