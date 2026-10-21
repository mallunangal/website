import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./router-uM2ETwDi.mjs";
import { t as PageHero } from "./page-hero-CRWXV7fW.mjs";
import { t as DemoBadge } from "./demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/personalities-DemUQQBR.js
var import_jsx_runtime = require_jsx_runtime();
function PersonalitiesPage() {
	const people = Route$1.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Personalities",
		title: "People of the village",
		lede: "Jathedar Dalip Singh Ji of ਮੱਲੂ ਨੰਗਲ, with the 2003 sanman-pattar and the photographs supplied for the archive. The sample card is labelled and is not a resident.",
		image: "/images/courtyard.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-14 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: people.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl bg-surface shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: person.photograph,
					alt: "",
					className: "aspect-[4/5] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-medium",
								children: person.name
							}), person.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: person.profession
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 line-clamp-3 text-sm text-ink-soft",
							children: person.connection
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/personalities/$slug",
							params: { slug: person.slug },
							className: "mt-4 inline-flex h-11 items-center rounded-md bg-madder px-4 text-sm font-medium text-paper",
							children: "Read more"
						})
					]
				})]
			}, person.slug))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-10 max-w-2xl text-sm text-muted",
			children: "If you can document a teacher, farmer, soldier, sevadar, or anyone whose life is bound to Mallu Nangal, please use Contribute. Unpublished lives stay off this page."
		})]
	})] });
}
//#endregion
export { PersonalitiesPage as component };
