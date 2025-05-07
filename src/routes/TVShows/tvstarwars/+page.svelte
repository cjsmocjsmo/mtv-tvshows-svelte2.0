<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvVisionsCard from '$lib/components/tvstarwars/TVVisionsCard.svelte';
	import TvAndorCard from '$lib/components/tvstarwars/TVAndorCard.svelte';
	import TvBadBatchCard from '$lib/components/tvstarwars/TVBadBatchCard.svelte';
	import TvBobbaFettCard from '$lib/components/tvstarwars/TVBobbaFettCard.svelte';
	import TvMandalorianCard from '$lib/components/tvstarwars/TvMandalorianCard.svelte';
	import TvTalesOfTheJediCard from '$lib/components/tvstarwars/TVTalesOfTheJediCard.svelte';
	import TvObiWanCard from '$lib/components/tvstarwars/TVObiWanCard.svelte';
	import TvAhsokaCard from '$lib/components/tvstarwars/TVAhsokaCard.svelte';
	import TvSkeletonCrewCard from '$lib/components/tvstarwars/TVSkeletonCrewCard.svelte';
	import TvTalesOfTheEmpireCard from '$lib/components/tvstarwars/TVTalesOfTheEmpireCard.svelte';
</script>

<div>
	<BackArrow path="/" />
	<h1>Star Wars</h1>
	<div class="foo">
		<div class="bar">
			<TvSkeletonCrewCard src={"http://10.0.4.41:9998/skeletoncrew.jpg"} />
			<TvAhsokaCard src={"http://10.0.4.41:9998/ahsoka.jpg"} />
			<TvAndorCard src={"http://10.0.4.41:9998/andor.jpg"} />
			<TvBadBatchCard src={"http://10.0.4.41:9998/badbatch.jpg"} />
			<TvBobbaFettCard src={"http://10.0.4.41:9998/bobafett.jpg"} />
			<TvMandalorianCard src={"http://10.0.4.41:9998/mandalorian.jpg"} />
			<TvTalesOfTheEmpireCard src={"http://10.0.41:9998/talesoftheempire.jpg"} />
			<TvTalesOfTheJediCard src={"http://10.0.4.41:9998/talesofthejedi.jpg"} />
			<TvObiWanCard src={"http://10.0.4.41:9998/obiwan.jpg"} />
			<TvVisionsCard src={"http://10.0.4.41:9998/visions.jpg"} />
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
