<script>
    import logoUrl from '$lib/assets/logo-text.svg?url';
    export let title = "CIVIC INTERACTION DESIGN";
    export let subtitle = "Research Group";
</script>


<header class="header">
    <div class="header-left">
        <img src={logoUrl} alt="Civic Interaction Design logo" class="logo-text" />
        <div class="vertical-line"></div>
    </div>

    <button class="hamburger" popovertarget="my-popover">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <nav popover id="my-popover" >
        <ul>
            <li>
                <a href="">Home</a>
            </li>

            <li>
                <a href="">Civic Social Media Roadmap</a>
            </li>

            <li>
                <a href="">Design principles voor civic social media</a>
            </li>

            <li>
                <a href="">Ontwerpprincipes</a>
            </li>

            <li>
                <a href="">Community archetypes</a>
            </li>
        </ul>
    </nav>
</header>

<style>


    header {
        background-color: #ebdac5;
        display: flex;
        align-content: flex-start;
        align-items: center;
        padding: 10px 30px;
        min-height: 80px;
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        margin-left: 10px;
    }

    .logo-text {
        width: 350px;
        height: auto;
    }

    .hamburger {
        position: absolute;
        top: 60px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #0c3951;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .hamburger span {
        display: block;
        height: 2px;
        background-color: #fff;
        margin: 4px ;
    }

    .hamburger span:nth-child(1),
    .hamburger span:nth-child(3) {
        width: 30px;
    }

    .hamburger span:nth-child(2) {
        width: 40px;
    }

    /* Larger screens */
    @media (min-width: 768px) {
        .header {
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding: 0 20px;
            text-align: left;
            gap: 20px;
        }

        .logo-text {
        width: 600px;
        height: auto;
        }

        .hamburger {
            top: 13%;
            right: 70px;
            width: 60px;
            height: 60px;
            transform: translateY(-50%);
        }

        .hamburger span {
            width: 26px;
            height: 3px;
            margin: 4px 0;
        }

        .hamburger span:nth-child(1),
        .hamburger span:nth-child(3) {
        width: 35px;
        }

        .hamburger span:nth-child(2) {
        width: 45px;
        }
    }
</style>
