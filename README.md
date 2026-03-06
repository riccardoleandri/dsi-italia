# DSI Italia — Sito Web

Sito web completo per DSI Import, importatore di macchine agricole.

## Stack
- React 18 + TypeScript
- Tailwind CSS
- React Router DOM
- Vite

## Setup Locale

```bash
npm install
npm run dev
```

## Deploy su Cloudflare Pages

1. Crea repo su GitHub e pusha il codice
2. Vai su pages.cloudflare.com
3. "Create a project" → "Connect to Git"
4. Seleziona questo repo
5. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Deploy!

## Aggiungere il Video Hero

Metti il file video in `/public/assets/hero-video.mp4`
Il poster/fallback in `/public/assets/hero-poster.jpg`

## Aggiungere Foto Trattori

Metti le foto in `/public/assets/tractors/` con questi nomi:
- jd-6r185.jpg
- jd-7r290.jpg
- jd-8r410.jpg
- nh-t6180.jpg
- nh-t7315.jpg
- nh-t8435.jpg
- fendt-516.jpg
- fendt-724.jpg
- fendt-942.jpg
- case-maxxum150.jpg
- case-puma240.jpg
- case-steiger620.jpg
- configurator-preview.jpg

## Modificare Contenuti

Tutti i dati dei trattori sono in `/src/data/tractors.ts`
Modifica lì per aggiungere/rimuovere modelli, colori, accessori.

## Struttura File

```
src/
  components/
    Navbar.tsx       — navbar trasparente con scroll
    Footer.tsx       — footer verde
    Layout.tsx       — wrapper con scroll reveal
  pages/
    Home.tsx         — homepage con hero video
    Trattori.tsx     — catalogo con filtri
    Configuratore.tsx — configuratore 7 step
    Accessori.tsx    — pagina accessori
    Contatti.tsx     — form contatti
  data/
    tractors.ts      — tutti i dati (modelli, brand, colori)
  hooks/
    useScrollReveal.ts
```
