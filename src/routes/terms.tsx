import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms — ${SITE.name}` },
      { name: "description", content: "Terms of use for the Mallu Nangal digital archive." },
    ],
    links: [{ rel: "canonical", href: absUrl("/terms") }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <PageHero kicker="Legal" title="Terms" compact />
      <article className="mx-auto max-w-3xl space-y-4 px-5 py-12 text-ink-soft md:px-8">
        <p>
          The archive is offered for public education. It is not an official gazette, not a land
          record, and not a religious authority. Census numbers are reproduced from published
          tables; they may be revised by later counts.
        </p>
        <p>
          Demo photographs and placeholder catalogue cards are labelled as such. They must not be
          treated as pictures or manuscripts from Mallu Nangal.
        </p>
        <p>
          Contributors keep their originals. A copy on this website does not transfer copyright
          unless that is agreed separately in writing.
        </p>
      </article>
    </main>
  );
}
