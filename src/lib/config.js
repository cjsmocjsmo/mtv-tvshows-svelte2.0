import { PUBLIC_API_BASE_URL, PUBLIC_WS_URL, PUBLIC_APP_NAME } from '$env/static/public';

export const config = {
	apiBaseUrl: PUBLIC_API_BASE_URL || 'http://localhost:9998',
	wsUrl: PUBLIC_WS_URL || 'ws://10.0.4.41:8765',
	imageBaseUrl: PUBLIC_API_BASE_URL || 'http://10.0.4.41:9998',
	appName: PUBLIC_APP_NAME || 'MTV TVShows'
};

export function getImageUrl(imagePath) {
	if (imagePath.startsWith('http')) {
		return imagePath;
	}
	return `${config.imageBaseUrl}${imagePath}`;
}
