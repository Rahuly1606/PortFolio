import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Code2, Cpu, Globe, Layers, Zap, GitBranch } from "lucide-react";
import { MiniActivityFeed } from "@/components/ActivityCard";
import { fetchAllActivity } from "@/lib/activity-api";

/* ── Typing code snippet ── */
const FULL_CODE = `const dev = {
  name: "Rahul Kumar",
  role: "Full-Stack Dev",
  stack: ["React","Node","AWS"],
  open: true,
};

dev.build("something great");`;

function charColor(code: string, idx: number): string {
  const before    = code.slice(0, idx + 1);
  const lineStart = before.lastIndexOf("\n") + 1;
  const lineEnd   = code.indexOf("\n", lineStart);
  const line      = code.slice(lineStart, lineEnd === -1 ? undefined : lineEnd);
  if (line.trimStart().startsWith("//")) return "text-white/30";

  const ch = code[idx];
  let inStr = false, strCh = "";
  for (let i = lineStart; i < idx; i++) {
    const c = code[i];
    if (!inStr && (c === '"' || c === "'")) { inStr = true; strCh = c; }
    else if (inStr && c === strCh) inStr = false;
  }
  if (inStr || ch === '"' || ch === "'") return "text-emerald-400";

  for (const kw of ["const", "true", "false"]) {
    const s = code.lastIndexOf(kw, idx);
    if (s !== -1 && idx < s + kw.length && (s === 0 || /\W/.test(code[s - 1])))
      return kw === "const" ? "text-[#e9f460]" : "text-purple-400";
  }
  if (/^[a-zA-Z_$]+$/.test(code.slice(lineStart, idx + 1).trimStart()) && code[idx + 1] === ":") return "text-sky-400";
  if (ch !== "(" && code[idx + 1] === "(") return "text-yellow-300";
  if ("{}[]();,".includes(ch)) return "text-white/25";
  if (/\d/.test(ch)) return "text-orange-400";
  return "text-white/80";
}

