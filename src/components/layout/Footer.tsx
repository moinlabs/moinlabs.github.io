import { Link } from "react-router-dom";
import { navItems } from "@/data/navigation";
import { socials } from "@/data/socials";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t card-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display text-lg font-bold gradient-text">{profile.name}</p>
          <p className="muted mt-2 text-sm">{profile.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider muted">Pages</p>
          <ul className="grid grid-cols-2 gap-1 text-sm">
            {navItems.map((n) => (
              <li key={n.path}>
                <Link to={n.path} className="muted hover:text-accent">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider muted">Elsewhere</p>
          <ul className="flex flex-wrap gap-3">
            {socials.map(({ label, url, icon: Icon }) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noreferrer" aria-label={label} className="muted inline-flex rounded-lg p-2 hover:text-accent glass">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="muted pb-8 text-center font-mono text-xs">
        © {new Date().getFullYear()} {profile.name} · Built with React, Vite & Tailwind
      </p>
    </footer>
  );
}
