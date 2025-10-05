<h1 align="center">online-resume</h1>


<h4 align="center">A minimalist Hugo theme for your resume, refreshed for LLM crawlers.</h4>

---

## Live Demo

:point_right: [online-resume][Demo] :point_left:

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

### Usage

#### Quickly

- Create new hugo site and add the theme through git submodule.
  - `hugo new site resume`
  - `cd resume && git init`
  - `git submodule add git@github.com:nbovee/bot-ready-resume.git themes/online-resume`
- Copy `hugo.yml` and `data.yml` files.
  - `cp themes/online-resume/exampleSite/hugo.yml .`
  - `cp themes/online-resume/exampleSite/data/data.yml ./data`
- Edit `data/data.yml` file directly to update your resume.
- Run `hugo server` and open in browser to preview the resume.

#### Customization

- `data/data.yml`: Edit the resume content.
  - `basic.initials`: Optional field to override auto-parsed initials used in favicons.
  - `llmPrompt`: Optional section to provide additional instructions for LLM consumption via llms.txt.
  - `contact`: For contact icons, use Font Awesome icon classes (e.g., `fa-brands fa-fw fa-github`). Search available icons at [Font Awesome](https://fontawesome.com/icons) using `fa-solid` for regular icons or `fa-brands` for brand logos. Additional custom icons are available in `static/assets/icons/css/all.css`.
- `static/images/profile.png`: Your profile photo.
- `static/images/favicon-32x32.png` and `static/favicon.ico`: Optional fallback favicons for older browsers (SVG favicons are auto-generated).
- `hugo.yml`: Website and theme style settings.
  - `params.themeColor`: Theme color in OKLCH format (e.g., `"oklch(0.490 0.203 317.8)"`) or hex format (e.g., `"#1DA1F2"`). The remainder of colors are dynamically created in `colors.html`.
  - `params.llms.txt`: Enable/disable llms.txt output format.
  - `params.llmHeader`: Add LLM guidance as HTML comment in page head.
  - `params.bodyDelimiter`: Delimiter for body content items.
  - `params.siteCredit`: Show/hide site credits.
  - `outputFormats`: Configure markdown and llmstxt output formats.

## FAQ

#### How to enable LLM-friendly output formats?

The theme can generate additional output formats optimized for LLM consumption:
- Set `params.llms.txt: true` in `hugo.yml` to enable llms.txt output at `/llms.txt`.
- Set `params.llmHeader: true` to add LLM guidance as an HTML comment in the page head.
- Add custom instructions in `data.yml` under `llmPrompt.text`.
- Configure `outputFormats` and `outputs` in `hugo.yml` to enable markdown and llms.txt formats.

#### How does dark mode work?

The theme includes an automatic dark mode toggle that:
- Detects system color scheme preference on initial load.
- Stores user preference in localStorage for subsequent visits.
- Provides a manual toggle switch in the UI.
- Automatically switches to light mode when printing.
- Updates the favicon to match the current theme.

#### How are favicons generated?

Favicons are automatically generated from the user's name in `data.yml`:
- Uses the first letter of the first and last name (e.g., "John Doe" → "JD").
- Can be overridden by setting `basic.initials` in `data.yml`.
- Generates both light and dark theme variants.
- Uses the theme color for accent elements.
- Creates SVG favicons with asset fingerprinting for cache busting.
- Includes PNG and ICO fallbacks for broader browser support.

#### How to use OKLCH colors?

Set `params.themeColor` in `hugo.yml` using the OKLCH format: `"oklch(L C H)"` where:
- L = Lightness (0-1)
- C = Chroma (0-0.4)
- H = Hue (0-360)

Example: `"oklch(0.490 0.203 317.8)"` for a purple theme. The theme will handle color space conversion and ensure proper contrast.

#### How to change the order of the sections in the resume?

There is an `order` option in each section, you can adjust the order by modifying this, the smaller the value the more forward the position.

#### How to hide the specified section in the resume?

If there is no content you want to keep in the section, you can remove it directly. If you want to keep the content, you can set the value of the `show` option of the section to `false`.



#### How to create a resume in other languages?

For example, if you already have an English version resume and you want to create a Chinese version.
  - Copy a `data.yml` file in the `data` folder named `cn.yml` and edit the content.
  - Create `layouts/page` directories through `mkdir -p layouts/page`.
  - Copy `index.html` file in the theme layouts directory to above directory `cp themes/online-resume/layouts/index.html layouts/page/cn.html`
  - Change the `{{- partial "common.html" (dict "Site" .Site "data" .Site.Data.data) }}` in the `cn.html` to `{{- partial "common.html" (dict "Site" .Site "data" .Site.Data.cn) }}`.
  - Create `content` directory in root directory and create a markdown file named `cn.md`, add front matter `layout: cn` in `cn.md`.
  - Run `hugo server` and you can preview the Chinese version of your resume by visiting `https://YOUR_RESUME_URL/cn`.


## Others

- Original Hugo Version: [tarrex/hugo-theme-online-resume][Base Version]


[Demo]: https://nick.bov.ee/bot-ready-resume


[Base Version]: https://github.com/tarrex/hugo-theme-online-resume
