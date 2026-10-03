import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, Activity } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlatformCard, PlatformCardSkeleton, RefreshButton, PLATFORM_META } from "@/components/ActivityCard";
import { fetchAllActivity } from "@/lib/activity-api";

export const Route = createFileRoute("/activity")({
  head: () => ({
    meta: [
      { title: "Activity — Rahul Kumar" },
      { name: "description", content: "Live coding activity across GitHub, LeetCode, Codeforces and CodeChef." },
    ],
  }),
  component: ActivityPage,
});

function ActivityPage() {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["activity"],
    queryFn:  fetchAllActivity,
    staleTime: 5 * 60 * 1000,   // 5 min
    retry: 1,
  });

  const platforms = data ?? [];

  // Aggregate recent feed across all platforms, sorted by recency position
  const recentFeed = platforms
    .flatMap((s) => s.items.slice(0, 3).map((item) => ({ ...item, platformLabel: PLATFORM_META[s.platform].label, dot: PLATFORM_META[s.platform].dot })))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Back link */}
          <Link
            to="/"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Back to home
          </Link>

          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground shadow-soft mb-5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              Live Activity
            </div>

            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
                  Coding{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Activity</span>
                    <span className="absolute inset-x-0 bottom-1 h-[0.2em] bg-accent z-0 rounded-sm" />
                  </span>
                </h1>
                <p className="mt-3 text-subtext max-w-xl">
                  Real-time feed from GitHub, LeetCode, Codeforces and CodeChef.
                </p>
              </div>
              <RefreshButton onClick={() => refetch()} loading={isFetching} />
            </div>
          </motion.div>

          {/* Recent feed strip */}
          {!isLoading && recentFeed.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border bg-secondary/30">
                <Activity className="h-4 w-4 text-muted-foreground" />
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Recent across all platforms
                </p>
              </div>
              <ul className="divide-y divide-border">
                {recentFeed.map((item, i) => (
                  <motion.li
                    key={`${item.id}-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-5 py-3 hover:bg-secondary/40 transition-colors group/row"
                    >
                      <span className={`h-2 w-2 rounded-full shrink-0 ${item.dot}`} />
                      <span className="text-sm font-medium text-foreground truncate flex-1 group-hover/row:text-accent transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-muted-foreground shrink-0">{item.platformLabel}</span>
                      <span className="text-[11px] text-muted-foreground shrink-0">{item.time}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Platform cards grid */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {isLoading ? (
              [0, 1, 2, 3].map((i) => <PlatformCardSkeleton key={i} />)
            ) : isError ? (
              <div className="md:col-span-2 rounded-2xl border border-border bg-card p-10 text-center">
                <p className="text-muted-foreground">Failed to load activity data.</p>
                <button
                  onClick={() => refetch()}
                  className="mt-4 press inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Try again
                </button>
              </div>
            ) : (
              platforms.map((s, i) => (
                <PlatformCard key={s.platform} stats={s} delay={0.1 + i * 0.08} />
              ))
            )}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
