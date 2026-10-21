import { i as formatLongDate } from "./utils-DCrcS2-8.mjs";
import { l as SITE, n as CENSUS } from "./site-DdCvrrSo.mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Radio, p as ArrowRight } from "../_libs/lucide-react.mjs";
import { b as PhulkariRule, v as Route$20, y as GurmukhiName } from "./router-uM2ETwDi.mjs";
import { n as SectionHeading } from "./page-hero-CRWXV7fW.mjs";
import { t as DemoBadge } from "./demo-badge-D5XVGU4I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DKLbMi2Z.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const data = Route$20.useLoaderData();
	const story = data.history.find((article) => article.slug === "brief-history" && !article.isDemo);
	const people = data.personalities.filter((person) => !person.isDemo);
	const books = data.manuscripts.filter((item) => !item.isDemo);
	const hukamnama = data.hukamnama && !data.hukamnama.isDemo ? data.hukamnama : null;
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Place",
		name: "Mallu Nangal",
		alternateName: ["Malu Nangal", SITE.gurmukhiName],
		description: SITE.description,
		url: SITE.domain,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Mallu Nangal",
			addressRegion: "Punjab",
			postalCode: SITE.pin,
			addressCountry: "IN"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-village.jpg",
					alt: "Wheat fields meeting a cluster of village houses at late afternoon",
					className: "absolute inset-0 size-full object-cover outline-none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GurmukhiName, {
							size: "hero",
							className: "text-paper/90"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-paper/75",
							children: "Amritsar district · Punjab"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-5xl font-medium leading-[0.95] md:text-7xl lg:text-8xl",
							children: "Mallu Nangal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl font-display text-xl italic text-paper/85 md:text-2xl",
							children: SITE.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhulkariRule, { className: "mt-6 opacity-90" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/history",
								className: "inline-flex h-12 items-center rounded-lg bg-madder px-6 text-sm font-medium text-paper transition-transform duration-150 active:scale-[0.96]",
								children: "Explore History"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/library",
								className: "inline-flex h-12 items-center rounded-lg bg-paper px-6 text-sm font-medium text-ink transition-transform duration-150 active:scale-[0.96]",
								children: "Digital Library"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-b border-border bg-olive text-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4",
				children: CENSUS.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-6 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl font-medium md:text-4xl",
						children: fact.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/65",
						children: fact.label
					})]
				}, fact.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl px-5 pb-4 text-[11px] text-paper/55 md:px-8",
				children: [CENSUS.source, ". Later counts will sit beside these figures when they are published."]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturePhoto, {
						to: "/history",
						image: "/images/mustard-fields.jpg",
						title: "Village History",
						text: "The name of ਮੱਲੂ ਨੰਗਲ, as told in Punjab Kosh and in the Gurdwara account."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturePhoto, {
						to: "/library",
						image: "/images/archive-table.jpg",
						title: "Digital Library",
						text: "Manuscripts, photographs and village papers, each with a catalogue number."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturePhoto, {
						to: "/personalities",
						image: "/images/courtyard.jpg",
						title: "Famous Personalities",
						text: "Biographies appear only with verified names, dates and sources."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturePhoto, {
						to: "/hukamnama",
						image: "/images/gurdwara-exterior-hero.jpg",
						title: "Today's Hukamnama",
						text: "A reserved place for the day’s hukamnama once a sourced text is entered."
					})
				]
			})
		}),
		story ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-paper-deep/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-madder",
						children: "Traditional history"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-medium md:text-5xl",
						children: story.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[1.05rem] leading-relaxed text-ink-soft",
						children: story.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 border-l-2 border-bronze pl-4 font-gurmukhi text-2xl leading-relaxed text-ink",
						children: "ਜਾਣਗੇ ਲਿੱਲੇ, ਆਉਣਗੇ ਗਿੱਲੇ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Words attributed to Guru Arjan Dev Ji in Punjab Kosh. The visit is undated."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/history/$slug",
						params: { slug: story.slug },
						className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-madder",
						children: ["Read the history ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/mustard-fields.jpg",
					alt: "Mustard fields in the Amritsar countryside",
					className: "aspect-[4/3] w-full rounded-xl object-cover shadow-card",
					loading: "lazy"
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-madder",
						children: "Discover Mallu Nangal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GurmukhiName, {
						size: "md",
						className: "mt-4 text-madder"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-medium md:text-5xl",
						children: "A village of Majha, kept in public memory"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[1.05rem] leading-relaxed text-ink-soft",
						children: "Mallu Nangal — ਮੱਲੂ ਨੰਗਲ, also recorded as Malu Nangal — is a gram panchayat in Amritsar district. A local tradition connects the name with Sri Guru Arjan Dev Ji and Bhai Mallu Ji. The two written accounts do not agree, and no year is known. What can be cited is published here. Family papers are still invited."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-madder",
						children: ["About the village ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/village-lane.jpg",
					alt: "A quiet brick village lane in afternoon light",
					className: "aspect-[4/3] w-full rounded-xl object-cover shadow-card",
					loading: "lazy"
				})]
			})
		}),
		people.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				kicker: "Famous personalities",
				title: "Lives bound to the village",
				lede: "Names are published only when they can be sourced.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/personalities",
					className: "text-sm font-semibold text-madder",
					children: "All personalities"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: people.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/personalities/$slug",
					params: { slug: person.slug },
					className: "overflow-hidden rounded-xl bg-surface shadow-card transition-[box-shadow] duration-200 hover:shadow-card-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: person.photograph,
						alt: "",
						className: "aspect-[4/5] w-full object-cover",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-medium",
								children: person.name
							}), person.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: person.profession
						})]
					})]
				}, person.slug))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper-deep/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					kicker: "Digital manuscript library",
					title: "Selected manuscripts",
					lede: "No original from the village has been photographed yet. The catalogue is ready for a pothi, a land paper, or a letter with a known owner.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/library",
						className: "text-sm font-semibold text-madder",
						children: "Open the library"
					})
				}), books.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: books.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/library/$code",
						params: { code: item.itemCode },
						className: "group overflow-hidden rounded-xl bg-surface shadow-card transition-[box-shadow,transform] duration-200 hover:shadow-card-hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.coverImage,
							alt: "",
							className: "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs tracking-wide text-muted",
										children: item.itemCode
									}), item.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl font-medium",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: item.category
								})
							]
						})]
					}, item.itemCode))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-xl border border-dashed border-border bg-paper/70 p-6 text-sm text-muted",
					children: "The shelves are empty on purpose. A demo binding is not shown here, so this page does not look as if the village’s manuscripts have already been copied."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-olive text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/70",
						children: "Today's Hukamnama"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-medium",
						children: hukamnama ? formatLongDate(hukamnama.date) : "Awaiting a sourced text"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl whitespace-pre-wrap text-lg leading-relaxed text-paper/85",
						children: hukamnama?.translation ?? "No hukamnama has been entered from a named source. This space stays empty until the Punjabi text, the ang, and where it was read are known."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/hukamnama",
						className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-paper",
						children: ["Open the hukamnama archive ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/gurdwara-exterior-hero.jpg",
					alt: "Gurdwara Sahib, Mallu Nangal",
					className: "aspect-[4/3] w-full rounded-xl object-cover outline-none",
					loading: "lazy"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				kicker: "Village news",
				title: "Latest from the archive",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/news",
					className: "text-sm font-semibold text-madder",
					children: "All news"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: data.news.map((article, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/news/$slug",
					params: { slug: article.slug },
					className: i === 0 && data.news.length > 1 ? "overflow-hidden rounded-xl bg-surface shadow-card md:row-span-2" : "overflow-hidden rounded-xl bg-surface shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: article.image,
						alt: "",
						className: i === 0 ? "aspect-[16/10] w-full object-cover" : "aspect-[16/9] w-full object-cover",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-muted",
								children: [
									article.category,
									" · ",
									formatLongDate(article.publishedAt)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl font-medium",
								children: article.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: article.excerpt
							})
						]
					})]
				}, article.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					kicker: "Village gallery",
					title: "Photographs",
					lede: "Gurdwara Sahib is photographed from prints supplied for the archive. The other albums are still layout studies.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						className: "text-sm font-semibold text-madder",
						children: "Browse gallery"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 md:grid-cols-4",
					children: data.galleries.map((album, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery/$slug",
						params: { slug: album.slug },
						className: i === 0 ? "col-span-2 row-span-2" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "relative overflow-hidden rounded-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: album.coverImage,
								alt: album.title,
								className: "aspect-[4/3] h-full w-full object-cover",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 p-3 text-sm text-paper",
								children: album.title
							})]
						})
					}, album.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				kicker: "Videos",
				title: "Moving pictures",
				lede: "Recordings will be embedded from YouTube so the archive does not store large video files.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/videos",
					className: "text-sm font-semibold text-madder",
					children: "Video archive"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: data.videos.map((video) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/videos",
					className: "overflow-hidden rounded-xl bg-surface shadow-card transition-[box-shadow] duration-200 hover:shadow-card-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: video.thumbnail,
							alt: "",
							className: "aspect-video w-full object-cover",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-3 top-3 rounded-sm bg-ink/80 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-paper",
							children: video.category
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-medium",
								children: video.title
							}), video.isDemo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, {}) : null]
						})
					})]
				}, video.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-paper-deep",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-madder",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-4" }), " Live from Mallu Nangal"]
					}), data.live ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium",
						children: data.live.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: data.live.description
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium",
						children: "The stream is quiet"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-muted",
						children: "No live event currently. Check back during upcoming village events."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/live",
					className: "inline-flex h-12 items-center rounded-lg bg-ink px-6 text-sm font-medium text-paper",
					children: "Live page"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-ink text-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/phulkari.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-25 outline-none",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/70",
						children: "Contribute"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium",
						children: "Old photographs, pothis, and family papers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-paper/75",
						children: "Nothing is published until it has been reviewed. Keep originals; this website is a catalogue, not the only home for manuscripts."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contribute",
					className: "inline-flex h-12 items-center rounded-lg bg-paper px-6 text-sm font-medium text-ink",
					children: "Offer material"
				})]
			})]
		})
	] });
}
function FeaturePhoto({ to, image, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group relative isolate overflow-hidden rounded-xl bg-ink text-paper shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-medium",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-paper/80",
					children: text
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
