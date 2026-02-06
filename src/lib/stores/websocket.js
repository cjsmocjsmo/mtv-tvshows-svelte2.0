import { writable, derived } from 'svelte/store';
import config from '../config.js';

// WebSocket connection states
export const WS_STATUS = {
	DISCONNECTED: 'disconnected',
	CONNECTING: 'connecting',
	CONNECTED: 'connected',
	RECONNECTING: 'reconnecting',
	ERROR: 'error'
};

// WebSocket commands constants
export const WEBSOCKET_COMMANDS = {
	PLAY: 'play',
	PAUSE: 'pause',
	STOP: 'stop',
	PREVIOUS: 'previous',
	NEXT: 'next',
	SET_TV_MEDIA: 'set_tv_media',
	
	// Star Trek Commands
	DEEPSPACENINE: 'deepspacenine',
	DISCOVERY: 'discovery',
	ENTERPRISE: 'enterprise',
	ENTERPRISE: 'enterprise',
	LOWERDECKS: 'lowerdecks',
	NEXTGEN: 'nextgen',
	PICARD: 'picard',
	PRODIGY: 'prodigy',
	STARFLEETACADEMY: 'starfleetacademy',
	STRANGENEWWORLDS: 'strangenewworlds',
	STTV: 'sttv',
	VOYAGER: 'voyager',
	
	// Star Wars Commands
	AHSOKA: 'ahsoka',
	ANDOR: 'andor',
	BADBATCH: 'badbatch',
	BOBAFETT: 'bobafett',
	MANDALORIAN: 'mandalorian',
	OBIWAN: 'obiwan',
	SKELETONCREW: 'skeletoncrew',
	TALESOFTHEEMPIRE: 'talesoftheempire',
	TALESOFTHEJEDI: 'talesofthejedi',
	TALESOFTHEUNDERWORLD: 'talesoftheunderworld',
	VISIONS: 'visions',
	
	// MCU Commands
	FALCONWINTERSOLDIER: 'falconwintersoldier',
	HAWKEYE: 'hawkeye',
	IAMGROOT: 'iamgroot',
	IRONHEART: 'ironheart',
	LOKI: 'loki',
	MOONKNIGHT: 'moonknight',
	SECRETINVASION: 'secretinvasion',
	SHEHULK: 'shehulk',
	WANDAVISION: 'wandavision',
	
	// Sci-Fi Commands
	ALTEREDCARBON: 'alteredcarbon',
	COWBOYBEBOP: 'cowboybebop',
	FALLOUT: 'fallout',
	FORALLMANKIND: 'forallmankind',
	FOUNDATION: 'foundation',
	HALO: 'halo',
	LOSTINSPACE: 'lostinspace',
	MONARCHLEGACYOFMONSTERS: 'monarchlegacyofmonsters',
	NIGHTSKY: 'nightsky',
	ORVILLE: 'orville',
	RAISEDBYVOLVES: 'raisedbyvolves',
	SILO: 'silo',
	THELASTOFUS: 'thelastofus',
	
	// Fantasy Commands
	HOUSEOFTHEDRAGON: 'houseofthedragon',
	RINGSOFPOWER: 'ringsofpower',
	WHEELOFTIME: 'wheeloftime',
	WEDNESDAY: 'wednesday',
	
	// Action Commands
	SHOGUN: 'shogun',
	MOBLAND: 'mobland',
	THECONTINENTAL: 'thecontinental',
	
	// Cartoons
	JETSONS: 'jetsons',
	JONNYQUEST: 'jonnyquest',
	MASTERSOFTHEUNIVERSE: 'mastersoftheuniverse',

	// Comedy Commands
	DMV: 'dmv',
	FUBAR: 'fubar',

	// Fantasy Commands
	HOUSEOFTHEDRAGON: 'houseofthedragon',
	RINGSOFPOWER: 'ringsofpower',
	WHEELOFTIME: 'wheeloftime',
	WEDNESDAY: 'wednesday',

	// NCIS Commands
	NCIS: 'ncis',
	NCISHAWAII: 'ncishawaii',
	NCISLA: 'ncisla',
	NCISNEWORLEANS: 'ncisneworleans',
	NCISORIGINS: 'ncisorigins',
	NCISSYDNEY: 'ncissydney',
	TONYANDZIVA: 'tonyandziva',
	
	// Science Commands
	COLUMBIA: 'columbia',
	PERSONOFINTEREST: 'personofinterest',
	PREHISTORICPLANET: 'prehistoricplanet',
	
	// Western Commands
	HFORD: 'hford'
};

