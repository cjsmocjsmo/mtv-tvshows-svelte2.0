<script>
	import { wsStatus, wsHealthy } from '$lib/stores/websocket.js';
	import WebSocketStatus from '$lib/components/WebSocketStatus.svelte';
</script>

<div class="demo">
	<h2>WebSocket Status Demo</h2>
	<WebSocketStatus />
	
	<p>Current Status: {$wsStatus}</p>
	<p>Connection Healthy: {$wsHealthy ? 'Yes' : 'No'}</p>
</div>

<style>
	.demo {
		padding: 2rem;
		border: 1px solid #ccc;
		border-radius: 8px;
		margin: 1rem;
	}
</style>
