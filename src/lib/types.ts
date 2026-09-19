export type AboutSection = {
  id: number;
  slug: string;
  title: string;
  body: string;
  sortOrder: number;
};

export type HistoryArticle = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  period: string;
  periodOrder: number;
  approxYear: string;
  image: string;
  sources: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  isDemo: boolean;
  images: HistoryImage[];
};

export type HistoryImage = {
  id: number;
  image: string;
  caption: string;
  sortOrder: number;
};

export type Personality = {
  id: number;
  slug: string;
  name: string;
  photograph: string;
  birthDate: string;
  deathDate: string;
  profession: string;
  education: string;
  biography: string;
  achievements: string;
  contributions: string;
  connection: string;
  sources: string;
  isDemo: boolean;
  photos: { id: number; image: string; caption: string }[];
};

export type ArchiveItem = {
  id: number;
  itemCode: string;
  title: string;
  author: string;
  yearLabel: string;
  period: string;
  language: string;
  script: string;
  material: string;
  pageCount: number;
  category: string;
  keywords: string;
  description: string;
  significance: string;
  sourceOwner: string;
  coverImage: string;
  references: string;
  isDemo: boolean;
  pages: ManuscriptPage[];
};

export type ManuscriptPage = {
  id: number;
  pageNumber: number;
  image: string;
  caption: string;
  description: string;
};

export type Hukamnama = {
  id: number;
  date: string;
  ang: string;
  title: string;
  image: string;
  punjabiText: string;
  translation: string;
  source: string;
  isDemo: boolean;
};

export type GalleryAlbum = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  dateLabel: string;
  coverImage: string;
  isDemo: boolean;
  images: GalleryImage[];
};

export type GalleryImage = {
  id: number;
  image: string;
  caption: string;
  dateLabel: string;
  sortOrder: number;
};

export type VideoItem = {
  id: number;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnail: string;
  eventDate: string;
  category: string;
  duration: string;
  isDemo: boolean;
};

export type LiveEvent = {
  id: number;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  youtubeUrl: string;
  thumbnail: string;
  isLive: boolean;
  startTime: string;
  endTime: string;
  isDemo: boolean;
};

export type NewsArticle = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
  isDemo: boolean;
};

export type SearchResult = {
  kind: "history" | "personalities" | "manuscripts" | "hukamnama" | "news" | "videos";
  id: string;
  title: string;
  summary: string;
  href: string;
};

export type HomePayload = {
  hukamnama: Hukamnama | null;
  news: NewsArticle[];
  manuscripts: ArchiveItem[];
  galleries: GalleryAlbum[];
  videos: VideoItem[];
  live: LiveEvent | null;
  history: HistoryArticle[];
  personalities: Personality[];
};
