<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvIAmGrootCard from '$lib/components/tvmcu/TVIAmGrootCard.svelte';
	import TvFalconWinterSoldierCard from '$lib/components/tvmcu/TVFalconWinterSoldierCard.svelte';
	import TvLokiCard from '$lib/components/tvmcu/TVLokiCard.svelte';
	import TvHawkeyeCard from '$lib/components/tvmcu/TVHawkeyeCard.svelte';
	import MoonKnightCard from '$lib/components/tvmcu/TVMoonKnightCard.svelte';
	import SheHulkCard from '$lib/components/tvmcu/TVSheHulkCard.svelte';
	import WandavisionCard from '$lib/components/tvmcu/TVWandavisionCard.svelte';
	import SecretInvasionCard from '$lib/components/tvmcu/TVSecretInvasionCard.svelte';
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<SecretInvasionCard src={"http://10.0.4.41:9998/secret_invasion.jpg"} />
			<TvIAmGrootCard src={"http://10.0.4.41:9998/iamgroot.jpg"} />
			<TvLokiCard src={"http://10.0.4.41:9998/loki.jpg"} />
			<MoonKnightCard src={"http://10.0.4.41:9998/moonknight.jpg"} />
			<SheHulkCard src={"http://10.0.4.41:9998/shehulk.jpg"} />
			<TvHawkeyeCard src={"http://10.0.4.41:9998/hawkeye.jpg"} />
			<TvFalconWinterSoldierCard src={"http://10.0.4.41:9998/falconwintersoldier.jpg"} />
			<WandavisionCard src={"http://10.0.4.41:9998/wandavision.jpg"} />
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
