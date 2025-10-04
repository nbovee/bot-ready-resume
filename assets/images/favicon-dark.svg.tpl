{{- $colors := partial "colors.html" . }}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <style>
    .favicon-bg {
      fill: {{ $colors.resumeBodyColorDark }};
    }
    .favicon-text {
      fill: {{ $colors.textColorDark }};
      font-family: system-ui, -apple-system, sans-serif;
      font-weight: 700;
      font-size: 18px;
    }
    .favicon-ul {
      fill: {{ $colors.themeColorDark }};
    }
  </style>
  <rect class="favicon-bg" width="32" height="32" rx="2"/>
  <text class="favicon-text" x="16" y="22" text-anchor="middle">{{ if .Site.Data.data.basic.initials }}{{ .Site.Data.data.basic.initials }}{{ else }}{{ substr .Site.Data.data.basic.name 0 1 }}{{ substr (index (split .Site.Data.data.basic.name " ") 1) 0 1 }}{{ end }}</text>
  <rect class="favicon-ul" width="24" height="2.5" x="4" y="24"/>
</svg>
