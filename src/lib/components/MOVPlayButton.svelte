<script>
	import { onMount, onDestroy } from 'svelte';
	export const prerender = false;
	export let movid;
	export let src;
	export let alt;

	let ws;

	let playmovie = () => {
		ws.onopen = function() {
			ws.send({"command": "set_media", "media_id": movid});
			ws.send({"command": "play"});
		};
		ws.onclose = function() {
			ws.close();
		};
		ws.onerror = function(error) {
			console.error("WebSocket error: ", error);
		};
	}

	onMount(() => {
		const wsuri = "ws://10.0.4.41:8765";
		ws = new WebSocket(wsuri);
	});

	onDestroy(() => {
		if (ws) {
			ws.close();
		}
	});
		
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img on:click={playmovie} src={src} alt={alt} />

<style>
	img {
		margin: 1em;
		border-radius: 7px;
	}
</style>
