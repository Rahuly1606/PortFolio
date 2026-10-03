import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { Github, Code2, Trophy, ChefHat, ExternalLink, RefreshCw } from "lucide-react";
import type { Platform, ActivityItem, PlatformStats } from "@/lib/activity-api";

// ── Platform meta ──────────────────────────────────────────────────────────

export const PLATFORM_META: Record<Platform, {
  label: string;
  icon: React.ElementType;
  dot: string;
  border: string;
  bg: string;
  text: string;
}> = {
  github: {
    label:  "GitHub",
    icon:   Github,
    dot:    "bg-slate-400",
    border: "border-slate-400/30",
    bg:     "bg-slate-500/10",
    text:   "text-slate-500",
  },
  leetcode: {
    label:  "LeetCode",
    icon:   Code2,
    dot:    "bg-yellow-400",
    border: "border-yellow-400/30",
    bg:     "bg-yellow-500/10",
    text:   "text-yellow-500",
  },
  codeforces: {
    label:  "Codeforces",
    icon:   Trophy,
    dot:    "bg-sky-400",
    border: "border-sky-400/30",
    bg:     "bg-sky-500/10",
    text:   "text-sky-500",
  },
  codechef: {
    label:  "CodeChef",
    icon:   ChefHat,
    dot:    "bg-amber-500",
    border: "border-amber-500/30",
    bg:     "bg-amber-500/10",
    text:   "text-amber-500",
  },
};

// ── Mini feed (HeroVisual) ─────────────────────────────────────────────────

export function MiniActivityFeed({
  stats,
  loading,
  error,
}: {
  stats: PlatformStats[];
  loading: boolean;
  error: boolean;
}) {
  const navigate = useNavigate();

  const feed = stats
    .flatMap((s) => s.items.map((item) => ({ ...item, platform: s.platform as Platform })))
    .slice(0, 4);

  return (
    <div
      className="w-full rounded-xl border border-border bg-card/95 backdrop-blur-sm shadow-soft overflow-hidden cursor-pointer group"
      onClick={() => navigate({ to: "/activity" })}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate({ to: "/activity" })}
      aria-label="View full activity feed"
    >
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-border">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Live Activity
        </p>
        <span className="flex items-center gap-1 text-[10px] text-muted-foreground group-hover:text-foreground transition-colors">
          <ExternalLink className="h-3 w-3" />
          View all
        </span>
      </div>

      {loading ? (
        <div className="divide-y divide-border">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-2 px-3 py-2 animate-pulse">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-border shrink-0" />
              <div className="flex-1 space-y-1">
                <div className="h-2.5 bg-border rounded w-3/4" />
                <div className="h-2 bg-border rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      ) : error || feed.length === 0 ? (
        <div className="px-3 py-4 text-center text-[11px] text-muted-foreground">
          Could not load activity
        </div>
      ) : (
        <ul className="divide-y divide-border">
          {feed.map((item, i) => {
            const meta = PLATFORM_META[item.platform];
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="flex items-start gap-2 px-3 py-2"
              >
                <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${meta.dot}`} />
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-foreground leading-tight truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {meta.label} · {item.time}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// ── Full platform card (/activity page) ───────────────────────────────────

export function PlatformCard({
  stats,
  delay = 0,
}: {
  stats: PlatformStats;
  delay?: number;
}) {
  const meta = PLATFORM_META[stats.platform];
  const Icon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border bg-card overflow-hidden"
    >
      {/* Header */}
      <div className={`flex items-center justify-between px-5 py-4 border-b border-border ${meta.bg}`}>
        <div className="flex items-center gap-3">
          <div className={`h-9 w-9 rounded-xl ${meta.bg} border ${meta.border} grid place-items-center`}>
            <Icon className={`h-4 w-4 ${meta.text}`} />
          </div>
          <div>
            <p className="font-display text-sm font-bold">{meta.label}</p>
            <p className="text-[11px] text-muted-foreground">@{stats.handle}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`font-display text-xl font-bold ${meta.text}`}>{stats.stat}</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stats.statLabel}</p>
        </div>
      </div>

      {/* Badge + profile link */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-border bg-secondary/30">
        <span className={`inline-flex items-center gap-1.5 rounded-md border ${meta.border} ${meta.bg} px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${meta.text}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
          {stats.badge}
        </span>
        <a
          href={stats.profileUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
        >
          Profile <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {/* Activity list */}
      <ul className="divide-y divide-border">
        {stats.items.length === 0 ? (
          <li className="px-5 py-4 text-sm text-muted-foreground text-center">
            No recent activity
          </li>
        ) : (
          stats.items.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.04 * i, duration: 0.3 }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 px-5 py-3 hover:bg-secondary/50 transition-colors group/item"
              >
                <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${meta.dot} opacity-60 group-hover/item:opacity-100 transition-opacity`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground leading-snug truncate group-hover/item:text-accent transition-colors">
                    {item.title}
                  </p>
                  <div className="mt-0.5 flex items-center gap-2 flex-wrap">
                    {item.subtitle && (
                      <span className="text-[11px] text-subtext">{item.subtitle}</span>
                    )}
                    {item.meta && (
                      <span className={`text-[10px] font-semibold ${meta.text}`}>{item.meta}</span>
                    )}
                  </div>
                </div>
                <span className="text-[11px] text-muted-foreground shrink-0 mt-0.5">
                  {item.time}
                </span>
              </a>
            </motion.li>
          ))
        )}
      </ul>
    </motion.div>
  );
}

// ── Skeleton ───────────────────────────────────────────────────────────────

export function PlatformCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden animate-pulse">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/30">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-border" />
          <div className="space-y-1.5">
            <div className="h-3 w-20 bg-border rounded" />
            <div className="h-2.5 w-14 bg-border rounded" />
          </div>
        </div>
        <div className="space-y-1.5 text-right">
          <div className="h-5 w-12 bg-border rounded ml-auto" />
          <div className="h-2.5 w-16 bg-border rounded" />
        </div>
      </div>
      <div className="divide-y divide-border">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-start gap-3 px-5 py-3">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-border shrink-0" />
            <div className="flex-1 space-y-1.5">
              <div className="h-3 bg-border rounded w-4/5" />
              <div className="h-2.5 bg-border rounded w-2/5" />
            </div>
            <div className="h-2.5 w-10 bg-border rounded shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Refresh button ─────────────────────────────────────────────────────────

export function RefreshButton({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="press inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none transition-colors"
    >
      <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
      {loading ? "Refreshing…" : "Refresh"}
    </button>
  );
}
