<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import BackArrow from '$lib/components/BackArrow.svelte';
	import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';
	
	// Season data stores
	let datas1 = writable([]);
	let datas2 = writable([]);
	let datas3 = writable([]);
	let datas4 = writable([]);
	let datas5 = writable([]);
	let datas6 = writable([]);
	let datas7 = writable([]);

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

		const command = `tngs${currentSeason}`;
		requestShowData(command);
	}

	onMount(() => {
		loadNextSeason();
	});

	// Listen for WebSocket responses
	const unsubscribe = wsLastResponse.subscribe((response) => {
		if (response && Array.isArray(response) && currentSeason <= totalSeasons) {
			switch(currentSeason) {
				case 1: datas1.set(response); break;
				case 2: datas2.set(response); break;
				case 3: datas3.set(response); break;
				case 4: datas4.set(response); break;
				case 5: datas5.set(response); break;
				case 6: datas6.set(response); break;
				case 7: datas7.set(response); break;
			}
			
			currentSeason++;
			setTimeout(loadNextSeason, 300);
		}
	});
</script>
		};

		let ws3 = new WebSocket(wsuri);
		
		ws3.onopen = function() {
			
			ws3.send(JSON.stringify({"command": "tngs3"}));
		};
		ws3.onmessage = function(event) {
			datas3 = JSON.parse(event.data);
			// console.log("Message received from server: ", datas3);
		};

		let ws4 = new WebSocket(wsuri);
		
		ws4.onopen = function() {
			
			ws4.send(JSON.stringify({"command": "tngs4"}));
		};
		ws4.onmessage = function(event) {
			datas4 = JSON.parse(event.data);
			// console.log("Message received from server: ", datas4);
		};

		let ws5 = new WebSocket(wsuri);
		
		ws5.onopen = function() {
			
			ws5.send(JSON.stringify({"command": "tngs5"}));
		};
		ws5.onmessage = function(event) {
			datas5 = JSON.parse(event.data);
			// console.log("Message received from server: ", datas5);
		};

		let ws6 = new WebSocket(wsuri);
		
		ws6.onopen = function() {
			
			ws6.send(JSON.stringify({"command": "tngs6"}));
		};
		ws6.onmessage = function(event) {
			datas6 = JSON.parse(event.data);
			// console.log("Message received from server: ", datas6);
		};

		let ws7 = new WebSocket(wsuri);
		
		ws7.onopen = function() {
			
			ws7.send(JSON.stringify({"command": "tngs7"}));
		};
		ws7.onmessage = function(event) {
			datas7 = JSON.parse(event.data);
			// console.log("Message received from server: ", datas7);
		};
	});
</script>

<main>
	<BackArrow path="/" />
	<div>
		<h1>The Next Generation</h1>
	</div>

	{#if $loading}
		<div class="loading">
			<p>Loading Next Generation seasons...</p>
		</div>
	{:else}
		<div>
			<h1>Season 1</h1>
			<div class="seaList">
				{#each $datas1 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>

		<div>
			<h1>Season 2</h1>
			<div class="seaList">
				{#each $datas2 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>

		<div>
			<h1>Season 3</h1>
			<div class="seaList">
				{#each $datas3 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>

		<div>
			<h1>Season 4</h1>
			<div class="seaList">
				{#each $datas4 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>

		<div>
			<h1>Season 5</h1>
			<div class="seaList">
				{#each $datas5 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>

		<div>
			<h1>Season 6</h1>
			<div class="seaList">
				{#each $datas6 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>

		<div>
			<h1>Season 7</h1>
			<div class="seaList">
				{#each $datas7 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>
	{/if}
</main>

	<div>
		<h1>Season 3</h1>
		<div class="seaList">
			{#each datas3 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
		</div>
	</div>
	
	<div>
		<h1>Season 4</h1>
		<div class="seaList">
			{#each datas4 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
		</div>
	</div>

	<div>
		<h1>Season 5</h1>
		<div class="seaList">
			{#each datas5 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
		</div>
	</div>

	<div>
		<h1>Season 6</h1>
		<div class="seaList">
			{#each datas6 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
		</div>
	</div>

	<div>
		<h1>Season 7</h1>
		<div class="seaList">
			{#each datas7 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
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
	}
</style>

