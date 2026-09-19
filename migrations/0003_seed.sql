insert into about_sections (slug, title, body, sort_order) values
('introduction', 'Introduction',
 $$Mallu Nangal is a village in Amritsar district, Punjab, India. In official Census of India records the settlement is also spelled Malu Nangal. This website is a public archive for the village’s history, families, religious life, photographs, and documents. Where a fact has not yet been verified by the archive, it is left blank or clearly marked as demo layout content.$$, 1),
('location', 'Location',
 $$Mallu Nangal lies in Amritsar district in the Majha region of Punjab. Census and village directories place it in Ajnala tehsil / the Harsha Chhina (Harsa Chhina) development block, with some records also naming Lopoke tehsil. The PIN code is 143101. Raja Sansi is recorded as the nearest town, about five kilometres away. Neighbouring villages named in public directories include Adliwala, Loharka Kalan, Ranewali, Jagdev Kalan and Loharka Khurd. Amritsar city is the district headquarters. GeoNames lists the populated place at approximately 31.75° N, 74.85° E, elevation about 230 metres.$$, 2),
('overview', 'Village overview',
 $$According to the Census of India 2011, Malu Nangal (village code 037396) had a population of 2,552 people living in 456 households — 1,349 males and 1,203 females, including 348 children aged 0–6. The recorded literacy rate is 58.5 percent. The village is a gram panchayat. Total geographical area is recorded as 428 hectares.$$, 3),
('culture', 'Culture',
 $$[Information to be added.] Language in daily life is Punjabi. Cultural practices, seasonal festivals, and local customs of Mallu Nangal will be published here only after they are documented by residents and reviewed by the archive.$$, 4),
('religious-heritage', 'Religious heritage',
 $$[Information to be added.] This archive will list gurdwaras and other places of worship in and around the village, together with verified histories, once families and sevadars have supplied sources. No religious narrative is invented for this page.$$, 5),
('education', 'Education',
 $$Public school directories record a government primary school at Mallu Nangal (GES / GPS Mallu Nangal, UDISE 03020300601) in Harsha Chhina block, established in 1925 and managed by the Department of Education, with classes 1 to 5. Village census notes also mention government pre-primary, primary, middle and secondary schools in the village. Further school histories, alumni, and photographs are invited through the Contribute page.$$, 6),
('agriculture', 'Agriculture',
 $$Census village data records 364 hectares of sown land, all irrigated by tube wells, with 64 hectares in non-agricultural use. Wheat, rice and maize are listed as the main crops. A fuller account of holdings, seasons, and change in farming practice will be added from local testimony.$$, 7),
('community', 'Community',
 $$[Information to be added.] Mallu Nangal is governed as a gram panchayat. Names of current and past sarpanches, societies, sports clubs, and seva groups will be published when they can be documented.$$, 8),
('places', 'Important places',
 $$[Information to be added.] A map of gurdwaras, schools, ponds, shamlat land, and other landmarks will be compiled with residents. Until then this section is a placeholder.$$, 9)
on conflict (slug) do nothing;

insert into history_articles (slug, title, excerpt, body, period, period_order, approx_year, image, sources, author, published_at, is_demo) values
('ancient-period-placeholder', 'Ancient period',
 'A reserved place on the timeline until archaeology or early sources for this landscape are documented.',
 $$[Information to be added.]

Demo Content — Replace with verified information.

The Majha countryside around Amritsar has a deep human past, but this archive does not attach Mallu Nangal to any dynasty, battle, or founding legend until a source can be cited. When inscriptions, land records, or oral histories with named informants are received, they will replace this card.$$,
 'Ancient Period', 1, '[To be added]', '/images/fields.jpg',
 'Placeholder pending primary sources.', 'Archive editor', '2026-09-16', true),
