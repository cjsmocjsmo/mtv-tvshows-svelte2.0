<script>
	import { onMount } from 'svelte';
	import BackArrow from '$lib/components/BackArrow.svelte';
	
	
	
	let zoo = [];
	let zoo1 = [];
	let zoo2 = [];

	onMount(async () => {
		let addr1 = 'http://10.0.4.41:8080/starwars/badbatch/01';
		const res = await fetch(addr1);
		zoo = await res.json();

		let addr2 = 'http://10.0.4.41:8080/starwars/badbatch/02';
		const res2 = await fetch(addr2);
		zoo1 = await res2.json();

		let addr3 = 'http://10.0.4.41:8080/starwars/badbatch/03';
		const res3 = await fetch(addr3);
		zoo2 = await res3.json();
	});
</script>

<main>
	<BackArrow path="/TVShows/tvshows" />
	<div>
		<h1>Bad Batch</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each zoo as d}
				<SeasonButton info={d} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 2</h1>
		<div class="seaList">
			{#each zoo1 as d2}
				<SeasonButton info={d2} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 3</h1>
		<div class="seaList">
			{#each zoo2 as d3}
				<SeasonButton info={d3} />
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
