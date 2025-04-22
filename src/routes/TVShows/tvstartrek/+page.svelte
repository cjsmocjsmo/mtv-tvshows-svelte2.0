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
</script>

<div>
	<BackArrow path="/" />
	<h1>Star Trek</h1>
	<div class="foo">
		<div class="bar">
			<TvVoyagerCard src={"http://10.0.4.41:9998/voyager.jpg"} />
			<TvSTTVCard src={"http://10.0.4.41:9998/sttv.jpg"} />
			<TvEnterpriseCard src={"http://10.0.4.41:9998/enterprise.jpg"} />
			<TvNextGenerationCard src={"http://10.0.4.41:9998/nextgen.jpg"} />
			<TvDiscoveryCard src={"http://10.0.4.41:9998/discovery.jpg"} />
			<TvPicardCard src={"http://10.0.4.41:9998/picard.jpg"} />
			<TvLowerDecksCard src={"http://10.0.4.41:9998/lowerdecks.jpg"} />
			<TvProdigyCard src={"http://10.0.4.41:9998/prodigy.jpg"} />
			<TvStrangeNewWorldsCard src={"http://10.0.4.41:9998/strangenewworlds.jpg"} />
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
