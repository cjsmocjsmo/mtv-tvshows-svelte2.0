<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import BackArrow from '$lib/components/BackArrow.svelte';
  import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';

  // Season NGENdata stores
  let NGENdatas1 = writable([]);
  let NGENdatas2 = writable([]);
  let NGENdatas3 = writable([]);
  let NGENdatas4 = writable([]);
  let NGENdatas5 = writable([]);
  let NGENdatas6 = writable([]);
  let NGENdatas7 = writable([]);

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
        case 1: NGENdatas1.set(response); break;
        case 2: NGENdatas2.set(response); break;
        case 3: NGENdatas3.set(response); break;
        case 4: NGENdatas4.set(response); break;
        case 5: NGENdatas5.set(response); break;
        case 6: NGENdatas6.set(response); break;
        case 7: NGENdatas7.set(response); break;
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
        {#each $NGENdatas1 as d}
          <button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
        {/each}
      </div>
    </div>

    <div>
      <h1>Season 2</h1>
      <div class="seaList">
        {#each $NGENdatas2 as d}
          <button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
        {/each}
      </div>
    </div>

    <div>
      <h1>Season 3</h1>
      <div class="seaList">
        {#each $NGENdatas3 as d}
          <button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
        {/each}
      </div>
    </div>

    <div>
      <h1>Season 4</h1>
      <div class="seaList">
        {#each $NGENdatas4 as d}
          <button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
        {/each}
      </div>
    </div>

    <div>
      <h1>Season 5</h1>
      <div class="seaList">
        {#each $NGENdatas5 as d}
          <button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
        {/each}
      </div>
    </div>

    <div>
      <h1>Season 6</h1>
      <div class="seaList">
        {#each $NGENdatas6 as d}
          <button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
        {/each}
      </div>
    </div>

    <div>
      <h1>Season 7</h1>
      <div class="seaList">
        {#each $NGENdatas7 as d}
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