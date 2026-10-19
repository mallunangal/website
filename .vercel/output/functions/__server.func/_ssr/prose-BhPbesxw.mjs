import { r as cn } from "./utils-DCrcS2-8.mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prose-BhPbesxw.js
var import_jsx_runtime = require_jsx_runtime();
function Block({ block }) {
	if (block.startsWith("## ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "pt-6 font-display text-[1.65rem] font-medium leading-snug text-ink first:pt-0",
		children: block.slice(3)
	});
	const lines = block.split("\n").filter((line) => line.trim());
	if (lines.length > 0 && lines.every((line) => /^[*-]\s+/.test(line))) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "list-disc space-y-1 pl-5",
		children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line.replace(/^[*-]\s+/, "") }, line))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "whitespace-pre-wrap",
		children: block
	});
}
function Prose({ text, className }) {
	const blocks = text.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("space-y-4 text-[1.05rem] leading-relaxed text-ink-soft", className),
		children: blocks.map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { block }, index))
	});
}
//#endregion
export { Prose as t };
