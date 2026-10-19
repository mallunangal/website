update personalities
set
  photograph = '/images/jathedar-dalip-singh-portrait.jpg',
  sources = 'Name and photographs supplied by the village archive, October 2026. No published biography of a Jathedar Dalip Singh of Mallu Nangal was located. The portrait carries a studio mark; it is not treated here as a verified date.'
where slug = 'jathedar-dalip-singh';

insert into personality_photos (personality_id, image, caption, sort_order)
select id, '/images/jathedar-dalip-singh-portrait.jpg',
  'Portrait of Jathedar Dalip Singh Ji, supplied for this archive. A studio mark in the corner appears to name Amritsar.',
  1
from personalities
where slug = 'jathedar-dalip-singh'
and not exists (
  select 1 from personality_photos p
  where p.personality_id = personalities.id
    and p.image = '/images/jathedar-dalip-singh-portrait.jpg'
);

insert into personality_photos (personality_id, image, caption, sort_order)
select id, '/images/jathedar-dalip-singh-reading.jpg',
  'Jathedar Dalip Singh Ji reading a pothi. Photograph supplied for this archive.',
  2
from personalities
where slug = 'jathedar-dalip-singh'
and not exists (
  select 1 from personality_photos p
  where p.personality_id = personalities.id
    and p.image = '/images/jathedar-dalip-singh-reading.jpg'
);
