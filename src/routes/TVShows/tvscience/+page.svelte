<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvPreHistoricPlanetCard from '$lib/components/science/TVPreHistoricPlanetCard.svelte';
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<TvPreHistoricPlanetCard src={"http://10.0.4.41:9998/prehistoricplanet.jpg"} />
		</div>
	</div>
</div>

<style>
	.bar {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>