('early-settlement-placeholder', 'Early settlement',
 'How and when the village took its present name is not yet established in this archive.',
 $$[Information to be added.]

Demo Content — Replace with verified information.

The name Mallu Nangal (Census spelling Malu Nangal) is recorded in modern administrative lists. A careful settlement history — clans, migrations, and the meaning of the name — belongs here only with family genealogies, revenue records, or other cited evidence. Please use Contribute if you hold such papers.$$,
 'Early Settlement', 2, '[To be added]', '/images/village-lane.jpg',
 'Placeholder pending village records.', 'Archive editor', '2026-09-16', true),
('land-and-farming', 'Land and farming',
 'Census figures describe a fully irrigated agricultural village of wheat, rice and maize.',
 $$Public statistical sources, not local oral history, are the basis of this note.

The Census of India village abstract for Malu Nangal records a total area of 428 hectares. Of that, 364 hectares are sown and irrigated by boreholes / tube wells; 64 hectares are recorded as non-agricultural. Wheat, rice and maize are listed as the principal crops. Hours of agricultural power supply are noted in some directories as eight hours in summer and ten in winter; that figure should be re-checked with the local electricity record before it is treated as current.

This article will grow when farmers contribute photographs of fields, wells, and implements, with dates.$$,
 'Village Development', 3, '2011 record', '/images/fields.jpg',
 'Census of India 2011 village abstract for Malu Nangal (code 037396); public village directories repeating those figures.', 'Archive editor', '2026-09-16', false),
('schools-of-the-village', 'Schools of the village',
 'A government primary school at Mallu Nangal is recorded as opening in 1925.',
 $$Education is one of the few village institutions with a dated public record.

School directories list GES / GPS Mallu Nangal (UDISE 03020300601) in Harsha Chhina block, Amritsar district, established in 1925, co-educational, classes 1–5, managed by the Department of Education. Census notes also mention government pre-primary, middle and secondary schools in the village.

This archive invites photographs of school buildings, staff lists, and alumni memories — dated and attributed — so that a fuller school history can replace this short administrative note.$$,
 'Important Events', 4, '1925', '/images/school.jpg',
 'UDISE / public school directory entries for GES Mallu Nangal; Census of India 2011 amenities notes.', 'Archive editor', '2026-09-16', false),
('census-2011', 'The 2011 census record',
 'Population, households and literacy as enumerated in the last published census.',
 $$The Census of India 2011 is the most complete published statistical portrait of the village available to this archive.

Malu Nangal (village code 037396) was enumerated with 2,552 residents in 456 households: 1,349 males and 1,203 females. Children aged 0–6 numbered 348. Scheduled Caste population is recorded as 747. Literate population is recorded as 1,493 (literacy rate 58.5 percent in village directory summaries). There is no Scheduled Tribe population in the table.

These numbers describe one night of enumeration more than a decade ago. They are not a substitute for family histories, and they will be shown beside later counts when those are published.$$,
 'Modern Period', 5, '2011', '/images/archival-street.jpg',
 'Census of India 2011, village Malu Nangal, Amritsar district, Punjab.', 'Archive editor', '2026-09-16', false),
('present-day-setting', 'Mallu Nangal today',
 'Where the village sits in the Amritsar countryside, and what this archive still needs.',
 $$Mallu Nangal remains a gram panchayat village in Amritsar district, PIN 143101. Public maps place it north of Amritsar city, near Raja Sansi, with Sri Guru Ram Dass Jee International Airport a short aerial distance away. Neighbouring settlements named in directories include Adliwala, Loharka Kalan, Ranewali, Jagdev Kalan and Loharka Khurd.

This website is being assembled so that residents, not census tables, can tell the rest: gurdwaras, fields, streets, manuscripts, and the people who made the village. Until those contributions are reviewed, many pages will show “[Information to be added]” rather than guesswork.$$,
 'Present Day', 6, '2026', '/images/hero-village.jpg',
 'Census of India 2011; GeoNames (Mallu Nangal); public village directories for PIN, neighbours, and tehsil notes.', 'Archive editor', '2026-09-16', false)
