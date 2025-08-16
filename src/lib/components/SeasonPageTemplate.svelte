<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import BackArrow from '$lib/components/BackArrow.svelte';
	import MovList from '$lib/components/MovList.svelte';
	import { requestShowData, wsLastResponse } from '$lib/stores/websocket.js';

	let { showName, seasonCount = 7, title, backPath = "/" } = $props();

	// Create season data stores
	const seasonData = {};
	for (let i = 1; i <= seasonCount; i++) {
		seasonData[`season${i}`] = writable([]);
	}

	let loading = writable(true);
	let currentSeason = 1;

	onMount(() => {
		// Load seasons sequentially to avoid overwhelming the connection
		loadNextSeason();
	});

	function loadNextSeason() {
		if (currentSeason > seasonCount) {
			loading.set(false);
			return;
		}

		const command = `${showName}s${currentSeason}`;
		requestShowData(command);
	}

	// Listen for responses
	const unsubscribe = wsLastResponse.subscribe((response) => {
		if (response && Array.isArray(response) && currentSeason <= seasonCount) {
			seasonData[`season${currentSeason}`].set(response);
			currentSeason++;
			setTimeout(loadNextSeason, 500); // Small delay between requests
		}
	});
</script>

<main>
	<BackArrow path={backPath} />
	<div><h1>{title}</h1></div>
	
	{#each Array.from({length: seasonCount}, (_, i) => i + 1) as seasonNum}
		{#await seasonData[`season${seasonNum}`].subscribe() then data}
		<div>
			<h2>Season {seasonNum}</h2>
			{#if data && data.length > 0}
				<MovList data={data} />
			{:else}
				<p>Loading Season {seasonNum}...</p>
			{/if}
		</div>
		{/await}
	{/each}
</main>
