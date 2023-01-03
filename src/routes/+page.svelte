<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Image from 'svimg';
</script>

<svelte:head>
	<title>altude</title>
	<meta name="description" content="altude's personal website" />
</svelte:head>

<div class="home">
	<Image src="avatar.png" alt="altude" class="icon" />
	<h1>Hi.</h1>
	<p>
		My name is <strong>altude</strong> and I'm a <strong>web developer</strong> from
		<strong>Seattle, WA</strong>.
	</p>
	<div class="links">
		{#each ['About', 'GitHub', 'Hire Me'] as link}
			<a href={link.replaceAll(' ', '').toLowerCase()}>
				<Button text={link} />
			</a>
		{/each}
	</div>
</div>

<style>
	.icon {
		border-radius: 50%;
	}

	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		width: 69%;

		margin-top: 2rem;
	}

	a {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.links {
			flex-direction: column;

			width: 100%;
		}

		h1,
		p {
			text-align: center;
		}
	}

	@keyframes pulse {
		from {
			filter: drop-shadow(0 0 0 0 rgb(255, 255, 255));
		}

		to {
			filter: drop-shadow(0 -40px 0 0 rgb(255, 255, 255));
		}
	}
</style>
