<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvHouseOfTheDragonCard from '$lib/components/fantasy/TVHouseOfTheDragonCard.svelte';
	import TvRingsOfPowerCard from '$lib/components/fantasy/TVRingsOfPowerCard.svelte';
	import TvWheelOfTimeCard from '$lib/components/fantasy/TVWheelOfTimeCard.svelte';
	import TvWednesdayCard from '$lib/components/fantasy/TVWednesdayCard.svelte';
	import TvPercyJacksonAndTheOlympiansCard from '$lib/components/fantasy/TVPercyJacksonAndTheOlympiansCard.svelte';
	import { getImageUrl } from '$lib/config.js';
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<TvHouseOfTheDragonCard src={getImageUrl("/houseofthedragon.jpg")} />
			<TvRingsOfPowerCard src={getImageUrl("/thelordoftheringsringsofpower.jpg")} />
			<TvWheelOfTimeCard src={getImageUrl("/wheeloftime.jpg")} />
			<TvWednesdayCard src={getImageUrl("/wednesday.jpg")} />
			<TvPercyJacksonAndTheOlympiansCard src={getImageUrl("/percyjacksonandtheolympians.jpg")} />
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
