# Nidhin Narayanan — Portfolio

Responsive portfolio for Nidhin Narayanan, focused on quality engineering, accessibility testing, QA automation and web products.

## Included

- Interactive pixel-reveal hero
- Vector Nidhin character with a subtle hover blink and an accessible spring-motion QA tooltip
- Expanded skills matrix, testing workflow, and verified education/certification highlights
- Scroll-driven capability statement
- QA-first project gallery with accessible detail dialogs and keyboard focus restoration
- Featured case studies for NYDH QA Workspace, Accessibility Tester and Site Checks
- Playful Pet cursor companion based on the supplied `PlayfulPet.tsx`
- Responsive desktop, tablet and mobile layouts
- Reduced-motion support
- Search and social metadata, plus robots and sitemap files

## Run locally

This repository is a complete static site. The deployable `index.html` is at the repository root. On Windows, double-click `start-local.cmd` to open it locally without installing anything else.

```bash
npm run dev
```

You can also run `python -m http.server 4173 --bind 127.0.0.1` and open `http://127.0.0.1:4173`. Press `Ctrl+C` in the terminal to stop the local server.

## Playful Pet files

The working cat is included in the deployable site:

- `assets/oneko-cat.gif` — cat sprite used by `index.html`
- `assets/oneko-dog.gif` — optional dog sprite
- `components/PlayfulPet.tsx` — the supplied React/Framer component source
- `components/playful-pet-preview.html` — the supplied standalone preview

Keep the `assets` folder beside `index.html`; moving or uploading only the HTML file will make the cat disappear.

## Add project video, GIF or screenshots

1. Put media files in `assets/projects/`.
2. Use compressed `.webm` or `.mp4` video where possible. Add a poster image for faster loading.
3. Replace a case study's `.case-ui` preview in `index.html` with one of these:

```html
<video style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" autoplay muted loop playsinline poster="assets/projects/project-poster.webp">
  <source src="assets/projects/project-demo.webm" type="video/webm">
  <source src="assets/projects/project-demo.mp4" type="video/mp4">
</video>
```

```html
<img style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" src="assets/projects/project-demo.gif" alt="Short demonstration of the project">
```

Always include a useful `alt` description for images. For video with important speech or sound, include captions.

## Publish with GitHub Pages

Push the complete folder to GitHub, then open **Settings → Pages**. Select **Deploy from a branch**, choose the `main` branch and `/root`. Do not upload `index.html` by itself—the `assets` folder contains the cat and hero artwork.

## Main links

- [NYDH QA Workspace](https://nydh-v1.vercel.app/)
- [Accessibility Tester](https://rbi-accessibility-tester.onrender.com/)
- [GitHub profile](https://github.com/eyesofnydh)

## Credits

The pet movement and cat sprite are adapted from oneko.js by adryd under the MIT License. The dog sprite is from spicetify-oneko by adryd and kyrie25 under the MIT License.
