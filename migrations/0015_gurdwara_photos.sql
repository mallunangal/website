update history_articles
set image = '/images/gurdwara-exterior-hero.jpg'
where slug = 'brief-history';

update history_articles
set body = replace(
  body,
  'The exact date of its original construction, and the earliest surviving documentary record of the shrine, have not been established by the sources examined.',
  'The exact date of its original construction, and the earliest surviving documentary record of the shrine, have not been established by the sources examined. Photographs of the gurdwara, supplied for this archive in October 2026, are shown below and in the gallery. They are not dated on the prints, and they are not offered as proof of the measurements in Punjab Kosh.'
)
where slug = 'brief-history'
  and body not like '%supplied for this archive in October 2026%';

insert into history_images (article_id, image, caption, sort_order)
select id, '/images/gurdwara-exterior.jpg',
  'Gurdwara Sahib, ਮੱਲੂ ਨੰਗਲ. Photograph supplied for the archive, October 2026.',
  1
from history_articles where slug = 'brief-history'
and not exists (
  select 1 from history_images h
  where h.article_id = history_articles.id and h.image = '/images/gurdwara-exterior.jpg'
);

insert into history_images (article_id, image, caption, sort_order)
select id, '/images/gurdwara-interior.jpg',
  'The inner hall of Gurdwara Sahib. Photograph supplied for the archive, October 2026.',
  2
from history_articles where slug = 'brief-history'
and not exists (
  select 1 from history_images h
  where h.article_id = history_articles.id and h.image = '/images/gurdwara-interior.jpg'
);

insert into history_images (article_id, image, caption, sort_order)
select id, '/images/gurdwara-earlier.jpg',
  'An earlier photograph of the gurdwara building. No date is written on the print.',
  3
from history_articles where slug = 'brief-history'
and not exists (
  select 1 from history_images h
  where h.article_id = history_articles.id and h.image = '/images/gurdwara-earlier.jpg'
);

update about_sections
set body = replace(
  body,
  'This archive does not yet hold a photograph, an inscription, or a foundation date.',
  'Photographs supplied in October 2026 are on the History page, the Hukamnama page, and in the gallery. An inscription and a foundation date are still not on record.'
)
where slug = 'religious-heritage';

update about_sections
set body = replace(
  body,
  'This archive has no photograph and no foundation date.',
  'Photographs supplied in October 2026 are in the gallery. A foundation date is still not on record.'
)
where slug = 'places';

insert into galleries (slug, title, description, category, date_label, cover_image, published, is_demo)
values (
  'gurdwara-sahib',
  'Gurdwara Sahib',
  'Photographs of Gurdwara Sahib at ਮੱਲੂ ਨੰਗਲ, supplied for the archive in October 2026. The earlier print has no date written on it.',
  'Religious',
  '2026',
  '/images/gurdwara-exterior.jpg',
  true,
  false
)
on conflict (slug) do nothing;

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/gurdwara-exterior.jpg',
  'Gurdwara Sahib, ਮੱਲੂ ਨੰਗਲ. Photograph supplied for the archive.',
  '2026', 1
from galleries where slug = 'gurdwara-sahib'
and not exists (
  select 1 from gallery_images g where g.gallery_id = galleries.id and g.image = '/images/gurdwara-exterior.jpg'
);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/gurdwara-interior.jpg',
  'The inner hall of Gurdwara Sahib. Photograph supplied for the archive.',
  '2026', 2
from galleries where slug = 'gurdwara-sahib'
and not exists (
  select 1 from gallery_images g where g.gallery_id = galleries.id and g.image = '/images/gurdwara-interior.jpg'
);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/gurdwara-earlier.jpg',
  'An earlier photograph of the gurdwara. No date is written on the print.',
  '', 3
from galleries where slug = 'gurdwara-sahib'
and not exists (
  select 1 from gallery_images g where g.gallery_id = galleries.id and g.image = '/images/gurdwara-earlier.jpg'
);
