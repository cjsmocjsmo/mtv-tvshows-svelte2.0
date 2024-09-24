<script>
	import BackArrow from '$lib/components/BackArrow.svelte';

	import TvVisionsCard from '$lib/components/tvstarwars/TVVisionsCard.svelte';
	import VisionsImg from '$lib/images/starwars/visions.avif';

	import TvAndorCard from '$lib/components/tvstarwars/TVAndorCard.svelte';
	import AndorImg from '$lib/images/starwars/andor.avif';

	import TvBadBatchCard from '$lib/components/tvstarwars/TVBadBatchCard.svelte';
	import BadBatchImg from '$lib/images/starwars/badbatch.avif';

	import BobbaFettImg from '$lib/images/starwars/bobafett.avif';
	import TvBobbaFettCard from '$lib/components/tvstarwars/TVBobbaFettCard.svelte';

	import MandalorianImg from '$lib/images/starwars/mandalorian.avif';
	import TvMandalorianCard from '$lib/components/tvstarwars/TvMandalorianCard.svelte';

	import TalesOfTheJediImg from '$lib/images/starwars/talesofthejedi.avif';
	import TvTalesOfTheJediCard from '$lib/components/tvstarwars/TVTalesOfTheJediCard.svelte';

	import ObiWanImg from '$lib/images/starwars/obiwan.avif';
	import TvObiWanCard from '$lib/components/tvstarwars/TVObiWanCard.svelte';

	import AhsokaImg from '$lib/images/starwars/ahsoka.webp';
	import TvAhsokaCard from '$lib/components/tvstarwars/TVAhsokaCard.svelte';
</script>

<div>
	<BackArrow path="/" />
	<h1>Star Wars</h1>
	<div class="foo">
		<div class="bar">
			<TvAhsokaCard src={AhsokaImg} />
			<TvAndorCard src={AndorImg} />
			<TvBadBatchCard src={BadBatchImg} />
			<TvBobbaFettCard src={BobbaFettImg} />
			<TvMandalorianCard src={MandalorianImg} />
			<TvTalesOfTheJediCard src={TalesOfTheJediImg} />
			<TvObiWanCard src={ObiWanImg} />
			<TvVisionsCard src={VisionsImg} />
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
		color: yellowgreen;
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
