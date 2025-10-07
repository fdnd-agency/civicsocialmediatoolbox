## Contributing

### Teamcanvas
Link: https://www.figma.com/design/UXiqG10cxHdC7UyC0y4ttG/Civic-social-media-toolbox?node-id=0-1&t=1aGN7w1aedGSfz08-1

### Samenwerkingsafspraken
- Documentatie: Leg het proces van elke taak vast in de project board (issues), zodat iedereen het kan raadplegen.
- Issue niet afsluiten totdat duidelijk is beschreven wat met de taak is gedaan
- Plaatsen van comments in code zodat anderen begrijpen wat er is gedaan
- Eigen verantwoording dragen voor je eigen werk
- Bronnen vermelden bij het vinden van nieuwe materiaal
- MOSCOW methode/taak nummeren op moeilijkheidsgraad (nummers 1,2,3,5,8) gebruiken
- Dagelijks bereikbaar zijn + reageren op pull requests.
- Gebruik per pull request 1 feature. Als er meerdere feauters/pull request naar de dev-branch zijn gestuurd kunnen die naar de main. 
- Communicatie verloopt via teams

### Code conventies
#### SvelteKit
* Maak nieuwe file aan voor components die hergebruikt
* Fetch data altijd via een +page.server.js bestand


#### Html/css
* We gebruiken sematisch code
* Maak gebruik van kebab-case
* Gebruik dezelfde classes voor animaties die je wilt hergebruiken voor DRY code.
* Naamgeving in het engels.

#### Javascript
* Gebruik `const`/`let` en geen `var`
* Maak gebruik van camelCase 

#### Animaties
* Alle animatie classes beginnen met .animation

  
#### Gitflow
- We werken deze sprints volgens de Git Flow workflow strategie: 
<img width="559" height="648" alt="Scherm­afbeelding 2025-09-22 om 14 49 45" src="https://github.com/user-attachments/assets/0568b305-f1d8-4c78-962b-0f9d34342331" />

<hr>

### Hoe maak je een goede Pull Request?

Verzin eerst een duidelijke titel die relevant is voor het onderdeel dat je hebt gemaakt, zoals "Menu" of "Footer".
Schrijf vervolgens een korte beschrijving van wat je hebt gedaan en geef aan wat je wilt dat wij testen. Vermeld ook specifiek waar je feedback op wilt hebben, bijvoorbeeld of we de responsiveness moeten testen of juist diep in de code moeten kijken op onnodige of overbodige code.
Voeg daarnaast altijd visuele ondersteuning toe, zoals afbeeldingen, GIFs of korte video’s. Zo kunnen we zien wat je hebt gedaan en hoe het getest kan worden, bijvoorbeeld een filmpje van de responsiveness, een animatie van characters, of een screenshot van het uiteindelijke resultaat.
Do’s

De pull request moet één specifiek onderdeel behandelen, zoals een menu, een footer of een animatie van de characters. Hoe kleiner en overzichtelijker de pull request, hoe beter.
Geef je commits duidelijke en relevante namen, bijvoorbeeld "filter" of "animatie toegevoegd", zodat reviewers direct kunnen zien wat er in elke commit is gedaan en gemakkelijk kunnen controleren waar ze feedback op moeten geven.
Don’ts
Maak geen pull request van een hele pagina of meerdere onderdelen tegelijk. Te lange pull requests zijn minder overzichtelijk en maken het moeilijker om te reviewen en kunnen bugs veroorzaken.

<hr>

### Pullrequest templet
 
Resolves issue #!!!
 
<!-- A PR should have enough detail to be understandable far in the future. e.g what is the problem/why is the change needed, how does it solve it and any questions or points of discussion. Prefer copying information from a GitHub issue over linking to it; the card may not always exist and reviewers may not have access to the board. -->
 
[livesite](https://livesite.com)
 
## How Has This Been Tested?
 
- [ ] User test

- [ ] Accessibility test

- [ ] Performance test

- [ ] Responsive Design test

- [ ] Device test

- [ ] Browser test
 
## Images
 
<!-- Usually only applicable to UI changes, what did it look like before and what will it look like after? -->
 
 
Pullrequest templet
 
