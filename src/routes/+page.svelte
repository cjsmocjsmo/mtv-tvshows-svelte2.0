<script>
	import MainTVList from '$lib/components/MainTVList.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<svelte:head>
	<title>MTV-TVShows</title>
	<meta name="description" content="MTV" />
</svelte:head>

<main>
	<h1>MTV TVShows</h1>

	<NavBar />
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
