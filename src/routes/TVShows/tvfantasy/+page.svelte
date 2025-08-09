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
			<TvWednesdayCard src={"http://10.0.4:9998/Wednesday.jpg"} />
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
	@media (min-width: 600px) {
		.bar {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 700px) {
		.bar {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
