<script lang="ts">
	import '@fontsource/jetbrains-mono/400.css';
</script>

<svelte:head>
	<title>$ sudo whoami</title>
</svelte:head>

<main>
	<h1 class="with-typing-effect">
		<code>$&nbsp;whoami</code>
	</h1>
	<p class="appear">
		<code>name: 'Levi Richardson'</code>
		<code>age: 15</code>
		<code>location: 'Seattle'</code>
		<code>languages: ['JS/TS', 'Go', 'Python']</code>
		<code>frameworks: ['Svelte', 'React', 'Express']</code>
		<code>tools: ['VS Code', 'Git', 'GitHub', 'Vercel', 'Railway']</code>
		<code>hobbies: ['Programming', 'Skiing', 'Biking']</code>
		<code>pronouns: ['he', 'him']</code>
		<code>contact: <a href="mailto:hi@itslevir.com">hi@itslevir.com</a></code>
	</p>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	h1 {
		box-sizing: border-box;
		font-size: 3rem;
	}

	p {
		font-size: 1.5rem;
	}

	code::after {
		content: '\A';
		white-space: pre;
	}

	h1.with-typing-effect {
		width: 8ch;
		animation: typing 2s steps(8), blink 0.5s step-end infinite alternate;
		white-space: nowrap;
		overflow: hidden;
		border-right: 3px solid currentColor;
		font-family: 'JetBrains Mono', monospace;
	}

	code {
		font-family: 'JetBrains Mono', monospace;
	}

	.appear {
		opacity: 1;
		animation: appear 2050ms steps(1) 1 normal both;
	}

	@keyframes appear {
		from {
			opacity: 0;
		}
	}

	@keyframes typing {
		from {
			width: 0;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}
</style>
