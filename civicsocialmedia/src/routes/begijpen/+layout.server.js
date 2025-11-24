
export async function load({ fetch }) {
  // Data from Directus API
  const toolkitUrl = 'https://fdnd-agency.directus.app/items/Toolkit';
  const fields = 'fields=id,title,subtitle,body';

  //  data to json
  const toolkitResponse = await fetch(`${toolkitUrl}?${fields}`);
  const toolkitData = await toolkitResponse.json();
  return {
    toolkitItems: toolkitData.data ?? []
  };
}
