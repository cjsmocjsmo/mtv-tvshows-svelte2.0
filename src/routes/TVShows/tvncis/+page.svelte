<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import NCIS from '$lib/components/ncis/NCISCard.svelte';
	import NCISHawaii from '$lib/components/ncis/NCISHawaii.svelte';
	import NCISSydney from '$lib/components/ncis/NCISSydneyCard.svelte';
	import NCISOrigins from '$lib/components/ncis/NCISOriginsCard.svelte';
	import NCISLA from '$lib/components/ncis/NCISLACard.svelte';
	import NCISNewOrleans from '$lib/components/ncis/NCISNewOrleansCard.svelte';
	import TonyAndZiva from '$lib/components/ncis/TonyAndZivaCard.svelte';

    

</script>

<div>
	<BackArrow path="/" />
	<h1>NCIS</h1>
	<div class="foo">
		<div class="bar">
			<NCIS src={"http://10.0.4.41:9998/ncis.jpg"} />
			<NCISLA src={"http://10.0.4.41:9998/ncis_los_angeles.jpg"} />
			<NCISNewOrleans src={"http://10.0.4.41:9998/ncis_new_orleans.jpg"} />
			<NCISHawaii src={"http://10.0.4.41:9998/ncis_hawaii.jpg"} />
			<NCISSydney src={"http://10.0.4.41:9998/ncis_sydney.jpg"} />
			<NCISOrigins src={"http://10.0.4.41:9998/ncis_origins.jpg"} />
			<TonyAndZiva src={"http://10.0.4.41:9998/tonyandziva.jpg"} />
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
