import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { DemoBadge } from "@/components/demo-badge";
import { PageHero } from "@/components/layout/page-hero";
import { getGalleries } from "@/lib/queries";
import { GALLERY_CATEGORIES, SITE, absUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery/")({
  loader: () => getGalleries(),
  head: () => ({
    meta: [
      { title: `Gallery — ${SITE.name}` },
      { name: "description", content: "Photograph albums of Mallu Nangal — village, history, fields, schools and festivals." },
    ],
    links: [{ rel: "canonical", href: absUrl("/gallery") }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const albums = Route.useLoaderData();
  const [category, setCategory] = useState("");
  const present = useMemo(
    () => GALLERY_CATEGORIES.filter((c) => albums.some((a) => a.category === c)),
    [albums],
  );
  const visible = category ? albums.filter((a) => a.category === category) : albums;

  return (
    <main>
      <PageHero
        kicker="Gallery"
        title="Village photographs"
        lede="Albums are grouped by subject. Captions will name people and places once prints are identified."
        image="/images/village-lane.jpg"
      />
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          <Chip active={category === ""} onClick={() => setCategory("")}>
            All albums
          </Chip>
          {present.map((item) => (
            <Chip key={item} active={category === item} onClick={() => setCategory(item)}>
              {item}
            </Chip>
          ))}
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((album) => (
            <Link
              key={album.slug}
              to="/gallery/$slug"
              params={{ slug: album.slug }}
              className="mb-4 block break-inside-avoid overflow-hidden rounded-xl bg-surface shadow-card"
            >
              <img src={album.coverImage} alt={album.title} className="w-full object-cover" loading="lazy" />
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{album.category}</p>
                  {album.isDemo ? <DemoBadge /> : null}
                </div>
                <h2 className="mt-1 font-display text-2xl font-medium">{album.title}</h2>
              </div>
            </Link>
          ))}
        </div>
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
