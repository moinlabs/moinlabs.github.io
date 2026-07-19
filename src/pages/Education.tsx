import { education } from "@/data/education";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";

export default function Education() {
  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="05 · Education" title="Where I studied" />
        <div className="space-y-5">
          {education.map((e) => (
            <GlassCard key={e.institution}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-xl font-semibold">{e.institution}</h2>
                <span className="muted font-mono text-xs">{e.period}</span>
              </div>
              <p className="mt-1 text-accent">{e.degree}</p>
              <p className="muted mt-1 text-sm font-medium">{e.score}</p>
              {e.details && (
                <ul className="muted mt-3 space-y-1.5 text-sm leading-relaxed">
                  {e.details.map((d) => <li key={d.slice(0, 30)}>· {d}</li>)}
                </ul>
              )}
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
