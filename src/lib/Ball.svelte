<script lang="ts">
	import { onMount } from 'svelte';

	let clicked: boolean = false;

	let x: number = 0;
	let y: number = 0;

	let outerBallX: number = 0;
	let outerBallY: number = 0;

	let innerBallX: number = 0;
	let innerBallY: number = 0;

	let ref1: string =
		'ball-' + [...Array(20)].map(() => (Math.random() * Date.now()).toString(36)[2]).join('');
	let ref2: string =
		'ball-' + [...Array(20)].map(() => (Math.random() * Date.now()).toString(36)[2]).join('');
	let outerTarget: HTMLDivElement | null = null;
	let innerTarget: HTMLDivElement | null = null;

	onMount(() => {
		outerTarget = document.getElementById(ref1) as HTMLDivElement;
		innerTarget = document.getElementById(ref2) as HTMLDivElement;

		x = window.innerWidth / 2;
		y = window.innerHeight / 2;

		const draw = () => {
			outerBallY += (y - outerBallY) * 0.1 - 1.25;
			outerBallX += (x - outerBallX) * 0.1 - 1.25;

			innerBallX += (x - innerBallX) * 0.3 - 1;
			innerBallY += (y - innerBallY) * 0.3 - 1;

			outerTarget!.style.top = `${outerBallY - window.scrollY}px`;
			outerTarget!.style.left = `${outerBallX}px`;

			innerTarget!.style.top = `${innerBallY - window.scrollY}px`;
			innerTarget!.style.left = `${innerBallX}px`;
		};

		const loop = () => {
			draw();
			requestAnimationFrame(loop);
		};

		loop();

		document.addEventListener('mousemove', (e) => {
			x = e.pageX;
			y = e.pageY;
		});

		document.addEventListener('mousedown', () => {
			clicked = true;
		});

		document.addEventListener('mouseup', () => {
			clicked = false;
		});
	});
</script>

<div class="ball outer {clicked ? 'clicking' : ''}" id={ref1} />
<div class="ball inner {clicked ? 'clicking' : ''}" id={ref2} />

<style>
	.ball {
		position: absolute;

		border-radius: 50%;

		pointer-events: none;

		transition: transform 0.1s cubic-bezier(0.98, 0.33, 0.52, 0.49);
	}

	.ball.outer {
		border: 1px solid rgb(255, 255, 255);

		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
		width: 2em;
		height: 2em;
	}

	.ball.inner {
		background: rgb(255, 255, 255);

		width: 1em;
		height: 1em;
	}

	.ball.outer.clicking {
		transform: scale(1.25);
	}

	.ball.inner.clicking {
		transform: scale(0);
	}

	@media (prefers-reduced-motion: reduce) {
		.ball {
			transition: none;
		}
	}

	@media screen and (max-width: 600px) {
		.ball {
			display: none;
		}
	}
</style>
