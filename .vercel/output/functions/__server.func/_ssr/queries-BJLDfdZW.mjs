import { a as parseJsonArray, n as asIsoDate, t as asBool } from "./utils-DCrcS2-8.mjs";
import { t as createServerFn } from "./ssr.mjs";
import { n as getSql, t as createServerRpc } from "./db-Ptz-QMt6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/queries-BJLDfdZW.js
function mapHistory(row, images = []) {
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
		images
	};
}
function mapPersonality(row, photos = []) {
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
		photos
	};
}
function mapArchive(row, pages = []) {
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
		pages
	};
}
function mapHukamnama(row) {
	return {
		id: row.id,
		date: asIsoDate(row.date),
		ang: row.ang,
		title: row.title,
		image: row.image,
		punjabiText: row.punjabi_text,
		translation: row.translation,
		source: row.source,
		isDemo: asBool(row.is_demo)
	};
}
function mapGallery(row, images = []) {
	return {
		id: row.id,
		slug: row.slug,
		title: row.title,
		description: row.description,
		category: row.category,
		dateLabel: row.date_label,
		coverImage: row.cover_image,
		isDemo: asBool(row.is_demo),
		images
	};
}
function mapVideo(row) {
	return {
		id: row.id,
		title: row.title,
		description: row.description,
		youtubeUrl: row.youtube_url,
		thumbnail: row.thumbnail,
		eventDate: asIsoDate(row.event_date),
		category: row.category,
		duration: row.duration,
		isDemo: asBool(row.is_demo)
	};
}
function mapLive(row) {
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
		isDemo: asBool(row.is_demo)
	};
}
function mapNews(row) {
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
		isDemo: asBool(row.is_demo)
	};
}
function mapGalleryImages(value) {
	return parseJsonArray(value).filter((p) => p && p.image).map((p) => ({
		id: p.id,
		image: p.image,
		caption: p.caption ?? "",
		dateLabel: p.date_label ?? "",
		sortOrder: Number(p.sort_order) || 0
	})).sort((a, b) => a.sortOrder - b.sortOrder);
}
var getAboutSections_createServerFn_handler = createServerRpc({
	id: "4f20f75f2080aa3475a788b89f02594e4877b2f25caaae71be5b48f82bf362a6",
	name: "getAboutSections",
	filename: "src/lib/queries.ts"
}, (opts) => getAboutSections.__executeServer(opts));
var getAboutSections = createServerFn({ method: "GET" }).handler(getAboutSections_createServerFn_handler, async () => {
	return (await (await getSql())`
      select id, slug, title, body, sort_order
      from about_sections
      order by sort_order asc, id asc
    `).map((r) => ({
		id: r.id,
		slug: r.slug,
		title: r.title,
		body: r.body,
		sortOrder: Number(r.sort_order)
	}));
});
var getHistoryList_createServerFn_handler = createServerRpc({
	id: "3f0566ec0cdf936c205a2d3e1c5fd3029cd89fee397eb6efe3a7c5335aa13c55",
	name: "getHistoryList",
	filename: "src/lib/queries.ts"
}, (opts) => getHistoryList.__executeServer(opts));
var getHistoryList = createServerFn({ method: "GET" }).handler(getHistoryList_createServerFn_handler, async () => {
	return (await (await getSql())`
      select id, slug, title, excerpt, body, period, period_order, approx_year,
             image, sources, author, published_at, updated_at, is_demo
      from history_articles
      where published = true
      order by period_order asc, published_at asc
    `).map((r) => mapHistory(r));
});
var getHistoryArticle_createServerFn_handler = createServerRpc({
	id: "6e8fba393a33a86cd94bcaf3344524583f892c9edebd3af3982bbe8a0adb3470",
	name: "getHistoryArticle",
	filename: "src/lib/queries.ts"
}, (opts) => getHistoryArticle.__executeServer(opts));
var getHistoryArticle = createServerFn({ method: "GET" }).validator((data) => data).handler(getHistoryArticle_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	const row = (await sql`
      select id, slug, title, excerpt, body, period, period_order, approx_year,
             image, sources, author, published_at, updated_at, is_demo
      from history_articles
      where published = true and slug = ${data.slug}
      limit 1
    `)[0];
	if (!row) return null;
	return mapHistory(row, (await sql`
      select id, image, caption, sort_order from history_images
      where article_id = ${row.id} order by sort_order asc, id asc
    `).map((i) => ({
		id: i.id,
		image: i.image,
		caption: i.caption,
		sortOrder: Number(i.sort_order)
	})));
});
var getPersonalities_createServerFn_handler = createServerRpc({
	id: "2307c100835d2ac75c133b8fecd93c4114dd81a64a3584c96cfba09d61509a4b",
	name: "getPersonalities",
	filename: "src/lib/queries.ts"
}, (opts) => getPersonalities.__executeServer(opts));
var getPersonalities = createServerFn({ method: "GET" }).handler(getPersonalities_createServerFn_handler, async () => {
	return (await (await getSql())`
      select id, slug, name, photograph, birth_date, death_date, profession, education,
             biography, achievements, contributions, connection, sources, is_demo
      from personalities where published = true order by name asc
    `).map((r) => mapPersonality(r));
});
var getPersonality_createServerFn_handler = createServerRpc({
	id: "d625285c62cab378b4fff420c3999af8ec43a22a805602ab39402b0c822eb309",
	name: "getPersonality",
	filename: "src/lib/queries.ts"
}, (opts) => getPersonality.__executeServer(opts));
var getPersonality = createServerFn({ method: "GET" }).validator((data) => data).handler(getPersonality_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	const row = (await sql`
      select id, slug, name, photograph, birth_date, death_date, profession, education,
             biography, achievements, contributions, connection, sources, is_demo
      from personalities where published = true and slug = ${data.slug} limit 1
    `)[0];
	if (!row) return null;
	return mapPersonality(row, await sql`
      select id, image, caption from personality_photos
      where personality_id = ${row.id} order by sort_order asc, id asc
    `);
});
var getLibraryItems_createServerFn_handler = createServerRpc({
	id: "b236205d3fbbac94c6cbfd36bf48d679681bfa4802bf8f8b295e0833a39c8e56",
	name: "getLibraryItems",
	filename: "src/lib/queries.ts"
}, (opts) => getLibraryItems.__executeServer(opts));
var getLibraryItems = createServerFn({ method: "GET" }).validator((data) => data).handler(getLibraryItems_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	const q = (data.q ?? "").trim();
	return (await sql`
      select id, item_code, title, author, year_label, period, language, script, material,
             page_count, category, keywords, description, significance, source_owner,
             cover_image, references_text, is_demo
      from archive_items
      where published = true
        and title ilike ${q ? `%${q}%` : "%"}
        and (${data.category ?? ""} = '' or category = ${data.category ?? ""})
        and (${data.language ?? ""} = '' or language ilike ${"%" + (data.language ?? "") + "%"})
        and (${data.period ?? ""} = '' or period ilike ${"%" + (data.period ?? "") + "%"})
        and (${data.script ?? ""} = '' or script ilike ${"%" + (data.script ?? "") + "%"})
        and (${data.year ?? ""} = '' or year_label ilike ${"%" + (data.year ?? "") + "%"})
        and (${data.author ?? ""} = '' or author ilike ${"%" + (data.author ?? "") + "%"})
        and (${data.keyword ?? ""} = '' or keywords ilike ${"%" + (data.keyword ?? "") + "%"})
      order by item_code asc
    `).map((r) => mapArchive(r));
});
var getArchiveItem_createServerFn_handler = createServerRpc({
	id: "b1a27753deeac1a8aed0a3a1c63f41a92104ae598de7b56dc7516c21a4ae4a0d",
	name: "getArchiveItem",
	filename: "src/lib/queries.ts"
}, (opts) => getArchiveItem.__executeServer(opts));
var getArchiveItem = createServerFn({ method: "GET" }).validator((data) => data).handler(getArchiveItem_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	const row = (await sql`
      select id, item_code, title, author, year_label, period, language, script, material,
             page_count, category, keywords, description, significance, source_owner,
             cover_image, references_text, is_demo
      from archive_items where published = true and item_code = ${data.code} limit 1
    `)[0];
	if (!row) return null;
	return mapArchive(row, (await sql`
      select id, page_number, image, caption, description
      from manuscript_pages where item_id = ${row.id} order by page_number asc
    `).map((p) => ({
		id: p.id,
		pageNumber: Number(p.page_number),
		image: p.image,
		caption: p.caption,
		description: p.description
	})));
});
var getLatestHukamnama_createServerFn_handler = createServerRpc({
	id: "ac4b6584f568ba631652f288e85c5e7507a8d741ecbd3d49423218dbbc4671d3",
	name: "getLatestHukamnama",
	filename: "src/lib/queries.ts"
}, (opts) => getLatestHukamnama.__executeServer(opts));
var getLatestHukamnama = createServerFn({ method: "GET" }).handler(getLatestHukamnama_createServerFn_handler, async () => {
	const rows = await (await getSql())`
      select id, date, ang, title, image, punjabi_text, translation, source, is_demo
      from hukamnamas where published = true order by date desc limit 1
    `;
	return rows[0] ? mapHukamnama(rows[0]) : null;
});
var getHukamnamaList_createServerFn_handler = createServerRpc({
	id: "ebb6dffd019df44d5fef3cd4a5cf6874f152f7281307378651263d9f087bd8dc",
	name: "getHukamnamaList",
	filename: "src/lib/queries.ts"
}, (opts) => getHukamnamaList.__executeServer(opts));
var getHukamnamaList = createServerFn({ method: "GET" }).validator((data) => data).handler(getHukamnamaList_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	const year = data.year ? Number(data.year) : 0;
	const month = data.month ? Number(data.month) : 0;
	const ang = (data.ang ?? "").trim();
	return (await sql`
      select id, date, ang, title, image, punjabi_text, translation, source, is_demo
      from hukamnamas
      where published = true
        and (${year} = 0 or extract(year from date) = ${year})
        and (${month} = 0 or extract(month from date) = ${month})
        and (${ang} = '' or ang ilike ${"%" + ang + "%"})
      order by date desc
    `).map(mapHukamnama);
});
var getHukamnamaByDate_createServerFn_handler = createServerRpc({
	id: "b631d5de34abb2218abde7b14e8192a95756152594f0d8029d365cf2d5b1e32e",
	name: "getHukamnamaByDate",
	filename: "src/lib/queries.ts"
}, (opts) => getHukamnamaByDate.__executeServer(opts));
var getHukamnamaByDate = createServerFn({ method: "GET" }).validator((data) => data).handler(getHukamnamaByDate_createServerFn_handler, async ({ data }) => {
	const rows = await (await getSql())`
      select id, date, ang, title, image, punjabi_text, translation, source, is_demo
      from hukamnamas where published = true and date = ${data.date}::date limit 1
    `;
	return rows[0] ? mapHukamnama(rows[0]) : null;
});
var getGalleries_createServerFn_handler = createServerRpc({
	id: "54e57868397029bfe18111117b3c0134fe3b12e5bc7c7e919e315f6285d453b6",
	name: "getGalleries",
	filename: "src/lib/queries.ts"
}, (opts) => getGalleries.__executeServer(opts));
var getGalleries = createServerFn({ method: "GET" }).handler(getGalleries_createServerFn_handler, async () => {
	return (await (await getSql())`
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
    `).map((r) => mapGallery(r, mapGalleryImages(r.images)));
});
var getGallery_createServerFn_handler = createServerRpc({
	id: "81bc2e9ae77b189efd2545660c5739c0264350f56d8806d1762993558070d9ed",
	name: "getGallery",
	filename: "src/lib/queries.ts"
}, (opts) => getGallery.__executeServer(opts));
var getGallery = createServerFn({ method: "GET" }).validator((data) => data).handler(getGallery_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	const row = (await sql`
      select id, slug, title, description, category, date_label, cover_image, is_demo
      from galleries where published = true and slug = ${data.slug} limit 1
    `)[0];
	if (!row) return null;
	return mapGallery(row, (await sql`
      select id, image, caption, date_label, sort_order
      from gallery_images where gallery_id = ${row.id}
      order by sort_order asc, id asc
    `).map((i) => ({
		id: i.id,
		image: i.image,
		caption: i.caption,
		dateLabel: i.date_label,
		sortOrder: Number(i.sort_order)
	})));
});
var getVideos_createServerFn_handler = createServerRpc({
	id: "ebf2a87e3eb16a06a3b1ec0ab640418a09cfc86e5a0fb7246393ff18f7f3c795",
	name: "getVideos",
	filename: "src/lib/queries.ts"
}, (opts) => getVideos.__executeServer(opts));
var getVideos = createServerFn({ method: "GET" }).handler(getVideos_createServerFn_handler, async () => {
	return (await (await getSql())`
      select id, title, description, youtube_url, thumbnail, event_date, category, duration, is_demo
      from videos where published = true order by id desc
    `).map(mapVideo);
});
var getLiveState_createServerFn_handler = createServerRpc({
	id: "5cb66cb45fbd7d7a02f6111a95ba887d67b0c48a32fc5bf635080483e16a2115",
	name: "getLiveState",
	filename: "src/lib/queries.ts"
}, (opts) => getLiveState.__executeServer(opts));
var getLiveState = createServerFn({ method: "GET" }).handler(getLiveState_createServerFn_handler, async () => {
	const mapped = (await (await getSql())`
      select id, title, description, event_date, location, youtube_url, thumbnail,
             is_live, start_time, end_time, is_demo
      from live_events order by is_live desc, event_date desc nulls last, id desc
    `).map(mapLive);
	return {
		live: mapped.find((e) => e.isLive) ?? null,
		upcoming: mapped.filter((e) => !e.isLive)
	};
});
var getNewsList_createServerFn_handler = createServerRpc({
	id: "3c70e97ccc68748fcba616d2eae84f860e4af6e06810c93e778b33f254279cbc",
	name: "getNewsList",
	filename: "src/lib/queries.ts"
}, (opts) => getNewsList.__executeServer(opts));
var getNewsList = createServerFn({ method: "GET" }).handler(getNewsList_createServerFn_handler, async () => {
	return (await (await getSql())`
      select id, slug, title, excerpt, body, image, author, published_at, category, is_demo
      from news where published = true order by published_at desc, id desc
    `).map(mapNews);
});
var getNewsArticle_createServerFn_handler = createServerRpc({
	id: "d93c6e9a7c6609a09730dd601945d40bf557eb753aaab8d422f3a925415560f4",
	name: "getNewsArticle",
	filename: "src/lib/queries.ts"
}, (opts) => getNewsArticle.__executeServer(opts));
var getNewsArticle = createServerFn({ method: "GET" }).validator((data) => data).handler(getNewsArticle_createServerFn_handler, async ({ data }) => {
	const rows = await (await getSql())`
      select id, slug, title, excerpt, body, image, author, published_at, category, is_demo
      from news where published = true and slug = ${data.slug} limit 1
    `;
	return rows[0] ? mapNews(rows[0]) : null;
});
var searchArchive_createServerFn_handler = createServerRpc({
	id: "b4a4ae768ab82ed4b33415abc50cd7ba171b782d4ededb91a85b1fd3b90b44e7",
	name: "searchArchive",
	filename: "src/lib/queries.ts"
}, (opts) => searchArchive.__executeServer(opts));
var searchArchive = createServerFn({ method: "GET" }).validator((data) => data).handler(searchArchive_createServerFn_handler, async ({ data }) => {
	const q = data.q.trim();
	if (q.length < 2) return [];
	const like = `%${q}%`;
	const sql = await getSql();
	const history = await sql`
      select slug, title, excerpt from history_articles
      where published = true and (title ilike ${like} or excerpt ilike ${like} or body ilike ${like} or period ilike ${like})
    `;
	const people = await sql`
      select slug, name, profession from personalities
      where published = true and (name ilike ${like} or profession ilike ${like} or biography ilike ${like})
    `;
	const books = await sql`
      select item_code, title, description from archive_items
      where published = true and (
        title ilike ${like} or author ilike ${like} or item_code ilike ${like}
        or keywords ilike ${like} or description ilike ${like}
      )
    `;
	const hukam = await sql`
      select date, title, translation from hukamnamas
      where published = true and (title ilike ${like} or translation ilike ${like} or ang ilike ${like})
    `;
	const news = await sql`
      select slug, title, excerpt from news
      where published = true and (title ilike ${like} or excerpt ilike ${like} or body ilike ${like})
    `;
	const videos = await sql`
      select id, title, description from videos
      where published = true and (title ilike ${like} or description ilike ${like} or category ilike ${like})
    `;
	return [
		...history.map((r) => ({
			kind: "history",
			id: r.slug,
			title: r.title,
			summary: r.excerpt,
			href: `/history/${r.slug}`
		})),
		...people.map((r) => ({
			kind: "personalities",
			id: r.slug,
			title: r.name,
			summary: r.profession,
			href: `/personalities/${r.slug}`
		})),
		...books.map((r) => ({
			kind: "manuscripts",
			id: r.item_code,
			title: r.title,
			summary: r.description.slice(0, 180),
			href: `/library/${r.item_code}`
		})),
		...hukam.map((r) => ({
			kind: "hukamnama",
			id: asIsoDate(r.date),
			title: r.title,
			summary: r.translation.slice(0, 180),
			href: `/hukamnama/${asIsoDate(r.date)}`
		})),
		...news.map((r) => ({
			kind: "news",
			id: r.slug,
			title: r.title,
			summary: r.excerpt,
			href: `/news/${r.slug}`
		})),
		...videos.map((r) => ({
			kind: "videos",
			id: String(r.id),
			title: r.title,
			summary: r.description.slice(0, 180),
			href: "/videos"
		}))
	];
});
var getHomeData_createServerFn_handler = createServerRpc({
	id: "7dd3c13a40c977ea99f22b57d971d6ff68f9d5ffffd893f2f34d739d3fcb8e7d",
	name: "getHomeData",
	filename: "src/lib/queries.ts"
}, (opts) => getHomeData.__executeServer(opts));
var getHomeData = createServerFn({ method: "GET" }).handler(getHomeData_createServerFn_handler, async () => {
	const sql = await getSql();
	const [hukamRows, newsRows, archiveRows, galleryRows, videoRows, liveRows, historyRows, peopleRows] = await Promise.all([
		sql`
          select id, date, ang, title, image, punjabi_text, translation, source, is_demo
          from hukamnamas where published = true order by date desc limit 1
        `,
		sql`
          select id, slug, title, excerpt, body, image, author, published_at, category, is_demo
          from news where published = true order by published_at desc limit 3
        `,
		sql`
          select id, item_code, title, author, year_label, period, language, script, material,
                 page_count, category, keywords, description, significance, source_owner,
                 cover_image, references_text, is_demo
          from archive_items where published = true and category = 'Manuscripts'
          order by item_code asc limit 3
        `,
		sql`
          select id, slug, title, description, category, date_label, cover_image, is_demo
          from galleries where published = true order by id asc limit 8
        `,
		sql`
          select id, title, description, youtube_url, thumbnail, event_date, category, duration, is_demo
          from videos where published = true order by id desc limit 3
        `,
		sql`
          select id, title, description, event_date, location, youtube_url, thumbnail,
                 is_live, start_time, end_time, is_demo
          from live_events where is_live = true order by id desc limit 1
        `,
		sql`
          select id, slug, title, excerpt, body, period, period_order, approx_year,
                 image, sources, author, published_at, updated_at, is_demo
          from history_articles where published = true order by period_order asc
        `,
		sql`
          select id, slug, name, photograph, birth_date, death_date, profession, education,
                 biography, achievements, contributions, connection, sources, is_demo
          from personalities where published = true order by name asc limit 3
        `
	]);
	return {
		hukamnama: hukamRows[0] ? mapHukamnama(hukamRows[0]) : null,
		news: newsRows.map(mapNews),
		manuscripts: archiveRows.map((r) => mapArchive(r)),
		galleries: galleryRows.map((r) => mapGallery(r)),
		videos: videoRows.map(mapVideo),
		live: liveRows[0] ? mapLive(liveRows[0]) : null,
		history: historyRows.map((r) => mapHistory(r)),
		personalities: peopleRows.map((r) => mapPersonality(r))
	};
});
//#endregion
export { getAboutSections_createServerFn_handler, getArchiveItem_createServerFn_handler, getGalleries_createServerFn_handler, getGallery_createServerFn_handler, getHistoryArticle_createServerFn_handler, getHistoryList_createServerFn_handler, getHomeData_createServerFn_handler, getHukamnamaByDate_createServerFn_handler, getHukamnamaList_createServerFn_handler, getLatestHukamnama_createServerFn_handler, getLibraryItems_createServerFn_handler, getLiveState_createServerFn_handler, getNewsArticle_createServerFn_handler, getNewsList_createServerFn_handler, getPersonalities_createServerFn_handler, getPersonality_createServerFn_handler, getVideos_createServerFn_handler, searchArchive_createServerFn_handler };
