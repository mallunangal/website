import { createFileRoute } from "@tanstack/react-router";
import { GurmukhiName, PhulkariRule } from "@/components/layout/ornament";
import { PageHero } from "@/components/layout/page-hero";
import { Prose } from "@/components/prose";
import { getAboutSections } from "@/lib/queries";
import { ABOUT_IMAGES, CENSUS, SITE, absUrl } from "@/lib/site";

export const Route = createFileRoute("/about")({
  loader: () => getAboutSections(),
  head: () => ({
    meta: [
      { title: `About Mallu Nangal — ${SITE.name}` },
      {
        name: "description",
        content:
          "Location, census overview, education and agriculture of Mallu Nangal, Amritsar district, Punjab.",
      },
    ],
    links: [{ rel: "canonical", href: absUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const sections = Route.useLoaderData();

  return (
    <main>
      <PageHero
        kicker="About"
        title="About Mallu Nangal"
        lede="Punjabi: ਮੱਲੂ ਨੰਗਲ. What can be stated from public records is here. What still needs a village source is marked as such."
        image="/images/mustard-fields.jpg"
        showPunjabi
      />
      <section className="border-b border-border bg-olive text-paper">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
          <GurmukhiName className="text-paper/85" />
          <PhulkariRule className="mt-4 opacity-80" />
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {CENSUS.facts.map((fact) => (
              <div key={fact.label}>
                <p className="font-display text-3xl font-medium">{fact.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/65">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-paper/55">{CENSUS.source}</p>
        </div>
      </section>
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-[14rem_minmax(0,1fr)] md:px-8">
        <aside className="hidden md:block">
          <nav className="sticky top-24 space-y-2 text-sm">
            {sections.map((section) => (
              <a key={section.slug} href={`#${section.slug}`} className="block text-muted hover:text-ink">
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
        <div className="space-y-16">
          {sections.map((section) => {
            const image = ABOUT_IMAGES[section.slug];
            return (
              <article key={section.slug} id={section.slug} className="scroll-mt-24">
                <h2 className="font-display text-3xl font-medium">{section.title}</h2>
                {image ? (
                  <img
                    src={image}
                    alt=""
                    className="mt-5 aspect-[16/9] w-full rounded-xl object-cover shadow-card"
                    loading="lazy"
                  />
                ) : null}
                <Prose text={section.body} className="mt-5" />
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
