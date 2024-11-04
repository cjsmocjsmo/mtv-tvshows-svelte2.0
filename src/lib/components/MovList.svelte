<script>
	let { data } = $props();

	function playmovie(movid) {
		const wsuri = "ws://10.0.4.41:8765";
		const cmd1 = JSON.stringify({"command": "set_media", "media_id": movid});
		const cmd2 = JSON.stringify({"command": "play"});
		let ws = new WebSocket(wsuri);
		ws.onopen = function() {
			ws.send(cmd1);
			ws.send(cmd2);
		};
	}

</script>

<div class="movlist">
	{#each data as mov}
		<div class="movlist">
			<button 
				onclick={playmovie(mov.MovId)}
				onkeypress={playmovie(mov.MovId)}
				onkeyup={playmovie(mov.MovId)}
				onkeydown={playmovie(mov.MovId)} 
				aria-label={`Play movie: ${mov.Name}`} 
			>
				<img src={mov.HttpThumbPath} alt={mov.Name} />
			</button>
		</div>
	{/each}
</div>

<style>
	.movlist {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	img {
		margin: 1em;
		border-radius: 7px;
	}
	button {
		background-color: transparent;
		border: none;
	}
</style>