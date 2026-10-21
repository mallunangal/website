import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { getLiveState } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";
import { formatLongDate, youtubeIdFromUrl } from "@/lib/utils";

export const Route = createFileRoute("/live")({
  loader: () => getLiveState(),
  head: () => ({
    meta: [
      { title: `Live — ${SITE.name}` },
      { name: "description", content: "Live stream from Mallu Nangal when an event is marked as live." },
    ],
    links: [{ rel: "canonical", href: absUrl("/live") }],
  }),
  component: LivePage,
});

function LivePage() {
  const { live, upcoming } = Route.useLoaderData();
  const liveId = live ? youtubeIdFromUrl(live.youtubeUrl) : null;

  return (
    <main>
      <PageHero
        kicker="Live"
        title="Live from Mallu Nangal"
        lede="Administrators can switch a stream on or off without changing the website code."
        image="/images/gurdwara-exterior-hero.jpg"
      />
      <div className="mx-auto max-w-4xl px-5 py-12 md:px-8">
        {live ? (
          <section>
            <p className="inline-flex items-center gap-2 rounded-sm bg-live-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-live">
              <span className="size-2 animate-pulse rounded-full bg-live" />
              Live now
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium">{live.title}</h2>
            <p className="mt-2 text-muted">{live.description}</p>
            {live.location ? <p className="mt-1 text-sm text-muted">{live.location}</p> : null}
            {liveId ? (
              <div className="mt-6 aspect-video overflow-hidden rounded-xl bg-ink">
                <iframe
                  title={live.title}
                  src={`https://www.youtube-nocookie.com/embed/${liveId}`}
                  className="size-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <p className="mt-6 rounded-xl bg-surface p-6 text-muted">
                This event is marked live, but a YouTube address has not been entered yet.
              </p>
            )}
          </section>
        ) : (
          <section className="overflow-hidden rounded-xl bg-surface shadow-card">
            <img
              src="/images/gurdwara-interior.jpg"
              alt=""
              className="aspect-[21/9] w-full object-cover"
            />
            <div className="p-8">
              <h2 className="font-display text-3xl font-medium">The stream is quiet</h2>
              <p className="mt-3 max-w-xl text-muted">
                No live event currently. Check back during upcoming village events.
              </p>
            </div>
          </section>
        )}

        {upcoming.length > 0 ? (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-medium">Upcoming and previous</h2>
            <ul className="mt-4 divide-y divide-border">
              {upcoming.map((event) => (
                <li key={event.id} className="py-4">
                  <p className="font-display text-xl">{event.title}</p>
                  <p className="text-sm text-muted">
                    {event.eventDate ? formatLongDate(event.eventDate) : "Date to be announced"}
                    {event.location ? ` · ${event.location}` : ""}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{event.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  );
}