// Store for the WebSocket connection
export const wsConnection = writable(null);

// Store for connection status
export const wsStatus = writable(WS_STATUS.DISCONNECTED);

// Store for connection error messages
export const wsError = writable(null);

// Store for last response data
export const wsLastResponse = writable(null);

// Derived store for connection health
export const wsHealthy = derived(wsStatus, ($status) => 
	$status === WS_STATUS.CONNECTED
);

// Configuration
const WS_CONFIG = {
	reconnectAttempts: 5,
	reconnectDelay: 1000, // Start with 1 second
	maxReconnectDelay: 30000, // Max 30 seconds
	pingInterval: 30000, // Ping every 30 seconds
	connectionTimeout: 10000 // 10 seconds timeout
};

class WebSocketManager {
	constructor() {
		this.ws = null;
		this.reconnectCount = 0;
		this.reconnectTimer = null;
		this.pingTimer = null;
		this.connectionTimer = null;
		this.messageQueue = [];
		this.isManualClose = false;
	}

	connect() {
		if (this.ws && (this.ws.readyState === WebSocket.CONNECTING || this.ws.readyState === WebSocket.OPEN)) {
			return; // Already connected or connecting
		}

		try {
			wsStatus.set(WS_STATUS.CONNECTING);
			wsError.set(null);

			this.ws = new WebSocket(config.wsUrl);
			wsConnection.set(this.ws);

			// Connection timeout
			this.connectionTimer = setTimeout(() => {
				if (this.ws.readyState === WebSocket.CONNECTING) {
					this.ws.close();
					this.handleError(new Error('Connection timeout'));
				}
			}, WS_CONFIG.connectionTimeout);

			this.ws.onopen = () => {
				clearTimeout(this.connectionTimer);
				wsStatus.set(WS_STATUS.CONNECTED);
				wsError.set(null);
				this.reconnectCount = 0;
				
				console.log('WebSocket connected to:', config.wsUrl);
				
				// Send queued messages
				this.flushMessageQueue();
				
				// Start ping
				this.startPing();
			};

			this.ws.onmessage = (event) => {
				try {
					const data = JSON.parse(event.data);
					wsLastResponse.set(data);
					console.log('WebSocket message received:', data);
				} catch (error) {
					console.error('Failed to parse WebSocket message:', error);
				}
			};

			this.ws.onclose = (event) => {
				clearTimeout(this.connectionTimer);
				this.stopPing();
				wsConnection.set(null);

				if (this.isManualClose) {
					wsStatus.set(WS_STATUS.DISCONNECTED);
					console.log('WebSocket disconnected manually');
					return;
				}

				console.log('WebSocket connection closed:', event.code, event.reason);
				
				if (event.code !== 1000) { // Not a normal closure
					this.handleReconnection();
				} else {
					wsStatus.set(WS_STATUS.DISCONNECTED);
				}
			};

			this.ws.onerror = (error) => {
				clearTimeout(this.connectionTimer);
				console.error('WebSocket error:', error);
				this.handleError(error);
			};

		} catch (error) {
			this.handleError(error);
		}
	}

	disconnect() {
		this.isManualClose = true;
		this.stopReconnection();
		this.stopPing();
		
		if (this.ws) {
			this.ws.close(1000, 'Manual disconnect');
			this.ws = null;
		}
		
		wsConnection.set(null);
		wsStatus.set(WS_STATUS.DISCONNECTED);
		wsError.set(null);
	}

	send(data) {
		const message = typeof data === 'string' ? data : JSON.stringify(data);
		
		if (this.ws && this.ws.readyState === WebSocket.OPEN) {
			try {
				this.ws.send(message);
				console.log('WebSocket message sent:', message);
				return true;
			} catch (error) {
				console.error('Failed to send WebSocket message:', error);
				this.handleError(error);
				return false;
			}
		} else {
			// Queue message if not connected
			this.messageQueue.push(message);
			console.log('Message queued (not connected):', message);
			
			// Try to connect if disconnected
			if (!this.ws || this.ws.readyState === WebSocket.CLOSED) {
				this.connect();
			}
			
			return false;
		}
	}

