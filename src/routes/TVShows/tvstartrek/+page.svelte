<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvVoyagerCard from '$lib/components/tvstartrek/TVVoyagerCard.svelte';
	import TvSTTVCard from '$lib/components/tvstartrek/TVSTTVCard.svelte';
	import TvEnterpriseCard from '$lib/components/tvstartrek/TVEnterpriseCard.svelte';
	import TvNextGenerationCard from '$lib/components/tvstartrek/TVNextGenerationCard.svelte';
	import TvDiscoveryCard from '$lib/components/tvstartrek/TVDiscoveryCard.svelte';
	import TvPicardCard from '$lib/components/tvstartrek/TVPicardCard.svelte';
	import TvLowerDecksCard from '$lib/components/tvstartrek/TVLowerDecksCard.svelte';
	import TvProdigyCard from '$lib/components/tvstartrek/TVProdigyCard.svelte';
	import TvStrangeNewWorldsCard from '$lib/components/tvstartrek/TVStrangeNewWorldsCard.svelte';
	import TvDeepSpaceNineCard from '$lib/components/tvstartrek/TVDeepSpaceNineCard.svelte';
	import { getImageUrl } from '$lib/config.js';
</script>

<div>
	<BackArrow path="/" />
	<h1>Star Trek</h1>
	<div class="foo">
		<div class="bar">
			<TvVoyagerCard src={getImageUrl("/voyager.jpg")} />
			<TvSTTVCard src={getImageUrl("/sttv.jpg")} />
			<TvEnterpriseCard src={getImageUrl("/enterprise.jpg")} />
			<TvNextGenerationCard src={getImageUrl("/nextgen.jpg")} />
			<TvDiscoveryCard src={getImageUrl("/discovery.jpg")} />
			<TvPicardCard src={getImageUrl("/picard.jpg")} />
			<TvLowerDecksCard src={getImageUrl("/lowerdecks.jpg")} />
			<TvProdigyCard src={getImageUrl("/prodigy.jpg")} />
			<TvStrangeNewWorldsCard src={getImageUrl("/strangenewworlds.jpg")} />
			<TvDeepSpaceNineCard src={getImageUrl("/deepspacenine.jpg")} />
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
