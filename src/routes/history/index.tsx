import { createFileRoute, Link } from "@tanstack/react-router";
import { DemoBadge } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { getHistoryList } from "@/lib/queries";
import { HISTORY_PERIODS, SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/history/")({
  loader: () => getHistoryList(),
  head: () => ({
    meta: [
      { title: `History — ${SITE.name}` },
      {
        name: "description",
        content: "Historical timeline of Mallu Nangal, built from database records and cited public sources.",
      },
    ],
    links: [{ rel: "canonical", href: absUrl("/history") }],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  const articles = Route.useLoaderData();
  const byPeriod = HISTORY_PERIODS.map((period) => ({
    period,
    items: articles.filter((a) => a.period === period),
  }));

  return (
    <main>
      <PageHero
        kicker="History"
        title="A timeline of the village"
        lede="Each node is a record in the archive. Empty centuries stay empty until a source arrives."
        image="/images/mustard-fields.jpg"
      />
      <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
        <ol className="relative space-y-12 border-l border-bronze/60 pl-8 md:pl-12">
          {byPeriod.map((group) => (
            <li key={group.period} className="relative">
              <span className="absolute -left-[37px] top-1 size-3 rounded-full bg-madder md:-left-[53px]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-madder">
                {group.period}
              </p>
              {group.items.length === 0 ? (
                <p className="mt-4 rounded-xl border border-dashed border-border bg-surface/60 p-5 text-sm text-muted">
                  Awaiting a documented source for this period. Nothing is invented to fill the gap.
                </p>
              ) : (
                <div className="mt-4 grid gap-6">
                  {group.items.map((article) => (
                    <Link
                      key={article.slug}
                      to="/history/$slug"
                      params={{ slug: article.slug }}
                      className="grid overflow-hidden rounded-xl bg-surface shadow-card transition-[box-shadow] duration-200 hover:shadow-card-hover md:grid-cols-[16rem_minmax(0,1fr)]"
                    >
                      <img
                        src={article.image}
                        alt=""
                        className="aspect-[16/10] h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="p-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-xs uppercase tracking-[0.16em] text-muted">{article.approxYear}</p>
                          {article.isDemo ? <DemoBadge /> : null}
                        </div>
                        <h2 className="mt-2 font-display text-2xl font-medium">{article.title}</h2>
                        <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
