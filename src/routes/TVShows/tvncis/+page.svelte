<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import NCIS from '$lib/components/ncis/NCISCard.svelte';
	import NCISHawaii from '$lib/components/ncis/NCISHawaii.svelte';
	import NCISSydney from '$lib/components/ncis/NCISSydneyCard.svelte';
	import NCISOrigins from '$lib/components/ncis/NCISOriginsCard.svelte';
	import TonyAndZiva from '$lib/components/ncis/TonyAndZivaCard.svelte';

    

</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<NCIS src={"http://10.0.4.41:9998/ncis.jpg"} />
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
