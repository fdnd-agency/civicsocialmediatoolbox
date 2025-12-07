<main class="form-container">
    <h1>1. Begrijpen</h1>

    <p>
        Dit is de eerste activiteit van de toolkit: Volg de stappen om naar de
        tweede activiteit te gaan.
    </p>

    <p>
        Begin met een onderzoeksvraag. Welke gemeenschap wil je beter begrijpen?
    </p>

    <form>
        <label>
            <input type="text" required placeholder="Geef uw antwoord.." />
        </label>

        <div class="button-wrapper">
            <button id="submit-button">Submit</button>
        </div>
    </form>
</main>

<style>
    .form-container {
        padding: 2em;
        container-type: inline-size;

        form {
            margin-top: 3em;
            display: flex;
            flex-direction: column;
            gap: 1.5em;
            position: relative;

            label {
                width: 100%;

                input {
                    width: 100%;
                    height: 10em;
                    padding: 0.5em;
                    border: 1px solid var(--neutral-color-grey-400);
                    border-radius: var(--radius-1);
                    font-size: var(--fs-medium);
                    font-family: inherit;
                    color: var(--neutral-color-black);
                    background-color: var(--neutral-color-white);
                    transition:
                        border-color 0.3s ease,
                        box-shadow 0.3s ease;
                }

                input:focus {
                    outline: none;
                    border-color: var(--primary-color-beige);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }
            }

            .button-wrapper {
                display: flex;
                justify-content: flex-end;
            }

            #submit-button {
                background-color: var(--primary-color-deep-blue);
                color: var(--neutral-color-white);
                padding: 0.7em 2em;
                border-radius: var(--radius-1);
                border: none;
                cursor: pointer;
                font-family: inherit;
                font-size: var(--fs-medium);
                transition:
                    background-color 0.3s ease,
                    box-shadow 0.3s ease;
            }

            #submit-button:hover {
                background-color: var(--secondary-color-deep-light-blue-500);
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }

            /* prefers-reduced-motion */
            @media (prefers-reduced-motion: reduce) {
                #submit-button,
                input {
                    transition: none;
                    box-shadow: none;
                }
            }

            /* prefers-contrast: more */
            @media (prefers-contrast: more) {
                #submit-button {
                    border: 2px solid var(--neutral-color-black);
                    background-color: var(--neutral-color-grey-700);
                    color: var(--neutral-color-white);
                }

                input {
                    border: 2px solid var(--neutral-color-black);
                    background-color: var(--neutral-color-white);
                    color: var(--neutral-color-black);
                }
            }

            /* prefers-reduced-transparency */
            @media (prefers-reduced-transparency: reduce) {
                .form-container {
                    background-color: var(--neutral-color-white);
                }
            }
        }

        @container (width >= 60rem) {
            padding: 2em 4em;
        }
    }
</style>
