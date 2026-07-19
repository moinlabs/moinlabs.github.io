import { FiExternalLink } from "react-icons/fi";
import { certifications } from "@/data/certifications";
import { PageShell, PageHeader, Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";

export default function Certifications() {
  const real = certifications.filter((c) => !c.todo);
  return (
    <PageShell>
      <Section>
        <PageHeader eyebrow="07 · Certifications" title="Credentials" />
        {real.length === 0 ? (
          <EmptyState title="Certifications coming soon">
            Add entries in <code className="font-mono">src/data/certifications.ts</code> and they will render here as cards with provider, date, credential ID, and a verification link.
          </EmptyState>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {real.map((c) => (
              <GlassCard key={c.name}>
                <h2 className="font-display text-lg font-semibold">{c.name}</h2>
                <p className="muted mt-1 text-sm">{c.provider} · {c.date}</p>
                {c.credentialId && <p className="muted mt-1 font-mono text-xs">ID: {c.credentialId}</p>}
                {c.skills && (
                  <div className="mt-3 flex flex-wrap gap-1.5">{c.skills.map((s) => <Badge key={s}>{s}</Badge>)}</div>
                )}
                {c.verifyUrl && (
                  <a href={c.verifyUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline">
                    Verify <FiExternalLink />
                  </a>
                )}
              </GlassCard>
            ))}
          </div>
        )}
      </Section>
    </PageShell>
  );
}
