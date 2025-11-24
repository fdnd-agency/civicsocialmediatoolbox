export async function load({ url }) {
    
    const API = 'https://fdnd-agency.directus.app/items/Card';
    const fields = "?fields=id,title,categorie,posterimage,body,subtitle";
    const filter = "&filter[id][_in]=9,10,11,12,13,14";


    // Converting to JSON
    const cardResponse = await fetch(API + fields + filter);
    const cardData = await cardResponse.json();

    console.log(cardData);

    return {
        cards: cardData.data,
    };
}