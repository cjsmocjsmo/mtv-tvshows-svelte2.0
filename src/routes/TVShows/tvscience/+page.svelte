<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvPreHistoricPlanetCard from '$lib/components/science/TVPreHistoricPlanetCard.svelte';
	import TvColumbiaCard from '$lib/components/science/TVColumbiaCard.svelte';
	import TVPersonOfInterestCard from '$lib/components/science/TVPersonOfInterestCard.svelte';
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<TvColumbiaCard src={"http://10.0.4.41:9998/columbia.jpg"} />
			<TvPreHistoricPlanetCard src={"http://10.0.4.41:9998/prehistoricplanet.jpg"} />
			<TVPersonOfInterestCard src={"http://10.0.4.41:9998/personofinterest.jpg"} />
		</div>
	</div>
</div>

<style>
	.bar {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
	}

	@media (min-width: 500px) {
		.bar {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 700px) {
		.bar {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 900px) {
		.bar {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