on conflict (slug) do nothing;

insert into history_images (article_id, image, caption, sort_order)
select id, '/images/fields.jpg', 'Illustrative farmland photograph — not a surveyed field of Mallu Nangal.', 1
from history_articles where slug = 'land-and-farming'
and not exists (select 1 from history_images h where h.article_id = history_articles.id);

insert into history_images (article_id, image, caption, sort_order)
select id, '/images/school.jpg', 'Illustrative rural schoolyard — replace with a verified photograph of the village school.', 1
from history_articles where slug = 'schools-of-the-village'
and not exists (select 1 from history_images h where h.article_id = history_articles.id);

insert into personalities (slug, name, photograph, birth_date, death_date, profession, education, biography, achievements, contributions, connection, sources, is_demo)
values (
  'demo-personality-profile',
  'Demo personality profile',
  '/images/gurdwara.jpg',
  '[To be added]',
  '',
  '[Profession to be added]',
  '[To be added]',
  $$Demo Content — Replace with verified information.

This card exists so the personalities section has a layout to review. It is not a real biography and must not be read as a person from Mallu Nangal.

When a documented life is ready, the archive will publish: a verified name, a dated photograph with photographer or family credit, dates of birth and death, profession, education, a sourced biography, and the person’s connection to the village.$$,
  '[To be added]',
  '[To be added]',
  'Placeholder for a future, sourced biography of a person connected with Mallu Nangal.',
  'No historical source. Demo layout only.',
  true
)
on conflict (slug) do nothing;

insert into personality_photos (personality_id, image, caption, sort_order)
select id, '/images/archive-table.jpg', 'Demo additional photograph — replace with a documented portrait or work.', 1
from personalities where slug = 'demo-personality-profile'
and not exists (select 1 from personality_photos p where p.personality_id = personalities.id);

insert into archive_items (
  item_code, title, author, year_label, period, language, script, material, page_count,
  category, keywords, description, significance, source_owner, cover_image, references_text, is_demo
) values
('MN-MAN-0001', 'Demo manuscript — untitled binding',
 '[Author to be added]', '[Date to be added]', '[Period to be added]',
 '[Language to be added]', '[Script to be added]', '[Material to be added]', 2,
 'Manuscripts', 'demo, manuscript, placeholder',
 $$Demo Content — Replace with verified information.

Catalogue number MN-MAN-0001 is a working example of how a manuscript will appear in this archive. The cover and leaf photographs are studio and museum-style stand-ins. They are not a real pothi from Mallu Nangal and contain no religious text.

A finished record will include a unique ID, title, author, date or period, language, script, material, page count, description, historical significance, source or owner, and references — entered only from the object itself.$$,
 '[To be added]',
 '[Owner / source to be added]',
 '/images/manuscript-cover.jpg',
 'Demo object. Not a cited historical manuscript.',
 true),
('MN-MAN-0002', 'Demo manuscript — second catalogue card',
 '[Author to be added]', '[Date to be added]', '[Period to be added]',
 '[Language to be added]', '[Script to be added]', '[Material to be added]', 0,
 'Manuscripts', 'demo, manuscript',
 $$Demo Content — Replace with verified information.

MN-MAN-0002 shows a second manuscript card in the library grid. Pages have not been attached. Replace this record with a real catalogue entry when an original is photographed.$$,
 '[To be added]',
 '[Owner / source to be added]',
 '/images/archive-table.jpg',
 'Demo object.',
 true),
('MN-DOC-0001', 'Demo historical document',
 '[To be added]', '[To be added]', 'Modern Period',
 'Punjabi / English', '[To be added]', 'Paper', 0,
 'Historical Documents', 'demo, document',
 $$Demo Content — Replace with verified information.

This card stands in for land records, letters, school registers, and other papers. No document has been transcribed here.$$,
 '[To be added]',
 '[To be added]',
 '/images/archival-street.jpg',
 'Demo record.',
 true),
