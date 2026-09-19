import { createFileRoute, notFound } from "@tanstack/react-router";
import { DemoNotice } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { Prose } from "@/components/prose";
import { getNewsArticle } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";
import { formatLongDate } from "@/lib/utils";

export const Route = createFileRoute("/news/$slug")({
  loader: async ({ params }) => {
    const article = await getNewsArticle({ data: { slug: params.slug } });
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "News"} — ${SITE.name}` },
      { name: "description", content: loaderData?.excerpt ?? SITE.description },
    ],
    links: [{ rel: "canonical", href: absUrl(`/news/${loaderData?.slug ?? ""}`) }],
  }),
  component: NewsDetail,
});

function NewsDetail() {
  const article = Route.useLoaderData();
  return (
    <main>
      <PageHero kicker={article.category} title={article.title} lede={article.excerpt} image={article.image} compact />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        {article.isDemo ? <DemoNotice /> : null}
        <p className="mt-4 text-sm text-muted">
          {article.author} · {formatLongDate(article.publishedAt)}
        </p>
        <Prose text={article.body} className="mt-8" />
      </article>
    </main>
  );
}
