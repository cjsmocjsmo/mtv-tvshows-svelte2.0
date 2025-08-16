<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvHouseOfTheDragonCard from '$lib/components/fantasy/TVHouseOfTheDragonCard.svelte';
	import TvRingsOfPowerCard from '$lib/components/fantasy/TVRingsOfPowerCard.svelte';
	import TvWheelOfTimeCard from '$lib/components/fantasy/TVWheelOfTimeCard.svelte';
	import TvWednesdayCard from '$lib/components/fantasy/TVWednesdayCard.svelte';
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<TvHouseOfTheDragonCard src={"http://10.0.4.41:9998/houseofthedragon.jpg"} />
			<TvRingsOfPowerCard src={"http://10.0.4.41:9998/thelordoftheringsringsofpower.jpg"} />
			<TvWheelOfTimeCard src={"http://10.0.4.41:9998/wheeloftime.jpg"} />
			<TvWednesdayCard src={"http://10.0.4.41:9998/wednesday.jpg"} />
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
