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

### Spacings and tabs

- Use a tab size of 4. In VS Code, go to Settings and search for “tab”, then set it to 4.
- Use one line break between grouped HTML elements and CSS selectors
- Add a line break after a CSS selector.
- Nest media queries and container queries.


#### ⛔️ Bad example
```html
<body>
<nav>
<ul><li>
<a href="/">Home</a></li>
<li><a href="/contact.html">Contact</a></li></ul>
</nav>
<h1>Eerste kop</h1>
     <p>Welkom op deze
     <strong>website</strong>.
     </p>
         <p><a
        href="/pagina-2.html"
        class="button">Lees verder
        </a>
        </p>
    <footer>
     <p>en routekaart voor de ontwikkeling van sociale media die veilig en betrouwbaar
</p>
  </footer>
</body>
```

#### ✅ Good example

```html
<body>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact.html">Contact</a></li>
        </ul>
    </nav>

    <h1>Civic Social media</h1>
    <p class="intro">Het Civic Social Media-project richt zich op het onderzoeken</p>
    <p><a href="/pagina-2.html" class="button">Lees verder</a></p>

    <footer>
        <p>Een routekaart voor de ontwikkeling van sociale media die veilig en betrouwbaar</p>
    </footer>
</body>
```

I updated the contributing.md file. 
  
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

## DoR en DoD
DoR: dit zijn de criteria om te bepalen of een taak of userstory klaar is voor de team om aan te pakken
 
DoD: dit is de benchmark om te evalueren wanneer een taak of userstory voltooid is.

## DOR:
De userstory heeft het format ( Als gebruiker... )
De userstory is gepokerd.
Moscow gebruiken
 
## DOD:
Gemerged naar dev
De userstory is getest
De userstory heeft dev link
Meet de wens van de opdrachtgever

## Refinement:
Refinement: is een doorlopende activiteit in scrum waarbij het product backlog wordt verfijnd om het product backlog klaar te maken voor toekomstige sprints.

## Verloop van een sprint
## Week 1: 
Sprint planning, DOR, DOD, epic, refinement, moscow, poker, standup.
## Week 2:
user story, standup.
## Week 3:
sprint review, retrospective, warp up, standup.
 
