# SEO Audit — Arturo Suman | Psicólogo Forense

**Site:** arturosuman.com  
**Audit date:** February 2026 (updated)  
**Focus:** On-page SEO, technical foundations, local SEO, and content.

---

## 1. What’s Working Well

### Title & meta
- **Unique, keyword-rich titles** on homepage and inner pages (e.g. “Arturo Suman | Psicólogo Forense y Clínico en Ciudad de Panamá”).
- **Meta descriptions** are present and differentiated per page, with location and service keywords.
- **Keywords meta** used with relevant terms (psicólogo forense Panamá, evaluación psicológica forense, etc.).

### Technical & crawlability
- **Canonical URLs** set in `index.html` and on key pages (Contact, About, Services, Experience, Privacy).
- **Robots:** `index, follow` in place; `robots.txt` allows all and references sitemap.
- **Google Site Verification** and **Google Tag Manager** configured.
- **Structured data:** LocalBusiness/Psychologist/MedicalBusiness and FAQPage schema in `index.html`; telephone `+507 6550-9216` and email in schema.
- **XML sitemap** at `/sitemap.xml` with main URLs; referenced in `robots.txt`.
- **viewport** includes `viewport-fit=cover` for safe areas on mobile.

### Local SEO
- **Geo meta:** `geo.region` (PA-8), `geo.placename`, ICBM coordinates.
- **Address** consistent: Century Tower, Piso 19, Oficina 1920, Ciudad de Panamá.
- **Contact** in footer and contact section: email, (507) 6550-9216, WhatsApp.
- **Schema** includes `geo` coordinates and `areaServed`.

### Social & sharing
- **Open Graph** and **Twitter Card** meta (title, description, image, url, locale).
- **og:locale** and **og:locale:alternate** for ES/EN.

### Content & UX
- **FAQs** with FAQPage schema and long-tail questions.
- **Clear CTAs:** Consultar, WhatsApp FAB.
- **Bilingual** (ES/EN) with language toggle; **Privacy page** at `/privacidad` and `/privacy`.
- **LCP preload** for hero background image.

### hreflang
- **hreflang** links present in `index.html` (es, en, x-default). All point to the same base URL; fine for a single-URL SPA where language is toggled client-side.

---

## 2. Recommendations

### High priority (implemented)

1. **One H1 per page** — Done. Inner pages (About, Services, Experience, Contact) now render the main heading as `<h1>` when used as the standalone page (`withId={false}`). About page also has a dedicated H1 “Sobre Mí” at the top.

2. **Phone format consistency** — Done. **(507) 6550-9216** is used everywhere: index.html (OG, Twitter, schema, FAQ), LanguageContext (privacy copy), and all page meta (About, Services, Contact, Privacy).

3. **Sitemap: Privacy and lastmod** — Done. `sitemap.xml` and `public/sitemap.xml` include `/privacidad/` and `/privacy/` with `<lastmod>2026-02-20</lastmod>`, `<changefreq>`, and `<priority>` for all URLs.

### Medium priority

4. **Canonical / URL consistency**
   - Sitemap uses trailing slashes (e.g. `https://www.arturosuman.com/sobre-mi/`); app routes are without (e.g. `/sobre-mi`). Ensure redirects or canonical tags match how you want URLs to appear (one convention site-wide).

5. **Image SEO** — Done. Hero uses an `<img>` with descriptive alt (“Arturo Suman, psicólogo forense y clínico, consultorio Century Tower, Ciudad de Panamá, Panamá”) and `fetchPriority="high"`. AboutSection photo and Navigation logo already have strong alt text.

6. **Internal links** — Done. Homepage sections (About, Services, Experience, FAQ) include “Ver más” / “See more” links to `/sobre-mi`|`/about`, `/servicios`|`/services`, `/experiencia`|`/experience`, and “¿Listo para consultar?” to `/contacto`|`/contact`.

7. **Page-specific schema**
   - Keep one main LocalBusiness/Psychologist block on the homepage. On inner pages, avoid duplicating the full business block; use only page-specific schema if needed (e.g. FAQPage only where FAQs appear).

### Lower priority

8. **Core Web Vitals**
   - LCP preload is in place; monitor LCP and CLS in Search Console and PageSpeed Insights. Prefer next-gen image formats (e.g. WebP) where possible.

9. **Legacy / unused pages** — Addressed. Legacy pages and components related to Resilient Mind Counseling have been removed; the codebase focuses solely on Arturo Suman.

10. **Blog or resources (optional)**
    - A small “Recursos” or “Artículos” section on evaluación psicológica forense, peritaje, jurisdicciones, etc., can support long-tail search. Optional for a consultant site.

---

## 3. Checklist summary

| Item | Status |
|------|--------|
| Unique title per page | Done |
| Meta description per page | Done |
| Canonical URLs | Done |
| Structured data (LocalBusiness + FAQ) | Done |
| Telephone/email in schema & footer | Done — (507) 6550-9216 |
| Geo / local meta | Done |
| OG & Twitter cards | Done |
| XML sitemap + robots.txt | Done |
| Privacy page (Aviso de Privacidad) | Done |
| hreflang (es, en, x-default) | Done |
| One H1 per page | Done (inner pages use h1 when standalone) |
| Phone format everywhere | Done — (507) 6550-9216 |
| Sitemap includes /privacidad, /privacy, lastmod | Done |
| Image alt text (hero, key images) | Done |
| Internal links from home | Done |

---

## 4. Implemented quick wins (Feb 2026)

- **Phone:** All copy and meta use **(507) 6550-9216**.
- **Sitemap:** `/privacidad/` and `/privacy/` added with lastmod and priority.
- **H1:** About, Services, Experience, Contact render `<h1>` when `withId={false}`.
- **Hero image:** Replaced CSS-only background with `<img>` + descriptive alt and `fetchPriority="high"`.
- **Internal links:** “Ver más” / “See more” and contact CTA from FAQ added with language-aware routes.

---

**Conclusion:** The site now has a strong, implementation-complete SEO setup: unique titles and meta, canonicals, structured data, local/geo, sitemap with privacy URLs and lastmod, hreflang, one H1 per page, consistent phone formatting, descriptive image alt (including hero), and internal links from the homepage to key pages.
