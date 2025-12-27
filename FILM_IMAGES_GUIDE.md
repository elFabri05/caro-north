# Film Images Guide

This guide explains how to add images for each film on the website.

## Directory Structure

Film images are stored in: `public/images/films/[film-slug]/`

Each film has its own folder:
- `public/images/films/summit-stories/`
- `public/images/films/ice-and-fire/`
- `public/images/films/the-vertical-world/`
- `public/images/films/mountain-spirit/`

## How to Add Images

1. **Navigate to the film's folder** based on the slug (URL-friendly name)
2. **Add your images** to that folder
3. **Image naming**: Files are automatically sorted alphabetically
   - The first image (alphabetically) will be used as the hero/thumbnail image
   - All images will appear in the image gallery on the film detail page

## Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`

## Best Practices

### Image Naming
Use a numbering system for control over the order:
```
01-opening-scene.jpg
02-mountain-view.jpg
03-climbing-action.jpg
```

Or use descriptive names:
```
summit-stories-hero.jpg
summit-stories-behind-scenes.jpg
summit-stories-finale.jpg
```

### Image Specifications
- **Hero Image** (first image):
  - Minimum width: 1920px
  - Aspect ratio: 16:9 or wider recommended
  - This appears as the main image on the film detail page

- **Gallery Images**:
  - Minimum width: 1200px recommended
  - Any aspect ratio works
  - Will be displayed in a responsive gallery

### Optimization
- Compress images before uploading to reduce file size
- Use JPG for photographs
- Use PNG for images requiring transparency
- WebP format is supported and offers better compression

## Film Slug Reference

| Film Title | Slug | Directory |
|------------|------|-----------|
| Summit Stories | summit-stories | `/public/images/films/summit-stories/` |
| Ice & Fire | ice-and-fire | `/public/images/films/ice-and-fire/` |
| The Vertical World | the-vertical-world | `/public/images/films/the-vertical-world/` |
| Mountain Spirit | mountain-spirit | `/public/images/films/mountain-spirit/` |

## Example Structure

```
public/images/films/
├── summit-stories/
│   ├── 01-hero-image.jpg
│   ├── 02-scene-1.jpg
│   ├── 03-scene-2.jpg
│   └── 04-behind-scenes.jpg
├── ice-and-fire/
│   ├── hero.jpg
│   ├── volcano-climb.jpg
│   └── glacier-traverse.jpg
├── the-vertical-world/
│   └── main-poster.jpg
└── mountain-spirit/
    ├── cover.jpg
    └── community.jpg
```

## How Images Are Used

1. **Film Listing Page** (`/films`):
   - Shows the first image from each film's folder as a thumbnail

2. **Film Detail Page** (`/films/[slug]`):
   - First image: Displayed as the hero image with title overlay
   - All images: Displayed in the image gallery below the description

## Fallback Behavior

If no images are found in a film's folder:
- The system will look for `/images/film-placeholder.jpg`
- You can add a default placeholder image at this location

## Testing

After adding images:
1. Visit the films listing page to see thumbnails
2. Click on a film to view the detail page
3. Check that the hero image displays correctly
4. Scroll down to verify all images appear in the gallery

## Notes

- Images are loaded from the `public` folder, so paths in the browser start with `/images/films/...`
- The file system reads from `public/images/films/[slug]/`
- Images are sorted alphabetically by filename
- No database or configuration needed - just add images to the folders!
