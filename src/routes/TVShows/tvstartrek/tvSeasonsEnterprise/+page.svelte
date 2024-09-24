<script>
	import { onMount } from 'svelte';
	import BackArrow from '$lib/components/BackArrow.svelte';
	
	

	let data1 = [];
	let data2 = [];
	let data3 = [];

	onMount(async () => {
		let addr = 'http://10.0.4.41:8080/startrek/enterprise/01';
		const res = await fetch(addr);
		data1 = await res.json();

		let addr2 = 'http://10.0.4.41:8080/startrek/enterprise/02';
		const res2 = await fetch(addr2);
		data2 = await res2.json();

		let addr3 = 'http://10.0.4.41:8080/startrek/enterprise/03';
		const res3 = await fetch(addr3);
		data3 = await res3.json();
	});
</script>

<main>
	<BackArrow path="/" />
	<div>
		<h1>Enterprise</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each data1 as d}
				<SeasonButton info={d} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 2</h1>
		<div class="seaList">
			{#each data2 as d2}
				<SeasonButton info={d2} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 3</h1>
		<div class="seaList">
			{#each data3 as d3}
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