# Expedition Images

This folder contains image galleries for each expedition post.

## Folder Structure

Each expedition has its own folder named after the expedition slug:

```
expeditions/
├── via-sedna/
├── rock-n-road/
├── usa-2019/
├── kishtwar-expedition-2019/
├── kishtwar-first-ascents-2016/
├── onsighting-astroman-yosemite-2015/
├── north-faces-chamonix/
├── india-adschalaga/
├── cerro-torre/
├── patagonia-2014/
└── patagonia-2013/
```

## How to Add Images

1. Navigate to the expedition folder (e.g., `/public/images/expeditions/via-sedna/`)
2. Add your images (supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`)
3. Images will be displayed in alphabetical order
4. For best results, name your images with numbers (e.g., `01.jpg`, `02.jpg`, `03.jpg`)

## Image Recommendations

- **Format**: JPG or WebP for best compression
- **Size**: Recommended max width: 1920px (for fast loading)
- **Aspect Ratio**: 4:3 or 16:9 works best
- **File Size**: Optimize images to < 500KB each for better performance

## Example

```
via-sedna/
├── 01-sailing.jpg
├── 02-greenland-coast.jpg
├── 03-team-photo.jpg
├── 04-climbing.jpg
└── 05-summit.jpg
```

These images will automatically appear as a grid gallery on the expedition detail page.
Clicking any image opens a full-screen carousel with navigation arrows.
