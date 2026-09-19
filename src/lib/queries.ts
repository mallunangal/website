import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import { asBool, asIsoDate, parseJsonArray } from "@/lib/utils";
import type {
  AboutSection,
  ArchiveItem,
  GalleryAlbum,
  GalleryImage,
  HistoryArticle,
  HistoryImage,
  HomePayload,
  Hukamnama,
  LiveEvent,
  ManuscriptPage,
  NewsArticle,
  Personality,
  SearchResult,
  VideoItem,
} from "@/lib/types";

type AboutRow = { id: number; slug: string; title: string; body: string; sort_order: number };
type HistoryRow = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  period: string;
  period_order: number;
  approx_year: string;
  image: string;
  sources: string;
  author: string;
  published_at: unknown;
  updated_at: unknown;
  is_demo: unknown;
  images?: unknown;
};
type PersonalityRow = {
  id: number;
  slug: string;
  name: string;
  photograph: string;
  birth_date: string;
  death_date: string;
  profession: string;
  education: string;
  biography: string;
  achievements: string;
  contributions: string;
  connection: string;
  sources: string;
  is_demo: unknown;
  photos?: unknown;
};
type ArchiveRow = {
  id: number;
  item_code: string;
  title: string;
  author: string;
  year_label: string;
  period: string;
  language: string;
  script: string;
  material: string;
  page_count: number;
  category: string;
  keywords: string;
  description: string;
  significance: string;
  source_owner: string;
  cover_image: string;
  references_text: string;
  is_demo: unknown;
  pages?: unknown;
};
type HukamnamaRow = {
  id: number;
  date: unknown;
  ang: string;
  title: string;
  image: string;
  punjabi_text: string;
  translation: string;
  source: string;
  is_demo: unknown;
};
type GalleryRow = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  date_label: string;
  cover_image: string;
  is_demo: unknown;
  images?: unknown;
};
type VideoRow = {
  id: number;
  title: string;
  description: string;
  youtube_url: string;
  thumbnail: string;
  event_date: unknown;
  category: string;
  duration: string;
  is_demo: unknown;
};
type LiveRow = {
  id: number;
  title: string;
  description: string;
  event_date: unknown;
  location: string;
  youtube_url: string;
  thumbnail: string;
  is_live: unknown;
  start_time: string;
  end_time: string;
  is_demo: unknown;
};
type NewsRow = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  author: string;
  published_at: unknown;
  category: string;
  is_demo: unknown;
};

function mapHistory(row: HistoryRow, images: HistoryImage[] = []): HistoryArticle {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    body: row.body,
    period: row.period,
    periodOrder: Number(row.period_order),
    approxYear: row.approx_year,
    image: row.image,
    sources: row.sources,
    author: row.author,
    publishedAt: asIsoDate(row.published_at),
    updatedAt: asIsoDate(row.updated_at),
    isDemo: asBool(row.is_demo),
    images,
  };
}

function mapPersonality(
  row: PersonalityRow,
  photos: Personality["photos"] = [],
): Personality {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    photograph: row.photograph,
    birthDate: row.birth_date,
    deathDate: row.death_date,
    profession: row.profession,
    education: row.education,
    biography: row.biography,
    achievements: row.achievements,
    contributions: row.contributions,
    connection: row.connection,
    sources: row.sources,
    isDemo: asBool(row.is_demo),
    photos,
  };
}

function mapArchive(row: ArchiveRow, pages: ManuscriptPage[] = []): ArchiveItem {
  return {
    id: row.id,
    itemCode: row.item_code,
    title: row.title,
    author: row.author,
    yearLabel: row.year_label,
    period: row.period,
    language: row.language,
    script: row.script,
    material: row.material,
    pageCount: Number(row.page_count) || pages.length,
    category: row.category,
    keywords: row.keywords,
    description: row.description,
    significance: row.significance,
    sourceOwner: row.source_owner,
    coverImage: row.cover_image,
    references: row.references_text,
    isDemo: asBool(row.is_demo),
    pages,
  };
}

function mapHukamnama(row: HukamnamaRow): Hukamnama {
  return {
    id: row.id,
    date: asIsoDate(row.date),
    ang: row.ang,
    title: row.title,
    image: row.image,
    punjabiText: row.punjabi_text,
    translation: row.translation,
    source: row.source,
    isDemo: asBool(row.is_demo),
  };
}

