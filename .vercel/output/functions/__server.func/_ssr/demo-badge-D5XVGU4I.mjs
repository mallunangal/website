import { r as cn } from "./utils-DCrcS2-8.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-badge-D5XVGU4I.js
var import_jsx_runtime = require_jsx_runtime();
function DemoBadge({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-sm bg-paper-deep px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted", className),
		children: "Demo content"
	});
}
function DemoNotice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border-l-2 border-bronze pl-3 text-sm text-muted",
		children: "Demo Content — Replace with verified information."
	});
}
//#endregion
export { DemoNotice as n, DemoBadge as t };
