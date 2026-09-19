import { createFileRoute, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { DemoNotice } from "@/components/demo-badge";
import { Lightbox } from "@/components/lightbox";
import { PageHero } from "@/components/layout/page-hero";
import { getGallery } from "@/lib/queries";
import { SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/gallery/$slug")({
  loader: async ({ params }) => {
    const album = await getGallery({ data: { slug: params.slug } });
    if (!album) throw notFound();
    return album;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Gallery"} — ${SITE.name}` },
      { name: "description", content: loaderData?.description ?? SITE.description },
    ],
    links: [{ rel: "canonical", href: absUrl(`/gallery/${loaderData?.slug ?? ""}`) }],
  }),
  component: GalleryAlbumPage,
});

function GalleryAlbumPage() {
  const album = Route.useLoaderData();
  const [index, setIndex] = useState<number | null>(null);
  const items = useMemo(
    () => album.images.map((image) => ({ src: image.image, alt: image.caption || album.title, caption: image.caption })),
    [album],
  );

  return (
    <main>
      <PageHero kicker={album.category} title={album.title} lede={album.description} image={album.coverImage} compact />
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        {album.isDemo ? <DemoNotice /> : null}
        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {album.images.map((image, i) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setIndex(i)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg text-left"
            >
              <img src={image.image} alt={image.caption || album.title} className="w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      {index !== null ? (
        <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
      ) : null}
    </main>
  );
}
