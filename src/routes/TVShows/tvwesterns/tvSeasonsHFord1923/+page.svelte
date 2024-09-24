<script>
	import { onMount } from 'svelte';
	import BackArrow from '$lib/components/BackArrow.svelte';
	
	

	let data = [];

	onMount(async () => {
		let addr = 'http://10.0.4.41:8080/hford1923/01';
		const res = await fetch(addr);
		data = await res.json();
		console.log(data)
	});
</script>

<main>
	<BackArrow path="/TVShows/tvshows" />
	<div>
		<h1>1923</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each data as d}
				<SeasonButton info={d} />
			{/each}
		</div>
	</div>
	
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.seaList {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>