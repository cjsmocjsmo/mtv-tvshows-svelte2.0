<script>
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import BackArrow from '$lib/components/BackArrow.svelte';
import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';

// Season SNWdata stores
let SNWdatas1 = writable([]);
let SNWdatas2 = writable([]);
let SNWdatas3 = writable([]);

let loading = writable(true);
let currentSeason = 1;
const totalSeasons = 3;

function playtvshow(tvid) {
	sendMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, tvid);
	sendMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvid);
}

function loadNextSeason() {
	if (currentSeason > totalSeasons) {
		loading.set(false);
		return;
	}
	const command = `strangenewworldss${currentSeason}`;
	requestShowData(command);
}

onMount(() => {
	loadNextSeason();
});

const unsubscribe = wsLastResponse.subscribe((response) => {
	if (response && Array.isArray(response) && currentSeason <= totalSeasons) {
		switch (currentSeason) {
			case 1: SNWdatas1.set(response); break;
			case 2: SNWdatas2.set(response); break;
			case 3: SNWdatas3.set(response); break;
		}
		currentSeason++;
		setTimeout(loadNextSeason, 300);
	}
});
</script>

<main>
	<BackArrow path="/" />
	<div>
		<h1>Star Trek: Strange New Worlds Seasons</h1>
	</div>

	{#if $loading}
		<div class="loading">
			<p>Loading Strange New Worlds seasons...</p>
		</div>
	{:else}
		<div>
			<h1>Season 1</h1>
			<div class="seaList">
				{#each $SNWdatas1 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>

		<div>
			<h1>Season 2</h1>
			<div class="seaList">
				{#each $SNWdatas2 as d}
					<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
				{/each}
			</div>
		</div>

		<div>
			<h1>Season 3</h1>
			<div class="seaList">
				{#each $SNWdatas3 as d}
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
	align-items: center;
	justify-content: center;
}

.loading {
	text-align: center;
	padding: 2rem;
}

.seaList {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;
	margin: 20px 0;
}

button {
	background-color: #4caf50;
	color: black;
	padding: 10px 20px;
	display: inline-block;
	text-align: center;
	border: none;
	font-size: 20px;
	border-radius: 4px;
	cursor: pointer;
	margin: 4px 2px;
}

button:hover {
	background-color: #45a049;
}
</style>