('MN-PHO-0001', 'Demo archival photograph',
 'Unknown photographer', '[To be added]', 'Modern Period',
 '', '', 'Photograph', 1,
 'Old Photographs', 'demo, photograph, village street',
 $$Demo Content — Replace with verified information.

An illustrative archival-style photograph used to show how old pictures will be catalogued. It is not identified as a street in Mallu Nangal. Families are invited to send dated prints with names of people and places.$$,
 '[To be added]',
 '[To be added]',
 '/images/archival-street.jpg',
 'Demo photograph.',
 true),
('MN-REC-0001', 'Demo village record',
 '[To be added]', '2011', 'Modern Period',
 'English', 'Latin', 'Digital copy of published statistics', 0,
 'Village Records', 'census, demo, statistics',
 $$A reminder card pointing to the published Census of India 2011 village tables for Malu Nangal. The census volumes themselves remain the source; this site is not an official census publication.$$,
 'Published official statistics summarised on the History pages.',
 'Census of India 2011',
 '/images/fields.jpg',
 'Census of India 2011, village code 037396.',
 true)
on conflict (item_code) do nothing;

insert into manuscript_pages (item_id, page_number, image, caption, description)
select id, 1, '/images/manuscript-page-01.jpg', 'Demo leaf — not a page of Gurbani or any identified text.',
 'Placeholder scan for the page viewer. Replace with a high-resolution photograph of the original leaf.'
from archive_items where item_code = 'MN-MAN-0001'
and not exists (select 1 from manuscript_pages m where m.item_id = archive_items.id and m.page_number = 1);

insert into manuscript_pages (item_id, page_number, image, caption, description)
select id, 2, '/images/manuscript-page-02.jpg', 'Demo leaf two — ornamental stains only, no readable verses.',
 'Placeholder scan. Zoom and fullscreen in the viewer are for layout testing.'
from archive_items where item_code = 'MN-MAN-0001'
and not exists (select 1 from manuscript_pages m where m.item_id = archive_items.id and m.page_number = 2);

insert into hukamnamas (date, ang, title, image, punjabi_text, translation, source, is_demo)
values (
  '2026-09-16',
  '[Ang to be added]',
  'Today''s Hukamnama',
  '/images/gurdwara.jpg',
  $$[Information to be added]

This space is reserved for the verified Punjabi text of the Hukamnama, entered by the archive administrator from a stated source. No Gurbani has been generated or guessed for this website.$$,
  $$[Information to be added]

Translation will appear here only when it accompanies a verified text and source. Until then this page is a layout demonstration, not a religious publication.

Demo Content — Replace with verified information.$$,
  '[Source to be added — for example the gurdwara and date of the hukamnama]',
  true
)
on conflict (date) do nothing;

insert into hukamnamas (date, ang, title, image, punjabi_text, translation, source, is_demo)
values (
  '2026-09-15',
  '[Ang to be added]',
  'Hukamnama archive entry',
  '/images/gurdwara.jpg',
  $$[Information to be added] Demo Content — Replace with verified information.$$,
  $$[Information to be added] A second date so the archive list has more than one row.$$,
  '[Source to be added]',
  true
)
on conflict (date) do nothing;

insert into galleries (slug, title, description, category, date_label, cover_image, is_demo) values
('village', 'Village streets and houses',
 'Demo album of rural Punjab scenes used until identified photographs of Mallu Nangal are received.',
 'Village', 'Demo album', '/images/village-lane.jpg', true),
('historical', 'Historical photographs',
 'A home for dated prints. The current pictures are illustrative, not identified village views.',
 'Historical', 'Demo album', '/images/archival-street.jpg', true),
('religious', 'Religious places',
 'Placeholder views of a village gurdwara. Replace with credited photographs of Mallu Nangal’s own buildings.',
 'Religious', 'Demo album', '/images/gurdwara.jpg', true),
