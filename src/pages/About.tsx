import { profile } from "@/data/profile";
import { timeline } from "@/data/timeline";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function About() {
  const lists = [
    { title: "Current focus", items: profile.currentFocus },
    { title: "Learning", items: profile.learning },
    { title: "Building", items: profile.building },
  ];
  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="01 · About" title="A bit about me" subtitle={profile.tagline} />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {profile.bio.map((para) => (
              <p key={para.slice(0, 30)} className="muted leading-relaxed">{para}</p>
            ))}
            <div className="pt-2">
              <p className="mb-2 font-mono text-xs uppercase tracking-wider muted">Interests</p>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((i) => <Badge key={i}>{i}</Badge>)}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {lists.map((l) => (
              <GlassCard key={l.title} hover={false}>
                <p className="font-display font-semibold">{l.title}</p>
                <ul className="muted mt-2 space-y-1.5 text-sm">
                  {l.items.map((item) => <li key={item}>· {item}</li>)}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <Section className="mt-16">
        <h2 className="mb-6 font-display text-2xl font-bold">Growth timeline</h2>
        <ol className="relative space-y-6 border-l card-border pl-6">
          {timeline.map((t) => (
            <li key={t.year + t.title} className="relative">
              <span className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full bg-accent" aria-hidden />
              <p className="font-mono text-xs text-accent">{t.year}</p>
              <p className="font-display font-semibold">{t.title}</p>
              <p className="muted text-sm">{t.description}</p>
            </li>
          ))}
        </ol>
      </Section>
    </PageShell>
  );
}
