<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import BackArrow from '$lib/components/BackArrow.svelte';
  import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';

  // Season LISdata stores
  let LISdatas1 = writable([]);
  let LISdatas2 = writable([]);
  let LISdatas3 = writable([]);

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
    const command = `lostinspaces${currentSeason}`;
    requestShowData(command);
  }

  onMount(() => {
    loadNextSeason();
  });

  const unsubscribe = wsLastResponse.subscribe((response) => {
    if (response && Array.isArray(response) && currentSeason <= totalSeasons) {
      switch(currentSeason) {
        case 1: LISdatas1.set(response); break;
        case 2: LISdatas2.set(response); break;
        case 3: LISdatas3.set(response); break;
      }
      currentSeason++;
      setTimeout(loadNextSeason, 300);
    }
  });
</script>

<main>
  <BackArrow path="/" />
  <div>
    <h1>Lost in Space</h1>
  </div>

  {#if $loading}
    <div class="loading">
      <p>Loading Lost in Space seasons...</p>
    </div>
  {:else}
    <div>
      <h1>Season 1</h1>
      <div class="seaList">
        {#each $LISdatas1 as d}
          <button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
        {/each}
      </div>
    </div>

    <div>
      <h1>Season 2</h1>
      <div class="seaList">
        {#each $LISdatas2 as d}
          <button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
        {/each}
      </div>
    </div>

    <div>
      <h1>Season 3</h1>
      <div class="seaList">
        {#each $LISdatas3 as d}
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