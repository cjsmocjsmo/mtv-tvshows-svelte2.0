<script>
	import './styles.css';

	let prev = () => {
		console.log("this feature is not implemented yet")
	}

	let play = () => {
		const wsuri = 'ws://10.0.4.41:8765';
		const playcmd = JSON.stringify({ 'command': 'play' });
		let ws1 = new WebSocket(wsuri);
		ws1.onopen = function () {
			ws1.send(playcmd);
		};
		console.log("play button clicked");
	}

	let pause = () => {
		const wsuri = 'ws://10.0.4.41:8765';
		const pausecmd = JSON.stringify({ 'command': 'pause' });
		let ws1 = new WebSocket(wsuri);
		ws1.onopen = function () {
			ws1.send(pausecmd);
		};
		console.log("pause button clicked");
	}

	let stop = () => {
		const wsuri = 'ws://10.0.4.41:8765';
		const stopcmd = JSON.stringify({ 'command': 'stop' });
		let ws1 = new WebSocket(wsuri);
		ws1.onopen = function () {
			ws1.send(stopcmd);
		};
		console.log("stop button clicked");
	}

	let next = () => {
		console.log("this feature is not implemented yet")
	}
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<div class="controls">
			<div
				id="previousBtn"
				class="controlBtn"
				on:click={prev}
				on:keypress={prev}
				on:keyup={prev}
				on:keydown={prev}
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
				on:click={play}
				on:keypress={play}
				on:keyup={play}
				on:keydown={play}
				role="button"
				tabindex="0"
			>
				<p>Play</p>
			</div>
		
			<div
				id="pauseBtn"
				class="controlBtn"
				on:click={pause}
				on:keypress={pause}
				on:keyup={pause}
				on:keydown={pause}
				role="button"
				tabindex="0"
			>
				<p>Pause</p>
			</div>
		
			<div
				id="stopBtn"
				class="controlBtn"
				on:click={stop}
				on:keypress={stop}
				on:keyup={stop}
				on:keydown={stop}
				role="button"
				tabindex="0"
			>
				<p>Stop</p>
			</div>
		
			<div
				id="nextBtn"
				class="controlBtn"
				on:click={next}
				on:keypress={next}
				on:keyup={next}
				on:keydown={next}
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
