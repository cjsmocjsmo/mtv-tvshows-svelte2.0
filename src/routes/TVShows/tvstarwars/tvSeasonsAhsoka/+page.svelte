<script>
	import { onMount } from 'svelte';
	import BackArrow from '$lib/components/BackArrow.svelte';
	
	
	
	let s1 = [];

	onMount(async () => {
		let addr = 'http://10.0.4.41:8080/starwars/ahsoka/01';
		const res = await fetch(addr);
		s1 = await res.json();
		console.log(s1)
	});
</script>

<main>
	<BackArrow path="/TVShows/tvshows" />
	<div>
		<h1>Ahsoka</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each s1 as d}
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