const fs = require('fs');

const showConfigs = [
  { path: 'src/routes/TVShows/tvstartrek/tvSeasonsEnterprise/+page.svelte', showName: 'enterprise', seasons: 4, title: 'Enterprise' },
  { path: 'src/routes/TVShows/tvstartrek/tvSeasonsLowerDecks/+page.svelte', showName: 'lowerdecks', seasons: 4, title: 'Lower Decks' },
  { path: 'src/routes/TVShows/tvstartrek/tvSeasonsStrangeNewWorlds/+page.svelte', showName: 'strangenewworlds', seasons: 3, title: 'Strange New Worlds' },
];

function generateEnhancedComponent(config) {
  const seasonStores = Array.from({length: config.seasons}, (_, i) => `\tlet datas${i+1} = writable([]);`).join('\n');
  const seasonAssignments = Array.from({length: config.seasons}, (_, i) => 
    `\t\t\t\tcase ${i+1}: datas${i+1}.set(response); break;`
  ).join('\n');
  const seasonTemplates = Array.from({length: config.seasons}, (_, i) => 
    `\t\t<div>\n\t\t\t<h1>Season ${i+1}</h1>\n\t\t\t<div class="seaList">\n\t\t\t\t{#each $datas${i+1} as d}\n\t\t\t\t\t<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>\n\t\t\t\t{/each}\n\t\t\t</div>\n\t\t</div>`
  ).join('\n\n');

  return `<script>
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import BackArrow from '$lib/components/BackArrow.svelte';
import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';

// Season data stores
${seasonStores}

let loading = writable(true);
let currentSeason = 1;
const totalSeasons = ${config.seasons};

function playtvshow(tvid) {
hanced WebSocket system
dMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, tvid);
dMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvid);
}

function loadNextSeason() {
tSeason > totalSeasons) {
g.set(false);
;
st command = \`${config.showName}s\${currentSeason}\`;
uestShowData(command);
}

onMount(() => {
extSeason();
});

const unsubscribe = wsLastResponse.subscribe((response) => {
se && Array.isArray(response) && currentSeason <= totalSeasons) {
tSeason) {
${seasonAssignments}
tSeason++;
extSeason, 300);
>
<BackArrow path="/" />
<div>
fig.title}</h1>
</div>

{#if $loading}
g">
g ${config.title} seasons...</p>
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
</style>`;
}

showConfigs.forEach(config => {
  const content = generateEnhancedComponent(config);
  fs.writeFileSync(config.path, content, 'utf8');
  console.log('Updated ' + config.path);
});

console.log('All Star Trek season pages updated!');
