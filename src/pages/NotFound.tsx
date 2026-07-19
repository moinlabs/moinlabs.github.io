import { PageShell, Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageShell>
      <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="font-mono text-7xl font-bold gradient-text">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
        <p className="muted mt-2">This route doesn't exist. Head back home to keep exploring.</p>
        <ButtonLink to="/" className="mt-6">Back to home</ButtonLink>
      </Section>
    </PageShell>
  );
}