	sendCommand(command, params = {}) {
		const message = { command, ...params };
		return this.send(message);
	}

	handleError(error) {
		wsStatus.set(WS_STATUS.ERROR);
		wsError.set(error.message || 'WebSocket connection error');
		this.handleReconnection();
	}

	handleReconnection() {
		if (this.reconnectCount >= WS_CONFIG.reconnectAttempts) {
			wsStatus.set(WS_STATUS.ERROR);
			wsError.set(`Failed to reconnect after ${WS_CONFIG.reconnectAttempts} attempts`);
			return;
		}

		wsStatus.set(WS_STATUS.RECONNECTING);
		this.reconnectCount++;

		const delay = Math.min(
			WS_CONFIG.reconnectDelay * Math.pow(2, this.reconnectCount - 1),
			WS_CONFIG.maxReconnectDelay
		);

		console.log(`Attempting to reconnect in ${delay}ms (attempt ${this.reconnectCount}/${WS_CONFIG.reconnectAttempts})`);

		this.reconnectTimer = setTimeout(() => {
			this.isManualClose = false;
			this.connect();
		}, delay);
	}

	stopReconnection() {
		if (this.reconnectTimer) {
			clearTimeout(this.reconnectTimer);
			this.reconnectTimer = null;
		}
		this.reconnectCount = 0;
	}

	startPing() {
		this.stopPing();
		this.pingTimer = setInterval(() => {
			if (this.ws && this.ws.readyState === WebSocket.OPEN) {
				this.send({ command: 'ping' });
			}
		}, WS_CONFIG.pingInterval);
	}

	stopPing() {
		if (this.pingTimer) {
			clearInterval(this.pingTimer);
			this.pingTimer = null;
		}
	}

	flushMessageQueue() {
		while (this.messageQueue.length > 0 && this.ws && this.ws.readyState === WebSocket.OPEN) {
			const message = this.messageQueue.shift();
			try {
				this.ws.send(message);
				console.log('Queued message sent:', message);
			} catch (error) {
				console.error('Failed to send queued message:', error);
				// Re-queue the message
				this.messageQueue.unshift(message);
				break;
			}
		}
	}

	getStatus() {
		return {
			status: this.ws ? this.ws.readyState : WebSocket.CLOSED,
			reconnectCount: this.reconnectCount,
			queuedMessages: this.messageQueue.length
		};
	}
}

// Global WebSocket manager instance
const wsManager = new WebSocketManager();

// Enhanced sendCommand function with better error handling and validation
export function sendCommand(command, params = {}) {
	if (!command) {
		console.error('sendCommand: command is required');
		wsError.set('Invalid command: command is required');
		return false;
	}

	if (!Object.values(WEBSOCKET_COMMANDS).includes(command)) {
		console.warn(`sendCommand: unknown command "${command}"`);
	}

	return wsManager.sendCommand(command, params);
}

// Function to send data with TV ID for media control
export function sendMediaCommand(command, tvId) {
	if (!command || tvId === undefined) {
		console.error('sendMediaCommand: both command and tvId are required');
		wsError.set('Invalid media command: command and tvId are required');
		return false;
	}

	// For media commands, we typically need to set the media first, then execute the command
	wsManager.sendCommand(WEBSOCKET_COMMANDS.SET_TV_MEDIA, { media_tv_id: tvId });
	
	// Small delay to ensure the media is set before executing the command
	setTimeout(() => {
		wsManager.sendCommand(command);
	}, 100);

	return true;
}

// Function to request show data
export function requestShowData(showCommand) {
	if (!showCommand) {
		console.error('requestShowData: showCommand is required');
		wsError.set('Invalid show request: showCommand is required');
		return false;
	}

	return wsManager.sendCommand(showCommand);
}

// Connection management functions
export function connectWebSocket() {
	wsManager.connect();
}

export function disconnectWebSocket() {
	wsManager.disconnect();
}

export function reconnectWebSocket() {
	wsManager.disconnect();
	setTimeout(() => wsManager.connect(), 1000);
}

// Get connection status
export function getWebSocketStatus() {
	return wsManager.getStatus();
}

// Auto-connect on module load (optional)
// Uncomment the next line if you want to auto-connect
// connectWebSocket();
