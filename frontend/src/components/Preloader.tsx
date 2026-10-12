import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Full-screen intro splash shown on every page load: the name animates in big
 * and stylish, holds briefly, then the whole overlay lifts away to reveal the
 * page. Collapses to a brief fade for users who prefer reduced motion.
 */
export function Preloader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    // Lock scroll while the splash is up so the hero doesn't peek through.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const hold = reduce ? 600 : 2200;
    const t = setTimeout(() => {
      setDone(true);
    }, hold);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, [done, reduce]);

  const FIRST = "RAHUL";
  const LAST = "KUMAR";

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: reduce ? 1 : 1.04,
            filter: reduce ? "blur(0px)" : "blur(6px)",
          }}
          transition={{ duration: reduce ? 0.3 : 0.7, ease }}
        >
          {/* Soft atmospheric glow behind the name */}
          {!reduce && (
            <>
              <motion.div
                className="absolute h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-3xl"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease }}
              />
              <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
            </>
          )}

          <div className="relative text-center px-6">
            <motion.p
              className="mb-5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              Portfolio
            </motion.p>

            <h1
              className="font-display font-bold leading-[0.9] tracking-tight text-foreground"
              style={{ fontSize: "clamp(3.2rem, 12vw, 9rem)" }}
            >
              <span className="block">
                {FIRST.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: reduce ? 0 : 70, rotateX: reduce ? 0 : -45 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.07, ease }}
                    style={{ transformOrigin: "bottom center", perspective: 500 }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient-accent">
                  {LAST.split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ opacity: 0, y: reduce ? 0 : 70, rotateX: reduce ? 0 : -45 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ duration: 0.6, delay: 0.45 + i * 0.07, ease }}
                      style={{ transformOrigin: "bottom center", perspective: 500 }}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </span>
                <motion.span
                  className="absolute inset-x-0 bottom-1 h-[0.18em] bg-gradient-to-r from-accent to-accent-glow z-0 rounded-sm origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.95, ease }}
                />
              </span>
            </h1>

            {/* Loading progress line */}
            {!reduce && (
              <motion.div
                className="mx-auto mt-10 h-[2px] w-40 overflow-hidden rounded-full bg-black/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="h-full w-full bg-gradient-to-r from-accent to-accent-glow"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1.6, delay: 0.4, ease }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
