import { o as __toESM } from "../_runtime.mjs";
import { r as cn } from "./utils-DCrcS2-8.mjs";
import { i as GALLERY_CATEGORIES } from "./site-VEeElnQv.mjs";
import { C as require_jsx_runtime, Z as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as Route$11 } from "./router-wLaBQUbY.mjs";
import { t as PageHero } from "./page-hero-BLviyspn.mjs";
import { t as DemoBadge } from "./demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-Du7fvPFb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const albums = Route$11.useLoaderData();
	const [category, setCategory] = (0, import_react.useState)("");
	const present = (0, import_react.useMemo)(() => GALLERY_CATEGORIES.filter((c) => albums.some((a) => a.category === c)), [albums]);
	const visible = category ? albums.filter((a) => a.category === category) : albums;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Gallery",
		title: "Village photographs",
		lede: "Albums are grouped by subject. Captions will name people and places once prints are identified.",
		image: "/images/village-lane.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-12 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
				active: category === "",
				onClick: () => setCategory(""),
				children: "All albums"
			}), present.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
				active: category === item,
				onClick: () => setCategory(item),
				children: item
			}, item))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "columns-1 gap-4 sm:columns-2 lg:columns-3",
			children: visible.map((album) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/gallery/$slug",
				params: { slug: album.slug },
				className: "mb-4 block break-inside-avoid overflow-hidden rounded-xl bg-surface shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: album.coverImage,
					alt: album.title,
					className: "w-full object-cover",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.16em] text-muted",
							children: album.category
						}), album.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl font-medium",
						children: album.title
					})]
				})]
			}, album.slug))
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
export { GalleryPage as component };
