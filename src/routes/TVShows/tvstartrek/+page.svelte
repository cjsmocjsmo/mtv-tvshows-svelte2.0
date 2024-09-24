<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvVoyagerCard from '$lib/components/tvstartrek/TVVoyagerCard.svelte';
	import VoyagerImg from '$lib/images/startrek/voyager.avif';
	import TvSTTVCard from '$lib/components/tvstartrek/TVSTTVCard.svelte';
	import STTVImg from '$lib/images/startrek/sttv.avif';
	import TvEnterpriseCard from '$lib/components/tvstartrek/TVEnterpriseCard.svelte';
	import EnterpriseImg from '$lib/images/startrek/enterprise.avif';
	import TvNextGenerationCard from '$lib/components/tvstartrek/TVNextGenerationCard.svelte';
	import NextGenerationImg from '$lib/images/startrek/nextgen.avif';
	import TvDiscoveryCard from '$lib/components/tvstartrek/TVDiscoveryCard.svelte';
	import DiscoveryImg from '$lib/images/startrek/discovery.avif';
	import TvPicardCard from '$lib/components/tvstartrek/TVPicardCard.svelte';
	import PicardImg from '$lib/images/startrek/picard.avif';
	import TvLowerDecksCard from '$lib/components/tvstartrek/TVLowerDecksCard.svelte';
	import LowerDecksImg from '$lib/images/startrek/lowerdecks.avif';
	import TvProdigyCard from '$lib/components/tvstartrek/TVProdigyCard.svelte';
	import ProdigyImg from '$lib/images/startrek/prodigy.avif';
	import TvStrangeNewWorldsCard from '$lib/components/tvstartrek/TVStrangeNewWorldsCard.svelte';
	import StrangeNewWorldsImg from '$lib/images/startrek/strangenewworlds.avif';
</script>

<div>
	<BackArrow path="/" />
	<h1>Star Trek</h1>
	<div class="foo">
		<div class="bar">
			<TvVoyagerCard src={VoyagerImg} />
			<TvSTTVCard src={STTVImg} />
			<TvEnterpriseCard src={EnterpriseImg} />
			<TvNextGenerationCard src={NextGenerationImg} />
			<TvDiscoveryCard src={DiscoveryImg} />
			<TvPicardCard src={PicardImg} />
			<TvLowerDecksCard src={LowerDecksImg} />
			<TvProdigyCard src={ProdigyImg} />
			<TvStrangeNewWorldsCard src={StrangeNewWorldsImg} />
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
		color: yellowgreen;
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
