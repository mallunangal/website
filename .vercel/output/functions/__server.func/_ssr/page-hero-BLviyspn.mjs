import { r as cn } from "./utils-DCrcS2-8.mjs";
import { l as SITE } from "./site-VEeElnQv.mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-BLviyspn.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ kicker, title, lede, image, compact, showPunjabi }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("relative isolate overflow-hidden bg-ink text-paper", compact ? "min-h-[38vh]" : "min-h-[46vh]"),
		children: [
			image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 size-full object-cover outline-none"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[inherit] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 md:px-8 md:pb-16",
				children: [
					kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/80",
						children: kicker
					}) : null,
					showPunjabi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						lang: "pa",
						className: "mt-3 font-gurmukhi text-2xl font-semibold text-paper/90 md:text-3xl",
						children: SITE.gurmukhiName
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl font-medium leading-[1.05] md:text-6xl",
						children: title
					}),
					lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-base text-paper/80 md:text-lg",
						children: lede
					}) : null
				]
			})
		]
	});
}
function SectionHeading({ kicker, title, lede, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-madder",
					children: kicker
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-medium text-ink md:text-4xl",
					children: title
				}),
				lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: lede
				}) : null
			]
		}), action]
	});
}
//#endregion
export { SectionHeading as n, PageHero as t };
