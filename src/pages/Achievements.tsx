import { achievements } from "@/data/achievements";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const catLabel = { exam: "Exam", competition: "Competition", award: "Award", recognition: "Recognition" } as const;

export default function Achievements() {
  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="06 · Achievements" title="Milestones" subtitle="Exams, competitions, and awards over the years." />
        <ol className="relative space-y-5 border-l card-border pl-6">
          {achievements.map((a) => (
            <li key={a.title} className="relative">
              <span className="absolute -left-[1.85rem] top-2 h-3 w-3 rounded-full bg-accent-violet" aria-hidden />
              <GlassCard hover={false}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-display font-semibold">{a.title}</p>
                  <div className="flex items-center gap-2">
                    <Badge>{catLabel[a.category]}</Badge>
                    <span className="muted font-mono text-xs">{a.year}</span>
                  </div>
                </div>
                {a.description && <p className="muted mt-1.5 text-sm">{a.description}</p>}
              </GlassCard>
            </li>
          ))}
        </ol>
      </Section>
    </PageShell>
  );
}
