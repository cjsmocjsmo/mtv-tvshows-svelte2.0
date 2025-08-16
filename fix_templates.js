import fs from 'fs';

const components = [
  { path: 'src/routes/TVShows/tvstartrek/tvSeasonsSTTV/+page.svelte', seasons: 3, title: 'Star Trek: The Original Series', show: 'sttv' },
  { path: 'src/routes/TVShows/tvstartrek/tvSeasonsProdigy/+page.svelte', seasons: 2, title: 'Star Trek: Prodigy', show: 'prodigy' },
  { path: 'src/routes/TVShows/tvstartrek/tvSeasonsPicard/+page.svelte', seasons: 3, title: 'Star Trek: Picard', show: 'picard' }
];

function addDisplayTemplates(comp) {
  try {
    let content = fs.readFileSync(comp.path, 'utf8');
    
    if (content.includes('seaList')) {
      console.log('Skipping (already has templates): ' + comp.path);
      return;
    }
    
    const seasonTemplates = Array.from({length: comp.seasons}, (_, i) => {
      const seasonNum = i + 1;
      return `\t\t<div>
\t\t\t<h1>Season ${seasonNum}</h1>
\t\t\t<div class="seaList">
\t\t\t\t{#each $datas${seasonNum} as d}
\t\t\t\t\t<button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
\t\t\t\t{/each}
\t\t\t</div>
\t\t</div>`;
    }).join('\n\n');
    
    const seasonStores = Array.from({length: comp.seasons}, (_, i) => 
      `  let datas${i+1} = writable([]);`
    ).join('\n');
    
    const seasonAssignments = Array.from({length: comp.seasons}, (_, i) => 
      `\t\t\tcase ${i+1}: datas${i+1}.set(response); break;`
    ).join('\n');
    
    const newContent = `<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import BackArrow from '$lib/components/BackArrow.svelte';
  import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';

${seasonStores}

  let loading = writable(true);
  let currentSeason = 1;
  const totalSeasons = ${comp.seasons};

  function playtvshow(tvid) {
    sendMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, tvid);
    sendMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvid);
  }

  function loadNextSeason() {
    if (currentSeason > totalSeasons) {
      loading.set(false);
      return;
    }
    const command = \`${comp.show}s\${currentSeason}\`;
    requestShowData(command);
  }

  onMount(() => {
    loadNextSeason();
  });

  const unsubscribe = wsLastResponse.subscribe((response) => {
    if (response && Array.isArray(response) && currentSeason <= totalSeasons) {
      switch(currentSeason) {
${seasonAssignments}
      }
      currentSeason++;
      setTimeout(loadNextSeason, 300);
    }
  });
</script>

<main>
\t<BackArrow path="/" />
\t<div>
\t\t<h1>${comp.title}</h1>
\t</div>

\t{#if $loading}
\t\t<div class="loading">
\t\t\t<p>Loading ${comp.title} seasons...</p>
\t\t</div>
\t{:else}
${seasonTemplates}
\t{/if}
</main>

<style>
\tmain {
\t\tdisplay: flex;
\t\tflex-direction: column;
\t\talign-items: center;
\t\tjustify-content: center;
\t}

\t.loading {
\t\ttext-align: center;
\t\tpadding: 2rem;
\t}

\t.seaList {
\t\tdisplay: flex;
\t\tflex-direction: row;
\t\tjustify-content: center;
\t\talign-items: center;
\t\tflex-wrap: wrap;
\t\tgap: 10px;
\t\tmargin: 20px 0;
\t}

\tbutton {
\t\tbackground-color: #4caf50;
\t\tcolor: black;
\t\tpadding: 10px 20px;
\t\ttext-align: center;
\t\tborder: none;
\t\tfont-size: 20px;
\t\tborder-radius: 4px;
\t\tcursor: pointer;
\t\tmargin: 4px 2px;
\t}

\tbutton:hover {
\t\tbackground-color: #45a049;
\t}
</style>`;
    
    fs.writeFileSync(comp.path, newContent, 'utf8');
    console.log('✅ Fixed templates: ' + comp.path);
    
  } catch (error) {
    console.error('❌ Failed: ' + comp.path + ' - ' + error.message);
  }
}

components.forEach(addDisplayTemplates);
console.log('🎉 Templates added to Star Trek components!');
