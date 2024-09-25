<script>
</script>
<div class="movlist">
	<a data-sveltekit-preload-data="tap" href="TVShows/tvaction"><p class="mov">Action</p></a>
	<a data-sveltekit-preload-data="tap" href="TVShows/tvcomedy"><p class="mov">Comedy</p></a>
	<a data-sveltekit-preload-data="tap" href="TVShows/tvfantasy"><p class="mov">Fantasy</p></a>
	<a data-sveltekit-preload-data="tap" href="TVShows/tvmcu"><p class="mov">MCU</p></a>
	<a data-sveltekit-preload-data="tap" href="TVShows/tvscience"><p class="mov">Science</p></a>
	<a data-sveltekit-preload-data="tap" href="TVShows/tvscifi"><p class="mov">SciFi</p></a>
	<a data-sveltekit-preload-data="tap" href="TVShows/tvstartrek"><p class="mov">Star Trek</p></a>
	<a data-sveltekit-preload-data="tap" href="TVShows/tvstarwars"><p class="mov">Star Wars</p></a>
	<a data-sveltekit-preload-data="tap" href="TVShows/tvwesterns"><p class="mov">Westerns</p></a>
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
