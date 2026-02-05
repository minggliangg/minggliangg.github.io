# minggliangg.github.io

Personal website built with Eleventy, WebC, Tailwind CSS, and DaisyUI.

## Tech Stack

- **[Eleventy](https://www.11ty.dev/)** - Static site generator
- **[WebC](https://www.11ty.dev/docs/languages/webc/)** - Web components for templating
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** - Tailwind CSS component library

## Prerequisites

- Bun (latest version recommended)

## Getting Started

1. **Install dependencies**

   ```bash
   bun install
   ```

2. **Start development server**
   ```bash
   bun dev
   ```

The site will be available at `http://localhost:8080` with live reload.

3.  **Build for production**
    ```bash
    bun build
    ```
    The built site will be in the `_site` directory.

## Project Structure

```
.
├── src/
│   ├── _includes/
│   │   ├── components/     # WebC components
│   │   └── layouts/        # Page layouts
│   ├── styles/             # CSS files
│   ├── images/             # Image assets
│   ├── favicons/           # Favicon files
│   ├── index.webc          # Home page
│   ├── about.webc          # About page
│   ├── projects.webc       # Projects page
│   └── posts.webc          # Blog posts page
├── _site/                  # Built site (generated)
├── eleventy.config.js      # Eleventy configuration
└── package.json
```

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch will trigger a deployment.

## License

ISC
