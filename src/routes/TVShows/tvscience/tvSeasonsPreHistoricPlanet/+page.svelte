<script>
	import { onMount } from 'svelte';
	import BackArrow from '$lib/components/BackArrow.svelte';
	
	const wsuri = "ws://10.0.4.41:8765";

	function playtvshow(tvid) {
		let ws = new WebSocket(wsuri);
		
		ws.onopen = function() {
			
			ws.send(JSON.stringify({"command": "set_tv_media", "media_tv_id": tvid}));
			ws.send(JSON.stringify({"command": "play"}));
		};
		ws.onmessage = function(event) {
			data = JSON.parse(event.data);
			console.log("Message received from server: ", data);
		};
	}

	let datas1 = $state([]);
	let datas2 = $state([]);

	onMount(async () => {
		let ws1 = new WebSocket(wsuri);
		
		ws1.onopen = function() {
			
			ws1.send(JSON.stringify({"command": "prehistoricplanets1"}));
		};
		ws1.onmessage = function(event) {
			datas1 = JSON.parse(event.data);
			console.log("Message received from server: ", datas1);
		};
		let ws2 = new WebSocket(wsuri);
		
		ws2.onopen = function() {
			
			ws2.send(JSON.stringify({"command": "prehistoricplanets2"}));
		};
		ws2.onmessage = function(event) {
			datas2 = JSON.parse(event.data);
			console.log("Message received from server: ", datas2);
		};
	});
</script>

<main>
	<BackArrow path="/" />
	<div>
		<h1>PreHistoric Planet</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each datas1 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 2</h1>
		<div class="seaList">
			{#each datas2 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
		</div>
	</div>
	
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.seaList {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	button {
		background-color: #4caf50;
		border-style: solid;
		border-color: black;
		border-width: 2px;
		border-radius: 4px;
		color: black;
		padding: 10px 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 20px;
		margin: 4px 2px;
	}
</style>
