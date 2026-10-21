import { o as __toESM } from "../_runtime.mjs";
import { i as formatLongDate, o as youtubeIdFromUrl, r as cn } from "./utils-DCrcS2-8.mjs";
import { u as VIDEO_CATEGORIES } from "./site-DdCvrrSo.mjs";
import { C as require_jsx_runtime, Z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Route$12 } from "./router-uM2ETwDi.mjs";
import { t as PageHero } from "./page-hero-CRWXV7fW.mjs";
import { t as DemoBadge } from "./demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/videos-Ve0C-FMA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VideosPage() {
	const videos = Route$12.useLoaderData();
	const [category, setCategory] = (0, import_react.useState)("");
	const present = (0, import_react.useMemo)(() => VIDEO_CATEGORIES.filter((c) => videos.some((v) => v.category === c)), [videos]);
	const visible = category ? videos.filter((v) => v.category === category) : videos;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Videos",
		title: "Video archive",
		lede: "Large files are not stored on this website. When a recording is ready, it is published as a YouTube embed.",
		image: "/images/hero-village.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl space-y-10 px-5 py-12 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
				active: category === "",
				onClick: () => setCategory(""),
				children: "All"
			}), present.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
				active: category === item,
				onClick: () => setCategory(item),
				children: item
			}, item))]
		}), visible.map((video) => {
			const id = youtubeIdFromUrl(video.youtubeUrl);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl bg-surface shadow-card",
				children: [id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video bg-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: video.title,
						src: `https://www.youtube-nocookie.com/embed/${id}`,
						className: "size-full",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: true
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: video.thumbnail,
						alt: "",
						className: "aspect-video w-full object-cover",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "absolute inset-0 grid place-items-center bg-ink/45 text-sm font-medium text-paper",
						children: "YouTube link to be added"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.16em] text-muted",
									children: video.category
								}),
								video.eventDate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: formatLongDate(video.eventDate)
								}) : null,
								video.duration ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: video.duration
								}) : null,
								video.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-medium",
							children: video.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink-soft",
							children: video.description
						})
					]
				})]
			}, video.id);
		})]
	})] });
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 rounded-full px-4 text-sm font-medium transition-colors", active ? "bg-ink text-paper" : "bg-surface text-ink-soft shadow-[inset_0_0_0_1px_var(--color-border)]"),
		children
	});
}
//#endregion
export { VideosPage as component };
