import { i as formatLongDate } from "./_ssr/utils-DCrcS2-8.mjs";
import { C as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { c as Route$6 } from "./_ssr/router-uM2ETwDi.mjs";
import { t as PageHero } from "./_ssr/page-hero-CRWXV7fW.mjs";
import { t as Prose } from "./_ssr/prose-BhPbesxw.mjs";
import { n as DemoNotice } from "./_ssr/demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_date-1HiA9Ffq.js
var import_jsx_runtime = require_jsx_runtime();
function HukamnamaDatePage() {
	const entry = Route$6.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Hukamnama archive",
		title: formatLongDate(entry.date),
		lede: entry.ang ? `Ang ${entry.ang}` : "Ang to be added",
		image: entry.image || "/images/gurdwara-exterior-hero.jpg",
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-5 py-12 md:px-8",
		children: [
			entry.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNotice, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 font-display text-3xl font-medium",
				children: entry.title
			}),
			entry.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: entry.image,
				alt: "",
				className: "mt-6 aspect-video w-full rounded-xl object-cover"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted",
				children: "Punjabi text"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
				text: entry.punjabiText,
				className: "mt-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted",
				children: "Translation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
				text: entry.translation,
				className: "mt-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-muted",
				children: ["Source: ", entry.source]
			})
		]
	})] });
}
//#endregion
export { HukamnamaDatePage as component };
