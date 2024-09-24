<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvIAmGrootCard from '$lib/components/tvmcu/TVIAmGrootCard.svelte';
	import IAmGroot from '$lib/images/mcu/iamgroot.avif';
	import TvFalconWinterSoldierCard from '$lib/components/tvmcu/TVFalconWinterSoldierCard.svelte';
	import FalconWinterSoldier from '$lib/images/mcu/falconwintersoldier.avif';
	import TvLokiCard from '$lib/components/tvmcu/TVLokiCard.svelte';
	import Loki from '$lib/images/mcu/loki.avif';
	import TvHawkeyeCard from '$lib/components/tvmcu/TVHawkeyeCard.svelte';
	import Hawkeye from '$lib/images/mcu/Hawkeye.avif';
	import MoonKnightCard from '$lib/components/tvmcu/TVMoonKnightCard.svelte';
	import MoonKnight from '$lib/images/mcu/moonknight.avif';
	import MsMarvelCard from '$lib/components/tvmcu/TVMsMarvelCard.svelte';
	import MsMarvel from '$lib/images/mcu/ms_marvel.avif';
	import SheHulkCard from '$lib/components/tvmcu/TVSheHulkCard.svelte';
	import SheHulk from '$lib/images/mcu/shehulk.avif';
	import WandavisionCard from '$lib/components/tvmcu/TVWandavisionCard.svelte';
	import Wandavision from '$lib/images/mcu/wandavision.avif';
	import SecretInvasionCard from '$lib/components/tvmcu/TVSecretInvasionCard.svelte';
	import SecretInvasionImg from '$lib/images/mcu/secret_invasion.avif';
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<SecretInvasionCard src={SecretInvasionImg} />
			<TvIAmGrootCard src={IAmGroot} />
			<TvLokiCard src={Loki} />
			<MsMarvelCard src={MsMarvel} />
			<MoonKnightCard src={MoonKnight} />
			<SheHulkCard src={SheHulk} />
			<TvHawkeyeCard src={Hawkeye} />
			<TvFalconWinterSoldierCard src={FalconWinterSoldier} />
			<WandavisionCard src={Wandavision} />
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
