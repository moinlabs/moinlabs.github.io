import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiSearch } from "react-icons/fi";
import { allProjectTags, projects } from "@/data/projects";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

type Sort = "newest" | "oldest" | "az";

export default function Projects() {
  const [tag, setTag] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("newest");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = [...projects];
    if (tag) list = list.filter((p) => p.tags.includes(tag));
    const q = query.trim().toLowerCase();
    if (q) list = list.filter((p) => (p.title + p.description + p.tech.join(" ")).toLowerCase().includes(q));
    if (sort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "oldest") list.reverse();
    return list;
  }, [tag, query, sort]);

  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="02 · Projects" title="Things I've built" subtitle="From transformers written from scratch to CNNs squeezed onto microcontrollers." />

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <label className="glass flex items-center gap-2 rounded-xl px-3 py-2">
            <FiSearch className="muted" aria-hidden />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-44 bg-transparent text-sm outline-none"
              aria-label="Search projects"
            />
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="glass rounded-xl px-3 py-2 text-sm outline-none"
            aria-label="Sort projects"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="az">A → Z</option>
          </select>
          <div className="flex flex-wrap gap-2">
            <Badge active={tag === null} onClick={() => setTag(null)}>All</Badge>
            {allProjectTags.map((t) => (
              <Badge key={t} active={tag === t} onClick={() => setTag(t === tag ? null : t)}>{t}</Badge>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence>
            {filtered.map((p) => {
              const isOpen = expanded === p.id;
              return (
                <motion.article key={p.id} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}>
                  <GlassCard className={isOpen ? "md:col-span-2" : ""}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-xs text-accent">{p.period}{p.role ? ` · ${p.role}` : ""}</p>
                        <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
                      </div>
                      <Badge className="shrink-0 capitalize">{p.status.replace("-", " ")}</Badge>
                    </div>
                    <p className="muted mt-2 text-sm leading-relaxed">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => <Badge key={t}>{t}</Badge>)}
                    </div>
                    <div className="mt-4 flex items-center gap-3 text-sm">
                      {p.repoUrl && <a className="muted inline-flex items-center gap-1 hover:text-accent" href={p.repoUrl} target="_blank" rel="noreferrer"><FiGithub /> Code</a>}
                      {p.liveUrl && <a className="muted inline-flex items-center gap-1 hover:text-accent" href={p.liveUrl} target="_blank" rel="noreferrer"><FiExternalLink /> Live</a>}
                      {(p.features || p.challenges || p.lessons) && (
                        <button onClick={() => setExpanded(isOpen ? null : p.id)} className="font-medium text-accent hover:underline">
                          {isOpen ? "Show less" : "Details"}
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                          <div className="mt-4 grid gap-4 border-t card-border pt-4 sm:grid-cols-2">
                            {p.features && <Detail title="Features" items={p.features} />}
                            {p.challenges && <Detail title="Challenges" items={p.challenges} />}
                            {p.lessons && <Detail title="Lessons learned" items={p.lessons} />}
                            {p.futureImprovements && <Detail title="Future improvements" items={p.futureImprovements} />}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassCard>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && <p className="muted mt-8 text-center">No projects match your filters.</p>}
      </Section>
    </PageShell>
  );
}

function Detail({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-1.5 font-mono text-xs uppercase tracking-wider muted">{title}</p>
      <ul className="muted space-y-1 text-sm">
        {items.map((i) => <li key={i}>· {i}</li>)}
      </ul>
    </div>
  );
}
