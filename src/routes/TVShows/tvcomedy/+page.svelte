<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvFuuBarCard from '$lib/components/comedy/TVFuuBarCard.svelte';
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<ul class="bar">
			<TvFuuBarCard src={"http://10.0.4.41:9998/fubar.jpg"} />
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
</style>
