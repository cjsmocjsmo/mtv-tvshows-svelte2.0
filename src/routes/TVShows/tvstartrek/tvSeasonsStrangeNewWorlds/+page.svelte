<script>
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import BackArrow from '$lib/components/BackArrow.svelte';
import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';

// Season data stores
let datas1 = writable([]);
let datas2 = writable([]);
let datas3 = writable([]);

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
			case 1: datas1.set(response); break;
			case 2: datas2.set(response); break;
			case 3: datas3.set(response); break;
		}
		currentSeason++;
		setTimeout(loadNextSeason, 300);
	}
});
</script>

<BackArrow path="/" />
<div>
	<h1>Star Trek: Strange New Worlds Seasons</h1>
</div>

<main>
{#if $loading}
	<p>Loading Strange New Worlds seasons...</p>
{/if}
</main>

<style>
main {
	display: flex;
	flex-direction: column;
	align-items: center;
}

/* Removed invalid CSS block */

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
}

button:hover {
	background-color: #45a049;
}
</style>