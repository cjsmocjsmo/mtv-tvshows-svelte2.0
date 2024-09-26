<script>
	import MainTVList from '$lib/components/MainTVList.svelte';
</script>

<svelte:head>
	<title>MTV-TVShows</title>
	<meta name="description" content="MTV" />
</svelte:head>

<main>
	<h1>MTV TVShows</h1>
	<a href="http://10.0.4.54:8090/"><h3>Movies</h3></a>
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
	h1 {
		color: yellowgreen;
	}
</style>
