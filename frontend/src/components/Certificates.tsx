import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CERTIFICATES } from "@/lib/portfolio-data";

export function Certificates() {
  return (
    <section id="certificates" className="credentials-editorial">
      <div className="editorial-shell">
        <header className="credentials-head">
          <div>
            <span className="meta-label">05 / Credentials</span>
            <h2>
              Verified
              <br />
              <em>learning.</em>
            </h2>
          </div>
          <p>Industry credentials across cloud, AI, databases and software collaboration.</p>
        </header>
        <motion.div
          className="credentials-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {CERTIFICATES.slice(0, 3).map((certificate, index) => (
            <motion.a
              key={certificate.title}
              href={certificate.url}
              target="_blank"
              rel="noreferrer"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            >
              <span>0{index + 1}</span>
              <div>
                <small>
                  {certificate.issuer} · {certificate.date}
                </small>
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
              </div>
              <ArrowUpRight />
            </motion.a>
          ))}
        </motion.div>
        <Link to="/certificates" className="index-link">
          View all seven credentials <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
}
