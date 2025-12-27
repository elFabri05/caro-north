import { readdirSync } from 'fs';
import { join } from 'path';

export function getAdventureImages(adventureSlug: string): string[] {
  try {
    const imagesDir = join(process.cwd(), 'public', 'images', 'adventures', adventureSlug);
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
    console.log(`No images found for adventure: ${adventureSlug}`);
    return [];
  }
}

export function getFirstAdventureImage(adventureSlug: string): string {
  const images = getAdventureImages(adventureSlug);
  if (images.length > 0) {
    return `/images/adventures/${adventureSlug}/${images[0]}`;
  }
  // Fallback to default placeholder
  return '/images/adventure-placeholder.jpg';
}
