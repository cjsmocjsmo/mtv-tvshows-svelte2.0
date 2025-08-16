import { 
	wsLastResponse, 
	sendCommand, 
	sendMediaCommand, 
	requestShowData, 
	WEBSOCKET_COMMANDS 
} from '$lib/stores/websocket.js';
import { writable } from 'svelte/store';

export function useWebSocket() {
	const loading = writable(false);
	const error = writable(null);
	const data = writable([]);

	function playTVShow(tvId) {
		if (!tvId) {
			error.set('TV ID is required to play show');
			return false;
		}
		return sendMediaCommand(WEBSOCKET_COMMANDS.PLAY, tvId);
	}

	async function loadShowData(showCommand) {
		if (!showCommand) {
			error.set('Show command is required');
			return;
		}

		loading.set(true);
		error.set(null);

		const unsubscribe = wsLastResponse.subscribe((response) => {
			if (response && Array.isArray(response)) {
				data.set(response);
				loading.set(false);
				unsubscribe();
			}
		});

		const success = requestShowData(showCommand);
		if (!success) {
			loading.set(false);
			error.set(`Failed to request data for ${showCommand}`);
			unsubscribe();
		}

		setTimeout(() => {
			loading.set(false);
			unsubscribe();
		}, 10000);
	}

	return {
		loading,
		error,
		data,
		playTVShow,
		loadShowData
	};
}
