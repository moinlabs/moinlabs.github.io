import { FiGithub } from "react-icons/fi";
import { githubUsername, openSourceItems } from "@/data/opensource";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";

export default function OpenSource() {
  const real = openSourceItems.filter((i) => !i.todo);
  const hasUsername = githubUsername !== "USERNAME";
  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="08 · Open Source" title="Code in the open" subtitle="Pinned repositories and contributions." />
        {real.length === 0 ? (
          <EmptyState title="Repositories coming soon">
            Set your GitHub username and list repos in <code className="font-mono">src/data/opensource.ts</code>.
          </EmptyState>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {real.map((r) => (
              <GlassCard key={r.name}>
                <a href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-display text-lg font-semibold hover:text-accent">
                  <FiGithub /> {r.name}
                </a>
                <p className="muted mt-2 text-sm">{r.description}</p>
                {r.language && <Badge className="mt-3">{r.language}</Badge>}
              </GlassCard>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <GlassCard hover={false}>
            <p className="font-display font-semibold">Contribution graph</p>
            {hasUsername ? (
              <img
                className="mt-3 w-full rounded-lg"
                src={`https://ghchart.rshah.org/38BDF8/${githubUsername}`}
                alt={`GitHub contribution chart for ${githubUsername}`}
                loading="lazy"
              />
            ) : (
              <p className="muted mt-2 text-sm">Placeholder — set <code className="font-mono">githubUsername</code> to enable a live contribution chart.</p>
            )}
          </GlassCard>
          <GlassCard hover={false}>
            <p className="font-display font-semibold">GitHub statistics</p>
            {hasUsername ? (
              <img
                className="mt-3 w-full rounded-lg"
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true`}
                alt={`GitHub statistics for ${githubUsername}`}
                loading="lazy"
              />
            ) : (
              <p className="muted mt-2 text-sm">Placeholder — enabled automatically once a username is set.</p>
            )}
          </GlassCard>
        </div>
      </Section>
    </PageShell>
  );
}
