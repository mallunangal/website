import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { DemoBadge } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { getVideos } from "@/lib/queries";
import { SITE, VIDEO_CATEGORIES, absUrl } from "@/lib/site";
import { cn, formatLongDate, youtubeIdFromUrl } from "@/lib/utils";

export const Route = createFileRoute("/videos")({
  loader: () => getVideos(),
  head: () => ({
    meta: [
      { title: `Videos — ${SITE.name}` },
      { name: "description", content: "YouTube video archive for Mallu Nangal events, interviews and documentaries." },
    ],
    links: [{ rel: "canonical", href: absUrl("/videos") }],
  }),
  component: VideosPage,
});

function VideosPage() {
  const videos = Route.useLoaderData();
  const [category, setCategory] = useState("");
  const present = useMemo(
    () => VIDEO_CATEGORIES.filter((c) => videos.some((v) => v.category === c)),
    [videos],
  );
  const visible = category ? videos.filter((v) => v.category === category) : videos;

  return (
    <main>
      <PageHero
        kicker="Videos"
        title="Video archive"
        lede="Large files are not stored on this website. When a recording is ready, it is published as a YouTube embed."
        image="/images/hero-village.jpg"
      />
      <div className="mx-auto max-w-5xl space-y-10 px-5 py-12 md:px-8">
        <div className="flex flex-wrap gap-2">
          <Chip active={category === ""} onClick={() => setCategory("")}>
            All
          </Chip>
          {present.map((item) => (
            <Chip key={item} active={category === item} onClick={() => setCategory(item)}>
              {item}
            </Chip>
          ))}
        </div>
        {visible.map((video) => {
          const id = youtubeIdFromUrl(video.youtubeUrl);
          return (
            <article key={video.id} className="overflow-hidden rounded-xl bg-surface shadow-card">
              {id ? (
                <div className="aspect-video bg-ink">
                  <iframe
                    title={video.title}
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    className="size-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative">
                  <img src={video.thumbnail} alt="" className="aspect-video w-full object-cover" loading="lazy" />
                  <p className="absolute inset-0 grid place-items-center bg-ink/45 text-sm font-medium text-paper">
                    YouTube link to be added
                  </p>
                </div>
              )}
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{video.category}</p>
                  {video.eventDate ? <p className="text-sm text-muted">{formatLongDate(video.eventDate)}</p> : null}
                  {video.duration ? <p className="text-sm text-muted">{video.duration}</p> : null}
                  {video.isDemo ? <DemoBadge /> : null}
                </div>
                <h2 className="mt-2 font-display text-2xl font-medium">{video.title}</h2>
                <p className="mt-2 text-sm text-ink-soft">{video.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 rounded-full px-4 text-sm font-medium transition-colors",
        active ? "bg-ink text-paper" : "bg-surface text-ink-soft shadow-[inset_0_0_0_1px_var(--color-border)]",
      )}
    >
      {children}
    </button>
  );
}