('schools', 'Schools',
 'Illustrative schoolyard until a dated photograph of GES Mallu Nangal is contributed.',
 'Schools', 'Demo album', '/images/school.jpg', true),
('agriculture', 'Agriculture',
 'Fields in the Punjab countryside, standing in for Mallu Nangal farmland still to be photographed.',
 'Agriculture', 'Demo album', '/images/fields.jpg', true)
on conflict (slug) do nothing;

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/village-lane.jpg', 'Illustrative village lane — not identified as Mallu Nangal.', 'Demo', 1
from galleries where slug = 'village'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/hero-village.jpg', 'Illustrative village edge and fields.', 'Demo', 2
from galleries where slug = 'village'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id and g.sort_order = 2);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/archival-street.jpg', 'Demo archival-style photograph.', 'Demo', 1
from galleries where slug = 'historical'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/gurdwara.jpg', 'Illustrative village gurdwara — identity to be confirmed.', 'Demo', 1
from galleries where slug = 'religious'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/school.jpg', 'Illustrative rural school.', 'Demo', 1
from galleries where slug = 'schools'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/fields.jpg', 'Illustrative irrigated fields.', 'Demo', 1
from galleries where slug = 'agriculture'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/hero-village.jpg', 'Illustrative wheat landscape.', 'Demo', 2
from galleries where slug = 'agriculture'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id and g.sort_order = 2);

insert into videos (title, description, youtube_url, thumbnail, event_date, category, duration, is_demo) values
('Village event recording — to be added',
 'Demo Content — Replace with a YouTube link to a verified recording from Mallu Nangal. This card shows how events will appear in the archive.',
 '', '/images/hero-village.jpg', null, 'Village Events', '', true),
('Religious occasion — to be added',
 'Demo Content — Replace with a credited recording. No religious video has been published yet.',
 '', '/images/gurdwara.jpg', null, 'Religious Events', '', true),
('Fields and seasons — to be added',
 'Demo Content — A place for documentaries and interviews once they are uploaded to YouTube and reviewed.',
 '', '/images/fields.jpg', null, 'Documentaries', '', true);

insert into live_events (title, description, event_date, location, youtube_url, thumbnail, is_live, start_time, end_time, is_demo)
values (
  'Next village gathering',
  'When a live stream is arranged, an administrator will paste the YouTube Live address and mark the event as live. Until then this page stays quiet.',
  null,
  'Mallu Nangal',
  '',
  '/images/gurdwara.jpg',
  false,
  '',
  '',
  true
);

insert into news (slug, title, excerpt, body, image, author, published_at, category, is_demo) values
('a-digital-archive-opens', 'A digital archive for Mallu Nangal',
 'This website is being built as a public home for the village’s documents, photographs, and memory.',
 $$The pages you are reading are the beginning of a village archive, not a finished history book.

What is already on record — census figures, the location of the village, the 1925 primary school — is cited. What is not yet documented is left open. Families are asked to contribute old photographs, manuscripts, and named memories through the Contribute page. Nothing sent there is published until it has been reviewed.

Demo layout photographs on several pages are labelled as such and will be replaced by pictures taken in Mallu Nangal.$$,
 '/images/archive-table.jpg', 'Archive editor', '2026-09-16', 'Archive', false),
('share-old-photographs', 'Share old photographs and family papers',
 'Prints, pothis, school records and oral histories can be offered to the archive for review.',
 $$If you have a photograph of a street, a wedding, a field, a school class, or an elder, or if you hold a manuscript or land paper connected with Mallu Nangal, you can describe it on the Contribute page.

Please do not send the only original of a manuscript through an untrusted channel. Note what you have; the archive can arrange a safer copy. Submissions stay in a review queue and are not shown on the public site automatically.$$,
 '/images/archival-street.jpg', 'Archive editor', '2026-09-12', 'Appeal', false)
on conflict (slug) do nothing;
