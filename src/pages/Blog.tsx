import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { blogPosts } from "@/data/blog";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const tags = useMemo(() => [...new Set(blogPosts.flatMap((p) => p.tags))].sort(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts
      .filter((p) => !tag || p.tags.includes(tag))
      .filter((p) => !q || (p.title + p.excerpt).toLowerCase().includes(q));
  }, [query, tag]);

  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="09 · Blog" title="Writing" subtitle="Notes on AI, robotics, and software engineering." />
        {blogPosts.length === 0 ? (
          <EmptyState title="No posts yet">
            The blog is wired up and waiting. Add posts in <code className="font-mono">src/data/blog.ts</code> — cards, tags, search, and reading time all render automatically.
          </EmptyState>
        ) : (
          <>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <label className="glass flex items-center gap-2 rounded-xl px-3 py-2">
                <FiSearch className="muted" aria-hidden />
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search posts…" className="w-44 bg-transparent text-sm outline-none" aria-label="Search posts" />
              </label>
              <div className="flex flex-wrap gap-2">
                <Badge active={!tag} onClick={() => setTag(null)}>All</Badge>
                {tags.map((t) => <Badge key={t} active={tag === t} onClick={() => setTag(tag === t ? null : t)}>{t}</Badge>)}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {filtered.map((p) => (
                <GlassCard key={p.slug}>
                  <p className="muted font-mono text-xs">{p.date} · {p.readingTime}</p>
                  <h2 className="mt-1 font-display text-xl font-semibold">{p.title}</h2>
                  <p className="muted mt-2 text-sm">{p.excerpt}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">{p.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
                </GlassCard>
              ))}
            </div>
          </>
        )}
      </Section>
    </PageShell>
  );
}
