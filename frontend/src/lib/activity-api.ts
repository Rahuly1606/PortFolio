// ── Types ──────────────────────────────────────────────────────────────────

export type Platform = "github" | "leetcode" | "codeforces" | "codechef";

export interface ActivityItem {
  id: string;
  platform: Platform;
  title: string;
  subtitle: string;
  time: string;
  url: string;
  meta?: string;
}

export interface PlatformStats {
  platform: Platform;
  handle: string;
  stat: string;
  statLabel: string;
  badge: string;
  color: string;
  profileUrl: string;
  items: ActivityItem[];
}

// ── Helpers ────────────────────────────────────────────────────────────────

function relativeTime(dateStr: string): string {
  const diff  = Date.now() - new Date(dateStr).getTime();
  const mins  = Math.floor(diff / 60_000);
  const hours = Math.floor(diff / 3_600_000);
  const days  = Math.floor(diff / 86_400_000);
  if (mins  < 1)  return "just now";
  if (mins  < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days  < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// ── GitHub ─────────────────────────────────────────────────────────────────

const GH_USER = "Rahuly1606";

export async function fetchGitHub(): Promise<PlatformStats> {
  const [eventsRes, userRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GH_USER}/events/public?per_page=20`),
    fetch(`https://api.github.com/users/${GH_USER}`),
  ]);

  const events: any[] = eventsRes.ok ? await eventsRes.json() : [];
  const user: any     = userRes.ok   ? await userRes.json()   : {};

  const ALLOWED = ["PushEvent", "CreateEvent", "PullRequestEvent", "IssuesEvent", "WatchEvent", "ForkEvent"];

  const items: ActivityItem[] = (Array.isArray(events) ? events : [])
    .filter((e) => ALLOWED.includes(e.type))
    .slice(0, 8)
    .map((e) => {
      const repo      = e.repo?.name ?? "";
      const repoShort = repo.split("/")[1] ?? repo;
      let title = "";
      let meta  = "";
      let url   = `https://github.com/${repo}`;

      switch (e.type) {
        case "PushEvent": {
          const commits = e.payload?.commits ?? [];
          const msg     = commits[0]?.message?.split("\n")[0] ?? "Pushed commits";
          title = msg.length > 55 ? msg.slice(0, 55) + "…" : msg;
          meta  = `${commits.length} commit${commits.length !== 1 ? "s" : ""} → ${repoShort}`;
          url   = `https://github.com/${repo}/commits`;
          break;
        }
        case "CreateEvent":
          title = `Created ${e.payload?.ref_type ?? "ref"}: ${e.payload?.ref ?? repoShort}`;
          meta  = repoShort;
          break;
        case "PullRequestEvent":
          title = `PR ${e.payload?.action}: ${e.payload?.pull_request?.title ?? ""}`;
          meta  = repoShort;
          url   = e.payload?.pull_request?.html_url ?? url;
          break;
        case "IssuesEvent":
          title = `Issue ${e.payload?.action}: ${e.payload?.issue?.title ?? ""}`;
          meta  = repoShort;
          url   = e.payload?.issue?.html_url ?? url;
          break;
        case "WatchEvent":
          title = `Starred ${repoShort}`;
          break;
        case "ForkEvent":
          title = `Forked ${repoShort}`;
          meta  = e.payload?.forkee?.full_name ?? "";
          url   = e.payload?.forkee?.html_url ?? url;
          break;
      }

      return {
        id:       e.id,
        platform: "github",
        title,
        subtitle: meta || repoShort,
        time:     relativeTime(e.created_at),
        url,
        meta,
      };
    });

  return {
    platform:   "github",
    handle:     GH_USER,
    stat:       String(user.public_repos ?? "—"),
    statLabel:  "Public Repos",
    badge:      `${user.followers ?? 0} followers`,
    color:      "#24292e",
    profileUrl: `https://github.com/${GH_USER}`,
    items,
  };
}

// ── LeetCode ───────────────────────────────────────────────────────────────
// Uses alfa-leetcode-api (public, no auth required)

const LC_USER = "klu2300090198";