function mapGallery(row: GalleryRow, images: GalleryImage[] = []): GalleryAlbum {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    category: row.category,
    dateLabel: row.date_label,
    coverImage: row.cover_image,
    isDemo: asBool(row.is_demo),
    images,
  };
}

function mapVideo(row: VideoRow): VideoItem {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    youtubeUrl: row.youtube_url,
    thumbnail: row.thumbnail,
    eventDate: asIsoDate(row.event_date),
    category: row.category,
    duration: row.duration,
    isDemo: asBool(row.is_demo),
  };
}

function mapLive(row: LiveRow): LiveEvent {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    eventDate: asIsoDate(row.event_date),
    location: row.location,
    youtubeUrl: row.youtube_url,
    thumbnail: row.thumbnail,
    isLive: asBool(row.is_live),
    startTime: row.start_time,
    endTime: row.end_time,
    isDemo: asBool(row.is_demo),
  };
}

function mapNews(row: NewsRow): NewsArticle {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    body: row.body,
    image: row.image,
    author: row.author,
    publishedAt: asIsoDate(row.published_at),
    category: row.category,
    isDemo: asBool(row.is_demo),
  };
}

function mapPages(value: unknown): ManuscriptPage[] {
  return parseJsonArray<{
    id: number;
    page_number: number;
    image: string;
    caption: string;
    description: string;
  }>(value)
    .filter((p) => p && p.image)
    .map((p) => ({
      id: p.id,
      pageNumber: Number(p.page_number),
      image: p.image,
      caption: p.caption ?? "",
      description: p.description ?? "",
    }))
    .sort((a, b) => a.pageNumber - b.pageNumber);
}

function mapGalleryImages(value: unknown): GalleryImage[] {
  return parseJsonArray<{
    id: number;
    image: string;
    caption: string;
    date_label: string;
    sort_order: number;
  }>(value)
    .filter((p) => p && p.image)
    .map((p) => ({
      id: p.id,
      image: p.image,
      caption: p.caption ?? "",
      dateLabel: p.date_label ?? "",
      sortOrder: Number(p.sort_order) || 0,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export const getAboutSections = createServerFn({ method: "GET" }).handler(
  async (): Promise<AboutSection[]> => {
    const sql = await getSql();
    const rows = await sql<AboutRow>`
      select id, slug, title, body, sort_order
      from about_sections
      order by sort_order asc, id asc
    `;
    return rows.map((r) => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      body: r.body,
      sortOrder: Number(r.sort_order),
    }));
  },
);

export const getHistoryList = createServerFn({ method: "GET" }).handler(
  async (): Promise<HistoryArticle[]> => {
    const sql = await getSql();
    const rows = await sql<HistoryRow>`
      select id, slug, title, excerpt, body, period, period_order, approx_year,
             image, sources, author, published_at, updated_at, is_demo
      from history_articles
      where published = true
      order by period_order asc, published_at asc
    `;
    return rows.map((r) => mapHistory(r));
  },
);

export const getHistoryArticle = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<HistoryArticle | null> => {
    const sql = await getSql();
    const rows = await sql<HistoryRow>`
      select id, slug, title, excerpt, body, period, period_order, approx_year,
             image, sources, author, published_at, updated_at, is_demo
      from history_articles
      where published = true and slug = ${data.slug}
      limit 1
    `;
    const row = rows[0];
    if (!row) return null;
    const images = await sql<{ id: number; image: string; caption: string; sort_order: number }>`
      select id, image, caption, sort_order from history_images
      where article_id = ${row.id} order by sort_order asc, id asc
    `;
    return mapHistory(
      row,
      images.map((i) => ({
        id: i.id,
        image: i.image,
        caption: i.caption,
        sortOrder: Number(i.sort_order),
      })),
    );
  });

export const getPersonalities = createServerFn({ method: "GET" }).handler(
  async (): Promise<Personality[]> => {
    const sql = await getSql();
    const rows = await sql<PersonalityRow>`
      select id, slug, name, photograph, birth_date, death_date, profession, education,
             biography, achievements, contributions, connection, sources, is_demo
      from personalities where published = true order by name asc
    `;
    return rows.map((r) => mapPersonality(r));
  },
);

export const getPersonality = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<Personality | null> => {
    const sql = await getSql();
    const rows = await sql<PersonalityRow>`
      select id, slug, name, photograph, birth_date, death_date, profession, education,
             biography, achievements, contributions, connection, sources, is_demo
      from personalities where published = true and slug = ${data.slug} limit 1
    `;
    const row = rows[0];
    if (!row) return null;
    const photos = await sql<{ id: number; image: string; caption: string }>`
      select id, image, caption from personality_photos
      where personality_id = ${row.id} order by sort_order asc, id asc
    `;
    return mapPersonality(row, photos);
  });

