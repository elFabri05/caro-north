import { readdirSync } from 'fs';
import { join } from 'path';

export function getFilmImages(filmSlug: string): string[] {
  try {
    const imagesDir = join(process.cwd(), 'public', 'images', 'films', filmSlug);
    const files = readdirSync(imagesDir);

    // Filter for image files only
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const images = files
      .filter(file => {
        const ext = file.toLowerCase();
        return imageExtensions.some(extension => ext.endsWith(extension));
      })
      .sort(); // Sort alphabetically

    return images;
  } catch (error) {
    // Directory doesn't exist or is empty
    console.log(`No images found for film: ${filmSlug}`);
    return [];
  }
}

export function getFirstFilmImage(filmSlug: string): string {
  const images = getFilmImages(filmSlug);
  if (images.length > 0) {
    return `/images/films/${filmSlug}/${images[0]}`;
  }
  // Fallback to default placeholder
  return '/images/film-placeholder.jpg';
}
