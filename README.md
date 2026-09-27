# Efyion Dx website

React + Vite + Tailwind CSS + React Router + Lucide icons.

## Run it

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

Requires Node.js 18 or newer.

## Where to edit content

All business content lives in `src/content/`. You should rarely need to touch components.

| File | What it controls |
| --- | --- |
| `site.js` | Brand name, tagline, navigation, email, phone, address, social links, form endpoint |
| `images.js` | Every photograph on the site (one place to swap them) |
| `catalog.js` | Product categories and products |
| `solutions.js` | Audiences, solution areas, workflow steps, support |
| `resources.js` | Articles, news, downloads and FAQs |
| `pages.js` | Home, About and Technology page copy, company profile, certifications |

### Adding a product
Copy an entry in `products` inside `catalog.js`, give it a unique `slug`, and fill in the fields. The listing, search, filters and detail page (`/products/<slug>`) update automatically. Empty fields show a neutral "To be added" state.

### Adding confirmed company details
- Phone / address / social links → `contact` in `site.js` (they appear in the footer and contact page once filled)
- Founding year, headquarters, areas served → `about.profile` in `pages.js`
- Certifications → `technology.quality.certifications` in `pages.js` (only add verified certifications)

### Images
Current photos are Unsplash placeholders loaded remotely. Before launch, put your own images in `public/images/` and reference them in `images.js`, e.g. `{ src: '/images/lab.jpg', alt: 'Description' }`. If an image fails to load, a branded placeholder is shown.

### Contact form
While `contact.formEndpoint` in `site.js` is empty, submitting the form opens the visitor's email app with the enquiry pre-filled to the Efyion Dx address. To receive enquiries directly, create a form with a service such as Formspree and paste its endpoint URL there.

## Brand colours and font
Colours are defined in `tailwind.config.js` (`navy`, `azure`, `violet`, `mist`, `line`, `ink`). The font is Manrope, bundled via `@fontsource-variable/manrope`.

## Deploying
The site is a single-page app. `public/_redirects` (Netlify) and `vercel.json` (Vercel) are included so deep links like `/products/...` work. For other hosts, configure all routes to serve `index.html`.

Set `site.url` in `site.js` to the live domain so social previews use absolute URLs.
