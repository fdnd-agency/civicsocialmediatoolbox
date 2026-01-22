<script>
	import logoUrl from '$lib/assets/logo-text.svg?url';
</script>

<footer>
	<ul class="contact-info">
		<li class="project-title">CIVIC SOCIAL MEDIA</li>
		<li>Jorgen Karskens | Project Manager</li>
		<li>
			<a href="mailto:j.r.karskens@hva.nl" class="email">j.r.karskens@hva.nl</a>
		</li>
		<span class="footer-link">About this project</span>
		<span class="footer-link">Partners</span>
	</ul>

	<img src={logoUrl} alt="Civic Interaction Design logo" class="footer-logo" />
</footer>

<style>
footer {
	background-color: var(--neutral-color-black);
	color: var(--neutral-color-white);
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	font-family: var(--font-family, 'Geomanist', 'Cabin', sans-serif);
	align-items: flex-start;
}

.contact-info {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	font-size: var(--fs-small);
	line-height: 1.5em;
	list-style: none;
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

.footer-links {
	display: flex;
	flex-direction: column;
	margin-top: 0.5rem;
}

.footer-link {
	color: var(--neutral-color-white);
	font-weight: 700;
	text-decoration: underline;
	margin: 0;
}

.footer-link:hover {
	text-decoration: underline;
}

.footer-logo {
	padding: 2rem 1rem;
	margin-top: 1rem;
	width: 28rem;
	height: auto;
	filter: brightness(0) invert(1);
}

/* ===== Desktop styling ===== */
@media (min-width: 48rem) {
	footer {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		padding: 3rem 0;
		gap: 0;
	}

	.contact-info {
		font-size: var(--fs-small);
		list-style: none;
	}

	.footer-links {
		flex-direction: row;
		justify-content: space-between;
		margin-top: 1.2rem;
	}

	.footer-logo {
		width: 27rem;
		margin-bottom: 0rem;
		flex-shrink: 0;
		margin-right: 6rem;
		margin-bottom: 3rem;
	}
}
</style>
