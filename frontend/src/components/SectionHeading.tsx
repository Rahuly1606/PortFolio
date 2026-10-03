import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest shadow-soft text-muted-foreground">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
        {title}
      </h2>
      <motion.div
        aria-hidden="true"
        className={`mt-4 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
        initial={{ opacity: 0, x: align === "center" ? 0 : -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="h-1 w-12 rounded-full bg-accent origin-left" />
        <span className="h-1 w-3 rounded-full bg-accent/40" />
        <span className="h-1 w-1.5 rounded-full bg-accent/20" />
      </motion.div>
      {description && (
        <p className="mt-4 text-subtext text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
