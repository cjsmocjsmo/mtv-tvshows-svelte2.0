const fs = require('fs');

const content = `<script>
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import BackArrow from '\/components/BackArrow.svelte';
import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '\/stores/websocket.js';

let datas1 = writable([]);
let datas2 = writable([]);
let datas3 = writable([]);
let loading = writable(true);
let currentSeason = 1;
const totalSeasons = 3;

function playtvshow(tvid) {
dMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, tvid);
dMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvid);
}

function loadNextSeason() {
tSeason > totalSeasons) {
g.set(false);
;
st command = \;
uestShowData(command);
}

onMount(() => {
extSeason();
});

const unsubscribe = wsLastResponse.subscribe((response) => {
se && Array.isArray(response) && currentSeason <= totalSeasons) {
tSeason) {
se); break;
se); break;
se); break;
tSeason++;
extSeason, 300);
>
<BackArrow path="/" />
<div><h1>Bad Batch</h1></div>

{#if \}
g"><p>Loading Bad Batch seasons...</p></div>
{:else}
 1</h1>
as d}
 onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
 2</h1>
as d}
 onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
 3</h1>
as d}
 onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
>

<style>
main {
: column;
tent: center;
-items: center;
g { text-align: center; padding: 2rem; color: #666; }
.seaList { display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; align-items: center; }
button { background-color: #4caf50; border-style: solid; border-color: black; border-width: 2px; border-radius: 4px; color: black; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 20px; margin: 4px 2px; cursor: pointer; }
button:hover { background-color: #45a049; }
</style>`;

fs.writeFileSync('src/routes/TVShows/tvstarwars/tvSeasonsBadBatch/+page.svelte', content, 'utf8');
console.log('Updated Bad Batch component');
