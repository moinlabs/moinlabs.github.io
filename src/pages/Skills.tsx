import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { skillCategories } from "@/data/skills";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Skills() {
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skillCategories
      .filter((c) => !category || c.category === category)
      .map((c) => ({ ...c, skills: q ? c.skills.filter((s) => s.toLowerCase().includes(q)) : c.skills }))
      .filter((c) => c.skills.length > 0);
  }, [category, query]);

  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="04 · Skills" title="Tools of the trade" subtitle="Filter by category or search for a specific technology." />
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <label className="glass flex items-center gap-2 rounded-xl px-3 py-2">
            <FiSearch className="muted" aria-hidden />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search skills…" className="w-44 bg-transparent text-sm outline-none" aria-label="Search skills" />
          </label>
          <div className="flex flex-wrap gap-2">
            <Badge active={!category} onClick={() => setCategory(null)}>All</Badge>
            {skillCategories.map((c) => (
              <Badge key={c.category} active={category === c.category} onClick={() => setCategory(category === c.category ? null : c.category)}>
                {c.category}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {visible.map((c) => (
            <GlassCard key={c.category} hover={false}>
              <h2 className="font-display text-lg font-semibold">{c.category}</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.skills.map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
            </GlassCard>
          ))}
        </div>
        {visible.length === 0 && <p className="muted text-center">No skills match your search.</p>}
      </Section>
    </PageShell>
  );
}
