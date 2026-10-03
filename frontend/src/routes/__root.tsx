import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-[10rem] font-bold leading-none text-foreground/8 select-none">404</p>
        <h1 className="-mt-8 font-display text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="press inline-flex items-center justify-center rounded-xl bg-foreground text-background px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rahul Kumar — Full-Stack Developer & Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Rahul Kumar — Full-Stack Developer crafting elegant, scalable products with React, Node, AI and cloud.",
      },
      { name: "author", content: "Rahul Kumar" },
      { name: "theme-color", content: "#0B0B0B" },
      { property: "og:title", content: "Rahul Kumar — Full-Stack Developer" },
      {
        property: "og:description",
        content: "Modern full-stack portfolio with featured projects, skills, and experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rahul Kumar — Full-Stack Developer" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
