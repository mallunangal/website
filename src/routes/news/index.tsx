import { createFileRoute, Link } from "@tanstack/react-router";
import { DemoBadge } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { getNewsList } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";
import { formatLongDate } from "@/lib/utils";

export const Route = createFileRoute("/news/")({
  loader: () => getNewsList(),
  head: () => ({
    meta: [
      { title: `Village news — ${SITE.name}` },
      { name: "description", content: "News and notices from the Mallu Nangal digital archive." },
    ],
    links: [{ rel: "canonical", href: absUrl("/news") }],
  }),
  component: NewsPage,
});

function NewsPage() {
  const articles = Route.useLoaderData();
  return (
    <main>
      <PageHero
        kicker="News"
        title="Village news"
        lede="Notices from the archive and, later, from village life itself."
        image="/images/archive-table.jpg"
      />
      <div className="mx-auto max-w-4xl space-y-6 px-5 py-12 md:px-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to="/news/$slug"
            params={{ slug: article.slug }}
            className="grid overflow-hidden rounded-xl bg-surface shadow-card md:grid-cols-[16rem_minmax(0,1fr)]"
          >
            <img src={article.image} alt="" className="aspect-[16/10] h-full w-full object-cover" />
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {article.category} · {formatLongDate(article.publishedAt)}
                </p>
                {article.isDemo ? <DemoBadge /> : null}
              </div>
              <h2 className="mt-2 font-display text-2xl font-medium">{article.title}</h2>
              <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
