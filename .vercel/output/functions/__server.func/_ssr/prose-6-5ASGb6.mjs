import { r as cn } from "./utils-DCrcS2-8.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prose-6-5ASGb6.js
var import_jsx_runtime = require_jsx_runtime();
function Prose({ text, className }) {
	const blocks = text.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("space-y-4 text-[1.05rem] leading-relaxed text-ink-soft", className),
		children: blocks.map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "whitespace-pre-wrap",
			children: block
		}, index))
	});
}
//#endregion
export { Prose as t };
