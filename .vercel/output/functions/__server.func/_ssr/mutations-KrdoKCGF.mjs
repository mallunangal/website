import { r as cn } from "./utils-DCrcS2-8.mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as createServerFn } from "./ssr.mjs";
import { x as createSsrRpc } from "./router-uM2ETwDi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mutations-KrdoKCGF.js
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "w-full rounded-md bg-paper px-3 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-border)] placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-madder";
function Field({ label, name, type = "text", required, hint, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1 block font-medium text-ink",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name,
				type,
				required,
				className: cn(fieldClass, "h-11", className),
				...props
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
function TextAreaField({ label, name, required, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block font-medium text-ink",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			required,
			className: cn(fieldClass, "py-2", className),
			...props
		})]
	});
}
var submitContribution = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("3d446d9f9540bbef06a6e1ea48d0c09fb468ccf4d85e76f557cf02aecfec83ac"));
var submitContact = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("a08f60fbea25eb3365563c2133d381f3811f53eec127de698e1a5b2daca7c4df"));
//#endregion
export { submitContribution as a, submitContact as i, TextAreaField as n, fieldClass as r, Field as t };
