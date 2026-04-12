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
	import TvTalesOfTheUnderwroldCard from '$lib/components/tvstarwars/TVTalesOfTheUnderworldCard.svelte';
	import TvMaulShadowLordCard from '$lib/components/tvstarwars/TVMaulShadowLordCard.svelte';
</script>

<div>
	<BackArrow path="/" />
	<h1>Star Wars</h1>
	<div class="foo">
		<div class="bar">
			<TvSkeletonCrewCard src={"http://10.0.4.41:8080/tvthumbnails/skeletoncrew.jpg"} />
			<TvAhsokaCard src={"http://10.0.4.41:8080/tvthumbnails/ahsoka.jpg"} />
			<TvAndorCard src={"http://10.0.4.41:8080/tvthumbnails/andor.jpg"} />
			<TvBadBatchCard src={"http://10.0.4.41:8080/tvthumbnails/badbatch.jpg"} />
			<TvBobbaFettCard src={"http://10.0.4.41:8080/tvthumbnails/bobafett.jpg"} />
			<TvMandalorianCard src={"http://10.0.4.41:8080/tvthumbnails/mandalorian.jpg"} />
			<TvTalesOfTheEmpireCard src={"http://10.0.4.41:8080/tvthumbnails/talesoftheempire.jpg"} />
			<TvTalesOfTheJediCard src={"http://10.0.4.41:8080/tvthumbnails/talesofthejedi.jpg"} />
			<TvTalesOfTheUnderwroldCard src={"http://10.0.4.41:8080/tvthumbnails/talesoftheunderworld.jpg"} />
			<TvObiWanCard src={"http://10.0.4.41:8080/tvthumbnails/obiwan.jpg"} />
			<TvVisionsCard src={"http://10.0.4.41:8080/tvthumbnails/visions.jpg"} />
			<TvMaulShadowLordCard src={"http://10.0.4.41:8080/tvthumbnails/maulshadowlord.jpg"} />
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
