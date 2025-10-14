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
  let datas8 = writable([]);
  let datas9 = writable([]);
  let datas10 = writable([]);
  let datas11 = writable([]);
  let datas12 = writable([]);
  let datas13 = writable([]);

  let loading = writable(true);
  let currentSeason = 1;
  const totalSeasons = 13;

  function playtvshow(tvid) {
    sendMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, tvid);
    sendMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvid);
  }

  function loadNextSeason() {
    if (currentSeason > totalSeasons) {
      loading.set(false);
      return;
    }
    const command = `ncislas${currentSeason}`;
    console.log(command);
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
        case 8: datas8.set(response); break;
        case 9: datas9.set(response); break;
        case 10: datas10.set(response); break;
        case 11: datas11.set(response); break;
        case 12: datas12.set(response); break;
        case 13: datas13.set(response); break;
      }
      currentSeason++;
      setTimeout(loadNextSeason, 300);
    }
  });
</script>

<main>
  <BackArrow path="/" />
  <div>
    <h1>NCIS LA</h1>
  </div>

  {#if $loading}
    <div class="loading">
      <p>Loading NCIS LA seasons...</p>
    </div>
  {:else}
    <div>
      <h1>Season 1</h1>
      <div class="seaList">
        {#each $datas1 as d1}
          <button onclick={() => playtvshow(d1.TvId)}>{d1.Episode}</button>
        {/each}
      </div>
      <h1>Season 2</h1>
      <div class="seaList">
        {#each $datas2 as d2}
          <button onclick={() => playtvshow(d2.TvId)}>{d2.Episode}</button>
        {/each}
      </div>
      <h1>Season 3</h1>
      <div class="seaList">
        {#each $datas3 as d3}
          <button onclick={() => playtvshow(d3.TvId)}>{d3.Episode}</button>
        {/each}
      </div>
      <h1>Season 4</h1>
      <div class="seaList">
        {#each $datas4 as d4}
          <button onclick={() => playtvshow(d4.TvId)}>{d4.Episode}</button>
        {/each}
      </div>
      <h1>Season 5</h1>
      <div class="seaList">
        {#each $datas5 as d5}
          <button onclick={() => playtvshow(d5.TvId)}>{d5.Episode}</button>
        {/each}
      </div>
      <h1>Season 6</h1>
      <div class="seaList">
        {#each $datas6 as d6}
          <button onclick={() => playtvshow(d6.TvId)}>{d6.Episode}</button>
        {/each}
      </div>
      <h1>Season 7</h1>
      <div class="seaList">
        {#each $datas7 as d7}
          <button onclick={() => playtvshow(d7.TvId)}>{d7.Episode}</button>
        {/each}
      </div>
      <h1>Season 8</h1>
      <div class="seaList">
        {#each $datas8 as d8}
          <button onclick={() => playtvshow(d8.TvId)}>{d8.Episode}</button>
        {/each}
      </div>
      <h1>Season 9</h1>
      <div class="seaList">
        {#each $datas9 as d9}
          <button onclick={() => playtvshow(d9.TvId)}>{d9.Episode}</button>
        {/each}
      </div>
      <h1>Season 10</h1>
      <div class="seaList">
        {#each $datas10 as d10}
          <button onclick={() => playtvshow(d10.TvId)}>{d10.Episode}</button>
        {/each}
      </div>
      <h1>Season 11</h1>
      <div class="seaList">
        {#each $datas11 as d11}
          <button onclick={() => playtvshow(d11.TvId)}>{d11.Episode}</button>
        {/each}
      </div>
      <h1>Season 12</h1>
      <div class="seaList">
        {#each $datas12 as d12}
          <button onclick={() => playtvshow(d12.TvId)}>{d12.Episode}</button>
        {/each}
      </div>
      <h1>Season 13</h1>
      <div class="seaList">
        {#each $datas13 as d13}
          <button onclick={() => playtvshow(d13.TvId)}>{d13.Episode}</button>
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