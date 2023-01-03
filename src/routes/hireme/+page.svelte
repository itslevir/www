<script>
	import Button from '$lib/Button.svelte';
</script>

<svelte:head>
	<title>Hire Me</title>
</svelte:head>

<main>
	<h1>Hire me</h1>
	<p>
		I'm available for hire! Rates will change depending on what you want, but you can expect
		something similar to these:
	</p>
	<table>
		<thead>
			<tr>
				<th><h2>Service</h2></th>
				<th><h2>Rate</h2></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><p>Single Page</p></td>
				<td><p>$70</p></td>
			</tr>
			<tr>
				<td><p>Small Website (similar to this one)</p></td>
				<td><p>$175</p></td>
			</tr>
			<tr>
				<td><p>Large Website (7+ routes)</p></td>
				<td><p>$250</p></td>
			</tr>
			<tr>
				<td><p>Custom Project</p></td>
				<td><p>Contact me</p></td>
			</tr>
		</tbody>
	</table>
	<a
		href="mailto:altude@skiff.com?subject=I'd%20like%20to%20hire%20you!&body=Please%20include%20a%20description%20of%20what%20you%20would%20like%2C%20as%20well%20as%20a%20set%20deadline.%20If%20you%20have%20any%20price%20limits%2C%20please%20also%20include%20those."
		><Button text="Get in touch" /></a
	>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	table {
		text-align: left;
		border-collapse: collapse;
		overflow-x: auto;
		display: block;
		width: fit-content;
	}

	thead tr:last-child {
		border-bottom: 1px solid rgb(194 194 194);
		font-size: 1.2rem;
	}

	td,
	th {
		padding: 15px;
	}
</style>
