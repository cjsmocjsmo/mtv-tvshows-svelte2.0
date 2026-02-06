<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import BackArrow from '$lib/components/BackArrow.svelte';
	import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';
	
	// Season VOYdata stores
	let VOYdatas1 = writable([]);
	let VOYdatas2 = writable([]);
	let VOYdatas3 = writable([]);
	let VOYdatas4 = writable([]);
	let VOYdatas5 = writable([]);
	let VOYdatas6 = writable([]);
	let VOYdatas7 = writable([]);

	let loading = writable(true);
	let currentSeason = 1;
	const totalSeasons = 7;

	function playtvshow(tvid) {
		// Use enhanced WebSocket system
		sendMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, tvid);
		sendMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvid);
	}

	function loadNextSeason() {
		if (currentSeason > totalSeasons) {
			loading.set(false);
			return;
		}

		const command = `voyagers${currentSeason}`;
		requestShowData(command);
	}

	onMount(() => {
		// Start loading seasons sequentially
		loadNextSeason();
	});

	// Listen for WebSocket responses
	const unsubscribe = wsLastResponse.subscribe((response) => {
		if (response && Array.isArray(response) && currentSeason <= totalSeasons) {
			// Assign response to appropriate season
			switch(currentSeason) {
				case 1: VOYdatas1.set(response); break;
				case 2: VOYdatas2.set(response); break;
				case 3: VOYdatas3.set(response); break;
				case 4: VOYdatas4.set(response); break;
				case 5: VOYdatas5.set(response); break;
				case 6: VOYdatas6.set(response); break;
				case 7: VOYdatas7.set(response); break;
			}
			
			currentSeason++;
			setTimeout(loadNextSeason, 300); // Small delay between requests
		}
	});
</script>

<main>
	<BackArrow path="/" />
	<div>
		<h1>Voyager</h1>
	</div>
	
	{#if $loading}
		<div class="loading">
			<p>Loading Voyager seasons...</p>
		</div>
	{:else}
		<div>
			<h1>Season 1</h1>
			<div class="seaList">
				{#each $VOYdatas1 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>
		<div>
			<h1>Season 2</h1>
			<div class="seaList">
				{#each $VOYdatas2 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>
		<div>
			<h1>Season 3</h1>
			<div class="seaList">
				{#each $VOYdatas3 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>
		<div>
			<h1>Season 4</h1>
			<div class="seaList">
				{#each $VOYdatas4 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>
		<div>
			<h1>Season 5</h1>
			<div class="seaList">
				{#each $VOYdatas5 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>
		<div>
			<h1>Season 6</h1>
			<div class="seaList">
				{#each $VOYdatas6 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>
		<div>
			<h1>Season 7</h1>
			<div class="seaList">
				{#each $VOYdatas7 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	
	.loading {
		text-align: center;
		padding: 2rem;
		color: #666;
	}
	
	.seaList {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	
	button {
		background-color: #4caf50;
		border-style: solid;
		border-color: black;
		border-width: 2px;
		border-radius: 4px;
		color: black;
		padding: 10px 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 20px;
		margin: 4px 2px;
		cursor: pointer;
	}
	
	button:hover {
		background-color: #45a049;
	}
</style>