/* ── Orbit icon ── */
const ORBIT_ICONS = [
  { Icon: Code2,     color: "bg-sky-500/20 text-sky-300 border-sky-500/30",         dur: 9,  r: 130, start: 0   },
  { Icon: Cpu,       color: "bg-purple-500/20 text-purple-300 border-purple-500/30", dur: 12, r: 130, start: 60  },
  { Icon: Globe,     color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", dur: 15, r: 130, start: 120 },
  { Icon: Layers,    color: "bg-orange-500/20 text-orange-300 border-orange-500/30", dur: 11, r: 130, start: 180 },
  { Icon: Zap,       color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", dur: 13, r: 130, start: 240 },
  { Icon: GitBranch, color: "bg-pink-500/20 text-pink-300 border-pink-500/30",       dur: 10, r: 130, start: 300 },
];

function OrbitRing({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Ring 1 */}
      <div className="absolute h-[260px] w-[260px] rounded-full border border-border/40" />
      {/* Ring 2 — dashed */}
      <div
        className="absolute h-[310px] w-[310px] rounded-full"
        style={{ border: "1px dashed oklch(0.88 0.006 95 / 0.3)" }}
      />

      {/* Orbiting icons */}
      {ORBIT_ICONS.map(({ Icon, color, dur, r, start }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ width: 0, height: 0 }}
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: dur, repeat: Infinity, ease: "linear", delay: -(start / 360) * dur }}
        >
          <motion.div
            style={{ x: r, y: 0 }}
            animate={reduce ? {} : { rotate: -360 }}
            transition={{ duration: dur, repeat: Infinity, ease: "linear", delay: -(start / 360) * dur }}
            className={`h-8 w-8 rounded-full border ${color} grid place-items-center backdrop-blur-sm`}
          >
            <Icon className="h-3.5 w-3.5" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Live activity feed ── */
function LiveActivityFeed() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["activity"],
    queryFn:  fetchAllActivity,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return (
    <MiniActivityFeed
      stats={data ?? []}
      loading={isLoading}
      error={isError}
    />
  );
}

export function HeroVisual() {
  const [displayed, setDisplayed] = useState("");
  const [erasing,   setErasing]   = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) { setDisplayed(FULL_CODE); return; }
    let t: ReturnType<typeof setTimeout>;
    if (!erasing) {
      if (displayed.length < FULL_CODE.length)
        t = setTimeout(() => setDisplayed(FULL_CODE.slice(0, displayed.length + 1)), 34);
      else
        t = setTimeout(() => setErasing(true), 2200);
    } else {
      if (displayed.length > 0)
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 14);
      else
        t = setTimeout(() => setErasing(false), 500);
    }
    return () => clearTimeout(t);
  }, [displayed, erasing, reduce]);

  const lines = displayed.split("\n");
  let gIdx = 0;

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[560px]">

      {/* ── Orbit system ── */}
      <OrbitRing reduce={reduce} />

      {/* ── Central profile card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease }}
        className="relative z-10 w-[220px]"
      >
        {/* Avatar */}
        <div className="relative mx-auto w-24 h-24">
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-accent/30 blur-xl"
            animate={reduce ? {} : { scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative h-24 w-24 rounded-full bg-card-dark border-2 border-accent/60 grid place-items-center overflow-hidden shadow-[0_0_0_4px_oklch(0.975_0.006_95),0_0_0_6px_oklch(0.94_0.18_110/0.3)]">
            <span className="font-display text-4xl font-bold text-accent select-none">R</span>
          </div>
          {/* Online dot */}
          <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-success border-2 border-background">
            <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-75" />
          </span>
        </div>

        {/* Name + role */}
        <div className="mt-4 text-center">
          <p className="font-display text-base font-bold text-foreground">Rahul Kumar</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Full-Stack Developer</p>
        </div>

        {/* Mini stats */}
        <div className="mt-4 grid grid-cols-3 gap-1.5 text-center">
          {[
            { v: "10+",   l: "Projects" },
            { v: "1000+", l: "DSA" },
            { v: "7+",    l: "Certs" },
          ].map((s) => (
            <div key={s.l} className="rounded-lg bg-secondary border border-border py-2 px-1">
              <p className="font-display text-sm font-bold">{s.v}</p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-wide">{s.l}</p>
            </div>
          ))}
        </div>

        {/* Status pill */}
        <div className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          Open to opportunities
        </div>
      </motion.div>

      {/* ── Terminal card — bottom-right ── */}
      <motion.div
        initial={{ opacity: 0, y: 24, x: 16 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.65, delay: 0.7, ease }}
        className="absolute bottom-0 right-0 z-20 w-[240px] rounded-xl border border-white/8 bg-[#0c0c0c] shadow-[0_16px_48px_rgba(0,0,0,0.55)] overflow-hidden"
      >
        {/* Title bar */}
        <div className="flex items-center gap-1.5 border-b border-white/6 px-3 py-2 bg-[#111]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-auto text-[10px] text-white/20 font-mono">portfolio.ts</span>
        </div>
        {/* Code */}
        <div className="px-3 py-3 font-mono text-[10.5px] leading-[1.7] select-none h-[168px] overflow-hidden">
          {lines.map((line, li) => {
            const lsi = gIdx;
            gIdx += line.length + (li < lines.length - 1 ? 1 : 0);
            return (
              <div key={li} className="flex">
                <span className="mr-3 w-3 text-right text-white/12 text-[9px] shrink-0 tabular-nums">{li + 1}</span>
                <span>
                  {line.split("").map((ch, ci) => (
                    <span key={ci} className={charColor(FULL_CODE, lsi + ci)}>
                      {ch === " " ? "\u00a0" : ch}
                    </span>
                  ))}
                  {li === lines.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.85, repeat: Infinity }}
                      className="inline-block w-[6px] h-[11px] bg-[#e9f460] align-middle ml-px rounded-[1px]"
                    />
                  )}
                </span>
              </div>
            );
          })}
        </div>
        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-white/6 px-3 py-1.5 bg-[#111] text-[9px] text-white/20 font-mono">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {erasing ? "erasing…" : displayed.length === FULL_CODE.length ? "ready" : "typing…"}
          </span>
          <span>TS · UTF-8</span>
        </div>
      </motion.div>

      {/* ── Activity feed — top-left ── */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: -16 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.65, delay: 0.9, ease }}
        className="absolute top-0 left-0 z-20 w-[200px]"
      >
        <LiveActivityFeed />
      </motion.div>

      {/* ── Skill badge — top-right ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute top-4 right-0 z-20"
      >
        <motion.div
          animate={reduce ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full border border-sky-500/30 bg-sky-500/15 px-3 py-1.5 text-[11px] font-semibold text-sky-300 backdrop-blur-sm whitespace-nowrap"
        >
          ⚡ LeetCode Knight
        </motion.div>
      </motion.div>

      {/* ── TCS badge — bottom-left ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 1.25, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute bottom-8 left-0 z-20"
      >
        <motion.div
          animate={reduce ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 backdrop-blur-sm whitespace-nowrap"
        >
          🏢 TCS Digital — Upcoming
        </motion.div>
      </motion.div>
    </div>
  );
}
