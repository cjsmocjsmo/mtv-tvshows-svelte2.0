

const config = {
	apiBaseUrl: import.meta.env.PUBLIC_API_BASE_URL || 'http://10.0.4.41:8080/tvthumbnails',
	wsUrl: import.meta.env.PUBLIC_WS_URL || 'ws://10.0.4.41:8765',
	imageBaseUrl: import.meta.env.PUBLIC_API_BASE_URL || 'http://10.0.4.41:8080/tvthumbnails',
	appName: import.meta.env.PUBLIC_APP_NAME || 'MTV TVShows'
};

export function getImageUrl(imagePath) {
	if (imagePath.startsWith('http')) {
		return imagePath;
	}
	return `${config.imageBaseUrl}${imagePath}`;
}

export default config;
