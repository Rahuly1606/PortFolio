import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { PROJECTS } from "@/lib/portfolio-data";
import { DrawnUnderline, HandDrawnArrow } from "./annotations";
import { ProjectPhoneMockup } from "./ProjectPhoneMockup";

function hasRealLive(project: { live: string; github: string }) {
  return Boolean(
    project.live &&
    project.live !== project.github &&
    !/example\.com|github\.com$/.test(project.live),
  );
}

function ProjectLinks({
  project,
  dark = false,
}: {
  project: (typeof PROJECTS)[number];
  dark?: boolean;
}) {
  return (
    <div className={`project-links ${dark ? "project-links-dark" : ""}`}>
      {hasRealLive(project) && (
        <a href={project.live} target="_blank" rel="noreferrer">
          Live project <ArrowUpRight />
        </a>
      )}
      <a href={project.github} target="_blank" rel="noreferrer">
        <Github /> Source code
      </a>
    </div>
  );
}

function CaseVisual({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  return (
    <div className="case-visual">
      <ProjectPhoneMockup project={project} index={index} compact className="case-phone" />
      <motion.div
        className={`case-device case-device-${index + 1}`}
        initial={{ opacity: 0, x: index % 2 ? -60 : 60, rotate: index % 2 ? -5 : 5 }}
        whileInView={{ opacity: 1, x: 0, rotate: index % 2 ? -2 : 2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="case-device-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="case-device-content">
          <span>
            0{index + 1} / {project.tech[0]}
          </span>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div>
            {project.tech.map((tech) => (
              <b key={tech}>{tech}</b>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const galleryRef = useRef<HTMLElement>(null);
  const [spread, setSpread] = useState(false);
  const [hovered, setHovered] = useState(false);
  const expanded = spread || hovered;
  const { scrollYProgress } = useScroll({ target: galleryRef, offset: ["start end", "end start"] });
  const galleryY = useTransform(scrollYProgress, [0, 1], [70, -60]);

  return (
    <>
      <section id="work" ref={galleryRef} className="project-gallery-dark">
        <div className="editorial-shell">
          <div className="project-gallery-head">
            <div>
              <div className="meta-label">04 / Selected work</div>
              <div className="project-gallery-title">
                <h2>Projects.</h2>
                <DrawnUnderline color="var(--lavender)" className="project-gallery-underline" />
              </div>
            </div>
            <div className="project-gallery-note">
              <p className="hand-note">
                real systems,
                <br />
                drawn into shape
              </p>
              <HandDrawnArrow color="var(--lavender)" className="project-gallery-arrow" />
            </div>
          </div>
          <motion.button
            type="button"
            className={`phones-gallery ${expanded ? "is-spread" : ""} ${spread ? "is-pinned" : ""}`}
            style={{ y: galleryY }}
            onClick={() => setSpread((value) => !value)}
            onPointerMove={(event) => {
              const target = event.target instanceof Element ? event.target : null;
              if (event.pointerType !== "touch" && target?.closest(".gallery-phone-item")) {
                setHovered(true);
              }
            }}
            onPointerLeave={() => setHovered(false)}
            aria-expanded={expanded}
            aria-label={spread ? "Stack project previews" : "Spread project previews"}
          >
            {PROJECTS.map((project, index) => (
              <div className={`gallery-phone-item gallery-phone-${index + 1}`} key={project.title}>
                <ProjectPhoneMockup project={project} index={index} />
                <div className="gallery-phone-label">
                  <span>0{index + 1}</span>
                  <div>
                    <strong>{project.title}</strong>
                    <small>{project.tech.slice(0, 2).join(" · ")}</small>
                  </div>
                </div>
              </div>
            ))}
            <span className="gallery-interaction-note hand-note">
              {spread
                ? "click to gather"
                : hovered
                  ? "click to keep them open"
                  : "hover or click to explore"}
            </span>
          </motion.button>
          <div className="gallery-footer editorial-rule">
            <span>Five selected builds</span>
            <Link to="/projects">
              View project index <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <div className="project-case-studies">
        {PROJECTS.slice(0, 2).map((project, index) => {
          const dark = index % 2 === 0;
          return (
            <section
              key={project.title}
              className={`project-case ${dark ? "case-dark" : "case-light"}`}
            >
              <div className={`editorial-shell case-grid ${index % 2 ? "case-reverse" : ""}`}>
                <motion.div
                  className="case-copy"
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.75 }}
                >
                  <div className="case-kicker">
                    <span>Project 0{index + 1}</span>
                    <span>{project.tech[0]} build</span>
                  </div>
                  <div className="case-title">
                    <h3>{project.title}</h3>
                    <DrawnUnderline color="var(--lavender)" className="case-title-underline" />
                  </div>
                  <p>{project.description}</p>
                  <div className="case-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <ProjectLinks project={project} dark={dark} />
                  <p className="case-note hand-note">
                    built to solve,
                    <br />
                    not just to show
                  </p>
                </motion.div>
                <CaseVisual project={project} index={index} />
              </div>
            </section>
          );
        })}
        <div className="project-more">
          <div className="editorial-shell">
            <span>Three more projects in the complete index.</span>
            <Link to="/projects" className="index-link">
              View all five projects <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
