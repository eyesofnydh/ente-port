# Nidhin Narayanan — Portfolio

Responsive portfolio for Nidhin Narayanan, focused on quality engineering, accessibility testing, QA automation and web products.

## Included

- Interactive pixel-reveal hero
- Scroll-driven capability statement
- Folder-style project gallery with accessible detail dialogs
- Featured case studies for NYDH QA Workspace, RBI Accessibility Tester and Site Checks
- Playful Pet cursor companion based on the supplied `PlayfulPet.tsx`
- Responsive desktop, tablet and mobile layouts
- Reduced-motion support

## Run locally

This repository is a complete static site. The deployable `index.html` is at the repository root.

```bash
npm run dev
```

Then open the local address shown in the terminal.

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
3. Replace a case study's `.case-ui` preview in `dist/index.html` with one of these:

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
- [RBI Accessibility Tester](https://rbi-accessibility-tester.onrender.com/)
- [GitHub profile](https://github.com/eyesofnydh)

## Credits

The pet movement and cat sprite are adapted from oneko.js by adryd under the MIT License. The dog sprite is from spicetify-oneko by adryd and kyrie25 under the MIT License.
