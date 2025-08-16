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

	async function loadSeasonData(showName, seasonCount) {
		if (!showName || !seasonCount) {
			error.set('Show name and season count are required');
			return {};
		}

		loading.set(true);
		error.set(null);

		const seasonsData = {};
		const responses = writable({});

		const unsubscribe = wsLastResponse.subscribe((response) => {
			if (response && Array.isArray(response)) {
				// Try to determine which season this response belongs to
				// This assumes the response has some identifying information
				const seasonKey = Object.keys(seasonsData).find(key => !seasonsData[key]);
				if (seasonKey) {
					seasonsData[seasonKey] = response;
					responses.update(r => ({...r, [seasonKey]: response}));
				}
			}
		});

		// Request all seasons
		const commands = Array.from({length: seasonCount}, (_, i) => `${showName}s${i+1}`);
		const results = {};
		
		for (const command of commands) {
			const seasonNum = command.match(/s(\d+)$/)?.[1];
			if (seasonNum) {
				seasonsData[`season${seasonNum}`] = null;
				const success = requestShowData(command);
				if (!success) {
					results[`season${seasonNum}`] = [];
				}
			}
		}

		// Wait for responses or timeout
		setTimeout(() => {
			loading.set(false);
			unsubscribe();
			data.set(seasonsData);
		}, 15000); // Longer timeout for multiple requests

		return {
			seasonsData: responses,
			loading,
			error
		};
	}

	async function loadMultipleShows(commands) {
		if (!commands || !Array.isArray(commands)) {
			error.set('Commands array is required');
			return {};
		}

		loading.set(true);
		error.set(null);

		const results = {};
		const allResponses = writable({});

		const unsubscribe = wsLastResponse.subscribe((response) => {
			if (response && Array.isArray(response)) {
				// Store response - in a real implementation you'd need better command/response matching
				const timestamp = Date.now();
				allResponses.update(r => ({...r, [timestamp]: response}));
			}
		});

		// Send all commands
		for (const command of commands) {
			const success = requestShowData(command);
			if (!success) {
				results[command] = [];
			}
		}

		setTimeout(() => {
			loading.set(false);
			unsubscribe();
		}, 12000);

		return {
			responses: allResponses,
			loading,
			error
		};
	}

	return {
		loading,
		error,
		data,
		playTVShow,
		loadShowData,
		loadSeasonData,
		loadMultipleShows
	};
}
