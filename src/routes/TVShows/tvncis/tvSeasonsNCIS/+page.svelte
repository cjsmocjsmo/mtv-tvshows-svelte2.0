<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import BackArrow from '$lib/components/BackArrow.svelte';
  import { requestShowData, wsLastResponse, sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';

  // Season NCISdata stores
  let NCISdatas1 = writable([]);
  let NCISdatas2 = writable([]);
  let NCISdatas3 = writable([]);
  let NCISdatas4 = writable([]);
  let NCISdatas5 = writable([]);
  let NCISdatas6 = writable([]);
  let NCISdatas7 = writable([]);
  let NCISdatas8 = writable([]);
  let NCISdatas9 = writable([]);
  let NCISdatas10 = writable([]);
  let NCISdatas11 = writable([]);
  let NCISdatas12 = writable([]);
  let NCISdatas13 = writable([]);
  let NCISdatas14 = writable([]);
  let NCISdatas15 = writable([]);
  let NCISdatas16 = writable([]);
  let NCISdatas17 = writable([]);
  let NCISdatas18 = writable([]);
  let NCISdatas19 = writable([]);
  let NCISdatas20 = writable([]);
  let NCISdatas21 = writable([]);
  let NCISdatas22 = writable([]);

  let loading = writable(true);
  let currentSeason = 1;
  const totalSeasons = 22;

  function playtvshow(tvid) {
    sendMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, tvid);
    sendMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvid);
  }

  function loadNextSeason() {
    if (currentSeason > totalSeasons) {
      loading.set(false);
      return;
    }
    const command = `nciss${currentSeason}`;
    console.log(command);
    requestShowData(command);
  }

  onMount(() => {
    loadNextSeason();
  });

  const unsubscribe = wsLastResponse.subscribe((response) => {
    if (response && Array.isArray(response) && currentSeason <= totalSeasons) {
      switch(currentSeason) {
        case 1: NCISdatas1.set(response); break;
        case 2: NCISdatas2.set(response); break;
        case 3: NCISdatas3.set(response); break;
        case 4: NCISdatas4.set(response); break;
        case 5: NCISdatas5.set(response); break;
        case 6: NCISdatas6.set(response); break;
        case 7: NCISdatas7.set(response); break;
        case 8: NCISdatas8.set(response); break;
        case 9: NCISdatas9.set(response); break;
        case 10: NCISdatas10.set(response); break;
        case 11: NCISdatas11.set(response); break;
        case 12: NCISdatas12.set(response); break;
        case 13: NCISdatas13.set(response); break;
        case 14: NCISdatas14.set(response); break;
        case 15: NCISdatas15.set(response); break;
        case 16: NCISdatas16.set(response); break;
        case 17: NCISdatas17.set(response); break;
        case 18: NCISdatas18.set(response); break;
        case 19: NCISdatas19.set(response); break;
        case 20: NCISdatas20.set(response); break;
        case 21: NCISdatas21.set(response); break;
        case 22: NCISdatas22.set(response); break;
      }
      currentSeason++;
      setTimeout(loadNextSeason, 300);
    }
  });
</script>

