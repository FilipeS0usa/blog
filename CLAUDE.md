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
- `home.html` — pinned intro post + up to 3 recent posts (index page)
- `posts.html` — lists all posts with client-side search via `assets/js/search.js`
- `post.html` — single post with prev/next navigation

**Styling:** Single vanilla CSS file at `assets/css/style.css` using CSS custom properties (dark theme, `--accent: #c9a55a`). No preprocessor.

**Posts:** Standard Jekyll `_posts/` with `layout: post`. Front matter uses `title`, `date`, `description`. Optional: `pinned: true` (pins to home page intro section), `author` (overrides site default). Permalink pattern: `/posts/:year/:month/:day/:title/`.

**Search:** Client-side filtering on the posts page using `data-searchable` attributes injected by Jekyll at build time. Strips diacritics for Portuguese text matching.

**Config notes:**
- `future: true` — future-dated posts are published (intentional)
- `lang: pt` — Portuguese language throughout; UI strings in templates are hardcoded in Portuguese
- `author: "FilipeS0usa"` — default author for all posts; override per-post via front matter
- Plugins: `jekyll-feed`, `jekyll-seo-tag`

## CI

GitHub Actions workflow (`.github/workflows/ci.yml`) runs `bundle exec jekyll build` on PRs to `main` using Ruby 3.3.

## Branch Naming Conventions

All branches must follow the pattern `<type>/<short-description>`, where words in the description are separated by hyphens (`-`). Keep descriptions lowercase and concise.

| Type | Pattern | When to use |
|---|---|---|
| `feature` | `feature/<description>` | New blog features — new layouts, new UI components, new site sections |
| `fix` | `fix/<description>` | Non-urgent bug fixes — broken links, styling issues, incorrect config |
| `post` | `post/<slug>` | Adding or editing a blog post; use the intended post slug as description |
| `hotfix` | `hotfix/<description>` | Urgent production fixes that must be merged immediately |
| `chore` | `chore/<description>` | Maintenance tasks — dependency bumps, CI changes, repo configuration |
| `refactor` | `refactor/<description>` | Code clean-up or restructuring with no functional change |

**Examples:**

```
feature/dark-mode-toggle
feature/post-tags
fix/broken-nav-links
fix/rss-feed-encoding
post/2026-04-analgesia-em-versos
hotfix/missing-baseurl-in-sitemap
chore/bump-jekyll-4-4
refactor/extract-head-partial
```

**Rules:**
- Always branch off `main`.
- Open a pull request back to `main`; CI must pass before merging.
- Delete the branch after it is merged.
- Never commit directly to `main`.
