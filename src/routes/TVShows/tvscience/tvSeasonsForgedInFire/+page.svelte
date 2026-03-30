<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import BackArrow from '$lib/components/BackArrow.svelte';
  import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';

  // Season FIFdata stores
  let FIFdatas1 = writable([]);
  let FIFdatas2 = writable([]);
  let FIFdatas3 = writable([]);
  let FIFdatas4 = writable([]);
  let FIFdatas5 = writable([]);
  let FIFdatas6 = writable([]);
  let FIFdatas7 = writable([]);
  let FIFdatas8 = writable([]);

  let loading = writable(true);
  let currentSeason = 1;
  const totalSeasons = 8;

  function playtvshow(tvid) {
    sendMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, tvid);
    sendMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvid);
  }

  function loadNextSeason() {
    if (currentSeason > totalSeasons) {
      loading.set(false);
      return;
    }
    const command = `forgedinfires${currentSeason}`;
    requestShowData(command);
  }

  onMount(() => {
    loadNextSeason();
  });

  const unsubscribe = wsLastResponse.subscribe((response) => {
    if (response && Array.isArray(response) && currentSeason <= totalSeasons) {
      switch(currentSeason) {
        case 1: FIFdatas1.set(response); break;
        case 2: FIFdatas2.set(response); break;
        case 3: FIFdatas3.set(response); break;
        case 4: FIFdatas4.set(response); break;
        case 5: FIFdatas5.set(response); break;
        case 6: FIFdatas6.set(response); break;
        case 7: FIFdatas7.set(response); break;
        case 8: FIFdatas8.set(response); break;
      }
      currentSeason++;
      setTimeout(loadNextSeason, 300);
    }
  });
</script>

<main>
  <BackArrow path="/" />
  <div>
    <h1>Forged in Fire</h1>
  </div>

  {#if $loading}
    <div class="loading">
      <p>Loading Forged in Fire seasons...</p>
    </div>
  {:else}
    <div>
      <h1>Season 1</h1>
      <div class="seaList">
        {#each $FIFdatas1 as d}
          <button onclick={() => playtvshow(d.TvId)}>{d.Episode}</button>
        {/each}
      </div>
    </div>  

    <div>
      <h1>Season 2</h1>
      <div class="seaList">
        {#each $FIFdatas2 as d2}
          <button onclick={() => playtvshow(d2.TvId)}>{d2.Episode}</button>
        {/each}
      </div>
    </div>
    <div>
      <h1>Season 3</h1>
      <div class="seaList">
        {#each $FIFdatas3 as d3}
          <button onclick={() => playtvshow(d3.TvId)}>{d3.Episode}</button>
        {/each}
      </div>
    </div>
    <div>
      <h1>Season 4</h1>
      <div class="seaList">
        {#each $FIFdatas4 as d4}
          <button onclick={() => playtvshow(d4.TvId)}>{d4.Episode}</button>
        {/each}
      </div>
    </div>
    <div>
      <h1>Season 5</h1>
      <div class="seaList">
        {#each $FIFdatas5 as d5}
          <button onclick={() => playtvshow(d5.TvId)}>{d5.Episode}</button>
        {/each}
      </div>
    </div>
    <div>
      <h1>Season 6</h1>
      <div class="seaList">
        {#each $FIFdatas6 as d6}
          <button onclick={() => playtvshow(d6.TvId)}>{d6.Episode}</button>
        {/each}
      </div>
    </div>
    <div>
      <h1>Season 7</h1>
      <div class="seaList">
        {#each $FIFdatas7 as d7}
          <button onclick={() => playtvshow(d7.TvId)}>{d7.Episode}</button>
        {/each}
      </div>
    </div>
    <div>
      <h1>Season 8</h1>
      <div class="seaList">
        {#each $FIFdatas8 as d8}
          <button onclick={() => playtvshow(d8.TvId)}>{d8.Episode}</button>
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