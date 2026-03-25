# Notas de um Analgésico

**A minimalist blog.**

> *"Um espaco para tirar as coisas de dentro."*

<p align="center">
  <a href="https://filipes0usa.github.io/blog">View Live Site</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<a href="#contributing-an-article">Contribute an Article</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<a href="#getting-started">Get Started</a>
</p>

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Using Docker (Recommended)](#using-docker-recommended)
  - [Local Ruby Setup](#local-ruby-setup)
- [Project Structure](#project-structure)
- [Contributing an Article](#contributing-an-article)
  - [Writing Your Post](#writing-your-post)
  - [Front Matter Reference](#front-matter-reference)
  - [Submitting a Pull Request](#submitting-a-pull-request)
- [Continuous Integration](#continuous-integration)
- [License](#license)

---

## About

**Notas de um Analgésico** is a Portuguese-language personal blog with a custom dark minimalist design. No gem-based themes, no JavaScript frameworks, no CSS preprocessors -- just clean HTML, vanilla CSS, and honest writing.

Key features:

- Custom dark theme with gold accent (`#c9a55a`)
- Client-side search with Portuguese diacritics support
- Fully responsive layout
- Live reload during development -- changes appear in the browser automatically
- RSS feed via `jekyll-feed`
- SEO metadata via `jekyll-seo-tag`

## Tech Stack

| Layer            | Technology                          |
|------------------|-------------------------------------|
| Generator        | [Jekyll 4.3](https://jekyllrb.com/) |
| Language         | Ruby 3.3                            |
| Styling          | Vanilla CSS (custom properties)     |
| Deployment       | GitHub Pages                        |
| CI               | GitHub Actions                      |
| Containerization | Docker Compose                      |

---

## Getting Started

### Using Docker (Recommended)

The simplest way to run the blog locally. You do not need Ruby installed on your machine.

**Prerequisites:** [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) (included with Docker Desktop).

```bash
# Clone the repository
git clone https://github.com/FilipeS0usa/blog.git
cd blog

# Start the development server in the background
docker compose up -d
```

The site will be available at **http://localhost:4000/blog/**

Live reload is enabled -- when you edit files, the browser refreshes automatically.

To view build output or troubleshoot errors:

```bash
docker compose logs -f
```

To stop the server:

```bash
docker compose down
```

> **Note:** The first run may take a moment while Docker pulls the Ruby image and installs gem dependencies. Subsequent starts are faster thanks to the cached bundle volume.

### Local Ruby Setup

If you prefer running without Docker:

**Prerequisites:** Ruby 3.3+ and [Bundler](https://bundler.io/).

```bash
# Clone the repository
git clone https://github.com/FilipeS0usa/blog.git
cd blog

# Install dependencies
bundle install

# Start the development server with live reload
bundle exec jekyll serve --livereload
```

The site will be available at **http://localhost:4000/blog/**

---

## Project Structure

```
.
├── _layouts/
│   ├── default.html          # Base shell (head, nav, footer, translate widget)
│   ├── home.html              # Homepage -- pinned intro + recent posts
│   ├── post.html              # Single post with prev/next navigation
│   └── posts.html             # Post listing with client-side search
├── _posts/                    # Blog posts (Markdown)
├── assets/
│   ├── css/style.css          # All styles (CSS custom properties, dark theme)
│   └── js/search.js           # Client-side search with diacritics stripping
├── _config.yml                # Jekyll configuration
├── docker-compose.yaml        # Docker setup for local development
├── Gemfile                    # Ruby dependencies
└── .github/workflows/
    └── ci.yml                 # GitHub Actions CI pipeline
```

---

## Contributing an Article

Contributions are welcome. If you would like to write a guest article, follow the steps below.

### Writing Your Post

1. **Fork** this repository and create a new branch:

   ```bash
   git checkout -b article/your-topic-name
   ```

2. **Create a new Markdown file** in the `_posts/` directory using the Jekyll naming convention:

   ```
   _posts/YYYY-MM-DD-your-post-title.md
   ```

   The filename determines the publication date and URL slug. For example, `2026-04-15-reflexoes-sobre-o-tempo.md` will be published at `/blog/posts/2026/04/15/reflexoes-sobre-o-tempo/`.

3. **Add the required front matter** at the top of your file (see reference below).

4. **Write your content** in Markdown below the front matter.

5. **Preview locally** to verify everything renders correctly:

   ```bash
   docker compose up -d
   # Open http://localhost:4000/blog/
   # Check docker compose logs -f if the page does not appear
   ```

### Front Matter Reference

Every post must start with a YAML front matter block. Here is a complete example:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-04-15 12:00:00 +0000
description: "A brief one-sentence summary of your article."
author: "Guest Author Name"
---
```

| Field         | Required | Description                                                 |
|---------------|----------|-------------------------------------------------------------|
| `layout`      | Yes      | Always `post`.                                              |
| `title`       | Yes      | The article title. Wrap in quotes if it contains colons.    |
| `date`        | Yes      | Publication date and time. Use `+0000` (UTC) for timezone.  |
| `description` | Yes      | A short summary shown in post listings and SEO metadata.    |
| `author`      | No       | Author name. Defaults to the site owner if omitted. **Guest contributors should set this.** |
| `pinned`      | No       | Set to `true` to pin a post to the home page intro section. Only one post should be pinned. |

### Submitting a Pull Request

1. **Commit** your changes with a descriptive message:

   ```bash
   git add _posts/YYYY-MM-DD-your-post-title.md
   git commit -m "Add article: Your Post Title"
   ```

2. **Push** your branch to your fork:

   ```bash
   git push origin article/your-topic-name
   ```

3. **Open a Pull Request** against the `main` branch of this repository.

4. In your PR description, include:
   - A brief summary of the article topic
   - Any relevant context or motivation for the piece

5. The CI pipeline will automatically build the site to verify there are no errors. Once reviewed and approved, your article will be merged and published.

> **Guidelines:**
> - The blog language is **Portuguese** but exceptions can be made for **English**.
> - Keep the tone honest and personal -- this is not a corporate blog.
> - Images are not currently supported in the blog layout. Text-only contributions are preferred.

---

## Continuous Integration

Every pull request to `main` triggers a GitHub Actions workflow that:

1. Checks out the code
2. Sets up Ruby 3.3 with bundled dependencies
3. Runs `bundle exec jekyll build` to verify the site compiles without errors

Pull requests that fail the build cannot be merged.

---

## License

All blog content (posts, text, and creative writing) is copyright of the original authors. The source code for the blog layout and theme is available for reference and inspiration.

---

<p align="center">
  Built with <a href="https://jekyllrb.com/">Jekyll</a> &nbsp;&bull;&nbsp; Deployed on <a href="https://pages.github.com/">GitHub Pages</a>
</p>
