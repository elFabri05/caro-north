import { readdirSync } from 'fs';
import { join } from 'path';

export function getGuidingImages(): string[] {
  try {
    const imagesDir = join(process.cwd(), 'public', 'images', 'guiding');
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
    console.log('No images found for guiding');
    return [];
  }
}
