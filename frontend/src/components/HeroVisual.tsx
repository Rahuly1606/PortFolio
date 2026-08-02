import { motion } from "framer-motion";

const CODE_LINES = [
  { indent: 0, tokens: [{ t: "const ", c: "text-accent" }, { t: "developer", c: "text-foreground" }, { t: " = {", c: "text-foreground/60" }] },
  { indent: 1, tokens: [{ t: "name", c: "text-blue-400" }, { t: ": ", c: "text-foreground/60" }, { t: '"Rahul Kumar"', c: "text-green-400" }, { t: ",", c: "text-foreground/60" }] },
  { indent: 1, tokens: [{ t: "role", c: "text-blue-400" }, { t: ": ", c: "text-foreground/60" }, { t: '"Full-Stack Dev"', c: "text-green-400" }, { t: ",", c: "text-foreground/60" }] },
  { indent: 1, tokens: [{ t: "stack", c: "text-blue-400" }, { t: ": [", c: "text-foreground/60" }, { t: '"React"', c: "text-orange-400" }, { t: ", ", c: "text-foreground/60" }, { t: '"Node"', c: "text-orange-400" }, { t: ", ", c: "text-foreground/60" }, { t: '"AWS"', c: "text-orange-400" }, { t: "],", c: "text-foreground/60" }] },
  { indent: 1, tokens: [{ t: "open", c: "text-blue-400" }, { t: ": ", c: "text-foreground/60" }, { t: "true", c: "text-purple-400" }] },
  { indent: 0, tokens: [{ t: "};", c: "text-foreground/60" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: "developer", c: "text-foreground" }, { t: ".", c: "text-foreground/60" }, { t: "build", c: "text-accent" }, { t: "(", c: "text-foreground/60" }, { t: '"something great"', c: "text-green-400" }, { t: ");", c: "text-foreground/60" }] },
];

const BADGES = [
  { label: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30", x: "-left-6", y: "top-10" },
  { label: "TypeScript", color: "bg-blue-700/20 text-blue-200 border-blue-700/30", x: "-right-4", y: "top-20" },
  { label: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30", x: "-left-8", y: "bottom-24" },
  { label: "AWS", color: "bg-orange-500/20 text-orange-300 border-orange-500/30", x: "-right-6", y: "bottom-16" },
  { label: "Python", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", x: "left-1/2 -translate-x-1/2", y: "-top-5" },
];

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center h-[520px] lg:h-[600px]">
      {/* Glow behind card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      {/* Floating badges */}
      {BADGES.map((b, i) => (
        <motion.span
          key={b.label}
          className={`absolute z-20 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${b.color} ${b.x} ${b.y}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: 0.6 + i * 0.1, duration: 0.4 },
            scale: { delay: 0.6 + i * 0.1, duration: 0.4 },
            y: { delay: 0.6 + i * 0.1, duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {b.label}
        </motion.span>
      ))}

      {/* Terminal card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{ perspective: 1000 }}
        className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-[#0d0d0d] shadow-2xl overflow-hidden"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-[#111]">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">portfolio.ts</span>
        </div>

        {/* Code body */}
        <div className="px-5 py-5 font-mono text-sm leading-7 select-none">
          {CODE_LINES.map((line, li) => (
            <motion.div
              key={li}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + li * 0.07, duration: 0.3 }}
              className="flex"
            >
              <span className="mr-4 w-4 text-right text-muted-foreground/30 text-xs select-none shrink-0">
                {li + 1}
              </span>
              <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                {line.tokens.map((tok, ti) => (
                  <span key={ti} className={tok.c}>{tok.t}</span>
                ))}
                {/* blinking cursor on last line */}
                {li === CODE_LINES.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-accent align-middle ml-0.5"
                  />
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-border px-4 py-2 bg-[#111] text-[10px] text-muted-foreground font-mono">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            ready
          </span>
          <span>TypeScript · UTF-8</span>
        </div>
      </motion.div>
    </div>
  );
}
