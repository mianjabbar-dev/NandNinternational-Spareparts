# N&Ninternational@AshSpareparts — Automotive Spare Parts Showcase

A static, price-free product showcase website for automotive spare parts.
This is a visual catalog, **not** an online store: there are no prices, no cart,
no checkout, no discounts, and no invented stock or availability claims.

Credits: Dr. Nadeem Nazir & Associates
Backlink: [Diginixit](https://diginixit.com/)

## How to run the project

No build step and no backend are required.

Option 1 — open directly:
Open `index.html` in a browser. The site uses plain classic scripts
(no ES modules), so it works straight from disk with no server.

Option 2 — local server:
```bash
cd ash-spareparts-showcase
python3 -m http.server 8000
# then visit http://localhost:8000
```
Or with Node:
```bash
npx serve .
```

## Project structure

```
index.html
public/
  favicon.svg
  images/
    products/          <- all product photographs, stored locally
src/
  data/
    products.js        <- CENTRAL product data file (edit products here)
  css/
    styles.css
  js/
    app.js             <- rendering, search, category filter, modal
IMAGE_SOURCES.md       <- image-source manifest
```

## How product data is maintained

All products live in **one central file**: `src/data/products.js`.

Each product has only:
- `id`, `name`, `category`, `categoryLabel`
- `image` (local path), `alt`, `description`

There are intentionally **no price-related fields**. Do not add price, cost,
currency, discount, stock, or availability fields.

Categories are also defined in the same file in the `categories` array.

## How to replace a product image

1. Place the new photograph in `public/images/products/`.
2. Use a meaningful filename, e.g. `engine-air-filter.jpg`.
3. Update the `image` path and `alt` text for that product in
   `src/data/products.js`.
4. Record the new image's original source URL and license in
   `IMAGE_SOURCES.md`.
5. Reload the site and confirm the image loads with no broken path.
   Only use images you have permission / a suitable license to reuse.

## How to add another product

1. Add its photograph to `public/images/products/`.
2. Add a new object to the `products` array in `src/data/products.js`
   with name, category, image path, alt text, and a concise,
   technically accurate description. Do not invent OEM part numbers,
   compatibility, stock, or manufacturer claims.
3. If it needs a new category, add that category to the `categories`
   array in the same file and add a short description for it in
   `src/js/app.js` (`categoryDescriptions`).
4. Add its source/license entry to `IMAGE_SOURCES.md`.

## Deploy to Vercel or Netlify

This is a fully static site — no build command is needed.

**Vercel**
1. Push this folder to a Git repository, or run `npx vercel` in this folder.
2. Framework preset: **Other**. Build command: *(leave empty)*.
   Output directory: *(root / `.`)*.
3. Deploy. `index.html` at the root is served automatically.

**Netlify**
1. Drag this folder onto Netlify Drop, or connect the Git repository.
2. Build command: *(leave empty)*. Publish directory: `.` (root).
3. Deploy. All images are local, so the site works without any
   third-party image server.

## Image sources

See **IMAGE_SOURCES.md** in the project root for the full manifest:
product name, original source URL, local filename, and license /
reuse information for every photograph.

All product images are downloaded and stored locally in
`public/images/products/` — the website does not hotlink or depend on
external image URLs at runtime.
