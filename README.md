# McLearn Media

The website of **McLearn Media LLC** — Brandon, Mississippi.
Music published under the artist name **MP**, written by Michael Shun McLaurin.

> One Sound. Many Stories.

## What this repository is

A static website. No build step, no framework, no dependencies. Every
page is a single self-contained HTML file.

| File | What it is |
|---|---|
| `index.html` | McLearn Media Central — the main site |
| `listen.html` | the listen page (the QR code destination) |
| `legal.html` | privacy notice, terms of use, accessibility statement |
| `404.html` | not-found page |
| `speakeasy/index.html` | Speakeasy — the talk app (AAC) for nonspeaking autistic kids and adults, served at `/speakeasy/` |
| `SPEAKEASY-UPDATE-GUIDE.md` | step-by-step: check a Speakeasy update is live and test it on a phone |
| `og-image.png` | the preview image shown when a link is shared |
| `*.mp3` | twelve 45-second excerpts |
| `_headers` | security headers and cache rules |
| `_redirects` | `/listen`, `/privacy`, `/terms` shortcuts; old `/speak-easy-2` links go to `/speakeasy/` |

## Deploying

Cloudflare Pages, connected to this repository:

- Framework preset: **None**
- Build command: *(empty)*
- Build output directory: `/`

Nothing to compile. Cloudflare serves these files as they are.

## The audio

The twelve `.mp3` files are 45-second excerpts, published for review and
promotion. Full recordings are on the streaming platforms — search **MP**.

Every recording and composition here is owned by McLearn Media LLC and
Michael Shun McLaurin. The publisher share and the writer share are both
held in full, so a single conversation clears any use.

## Editing the streaming links

Near the top of the script in both `index.html` and `listen.html` there is
a block marked `TOO LOST SMART LINKS` — twelve slots, one per recording.
Paste each release's `too.fm` link between the quotes beside its title. A
song with a link shows a "Listen on all platforms" button; a song without
one shows nothing extra. Nothing else needs touching.

---

McLearn Media LLC · Mclearn2025@gmail.com · 601-808-9559
