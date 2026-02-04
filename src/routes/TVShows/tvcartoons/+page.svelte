<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TVJetsonsCard from '$lib/components/cartoons/TVJetsonsCard.svelte';
	import TVJonnyQuestCard from '$lib/components/cartoons/TVJonnyQuestCard.svelte';
	import TVMastersOfTheUniverseCard from '$lib/components/cartoons/TVMastersOfTheUniverseCard.svelte';
	
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<ul class="bar">
			<TVJetsonsCard src={"http://10.0.4.41:9998/jetsons.jpg"} />
			<TVJonnyQuestCard src={"http://10.0.4.41:9998/jonnyquest.jpg"} />
			<TVMastersOfTheUniverseCard src={"http://10.0.4.41:9998/mastersoftheuniverse.jpg"} />
		</ul>
	</div>
</div>

<style>
	.bar {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
	}

	/* h1 {
		color: yellowgreen;
	} */

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

