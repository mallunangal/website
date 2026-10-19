insert into personalities (
  slug, name, photograph, birth_date, death_date, profession, education,
  biography, achievements, contributions, connection, sources, is_demo
) values (
  'jathedar-dalip-singh',
  'Jathedar Dalip Singh Ji',
  '/images/phulkari.jpg',
  'Not yet recorded',
  '',
  'Jathedar',
  'Not yet recorded',
  $bio$Jathedar Dalip Singh Ji (ਜਥੇਦਾਰ ਦਲੀਪ ਸਿੰਘ ਜੀ) is entered here as a personality of ਮੱਲੂ ਨੰਗਲ at the village archive’s own request.

A published life of a Jathedar of this name, tied to this village, was not found in the sources checked. Birth, death, family, and the offices he held are therefore left blank. They will be added when the family or a written record supplies them.

He is not identified on this page with Maharaja Dalip Singh, with Jathedar Dalip Singh Talwandi, or with any other published Dalip Singh. Those are different people.$bio$,
  $bio$Not yet recorded. Achievements will be added only from a named source.$bio$,
  $bio$Not yet recorded.$bio$,
  $bio$The village archive has asked that Jathedar Dalip Singh Ji be listed among the people of ਮੱਲੂ ਨੰਗਲ. The nature of that connection — birth, seva, or residence — has not yet been written down.$bio$,
  'Name supplied by the village archive, 16 October 2026. No published biography of a Jathedar Dalip Singh of Mallu Nangal was located.',
  false
)
on conflict (slug) do nothing;
