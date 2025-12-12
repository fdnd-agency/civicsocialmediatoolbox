<script>
    let angle = 45;

    function randomize() {
        angle = Math.floor(Math.random() * 360);
    }
</script>

<div class="screen" style="--angle: {angle}deg;" on:click={randomize}></div>

<style>
    /* Animatable angle property */
    @property --angle {
        syntax: "<angle>";
        initial-value: 45deg;
        inherits: true;
    }

    /* Horizontal shift for diagonal movement */
    @property --shift {
        syntax: "<length>";
        initial-value: 0px;
        inherits: true;
    }

    /* Fullscreen retro line art */
    .screen {
        position: fixed;
        inset: 0;
        cursor: pointer;

        --shift: 0px;

        background: repeating-linear-gradient(
            var(--angle),
            #6abad2 0 10px,
            #0d0d0d 10px 30px
        );

        background-size: 300% 300%;
        background-position: var(--shift) var(--shift);
        transition: --angle 0.8s ease;

        /* Diagonal shuffle animation */
        animation: shuffle 20s linear infinite alternate;
    }

    @keyframes shuffle {
        from {
            --shift: 0px;
        }
        to {
            --shift: 250px;
        }
    }
</style>
