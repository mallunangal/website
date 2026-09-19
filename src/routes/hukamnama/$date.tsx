import { createFileRoute, notFound } from "@tanstack/react-router";
import { DemoNotice } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { Prose } from "@/components/prose";
import { getHukamnamaByDate } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";
import { formatLongDate } from "@/lib/utils";

export const Route = createFileRoute("/hukamnama/$date")({
  loader: async ({ params }) => {
    const entry = await getHukamnamaByDate({ data: { date: params.date } });
    if (!entry) throw notFound();
    return entry;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Hukamnama ${loaderData?.date ?? ""} — ${SITE.name}` },
      { name: "description", content: "Hukamnama archive entry for Mallu Nangal." },
    ],
    links: [{ rel: "canonical", href: absUrl(`/hukamnama/${loaderData?.date ?? ""}`) }],
  }),
  component: HukamnamaDatePage,
});

function HukamnamaDatePage() {
  const entry = Route.useLoaderData();
  return (
    <main>
      <PageHero
        kicker="Hukamnama archive"
        title={formatLongDate(entry.date)}
        lede={entry.ang ? `Ang ${entry.ang}` : "Ang to be added"}
        image={entry.image || "/images/gurdwara.jpg"}
        compact
      />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        {entry.isDemo ? <DemoNotice /> : null}
        <h2 className="mt-6 font-display text-3xl font-medium">{entry.title}</h2>
        {entry.image ? (
          <img src={entry.image} alt="" className="mt-6 aspect-video w-full rounded-xl object-cover" />
        ) : null}
        <h3 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Punjabi text</h3>
        <Prose text={entry.punjabiText} className="mt-3" />
        <h3 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Translation</h3>
        <Prose text={entry.translation} className="mt-3" />
        <p className="mt-8 text-sm text-muted">Source: {entry.source}</p>
      </article>
    </main>
  );
}
