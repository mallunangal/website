import { o as LIBRARY_CATEGORIES } from "./site-DaKAq9rx.mjs";
import { v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Route$5 } from "./router-BJB8sUfN.mjs";
import { t as PageHero } from "./page-hero-0Gt7Kes0.mjs";
import { t as Button } from "./button-B86fwFSJ.mjs";
import { t as DemoBadge } from "./demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-CVQfZoEz.js
var import_jsx_runtime = require_jsx_runtime();
function LibraryPage() {
	const items = Route$5.useLoaderData();
	const search = Route$5.useSearch();
	const navigate = useNavigate({ from: "/library/" });
	const onSubmit = (event) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		navigate({ search: {
			q: String(form.get("q") ?? ""),
			category: String(form.get("category") ?? ""),
			author: String(form.get("author") ?? ""),
			year: String(form.get("year") ?? ""),
			period: String(form.get("period") ?? ""),
			language: String(form.get("language") ?? ""),
			script: String(form.get("script") ?? ""),
			keyword: String(form.get("keyword") ?? "")
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Library",
		title: "Digital library",
		lede: "Manuscripts, historical documents, religious papers, old photographs, and village records — searchable once they are catalogued.",
		image: "/images/archive-table.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-12 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mb-10 grid gap-3 rounded-xl bg-surface p-4 shadow-card md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "q",
						defaultValue: search.q ?? "",
						placeholder: "Title",
						className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "author",
						defaultValue: search.author ?? "",
						placeholder: "Author",
						className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "year",
						defaultValue: search.year ?? "",
						placeholder: "Year",
						className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "period",
						defaultValue: search.period ?? "",
						placeholder: "Period",
						className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "language",
						defaultValue: search.language ?? "",
						placeholder: "Language",
						className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "script",
						defaultValue: search.script ?? "",
						placeholder: "Script",
						className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "keyword",
						defaultValue: search.keyword ?? "",
						placeholder: "Keyword",
						className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						name: "category",
						defaultValue: search.category ?? "",
						className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All categories"
						}), LIBRARY_CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: category,
							children: category
						}, category))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Search the library"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/library/$code",
					params: { code: item.itemCode },
					className: "overflow-hidden rounded-xl bg-surface shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.coverImage,
						alt: "",
						className: "aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-muted",
									children: item.itemCode
								}), item.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl font-medium",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [item.category, item.author ? ` · ${item.author}` : ""]
							})
						]
					})]
				}, item.itemCode))
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "No catalogue records match those filters yet."
			}) : null
		]
	})] });
}
//#endregion
export { LibraryPage as component };
