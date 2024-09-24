<script>
	import { onMount } from 'svelte';
	import BackArrow from '$lib/components/BackArrow.svelte';
	
	

	let data1 = [];
	let data2 = [];
	let data3 = [];
	let data4 = [];
	let data5 = [];
	let data6 = [];
	let data7 = [];

	onMount(async () => {
		let addr = 'http://10.0.4.41:8080/startrek/voyager/01';
		const res = await fetch(addr);
		data1 = await res.json();

		let addr2 = 'http://10.0.4.41:8080/startrek/voyager/02';
		const res2 = await fetch(addr2);
		data2 = await res2.json();

		let addr3 = 'http://10.0.4.41:8080/startrek/voyager/03';
		const res3 = await fetch(addr3);
		data3 = await res3.json();

		let addr4 = 'http://10.0.4.41:8080/startrek/voyager/04';
		const res4 = await fetch(addr4);
		data4 = await res4.json();

		let addr5 = 'http://10.0.4.41:8080/startrek/voyager/05';
		const res5 = await fetch(addr5);
		data5 = await res5.json();

		let addr6 = 'http://10.0.4.41:8080/startrek/voyager/06';
		const res6 = await fetch(addr6);
		data6 = await res6.json();

		let addr7 = 'http://10.0.4.41:8080/startrek/voyager/07';
		const res7 = await fetch(addr7);
		data7 = await res7.json();
	});
</script>

<main>
	<BackArrow path="/" />
	<div>
		<h1>Voyager</h1>
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
	<div>
		<h1>Season 4</h1>
		<div class="seaList">
			{#each data4 as d4}
				<SeasonButton info={d4} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 5</h1>
		<div class="seaList">
			{#each data5 as d5}
				<SeasonButton info={d5} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 6</h1>
		<div class="seaList">
			{#each data6 as d6}
				<SeasonButton info={d6} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 7</h1>
		<div class="seaList">
			{#each data7 as d7}
				<SeasonButton info={d7} />
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