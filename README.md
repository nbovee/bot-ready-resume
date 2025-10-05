<h1 align="center">bot-ready-resume</h1>


<h4 align="center">A minimalist Hugo theme for your resume, refreshed for LLM crawlers.</h4>

---

## Live Demo

:point_right: [bot-ready-resume][Demo] :point_left:

## Getting Started

Bot Ready Resume is a Hugo theme designed for creating resumes. It enables you to write your resume in YAML file using Markdown and manage it through Git. It can be displayed on a web page and printed as a PDF file directly from the browser.

You can deploy it on various platforms that support Hugo or static files, such as GitHub Pages, Cloudflare Pages, Vercel, Netlify, your own hosting service, and others.

Features:

- User-friendly and easy to deploy.
- Built with Hugo and Markdown.
- Supports multiple languages.
- Customizable theme color with OKLCH color space support.
- Dark mode toggle with system preference detection.
- Dynamic themed favicons with automatic generation from user initials.
- LLM-friendly output formats (llms.txt, markdown alt content, steering prompts for llms).
- Modular & responsive content design.

### Quick Start

```bash
# Create new Hugo site
hugo new site my-resume
cd my-resume

# Add theme as submodule
git init
git submodule add https://github.com/nbovee/bot-ready-resume.git themes/bot-ready-resume

# Copy configuration files
mkdir -p data
cp themes/bot-ready-resume/exampleSite/hugo.yml .
cp themes/bot-ready-resume/exampleSite/data/data.yml data/

# Start development server
hugo server
```

Open your browser to `http://localhost:1313` to see your resume.
Your will also have `llms.txt` at `http://localhost:1313/llms.txt`, and a markdown output at `http://localhost:1313/index.md`

Edit `data/data.yml` to customize your resume content.

### Customization

#### Essential Files

- **`data/data.yml`** - Your resume content (name, experience, skills, etc.)
- **`hugo.yml`** - Theme configuration and styling options
- **`static/images/profile.png`** - Your profile photo

#### Key Configuration Options

**In `data/data.yml`:**
- `basic.initials` - Override auto-generated favicon initials (optional)
- `llmPrompt` - Add instructions for LLM consumption via llms.txt (optional)
- `contact` - Use Font Awesome icon classes (e.g., `fa-brands fa-github`). Browse icons at [fontawesome.com/icons](https://fontawesome.com/icons)

**In `hugo.yml`:**
- `params.themeColor` - Theme color in OKLCH (e.g., `"oklch(0.490 0.203 317.8)"`) or hex (e.g., `"#1DA1F2"`)
- `params.llms.txt` - Enable llms.txt output format (`true`/`false`)
- `params.llmHeader` - Add LLM guidance in HTML head (`true`/`false`)
- `params.siteCredit` - Show/hide footer credits (`true`/`false`)

See the [exampleSite](exampleSite/) directory for a complete configuration reference.

## FAQ

#### How do I change section order or visibility?

Each section in `data/data.yml` has an `order` field (lower numbers appear first) and a `show` field (`true`/`false`).

#### How do I enable LLM-friendly output?

The exampleSite includes LLM features by default. The theme generates:
- `/llms.txt` endpoint for structured LLM consumption
- Markdown alt content for accessibility
- Optional HTML comment guidance for LLMs

Enable/disable via `params.llms.txt` and `params.llmHeader` in `hugo.yml`.

#### How does dark mode work?

Dark mode automatically detects system preference, stores user preference in localStorage, and provides a manual toggle. It switches to light mode when printing and updates the favicon accordingly.

#### What are OKLCH colors?

OKLCH is a modern color space that provides better perceptual uniformity. Format: `"oklch(L C H)"` where L=Lightness (0-1), C=Chroma (0-0.4), H=Hue (0-360). Example: `"oklch(0.490 0.203 317.8)"` for purple. Hex colors also work.

#### How do I add a language version?

Create a new data file (e.g., `data/cn.yml`), create a layout file that references it, and add a content page with the corresponding layout. See the README for detailed steps or check the Hugo multilingual documentation.

#### How are favicons generated?

Favicons auto-generate from your name (e.g., "John Doe" → "JD"), using theme colors with light/dark variants. Override via `basic.initials` in `data.yml`. 1-3 characters works best.


## Other

- This repository was originally forked from: [tarrex/hugo-theme-online-resume](https://github.com/tarrex/hugo-theme-online-resume)


[Demo]: https://nick.bov.ee/bot-ready-resume
