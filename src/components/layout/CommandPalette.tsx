import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { navItems } from "@/data/navigation";
import { projects } from "@/data/projects";
import { cn } from "@/utils/cn";

interface Entry { label: string; hint: string; path: string }

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const entries = useMemo<Entry[]>(
    () => [
      ...navItems.map((n) => ({ label: n.label, hint: "Page", path: n.path })),
      ...projects.map((p) => ({ label: p.title, hint: "Project", path: "/projects" })),
    ],
    []
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries.slice(0, 8);
    return entries.filter((e) => e.label.toLowerCase().includes(q)).slice(0, 8);
  }, [entries, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-[18vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ scale: 0.96, y: -8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: -8 }}
            className="glass w-full max-w-lg rounded-2xl p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b card-border px-3 pb-2">
              <FiSearch className="muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => { setQuery(e.target.value); setActive(0); }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
                  if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
                  if (e.key === "Enter" && results[active]) go(results[active].path);
                }}
                placeholder="Search pages and projects…"
                className="w-full bg-transparent py-2 text-sm outline-none placeholder:muted"
                aria-label="Search"
              />
              <kbd className="muted font-mono text-[10px]">ESC</kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto p-1" role="listbox">
              {results.length === 0 && <li className="muted px-3 py-4 text-sm">No results.</li>}
              {results.map((r, i) => (
                <li key={r.label + r.path}>
                  <button
                    onClick={() => go(r.path)}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm",
                      i === active ? "bg-accent/15 text-accent" : "muted"
                    )}
                    role="option"
                    aria-selected={i === active}
                  >
                    <span>{r.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider opacity-70">{r.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
