<script>
	export let src;
</script>

<div class="baz2">
	<!-- <li> -->
	<div class="link-card">
		<img {src} alt="" />
		<div class="foo">
			<!-- {#if number_of_seasons === '1'}
				<a href="/episodes"><button >1</button></a>
			{:else if number_of_seasons === '2'}
				<a href="/episodes"><button >1</button></a>
				<a href="/episodes"><button >2</button></a>
			{:else if number_of_seasons === '3'}
				<a href="/"><button >1</button></a>
				<a href="/"><button >2</button></a>
				<a href="/"><button >3</button></a>
			{:else if number_of_seasons === '4'}
				<a href="/"><button >1</button></a>
				<a href="/"><button >2</button></a>
				<a href="/"><button >3</button></a>
				<a href="/"><button >4</button></a>
			{:else if number_of_seasons === '5'}
				<a href="/"><button >1</button></a>
				<a href="/"><button >2</button></a>
				<a href="/"><button >3</button></a>
				<a href="/"><button >4</button></a>
				<a href="/"><button >5</button></a>
			{:else if number_of_seasons === '6'}
				<a href="/"><button >1</button></a>
				<a href="/"><button >2</button></a>
				<a href="/"><button >3</button></a>
				<a href="/"><button >4</button></a>
				<a href="/"><button >5</button></a>
				<a href="/"><button >6</button></a>
			{:else if number_of_seasons === '7'}
				<a href="/"><button >1</button></a>
				<a href="/"><button >2</button></a>
				<a href="/"><button >3</button></a>
				<a href="/"><button >4</button></a>
				<a href="/"><button >5</button></a>
				<a href="/"><button >6</button></a>
				<a href="/"><button >7</button></a>
			{:else if number_of_seasons === '8'}
				<a href="/"><button >1</button></a>
				<a href="/"><button >2</button></a>
				<a href="/"><button >3</button></a>
				<a href="/"><button >4</button></a>
				<a href="/"><button >5</button></a>
				<a href="/"><button >6</button></a>
				<a href="/"><button >7</button></a>
				<a href="/"><button >8</button></a>
			{/if} -->
		</div>
	</div>
</div>

<!-- </li> -->

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
		background-color: black;
		background-image: var(--accent-gradient);
		background-size: 200%;
		border-radius: 0.5rem;
		background-position: 100%;
		width: 105%;
		margin: 1em;
	}
	.foo {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
	}
	button {
		color: white;
		background-color: blue;
		padding: 5px;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}
	/* a {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		color: rgb(247, 243, 243);
	} */
</style>
