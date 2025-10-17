<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvFuuBarCard from '$lib/components/comedy/TVFuuBarCard.svelte';
	import TvDMVCard from '$lib/components/comedy/TVDMVCard.svelte';
	
</script>

<div>
	<BackArrow path="/" />
	<div class="foo">
		<ul class="bar">
			<TvFuuBarCard src={"http://10.0.4.41:9998/fubar.jpg"} />
			<TvDMVCard src={"http://10.0.4.41:9998/dmv.jpg"} />
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