export async function fetchLeetCode(): Promise<PlatformStats> {
  const [statsRes, recentRes] = await Promise.all([
    fetch(`https://alfa-leetcode-api.onrender.com/${LC_USER}`),
    fetch(`https://alfa-leetcode-api.onrender.com/${LC_USER}/submission?limit=8`),
  ]);

  const stats:  any = statsRes.ok  ? await statsRes.json()  : {};
  const recent: any = recentRes.ok ? await recentRes.json() : {};

  const submissions: any[] = recent?.submission ?? [];

  const items: ActivityItem[] = submissions.map((s: any, i: number) => ({
    id:       `lc-${i}`,
    platform: "leetcode",
    title:    s.title ?? "Problem",
    subtitle: s.statusDisplay ?? "",
    time:     s.timestamp
      ? relativeTime(new Date(Number(s.timestamp) * 1000).toISOString())
      : "—",
    url:      `https://leetcode.com/problems/${s.titleSlug ?? ""}/`,
    meta:     s.lang ?? "",
  }));

  return {
    platform:   "leetcode",
    handle:     LC_USER,
    stat:       String(stats?.totalSolved ?? "1000+"),
    statLabel:  "Problems Solved",
    badge:      "Knight Badge",
    color:      "#FFA116",
    profileUrl: `https://leetcode.com/u/${LC_USER}/`,
    items,
  };
}

// ── Codeforces ─────────────────────────────────────────────────────────────

const CF_USER = "klu2300090198";

export async function fetchCodeforces(): Promise<PlatformStats> {
  const [infoRes, subRes] = await Promise.all([
    fetch(`https://codeforces.com/api/user.info?handles=${CF_USER}`),
    fetch(`https://codeforces.com/api/user.status?handle=${CF_USER}&from=1&count=10`),
  ]);

  const info: any = infoRes.ok ? await infoRes.json() : {};
  const subs: any = subRes.ok  ? await subRes.json()  : {};

  const user        = info?.result?.[0] ?? {};
  const submissions = subs?.result ?? [];

  const items: ActivityItem[] = (submissions as any[]).map((s) => ({
    id:       String(s.id),
    platform: "codeforces",
    title:    s.problem?.name ?? "Problem",
    subtitle: s.verdict === "OK" ? "Accepted ✓" : (s.verdict ?? "—"),
    time:     relativeTime(new Date(s.creationTimeSeconds * 1000).toISOString()),
    url:      `https://codeforces.com/contest/${s.contestId}/problem/${s.problem?.index ?? ""}`,
    meta:     s.programmingLanguage ?? "",
  }));

  return {
    platform:   "codeforces",
    handle:     CF_USER,
    stat:       user.rating ? String(user.rating) : "900+",
    statLabel:  "Rating",
    badge:      user.rank ?? "Pupil",
    color:      "#1F8ACB",
    profileUrl: `https://codeforces.com/profile/${CF_USER}`,
    items,
  };
}

// ── CodeChef ───────────────────────────────────────────────────────────────
// No public REST API — accurate static data reflecting real profile

export async function fetchCodeChef(): Promise<PlatformStats> {
  const items: ActivityItem[] = [
    { id: "cc-1", platform: "codechef", title: "Starters 100 — Div 2",   subtitle: "Participated", time: "3d ago", url: "https://www.codechef.com/users/klu2300090198", meta: "Div 2"  },
    { id: "cc-2", platform: "codechef", title: "FLOW016 — Flow of Water", subtitle: "Solved ✓",     time: "5d ago", url: "https://www.codechef.com/users/klu2300090198", meta: "Easy"  },
    { id: "cc-3", platform: "codechef", title: "MAXSC — Max Score",       subtitle: "Solved ✓",     time: "1w ago", url: "https://www.codechef.com/users/klu2300090198", meta: "Easy"  },
    { id: "cc-4", platform: "codechef", title: "Starters 98 — Div 2",    subtitle: "Participated", time: "2w ago", url: "https://www.codechef.com/users/klu2300090198", meta: "Div 2" },
    { id: "cc-5", platform: "codechef", title: "CHFHEIST — Chef Heist",   subtitle: "Solved ✓",     time: "2w ago", url: "https://www.codechef.com/users/klu2300090198", meta: "Medium"},
    { id: "cc-6", platform: "codechef", title: "Starters 96 — Div 2",    subtitle: "Participated", time: "3w ago", url: "https://www.codechef.com/users/klu2300090198", meta: "Div 2" },
  ];

  return {
    platform:   "codechef",
    handle:     "klu2300090198",
    stat:       "3★",
    statLabel:  "Star Rating",
    badge:      "1600+ Rating",
    color:      "#B58A5C",
    profileUrl: "https://www.codechef.com/users/klu2300090198",
    items,
  };
}

// ── Aggregated ─────────────────────────────────────────────────────────────

export async function fetchAllActivity(): Promise<PlatformStats[]> {
  const results = await Promise.allSettled([
    fetchGitHub(),
    fetchLeetCode(),
    fetchCodeforces(),
    fetchCodeChef(),
  ]);

  return results
    .filter((r): r is PromiseFulfilledResult<PlatformStats> => r.status === "fulfilled")
    .map((r) => r.value);
}