export const getLibraryItems = createServerFn({ method: "GET" })
  .validator((data: {
    q?: string;
    category?: string;
    language?: string;
    period?: string;
    script?: string;
    year?: string;
    author?: string;
    keyword?: string;
  }) => data)
  .handler(async ({ data }): Promise<ArchiveItem[]> => {
    const sql = await getSql();
    const q = (data.q ?? "").trim();
    const like = q ? `%${q}%` : "%";
    const rows = await sql<ArchiveRow>`
      select id, item_code, title, author, year_label, period, language, script, material,
             page_count, category, keywords, description, significance, source_owner,
             cover_image, references_text, is_demo
      from archive_items
      where published = true
        and title ilike ${like}
        and (${data.category ?? ""} = '' or category = ${data.category ?? ""})
        and (${data.language ?? ""} = '' or language ilike ${"%" + (data.language ?? "") + "%"})
        and (${data.period ?? ""} = '' or period ilike ${"%" + (data.period ?? "") + "%"})
        and (${data.script ?? ""} = '' or script ilike ${"%" + (data.script ?? "") + "%"})
        and (${data.year ?? ""} = '' or year_label ilike ${"%" + (data.year ?? "") + "%"})
        and (${data.author ?? ""} = '' or author ilike ${"%" + (data.author ?? "") + "%"})
        and (${data.keyword ?? ""} = '' or keywords ilike ${"%" + (data.keyword ?? "") + "%"})
      order by item_code asc
    `;
    return rows.map((r) => mapArchive(r));
  });

export const getArchiveItem = createServerFn({ method: "GET" })
  .validator((data: { code: string }) => data)
  .handler(async ({ data }): Promise<ArchiveItem | null> => {
    const sql = await getSql();
    const rows = await sql<ArchiveRow>`
      select id, item_code, title, author, year_label, period, language, script, material,
             page_count, category, keywords, description, significance, source_owner,
             cover_image, references_text, is_demo
      from archive_items where published = true and item_code = ${data.code} limit 1
    `;
    const row = rows[0];
    if (!row) return null;
    const pages = await sql<{
      id: number;
      page_number: number;
      image: string;
      caption: string;
      description: string;
    }>`
      select id, page_number, image, caption, description
      from manuscript_pages where item_id = ${row.id} order by page_number asc
    `;
    return mapArchive(
      row,
      pages.map((p) => ({
        id: p.id,
        pageNumber: Number(p.page_number),
        image: p.image,
        caption: p.caption,
        description: p.description,
      })),
    );
  });

export const getLatestHukamnama = createServerFn({ method: "GET" }).handler(
  async (): Promise<Hukamnama | null> => {
    const sql = await getSql();
    const rows = await sql<HukamnamaRow>`
      select id, date, ang, title, image, punjabi_text, translation, source, is_demo
      from hukamnamas where published = true order by date desc limit 1
    `;
    return rows[0] ? mapHukamnama(rows[0]) : null;
  },
);

export const getHukamnamaList = createServerFn({ method: "GET" })
  .validator((data: { year?: string; month?: string; ang?: string }) => data)
  .handler(async ({ data }): Promise<Hukamnama[]> => {
    const sql = await getSql();
    const year = data.year ? Number(data.year) : 0;
    const month = data.month ? Number(data.month) : 0;
    const ang = (data.ang ?? "").trim();
    const rows = await sql<HukamnamaRow>`
      select id, date, ang, title, image, punjabi_text, translation, source, is_demo
      from hukamnamas
      where published = true
        and (${year} = 0 or extract(year from date) = ${year})
        and (${month} = 0 or extract(month from date) = ${month})
        and (${ang} = '' or ang ilike ${"%" + ang + "%"})
      order by date desc
    `;
    return rows.map(mapHukamnama);
  });

export const getHukamnamaByDate = createServerFn({ method: "GET" })
  .validator((data: { date: string }) => data)
  .handler(async ({ data }): Promise<Hukamnama | null> => {
    const sql = await getSql();
    const rows = await sql<HukamnamaRow>`
      select id, date, ang, title, image, punjabi_text, translation, source, is_demo
      from hukamnamas where published = true and date = ${data.date}::date limit 1
    `;
    return rows[0] ? mapHukamnama(rows[0]) : null;
  });

