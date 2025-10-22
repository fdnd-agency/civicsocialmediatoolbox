<script>
    import logoUrl from "$lib/assets/logo-text.svg?url";
</script>

<slot />
<!-- This renders the page content -->

<footer>
    <div class="left-content">
    <ul class="contact-info">
        <li class="project-title">CIVIC SOCIAL MEDIA</li>
        <li>Jorgen Karskens | Project Manager</li>
        <li>
            <a href="mailto:j.r.karskens@hva.nl" class="email"
                >j.r.karskens@hva.nl</a
            >
        </li>
    </ul>

    <ul class="project-links">
        <li><a href="/about" class="link">About this project</a></li>
        <li><a href="/partners" class="link">Partners</a></li>
    </ul>
    </div>

    <img src={logoUrl} alt="Civic Interaction Design logo" class="logo-text" />
</footer>

<style>
    /* === MOBILE FIRST === */
    footer {
        background-color: #000;
        color: #fff;
        padding: 30px 25px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .left-content {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 13px;
        line-height: 1.5em;
    }

    .project-title {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 10px;
    }

    .email {
        color: #fff;
        text-decoration: none;
    }

    .email:hover {
        text-decoration: underline;
    }

    .project-links {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .link {
        color: #fff;
        font-size: 15px;
        text-decoration: underline;
    }

    .link:hover {
        opacity: 0.85;
    }

    .logos {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 15px;
    }

    .logo-text {
        margin-top: 30px;
        width: 270px;
        height: auto;
        filter: invert(100%);
    }

    /* === TABLET & DESKTOP === */
    @media (min-width: 768px) {
        footer {
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-end;
            padding: 30px 40px;
            gap: 0px;
        }

        .left-content {
            flex-direction: column;
            gap: 20px;
            margin-right: auto;

        }

        .contact-info {
            flex-grow: 0;
            font-size: 14px;
        }

        .project-links {
            flex-direction: row;
            gap: 30px;
        }

        .link {
            font-size: 18px;
        }

        .logo-text {
            width: 400px;
            margin-top: 0;
            flex-shrink: 0;
            margin-bottom: 25px;
            margin-right: 100px;
        }
    }
</style>
