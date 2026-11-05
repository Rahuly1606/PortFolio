import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { DrawnUnderline } from "./annotations";

export function EditorialSection({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  dark = false,
  className = "",
}: {
  id?: string;
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section id={id} className={`editorial-section ${dark ? "editorial-dark" : ""} ${className}`}>
      <div className="editorial-shell">
        <motion.header
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="section-intro"
        >
          <div className="section-kicker">
            {index && <span>{index}</span>}
            <span>{eyebrow}</span>
          </div>
          <div className="section-title-wrap">
            <h2>{title}</h2>
            <DrawnUnderline className="section-title-underline" color="var(--lavender)" />
          </div>
          {description && <p>{description}</p>}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
