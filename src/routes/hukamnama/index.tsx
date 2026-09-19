import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { DemoBadge } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { Prose } from "@/components/prose";
import { Button } from "@/components/ui/button";
import { getHukamnamaList, getLatestHukamnama } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";
import { formatLongDate } from "@/lib/utils";

type HukamnamaSearch = { year?: string; month?: string; ang?: string };

export const Route = createFileRoute("/hukamnama/")({
  validateSearch: (search: Record<string, unknown>): HukamnamaSearch => ({
    year: typeof search.year === "string" ? search.year : undefined,
    month: typeof search.month === "string" ? search.month : undefined,
    ang: typeof search.ang === "string" ? search.ang : undefined,
  }),
  loaderDeps: ({ search }) => search,
  loader: async ({ deps }) => {
    const [latest, archive] = await Promise.all([
      getLatestHukamnama(),
      getHukamnamaList({ data: deps }),
    ]);
    return { latest, archive };
  },
  head: () => ({
    meta: [
      { title: `Hukamnama — ${SITE.name}` },
      {
        name: "description",
        content: "Today’s hukamnama and archive for Mallu Nangal. Texts appear only when sourced by an editor.",
      },
    ],
    links: [{ rel: "canonical", href: absUrl("/hukamnama") }],
  }),
  component: HukamnamaPage,
});

function HukamnamaPage() {
  const { latest, archive } = Route.useLoaderData();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/hukamnama/" });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    void navigate({
      search: {
        year: String(form.get("year") ?? ""),
        month: String(form.get("month") ?? ""),
        ang: String(form.get("ang") ?? ""),
      },
    });
  };

  return (
    <main>
      <PageHero
        kicker="Hukamnama"
        title="Today's Hukamnama"
        lede="This page never invents Gurbani. When a verified text and source are entered, they appear here automatically."
        image="/images/gurdwara.jpg"
      />
      <div className="mx-auto max-w-4xl px-5 py-12 md:px-8">
        {latest ? (
          <article className="rounded-xl bg-surface p-6 shadow-card md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-muted">{formatLongDate(latest.date)}</p>
              {latest.ang ? <p className="text-sm text-muted">Ang {latest.ang}</p> : null}
              {latest.isDemo ? <DemoBadge /> : null}
            </div>
            <h2 className="mt-3 font-display text-3xl font-medium">{latest.title}</h2>
            <Prose text={latest.punjabiText} className="mt-6" />
            <Prose text={latest.translation} className="mt-6" />
            <p className="mt-6 text-sm text-muted">Source: {latest.source}</p>
            <Link
              to="/hukamnama/$date"
              params={{ date: latest.date }}
              className="mt-4 inline-block text-sm font-semibold text-madder"
            >
              Permanent link for this date
            </Link>
          </article>
        ) : (
          <p className="text-muted">No hukamnama has been published yet.</p>
        )}

        <h2 className="mt-14 font-display text-3xl font-medium">Hukamnama archive</h2>
        <form onSubmit={onSubmit} className="mt-6 grid gap-3 md:grid-cols-4">
          <input
            name="year"
            defaultValue={search.year ?? ""}
            placeholder="Year"
            inputMode="numeric"
            className="h-11 rounded-md bg-surface px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <input
            name="month"
            defaultValue={search.month ?? ""}
            placeholder="Month (1–12)"
            inputMode="numeric"
            className="h-11 rounded-md bg-surface px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <input
            name="ang"
            defaultValue={search.ang ?? ""}
            placeholder="Ang"
            className="h-11 rounded-md bg-surface px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
          />
          <Button type="submit">Filter</Button>
        </form>
        <ul className="mt-8 divide-y divide-border">
          {archive.map((entry) => (
            <li key={entry.date} className="py-4">
              <Link to="/hukamnama/$date" params={{ date: entry.date }} className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-xl">{formatLongDate(entry.date)}</span>
                <span className="text-sm text-muted">{entry.title}</span>
                {entry.isDemo ? <DemoBadge /> : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
