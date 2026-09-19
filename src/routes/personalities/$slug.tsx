import { createFileRoute, notFound } from "@tanstack/react-router";
import { DemoNotice } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { Prose } from "@/components/prose";
import { getPersonality } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/personalities/$slug")({
  loader: async ({ params }) => {
    const person = await getPersonality({ data: { slug: params.slug } });
    if (!person) throw notFound();
    return person;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Personality"} — ${SITE.name}` },
      { name: "description", content: loaderData?.connection || loaderData?.profession || SITE.description },
    ],
    links: [{ rel: "canonical", href: absUrl(`/personalities/${loaderData?.slug ?? ""}`) }],
  }),
  component: PersonalityDetail,
});

function PersonalityDetail() {
  const person = Route.useLoaderData();
  const facts = [
    ["Profession", person.profession],
    ["Education", person.education],
    ["Born", person.birthDate],
    ["Died", person.deathDate || "—"],
  ];
  return (
    <main>
      <PageHero kicker="Personalities" title={person.name} lede={person.profession} image={person.photograph} compact />
      <article className="mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-[18rem_minmax(0,1fr)] md:px-8">
        <aside>
          <dl className="space-y-4 rounded-xl bg-surface p-5 shadow-card">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{label}</dt>
                <dd className="mt-1 text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
        <div>
          {person.isDemo ? <DemoNotice /> : null}
          <h2 className="mt-6 font-display text-2xl font-medium">Biography</h2>
          <Prose text={person.biography} className="mt-3" />
          <h2 className="mt-10 font-display text-2xl font-medium">Achievements</h2>
          <Prose text={person.achievements} className="mt-3" />
          <h2 className="mt-10 font-display text-2xl font-medium">Contributions</h2>
          <Prose text={person.contributions} className="mt-3" />
          <h2 className="mt-10 font-display text-2xl font-medium">Connection with Mallu Nangal</h2>
          <Prose text={person.connection} className="mt-3" />
          {person.photos.map((photo) => (
            <figure key={photo.id} className="mt-8">
              <img src={photo.image} alt={photo.caption} className="w-full rounded-xl object-cover" />
              {photo.caption ? <figcaption className="mt-2 text-sm text-muted">{photo.caption}</figcaption> : null}
            </figure>
          ))}
          <p className="mt-10 text-sm text-muted">Sources: {person.sources}</p>
        </div>
      </article>
    </main>
  );
}
