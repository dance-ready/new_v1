# Dance Ready Project — Website

A static, multi-page website for the Dance Ready Project. No build step, no framework — just HTML, CSS, and JavaScript. It deploys to Vercel (or any static host) with zero configuration.

## What's here

```
site/
├── index.html             ← Home
├── assessment.html        ← Dance Ready Score™
├── dansebridge.html       ← Dansebridge Online (conditioning)
├── education.html         ← Educational offerings
├── events.html            ← Upcoming events
├── about.html             ← Founders + bios
├── affiliates.html        ← Partner discounts
├── assets/
│   ├── css/styles.css     ← all styling, in one file
│   ├── js/data.js         ← all content (testimonials, FAQs, events, courses, founders, affiliates)
│   └── js/components.js   ← interactive bits (slideshow, accordions, modals)
│   └── images/            ← all photography (see assets/images/README.md for sources)
├── vercel.json            ← clean URL config (drops .html suffix)
└── .gitignore
```

## Deploy to Vercel (recommended)

1. Create a new GitHub repository.
2. Push the contents of this folder to that repo:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:YOUR_USER/YOUR_REPO.git
   git push -u origin main
   ```

3. Go to **vercel.com → Add New → Project**, import the repo. Vercel auto-detects a static site — leave all settings at default and click **Deploy**.

4. Vercel will give you a URL like `your-project.vercel.app`. To use a custom domain (e.g. `danceready.com`), open the project in Vercel → **Settings → Domains**, add the domain, and follow the DNS instructions.

That's it. Every time you push to `main`, Vercel redeploys automatically.

## Run locally

You can preview the site by serving the folder over HTTP. The `file://` protocol won't work properly because the JS uses `fetch`-style behavior in places.

```bash
# from inside the site/ folder
python3 -m http.server 8000
# → open http://localhost:8000
```

Or with Node:

```bash
npx serve .
```

## How to edit the site

### Change text content (testimonials, FAQs, event dates, etc.)

Most of the page content lives in **`assets/js/data.js`**. Find the relevant array (`testis` for testimonials, `faqData` for FAQs, `evData` for events, `affData` for affiliates, `bioData` for founder bios, etc.) and edit the strings. No build needed — just refresh.

### Change static text on a page

Things like the hero headline, vision/mission paragraphs, or CTA copy live directly in the HTML files. Open `index.html` (or whichever page) in a text editor and edit the text inside the corresponding tag.

### Replace an image

Drop a new file into `assets/images/` with the **same filename** (e.g. `hero-1.jpg`). No code changes needed. See `assets/images/README.md` for what each image represents and recommended dimensions.

### Wire up a CTA button

Buttons like "Book a Consultation", "Sign Up for Dansebridge", "Get the Dance Ready Score" are currently visual placeholders. To make one functional:

1. Find the button in the relevant HTML file (e.g. `<button class="bp">Book a Consultation</button>`)
2. Change `<button>` to `<a href="https://your-link.com" class="bp">…</a>`

The `.bp`, `.ba`, `.bl`, `.bg`, `.bu` classes all work the same on anchors as they do on buttons.

### Newsletter forms

The forms on `education.html` and `events.html` show a "Thanks!" message on submit but don't actually send the email anywhere. To wire them up to a real provider (Mailchimp, ConvertKit, Buttondown, etc.), copy that provider's embed snippet and replace the `<form>` element.

## Browser support

Modern Chrome, Safari, Firefox, Edge. The site uses standard DOM APIs (no IE polyfills).

## Credits

- Fonts: Cormorant Garamond + DM Sans (via Google Fonts)
- Photography: see `assets/images/README.md` for source attribution
- Brand colors and design system: client-supplied
