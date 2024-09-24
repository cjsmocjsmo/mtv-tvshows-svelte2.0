<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvHouseOfTheDragonCard from '$lib/components/fantasy/TVHouseOfTheDragonCard.svelte';
	import HouseOfTheDragon from '$lib/images/fantasy/houseofthedragon.avif';
	import RingsOfPowerCard from '$lib/components/fantasy/TVRingsOfPowerCard.svelte';
	import RingsOfPower from '$lib/images/fantasy/thelordoftheringsringsofpower.avif';
	import TvWheelOfTimeCard from '$lib/components/fantasy/TVWheelOfTimeCard.svelte';
	import WheelOfTime from '$lib/images/fantasy/wheeloftime.avif';
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<div class="bar">
			<TvHouseOfTheDragonCard src={HouseOfTheDragon} />
			<RingsOfPowerCard src={RingsOfPower} />
			<TvWheelOfTimeCard src={WheelOfTime} />
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
