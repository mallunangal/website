import { o as __toESM } from "../_runtime.mjs";
import { r as cn } from "./utils-DCrcS2-8.mjs";
import { c as SECONDARY_LINKS, d as absUrl, l as SITE, s as NAV_LINKS } from "./site-DaKAq9rx.mjs";
import { H as require_react, V as notFound, _ as createRootRoute, b as useRouter, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { l as Instagram, n as X, r as Search, s as Menu, t as Youtube, u as Facebook } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/createSsrRpc-C1p7zOu_.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/queries-6DeOcYCC.js
var getAboutSections = createServerFn({ method: "GET" }).handler(createSsrRpc("4f20f75f2080aa3475a788b89f02594e4877b2f25caaae71be5b48f82bf362a6"));
var getHistoryList = createServerFn({ method: "GET" }).handler(createSsrRpc("3f0566ec0cdf936c205a2d3e1c5fd3029cd89fee397eb6efe3a7c5335aa13c55"));
var getHistoryArticle = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("6e8fba393a33a86cd94bcaf3344524583f892c9edebd3af3982bbe8a0adb3470"));
var getPersonalities = createServerFn({ method: "GET" }).handler(createSsrRpc("2307c100835d2ac75c133b8fecd93c4114dd81a64a3584c96cfba09d61509a4b"));
var getPersonality = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("d625285c62cab378b4fff420c3999af8ec43a22a805602ab39402b0c822eb309"));
var getLibraryItems = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("b236205d3fbbac94c6cbfd36bf48d679681bfa4802bf8f8b295e0833a39c8e56"));
var getArchiveItem = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("b1a27753deeac1a8aed0a3a1c63f41a92104ae598de7b56dc7516c21a4ae4a0d"));
var getLatestHukamnama = createServerFn({ method: "GET" }).handler(createSsrRpc("ac4b6584f568ba631652f288e85c5e7507a8d741ecbd3d49423218dbbc4671d3"));
var getHukamnamaList = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("ebb6dffd019df44d5fef3cd4a5cf6874f152f7281307378651263d9f087bd8dc"));
var getHukamnamaByDate = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("b631d5de34abb2218abde7b14e8192a95756152594f0d8029d365cf2d5b1e32e"));
var getGalleries = createServerFn({ method: "GET" }).handler(createSsrRpc("54e57868397029bfe18111117b3c0134fe3b12e5bc7c7e919e315f6285d453b6"));
var getGallery = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("81bc2e9ae77b189efd2545660c5739c0264350f56d8806d1762993558070d9ed"));
var getVideos = createServerFn({ method: "GET" }).handler(createSsrRpc("ebf2a87e3eb16a06a3b1ec0ab640418a09cfc86e5a0fb7246393ff18f7f3c795"));
var getLiveState = createServerFn({ method: "GET" }).handler(createSsrRpc("5cb66cb45fbd7d7a02f6111a95ba887d67b0c48a32fc5bf635080483e16a2115"));
var getNewsList = createServerFn({ method: "GET" }).handler(createSsrRpc("3c70e97ccc68748fcba616d2eae84f860e4af6e06810c93e778b33f254279cbc"));
var getNewsArticle = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("d93c6e9a7c6609a09730dd601945d40bf557eb753aaab8d422f3a925415560f4"));
var searchArchive = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("b4a4ae768ab82ed4b33415abc50cd7ba171b782d4ededb91a85b1fd3b90b44e7"));
var getHomeData = createServerFn({ method: "GET" }).handler(createSsrRpc("7dd3c13a40c977ea99f22b57d971d6ff68f9d5ffffd893f2f34d739d3fcb8e7d"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BJB8sUfN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/archive-table.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/75" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/70",
						children: "500"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-medium",
						children: "The reading room is interrupted"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm break-words text-paper/75",
						children: errorMessage(error)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-8 inline-flex h-11 items-center rounded-md bg-paper px-5 text-sm font-medium text-ink",
						children: "Return home"
					})
				]
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function GurmukhiName({ className, size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		lang: "pa",
		className: cn("font-gurmukhi font-semibold leading-none", {
			sm: "text-sm",
			md: "text-xl",
			lg: "text-3xl md:text-4xl",
			hero: "text-2xl md:text-4xl"
		}[size], className),
		children: SITE.gurmukhiName
	});
}
function PhulkariRule({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-3 w-full max-w-xs bg-repeat-x", className),
		style: {
			backgroundImage: "url(/patterns/phulkari.svg)",
			backgroundSize: "96px 12px"
		},
		"aria-hidden": "true"
	});
}
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/fields.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/70",
						children: "404"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GurmukhiName, { className: "mt-4 text-paper/80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-medium md:text-5xl",
						children: "This page is not in the archive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-md text-paper/75",
						children: "The address may have changed, or the record has not been published yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-8 inline-flex h-11 items-center rounded-md bg-paper px-5 text-sm font-medium text-ink",
						children: "Back to Mallu Nangal"
					})
				]
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-border bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-medium",
							children: SITE.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GurmukhiName, {
							size: "sm",
							className: "mt-2 text-paper/70"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm leading-relaxed text-paper/70",
							children: [
								SITE.shortTagline,
								" for a village in ",
								SITE.locationLine,
								". PIN ",
								SITE.pin,
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/55",
					children: "Quick links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: NAV_LINKS.slice(0, 6).map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "text-paper/80 hover:text-paper",
						children: link.label
					}) }, link.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/55",
					children: "The archive"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [NAV_LINKS.slice(6).map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "text-paper/80 hover:text-paper",
						children: link.label
					}) }, link.to)), SECONDARY_LINKS.filter((l) => l.to !== "/privacy" && l.to !== "/terms").map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "text-paper/80 hover:text-paper",
						children: link.label
					}) }, link.to))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/55",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-paper/80",
						children: SITE.locationLine
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-paper/80",
						children: ["PIN ", SITE.pin]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-paper/80",
						children: SITE.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-2",
						"aria-label": "Social pages to be added",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialGhost, {
								label: "Facebook page to be added",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialGhost, {
								label: "Instagram to be added",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialGhost, {
								label: "YouTube to be added",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-4" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-paper/45",
						children: "Village social accounts will be linked here when they are confirmed."
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-paper/55 md:flex-row md:items-center md:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Mallu Nangal digital archive. Not a substitute for original manuscripts."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-paper",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "hover:text-paper",
						children: "Terms"
					})]
				})]
			})
		})]
	});
}
function SocialGhost({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		title: label,
		className: "grid size-10 place-items-center rounded-md bg-paper/10 text-paper/70",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: label
		})]
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isHome = pathname === "/";
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const inverted = isHome && !scrolled && !open;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-200", inverted ? "bg-transparent text-paper" : "bg-paper/95 text-ink shadow-[0_1px_0_var(--color-border)] backdrop-blur-md"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 md:h-[4.25rem] md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-3",
					"aria-label": "Mallu Nangal home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid size-9 shrink-0 place-items-center rounded-sm font-display text-sm font-semibold tracking-wide", inverted ? "bg-paper text-ink" : "bg-madder text-paper"),
						children: "MN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-display text-lg font-semibold leading-none",
							children: SITE.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "pa",
							className: cn("mt-1 hidden font-gurmukhi text-[11px] leading-none sm:block", inverted ? "text-paper/75" : "text-muted"),
							children: SITE.gurmukhiName
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-auto hidden items-center xl:flex",
					"aria-label": "Main",
					children: NAV_LINKS.map((link) => {
						const active = link.to === "/" ? pathname === "/" : pathname === link.to || pathname.startsWith(`${link.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: cn("rounded-md px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors", inverted ? active ? "text-paper" : "text-paper/70 hover:text-paper" : active ? "text-madder" : "text-muted hover:text-ink"),
							children: link.label
						}, link.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1 xl:ml-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/search",
						className: cn("grid size-11 place-items-center rounded-md", inverted ? "text-paper hover:bg-paper/10" : "text-ink hover:bg-paper-deep"),
						"aria-label": "Search the archive",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "size-5",
							strokeWidth: 1.75
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("grid size-11 place-items-center rounded-md xl:hidden", inverted ? "text-paper hover:bg-paper/10" : "text-ink hover:bg-paper-deep"),
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-paper text-ink xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col px-5 py-6",
				"aria-label": "Mobile",
				children: [
					NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "border-b border-border py-4 font-display text-2xl font-medium",
						children: link.label
					}, link.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/news",
						className: "border-b border-border py-4 text-lg text-muted",
						children: "Village news"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contribute",
						className: "py-4 text-lg text-muted",
						children: "Contribute"
					})
				]
			})
		}) : null]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 flex-col",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-CkVnX1iX.css";
var APP_NAME = SITE.name;
var Route$21 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: SITE.description
			},
			{
				name: "theme-color",
				content: "#1C1814"
			},
			{
				name: "application-name",
				content: APP_NAME
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Noto+Serif+Gurmukhi:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
			},
			{
				rel: "canonical",
				href: SITE.domain
			}
		]
	}),
	component: RootDocument,
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFoundPage, {}) })
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-paper font-sans text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$20 = () => import("./routes-B_Ja2e9m.mjs");
var Route$20 = createFileRoute("/")({
	loader: () => getHomeData(),
	head: () => ({
		meta: [{ title: `${SITE.name} — ${SITE.tagline}` }, {
			name: "description",
			content: SITE.description
		}],
		links: [{
			rel: "canonical",
			href: SITE.domain
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./about-D_svHNvF.mjs");
var Route$19 = createFileRoute("/about")({
	loader: () => getAboutSections(),
	head: () => ({
		meta: [{ title: `About Mallu Nangal — ${SITE.name}` }, {
			name: "description",
			content: "Location, census overview, education and agriculture of Mallu Nangal, Amritsar district, Punjab."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/about")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./contact-BVRxxFXE.mjs");
var Route$18 = createFileRoute("/contact")({
	head: () => ({
		meta: [{ title: `Contact — ${SITE.name}` }, {
			name: "description",
			content: "Write to the Mallu Nangal digital archive."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/contact")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./contribute-BA1rIdYD.mjs");
var Route$17 = createFileRoute("/contribute")({
	head: () => ({
		meta: [{ title: `Contribute — ${SITE.name}` }, {
			name: "description",
			content: "Offer photographs, manuscripts and family history to the Mallu Nangal archive for review."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/contribute")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./live-BrVf1M2z.mjs");
var Route$16 = createFileRoute("/live")({
	loader: () => getLiveState(),
	head: () => ({
		meta: [{ title: `Live — ${SITE.name}` }, {
			name: "description",
			content: "Live stream from Mallu Nangal when an event is marked as live."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/live")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./privacy-DXBew2UH.mjs");
var Route$15 = createFileRoute("/privacy")({
	head: () => ({
		meta: [{ title: `Privacy Policy — ${SITE.name}` }, {
			name: "description",
			content: "How the Mallu Nangal archive treats messages and contributed material."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/privacy")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./search-DvxuEyc5.mjs");
var Route$14 = createFileRoute("/search")({
	validateSearch: (search) => typeof search.q === "string" && search.q.length > 0 ? { q: search.q } : {},
	loaderDeps: ({ search }) => ({ q: search.q }),
	loader: async ({ deps }) => {
		if (!deps.q?.trim()) return [];
		return searchArchive({ data: { q: deps.q } });
	},
	head: () => ({
		meta: [{ title: `Search — ${SITE.name}` }, {
			name: "description",
			content: "Search history, people, manuscripts, hukamnama, news and videos."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/search")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./terms-C-2uNACP.mjs");
var Route$13 = createFileRoute("/terms")({
	head: () => ({
		meta: [{ title: `Terms — ${SITE.name}` }, {
			name: "description",
			content: "Terms of use for the Mallu Nangal digital archive."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/terms")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./videos-BzYnO74Q.mjs");
var Route$12 = createFileRoute("/videos")({
	loader: () => getVideos(),
	head: () => ({
		meta: [{ title: `Videos — ${SITE.name}` }, {
			name: "description",
			content: "YouTube video archive for Mallu Nangal events, interviews and documentaries."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/videos")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./gallery-Cchh7gWK.mjs");
var Route$11 = createFileRoute("/gallery/")({
	loader: () => getGalleries(),
	head: () => ({
		meta: [{ title: `Gallery — ${SITE.name}` }, {
			name: "description",
			content: "Photograph albums of Mallu Nangal — village, history, fields, schools and festivals."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/gallery")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("../_slug-BlM0X2Ep.mjs");
var Route$10 = createFileRoute("/gallery/$slug")({
	loader: async ({ params }) => {
		const album = await getGallery({ data: { slug: params.slug } });
		if (!album) throw notFound();
		return album;
	},
	head: ({ loaderData }) => ({
		meta: [{ title: `${loaderData?.title ?? "Gallery"} — ${SITE.name}` }, {
			name: "description",
			content: loaderData?.description ?? SITE.description
		}],
		links: [{
			rel: "canonical",
			href: absUrl(`/gallery/${loaderData?.slug ?? ""}`)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./history-Y2JFlM2N.mjs");
var Route$9 = createFileRoute("/history/")({
	loader: () => getHistoryList(),
	head: () => ({
		meta: [{ title: `History — ${SITE.name}` }, {
			name: "description",
			content: "Historical timeline of Mallu Nangal, built from database records and cited public sources."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/history")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("../_slug-DIQ-93Bf.mjs");
var Route$8 = createFileRoute("/history/$slug")({
	loader: async ({ params }) => {
		const article = await getHistoryArticle({ data: { slug: params.slug } });
		if (!article) throw notFound();
		return article;
	},
	head: ({ loaderData }) => ({
		meta: [{ title: `${loaderData?.title ?? "History"} — ${SITE.name}` }, {
			name: "description",
			content: loaderData?.excerpt ?? SITE.description
		}],
		links: [{
			rel: "canonical",
			href: absUrl(`/history/${loaderData?.slug ?? ""}`)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./hukamnama-CNRMZKNp.mjs");
var Route$7 = createFileRoute("/hukamnama/")({
	validateSearch: (search) => ({
		year: typeof search.year === "string" ? search.year : void 0,
		month: typeof search.month === "string" ? search.month : void 0,
		ang: typeof search.ang === "string" ? search.ang : void 0
	}),
	loaderDeps: ({ search }) => search,
	loader: async ({ deps }) => {
		const [latest, archive] = await Promise.all([getLatestHukamnama(), getHukamnamaList({ data: deps })]);
		return {
			latest,
			archive
		};
	},
	head: () => ({
		meta: [{ title: `Hukamnama — ${SITE.name}` }, {
			name: "description",
			content: "Today’s hukamnama and archive for Mallu Nangal. Texts appear only when sourced by an editor."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/hukamnama")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("../_date-CdXBu2Fx.mjs");
var Route$6 = createFileRoute("/hukamnama/$date")({
	loader: async ({ params }) => {
		const entry = await getHukamnamaByDate({ data: { date: params.date } });
		if (!entry) throw notFound();
		return entry;
	},
	head: ({ loaderData }) => ({
		meta: [{ title: `Hukamnama ${loaderData?.date ?? ""} — ${SITE.name}` }, {
			name: "description",
			content: "Hukamnama archive entry for Mallu Nangal."
		}],
		links: [{
			rel: "canonical",
			href: absUrl(`/hukamnama/${loaderData?.date ?? ""}`)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./library-CVQfZoEz.mjs");
var Route$5 = createFileRoute("/library/")({
	validateSearch: (search) => ({
		q: typeof search.q === "string" ? search.q : void 0,
		category: typeof search.category === "string" ? search.category : void 0,
		author: typeof search.author === "string" ? search.author : void 0,
		year: typeof search.year === "string" ? search.year : void 0,
		period: typeof search.period === "string" ? search.period : void 0,
		language: typeof search.language === "string" ? search.language : void 0,
		script: typeof search.script === "string" ? search.script : void 0,
		keyword: typeof search.keyword === "string" ? search.keyword : void 0
	}),
	loaderDeps: ({ search }) => search,
	loader: ({ deps }) => getLibraryItems({ data: deps }),
	head: () => ({
		meta: [{ title: `Digital library — ${SITE.name}` }, {
			name: "description",
			content: "Search manuscripts, documents, photographs and village records from Mallu Nangal."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/library")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("../_code-WJGHGzOM.mjs");
var Route$4 = createFileRoute("/library/$code")({
	loader: async ({ params }) => {
		const item = await getArchiveItem({ data: { code: params.code } });
		if (!item) throw notFound();
		return item;
	},
	head: ({ loaderData }) => ({
		meta: [{ title: `${loaderData?.itemCode ?? "Item"} — ${SITE.name}` }, {
			name: "description",
			content: loaderData?.title ?? SITE.description
		}],
		links: [{
			rel: "canonical",
			href: absUrl(`/library/${loaderData?.itemCode ?? ""}`)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./news-BAwj4hon.mjs");
var Route$3 = createFileRoute("/news/")({
	loader: () => getNewsList(),
	head: () => ({
		meta: [{ title: `Village news — ${SITE.name}` }, {
			name: "description",
			content: "News and notices from the Mallu Nangal digital archive."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/news")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_slug-BMqwnwle.mjs");
var Route$2 = createFileRoute("/news/$slug")({
	loader: async ({ params }) => {
		const article = await getNewsArticle({ data: { slug: params.slug } });
		if (!article) throw notFound();
		return article;
	},
	head: ({ loaderData }) => ({
		meta: [{ title: `${loaderData?.title ?? "News"} — ${SITE.name}` }, {
			name: "description",
			content: loaderData?.excerpt ?? SITE.description
		}],
		links: [{
			rel: "canonical",
			href: absUrl(`/news/${loaderData?.slug ?? ""}`)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./personalities-BAATeLsl.mjs");
var Route$1 = createFileRoute("/personalities/")({
	loader: () => getPersonalities(),
	head: () => ({
		meta: [{ title: `Famous personalities — ${SITE.name}` }, {
			name: "description",
			content: "Documented lives connected with Mallu Nangal. No biography is invented for this archive."
		}],
		links: [{
			rel: "canonical",
			href: absUrl("/personalities")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-CFyNzhUB.mjs");
var Route = createFileRoute("/personalities/$slug")({
	loader: async ({ params }) => {
		const person = await getPersonality({ data: { slug: params.slug } });
		if (!person) throw notFound();
		return person;
	},
	head: ({ loaderData }) => ({
		meta: [{ title: `${loaderData?.name ?? "Personality"} — ${SITE.name}` }, {
			name: "description",
			content: loaderData?.connection || loaderData?.profession || SITE.description
		}],
		links: [{
			rel: "canonical",
			href: absUrl(`/personalities/${loaderData?.slug ?? ""}`)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$20.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$21
});
var AboutRoute = Route$19.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$21
});
var ContactRoute = Route$18.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$21
});
var ContributeRoute = Route$17.update({
	id: "/contribute",
	path: "/contribute",
	getParentRoute: () => Route$21
});
var LiveRoute = Route$16.update({
	id: "/live",
	path: "/live",
	getParentRoute: () => Route$21
});
var PrivacyRoute = Route$15.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$21
});
var SearchRoute = Route$14.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$21
});
var TermsRoute = Route$13.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$21
});
var VideosRoute = Route$12.update({
	id: "/videos",
	path: "/videos",
	getParentRoute: () => Route$21
});
var GalleryIndexRoute = Route$11.update({
	id: "/gallery/",
	path: "/gallery/",
	getParentRoute: () => Route$21
});
var GallerySlugRoute = Route$10.update({
	id: "/gallery/$slug",
	path: "/gallery/$slug",
	getParentRoute: () => Route$21
});
var HistoryIndexRoute = Route$9.update({
	id: "/history/",
	path: "/history/",
	getParentRoute: () => Route$21
});
var HistorySlugRoute = Route$8.update({
	id: "/history/$slug",
	path: "/history/$slug",
	getParentRoute: () => Route$21
});
var HukamnamaIndexRoute = Route$7.update({
	id: "/hukamnama/",
	path: "/hukamnama/",
	getParentRoute: () => Route$21
});
var HukamnamaDateRoute = Route$6.update({
	id: "/hukamnama/$date",
	path: "/hukamnama/$date",
	getParentRoute: () => Route$21
});
var LibraryIndexRoute = Route$5.update({
	id: "/library/",
	path: "/library/",
	getParentRoute: () => Route$21
});
var LibraryCodeRoute = Route$4.update({
	id: "/library/$code",
	path: "/library/$code",
	getParentRoute: () => Route$21
});
var NewsIndexRoute = Route$3.update({
	id: "/news/",
	path: "/news/",
	getParentRoute: () => Route$21
});
var NewsSlugRoute = Route$2.update({
	id: "/news/$slug",
	path: "/news/$slug",
	getParentRoute: () => Route$21
});
var PersonalitiesIndexRoute = Route$1.update({
	id: "/personalities/",
	path: "/personalities/",
	getParentRoute: () => Route$21
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	ContributeRoute,
	LiveRoute,
	PrivacyRoute,
	SearchRoute,
	TermsRoute,
	VideosRoute,
	GallerySlugRoute,
	HistorySlugRoute,
	HukamnamaDateRoute,
	LibraryCodeRoute,
	NewsSlugRoute,
	PersonalitiesSlugRoute: Route.update({
		id: "/personalities/$slug",
		path: "/personalities/$slug",
		getParentRoute: () => Route$21
	}),
	GalleryIndexRoute,
	HistoryIndexRoute,
	HukamnamaIndexRoute,
	LibraryIndexRoute,
	NewsIndexRoute,
	PersonalitiesIndexRoute
};
var routeTree = Route$21._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
//#endregion
export { Route$19 as _, Route$3 as a, PhulkariRule as b, Route$6 as c, Route$9 as d, Route$10 as f, Route$16 as g, Route$14 as h, Route$2 as i, Route$7 as l, Route$12 as m, Route as n, Route$4 as o, Route$11 as p, Route$1 as r, Route$5 as s, router_exports as t, Route$8 as u, Route$20 as v, createSsrRpc as x, GurmukhiName as y };
