<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvPreHistoricPlanetCard from '$lib/components/science/TVPreHistoricPlanetCard.svelte';
	import PrehistoricImg from '$lib/images/science/prehistoricplanet.avif';
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<TvPreHistoricPlanetCard src={PrehistoricImg} />
		</div>
	</div>
</div>

<style>
	.bar {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
		margin-left: 2em;
	}

	@media (min-width: 500px) {
		.bar {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	/* @media (min-width: 700px) {
		.bar {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 900px) {
		.bar {
			grid-template-columns: repeat(4, 1fr);
		}
	} */
</style>
