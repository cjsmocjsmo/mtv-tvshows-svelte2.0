<script>
	import MainTVList from '$lib/components/MainTVList.svelte';
</script>

<svelte:head>
	<title>MTV-TVShows</title>
	<meta name="description" content="MTV" />
</svelte:head>

<main>
	<h1>MTV TVShows</h1>
	<div class="foo">
		<a href="http://10.0.4.58:8090/"><h3>Movies</h3></a>
		<a href="http://10.0.4.39:9090/"><h3>Music</h3></a>
	</div>
	
	<div>
		<MainTVList />
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
	.foo {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h3 {
		margin: 1em;
	}
	h1 {
		color: yellowgreen;
	}
</style>
