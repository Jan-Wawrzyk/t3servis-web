# T3servis s.r.o. – webové stránky

Moderní jednostránkový web pro stavební firmu **T3servis s.r.o.** (zemní práce, výkopy,
zpevněné plochy, demolice, vrtání a terénní úpravy v Třinci, Mostech u Jablunkova a okolí).

Web nahrazuje původní stránky na Webnode a přebírá z nich veškerý obsah – služby, strojní
vybavení, kompletní archiv referencí 2013–2024, fotogalerii, ceník 2024 i kontaktní údaje.

## Technologie

- **React 18** + **TypeScript**
- **Vite** (dev server + build)
- **Tailwind CSS** (mobile-first, max. šířka obsahu 1280 px)
- **Framer Motion** – jen jemné animace (respektuje `prefers-reduced-motion`)
- **lucide-react** – ikony
- **react-router-dom** – hlavní stránka + placeholder právní stránky

## Spuštění

```bash
npm install
npm run dev
```

Web běží na `http://localhost:5173`.

Další příkazy:

```bash
npm run build     # produkční build do /dist (tsc + vite build)
npm run preview   # náhled produkčního buildu
npm run lint      # kontrola typů (tsc --noEmit)
```

## Struktura projektu

```
public/
  images/
    hero.jpg, about.jpg, og-image.jpg
    gallery/<album-slug>/NN.jpg + NN-thumb.jpg   # lokálně uložené fotografie
  favicon.svg, robots.txt, sitemap.xml
src/
  data/          # veškerý obsah jako strukturovaná data (TypeScript)
    site.ts        – firma, kontakty, navigace, SEO
    services.ts    – služby
    machinery.ts   – strojní vybavení
    references.ts  – archiv referencí + vybrané realizace
    galleries.ts   – fotogalerie (generováno z lokálních obrázků)
    pricing.ts     – ceník 2024 (přesný přepis z PDF)
  types/         # sdílené TypeScript typy
  components/
    ui/          – Container, Button, Logo, SectionHeading, Reveal
    layout/      – Header, Footer, MobileContactBar
    sections/    – Hero, Services, About, Machinery, References, Gallery, Pricing, Contact
    gallery/     – Lightbox
    contact/     – ContactForm
  hooks/         # useScrollSpy, useDocumentMeta
  pages/         # Home, Privacy, Cookies (+ šablona LegalPage)
  App.tsx, main.tsx, index.css
```

Veškerý obsah je uložen v `src/data/*` – texty, ceny, reference i alba se upravují zde,
nikoli přímo v komponentách.

## Kontaktní formulář

Formulář **nefalšuje odeslání**. Podporuje dvě varianty:

1. **Formspree** – nastavte `VITE_FORMSPREE_ID` v souboru `.env`
   (viz `.env.example`). Formulář pak odešle data přes `https://formspree.io/f/<ID>`
   a zobrazí stav odesílání / úspěch / chybu.

2. **Mailto fallback (výchozí)** – pokud `VITE_FORMSPREE_ID` není vyplněno, po odeslání
   se otevře e-mailový klient s předvyplněnou zprávou na `t3servis@seznam.cz`.
   Uživatel je na to transparentně upozorněn nad formulářem.

Konfigurace:

```bash
cp .env.example .env
# do .env doplňte: VITE_FORMSPREE_ID=xxxxxxxx
```

Alternativně lze snadno napojit vlastní API endpoint úpravou funkce `onSubmit`
v `src/components/contact/ContactForm.tsx`.

## Obrázky

Všechny fotografie z galerií byly staženy z původního webu a uloženy **lokálně**
v `public/images/gallery/` (celkem 134 fotografií ve 14 albech). Pro každou fotografii
existuje plná verze (max. 1280 px) i náhled `-thumb` (max. 600 px) pro rychlé načítání
mřížky. Obrázky se načítají líně (`loading="lazy"`).

## SEO

- Titulek, meta description, Open Graph a `canonical` v `index.html`
- Strukturovaná data **LocalBusiness** (`GeneralContractor`) v `index.html`
- Sémantické HTML, jeden `<h1>` na stránku, popisné `alt` texty
- `robots.txt` + `sitemap.xml`, favicon

## Přístupnost

- Plná ovladatelnost klávesnicí (navigace, galerie, lightbox, formulář)
- Viditelné focus stavy, `aria-*` atributy, `aria-live` u výsledků hledání
- Podpora `prefers-reduced-motion`
- Responzivita od 320 px, tabulky s vodorovným posunem na mobilu
- Plovoucí kontaktní lišta na mobilu (Zavolat / Napsat e-mail / Poptávka)

## Nasazení

Statický výstup z `npm run build` (složka `dist/`) lze nasadit na libovolný statický
hosting (Netlify, Vercel, GitHub Pages, vlastní server). Protože web používá client-side
routing, nastavte na serveru fallback všech cest na `index.html`.
