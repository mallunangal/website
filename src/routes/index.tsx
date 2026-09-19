import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Radio } from "lucide-react";
import { DemoBadge } from "@/components/demo-badge";
import { GurmukhiName, PhulkariRule } from "@/components/layout/ornament";
import { SectionHeading } from "@/components/layout/page-hero";
import { getHomeData } from "@/lib/queries";
import { CENSUS, SITE } from "@/lib/site";
import { formatLongDate } from "@/lib/utils";

export const Route = createFileRoute("/")({
  loader: () => getHomeData(),
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
    ],
    links: [{ rel: "canonical", href: SITE.domain }],
  }),
  component: Home,
});

function Home() {
  const data = Route.useLoaderData();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Mallu Nangal",
    alternateName: ["Malu Nangal", SITE.gurmukhiName],
    description: SITE.description,
    url: SITE.domain,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mallu Nangal",
      addressRegion: "Punjab",
      postalCode: SITE.pin,
      addressCountry: "IN",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper">
        <img
          src="/images/hero-village.jpg"
          alt="Wheat fields meeting a cluster of village houses at late afternoon"
          className="absolute inset-0 size-full object-cover outline-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <GurmukhiName size="hero" className="text-paper/90" />
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-paper/75">
            Amritsar district · Punjab
          </p>
          <h1 className="mt-3 font-display text-5xl font-medium leading-[0.95] md:text-7xl lg:text-8xl">
            Mallu Nangal
          </h1>
          <p className="mt-5 max-w-xl font-display text-xl italic text-paper/85 md:text-2xl">
            {SITE.tagline}
          </p>
          <PhulkariRule className="mt-6 opacity-90" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/history"
              className="inline-flex h-12 items-center rounded-lg bg-madder px-6 text-sm font-medium text-paper transition-transform duration-150 active:scale-[0.96]"
            >
              Explore History
            </Link>
            <Link
              to="/library"
              className="inline-flex h-12 items-center rounded-lg bg-paper px-6 text-sm font-medium text-ink transition-transform duration-150 active:scale-[0.96]"
            >
              Digital Library
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-olive text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {CENSUS.facts.map((fact) => (
            <div key={fact.label} className="px-5 py-6 md:px-8">
              <p className="font-display text-3xl font-medium md:text-4xl">{fact.value}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/65">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-4 text-[11px] text-paper/55 md:px-8">
          {CENSUS.source}. Later counts will sit beside these figures when they are published.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeaturePhoto
            to="/history"
            image="/images/mustard-fields.jpg"
            title="Village History"
            text="A timeline built from published records — and from what residents still have to add."
          />
          <FeaturePhoto
            to="/library"
            image="/images/archive-table.jpg"
            title="Digital Library"
            text="Manuscripts, photographs and village papers, each with a catalogue number."
          />
          <FeaturePhoto
            to="/personalities"
            image="/images/courtyard.jpg"
            title="Famous Personalities"
            text="Biographies appear only with verified names, dates and sources."
          />
          <FeaturePhoto
            to="/hukamnama"
            image="/images/gurdwara.jpg"
            title="Today's Hukamnama"
            text="A reserved place for the day’s hukamnama once a sourced text is entered."
          />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-madder">
              Discover Mallu Nangal
            </p>
            <GurmukhiName size="md" className="mt-4 text-madder" />
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
              A village of Majha, kept in public memory
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
              Mallu Nangal — ਮੱਲੂ ਨੰਗਲ, also recorded as Malu Nangal in the Census of India 2011 — is a gram
              panchayat village in Amritsar district. This site is a museum, a library, and a
              community noticeboard: it publishes what can be cited, and leaves space for what
              families still hold.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-madder"
            >
              About the village <ArrowRight className="size-4" />
            </Link>
          </div>
          <img
            src="/images/village-lane.jpg"
            alt="A quiet brick village lane in afternoon light"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-card"
            loading="lazy"
          />
        </div>
      </section>

      {data.personalities.length > 0 ? (
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            kicker="Famous personalities"
            title="Lives bound to the village"
            lede="Names are published only when they can be sourced. A demo card shows the layout until biographies are ready."
            action={
              <Link to="/personalities" className="text-sm font-semibold text-madder">
                All personalities
              </Link>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.personalities.map((person) => (
              <Link
                key={person.slug}
                to="/personalities/$slug"
                params={{ slug: person.slug }}
                className="overflow-hidden rounded-xl bg-surface shadow-card transition-[box-shadow] duration-200 hover:shadow-card-hover"
              >
                <img
                  src={person.photograph}
                  alt=""
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-2xl font-medium">{person.name}</h3>
                    {person.isDemo ? <DemoBadge /> : null}
                  </div>
                  <p className="mt-1 text-sm text-muted">{person.profession}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="bg-paper-deep/60">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            kicker="Digital manuscript library"
            title="Selected manuscripts"
            lede="Catalogue cards for pothis and papers. Demo objects are labelled until originals are photographed."
            action={
              <Link to="/library" className="text-sm font-semibold text-madder">
                Open the library
              </Link>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.manuscripts.map((item) => (
              <Link
                key={item.itemCode}
                to="/library/$code"
                params={{ code: item.itemCode }}
                className="group overflow-hidden rounded-xl bg-surface shadow-card transition-[box-shadow,transform] duration-200 hover:shadow-card-hover"
              >
                <img
                  src={item.coverImage}
                  alt=""
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-xs tracking-wide text-muted">{item.itemCode}</p>
                    {item.isDemo ? <DemoBadge /> : null}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-medium">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/70">
              Today's Hukamnama
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium">
              {data.hukamnama ? formatLongDate(data.hukamnama.date) : "Awaiting a sourced text"}
            </h2>
            {data.hukamnama?.isDemo ? (
              <div className="mt-4">
                <DemoBadge className="bg-paper/15 text-paper/80" />
              </div>
            ) : null}
            <p className="mt-6 max-w-xl whitespace-pre-wrap text-lg leading-relaxed text-paper/85">
              {data.hukamnama?.translation ??
                "The latest hukamnama will appear here automatically when an administrator publishes a verified entry."}
            </p>
            <Link
              to="/hukamnama"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-paper"
            >
              Open the hukamnama archive <ArrowRight className="size-4" />
            </Link>
          </div>
          <img
            src="/images/gurdwara.jpg"
            alt="A village gurdwara courtyard with a Nishan Sahib"
            className="aspect-[4/3] w-full rounded-xl object-cover outline-none"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          kicker="Village news"
          title="Latest from the archive"
          action={
            <Link to="/news" className="text-sm font-semibold text-madder">
              All news
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {data.news.map((article, i) => (
            <Link
              key={article.slug}
              to="/news/$slug"
              params={{ slug: article.slug }}
              className={
                i === 0 && data.news.length > 1
                  ? "overflow-hidden rounded-xl bg-surface shadow-card md:row-span-2"
                  : "overflow-hidden rounded-xl bg-surface shadow-card"
              }
            >
              <img
                src={article.image}
                alt=""
                className={i === 0 ? "aspect-[16/10] w-full object-cover" : "aspect-[16/9] w-full object-cover"}
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {article.category} · {formatLongDate(article.publishedAt)}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium">{article.title}</h3>
                <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            kicker="Village gallery"
            title="Photographs"
            lede="Albums will fill with credited pictures of Mallu Nangal. Current images are layout studies."
            action={
              <Link to="/gallery" className="text-sm font-semibold text-madder">
                Browse gallery
              </Link>
            }
          />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {data.galleries.map((album, i) => (
              <Link
                key={album.slug}
                to="/gallery/$slug"
                params={{ slug: album.slug }}
                className={i === 0 ? "col-span-2 row-span-2" : ""}
              >
                <figure className="relative overflow-hidden rounded-lg">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="aspect-[4/3] h-full w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 p-3 text-sm text-paper">
                    {album.title}
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          kicker="Videos"
          title="Moving pictures"
          lede="Recordings will be embedded from YouTube so the archive does not store large video files."
          action={
            <Link to="/videos" className="text-sm font-semibold text-madder">
              Video archive
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-3">
          {data.videos.map((video) => (
            <Link
              key={video.id}
              to="/videos"
              className="overflow-hidden rounded-xl bg-surface shadow-card transition-[box-shadow] duration-200 hover:shadow-card-hover"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt=""
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-sm bg-ink/80 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-paper">
                  {video.category}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-medium">{video.title}</h3>
                  {video.isDemo ? <DemoBadge /> : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-paper-deep">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div className="flex-1">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-madder">
              <Radio className="size-4" /> Live from Mallu Nangal
            </p>
            {data.live ? (
              <>
                <h2 className="mt-3 font-display text-3xl font-medium">{data.live.title}</h2>
                <p className="mt-2 text-muted">{data.live.description}</p>
              </>
            ) : (
              <>
                <h2 className="mt-3 font-display text-3xl font-medium">The stream is quiet</h2>
                <p className="mt-2 max-w-xl text-muted">
                  No live event currently. Check back during upcoming village events.
                </p>
              </>
            )}
          </div>
          <Link
            to="/live"
            className="inline-flex h-12 items-center rounded-lg bg-ink px-6 text-sm font-medium text-paper"
          >
            Live page
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <img
          src="/images/phulkari.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-25 outline-none"
          loading="lazy"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/70">
              Contribute
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium">
              Old photographs, pothis, and family papers
            </h2>
            <p className="mt-2 max-w-xl text-paper/75">
              Nothing is published until it has been reviewed. Keep originals; this website is a
              catalogue, not the only home for manuscripts.
            </p>
          </div>
          <Link
            to="/contribute"
            className="inline-flex h-12 items-center rounded-lg bg-paper px-6 text-sm font-medium text-ink"
          >
            Offer material
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeaturePhoto({
  to,
  image,
  title,
  text,
}: {
  to: "/history" | "/library" | "/personalities" | "/hukamnama";
  image: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      to={to}
      className="group relative isolate overflow-hidden rounded-xl bg-ink text-paper shadow-card"
    >
      <img
        src={image}
        alt=""
        className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-2xl font-medium">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-paper/80">{text}</p>
      </div>
    </Link>
  );
}
