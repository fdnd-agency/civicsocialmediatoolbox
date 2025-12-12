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

/* ===== Footer ===== */
<style>
    
footer {
	background-color: var(--neutral-color-black);
	color: var(--neutral-color-white);
	padding: 2rem 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	font-family: var(--font-family, 'Geomanist', 'Cabin', sans-serif);
	display: none;
}

.left-content {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	display: none;
}

ul {
	list-style: none;
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