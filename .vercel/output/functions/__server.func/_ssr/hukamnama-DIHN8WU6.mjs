import { i as formatLongDate } from "./utils-DCrcS2-8.mjs";
import { C as require_jsx_runtime, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Route$7 } from "./router-wLaBQUbY.mjs";
import { t as PageHero } from "./page-hero-BLviyspn.mjs";
import { t as Prose } from "./prose-BhPbesxw.mjs";
import { t as Button } from "./button-B86fwFSJ.mjs";
import { t as DemoBadge } from "./demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hukamnama-DIHN8WU6.js
var import_jsx_runtime = require_jsx_runtime();
function HukamnamaPage() {
	const { latest, archive } = Route$7.useLoaderData();
	const search = Route$7.useSearch();
	const navigate = useNavigate({ from: "/hukamnama/" });
	const onSubmit = (event) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		navigate({ search: {
			year: String(form.get("year") ?? ""),
			month: String(form.get("month") ?? ""),
			ang: String(form.get("ang") ?? "")
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Hukamnama",
		title: "Today's Hukamnama",
		lede: "This page never invents Gurbani. When a verified text and source are entered, they appear here automatically.",
		image: "/images/gurdwara.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-5 py-12 md:px-8",
		children: [
			latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-6 shadow-card md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: formatLongDate(latest.date)
							}),
							latest.ang ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: ["Ang ", latest.ang]
							}) : null,
							latest.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium",
						children: latest.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
						text: latest.punjabiText,
						className: "mt-6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
						text: latest.translation,
						className: "mt-6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-muted",
						children: ["Source: ", latest.source]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/hukamnama/$date",
						params: { date: latest.date },
						className: "mt-4 inline-block text-sm font-semibold text-madder",
						children: "Permanent link for this date"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "No hukamnama has been published yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-14 font-display text-3xl font-medium",
				children: "Hukamnama archive"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-6 grid gap-3 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "year",
						defaultValue: search.year ?? "",
						placeholder: "Year",
						inputMode: "numeric",
						className: "h-11 rounded-md bg-surface px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "month",
						defaultValue: search.month ?? "",
						placeholder: "Month (1–12)",
						inputMode: "numeric",
						className: "h-11 rounded-md bg-surface px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "ang",
						defaultValue: search.ang ?? "",
						placeholder: "Ang",
						className: "h-11 rounded-md bg-surface px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Filter"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 divide-y divide-border",
				children: archive.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/hukamnama/$date",
						params: { date: entry.date },
						className: "flex flex-wrap items-baseline gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl",
								children: formatLongDate(entry.date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: entry.title
							}),
							entry.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}) : null
						]
					})
				}, entry.date))
			})
		]
	})] });
}
//#endregion
export { HukamnamaPage as component };
