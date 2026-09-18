# Isabela Chaves — Personal Portfolio

A responsive personal portfolio for Isabela Chaves, focused on cloud infrastructure, backend engineering, data systems, and the connection between law and technology.

The visual direction is inspired by Frutiger Aero: bright skies, saturated greens, translucent glass, water, soft organic forms, and an optimistic technology aesthetic.

![Portfolio hero with a Frutiger Aero technology garden](assets/frutiger-aero-hero-v4.webp)

## Highlights

- Responsive single-page layout for desktop, tablet, and mobile
- Original Frutiger Aero artwork for the hero and project cards
- Portfolio sections for biography, expertise, credentials, current work, hobbies, skills, and contact details
- Sticky navigation with an accessible mobile menu
- Active-section navigation states
- Scroll reveal animations with `prefers-reduced-motion` support
- Keyboard focus styles and semantic HTML
- No framework, package manager, or build step required

## Local preview

From the project directory, start a local server:

```sh
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

The site can also be opened directly from `index.html`, but a local server more closely matches normal web hosting behavior.

## Project structure

```text
.
├── index.html       # Page content and semantic structure
├── styles.css       # Frutiger Aero design system and responsive layout
├── script.js        # Navigation, scroll reveal, and active-section behavior
└── assets/
    ├── favicon.svg
    ├── frutiger-aero-hero-v4.webp
    ├── frutiger-aero-fpga.webp
    ├── frutiger-aero-data-pipelines.webp
    └── isabela-chaves-portrait.jpg
```

## Main sections

- **Hero:** introduction and primary contact links
- **About:** biography and professional background
- **Expertise:** digital law and LGPD, cloud platforms, backend engineering, and data and machine learning
- **Credentials:** accurately labelled course certificates
- **Current work:** a 16-bit FPGA processor and home data pipelines
- **Hobbies:** 3D printing, homelab, and piano
- **Technical index:** tools and technologies
- **Contact:** email, GitHub, and LinkedIn

## Customization

### Content

Edit the copy, links, and section structure in `index.html`.

### Visual system

The main design tokens are defined at the top of `styles.css`:

- Sky, aqua, green, and navy colors
- Glass surfaces and borders
- Shadows and border radii
- Display and body typography
- Container width

### Images

Replace files in `assets/` and preserve the existing filenames to avoid changing HTML references. When using different image proportions, update the corresponding `width` and `height` attributes in `index.html`.

## Validation

The site has been checked at desktop and 390 px mobile widths. The mobile layout has no horizontal overflow, the navigation collapses into an accessible menu, and the JavaScript passes `node --check`.

## Deployment

This is a static site. Deploy the repository contents to any static host, such as GitHub Pages, Cloudflare Pages, Netlify, or an object-storage/CDN setup. The hosting root should serve `index.html`.
