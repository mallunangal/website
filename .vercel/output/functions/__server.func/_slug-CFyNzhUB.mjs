import { x as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-BJB8sUfN.mjs";
import { t as PageHero } from "./_ssr/page-hero-0Gt7Kes0.mjs";
import { t as Prose } from "./_ssr/prose-6-5ASGb6.mjs";
import { n as DemoNotice } from "./_ssr/demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CFyNzhUB.js
var import_jsx_runtime = require_jsx_runtime();
function PersonalityDetail() {
	const person = Route.useLoaderData();
	const facts = [
		["Profession", person.profession],
		["Education", person.education],
		["Born", person.birthDate],
		["Died", person.deathDate || "—"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Personalities",
		title: person.name,
		lede: person.profession,
		image: person.photograph,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-[18rem_minmax(0,1fr)] md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "space-y-4 rounded-xl bg-surface p-5 shadow-card",
			children: facts.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-muted",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 text-sm",
				children: value
			})] }, label))
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			person.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNotice, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 font-display text-2xl font-medium",
				children: "Biography"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
				text: person.biography,
				className: "mt-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl font-medium",
				children: "Achievements"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
				text: person.achievements,
				className: "mt-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl font-medium",
				children: "Contributions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
				text: person.contributions,
				className: "mt-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl font-medium",
				children: "Connection with Mallu Nangal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
				text: person.connection,
				className: "mt-3"
			}),
			person.photos.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo.image,
					alt: photo.caption,
					className: "w-full rounded-xl object-cover"
				}), photo.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-2 text-sm text-muted",
					children: photo.caption
				}) : null]
			}, photo.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-sm text-muted",
				children: ["Sources: ", person.sources]
			})
		] })]
	})] });
}
//#endregion
export { PersonalityDetail as component };
