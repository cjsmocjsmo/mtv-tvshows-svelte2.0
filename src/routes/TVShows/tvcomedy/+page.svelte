<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvFuuBarCard from '$lib/components/comedy/TVFuuBarCard.svelte';
	import FUUBar from '$lib/images/comedy/fubar.webp';
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
			<ul class="bar">
				<TvFuuBarCard src={FUUBar} />
			</ul>
	</div>
</div>

<style>
	.bar {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	/* .bar {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
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
	} */
</style>
