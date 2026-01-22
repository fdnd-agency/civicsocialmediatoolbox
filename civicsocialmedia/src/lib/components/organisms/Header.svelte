<script>
	import '$lib/assets/styles/stylesheet.css';
	import favicon from '$lib/assets/favicon.svg';
	import logoUrl from '$lib/assets/logo-text.svg?url';
	import closemenu from '$lib/assets/close.svg';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<header class="header">
	<a class="header-left" href="/">
		<img src={logoUrl} alt="Civic Interaction Design logo" class="logo-text header-logo" />
		<div class="vertical-line"></div>
	</a>

	<button aria-label="Open menu" class="hamburger" popovertarget="menu"> <!-- Turns a <button> into a popover control button; takes the ID of the popover element to control its value-->
		<span></span>
		<span></span>
		<span></span>
	</button>

	
	<nav popover id="menu" >
		<button class="close-menu"  popovertarget="menu" popovertargetaction="hide"> <!-- Closes the popover when clicked -->
			<img src={closemenu} alt="sluitknop">
        </button>

		<ul>  
            <li>
                <a href="/">Home</a>
            </li>

            <li>
                <a href="/roadmap">Civic Social Media Roadmap</a>
            </li>

            <li>
                <a href="/design-principles">Design principles voor civic social media</a>
            </li>

            <li>
                <a href="/ontwerpprincipes">Ontwerpprincipes</a>
            </li>

            <li>
                <a href="/community-archetypes">Community archetypes</a>
            </li>
        </ul>
	</nav>
</header>

<style>
header {
	background-color: var(--secondary-darkest-beige);
	display: flex;
	align-items: center;
	padding: 0;
	min-height: 5rem;
}

.header-left {
	display: flex;
	align-items: center;
}

.header-logo {
	width: 22rem;
	height: auto;
	filter: brightness(0);
}

.hamburger {
	position: absolute;
	top: 3.75rem;
	right: 1.25rem;
	width: 3.125rem;
	height: 3.125rem;
	border-radius: 50%;
	background-color: var(--primary-dark-blue);
	border: none;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.hamburger span {
	display: block;
	height: 0.125rem;
	background-color: var(--neutral-color-white);
	margin: 0.25rem;
}

.hamburger span:nth-child(1),
.hamburger span:nth-child(3) {
	width: 1.875rem;
}

.hamburger span:nth-child(2) {
	width: 2.5rem;
}

:popover-open { /* Styles applied to the popover when it is open */
	display: flex;
	margin-right: 0;
	height: 100%;
	width: 100%;
	background-color: var(--primary-dark-blue);
	position: fixed;
}

ul {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 2em;
}
	
ul li {
	padding: 1em;
}

ul li a {
	color: #fff;
	text-decoration: none;
	font-size: var(--fs-medium);
}

ul li a:hover {
	text-decoration: underline;
}

nav {
	position: relative;
}

.close-menu {
	all: unset;
	cursor: pointer;
	position: absolute;
	right: 1em;
	top: 3em;        
}

/* ===== MEDIA QUERIES  ===== */

@media (min-width: 768px) {
	header {
		justify-content: flex-start;
		padding: 0;
	}

	.header-logo {
		width: 36rem;
	}
	
	:popover-open {
		max-width: 28em;
	}

	.close-menu {
		top: 4.3em;
		right: 4em;
	}
}
</style>