# WK Motors – Projekt-Dokumentation

## Live-URL

**https://wk-motors-page.vercel.app**

---

## Tech-Stack

| Technologie | Version | Zweck |
|---|---|---|
| Next.js | 16.2.0 | React Framework |
| React | 19.2.4 | UI |
| Tailwind CSS | v4 | Styling |
| Barlow Condensed | – | Display-Schrift (Headings) |
| Barlow | – | Body-Schrift |
| Firecrawl CLI | 1.11.2 | Website-Scraping |

---

## Lokale Entwicklung

```bash
# Dev-Server starten
node node_modules/next/dist/bin/next dev

# Seite aufrufen
http://localhost:3000
```

> Node.js v22 (LTS) wird benötigt. Pfad: `/opt/homebrew/opt/node@22/bin`

---

## Deployment

Das Projekt ist mit GitHub und Vercel verbunden.

**Jede Änderung deployen:**
```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```
→ Vercel deployed automatisch nach jedem Push auf `main`.

**Manuell deployen:**
```bash
npx vercel --prod
```

---

## Projektstruktur

```
/
├── app/
│   ├── layout.tsx        # Root Layout, Fonts, Metadata
│   ├── page.tsx          # Hauptseite (bindet alle Sections ein)
│   └── globals.css       # Globale Styles, Animationen, Noise-Textur
├── components/
│   ├── Navbar.tsx        # Fixe Navigation mit Logo + Emblem
│   ├── Hero.tsx          # Vollbild-Hero mit Hintergrundfoto
│   ├── Marquee.tsx       # Laufendes Service-Ticker-Band
│   ├── Services.tsx      # 6 Leistungsbereiche als Liste
│   ├── Performance.tsx   # Stats + Leistungssteigerungs-Prozess
│   ├── Workshop.tsx      # Werkstatt-Info + Equipment-Liste
│   ├── Contact.tsx       # Kontaktformular + Adresse + Karte
│   └── Footer.tsx        # Footer mit Logo, Links
├── next.config.ts        # Next.js Konfiguration
└── wk-motors-crawl.json  # Originaldaten (nicht im Git)
```

---

## Seitenstruktur (One-Pager)

| Anker | Section | Inhalt |
|---|---|---|
| – | Hero | Tagline, CTA-Buttons, Hintergrundfoto |
| `#services` | Leistungen | 6 Bereiche: Wartung, Reparatur, Leistung, Zubehör, Individual, Marine |
| `#performance` | Performance | Kenndaten, 4-Schritte Tuning-Prozess |
| `#werkstatt` | Werkstatt | Equipment-Liste, Qualitätsmerkmal |
| `#kontakt` | Kontakt | Adresse, Öffnungszeiten, Formular, Google Maps |

---

## Design-System

| Element | Wert |
|---|---|
| Hintergrund | `#080808` |
| Akzentfarbe | `#e30000` (Rot) |
| Sekundär-BG | `#0e0e0e` / `#131313` |
| Display-Font | Barlow Condensed (800–900) |
| Body-Font | Barlow (300–500) |
| Code-Font | Monospace |

**Effekte:**
- Noise-Textur über der gesamten Seite (Tiefe)
- Flicker-Animation auf roten Elementen
- Fade-Up Animationen beim Laden
- Marquee-Ticker zwischen Sections

---

## Assets (Original wk-motors.de)

| Asset | URL |
|---|---|
| Logo (weiß) | `http://wk-motors.de/wp-content/uploads/2014/05/head-logo2.png` |
| Löwen-Emblem | `http://wk-motors.de/wp-content/uploads/2014/06/logo-kontakt.jpg` |

---

## Kontaktdaten WK Motors

| | |
|---|---|
| Firma | WK Motors GbR |
| Adresse | Benzstraße 11, 61381 Friedrichsdorf |
| Telefon | 06007 / 939 53 73 |
| Mobil | 0151 / 229 11 825 |
| E-Mail | info@wk-motors.de |
| Öffnungszeiten | Mo–Fr 08:00–12:00 und 13:00–18:00 Uhr |

---

## Repositories

| | |
|---|---|
| GitHub | https://github.com/mecten/wk-motors-page |
| Vercel | https://vercel.com/mectens-projects/wk-motors-page |
| Live | https://wk-motors-page.vercel.app |
