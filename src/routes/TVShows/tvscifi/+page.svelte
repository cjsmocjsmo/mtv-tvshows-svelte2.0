<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvSiloCard from '$lib/components/tvscifi/TVSiloCard.svelte';
	import SiloImg from '$lib/images/scifi/Silo.webp';
	import TvTheLastOfUsCard from '$lib/components/tvscifi/TVTheLastOfUsCard.svelte';
	import TheLastOfUsImg from '$lib/images/scifi/lastofus.avif';
	import TvFoundationCard from '$lib/components/tvscifi/TVFoundationCard.svelte';
	import FoundationImg from '$lib/images/scifi/foundation.avif';
	import TvAlteredCarbonCard from '$lib/components/tvscifi/TVAlteredCarbonCard.svelte';
	import AlteredCarbonImg from '$lib/images/scifi/alteredcarbon.avif';
	import TvCowboyBebopCard from '$lib/components/tvscifi/TVCowboyBebopCard.svelte';
	import CowboyBebopImg from '$lib/images/scifi/cowboy_bebop.avif';
	import TvForAllManKindCard from '$lib/components/tvscifi/TVForAllManKindCard.svelte';
	import ForAllManKindImg from '$lib/images/scifi/forallmankind.avif';
	import TvLostInSpaceCard from '$lib/components/tvscifi/TVLostInSpaceCard.svelte';
	import LostInSpaceImg from '$lib/images/scifi/lostinspace.avif';
	import TvRaisedByWolvesCard from '$lib/components/tvscifi/TVRaisedByWolvesCard.svelte';
	import RaisedByWolvesImg from '$lib/images/scifi/raisedbywolves.avif';
	import TvNightSkyCard from '$lib/components/tvscifi/TVNightSkyCard.svelte';
	import NightSkyImg from '$lib/images/scifi/nightsky.avif';
	import TvOrvilleCard from '$lib/components/tvscifi/TVOrvilleCard.svelte';
	import OrvilleImg from '$lib/images/scifi/orville.avif';
	import TvHaloCard from '$lib/components/tvscifi/TvHaloCard.svelte';
	import HaloImg from '$lib/images/scifi/halo.avif';
	import MonarchLegacyOfMonstersImg from '$lib/images/scifi/monarchlegacyofmonsters.webp';
	import TvMonarchLegacyOfMonstersCard from '$lib/components/tvscifi/TVMonarchLegacyOfMonstersCard.svelte';
	import FalloutImg from '$lib/images/scifi/fallout.webp';
	import TvFalloutCard from '$lib/components/tvscifi/TVFalloutCard.svelte';
</script>

<div>
	<BackArrow path="/" />
	<h1>Sci-Fi</h1>
	<div class="foo">
		<div class="bar">
			<TvFalloutCard src={FalloutImg} />
			<TvSiloCard src={SiloImg} />
			<TvTheLastOfUsCard src={TheLastOfUsImg} />
			<TvOrvilleCard src={OrvilleImg} />
			<TvHaloCard src={HaloImg} />
			<TvForAllManKindCard src={ForAllManKindImg} />
			<TvMonarchLegacyOfMonstersCard src={MonarchLegacyOfMonstersImg} />
			<TvFoundationCard src={FoundationImg} />
			<TvAlteredCarbonCard src={AlteredCarbonImg} />
			<TvCowboyBebopCard src={CowboyBebopImg} />
			<TvLostInSpaceCard src={LostInSpaceImg} />
			<TvRaisedByWolvesCard src={RaisedByWolvesImg} />
			<TvNightSkyCard src={NightSkyImg} />
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
