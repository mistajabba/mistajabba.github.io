[← Back to Projects](../CLAUDE.md) | [README.md](README.md)

# Website

Working reference for the personal website project.

## Purpose

Build a thoughtful personal website that documents ideas, projects, and lessons around
leadership, AI, business, strategy, and the outdoors. The site will eventually deploy to the
existing `mistajabba.github.io` GitHub Pages domain.

## Direction

- Classic field-journal and National Park character
- Understated, warm, thoughtful, and timeless
- Reflects a background spanning military service, consulting, climbing, and AI strategy
- Avoid flashy portfolio and modern startup conventions
- Make the site lightweight and easy to expand over time

## Visual system

- Warm beige canvas: `#f3efe4`
- Hunter green primary: `#2f4f3a`
- Burgundy accent: `#5b2c2c`
- Serif display type with a simple sans-serif body face
- Generous whitespace, fine rules, paper texture, minimal fade-in motion
- Responsive layouts for desktop and mobile

## Pages

- `index.html` — introduction, section cards, and recent notebook entries
- `about.html` — biography, career timeline, skills, interests, and professional links
- `notebook.html` — searchable and filterable article index
- `projects.html` — active, research, prototype, and completed work
- `library.html` — books, articles, podcasts, videos, and software
- `contact.html` — email, LinkedIn, and GitHub contact paths

## Technical conventions

- HTML, CSS, and vanilla JavaScript only
- No backend, frameworks, build tooling, or runtime dependencies
- Multi-page static site ready for GitHub Pages
- Shared styles live in `css/styles.css`
- Shared behavior lives in `js/main.js`
- Every page uses the same navigation and footer structure
- Mobile navigation must remain keyboard- and screen-reader-accessible
- Dark mode follows system preference until explicitly set by the visitor
- Respect `prefers-reduced-motion`
- Keep placeholder content easy to identify and replace
- Future notebook articles can be added as static HTML or generated from Markdown later

## Content status

The biography, contact links, resume, articles, projects, and library items are thoughtful
placeholders. Replace them with verified personal details before public launch.

## Reference implementation

Use `../mistajabba.github.io/` only as the reference for the established GitHub Pages domain
and deployment context. This project intentionally uses a simpler static HTML architecture.
