export const SITE = {
  name: "Mallu Nangal",
  gurmukhiName: "ਮੱਲੂ ਨੰਗਲ",
  domain: "https://mallunagal.com",
  tagline: "Our History • Our Heritage • Our Legacy",
  shortTagline: "A digital village archive",
  locationLine: "Amritsar District, Punjab, India",
  pin: "143101",
  email: "[Email to be added]",
  description:
    "Digital heritage archive of Mallu Nangal, a village in Amritsar district, Punjab — history, people, manuscripts, photographs, and community memory.",
} as const;

export const CENSUS = {
  year: "2011",
  source: "Census of India 2011, village Malu Nangal (code 037396)",
  facts: [
    { label: "People", value: "2,552" },
    { label: "Households", value: "456" },
    { label: "Area", value: "428 ha" },
    { label: "School since", value: "1925" },
  ],
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/history", label: "History" },
  { to: "/personalities", label: "Personalities" },
  { to: "/library", label: "Library" },
  { to: "/hukamnama", label: "Hukamnama" },
  { to: "/gallery", label: "Gallery" },
  { to: "/videos", label: "Videos" },
  { to: "/live", label: "Live" },
  { to: "/contact", label: "Contact" },
] as const;

export const SECONDARY_LINKS = [
  { to: "/news", label: "Village News" },
  { to: "/contribute", label: "Contribute" },
  { to: "/search", label: "Search" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
] as const;

export function absUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE.domain}${path.startsWith("/") ? path : `/${path}`}`;
}

export const CONTRIBUTE_CATEGORIES = [
  "Old photographs",
  "Manuscripts",
  "Historical documents",
  "Family history",
  "Village stories",
  "Historical information",
  "Old videos",
  "Other",
] as const;

export const LIBRARY_CATEGORIES = [
  "Manuscripts",
  "Historical Documents",
  "Religious Documents",
  "Old Photographs",
  "Village Records",
  "Other Historical Materials",
] as const;

export const GALLERY_CATEGORIES = [
  "Village",
  "Historical",
  "Religious",
  "People",
  "Events",
  "Old Photographs",
  "Schools",
  "Agriculture",
  "Festivals",
  "Village Development",
] as const;

export const VIDEO_CATEGORIES = [
  "Village Events",
  "Religious Events",
  "Cultural Programs",
  "Interviews",
  "Historical Videos",
  "Documentaries",
  "Village Development",
] as const;

export const HISTORY_PERIODS = [
  "Brief history",
  "Ancient Period",
  "Early Settlement",
  "Village Development",
  "Important Events",
  "Modern Period",
  "Present Day",
] as const;

export const ABOUT_IMAGES: Record<string, string> = {
  introduction: "/images/hero-village.jpg",
  location: "/images/mustard-fields.jpg",
  overview: "/images/village-lane.jpg",
  culture: "/images/phulkari.jpg",
  "religious-heritage": "/images/gurdwara-exterior-hero.jpg",
  education: "/images/school.jpg",
  agriculture: "/images/fields.jpg",
  community: "/images/courtyard.jpg",
  places: "/images/courtyard.jpg",
};