<main>
  <BackArrow path="/" />
  <div>
    <h1>NCIS</h1>
  </div>

  {#if $loading}
    <div class="loading">
      <p>Loading NCIS seasons...</p>
    </div>
  {:else}
    <div>
      <h1>Season 1</h1>
      <div class="seaList">
        {#each $NCISdatas1 as d1}
          <button onclick={() => playtvshow(d1.TvId)}>{d1.Episode}</button>
        {/each}
      </div>
      <h1>Season 2</h1>
      <div class="seaList">
        {#each $NCISdatas2 as d2}
          <button onclick={() => playtvshow(d2.TvId)}>{d2.Episode}</button>
        {/each}
      </div>
      <h1>Season 3</h1>
      <div class="seaList">
        {#each $NCISdatas3 as d3}
          <button onclick={() => playtvshow(d3.TvId)}>{d3.Episode}</button>
        {/each}
      </div>
      <h1>Season 4</h1>
      <div class="seaList">
        {#each $NCISdatas4 as d4}
          <button onclick={() => playtvshow(d4.TvId)}>{d4.Episode}</button>
        {/each}
      </div>
      <h1>Season 5</h1>
      <div class="seaList">
        {#each $NCISdatas5 as d5}
          <button onclick={() => playtvshow(d5.TvId)}>{d5.Episode}</button>
        {/each}
      </div>
      <h1>Season 6</h1>
      <div class="seaList">
        {#each $NCISdatas6 as d6}
          <button onclick={() => playtvshow(d6.TvId)}>{d6.Episode}</button>
        {/each}
      </div>
      <h1>Season 7</h1>
      <div class="seaList">
        {#each $NCISdatas7 as d7}
          <button onclick={() => playtvshow(d7.TvId)}>{d7.Episode}</button>
        {/each}
      </div>
      <h1>Season 8</h1>
      <div class="seaList">
        {#each $NCISdatas8 as d8}
          <button onclick={() => playtvshow(d8.TvId)}>{d8.Episode}</button>
        {/each}
      </div>
      <h1>Season 9</h1>
      <div class="seaList">
        {#each $NCISdatas9 as d9}
          <button onclick={() => playtvshow(d9.TvId)}>{d9.Episode}</button>
        {/each}
      </div>
      <h1>Season 10</h1>
      <div class="seaList">
        {#each $NCISdatas10 as d10}
          <button onclick={() => playtvshow(d10.TvId)}>{d10.Episode}</button>
        {/each}
      </div>
      <h1>Season 11</h1>
      <div class="seaList">
        {#each $NCISdatas11 as d11}
          <button onclick={() => playtvshow(d11.TvId)}>{d11.Episode}</button>
        {/each}
      </div>
      <h1>Season 12</h1>
      <div class="seaList">
        {#each $NCISdatas12 as d12}
          <button onclick={() => playtvshow(d12.TvId)}>{d12.Episode}</button>
        {/each}
      </div>
      <h1>Season 13</h1>
      <div class="seaList">
        {#each $NCISdatas13 as d13}
          <button onclick={() => playtvshow(d13.TvId)}>{d13.Episode}</button>
        {/each}
      </div>
      <h1>Season 14</h1>
      <div class="seaList">
        {#each $NCISdatas14 as d14}
          <button onclick={() => playtvshow(d14.TvId)}>{d14.Episode}</button>
        {/each}
      </div>
      <h1>Season 15</h1>
      <div class="seaList">
        {#each $NCISdatas15 as d15}
          <button onclick={() => playtvshow(d15.TvId)}>{d15.Episode}</button>
        {/each}
      </div>
      <h1>Season 16</h1>
      <div class="seaList">
        {#each $NCISdatas16 as d16}
          <button onclick={() => playtvshow(d16.TvId)}>{d16.Episode}</button>
        {/each}
      </div>
      <h1>Season 17</h1>
      <div class="seaList">
        {#each $NCISdatas17 as d17}
          <button onclick={() => playtvshow(d17.TvId)}>{d17.Episode}</button>
        {/each}
      </div>
      <h1>Season 18</h1>
      <div class="seaList">
        {#each $NCISdatas18 as d18}
          <button onclick={() => playtvshow(d18.TvId)}>{d18.Episode}</button>
        {/each}
      </div>
      <h1>Season 19</h1>
      <div class="seaList">
        {#each $NCISdatas19 as d19}
          <button onclick={() => playtvshow(d19.TvId)}>{d19.Episode}</button>
        {/each}
      </div>
      <h1>Season 20</h1>
      <div class="seaList">
        {#each $NCISdatas20 as d20}
          <button onclick={() => playtvshow(d20.TvId)}>{d20.Episode}</button>
        {/each}
      </div>
      <h1>Season 21</h1>
      <div class="seaList">
        {#each $NCISdatas21 as d21}
          <button onclick={() => playtvshow(d21.TvId)}>{d21.Episode}</button>
        {/each}
      </div>
      <h1>Season 22</h1>
      <div class="seaList">
        {#each $NCISdatas22 as d22}
          <button onclick={() => playtvshow(d22.TvId)}>{d22.Episode}</button>
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