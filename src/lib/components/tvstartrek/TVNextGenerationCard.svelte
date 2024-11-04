<script>
	let { src } = $props();
</script>

<div class="baz2">
	<div class="link-card">
		<a href="/TVShows/tvstartrek/tvSeasonsNextGeneration"><img {src} alt="" /></a>
	</div>
</div>

<style>
	.baz2 {
		width: 210px;
	}
	img {
		width: 200px;
		height: 300px;
		border-radius: 0.5rem;
	}
	.link-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;

		padding: 0.15rem;
		background-color: rgb(33, 156, 8);
		background-image: var(--accent-gradient);
		background-size: 200%;
		border-radius: 0.5rem;
		background-position: 100%;
		width: 105%;
		margin: 1em;
	}
</style>