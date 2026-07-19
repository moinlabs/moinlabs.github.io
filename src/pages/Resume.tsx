import { FiDownload } from "react-icons/fi";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { achievements } from "@/data/achievements";
import { skillCategories } from "@/data/skills";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { ButtonAnchor } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Resume() {
  return (
    <PageShell>
      <Section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <PageHeader eyebrow="12 · Resume" title="Interactive resume" subtitle="A live view of the data files powering this site — always in sync." />
          <ButtonAnchor href={profile.resumeUrl} download><FiDownload /> Download PDF</ButtonAnchor>
        </div>

        <div className="space-y-8">
          <GlassCard hover={false}>
            <h2 className="font-display text-lg font-semibold text-accent">Experience</h2>
            <ul className="mt-3 space-y-4">
              {experience.map((e) => (
                <li key={e.company + e.role}>
                  <div className="flex flex-wrap justify-between gap-1">
                    <p className="font-medium">{e.role} · <span className="muted">{e.company}</span></p>
                    <span className="muted font-mono text-xs">{e.period}</span>
                  </div>
                  <ul className="muted mt-1 space-y-1 text-sm">{e.points.map((p) => <li key={p}>· {p}</li>)}</ul>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <h2 className="font-display text-lg font-semibold text-accent">Education</h2>
            <ul className="mt-3 space-y-3">
              {education.map((e) => (
                <li key={e.institution} className="flex flex-wrap justify-between gap-1">
                  <p className="font-medium">{e.degree} · <span className="muted">{e.institution}</span></p>
                  <span className="muted font-mono text-xs">{e.score} · {e.period}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <h2 className="font-display text-lg font-semibold text-accent">Skills</h2>
            <div className="mt-3 space-y-3">
              {skillCategories.map((c) => (
                <div key={c.category}>
                  <p className="muted mb-1.5 font-mono text-xs uppercase tracking-wider">{c.category}</p>
                  <div className="flex flex-wrap gap-1.5">{c.skills.map((s) => <Badge key={s}>{s}</Badge>)}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard hover={false}>
            <h2 className="font-display text-lg font-semibold text-accent">Achievements</h2>
            <ul className="muted mt-3 space-y-1.5 text-sm">
              {achievements.map((a) => <li key={a.title}>· {a.title} ({a.year})</li>)}
            </ul>
          </GlassCard>
        </div>
      </Section>
    </PageShell>
  );
}
