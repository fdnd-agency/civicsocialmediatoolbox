<script lang="ts">
	import '$lib/assets/styles/stylesheet.css';
	import favicon from '$lib/assets/favicon.svg';
	import logoUrl from '$lib/assets/logo-text.svg?url';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<header class="header">
	<div class="header-left">
		<img src={logoUrl} alt="Civic Interaction Design logo" class="logo-text header-logo" />
		<div class="vertical-line"></div>
	</div>
	<button aria-label="Open menu" class="hamburger">
		<span></span>
		<span></span>
		<span></span>
	</button>
</header>

<main>
	{@render children?.()}
</main>

<footer>
	<div class="left-content">
		<ul class="contact-info">
			<li class="project-title">CIVIC SOCIAL MEDIA</li>
			<li>Jorgen Karskens | Project Manager</li>
			<li>
				<a href="mailto:j.r.karskens@hva.nl" class="email">
					j.r.karskens@hva.nl
				</a>
			</li>
		</ul>
	</div>

	<img src={logoUrl} alt="Civic Interaction Design logo" class="logo-text footer-logo" />
</footer>

<style>
/* ===== Header ===== */
header {
	background-color: var(--primary-color-beige);
	display: flex;
	align-items: center;
	padding: 0.625rem 1.875rem;
	min-height: 5rem;
}

.header-left {
	display: flex;
	align-items: center;
	gap: 0.625rem;
	margin-top: 0.625rem;
	margin-left: 0.625rem;
}

.header-logo {
	width: 21.875rem;
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
	background-color: var(--primary-color-deep-blue);
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

/* ===== Footer ===== */
footer {
	background-color: var(--neutral-color-black);
	color: var(--neutral-color-white);
	padding: 2rem 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	font-family: var(--font-family, 'Geomanist', 'Cabin', sans-serif);
}

.left-content {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.contact-info {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	font-size: var(--fs-small);
	line-height: 1.5em;
}

.project-title {
	font-weight: 700;
	font-size: var(--fs-medium);
	margin-bottom: 0.5rem;
}

.email {
	color: var(--neutral-color-white);
	text-decoration: none;
}

.email:hover {
	text-decoration: underline;
}

.footer-logo {
	margin-top: 1rem;
	width: 20rem;
	height: auto;
	filter: brightness(0) invert(1);
}

/* ===== Responsive ===== */
@media (min-width: 48rem) { /* 768px */
	header {
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding: 0 1.25rem;
		text-align: left;
		gap: 1.25rem;
	}

	.header-logo {
		width: 37.5rem;
		height: auto;
	}

	.hamburger {
		top: 13%;
		right: 4.375rem;
		width: 3.75rem;
		height: 3.75rem;
		transform: translateY(-50%);
	}

	.hamburger span {
		width: 1.625rem;
		height: 0.1875rem;
		margin: 0.25rem 0;
	}

	.hamburger span:nth-child(1),
	.hamburger span:nth-child(3) {
		width: 2.1875rem;
	}

	.hamburger span:nth-child(2) {
		width: 2.8125rem;
	}

	footer {
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
		padding: 2rem 2.5rem;
		gap: 0;
	}

	.left-content {
		gap: 1.25rem;
		margin-right: auto;
	}

	.contact-info {
		font-size: var(--fs-small);
	}

	.footer-logo {
		width: 25rem;
		margin-top: 0;
		flex-shrink: 0;
		margin-right: 6rem;
	}
}
</style>
