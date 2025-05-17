<script>
	import './styles.css';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
	const wsuri = 'ws://10.0.4.41:8765';

	let prev = () => {
		const prevcmd = JSON.stringify({ 'command': 'previous' });
		let ws12 = new WebSocket(wsuri);
		ws12.onopen = function () {
			ws12.send(prevcmd);
		};
		console.log("previous button clicked");
	}

	let play = () => {
		const playcmd = JSON.stringify({ 'command': 'play' });
		let ws13 = new WebSocket(wsuri);
		ws13.onopen = function () {
			ws13.send(playcmd);
		};
	}

	let pause = () => {
		const pausecmd = JSON.stringify({ 'command': 'pause' });
		let ws14 = new WebSocket(wsuri);
		ws14.onopen = function () {
			ws14.send(pausecmd);
		};
	}

	let stop = () => {
		const stopcmd = JSON.stringify({ 'command': 'stop' });
		let ws15 = new WebSocket(wsuri);
		ws15.onopen = function () {
			ws15.send(stopcmd);
		};
	}

	let next = () => {
		const nextcmd = JSON.stringify({ 'command': 'next' });
		let ws16 = new WebSocket(wsuri);
		ws16.onopen = function () {
			ws16.send(nextcmd);
		};
		console.log("next button clicked");
	}
</script>

<div class="app">
	<main>
		{@render children?.()}
	</main>

	<footer>
		<div class="controls">
			<div
				id="previousBtn"
				class="controlBtn"
				onclick={prev}
				onkeypress={prev}
				onkeyup={prev}
				onkeydown={prev}
				role="button"
				tabindex="0"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
					<path
						d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"
					/>
				</svg>
				<!-- <p>Backwards</p> -->
			</div>
		
			<!-- <PlayButtonComp />
			<PauseButtonComp /> -->
		
			<div
				id="playBtn"
				class="controlBtn"
				onclick={play}
				onkeypress={play}
				onkeyup={play}
				onkeydown={play}
				role="button"
				tabindex="0"
			>
				<p>Play</p>
			</div>
		
			<div
				id="pauseBtn"
				class="controlBtn"
				onclick={pause}
				onkeypress={pause}
				onkeyup={pause}
				onkeydown={pause}
				role="button"
				tabindex="0"
			>
				<p>Pause</p>
			</div>
		
			<div
				id="stopBtn"
				class="controlBtn"
				onclick={stop}
				onkeypress={stop}
				onkeyup={stop}
				onkeydown={stop}
				role="button"
				tabindex="0"
			>
				<p>Stop</p>
			</div>
		
			<div
				id="nextBtn"
				class="controlBtn"
				onclick={next}
				onkeypress={next}
				onkeyup={next}
				onkeydown={next}
				role="button"
				tabindex="0"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
					<path
						d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"
					/>
				</svg>
			</div>
		</div>
		<!-- <PlayerControls /> -->
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 74rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 6px;
		position: sticky;
		bottom: 0;
		background-color: black;
	}

	.controls {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.controlBtn {
		margin: 1em;
	}
	p {
		color: white;
		width: 2.75em;
		height: 1.5em;
		padding: 1em;
		border-radius: 17px;
		background-color: yellowgreen;
		text-align: center;
	}
	svg {
		width: 1.5em;
		height: 1.5em;
		fill: black;
		padding: 1em;
		border-radius: 50%;
		background-color: yellowgreen;
	}
</style>
