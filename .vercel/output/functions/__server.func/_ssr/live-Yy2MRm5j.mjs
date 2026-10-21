import { i as formatLongDate, o as youtubeIdFromUrl } from "./utils-DCrcS2-8.mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Route$16 } from "./router-uM2ETwDi.mjs";
import { t as PageHero } from "./page-hero-CRWXV7fW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-Yy2MRm5j.js
var import_jsx_runtime = require_jsx_runtime();
function LivePage() {
	const { live, upcoming } = Route$16.useLoaderData();
	const liveId = live ? youtubeIdFromUrl(live.youtubeUrl) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Live",
		title: "Live from Mallu Nangal",
		lede: "Administrators can switch a stream on or off without changing the website code.",
		image: "/images/gurdwara-exterior-hero.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-5 py-12 md:px-8",
		children: [live ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "inline-flex items-center gap-2 rounded-sm bg-live-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-live",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 animate-pulse rounded-full bg-live" }), "Live now"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-3xl font-medium",
				children: live.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: live.description
			}),
			live.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: live.location
			}) : null,
			liveId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 aspect-video overflow-hidden rounded-xl bg-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: live.title,
					src: `https://www.youtube-nocookie.com/embed/${liveId}`,
					className: "size-full",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: true
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 rounded-xl bg-surface p-6 text-muted",
				children: "This event is marked live, but a YouTube address has not been entered yet."
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "overflow-hidden rounded-xl bg-surface shadow-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/gurdwara-interior.jpg",
				alt: "",
				className: "aspect-[21/9] w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium",
					children: "The stream is quiet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "No live event currently. Check back during upcoming village events."
				})]
			})]
		}), upcoming.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium",
				children: "Upcoming and previous"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-border",
				children: upcoming.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: event.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [event.eventDate ? formatLongDate(event.eventDate) : "Date to be announced", event.location ? ` · ${event.location}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink-soft",
							children: event.description
						})
					]
				}, event.id))
			})]
		}) : null]
	})] });
}
//#endregion
export { LivePage as component };
