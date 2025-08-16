import { writable } from 'svelte/store';
import { config } from '../config.js';

export const wsConnection = writable(null);

export function sendCommand(command) {
	const ws = new WebSocket(config.wsUrl);
	ws.onopen = function() {
		const cmd = JSON.stringify({ command: command });
		ws.send(cmd);
		console.log(`WebSocket command sent: ${command}`);
	};
	ws.onerror = function(error) {
		console.error('WebSocket error:', error);
	};
	return ws;
}
