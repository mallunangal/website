import { n as CENSUS, t as ABOUT_IMAGES } from "./site-VEeElnQv.mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Route$19, b as PhulkariRule, y as GurmukhiName } from "./router-wLaBQUbY.mjs";
import { t as PageHero } from "./page-hero-BLviyspn.mjs";
import { t as Prose } from "./prose-BhPbesxw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DnC7nu7i.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const sections = Route$19.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "About",
			title: "About Mallu Nangal",
			lede: "Punjabi: ਮੱਲੂ ਨੰਗਲ. What can be stated from public records is here. What still needs a village source is marked as such.",
			image: "/images/mustard-fields.jpg",
			showPunjabi: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-olive text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-8 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GurmukhiName, { className: "text-paper/85" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhulkariRule, { className: "mt-4 opacity-80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-6 md:grid-cols-4",
						children: CENSUS.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-medium",
							children: fact.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/65",
							children: fact.label
						})] }, fact.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs text-paper/55",
						children: CENSUS.source
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-[14rem_minmax(0,1fr)] md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "hidden md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "sticky top-24 space-y-2 text-sm",
					children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${section.slug}`,
						className: "block text-muted hover:text-ink",
						children: section.title
					}, section.slug))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-16",
				children: sections.map((section) => {
					const image = ABOUT_IMAGES[section.slug];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: section.slug,
						className: "scroll-mt-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-medium",
								children: section.title
							}),
							image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: image,
								alt: "",
								className: "mt-5 aspect-[16/9] w-full rounded-xl object-cover shadow-card",
								loading: "lazy"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
								text: section.body,
								className: "mt-5"
							})
						]
					}, section.slug);
				})
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
