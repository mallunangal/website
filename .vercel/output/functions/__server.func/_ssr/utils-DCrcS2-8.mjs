import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-DCrcS2-8.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function asIsoDate(value) {
	if (typeof value === "string") return value.slice(0, 10);
	if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
	return "";
}
function asBool(value) {
	return value === true || value === "t" || value === "true" || value === 1 || value === "1";
}
function parseJsonArray(value) {
	if (Array.isArray(value)) return value;
	if (typeof value === "string") try {
		const parsed = JSON.parse(value);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
	return [];
}
function formatLongDate(iso) {
	if (!iso) return "";
	const date = /* @__PURE__ */ new Date(`${iso}T00:00:00`);
	if (Number.isNaN(date.getTime())) return iso;
	return new Intl.DateTimeFormat("en-IN", {
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(date);
}
function youtubeIdFromUrl(url) {
	if (!url) return null;
	try {
		const parsed = new URL(url);
		if (parsed.hostname.includes("youtu.be")) return parsed.pathname.replace("/", "") || null;
		if (parsed.searchParams.get("v")) return parsed.searchParams.get("v");
		const parts = parsed.pathname.split("/").filter(Boolean);
		const embedIndex = parts.indexOf("embed");
		if (embedIndex >= 0 && parts[embedIndex + 1]) return parts[embedIndex + 1];
		const liveIndex = parts.indexOf("live");
		if (liveIndex >= 0 && parts[liveIndex + 1]) return parts[liveIndex + 1];
	} catch {
		return null;
	}
	return null;
}
//#endregion
export { parseJsonArray as a, formatLongDate as i, asIsoDate as n, youtubeIdFromUrl as o, cn as r, asBool as t };
