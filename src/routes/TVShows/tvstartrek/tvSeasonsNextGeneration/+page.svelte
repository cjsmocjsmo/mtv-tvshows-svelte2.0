<script>
	import { onMount } from 'svelte';
	import BackArrow from '$lib/components/BackArrow.svelte';
	
	const wsuri = "ws://10.0.4.41:8765";
	
	let data = [];
	let datas1 = $state([]);
	let datas2 = $state([]);
	let datas3 = $state([]);
	let datas4 = $state([]);
	let datas5 = $state([]);
	let datas6 = $state([]);
	let datas7 = $state([]);

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

	onMount(async () => {
		let ws1 = new WebSocket(wsuri);
		
		ws1.onopen = function() {
			
			ws1.send(JSON.stringify({"command": "tngs1"}));
		};
		ws1.onmessage = function(event) {
			datas1 = JSON.parse(event.data);
			console.log("Message received from server: ", datas1);
		};

		let ws2 = new WebSocket(wsuri);
		
		ws2.onopen = function() {
			
			ws2.send(JSON.stringify({"command": "tngs2"}));
		};
		ws2.onmessage = function(event) {
			datas2 = JSON.parse(event.data);
			console.log("Message received from server: ", datas2);
		};

		let ws3 = new WebSocket(wsuri);
		
		ws3.onopen = function() {
			
			ws3.send(JSON.stringify({"command": "tngs3"}));
		};
		ws3.onmessage = function(event) {
			datas3 = JSON.parse(event.data);
			console.log("Message received from server: ", datas3);
		};

		let ws4 = new WebSocket(wsuri);
		
		ws4.onopen = function() {
			
			ws4.send(JSON.stringify({"command": "tngs4"}));
		};
		ws4.onmessage = function(event) {
			datas4 = JSON.parse(event.data);
			console.log("Message received from server: ", datas4);
		};

		let ws5 = new WebSocket(wsuri);
		
		ws5.onopen = function() {
			
			ws5.send(JSON.stringify({"command": "tngs5"}));
		};
		ws5.onmessage = function(event) {
			datas5 = JSON.parse(event.data);
			console.log("Message received from server: ", datas5);
		};

		let ws6 = new WebSocket(wsuri);
		
		ws6.onopen = function() {
			
			ws6.send(JSON.stringify({"command": "tngs6"}));
		};
		ws6.onmessage = function(event) {
			datas6 = JSON.parse(event.data);
			console.log("Message received from server: ", datas6);
		};

		let ws7 = new WebSocket(wsuri);
		
		ws7.onopen = function() {
			
			ws7.send(JSON.stringify({"command": "tngs7"}));
		};
		ws7.onmessage = function(event) {
			datas7 = JSON.parse(event.data);
			console.log("Message received from server: ", datas7);
		};
	});
</script>

<main>
	<BackArrow path="/" />
	<div>
		<h1>The Next Generation</h1>
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

	<div>
		<h1>Season 3</h1>
		<div class="seaList">
			{#each datas3 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
		</div>
	</div>
	
	<div>
		<h1>Season 4</h1>
		<div class="seaList">
			{#each datas4 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
		</div>
	</div>

	<div>
		<h1>Season 5</h1>
		<div class="seaList">
			{#each datas5 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
		</div>
	</div>

	<div>
		<h1>Season 6</h1>
		<div class="seaList">
			{#each datas6 as d}
				<button onclick={playtvshow(d.TvId)}>{d.Episode}</button>
			{/each}
		</div>
	</div>

	<div>
		<h1>Season 7</h1>
		<div class="seaList">
			{#each datas7 as d}
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

