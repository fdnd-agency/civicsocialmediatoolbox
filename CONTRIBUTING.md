# Contributing

## Teamcanvas
<img width="941" height="663" alt="Scherm­afbeelding 2026-01-21 om 15 39 23" src="https://github.com/user-attachments/assets/708bec15-30ab-470d-862f-332c9c533ee2" />

## Designs
Link to the Designs: 
- [General Design](https://www.figma.com/design/UXiqG10cxHdC7UyC0y4ttG/Civic-social-media?node-id=119-2&t=LiMCCsbHmN49gzNP-1)
- [Design of the toolkit](https://www.figma.com/design/mflwKnq2xf6zJ71hHJP87K/Civicsocialmedia---Toolbox?node-id=0-1&t=Nk3DzRacYY0QjaCt-1)
- [Styleguide of Civic Social Media](https://www.figma.com/design/Ol8swbk5xbS5EWyOvNfVnV/Civic-Social-Media---style-guide-and-assets?node-id=1-7558&t=bPBh9ahW2Zcj2o4o-1)


## Collaboration agreements
- Documentation: Record the process for each task in the project board (issues) so that everyone can consult it.
- Do not close an issue until it is clear what has been done with the task.
- Place comments in the code so that others understand what has been done.
- Take responsibility for your own work.
- Cite sources when finding new material.
- Use the MOSCOW method/task as a label.
- Use in Estimate in the project board to fill in the difficulty based on numbers 1, 2, 3, 5, 8.
- Be available daily and respond to pull requests.
- Use 1 feature per pull request. If multiple features/pull requests have been sent to the dev branch, they can be sent to the main branch.
- Communication takes place via teams.
- Use clear commit descriptions in English. Link to the corresponding issue. Example: `#123 #202 Added buttons for next page and previous page`

## Code conventions
These code conventions are based on the [FDND Code conventions](https://docs.fdnd.nl/conventies.html#algemene-code-conventions)

#### SvelteKit
* Create a new file for reusable components
* Always fetch data via a +page.server.js file


#### HTML/CSS
* We use semantic code
* Use kebab-case
* Use the same classes for animations that you want to reuse for DRY code.
* Use English naming conventions.

#### Javascript
* Use `const`/`let` and not `var`
* Use camelCase 

#### Animations
* All animation classes start with .animation

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
- We work these sprints according to the Git Flow workflow strategy: 
<img width="559" height="648" alt="Scherm­afbeelding 2025-09-22 om 14 49 45" src="https://github.com/user-attachments/assets/0568b305-f1d8-4c78-962b-0f9d34342331" />


## How to create a good Pull Request?

First, come up with a clear title that is relevant to the component you have created, such as “Menu” or “Footer.”
Then write a short description of what you have done and indicate what you want us to test. Also specify what you want feedback on, for example, whether we should test the responsiveness or look deep into the code for unnecessary or redundant code.
Always add visual support, such as images, GIFs, or short videos. This allows us to see what you have done and how it can be tested, for example, a video of the responsiveness, an animation of characters, or a screenshot of the final result.

#### Do's
- The pull request should cover one specific part, such as a menu, a footer, or an animation of the characters. The smaller and clearer the pull request, the better.
- Give your commits clear and relevant names, such as “filter” or “animation added,” so reviewers can immediately see what has been done in each commit and easily check what they need to provide feedback on.

#### Don'ts
- Do not make a pull request for an entire page or multiple components at once. Pull requests that are too long are less clear, make it more difficult to review, and can cause bugs.


## Pullrequest template
 
Resolves issue #
 
<!-- A PR should have enough detail to be understandable far in the future. e.g what is the problem/why is the change needed, how does it solve it and any questions or points of discussion. Prefer copying information from a GitHub issue over linking to it; the card may not always exist and reviewers may not have access to the board. -->
 
[livesite](https://livesite.com)
 
#### How Has This Been Tested?
- [ ] User test
- [ ] Accessibility test
- [ ] Performance test
- [ ] Responsive Design test
- [ ] Device test
- [ ] Browser test
 
#### Images
 
<!-- Usually only applicable to UI changes, what did it look like before and what will it look like after? -->

## Create a new branch
1. Create an issue.
2. Under development, click on ‘Create a branch for this issue or link a pull request.’
3. Leave the same name as the name of the issue.
4. Under ‘Branch source’, select the dev branch.
5. Under ‘What's next’, select Open branch with GitHub Desktop.


## DoR and DoD
DoR: these are the criteria for determining whether a task or user story is ready for the team to tackle
 
DoD: this is the benchmark for evaluating when a task or user story is complete.

### DOR:
- The user story has the format (As a user...)
- The user story has been pokerized.
- Use Moscow
 
### DOD:
- Merged to dev
- The user story has been tested
- The user story has a dev link
- Meets the client's requirements


## Sprint process
Refinement: is an ongoing activity in Scrum in which the product backlog is refined to prepare it for future sprints.

#### Week 1: 
- Sprint planning, DOR, DOD, epic, refinement, Moscow, poker, standup.
  
#### Week 2:
- User story, standup.
  
#### Week 3:
- Sprint review, retrospective, wrap up, standup.
 
