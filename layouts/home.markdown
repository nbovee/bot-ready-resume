{{- $data := .Site.Data.data -}}
{{- $basic := $data.basic -}}
{{- $contact := $data.contact -}}
{{- $prompt := $data.llmPrompt -}}
{{- if $prompt.show -}}
{{- $prompt.text }}

{{ end -}}
# {{ $basic.name }}

{{- if $basic.title }}
**{{ $basic.title }}**
{{- end }}
{{- if $basic.description }} | {{ $basic.description }}{{ end }}

## Contact

{{- if $contact.location }}
- **Location:** {{ $contact.location }}
{{- end }}
{{- if $contact.email }}
- **Email:** {{ $contact.email }}
{{- end }}
{{- if $contact.phone }}
- **Phone:** {{ $contact.phone }}
{{- end }}
{{- if $contact.website }}
- **Website:** https://{{ $contact.website }}
{{- end }}
{{- if $contact.github }}
- **GitHub:** https://github.com/{{ $contact.github }}
{{- end }}
{{- if $contact.linkedin }}
- **LinkedIn:** https://linkedin.com/in/{{ $contact.linkedin }}
{{- end }}

{{- $profile := $data.profile }}
{{- if $profile.show }}

## {{ $profile.title }}

{{ $profile.description }}
{{- end }}

{{- $experience := $data.experience }}
{{- if $experience.show }}

## {{ $experience.title }}

{{- if $experience.description }}
{{ $experience.description }}
{{- end }}
{{- range $experience.items }}

### {{ .role }}{{ if .company }} at {{ .company }}{{ end }}

{{- if .date }}
*{{ .date }}*
{{- end }}
{{- if .location }} | {{ .location }}{{ end }}

{{- if .description }}
{{ .description }}
{{- end }}
{{- end }}
{{- end }}

{{- $project := $data.project }}
{{- if $project.show }}

## {{ $project.title }}

{{- if $project.description }}
{{ $project.description }}
{{- end }}
{{- range $project.items }}

### {{ .name }}{{ if .tags }} [{{ .tags }}]{{ end }}

{{- if .date }}
*{{ .date }}*
{{- end }}

{{- if .description }}
{{ .description }}
{{- end }}
{{- if .link }}

**Link:** {{ .link }}
{{- end }}
{{- end }}
{{- end }}

{{- $skill := $data.skill }}
{{- if $skill.show }}

## {{ $skill.title }}

{{- if $skill.description }}
{{ $skill.description }}
{{- end }}
{{- range $skill.groups }}

### {{ .name }}

{{- if .description }}
{{ .description }}
{{- end }}
{{- if .item }}
{{- range .item }}
- {{ . }}
{{- end }}
{{- end }}
{{- end }}
{{- end }}

{{- $education := $data.education }}
{{- if $education.show }}

## {{ $education.title }}

{{- if $education.description }}
{{ $education.description }}
{{- end }}
{{- range $education.items }}

### {{ .degree }}{{ if .major }} in {{ .major }}{{ end }}

**{{ .institution }}**{{ if .date }} | {{ .date }}{{ end }}
{{- if .gpa }} | GPA: {{ .gpa }}{{ end }}

{{- if .location }}
*{{ .location }}*
{{- end }}
{{- if .description }}

{{ .description }}
{{- end }}
{{- end }}
{{- end }}

{{- $certificate := $data.certificate }}
{{- if $certificate.show }}

## {{ $certificate.title }}

{{- if $certificate.description }}
{{ $certificate.description }}
{{- end }}
{{- range $certificate.items }}

### {{ .name }}

{{- if .issuer }}
**Issued by:** {{ .issuer }}
{{- end }}
{{- if .date }} | {{ .date }}{{ end }}
{{- if .description }}

{{ .description }}
{{- end }}
{{- end }}
{{- end }}

{{- $publication := $data.publication }}
{{- if $publication.show }}

## {{ $publication.title }}

{{- if $publication.description }}
{{ $publication.description }}
{{- end }}
{{- range $publication.items }}

### {{ .title }}

{{- if .authors }}
*{{ .authors }}*
{{- end }}
{{- if .conference }} | {{ .conference }}{{ end }}
{{- if .tag }} [{{ .tag }}]{{ end }}
{{- if .date }} | {{ .date }}{{ end }}
{{- if .link }}

**Link:** {{ .link }}
{{- end }}
{{- if .description }}

{{ .description }}
{{- end }}
{{- end }}
{{- end }}

{{- $award := $data.award }}
{{- if $award.show }}

## {{ $award.title }}

{{- if $award.description }}
{{ $award.description }}
{{- end }}
{{- range $award.items }}

### {{ .name }}

{{- if .awarder }}
**Awarded by:** {{ .awarder }}
{{- end }}
{{- if .date }} | {{ .date }}{{ end }}
{{- if .description }}

{{ .description }}
{{- end }}
{{- end }}
{{- end }}

{{- $patent := $data.patent }}
{{- if $patent.show }}

## {{ $patent.title }}

{{- if $patent.description }}
{{ $patent.description }}
{{- end }}
{{- range $patent.items }}

### {{ .name }}

{{- if .date }}
**Date:** {{ .date }}
{{- end }}
{{- if .description }}

{{ .description }}
{{- end }}
{{- end }}
{{- end }}

{{- $organization := $data.organization }}
{{- if $organization.show }}

## {{ $organization.title }}

{{- if $organization.description }}
{{ $organization.description }}
{{- end }}
{{- range $organization.items }}

### {{ .name }}

{{- if .role }}
**Role:** {{ .role }}
{{- end }}
{{- if .date }} | {{ .date }}{{ end }}
{{- if .description }}

{{ .description }}
{{- end }}
{{- end }}
{{- end }}

{{- $language := $data.language }}
{{- if $language.show }}

## {{ $language.title }}

{{- if $language.description }}
{{ $language.description }}
{{- end }}
{{- range $language.items }}
- **{{ .idiom }}:** {{ .level }}
{{- end }}
{{- end }}

{{- $interest := $data.interest }}
{{- if $interest.show }}

## {{ $interest.title }}

{{- if $interest.description }}
{{ $interest.description }}
{{- end }}
{{- range $interest.items }}
- {{ .item }}{{ if .link }} ([link]({{ .link }})){{ end }}
{{- end }}
{{- end }}

{{- $evaluation := $data.evaluation }}
{{- if $evaluation.show }}

## {{ $evaluation.title }}

{{ $evaluation.description }}
{{- end }}

{{- $reference := $data.reference }}
{{- if $reference.show }}

## {{ $reference.title }}

{{- if $reference.description }}
{{ $reference.description }}
{{- end }}
{{- range $reference.items }}

### {{ .name }}

{{- if .title }}
*{{ .title }}*
{{- end }}
{{- if .contact }}
- {{ .contact }}
{{- end }}
{{- if .description }}

{{ .description }}
{{- end }}
{{- end }}
{{- end }}
