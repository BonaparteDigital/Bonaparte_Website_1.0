# Bonaparte Website

## Stack
- **Gatsby 5** (static site generator)
- **Contentful** (CMS — headless)
- **Tailwind CSS 3** (utility-first styling)
- **React 18**
- Deployed at [bonapartedigital.com](https://bonapartedigital.com)

## Dev Commands
```bash
npm run develop   # start dev server (uses env-cmd .env)
npm run build     # production build
npm run serve     # serve production build locally
npm run clean     # clear Gatsby cache
```

## Project Structure
```
src/
  components/    # Shared UI components
  pages/         # Gatsby pages (index, blog, 404, etc.)
  styles/        # Global CSS (blog-post.css, etc.)
  assets/        # SVG assets (imported via gatsby-plugin-react-svg)
  images/        # Static images
  hooks/         # Custom React hooks
```

## Key Files
- [src/components/post_template.js](src/components/post_template.js) — Blog article page template
- [src/components/post_layout.js](src/components/post_layout.js) — Blog article layout wrapper
- [src/pages/blog.js](src/pages/blog.js) — Blog index page
- [src/styles/blog-post.css](src/styles/blog-post.css) — Article body typography
- [src/components/subscribe.js](src/components/subscribe.js) — HubSpot newsletter form component
- [gatsby-config.js](gatsby-config.js) — Plugin config, site metadata
- [gatsby-node.js](gatsby-node.js) — Page generation logic
- [tailwind.config.js](tailwind.config.js) — Tailwind config with custom tokens

## Brand Colors
- `#EC8602` — orange (primary accent)
- `#14271D` — dark green (primary dark), Tailwind class `bg-green`
- `#C0D22D` — olive/lime, Tailwind class `bg-olive`
- Signature shadow: `-6px 6px 0 #EC8602` (box) / `-3px 3px 0 #EC8602` (text)

## Fonts
- **Raleway** — headings
- **Mulish** — body text

## Contentful
- Environment variables: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN` (in `.env`)
- **BlogPost** fields: `title`, `slug`, `publishedDate`, `body` (rich text), `description`, `abstract`, `category`, `author` (ref), `featuredImage`
- **Author** fields: `name`, `jobTitle`, `bio`, `linkedin`, `twitter`, `photo`

## HubSpot
- Portal ID: `23706289`
- Newsletter form GUID: `3968e95b-0467-46ab-a36f-882ef8f784ab`

## Integrations
- Google Tag Manager ID: `GTM-W2RR2D4M`
- Cookie consent banner (ConsentForm.js / CookieBanner.js)
- Sitemap + robots.txt generated at build time