export const getGalleries = createServerFn({ method: "GET" }).handler(
  async (): Promise<GalleryAlbum[]> => {
    const sql = await getSql();
    const rows = await sql<GalleryRow>`
      select g.id, g.slug, g.title, g.description, g.category, g.date_label, g.cover_image, g.is_demo,
        coalesce(json_agg(
          json_build_object(
            'id', i.id, 'image', i.image, 'caption', i.caption,
            'date_label', i.date_label, 'sort_order', i.sort_order
          ) order by i.sort_order
        ) filter (where i.id is not null), '[]') as images
      from galleries g
      left join gallery_images i on i.gallery_id = g.id
      where g.published = true
      group by g.id
      order by g.id asc
    `;
    return rows.map((r) => mapGallery(r, mapGalleryImages(r.images)));
  },
);

export const getGallery = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<GalleryAlbum | null> => {
    const sql = await getSql();
    const rows = await sql<GalleryRow>`
      select id, slug, title, description, category, date_label, cover_image, is_demo
      from galleries where published = true and slug = ${data.slug} limit 1
    `;
    const row = rows[0];
    if (!row) return null;
    const images = await sql<{
      id: number;
      image: string;
      caption: string;
      date_label: string;
      sort_order: number;
    }>`
      select id, image, caption, date_label, sort_order
      from gallery_images where gallery_id = ${row.id}
      order by sort_order asc, id asc
    `;
    return mapGallery(
      row,
      images.map((i) => ({
        id: i.id,
        image: i.image,
        caption: i.caption,
        dateLabel: i.date_label,
        sortOrder: Number(i.sort_order),
      })),
    );
  });

export const getVideos = createServerFn({ method: "GET" }).handler(
  async (): Promise<VideoItem[]> => {
    const sql = await getSql();
    const rows = await sql<VideoRow>`
      select id, title, description, youtube_url, thumbnail, event_date, category, duration, is_demo
      from videos where published = true order by id desc
    `;
    return rows.map(mapVideo);
  },
);

export const getLiveState = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ live: LiveEvent | null; upcoming: LiveEvent[] }> => {
    const sql = await getSql();
    const rows = await sql<LiveRow>`
      select id, title, description, event_date, location, youtube_url, thumbnail,
             is_live, start_time, end_time, is_demo
      from live_events order by is_live desc, event_date desc nulls last, id desc
    `;
    const mapped = rows.map(mapLive);
    return {
      live: mapped.find((e) => e.isLive) ?? null,
      upcoming: mapped.filter((e) => !e.isLive),
    };
  },
);

export const getNewsList = createServerFn({ method: "GET" }).handler(
  async (): Promise<NewsArticle[]> => {
    const sql = await getSql();
    const rows = await sql<NewsRow>`
      select id, slug, title, excerpt, body, image, author, published_at, category, is_demo
      from news where published = true order by published_at desc, id desc
    `;
    return rows.map(mapNews);
  },
);

export const getNewsArticle = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<NewsArticle | null> => {
    const sql = await getSql();
    const rows = await sql<NewsRow>`
      select id, slug, title, excerpt, body, image, author, published_at, category, is_demo
      from news where published = true and slug = ${data.slug} limit 1
    `;
    return rows[0] ? mapNews(rows[0]) : null;
  });

