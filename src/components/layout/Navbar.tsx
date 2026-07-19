import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiCommand, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navItems } from "@/data/navigation";
import { cn } from "@/utils/cn";

export default function Navbar({ theme, onToggleTheme }: { theme: string; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const topLevel = navItems.filter((n) => n.inNav);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 sm:px-6" aria-label="Primary">
        <NavLink to="/" className="font-display text-lg font-bold tracking-tight">
          <span className="gradient-text">MK</span>
          <span className="muted ml-2 hidden font-mono text-xs sm:inline">moin.khan</span>
        </NavLink>

        <ul className="hidden items-center gap-1 md:flex">
          {topLevel.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive ? "bg-accent/15 text-accent" : "muted hover:text-accent"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="muted hidden items-center gap-1.5 rounded-lg border card-border px-2.5 py-1.5 font-mono text-xs hover:border-accent/60 hover:text-accent sm:flex"
            aria-label="Open command palette"
          >
            <FiCommand /> K
          </button>
          <button onClick={onToggleTheme} className="rounded-lg p-2 muted hover:text-accent" aria-label="Toggle theme">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setOpen((v) => !v)} className="rounded-lg p-2 md:hidden" aria-label="Toggle menu" aria-expanded={open}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-3 mt-2 rounded-2xl p-3 md:hidden"
          >
            <ul className="grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn("block rounded-lg px-3 py-2 text-sm", isActive ? "bg-accent/15 text-accent" : "muted")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
