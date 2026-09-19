import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Flat string of the full code block
const FULL_CODE = `const developer = {
  name: "Rahul Kumar",
  role: "Full-Stack Dev",
  stack: ["React", "Node", "AWS"],
  open: true
};

developer.build("something great");`;

// Per-character colour based on simple token rules
function charColor(code: string, index: number): string {
  // find which line and column we're at
  const before = code.slice(0, index + 1);
  const lineStart = before.lastIndexOf("\n") + 1;
  const line = code.slice(lineStart, code.indexOf("\n", lineStart) === -1 ? undefined : code.indexOf("\n", lineStart));

  if (line.trimStart().startsWith("//")) return "text-muted-foreground";

  const ch = code[index];

  // inside a string literal
  let inString = false;
  let stringChar = "";
  for (let i = lineStart; i < index; i++) {
    const c = code[i];
    if (!inString && (c === '"' || c === "'")) { inString = true; stringChar = c; }
    else if (inString && c === stringChar) inString = false;
  }
  if (inString || ch === '"' || ch === "'") return "text-green-400";

  // keywords
  const keywords = ["const", "true", "false", "null"];
  for (const kw of keywords) {
    const start = code.lastIndexOf(kw, index);
    if (start !== -1 && index < start + kw.length && (start === 0 || /\W/.test(code[start - 1]))) {
      if (kw === "true" || kw === "false" || kw === "null") return "text-purple-400";
      return "text-accent";
    }
  }

  // property keys (word before colon)
  if (ch === ":") return "text-foreground/50";
  const colonAhead = code.slice(index + 1).search(/^[a-zA-Z_$]* *:/) === 0 ||
    /^[a-zA-Z_$]+$/.test(code.slice(lineStart, index + 1).trimStart()) && code[index + 1] === ":";
  if (colonAhead) return "text-blue-400";

  // method / function names before (
  if (ch !== "(" && code[index + 1] === "(") return "text-accent";

  // brackets & punctuation
  if ("{}[]();,".includes(ch)) return "text-foreground/50";

  // numbers
  if (/\d/.test(ch)) return "text-orange-400";

  return "text-foreground";
}

const BADGES = [
  { label: "React",      color: "bg-blue-500/20 text-blue-300 border-blue-500/30",    pos: "top-6 -right-5" },
  { label: "TypeScript", color: "bg-blue-700/20 text-blue-200 border-blue-700/30",    pos: "top-20 -left-7" },
  { label: "Node.js",    color: "bg-green-500/20 text-green-300 border-green-500/30", pos: "bottom-20 -left-7" },
  { label: "AWS",        color: "bg-orange-500/20 text-orange-300 border-orange-500/30", pos: "bottom-6 -right-5" },
  { label: "Python",     color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", pos: "top-1/2 -translate-y-1/2 -right-7" },
];

const TYPE_SPEED  = 38;   // ms per char while typing
const ERASE_SPEED = 18;   // ms per char while erasing
const PAUSE_FULL  = 1800; // ms pause when fully typed
const PAUSE_EMPTY = 500;  // ms pause when fully erased

export function HeroVisual() {
  const [displayed, setDisplayed] = useState("");
  const [erasing, setErasing]     = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!erasing) {
      if (displayed.length < FULL_CODE.length) {
        timeout = setTimeout(() => setDisplayed(FULL_CODE.slice(0, displayed.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setErasing(true), PAUSE_FULL);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), ERASE_SPEED);
      } else {
        timeout = setTimeout(() => setErasing(false), PAUSE_EMPTY);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, erasing]);

  // Split into lines for line-number rendering
  const lines = displayed.split("\n");
  // track global char index for colouring
  let globalIdx = 0;

  return (
    <div className="flex justify-center lg:justify-end w-full">
      <div className="relative w-full max-w-[480px] px-10 py-10 sm:px-14 sm:py-12">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        </div>

        {/* floating badges */}
        {BADGES.map((b, i) => (
          <motion.span
            key={b.label}
            className={`absolute z-20 rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm whitespace-nowrap ${b.color} ${b.pos}`}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, y: reduce ? 0 : [0, -5, 0] }}
            transition={{
              opacity: { delay: 0.6 + i * 0.1, duration: 0.4 },
              scale:   { delay: 0.6 + i * 0.1, duration: 0.4 },
              y:       reduce ? { duration: 0 } : { delay: 0.6 + i * 0.1, duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.12, y: reduce ? 0 : -8 }}
          >
            {b.label}
          </motion.span>
        ))}

        {/* terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 rounded-2xl border border-border bg-[#0d0d0d] shadow-2xl overflow-hidden"
        >
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-[#111]">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-6 text-xs text-muted-foreground font-mono">portfolio.ts</span>
          </div>

          {/* code body — fixed height so card doesn't resize */}
          <div className="px-4 py-4 sm:px-5 sm:py-5 font-mono text-xs sm:text-sm leading-7 select-none h-[252px] sm:h-[268px]">
            {lines.map((line, li) => {
              const lineStartIdx = globalIdx;
              globalIdx += line.length + (li < lines.length - 1 ? 1 : 0); // +1 for \n

              return (
                <div key={li} className="flex">
                  <span className="mr-3 sm:mr-4 w-4 text-right text-muted-foreground/30 text-xs select-none shrink-0">
                    {li + 1}
                  </span>
                  <span>
                    {line.split("").map((ch, ci) => (
                      <span key={ci} className={charColor(FULL_CODE, lineStartIdx + ci)}>
                        {ch === " " ? "\u00a0" : ch}
                      </span>
                    ))}
                    {/* blinking cursor on the last rendered line */}
                    {li === lines.length - 1 && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-[7px] h-[14px] bg-accent align-middle ml-px"
                      />
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          {/* status bar */}
          <div className="flex items-center justify-between border-t border-border px-4 py-2 bg-[#111] text-[10px] text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              {erasing ? "erasing…" : displayed.length === FULL_CODE.length ? "done" : "typing…"}
            </span>
            <span>TypeScript · UTF-8</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
