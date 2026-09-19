export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-card-dark text-background py-10 border-t border-background/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-background/70">
          © {year} Rahul Kumar. All rights reserved.
        </p>
        <p className="text-xs text-background/50">
          Built with React, TypeScript, Three.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
