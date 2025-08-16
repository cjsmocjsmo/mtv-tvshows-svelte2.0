<script>
	import { sendMediaCommand, WEBSOCKET_COMMANDS } from '$lib/stores/websocket.js';
	export const prerender = false;
	let { movid, src, alt } = $props();

	let playmovie = () => {
		// Use the enhanced WebSocket system
		sendMediaCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, movid);
		sendMediaCommand(WEBSOCKET_COMMANDS.PLAY, movid);
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<img onclick={playmovie} src={src} alt={alt} />

<style>
	img {
		margin: 1em;
		border-radius: 7px;
	}
</style>
