# Ayush Mishra — Portfolio

Personal portfolio site. **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4.**
Statically exported, so it runs on any host — no Node process needed in production.

**Live:** <https://next-portfolio-6a85648e.apps.nevtan.com/>

---

## The one file that matters

Everything the site displays comes from **`lib/resume.ts`**. Nothing is hardcoded in the
components. Update your resume → update that file → the whole site follows.

| Export | Drives |
|---|---|
| `profile` | Hero headline, name, title, résumé link, photo |
| `contact` | Contact cards, hero links, footer |
| `stats` | The four tiles beside the portrait |
| `experience` | Experience section **and** the "In production" projects |
| `skills` | Skills grid. `core: true` renders the chip highlighted |
| `earlierProjects` | "Earlier projects" cards |
| `education`, `internships`, `beyondCode`, `achievements` | Education section |
| `navItems` | Nav links and scroll-spy targets |

Keep it in sync with `public/Ayush_Mishra_Resume.pdf`. If the two disagree, a recruiter
comparing them reads it as padding.

---

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # emits ./out — plain static HTML/CSS/JS
npx serve out      # preview the real artifact
```

`next.config.ts` sets `output: "export"`, `images.unoptimized`, `trailingSlash`.

---

## Deploy to Nevtan Cloud

Pick whichever the platform supports:

**A. Static hosting** — build locally or in CI, upload the **`out/`** folder.
Point the site root at it. Nothing else required.

**B. Container** — a `Dockerfile` (multi-stage: Node build → nginx serve) and `nginx.conf`
are included:

```bash
docker build -t ayush-portfolio .
docker run -p 8080:80 ayush-portfolio
```

**C. Node/CI buildpack** — build command `npm run build`, output directory `out`,
Node 22+ (`.nvmrc` pins 24).

> If the platform serves from a sub-path rather than a domain root, set `basePath` and
> `assetPrefix` in `next.config.ts` to that sub-path, then rebuild.

---

## Notes

- Dark mode follows the OS and can be toggled; the choice persists in `localStorage`
  and is applied before first paint, so there's no flash.
- Fonts come from `next/font` (Geist), which fetches at **build** time — the build machine
  needs network access.
- Legacy images from the previous version of this site are parked in `_legacy-assets/`.
