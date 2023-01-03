<script lang="ts">
	import { blur } from 'svelte/transition';

	export let route: string;
</script>

{#key route}
	<span in:blur={{ duration: 300, delay: 300, amount: 5 }} out:blur={{ duration: 300 }}>
		<slot />
	</span>
{/key}
