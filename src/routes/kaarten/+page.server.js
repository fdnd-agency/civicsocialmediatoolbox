export async function load({ fetch }) {
  const API = "https://fdnd-agency.directus.app/items/Card";
  const fields = "?fields=id,title,categorie,posterimage,body,subtitle";

  // 1️⃣ Ontwerpprincipes
  const ontwerpFilter = "&filter[title][_icontains]=Ontwerpprincipe";
  const ontwerpRes = await fetch(API + fields + ontwerpFilter);
  const ontwerpData = await ontwerpRes.json();

  // 2️⃣ Archetypes
  const archetypeFilter = "&filter[id][_in]=9,10,11,12,13,14";
  const archetypeRes = await fetch(API + fields + archetypeFilter);
  const archetypeData = await archetypeRes.json();

  return {
    ontwerpprincipesCards: ontwerpData.data,
    archetypeCards: archetypeData.data
  };
}
