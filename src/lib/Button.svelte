<script lang="ts">
	export let text: string = 'Button';
</script>

<div class="button">
	<p>{text}</p>
</div>

<style>
	.button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		backdrop-filter: blur(12px) saturate(100%);
		background-color: rgb(17 25 40 / 69%);
		border-radius: 12px;
		border: 1px solid rgb(255 255 255 / 13%);

		padding: 1em;

		transition: all 0.2s linear;
	}

	.button:hover {
		backdrop-filter: blur(25px) saturate(100%);
		background-color: rgba(161, 161, 161, 0.2);
	}
</style>
