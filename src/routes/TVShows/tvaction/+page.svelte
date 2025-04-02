<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TheContinental from '$lib/components/action/TVTheContinentalCard.svelte';
	import TheContinentalimg from '$lib/images/action/continental.webp';
    import Shogun from '$lib/components/action/TVShogunCard.svelte';
    import Shogunimg from '$lib/images/action/shogun.webp';
	import MobLand from '$lib/components/action/MobLandCard.svelte';
	import MobLandimg from '$lib/images/action/mobland.webp';

</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<Shogun src={Shogunimg} />
            <TheContinental src={TheContinentalimg} />
			<MobLand src={MobLandimg} />
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
