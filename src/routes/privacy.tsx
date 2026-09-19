import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${SITE.name}` },
      { name: "description", content: "How the Mallu Nangal archive treats messages and contributed material." },
    ],
    links: [{ rel: "canonical", href: absUrl("/privacy") }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main>
      <PageHero kicker="Legal" title="Privacy Policy" compact />
      <article className="mx-auto max-w-3xl space-y-4 px-5 py-12 text-ink-soft md:px-8">
        <p>
          This website publishes historical and community material about Mallu Nangal. Contact and
          contribution forms store a name, email, optional phone, and a subject or description so
          editors can reply. They are not a public directory of people.
        </p>
        <p>
          Do not send the only copy of a family manuscript through the website. Photographs of
          living people should be offered only with the consent of those who can reasonably give it.
        </p>
        <p>
          Pages may use a privacy-respecting embed when a YouTube address is supplied by an editor.
          Census figures quoted here come from published Government of India tables.
        </p>
      </article>
    </main>
  );
}
