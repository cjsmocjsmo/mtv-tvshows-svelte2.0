<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvhFord1923Card from '$lib/components/western/TVHFord1923Card.svelte';
</script>

<div>
	<BackArrow path="/" />
	<h1>Western</h1>
	<div class="foo">
		<div class="bar">
			<TvhFord1923Card src={"http://10.0.4.41:9998/1923.jpg"} />
		</div>
	</div>
</div>

<style>
    .bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    h1 {
        color: yellowgreen;
    }
	/* .bar {
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
	} */
</style>
