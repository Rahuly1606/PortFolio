import { useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Shared scroll-reveal variants for a staggered container + its children.
 * Automatically flattens motion for users who prefer reduced motion.
 */
export function useReveal(stagger = 0.08) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.6, ease: EASE },
    },
  };

  return { container, item };
}

/**
 * Pointer handler that feeds the CSS `--mx`/`--my` variables used by the
 * `.spotlight` utility, so the accent glow follows the cursor. GPU-friendly:
 * only writes two custom properties, no layout/paint thrash.
 */
export function onSpotlightMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}
