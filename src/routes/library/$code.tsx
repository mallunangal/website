import { createFileRoute, notFound } from "@tanstack/react-router";
import { DemoNotice } from "@/components/demo-badge";
import { ManuscriptViewer } from "@/components/manuscript-viewer";
import { PageHero } from "@/components/layout/page-hero";
import { Prose } from "@/components/prose";
import { getArchiveItem } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/library/$code")({
  loader: async ({ params }) => {
    const item = await getArchiveItem({ data: { code: params.code } });
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.itemCode ?? "Item"} — ${SITE.name}` },
      { name: "description", content: loaderData?.title ?? SITE.description },
    ],
    links: [{ rel: "canonical", href: absUrl(`/library/${loaderData?.itemCode ?? ""}`) }],
  }),
  component: ManuscriptDetail,
});

function ManuscriptDetail() {
  const item = Route.useLoaderData();
  const meta = [
    ["Catalogue ID", item.itemCode],
    ["Author", item.author],
    ["Date", item.yearLabel],
    ["Period", item.period],
    ["Language", item.language],
    ["Script", item.script],
    ["Material", item.material],
    ["Pages", String(item.pageCount || item.pages.length || "—")],
    ["Source / owner", item.sourceOwner],
    ["Keywords", item.keywords],
  ];

  return (
    <main>
      <PageHero kicker={item.category} title={item.title} lede={item.itemCode} image={item.coverImage} compact />
      <div className="mx-auto max-w-6xl space-y-10 px-5 py-12 md:px-8">
        {item.isDemo ? <DemoNotice /> : null}
        {item.coverImage ? (
          <ManuscriptViewer title={item.title} coverImage={item.coverImage} pages={item.pages} />
        ) : null}
        <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <dl className="space-y-3 rounded-xl bg-surface p-5 text-sm shadow-card">
            {meta.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{label}</dt>
                <dd className="mt-1">{value || "[To be added]"}</dd>
              </div>
            ))}
          </dl>
          <div>
            <h2 className="font-display text-2xl font-medium">Description</h2>
            <Prose text={item.description} className="mt-3" />
            <h2 className="mt-8 font-display text-2xl font-medium">Historical significance</h2>
            <Prose text={item.significance} className="mt-3" />
            <p className="mt-8 text-sm text-muted">References: {item.references}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
