import { i as formatLongDate } from "./_ssr/utils-DCrcS2-8.mjs";
import { C as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { u as Route$8 } from "./_ssr/router-wLaBQUbY.mjs";
import { t as PageHero } from "./_ssr/page-hero-BLviyspn.mjs";
import { t as Prose } from "./_ssr/prose-BhPbesxw.mjs";
import { n as DemoNotice } from "./_ssr/demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CUyW29Mh.js
var import_jsx_runtime = require_jsx_runtime();
function HistoryDetail() {
	const article = Route$8.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: article.period,
		title: article.title,
		lede: article.excerpt,
		image: article.image,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-5 py-12 md:px-8",
		children: [
			article.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNotice, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					article.author,
					" · ",
					formatLongDate(article.publishedAt),
					article.approxYear ? ` · ${article.approxYear}` : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
				text: article.body,
				className: "mt-8"
			}),
			article.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4",
				children: article.images.map((image) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image.image,
					alt: image.caption,
					className: "w-full rounded-xl object-cover"
				}), image.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-2 text-sm text-muted",
					children: image.caption
				}) : null] }, image.id))
			}) : null,
			article.sources ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-12 border-t border-border pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-muted",
					children: "Sources"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: article.sources
				})]
			}) : null
		]
	})] });
}
//#endregion
export { HistoryDetail as component };
