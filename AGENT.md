# My AI Assistant

This is a decentralized, self-running digital companion built by Electriclief.

## Project Structure

```
my-ai-assistant/
├── docs/
│   ├── index.html          # Main splash page
│   ├── css/
│   │   └── styles.css      # Theme-aware CSS (light/dark)
│   ├── js/
│   │   ├── theme-toggle.js # Theme switching logic
│   │   └── tree-menu.js    # Left sidebar navigation
│   ├── assets/
│   │   └── ToKate*.png     # Kate McGill images
│   └── sub-sites/          # Sub-website content
├── .git/
└── AGENT.md
```

## How to Use

1. Open `docs/index.html` in a browser
2. Use the theme toggle in the header to switch between light/dark
3. Click tree items in the left sidebar to navigate to sub-sites
4. Add new sub-sites to `docs/sub-sites/` and create corresponding tree entries

## Adding New Sub-Sites

1. Create folder in `docs/sub-sites/`
2. Add `index.html` inside
3. Update `tree-menu.js` with navigation logic
4. Add tree item in `docs/index.html`

## Tech Stack

- **Golden Layout** - For flexible layout management
- **Vanilla JS** - No frameworks, minimal dependencies
- **CSS Custom Properties** - For theme switching
- **GitHub Pages** - For hosting
