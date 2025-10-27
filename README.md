# Civic social media

## About
Het Civic Social Media-project van het lectoraat Civic Interaction Design van de Hogeschool van Amsterdam richt zich op het onderzoeken, ontwerpen en promoten van digitale platforms die leden van de gemeenschap in staat stellen om veilig en betrouwbaar te communiceren, samen te werken en informatie uit te wisselen.

## Over het project
Bij dit project hebben zijn er verschillende producten ontwikkeld die ontwerpers en beleidsmakers helpen om Civic Social Media te ontwikkelen en ontwerpen. Deze zijn uitgewerkt in PDF's en te downloaden op onze website. Het doel van dit project is het transformeren van deze PDF-documenten naar een interactieve, toegankelijke online-ervaring die gebruikers inspireert en in staat stelt om Civic Social Mediaconcepten toe te passen in hun eigen context.

[Live link](https://civicsocialmedia.netlify.app/)

## Componenten
De homepagina bevat een aantal linkjes naar verdere informatie om een social media platform te ontwerpen en ontwikkelen. We hebben de website gebouwd met herbruikbare componenten zoals de buttons:

```Sveltekit
<script>
  export let href = "/";
</script>

<a href={href} class="btn">
  <slot>Lees meer</slot>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14m0 0-5-5m5 5-5 5"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</a>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
</style>
```

## Images

<img width="493" height="574" alt="Scherm­afbeelding 2025-10-07 om 22 03 13" src="https://github.com/user-attachments/assets/2ba99866-d9b4-4712-bf3e-c7429a310cc1" />





## Basic installation Sveltekit

Om aan het project te werken kan je het project clonen. Installeer de dependencies na het forken met `npm install` om een server op te starten:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

