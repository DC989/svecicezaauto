/**
 * post-build-cleanup.mjs
 * 
 * Removes product images from dist/ that don't belong to any built product page.
 * This keeps the deployment under Cloudflare Pages' 20,000 asset limit.
 * 
 * Runs automatically after `astro build` via the `build` npm script.
 */

import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = 'dist';
const IMAGES_DIR = path.join(DIST_DIR, 'images', 'products');
const PRODUCTS_DIR = path.join(DIST_DIR, 'proizvod');

// 1. Collect all image filenames referenced by built product pages
const builtProductDirs = fs.existsSync(PRODUCTS_DIR)
  ? fs.readdirSync(PRODUCTS_DIR, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
  : [];

console.log(`[cleanup] Found ${builtProductDirs.length} built Serbian product pages`);

// Read each product page's HTML and extract referenced image filenames
const referencedImages = new Set();

for (const dir of builtProductDirs) {
  const htmlPath = path.join(PRODUCTS_DIR, dir, 'index.html');
  if (!fs.existsSync(htmlPath)) continue;
  
  const html = fs.readFileSync(htmlPath, 'utf-8');
  // Match image references like: /images/products/xxx.jpg
  const matches = html.matchAll(/images\/products\/([^"'\s<>]+)/g);
  for (const m of matches) {
    referencedImages.add(m[1]);
  }
}

// Also check Russian product pages
const ruProductsDir = path.join(DIST_DIR, 'ru', 'proizvod');
if (fs.existsSync(ruProductsDir)) {
  const ruDirs = fs.readdirSync(ruProductsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);
  
  console.log(`[cleanup] Found ${ruDirs.length} built Russian product pages`);
  
  for (const dir of ruDirs) {
    const htmlPath = path.join(ruProductsDir, dir, 'index.html');
    if (!fs.existsSync(htmlPath)) continue;
    
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const matches = html.matchAll(/images\/products\/([^"'\s<>]+)/g);
    for (const m of matches) {
      referencedImages.add(m[1]);
    }
  }
}

console.log(`[cleanup] Found ${referencedImages.size} unique referenced product images`);

// 2. Remove unreferenced images
if (!fs.existsSync(IMAGES_DIR)) {
  console.log('[cleanup] No images/products/ directory found, skipping');
  process.exit(0);
}

const allImages = fs.readdirSync(IMAGES_DIR);
let removed = 0;

for (const file of allImages) {
  if (!referencedImages.has(file)) {
    fs.unlinkSync(path.join(IMAGES_DIR, file));
    removed++;
  }
}

// 3. Final count
const totalFiles = parseInt(
  fs.readdirSync(DIST_DIR, { recursive: true })
    .filter(f => fs.statSync(path.join(DIST_DIR, f)).isFile())
    .length
);

console.log(`[cleanup] Removed ${removed} unreferenced images (kept ${allImages.length - removed})`);
console.log(`[cleanup] Total assets in dist/: ~${totalFiles}`);

if (totalFiles < 20000) {
  console.log(`[cleanup] ✅ Under Cloudflare 20,000 asset limit (${20000 - totalFiles} headroom)`);
} else {
  console.error(`[cleanup] ❌ Still over 20,000! Consider reducing MAX_PRODUCT_PAGES_PER_LOCALE`);
  process.exit(1);
}
