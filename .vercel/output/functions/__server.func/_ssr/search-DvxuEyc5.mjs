import { v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Route$14 } from "./router-BJB8sUfN.mjs";
import { t as PageHero } from "./page-hero-0Gt7Kes0.mjs";
import { t as Button } from "./button-B86fwFSJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-DvxuEyc5.js
var import_jsx_runtime = require_jsx_runtime();
var LABELS = {
	history: "History",
	personalities: "Personalities",
	manuscripts: "Library",
	hukamnama: "Hukamnama",
	news: "News",
	videos: "Videos"
};
function SearchPage() {
	const results = Route$14.useLoaderData();
	const { q } = Route$14.useSearch();
	const navigate = useNavigate({ from: "/search" });
	const groups = Object.keys(LABELS).map((kind) => ({
		kind,
		items: results.filter((r) => r.kind === kind)
	})).filter((g) => g.items.length > 0);
	const onSubmit = (event) => {
		event.preventDefault();
		const value = String(new FormData(event.currentTarget).get("q") ?? "");
		navigate({ search: { q: value } });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Search",
		title: "Search the archive",
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-5 py-12 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "flex flex-col gap-3 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "q",
				defaultValue: q ?? "",
				placeholder: "Try census, school, manuscript…",
				className: "h-12 flex-1 rounded-md bg-surface px-4 shadow-[inset_0_0_0_1px_var(--color-border)]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				children: "Search"
			})]
		}), !q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-muted",
			children: "Enter at least two characters."
		}) : groups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 text-muted",
			children: [
				"No published records match “",
				q,
				"”."
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 space-y-10",
			children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-madder",
				children: LABELS[group.kind]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-3",
				children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.href,
					className: "block rounded-lg bg-surface p-4 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 line-clamp-2 text-sm text-muted",
						children: item.summary
					})]
				}) }, `${item.kind}-${item.id}`))
			})] }, group.kind))
		})]
	})] });
}
//#endregion
export { SearchPage as component };
