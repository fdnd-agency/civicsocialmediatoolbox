<script lang="ts">
	import logoUrl from '$lib/assets/logo-text.svg?url';
</script>

<header class="header">
	<div class="header-left">
		<img src={logoUrl} alt="Civic Interaction Design logo" class="logo-text header-logo" />
		<div class="vertical-line"></div>
	</div>
	<button aria-label="Open menu" class="hamburger" on:click={openMenu}>
		<span></span>
		<span></span>
		<span></span>
	</button>
</header>

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

@media (min-width: 48rem) {
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
}
</style>