export const searchArchive = createServerFn({ method: "GET" })
  .validator((data: { q: string }) => data)
  .handler(async ({ data }): Promise<SearchResult[]> => {
    const q = data.q.trim();
    if (q.length < 2) return [];
    const like = `%${q}%`;
    const sql = await getSql();
    const history = await sql<{ slug: string; title: string; excerpt: string }>`
      select slug, title, excerpt from history_articles
      where published = true and (title ilike ${like} or excerpt ilike ${like} or body ilike ${like} or period ilike ${like})
    `;
    const people = await sql<{ slug: string; name: string; profession: string }>`
      select slug, name, profession from personalities
      where published = true and (name ilike ${like} or profession ilike ${like} or biography ilike ${like})
    `;
    const books = await sql<{ item_code: string; title: string; description: string }>`
      select item_code, title, description from archive_items
      where published = true and (
        title ilike ${like} or author ilike ${like} or item_code ilike ${like}
        or keywords ilike ${like} or description ilike ${like}
      )
    `;
    const hukam = await sql<{ date: unknown; title: string; translation: string }>`
      select date, title, translation from hukamnamas
      where published = true and (title ilike ${like} or translation ilike ${like} or ang ilike ${like})
    `;
    const news = await sql<{ slug: string; title: string; excerpt: string }>`
      select slug, title, excerpt from news
      where published = true and (title ilike ${like} or excerpt ilike ${like} or body ilike ${like})
    `;
    const videos = await sql<{ id: number; title: string; description: string }>`
      select id, title, description from videos
      where published = true and (title ilike ${like} or description ilike ${like} or category ilike ${like})
    `;
    const results: SearchResult[] = [
      ...history.map((r) => ({
        kind: "history" as const,
        id: r.slug,
        title: r.title,
        summary: r.excerpt,
        href: `/history/${r.slug}`,
      })),
      ...people.map((r) => ({
        kind: "personalities" as const,
        id: r.slug,
        title: r.name,
        summary: r.profession,
        href: `/personalities/${r.slug}`,
      })),
      ...books.map((r) => ({
        kind: "manuscripts" as const,
        id: r.item_code,
        title: r.title,
        summary: r.description.slice(0, 180),
        href: `/library/${r.item_code}`,
      })),
      ...hukam.map((r) => ({
        kind: "hukamnama" as const,
        id: asIsoDate(r.date),
        title: r.title,
        summary: r.translation.slice(0, 180),
        href: `/hukamnama/${asIsoDate(r.date)}`,
      })),
      ...news.map((r) => ({
        kind: "news" as const,
        id: r.slug,
        title: r.title,
        summary: r.excerpt,
        href: `/news/${r.slug}`,
      })),
      ...videos.map((r) => ({
        kind: "videos" as const,
        id: String(r.id),
        title: r.title,
        summary: r.description.slice(0, 180),
        href: "/videos",
      })),
    ];
    return results;
  });

export const getHomeData = createServerFn({ method: "GET" }).handler(
  async (): Promise<HomePayload> => {
    const sql = await getSql();
    const [hukamRows, newsRows, archiveRows, galleryRows, videoRows, liveRows, historyRows, peopleRows] =
      await Promise.all([
        sql<HukamnamaRow>`
          select id, date, ang, title, image, punjabi_text, translation, source, is_demo
          from hukamnamas where published = true order by date desc limit 1
        `,
        sql<NewsRow>`
          select id, slug, title, excerpt, body, image, author, published_at, category, is_demo
          from news where published = true order by published_at desc limit 3
        `,
        sql<ArchiveRow>`
          select id, item_code, title, author, year_label, period, language, script, material,
                 page_count, category, keywords, description, significance, source_owner,
                 cover_image, references_text, is_demo
          from archive_items where published = true and category = 'Manuscripts'
          order by item_code asc limit 3
        `,
        sql<GalleryRow>`
          select id, slug, title, description, category, date_label, cover_image, is_demo
          from galleries where published = true order by id asc limit 8
        `,
        sql<VideoRow>`
          select id, title, description, youtube_url, thumbnail, event_date, category, duration, is_demo
          from videos where published = true order by id desc limit 3
        `,
        sql<LiveRow>`
          select id, title, description, event_date, location, youtube_url, thumbnail,
                 is_live, start_time, end_time, is_demo
          from live_events where is_live = true order by id desc limit 1
        `,
        sql<HistoryRow>`
          select id, slug, title, excerpt, body, period, period_order, approx_year,
                 image, sources, author, published_at, updated_at, is_demo
          from history_articles where published = true order by period_order asc
        `,
        sql<PersonalityRow>`
          select id, slug, name, photograph, birth_date, death_date, profession, education,
                 biography, achievements, contributions, connection, sources, is_demo
          from personalities where published = true order by name asc limit 3
        `,
      ]);
    return {
      hukamnama: hukamRows[0] ? mapHukamnama(hukamRows[0]) : null,
      news: newsRows.map(mapNews),
      manuscripts: archiveRows.map((r) => mapArchive(r)),
      galleries: galleryRows.map((r) => mapGallery(r)),
      videos: videoRows.map(mapVideo),
      live: liveRows[0] ? mapLive(liveRows[0]) : null,
      history: historyRows.map((r) => mapHistory(r)),
      personalities: peopleRows.map((r) => mapPersonality(r)),
    };
  },
);
