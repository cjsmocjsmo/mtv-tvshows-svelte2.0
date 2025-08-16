<script>
	import { TV_CATEGORIES } from '$lib/constants.js';
</script>
<div class="movlist">
	{#each TV_CATEGORIES as category}
		<a data-sveltekit-preload-data="tap" href={category.path}>
			<p class="mov">{category.name}</p>
		</a>
	{/each}
</div>

<style>
	.movlist {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(10, 1fr);
		column-gap: 4em;
		row-gap: 0.25em;
	}
	p {
		font-size: 1.75em;
		justify-self: center;
		align-self: center;
	}
</style>
