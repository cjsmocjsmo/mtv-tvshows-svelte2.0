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

let loading = writable(true);
let currentSeason = 1;
const totalSeasons = 4;

function playtvshow(tvid) {
hanced WebSocket system
dMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, tvid);
dMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvid);
}

function loadNextSeason() {
tSeason > totalSeasons) {
g.set(false);
;
st command = `enterprises${currentSeason}`;
uestShowData(command);
}

onMount(() => {
extSeason();
});

const unsubscribe = wsLastResponse.subscribe((response) => {
se && Array.isArray(response) && currentSeason <= totalSeasons) {
tSeason) {
				case 1: datas1.set(response); break;
				case 2: datas2.set(response); break;
				case 3: datas3.set(response); break;
				case 4: datas4.set(response); break;
tSeason++;
extSeason, 300);
>
<BackArrow path="/" />
<div>
fig.title}</h1>
</div>

{#if $loading}
g">
g Enterprise seasons...</p>
Templates}
{/if}
</main>

<style>
main {
: column;
tent: center;
-items: center;
g {
: center;
g: 2rem;
{
: row;
tent: center;
-items: center;
}

button {
d-color: #4caf50;
black;
black;
g: 10px 20px;
: center;
: none;
line-block;
t-size: 20px;
: 4px 2px;
ter;
}

button:hover {
d-color: #45a049;
}
</style>