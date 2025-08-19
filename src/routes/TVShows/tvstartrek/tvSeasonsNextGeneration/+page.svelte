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
    sendMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, tvid);
    sendMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvid);
  }

  function loadNextSeason() {
    if (currentSeason > totalSeasons) {
      loading.set(false);
      return;
    }
    const command = `tngs${currentSeason}`; // Replace with your actual command logic
    requestShowData(command);
  }

  onMount(() => {
    loadNextSeason();
  });

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

<main>
  <BackArrow path="/" />
  <div>
    <h1>The Next Generation</h1>
  </div>

  {#if $loading}
    <div class="loading">
      <p>Loading The Next Generation seasons...</p>
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

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loading {
    text-align: center;
    padding: 2rem;
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
    border: none;
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