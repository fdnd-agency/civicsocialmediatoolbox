<script>
  export let title = "CIVIC INTERACTION DESIGN";
  export let subtitle = "RESEARCH GROUP";
  export let logoSrc = "/logo-of-amsterdam.png";
  
</script>

<header class="header">
    <div class="header-left">
        <section class="header-text">
            <h1>CIVIC INTERACTION DESIGN</h1>
            <p>RESEARCH GROUP</p>
        </section>
        <div class="vertical-line"></div>
        <img
            class="logo"
            src="/logo-of-amsterdam.png"
            alt="logo"
            width="500"
            height="100"
        />
    </div>
    <button class="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </button>
</header>

<style>


    header {
        background-color: #ebdac5;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        position: relative;
        gap: 10px;
    }

    .header-left {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }

    header h1 {
        font-size: 12px;
        margin: 0;
    }

    header p {
        font-size: 8px;
        margin: 0;
    }

    .vertical-line {
        width: 2px;
        background-color: #000000;
        height: 40px;
    }

    .logo {
        width: 120px;
        height: auto;
    }

    .hamburger {
        margin-top: 40px;
        position: absolute;
        top: 40px;
        right: 35px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #0c3951;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(-50%);
    }

    .hamburger span {
        display: block;
        width: 18px;
        height: 2px;
        background-color: #fff;
        margin: 3px 0;
        border-radius: 2px;
    }

    /* Larger screens */
    @media (min-width: 768px) {
        .header {
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding: 40px 30px;
            text-align: left;
            gap: 20px;
        }

        .header-text h1 {
            font-size: 20px;
        }

        .header-text p {
            font-size: 14px;
        }

        .logo {
            width: 200px;
        }

        .vertical-line {
            height: 60px; /* taller line on larger screens */
            margin: 0 10px;
        }

        .hamburger {
            top: 70%;
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
    }
</style>
