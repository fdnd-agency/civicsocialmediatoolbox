export async function load({ url }) {
  const roadmapResponse = await fetch('https://fdnd-agency.directus.app/items/Roadmap');
  const roadmapJson = await roadmapResponse.json();

  return {
    items: roadmapJson.data ?? []
  };
}
