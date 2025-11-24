
export async function load() {
    const API = "https://fdnd-agency.directus.app/items/Card";
    const fields = "?fields=id,title,categorie,posterimage,body,subtitle";

    // filter → returns all cards that contain "ontwerp" in title
    const filter = "&filter[title][_icontains]=Ontwerpprincipe";

    const response = await fetch(API + fields + filter);
    const cardData = await response.json();

    return {
        cards: cardData.data
    };
}