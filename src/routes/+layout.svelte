<script lang="ts">
	import { page } from '$app/stores';
	import '@fontsource/plus-jakarta-sans/variable.css';
	import '@fontsource/plus-jakarta-sans/variable-italic.css';
	import Ball from '$lib/Ball.svelte';
	import RouteTransition from '$lib/RouteTransition.svelte';
	import Header from '$lib/Header.svelte';
</script>

<div class="layout-content">
	<div class="layout-image-cover">
		<RouteTransition route={$page.url.href}>
			<Header />
			<slot />
		</RouteTransition>
	</div>
</div>
<Ball />

<style>
	:global(#app) {
		margin: 0;
		padding: 0;
		font-family: 'Plus Jakarta SansVariable', sans-serif;
	}

	.layout-content {
		height: 100vh;
		width: 100vw;

		background: no-repeat center/cover fixed url('/background.jpg') #a23136;
	}

	.layout-image-cover {
		height: 100vh;
		width: 100vw;

		backdrop-filter: blur(2em) saturate(180%);
		background-color: rgba(17, 25, 40, 0.6);
	}
</style>
