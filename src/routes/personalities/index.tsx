import { createFileRoute, Link } from "@tanstack/react-router";
import { DemoBadge } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { getPersonalities } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/personalities/")({
  loader: () => getPersonalities(),
  head: () => ({
    meta: [
      { title: `Famous personalities — ${SITE.name}` },
      {
        name: "description",
        content: "Documented lives connected with Mallu Nangal. No biography is invented for this archive.",
      },
    ],
    links: [{ rel: "canonical", href: absUrl("/personalities") }],
  }),
  component: PersonalitiesPage,
});

function PersonalitiesPage() {
  const people = Route.useLoaderData();
  return (
    <main>
      <PageHero
        kicker="Personalities"
        title="People of the village"
        lede="Jathedar Dalip Singh Ji is listed with photographs supplied for the archive. Dates and a written life are still to come. The sample card is labelled and is not a resident."
        image="/images/gurdwara.jpg"
      />
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <article key={person.slug} className="overflow-hidden rounded-xl bg-surface shadow-card">
              <img src={person.photograph} alt="" className="aspect-[4/5] w-full object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-display text-2xl font-medium">{person.name}</h2>
                  {person.isDemo ? <DemoBadge /> : null}
                </div>
                <p className="mt-1 text-sm text-muted">{person.profession}</p>
                <p className="mt-3 line-clamp-3 text-sm text-ink-soft">{person.connection}</p>
                <Link
                  to="/personalities/$slug"
                  params={{ slug: person.slug }}
                  className="mt-4 inline-flex h-11 items-center rounded-md bg-madder px-4 text-sm font-medium text-paper"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-muted">
          If you can document a teacher, farmer, soldier, sevadar, or anyone whose life is bound to
          Mallu Nangal, please use Contribute. Unpublished lives stay off this page.
        </p>
      </div>
    </main>
  );
}
