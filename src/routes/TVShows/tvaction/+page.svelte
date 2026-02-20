<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TheContinental from '$lib/components/action/TVTheContinentalCard.svelte';
    import Shogun from '$lib/components/action/TVShogunCard.svelte';
	import MobLand from '$lib/components/action/TVMobLandCard.svelte';
	import DarkWinds from '$lib/components/action/TVDarkWindsCard.svelte';

</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<Shogun src={"http://10.0.4.41:9998/shogun.jpg"} />
            <TheContinental src={"http://10.0.4.41:9998/continental.jpg"} />
			<MobLand src={"http://10.0.4.41:9998/mobland.jpg"} />
			<DarkWinds src={"http://10.0.4.41:9998/darkwinds.jpg"} />
		</div>
	</div>
</div>

<style>
	.bar {
		display: grid;
  		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  		gap: 1rem;
  		padding: 1rem;
	}
	@container (min-width: 600px) {
  		.bar {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}
</style>
