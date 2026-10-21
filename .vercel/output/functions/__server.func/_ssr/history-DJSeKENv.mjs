import { a as HISTORY_PERIODS } from "./site-DdCvrrSo.mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Route$9 } from "./router-uM2ETwDi.mjs";
import { t as PageHero } from "./page-hero-CRWXV7fW.mjs";
import { t as DemoBadge } from "./demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history-DJSeKENv.js
var import_jsx_runtime = require_jsx_runtime();
function HistoryPage() {
	const articles = Route$9.useLoaderData();
	const byPeriod = HISTORY_PERIODS.map((period) => ({
		period,
		items: articles.filter((a) => a.period === period)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "History",
		title: "A timeline of the village",
		lede: "A short history of ਮੱਲੂ ਨੰਗਲ from the records we hold, then the timeline. Tradition is labeled. Empty centuries stay empty.",
		image: "/images/mustard-fields.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-5xl px-5 py-14 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative space-y-12 border-l border-bronze/60 pl-8 md:pl-12",
			children: byPeriod.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[37px] top-1 size-3 rounded-full bg-madder md:-left-[53px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-madder",
						children: group.period
					}),
					group.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 rounded-xl border border-dashed border-border bg-surface/60 p-5 text-sm text-muted",
						children: "Awaiting a documented source for this period. Nothing is invented to fill the gap."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-6",
						children: group.items.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/history/$slug",
							params: { slug: article.slug },
							className: "grid overflow-hidden rounded-xl bg-surface shadow-card transition-[box-shadow] duration-200 hover:shadow-card-hover md:grid-cols-[16rem_minmax(0,1fr)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: article.image,
								alt: "",
								className: "aspect-[16/10] h-full w-full object-cover",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs uppercase tracking-[0.16em] text-muted",
											children: article.approxYear
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
					})
				]
			}, group.period))
		})
	})] });
}
//#endregion
export { HistoryPage as component };
