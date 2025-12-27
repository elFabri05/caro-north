# Adventure Images Guide

## Overview

The adventure image system now automatically uses the **first image** in each adventure's folder for:
1. **Post thumbnails** on the home page (first 4 adventures)
2. **Post cards** on the `/adventures` listing page
3. **Hero background** on individual adventure detail pages

## How It Works

### Automatic Image Detection

The system reads images from each adventure folder:
```
public/images/adventures/[adventure-slug]/
```

Images are sorted **alphabetically**, so the first image (alphabetically) becomes:
- The thumbnail/card image
- The hero background image

### Folder Structure

```
public/images/adventures/
├── via-sedna/
│   ├── 01-sailing.jpg          ← This becomes the thumbnail/hero
│   ├── 02-greenland.jpg
│   └── 03-climbing.jpg
├── rock-n-road/
│   ├── 01-bike.jpg             ← This becomes the thumbnail/hero
│   ├── 02-mountains.jpg
│   └── 03-team.jpg
└── [other adventures]/
```

## Adding Images to an Adventure

### Step 1: Navigate to Adventure Folder

```bash
cd public/images/adventures/via-sedna/
```

### Step 2: Add Your Images

**Recommended Naming Convention:**
```
01-description.jpg
02-description.jpg
03-description.jpg
04-description.jpg
```

**Why use numbers?**
- Ensures the first image you want as the hero/thumbnail is alphabetically first
- Makes it easy to control the order in the gallery

### Step 3: Choose Your Hero Image

The **first image alphabetically** will be used as:
1. Thumbnail on home page
2. Card image on adventures listing page
3. Hero background on detail page

**Example:**
```
via-sedna/
├── 01-hero-shot.jpg      ← Used as hero/thumbnail (alphabetically first)
├── 02-sailing.jpg        ← Shown in gallery
├── 03-team.jpg           ← Shown in gallery
└── 04-summit.jpg         ← Shown in gallery
```

## Image Specifications

### Recommended Settings

- **Format**: JPG or WebP (best compression)
- **Hero/Thumbnail Image**:
  - Min width: 1200px
  - Aspect ratio: 16:9 or 4:3
  - Quality: High (this is your main image)
- **Gallery Images**:
  - Max width: 1920px
  - File size: < 500KB each
  - Any aspect ratio

### Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG, ImageOptim)
2. **Choose a strong hero image** - it represents your adventure
3. **Use descriptive filenames** for better organization

## How the System Uses Images

### 1. Home Page (`/`)
```
Displays first 4 adventures
Each shows: [First Image from Folder]
```

### 2. Adventures Listing Page (`/adventures`)
```
Displays all 11 adventures
Each shows: [First Image from Folder]
```

### 3. Individual Adventure Page (`/adventures/via-sedna`)
```
Hero Section: [First Image from Folder]
Text Content: [Full adventure description]
Gallery Grid: [All Images from Folder]
```

## Example Setup

Let's set up images for "Via Sedna" adventure:

```bash
# Navigate to the folder
cd public/images/adventures/via-sedna/

# Add images with numbered names
# 01-hero.jpg - Your best shot (becomes hero/thumbnail)
# 02-sailing.jpg
# 03-greenland-coast.jpg
# 04-team.jpg
# 05-climbing.jpg
# 06-summit.jpg

# The website will now:
# - Use 01-hero.jpg as the card thumbnail
# - Use 01-hero.jpg as the hero background
# - Display all 6 images in the gallery grid
```

## Fallback Behavior

If an adventure folder has **no images**, the system will:
- Use `/images/adventure-placeholder.jpg` as fallback
- Display no gallery on the detail page

**To add a placeholder:**
```bash
# Create a generic placeholder image
cp your-placeholder.jpg public/images/adventure-placeholder.jpg
```

## Quick Reference

| What | Where | Image Used |
|------|-------|------------|
| Home page cards | `/` | First image (alphabetically) from adventure folder |
| Adventures listing cards | `/adventures` | First image (alphabetically) from adventure folder |
| Detail page hero | `/adventures/via-sedna` | First image (alphabetically) from adventure folder |
| Detail page gallery | `/adventures/via-sedna` | All images from adventure folder |

## Troubleshooting

### Image not showing up?

1. **Check the filename**: Must have extension `.jpg`, `.jpeg`, `.png`, `.gif`, or `.webp`
2. **Check the path**: Must be in correct folder `public/images/adventures/[slug]/`
3. **Check alphabetical order**: The first image alphabetically is used
4. **Restart dev server**: Changes to public folder may need a restart

### Wrong image showing as hero?

The system uses alphabetical sorting. Rename your files:
```
# Before (wrong order)
awesome-shot.jpg      ← First alphabetically (but not your choice)
best-photo.jpg

# After (correct order)
01-best-photo.jpg     ← First alphabetically (your hero choice)
02-awesome-shot.jpg
```

## Technical Details

The system uses two utility functions:

1. `getAdventureImages(slug)` - Returns array of all image filenames
2. `getFirstAdventureImage(slug)` - Returns path to first image or placeholder

These functions are called server-side during page rendering, so images are loaded efficiently.
