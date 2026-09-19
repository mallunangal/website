create table if not exists about_sections (
  id serial primary key,
  slug text not null unique,
  title text not null,
  body text not null,
  sort_order integer not null default 0
);

create table if not exists history_articles (
  id serial primary key,
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  body text not null,
  period text not null,
  period_order integer not null default 0,
  approx_year text not null default '',
  image text not null default '',
  sources text not null default '',
  author text not null default 'Archive editor',
  published_at date not null default current_date,
  updated_at date not null default current_date,
  published boolean not null default true,
  is_demo boolean not null default false
);
create index if not exists history_articles_period_idx on history_articles (period_order, published_at);

create table if not exists history_images (
  id serial primary key,
  article_id integer not null references history_articles(id) on delete cascade,
  image text not null,
  caption text not null default '',
  sort_order integer not null default 0
);

create table if not exists personalities (
  id serial primary key,
  slug text not null unique,
  name text not null,
  photograph text not null default '',
  birth_date text not null default '',
  death_date text not null default '',
  profession text not null default '',
  education text not null default '',
  biography text not null default '',
  achievements text not null default '',
  contributions text not null default '',
  connection text not null default '',
  sources text not null default '',
  published boolean not null default true,
  is_demo boolean not null default false
);

create table if not exists personality_photos (
  id serial primary key,
  personality_id integer not null references personalities(id) on delete cascade,
  image text not null,
  caption text not null default '',
  sort_order integer not null default 0
);

create table if not exists archive_items (
  id serial primary key,
  item_code text not null unique,
  title text not null,
  author text not null default '',
  year_label text not null default '',
  period text not null default '',
  language text not null default '',
  script text not null default '',
  material text not null default '',
  page_count integer not null default 0,
  category text not null,
  keywords text not null default '',
  description text not null default '',
  significance text not null default '',
  source_owner text not null default '',
  cover_image text not null default '',
  references_text text not null default '',
  published boolean not null default true,
  is_demo boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists archive_items_category_idx on archive_items (category);
create index if not exists archive_items_search_idx on archive_items (title, author, year_label);

create table if not exists manuscript_pages (
  id serial primary key,
  item_id integer not null references archive_items(id) on delete cascade,
  page_number integer not null,
  image text not null,
  caption text not null default '',
  description text not null default '',
  unique (item_id, page_number)
);

create table if not exists hukamnamas (
  id serial primary key,
  date date not null unique,
  ang text not null default '',
  title text not null default 'Hukamnama',
  image text not null default '',
  punjabi_text text not null default '',
  translation text not null default '',
  source text not null default '',
  published boolean not null default true,
  is_demo boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists hukamnamas_date_idx on hukamnamas (date desc);

create table if not exists galleries (
  id serial primary key,
  slug text not null unique,
  title text not null,
  description text not null default '',
  category text not null,
  date_label text not null default '',
  cover_image text not null default '',
  published boolean not null default true,
  is_demo boolean not null default false
);

create table if not exists gallery_images (
  id serial primary key,
  gallery_id integer not null references galleries(id) on delete cascade,
  image text not null,
  caption text not null default '',
  date_label text not null default '',
  sort_order integer not null default 0
);

create table if not exists videos (
  id serial primary key,
  title text not null,
  description text not null default '',
  youtube_url text not null default '',
  thumbnail text not null default '',
  event_date date,
  category text not null,
  duration text not null default '',
  published boolean not null default true,
  is_demo boolean not null default false
);

create table if not exists live_events (
  id serial primary key,
  title text not null,
  description text not null default '',
  event_date date,
  location text not null default '',
  youtube_url text not null default '',
  thumbnail text not null default '',
  is_live boolean not null default false,
  start_time text not null default '',
  end_time text not null default '',
  is_demo boolean not null default false
);

create table if not exists news (
  id serial primary key,
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  body text not null,
  image text not null default '',
  author text not null default 'Archive editor',
  published_at date not null default current_date,
  category text not null default 'Village',
  published boolean not null default true,
  is_demo boolean not null default false
);
create index if not exists news_published_idx on news (published_at desc);

create table if not exists contributions (
  id serial primary key,
  category text not null,
  description text not null,
  filename text not null default '',
  consent boolean not null default false,
  created_at timestamptz not null default now(),
  reviewed boolean not null default false
);

create table if not exists contact_messages (
  id serial primary key,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);
