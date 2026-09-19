import { i as formatLongDate } from "./utils-DCrcS2-8.mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$3 } from "./router-BJB8sUfN.mjs";
import { t as PageHero } from "./page-hero-0Gt7Kes0.mjs";
import { t as DemoBadge } from "./demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-BAwj4hon.js
var import_jsx_runtime = require_jsx_runtime();
function NewsPage() {
	const articles = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "News",
		title: "Village news",
		lede: "Notices from the archive and, later, from village life itself.",
		image: "/images/archive-table.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-4xl space-y-6 px-5 py-12 md:px-8",
		children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/news/$slug",
			params: { slug: article.slug },
			className: "grid overflow-hidden rounded-xl bg-surface shadow-card md:grid-cols-[16rem_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: article.image,
				alt: "",
				className: "aspect-[16/10] h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: [
								article.category,
								" · ",
								formatLongDate(article.publishedAt)
							]
						}), article.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl font-medium",
						children: article.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: article.excerpt
					})
				]
			})]
		}, article.slug))
	})] });
}
//#endregion
export { NewsPage as component };
