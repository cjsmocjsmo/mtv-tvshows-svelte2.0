<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TonyAndZiva from '$lib/components/crime/TonyAndZivaCard.svelte';
    

</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
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
