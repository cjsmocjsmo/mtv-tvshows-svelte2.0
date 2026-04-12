<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvSiloCard from '$lib/components/tvscifi/TVSiloCard.svelte';
	import TvTheLastOfUsCard from '$lib/components/tvscifi/TVTheLastOfUsCard.svelte';
	import TvFoundationCard from '$lib/components/tvscifi/TVFoundationCard.svelte';
	import TvAlteredCarbonCard from '$lib/components/tvscifi/TVAlteredCarbonCard.svelte';
	import TvCowboyBebopCard from '$lib/components/tvscifi/TVCowboyBebopCard.svelte';
	import TvForAllManKindCard from '$lib/components/tvscifi/TVForAllManKindCard.svelte';
	import TvLostInSpaceCard from '$lib/components/tvscifi/TVLostInSpaceCard.svelte';
	import TvRaisedByWolvesCard from '$lib/components/tvscifi/TVRaisedByWolvesCard.svelte';
	import TvNightSkyCard from '$lib/components/tvscifi/TVNightSkyCard.svelte';
	import TvOrvilleCard from '$lib/components/tvscifi/TVOrvilleCard.svelte';
	import TvHaloCard from '$lib/components/tvscifi/TvHaloCard.svelte';
	import TvMonarchLegacyOfMonstersCard from '$lib/components/tvscifi/TVMonarchLegacyOfMonstersCard.svelte';
	import TvFalloutCard from '$lib/components/tvscifi/TVFalloutCard.svelte';
</script>

<div>
	<BackArrow path="/" />
	<h1>Sci-Fi</h1>
	<div class="foo">
		<div class="bar">
			<TvFalloutCard src={"http://10.0.4.41:8080/tvthumbnails/fallout.jpg"} />
			<TvSiloCard src={"http://10.0.4.41:8080/tvthumbnails/silo.jpg"} />
			<TvTheLastOfUsCard src={"http://10.0.4.41:8080/tvthumbnails/lastofus.jpg"} />
			<TvOrvilleCard src={"http://10.0.4.41:8080/tvthumbnails/orville.jpg"} />
			<TvHaloCard src={"http://10.0.4.41:8080/tvthumbnails/halo.jpg"} />
			<TvForAllManKindCard src={"http://10.0.4.41:8080/tvthumbnails/forallmankind.jpg"} />
			<TvMonarchLegacyOfMonstersCard src={"http://10.0.4.41:8080/tvthumbnails/monarchlegacyofmonsters.jpg"} />
			<TvFoundationCard src={"http://10.0.4.41:8080/tvthumbnails/foundation.jpg"} />
			<TvAlteredCarbonCard src={"http://10.0.4.41:8080/tvthumbnails/alteredcarbon.jpg"} />
			<TvCowboyBebopCard src={"http://10.0.4.41:8080/tvthumbnails/cowboy_bebop.jpg"} />
			<TvLostInSpaceCard src={"http://10.0.4.41:8080/tvthumbnails/lostinspace.jpg"} />
			<TvRaisedByWolvesCard src={"http://10.0.4.41:8080/tvthumbnails/raisedbywolves.jpg"} />
			<TvNightSkyCard src={"http://10.0.4.41:8080/tvthumbnails/nightsky.jpg"} />
		</div>
	</div>
</div>

<style>
	.bar {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
	}
	h1 {
		color: yellowgreen
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
