import { createFileRoute, notFound } from "@tanstack/react-router";
import { DemoNotice } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { Prose } from "@/components/prose";
import { getHistoryArticle } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";
import { formatLongDate } from "@/lib/utils";

export const Route = createFileRoute("/history/$slug")({
  loader: async ({ params }) => {
    const article = await getHistoryArticle({ data: { slug: params.slug } });
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "History"} — ${SITE.name}` },
      { name: "description", content: loaderData?.excerpt ?? SITE.description },
    ],
    links: [{ rel: "canonical", href: absUrl(`/history/${loaderData?.slug ?? ""}`) }],
  }),
  component: HistoryDetail,
});

function HistoryDetail() {
  const article = Route.useLoaderData();
  return (
    <main>
      <PageHero
        kicker={article.period}
        title={article.title}
        lede={article.excerpt}
        image={article.image}
        compact
      />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        {article.isDemo ? <DemoNotice /> : null}
        <p className="mt-4 text-sm text-muted">
          {article.author} · {formatLongDate(article.publishedAt)}
          {article.approxYear ? ` · ${article.approxYear}` : ""}
        </p>
        <Prose text={article.body} className="mt-8" />
        {article.images.length > 0 ? (
          <div className="mt-10 grid gap-4">
            {article.images.map((image) => (
              <figure key={image.id}>
                <img src={image.image} alt={image.caption} className="w-full rounded-xl object-cover" />
                {image.caption ? (
                  <figcaption className="mt-2 text-sm text-muted">{image.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        ) : null}
        {article.sources ? (
          <aside className="mt-12 border-t border-border pt-6">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Sources</h2>
            <p className="mt-2 text-sm text-ink-soft">{article.sources}</p>
          </aside>
        ) : null}
      </article>
    </main>
  );
}
