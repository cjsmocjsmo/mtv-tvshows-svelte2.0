<script>
	import { sendCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';
	
	let { data } = $props();

	function playmovie(movid) {
		if (!movid) {
			console.error('Movie ID is required to play movie');
			return;
		}

		// Use the enhanced WebSocket system to send commands
		// First set the media, then play it
		sendCommand('set_media', { media_id: movid });
		
		// Small delay to ensure the media is set before playing
		setTimeout(() => {
			sendCommand(WEBSOCKET_COMMANDS.PLAY);
		}, 100);
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