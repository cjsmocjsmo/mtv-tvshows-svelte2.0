<script>

	import { wsLastResponse } from '$lib/stores/websocket.js';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import WebSocketStatus from '$lib/components/WebSocketStatus.svelte';
	import { connectWebSocket, sendCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';
	import './styles.css';
	
	let { children } = $props();

	let state = null;

	// Connect WebSocket and get state on mount
	onMount(() => {
		connectWebSocket();
		sendCommand('getstate');
		const unsubscribe = wsLastResponse.subscribe((data) => {
			if (data && data.command === 'getstate') {
				state = data;
				unsubscribe();
			}
		});
	});

	let prev = () => {
		sendCommand(WEBSOCKET_COMMANDS.PREVIOUS);
		console.log("previous button clicked");
	}

	let play = () => {
		sendCommand(WEBSOCKET_COMMANDS.PLAY);
	}

	let pause = () => {
		sendCommand(WEBSOCKET_COMMANDS.PAUSE);
	}

	let stop = () => {
		sendCommand(WEBSOCKET_COMMANDS.STOP);
	}

	let next = () => {
		sendCommand(WEBSOCKET_COMMANDS.NEXT);
		console.log("next button clicked");
	}
</script>

<div class="app">
	<!-- <header class="app-header">
		<WebSocketStatus compact={true} />
	</header> -->
	
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
			</div>
		
			{#if ! state}
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
			{:else }
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
			{/if}
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

	/* .app-header {
		padding: 0.5rem 1rem;
		border-bottom: 1px solid #e5e7eb;
		background: white;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: sticky;
		top: 0;
		z-index: 10;
	} */

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

	/* @media (prefers-color-scheme: dark) {
		.app-header {
			background: #1f2937;
			border-color: #374151;
		}
	} */
</style>
