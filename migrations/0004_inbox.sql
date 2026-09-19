alter table contributions add column if not exists sender_name text not null default '';
alter table contributions add column if not exists sender_email text not null default '';
alter table contributions add column if not exists sender_phone text not null default '';

alter table contact_messages add column if not exists sender_name text not null default '';
alter table contact_messages add column if not exists sender_email text not null default '';
alter table contact_messages add column if not exists sender_phone text not null default '';

insert into galleries (slug, title, description, category, date_label, cover_image, is_demo) values
('people', 'People of the village',
 'Portraits will be published with names, dates and family credit. This album is a layout study until those prints arrive.',
 'People', 'Demo album', '/images/courtyard.jpg', true),
('events', 'Village events',
 'Weddings, gatherings and public occasions — labelled when photographs can be dated and identified.',
 'Events', 'Demo album', '/images/gurdwara.jpg', true),
('old-photographs', 'Old photographs',
 'A drawer for prints that predate colour film. Current pictures are illustrative, not identified streets.',
 'Old Photographs', 'Demo album', '/images/archival-street.jpg', true),
('festivals', 'Festivals',
 'Seasonal and religious festivals of Mallu Nangal will be filed here once residents contribute dated photographs.',
 'Festivals', 'Demo album', '/images/phulkari.jpg', true),
('village-development', 'Village development',
 'Roads, ponds, schools and new building. Placeholder landscapes until survey photographs are offered.',
 'Village Development', 'Demo album', '/images/mustard-fields.jpg', true)
on conflict (slug) do nothing;

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/courtyard.jpg', 'Illustrative courtyard — not identified as a house in Mallu Nangal.', 'Demo', 1
from galleries where slug = 'people'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/phulkari.jpg', 'Phulkari textile study for festival colour — not a dated village object.', 'Demo', 1
from galleries where slug = 'festivals'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/mustard-fields.jpg', 'Illustrative mustard fields of the Majha countryside.', 'Demo', 1
from galleries where slug = 'village-development'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/archival-street.jpg', 'Demo archival-style print.', 'Demo', 1
from galleries where slug = 'old-photographs'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id);

insert into gallery_images (gallery_id, image, caption, date_label, sort_order)
select id, '/images/gurdwara.jpg', 'Illustrative gathering place — identity to be confirmed.', 'Demo', 1
from galleries where slug = 'events'
and not exists (select 1 from gallery_images g where g.gallery_id = galleries.id);

update personalities
set photograph = '/images/courtyard.jpg'
where slug = 'demo-personality-profile' and is_demo = true;
