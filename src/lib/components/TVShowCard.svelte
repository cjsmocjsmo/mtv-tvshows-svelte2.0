<script>
	import { getImageUrl } from '$lib/config.js';
	
	let { src, href, alt = "TV Show", lazy = true } = $props();
	
	let imageLoaded = $state(false);
	let imageError = $state(false);
	
	const fullSrc = src.startsWith('http') ? src : getImageUrl(src);
</script>

<div class="tv-card">
	<a {href} aria-label={alt}>
		<div class="image-container">
			{#if !imageLoaded && !imageError}
				<div class="placeholder">Loading...</div>
			{/if}
			
			<img 
				src={fullSrc} 
				{alt}
				loading={lazy ? "lazy" : "eager"}
				class:loaded={imageLoaded}
				class:hidden={!imageLoaded || imageError}
				onload={() => { imageLoaded = true; }}
				onerror={() => { imageError = true; }}
			/>
			
			{#if imageError}
				<div class="error-placeholder">Image not available</div>
			{/if}
		</div>
	</a>
</div>

<style>
	.tv-card {
		width: 210px;
		border-radius: 0.5rem;
		background-color: rgb(33, 156, 8);
		padding: 0.15rem;
		margin: 1em;
		transition: transform 0.2s ease;
	}
	
	.tv-card:hover {
		transform: translateY(-4px);
	}
	
	.image-container {
		position: relative;
		width: 200px;
		height: 300px;
		border-radius: 0.5rem;
		overflow: hidden;
	}
	
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.5rem;
		transition: opacity 0.3s ease;
	}
	
	img.hidden {
		opacity: 0;
		position: absolute;
	}
	
	img.loaded {
		opacity: 1;
		position: static;
	}
	
	.placeholder, .error-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 0.5rem;
		color: white;
		text-align: center;
	}
	
	a {
		display: block;
		text-decoration: none;
		color: inherit;
	}
</style>
