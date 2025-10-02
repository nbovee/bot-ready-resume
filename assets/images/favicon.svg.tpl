<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <style>
    .favicon-bg {
      fill: oklch(1 0 0);
    }
    .favicon-text {
      fill: oklch(0 0 0);
      font-family: system-ui, -apple-system, sans-serif;
      font-weight: 700;
      font-size: 18px;
    }
    .favicon-ul {
      fill: {{ .Site.Params.themeColor }};
    }
  </style>
  <rect class="favicon-bg" width="32" height="32" rx="6"/>
  <text class="favicon-text" x="16" y="22" text-anchor="middle">{{ substr .Site.Data.data.basic.name 0 1 }}{{ substr (index (split .Site.Data.data.basic.name " ") 1) 0 1 }}</text>
  <rect class="favicon-ul" width="23.5" height="2.5" x="4.5" y="24"/>
</svg>