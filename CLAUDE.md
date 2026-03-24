# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portuguese-language personal blog ("Notas de um Analgesico") built with Jekyll 4.3, deployed to GitHub Pages at `filipes0usa.github.io/blog`. Dark minimalist theme with no gem-based theme — all layouts and styles are custom.

## Build & Development Commands

```bash
bundle install          # Install dependencies
bundle exec jekyll serve --livereload  # Local dev server (http://localhost:4000/blog/)
bundle exec jekyll build               # Production build (outputs to _site/)
```

The `baseurl` is `/blog` — all asset and link paths must use `| relative_url` filter to work correctly both locally and on GitHub Pages.

## Architecture

**No gem theme.** All layouts chain from `_layouts/default.html`:
- `default.html` — base shell (head, header nav, footer, Google Translate widget)
- `home.html` — shows latest post only (index page)
- `posts.html` — lists all posts with client-side search via `assets/js/search.js`
- `post.html` — single post with prev/next navigation

**Styling:** Single vanilla CSS file at `assets/css/style.css` using CSS custom properties (dark theme, `--accent: #c9a55a`). No preprocessor.

**Posts:** Standard Jekyll `_posts/` with `layout: post`. Front matter uses `title`, `date`, `description`. Permalink pattern: `/posts/:year/:month/:day/:title/`.

**Search:** Client-side filtering on the posts page using `data-searchable` attributes injected by Jekyll at build time. Strips diacritics for Portuguese text matching.

**Config notes:**
- `future: true` — future-dated posts are published (intentional)
- `lang: pt` — Portuguese language throughout; UI strings in templates are hardcoded in Portuguese
- Plugins: `jekyll-feed`, `jekyll-seo-tag`

## CI

GitHub Actions workflow (`.github/workflows/ci.yml`) runs `bundle exec jekyll build` on PRs to `main` using Ruby 3.3.
