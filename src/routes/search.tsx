import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { searchArchive } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";
import type { SearchResult } from "@/lib/types";

const LABELS: Record<SearchResult["kind"], string> = {
  history: "History",
  personalities: "Personalities",
  manuscripts: "Library",
  hukamnama: "Hukamnama",
  news: "News",
  videos: "Videos",
};

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): { q?: string } =>
    typeof search.q === "string" && search.q.length > 0 ? { q: search.q } : {},
  loaderDeps: ({ search }) => ({ q: search.q }),
  loader: async ({ deps }) => {
    if (!deps.q?.trim()) return [] as SearchResult[];
    return searchArchive({ data: { q: deps.q } });
  },
  head: () => ({
    meta: [
      { title: `Search — ${SITE.name}` },
      { name: "description", content: "Search history, people, manuscripts, hukamnama, news and videos." },
    ],
    links: [{ rel: "canonical", href: absUrl("/search") }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const results = Route.useLoaderData();
  const { q } = Route.useSearch();
  const navigate = useNavigate({ from: "/search" });
  const groups = (Object.keys(LABELS) as SearchResult["kind"][]).map((kind) => ({
    kind,
    items: results.filter((r) => r.kind === kind),
  })).filter((g) => g.items.length > 0);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = String(new FormData(event.currentTarget).get("q") ?? "");
    void navigate({ search: { q: value } });
  };

  return (
    <main>
      <PageHero kicker="Search" title="Search the archive" compact />
      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            name="q"
            defaultValue={q ?? ""}
            placeholder="Try census, school, manuscript…"
            className="h-12 flex-1 rounded-md bg-surface px-4 shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <Button type="submit" size="lg">
            Search
          </Button>
        </form>
        {!q ? (
          <p className="mt-8 text-muted">Enter at least two characters.</p>
        ) : groups.length === 0 ? (
          <p className="mt-8 text-muted">No published records match “{q}”.</p>
        ) : (
          <div className="mt-10 space-y-10">
            {groups.map((group) => (
              <section key={group.kind}>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-madder">
                  {LABELS[group.kind]}
                </h2>
                <ul className="mt-3 space-y-3">
                  {group.items.map((item) => (
                    <li key={`${item.kind}-${item.id}`}>
                      <Link to={item.href as "/"} className="block rounded-lg bg-surface p-4 shadow-card">
                        <p className="font-display text-xl">{item.title}</p>
                        <p className="mt-1 line-clamp-2 text-sm text-muted">{item.summary}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
