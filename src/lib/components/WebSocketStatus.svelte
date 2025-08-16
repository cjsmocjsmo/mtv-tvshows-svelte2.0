<script>
	import { wsStatus, wsError, WS_STATUS, connectWebSocket, reconnectWebSocket } from '$lib/stores/websocket.js';
	
	let { showReconnect = true, compact = false } = $props();
	
	function handleReconnect() {
		reconnectWebSocket();
	}
	
	import { derived } from 'svelte/store';

	const statusText = derived(wsStatus, $wsStatus => ({
		[WS_STATUS.CONNECTED]: 'Connected',
		[WS_STATUS.CONNECTING]: 'Connecting...',
		[WS_STATUS.RECONNECTING]: 'Reconnecting...',
		[WS_STATUS.ERROR]: 'Connection Error',
		[WS_STATUS.DISCONNECTED]: 'Disconnected'
	}[$wsStatus] || 'Unknown'));
</script>
	<div class="status-indicator status-{$wsStatus}" title={$statusText}>
		<div class="status-dot"></div>
		{#if !compact}
			<span class="status-text">{$statusText}</span>
		{/if}
	</div>
	{#if $wsError}
		<div class="error-message" title={$wsError}>
			{compact ? '⚠️' : `Error: ${$wsError}`}
		</div>
	{/if}
	
	{#if showReconnect && ($wsStatus === WS_STATUS.ERROR || $wsStatus === WS_STATUS.DISCONNECTED)}
		<button class="reconnect-btn" onclick={handleReconnect}>
			{compact ? '🔄' : 'Reconnect'}
		</button>
	{/if}


<style>
	.websocket-status {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
	}
	
	.status-indicator {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	
	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		transition: background-color 0.3s ease;
	}
	
	.status-connected .status-dot {
		background-color: #22c55e;
	}
	
	.status-connecting .status-dot,
	.status-reconnecting .status-dot {
		background-color: #f59e0b;
		animation: pulse 1.5s ease-in-out infinite;
	}
	
	.status-error .status-dot {
		background-color: #ef4444;
	}
	
	.status-disconnected .status-dot {
		background-color: #6b7280;
	}
	
	.error-message {
		color: #ef4444;
		font-size: 0.75rem;
	}
	
	.reconnect-btn {
		padding: 0.25rem 0.5rem;
		border: 1px solid #d1d5db;
		border-radius: 0.25rem;
		background: white;
		color: #374151;
		font-size: 0.75rem;
		cursor: pointer;
	}
	
	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}
</style>
