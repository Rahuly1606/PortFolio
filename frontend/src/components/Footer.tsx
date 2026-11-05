import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="editorial-shell">
        <div>
          <span>© {new Date().getFullYear()} Rahul Kumar</span>
          <span>Full-stack developer · India</span>
        </div>
        <span>Curriculum vitae unavailable</span>
        <a href="#top">
          Back to top <ArrowUp />
        </a>
      </div>
    </footer>
  );
}
