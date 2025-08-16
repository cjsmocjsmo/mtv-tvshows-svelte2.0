<script>
	import { onMount } from 'svelte';
	import BackArrow from '$lib/components/BackArrow.svelte';
	import { useWebSocket } from '$lib/composables/useWebSocket.js';
	import { sendMediaCommand, requestShowData, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';
	import { wsLastResponse } from '$lib/stores/websocket.js';

	// Enhanced WebSocket composable
	const ws = useWebSocket();
	
	// Season data stores
	let datas1 = $state([]);
	let datas2 = $state([]);
	let datas3 = $state([]);
	let datas4 = $state([]);
	let datas5 = $state([]);
	let loadingSeasons = $state({
		s1: false,
		s2: false,
		s3: false,
		s4: false,
		s5: false
	});

	function playtvshow(tvid) {
		ws.playTVShow(tvid);
	}

	async function loadSeasonData(seasonCommand, seasonKey) {
		loadingSeasons[seasonKey] = true;
		
		// Listen for the specific response
		const unsubscribe = wsLastResponse.subscribe((response) => {
			if (response && Array.isArray(response)) {
				// Update the appropriate season data based on the command
				switch(seasonCommand) {
					case 'discoverys1':
						datas1 = response;
						break;
					case 'discoverys2':
						datas2 = response;
						break;
					case 'discoverys3':
						datas3 = response;
						break;
					case 'discoverys4':
						datas4 = response;
						break;
					case 'discoverys5':
						datas5 = response;
						break;
				}
				loadingSeasons[seasonKey] = false;
				unsubscribe();
			}
		});

		// Request the season data
		const success = requestShowData(seasonCommand);
		if (!success) {
			console.error(`Failed to load ${seasonCommand}`);
			loadingSeasons[seasonKey] = false;
			unsubscribe();
		}

		// Timeout cleanup
		setTimeout(() => {
			loadingSeasons[seasonKey] = false;
			unsubscribe();
		}, 10000);
	}

	onMount(async () => {
		// Load all seasons concurrently using the enhanced WebSocket system
		await Promise.all([
			loadSeasonData('discoverys1', 's1'),
			loadSeasonData('discoverys2', 's2'),
			loadSeasonData('discoverys3', 's3'),
			loadSeasonData('discoverys4', 's4'),
			loadSeasonData('discoverys5', 's5')
		]);
	});
</script>

<main>
	<BackArrow path="/" />
	<div>
		<h1>Discovery</h1>
	</div>

	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#if loadingSeasons.s1}
				<div class="loading">Loading Season 1...</div>
			{:else if datas1.length === 0}
				<div class="no-data">No episodes found for Season 1</div>
			{:else}
				{#each datas1 as d}
					<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			{/if}
		</div>
	</div>
	<div>
		<h1>Season 2</h1>
		<div class="seaList">
			{#if loadingSeasons.s2}
				<div class="loading">Loading Season 2...</div>
			{:else if datas2.length === 0}
				<div class="no-data">No episodes found for Season 2</div>
			{:else}
				{#each datas2 as d}
					<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			{/if}
		</div>
	</div>
	<div>
		<h1>Season 3</h1>
		<div class="seaList">
			{#if loadingSeasons.s3}
				<div class="loading">Loading Season 3...</div>
			{:else if datas3.length === 0}
				<div class="no-data">No episodes found for Season 3</div>
			{:else}
				{#each datas3 as d}
					<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			{/if}
		</div>
	</div>
	<div>
		<h1>Season 4</h1>
		<div class="seaList">
			{#if loadingSeasons.s4}
				<div class="loading">Loading Season 4...</div>
			{:else if datas4.length === 0}
				<div class="no-data">No episodes found for Season 4</div>
			{:else}
				{#each datas4 as d}
					<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			{/if}
		</div>
	</div>
	<div>
		<h1>Season 5</h1>
		<div class="seaList">
			{#if loadingSeasons.s5}
				<div class="loading">Loading Season 5...</div>
			{:else if datas5.length === 0}
				<div class="no-data">No episodes found for Season 5</div>
			{:else}
				{#each datas5 as d}
					<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			{/if}
		</div>
	</div>
	
	
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	
	h1 {
		color: yellowgreen;
		margin: 1rem 0;
	}
	
	.seaList {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		min-height: 60px;
		margin-bottom: 1rem;
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
		transition: background-color 0.2s ease;
	}
	
	button:hover {
		background-color: #45a049;
	}
	
	.loading {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		color: #666;
		font-style: italic;
	}
	
	.loading::before {
		content: '';
		width: 16px;
		height: 16px;
		border: 2px solid #f3f3f3;
		border-top: 2px solid #666;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-right: 0.5rem;
	}
	
	.no-data {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		color: #999;
		font-style: italic;
	}
	
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
</style>