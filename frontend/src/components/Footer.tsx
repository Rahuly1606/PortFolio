import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-card-dark text-background overflow-hidden">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-accent text-accent-foreground grid place-items-center font-display font-bold text-lg">
                R
              </div>
              <span className="font-display font-semibold text-lg">
                Rahul<span className="text-background/40">.dev</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-background/55 leading-relaxed max-w-xs">
              Full-Stack Developer crafting elegant, scalable products with modern web, AI, and cloud technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {["About", "Work", "Skills", "Experience", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`/#${l.toLowerCase()}`}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {[
                { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
                { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter / X" },
                { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            © {year} Rahul Kumar. All rights reserved.
          </p>
          <p className="text-xs text-background/30">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
