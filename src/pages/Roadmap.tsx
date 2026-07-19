import { roadmap } from "@/data/roadmap";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const categories = [
  { key: "certification", label: "Upcoming certifications" },
  { key: "project", label: "Planned projects" },
  { key: "learning", label: "Learning roadmap" },
  { key: "career", label: "Career goals" },
  { key: "talk", label: "Conference talks" },
  { key: "idea", label: "Ideas" },
] as const;

export default function Roadmap() {
  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="11 · Roadmap" title="What's next" subtitle="Future goals and the learning journey ahead. (Currently placeholders — edit src/data/roadmap.ts.)" />
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((c) => {
            const items = roadmap.filter((r) => r.category === c.key);
            if (items.length === 0) return null;
            return (
              <GlassCard key={c.key} hover={false}>
                <h2 className="font-display text-lg font-semibold">{c.label}</h2>
                <ul className="mt-3 space-y-3">
                  {items.map((r) => (
                    <li key={r.title} className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium">{r.title}</p>
                        {r.notes && <p className="muted text-xs">{r.notes}</p>}
                      </div>
                      {r.target && <Badge>{r.target}</Badge>}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </Section>
    </PageShell>
  );
}
