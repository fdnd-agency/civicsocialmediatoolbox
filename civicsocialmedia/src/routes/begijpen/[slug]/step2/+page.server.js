// this runs on the server only. we call Directus here, then send data to the page.
import { error } from '@sveltejs/kit';

const API = 'https://fdnd-agency.directus.app'; // base url for Directus

// tiny helper: what data we want for each slug
// slug = the part in the url after /begijpen/ (like "archetype" or "care")
function filtersFor(slug) {
  // /begijpen/archetype  or /begijpen/archetypes
  if (slug === 'archetype' || slug === 'archetypes') return { categorie: 'archetype' };

  // /begijpen/ontwerpprincipe  or /begijpen/ontwerpprincipes
  if (slug === 'ontwerpprincipe' || slug === 'ontwerpprincipes') return { categorie: 'ontwerpprincipe' };

  // /begijpen/care  (just a specific archetype)
  if (slug === 'care') return { categorie: 'archetype', title: 'Care' };

  // anything else → we don’t know it
  return null;
}

export async function load({ params, fetch }) {
  // get the slug from the url and make it lowercase just in case
  const slug = (params.slug || '').toLowerCase();

  // figure out which filter we need for this slug
  const f = filtersFor(slug);
  if (!f) throw error(404, 'Unknown page'); // we don’t know this slug → 404

  // we ask Directus for the fields we need.
  // IMPORTANT: include "body" so the page doesn’t need to fetch again.
  const qs = new URLSearchParams({
    fields: 'id,title,subtitle,categorie,body,posterimage',
    sort: 'id',
    limit: '100'
  });

  // add filters like filter[categorie][_eq]=archetype.
  for (const [k, v] of Object.entries(f)) {
    qs.append(`filter[${k}][_eq]`, String(v));
  }

  // call Directus: /items/Card?{fields...&filters...}
  const res = await fetch(`${API}/items/Card?${qs.toString()}`);
  if (!res.ok) throw error(res.status, 'Failed to load cards'); // api error → fail

  // get the data array from Directus response
  const { data } = await res.json();
  if (!data?.length) throw error(404, 'No cards found'); // nothing to show

  // we return the items to the page.
  // also send assets base url so the page can build image urls like `${assets}/${posterimage}`
  return {
    items: data,
    assets: `${API}/assets`,
    slug
  };
}
