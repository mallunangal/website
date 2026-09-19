import { i as formatLongDate } from "./_ssr/utils-DCrcS2-8.mjs";
import { x as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Route$2 } from "./_ssr/router-BJB8sUfN.mjs";
import { t as PageHero } from "./_ssr/page-hero-0Gt7Kes0.mjs";
import { t as Prose } from "./_ssr/prose-6-5ASGb6.mjs";
import { n as DemoNotice } from "./_ssr/demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BMqwnwle.js
var import_jsx_runtime = require_jsx_runtime();
function NewsDetail() {
	const article = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: article.category,
		title: article.title,
		lede: article.excerpt,
		image: article.image,
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-5 py-12 md:px-8",
		children: [
			article.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNotice, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					article.author,
					" · ",
					formatLongDate(article.publishedAt)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, {
				text: article.body,
				className: "mt-8"
			})
		]
	})] });
}
//#endregion
export { NewsDetail as component };
