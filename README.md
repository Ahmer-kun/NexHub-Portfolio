# [NH] NexHub — Project Portfolio Hub

A high-fidelity, dark-mode portfolio aggregator where you showcase all your projects in one place instead of scattering links across a CV. Built with vanilla HTML5, CSS3, and JavaScript — no frameworks, no dependencies beyond Google Fonts.

---

## Live Preview

Open `nexhub-portfolio.html` directly in any browser. No build step, no server required.

---

## Features

**UI / Design**
- Dark editorial aesthetic with cyberpunk terminal accents
- `Syne` display font paired with `Space Mono` for mono details
- Glassmorphism sticky navbar (activates on scroll)
- Animated hero with floating radial orbs and a perspective grid
- Smooth scroll-reveal animations on every section (IntersectionObserver)
- Custom cursor with lagging trail ring (auto-disabled on touch devices)
- Full-page loading screen with progress bar

**Projects Section**
- Cards rendered dynamically from a JS data array
- Live search with `⌘K` / `Ctrl+K` keyboard shortcut
- Tag filter buttons — search and filter work simultaneously
- Hover micro-interactions: scale lift, image zoom, overlay reveal
- Modal detail view with full project description and action buttons
- "No results" empty state with a reset button

**Other Sections**
- Featured project — large highlighted card at the top
- Animated stat counters in the hero (eased, viewport-triggered)
- Skills grid rendered from a data array
- Contact section with social links
- Minimal footer with live status indicator

---

## File Structure

```
nexhub-portfolio.html   ← Single self-contained file (recommended for deployment)
index.html              ← HTML shell (links to separate CSS/JS)
style.css               ← All styles (~400 lines, CSS custom properties)
script.js               ← All logic (~280 lines, vanilla JS)
README.md               ← This file
```

---

## Customization

### 1. Add / Edit Projects

Open `script.js` and edit the `projects` array at the top:

```js
const projects = [
  {
    id: 1,                          // unique number
    title: "Your Project",
    description: "Short 2–3 line description shown on the card.",
    fullDesc: "Longer description shown in the modal popup.",
    image: "https://your-image-url.com/thumb.jpg",
    tags: ["Web", "AI"],            // used for filter buttons
    live: "https://yourproject.com",
    github: "https://github.com/you/repo",
    featured: true,                 // only ONE project should be featured
  },
  // ...
];
```

### 2. Edit Skills

```js
const skills = [
  { icon: "⚡", name: "TypeScript", level: "Expert" },
  { icon: "🐍", name: "Python",     level: "Advanced" },
  // ...
];
```

### 3. Tag Colors

Tags are auto-colored by name. Add new mappings in the `tagColors` object:

```js
const tagColors = {
  "AI":         "tag-purple",
  "Web":        "tag-indigo",
  "Security":   "tag-red",
  "YourTag":    "tag-cyan",   // ← add here
};
```

Available color classes: `tag-indigo`, `tag-cyan`, `tag-purple`, `tag-green`, `tag-orange`, `tag-pink`, `tag-red`, `tag-yellow`, `tag-default`

### 4. Personal Info

- **Name / Logo** — search for `NH` in `index.html` and replace with your initials
- **Email** — replace `hello@nexhub.dev` in the contact section
- **Social links** — update the `href` values on the three `.social-link` anchors
- **Hero text** — edit the `<h1>`, subtitle `<p>`, and stat `data-target` values directly in the HTML
- **About text** — edit the two `<p class="about-text">` paragraphs in the About section

### 5. Colors / Theme

All design tokens live in `:root` at the top of `style.css`:

```css
:root {
  --accent:      #6366f1;   /* primary accent (indigo) */
  --accent-2:    #a78bfa;   /* secondary accent (violet) */
  --accent-cyan: #22d3ee;   /* cyan highlight */
  --bg:          #050508;   /* page background */
  --bg-card:     #0d0d18;   /* card background */
  /* ... */
}
```

---

## Deployment

**Static hosting (Netlify, Vercel, GitHub Pages)**

Drop the four files into a repo or drag `nexhub-portfolio.html` into Netlify's deploy UI. Done.

**GitHub Pages (quickstart)**

```bash
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin https://github.com/YOU/portfolio.git
git push -u origin main
# Enable Pages in repo Settings → Pages → Deploy from main / root
```

**Single-file option**

`nexhub-portfolio.html` is fully self-contained — CSS and JS are inlined. Share it as one file, host it on any static server, or email it directly.

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). The custom cursor is automatically hidden on touch/mobile devices.

---

## License

MIT — use it, fork it, ship it.
