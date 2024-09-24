<script>
	import { onMount, onDestroy } from 'svelte';
	export const prerender = false;
	export let movid;
	export let src;
	export let alt;

	let ws;

	let playmovie = () => {
		// const ad = 'http://10.0.4.41:8080/startmov/';
		// let ad2 = ad + movid;
		// console.log(ad2);
		// const media_path = fetch(ad2);

		
		ws.onopen = function() {
			console.log("connected: " + wsuri);
			ws.send({"command": "set_media", "media_id": movid});
			ws.send({"command": "play"});
		};
		ws.onclose = function() {
			console.log("ws connection closed");
			ws.close();
		};
		ws.onerror = function(error) {
			console.error("WebSocket error: ", error);
		};
	}

	onMount(() => {
		console.log("Component mounted");
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
