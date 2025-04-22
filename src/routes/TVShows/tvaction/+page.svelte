<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TheContinental from '$lib/components/action/TVTheContinentalCard.svelte';
    import Shogun from '$lib/components/action/TVShogunCard.svelte';
	import MobLand from '$lib/components/action/TVMobLandCard.svelte';

</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<Shogun src={"http://10.0.4.41:9998/shogun.jpg"} />
            <TheContinental src={"http://10.0.4.41:9998/continental.jpg"} />
			<MobLand src={"http://10.0.4.41:9998/mobland.jpg"} />
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
