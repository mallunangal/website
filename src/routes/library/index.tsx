import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { DemoBadge } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { getLibraryItems } from "@/lib/queries";
import { LIBRARY_CATEGORIES, SITE, absUrl } from "@/lib/site";

type LibrarySearch = {
  q?: string;
  category?: string;
  author?: string;
  year?: string;
  period?: string;
  language?: string;
  script?: string;
  keyword?: string;
};

export const Route = createFileRoute("/library/")({
  validateSearch: (search: Record<string, unknown>): LibrarySearch => ({
    q: typeof search.q === "string" ? search.q : undefined,
    category: typeof search.category === "string" ? search.category : undefined,
    author: typeof search.author === "string" ? search.author : undefined,
    year: typeof search.year === "string" ? search.year : undefined,
    period: typeof search.period === "string" ? search.period : undefined,
    language: typeof search.language === "string" ? search.language : undefined,
    script: typeof search.script === "string" ? search.script : undefined,
    keyword: typeof search.keyword === "string" ? search.keyword : undefined,
  }),
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => getLibraryItems({ data: deps }),
  head: () => ({
    meta: [
      { title: `Digital library — ${SITE.name}` },
      {
        name: "description",
        content: "Search manuscripts, documents, photographs and village records from Mallu Nangal.",
      },
    ],
    links: [{ rel: "canonical", href: absUrl("/library") }],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  const items = Route.useLoaderData();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/library/" });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    void navigate({
      search: {
        q: String(form.get("q") ?? ""),
        category: String(form.get("category") ?? ""),
        author: String(form.get("author") ?? ""),
        year: String(form.get("year") ?? ""),
        period: String(form.get("period") ?? ""),
        language: String(form.get("language") ?? ""),
        script: String(form.get("script") ?? ""),
        keyword: String(form.get("keyword") ?? ""),
      },
    });
  };

  return (
    <main>
      <PageHero
        kicker="Library"
        title="Digital library"
        lede="Manuscripts, historical documents, religious papers, old photographs, and village records — searchable once they are catalogued."
        image="/images/archive-table.jpg"
      />
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <form
          onSubmit={onSubmit}
          className="mb-10 grid gap-3 rounded-xl bg-surface p-4 shadow-card md:grid-cols-4"
        >
          <input
            name="q"
            defaultValue={search.q ?? ""}
            placeholder="Title"
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <input
            name="author"
            defaultValue={search.author ?? ""}
            placeholder="Author"
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <input
            name="year"
            defaultValue={search.year ?? ""}
            placeholder="Year"
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <input
            name="period"
            defaultValue={search.period ?? ""}
            placeholder="Period"
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <input
            name="language"
            defaultValue={search.language ?? ""}
            placeholder="Language"
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <input
            name="script"
            defaultValue={search.script ?? ""}
            placeholder="Script"
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <input
            name="keyword"
            defaultValue={search.keyword ?? ""}
            placeholder="Keyword"
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <select
            name="category"
            defaultValue={search.category ?? ""}
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          >
            <option value="">All categories</option>
            {LIBRARY_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="md:col-span-4">
            <Button type="submit">Search the library</Button>
          </div>
        </form>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.itemCode}
              to="/library/$code"
              params={{ code: item.itemCode }}
              className="overflow-hidden rounded-xl bg-surface shadow-card"
            >
              <img src={item.coverImage} alt="" className="aspect-[4/5] w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-xs text-muted">{item.itemCode}</p>
                  {item.isDemo ? <DemoBadge /> : null}
                </div>
                <h2 className="mt-2 font-display text-2xl font-medium">{item.title}</h2>
                <p className="mt-1 text-sm text-muted">
                  {item.category}
                  {item.author ? ` · ${item.author}` : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {items.length === 0 ? (
          <p className="text-muted">No catalogue records match those filters yet.</p>
        ) : null}
      </div>
    </main>
  );
}
