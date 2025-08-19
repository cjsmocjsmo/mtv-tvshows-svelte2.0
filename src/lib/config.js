

const config = {
	apiBaseUrl: import.meta.env.PUBLIC_API_BASE_URL || 'http://10.0.4.41:9998',
	wsUrl: import.meta.env.PUBLIC_WS_URL || 'ws://10.0.4.41:8765',
	imageBaseUrl: import.meta.env.PUBLIC_API_BASE_URL || 'http://10.0.4.41:9998',
	appName: import.meta.env.PUBLIC_APP_NAME || 'MTV TVShows'
};

export function getImageUrl(imagePath) {
	if (imagePath.startsWith('http')) {
		return imagePath;
	}
	return `${config.imageBaseUrl}${imagePath}`;
}

export default config;
