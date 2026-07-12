# Storefront Image Optimization Workflow

All images in `src/assets/` have been optimized to WebP format and resized to improve page loading speed. 

## Batch Convert & Resize Script

A Node.js script is included in this repository to automate the conversion of new `.png`, `.jpg`, or `.jpeg` images to `.webp` format and resize them if they are too large.

### How it works:
1. Scans `src/assets/` recursively.
2. Identifies all `.png`, `.jpg`, and `.jpeg` files.
3. If an image's width or height exceeds **1000px**, it automatically resizes it to maximum 1000px on the longest side (fit inside) to support Retina/HD displays without bloating file size.
4. Converts the image to `.webp` at **85% quality**.
5. Deletes the original file.

### How to run it:

Whenever you add new product or hero images to `src/assets/`, simply run:

```bash
node scripts/convert-images.js
```

Ensure you update any corresponding import paths in code (e.g. in `src/data/products.js`) to target the new `.webp` files.
