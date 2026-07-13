import type { Reference } from '../types';

// Kompletní archiv referencí 2013–2024, migrovaný ze stránky
// https://t3servis.webnode.cz/reference/ .
// Opraveny pouze zjevné pravopisné a formátovací nepřesnosti;
// názvy firem a věcné údaje zůstávají beze změny.
export const references: Reference[] = [
  // 2024
  { year: 2024, project: 'Dohledové a kontrolní místa', location: 'Paskov', work: 'zpevněné plochy, dlažby', client: 'Stavby NETO group s.r.o.' },
  { year: 2024, project: 'Cemex', location: 'Dětmarovice', work: 'zpevněné plochy, dlažby', client: 'Stavby NETO group s.r.o.' },
  { year: 2024, project: 'Chodník', location: 'Horní Domaslavice', work: 'zpevněné plochy', client: 'Stavby NETO group s.r.o.' },
  { year: 2024, project: 'Výkopy pro veřejné osvětlení', location: 'Příbor', work: 'výkopové práce', client: 'Lama lighting technologies s.r.o.' },
  { year: 2024, project: 'PressMetal', location: 'Třinec', work: 'kanalizace, zpevněná plocha', client: 'PressMetal – CZ s.r.o.' },
  { year: 2024, project: 'Výrobní a administrativní prostory', location: 'Frýdlant nad Ostravicí', work: 'zpevněné plochy', client: 'Ing. Pavel Ondrášek, MBA' },
  { year: 2024, project: 'TŽ', work: 'vrtací práce', client: 'ELEKTROMONT BRNO a.s.' },

  // 2023
  { year: 2023, project: 'Kompletní výstavba autobusové zastávky', location: 'Hnojník', client: 'Elpro-Energo Transformers s.r.o.' },
  { year: 2023, project: 'PressMetal', location: 'Třinec', work: 'zpevněná plocha', client: 'PressMetal – CZ s.r.o.' },
  { year: 2023, project: 'SCANIA', location: 'Žilina', work: 'ležatá kanalizace', client: 'INTEVO Třinec s.r.o.' },
  { year: 2023, project: 'Marlenka', location: 'OLK', client: 'INTEVO Třinec s.r.o.' },
  { year: 2023, project: 'Přístavba správní budovy a haly', location: 'Chotěbuz', client: 'Bartosini s.r.o.' },
  { year: 2023, project: 'Výrobní a administrativní prostory', location: 'Frýdlant nad Ostravicí', work: 'zpevněné plochy, dlažby', client: 'Ing. Pavel Ondrášek, MBA' },
  { year: 2023, project: 'Rodinné domy Rázová – RD I, II, III, IV', location: 'Rázová', client: 'S4-Investment s.r.o.' },

  // 2022
  { year: 2022, project: 'Výrobní a administrativní prostory', location: 'Frýdlant nad Ostravicí', work: 'zemní práce, vnitřní kanalizace', client: 'Ing. Pavel Ondrášek, MBA' },
  { year: 2022, project: 'Rodinné domy Rázová – RD I, II, III, IV', location: 'Rázová', client: 'S4-Investment s.r.o.' },
  { year: 2022, project: 'TŽ', work: 'výkopové a vrtací práce', client: 'ELEKTROMONT BRNO a.s.' },
  { year: 2022, project: 'Výrobní a administrativní prostory', location: 'Frýdlant nad Ostravicí', work: 'příprava území', client: 'Ing. Pavel Ondrášek, MBA' },

  // 2021
  { year: 2021, project: 'LDS Tatra Kopřivnice', location: 'Kopřivnice', work: 'výkopy, vrtací práce, zpevněné plochy', client: 'ELEKTROMONT BRNO a.s.' },
  { year: 2021, project: 'Continental Barum', location: 'Otrokovice', work: 'vrtací práce', client: 'VAMOZ servis a.s.' },
  { year: 2021, project: 'Sklad nábytku Helcel', location: 'Těrlicko', work: 'kanalizace', client: 'INTEVO Třinec s.r.o.' },
  { year: 2021, project: 'Sklad nábytku Helcel', location: 'Těrlicko', work: 'odkop 11 000 m³, zpevněné plochy 16 500 m²', client: 'LEKOS STAVBY spol. s.r.o.' },
  { year: 2021, project: 'Nový areál Scaserv', location: 'Ostrava', work: 'vrtací práce', client: 'HOMOLA holding s.r.o.' },
  { year: 2021, project: 'Paskov', location: 'Paskov', work: 'zpevněné plochy, vegetační dlažba', client: 'SOLKE s.r.o.' },
  { year: 2021, project: 'Autocent Ostrava', location: 'Ostrava', work: 'zpevněné plochy, kanalizace, obrubníky, dlažby', client: 'IP SYSTÉM s.r.o. / ELEKTROMONT BRNO a.s.' },
  { year: 2021, project: 'Kopřivnice', location: 'Kopřivnice', work: 'zemní práce', client: 'GEOSAN GROUP a.s.' },

  // 2020
  { year: 2020, project: 'REKO MS Vratimov 5. část', location: 'Vratimov', work: 'výkopy, zpevněné plochy', client: 'HOMOLA a.s.' },
  { year: 2020, project: 'Správní budova a hala', location: 'Ludgeřovice', work: 'zpevněné plochy', client: 'LEKOS – STAVBY spol. s.r.o.' },
  { year: 2020, project: 'Správní budova a hala', location: 'Ludgeřovice', work: 'kanalizace', client: 'INTEVO s.r.o.' },
  { year: 2020, project: 'LDS Tatra Kopřivnice', location: 'Kopřivnice', work: 'výkopy, vrtací práce, zpevněné plochy', client: 'ČEZ energetické služby s.r.o.' },
  { year: 2020, project: 'LDS Tatra Kopřivnice', location: 'Kopřivnice', work: 'výkopy, vrtací práce, zpevněné plochy', client: 'ELEKTROMONT BRNO a.s.' },

  // 2019
  { year: 2019, project: 'LDS Tatra Kopřivnice', location: 'Kopřivnice', work: 'výkopy, vrtací práce, zpevněné plochy', client: 'ELEKTROMONT BRNO a.s.' },
  { year: 2019, project: 'Smilovice', location: 'Smilovice', work: 'zpevněné plochy, obrubníky, dlažby', client: 'OMNI POL TECH s.r.o.' },
  { year: 2019, project: 'TŽ', work: 'vrtací práce', client: 'TEVOS TRADE s.r.o.' },
  { year: 2019, project: 'Bohumín', location: 'Bohumín', work: 'dodávka hutního materiálu', client: 'MIRABEL lexar a.s.' },
  { year: 2019, project: 'Žilina', location: 'Žilina', work: 'výkopové práce pro horkovod', client: 'G & F GROUP' },
  { year: 2019, project: 'TŽ', work: 'vrtací práce', client: 'ELEKTROMONT BRNO a.s.' },
  { year: 2019, project: 'Správní budova a hala', location: 'Chotěbuz', work: 'zemní práce', client: 'Bartosini s.r.o.' },
  { year: 2019, project: 'Kaufland', location: 'Karviná', work: 'zemní práce', client: 'HAMPR a.s.', album: 'kaufland-karvina' },
  { year: 2019, project: 'Areál TATRA', location: 'Kopřivnice', work: 'výkopové práce', client: 'ELEKTROMONT BRNO a.s.' },
  { year: 2019, project: 'Areál Morcinek', work: 'vrtací práce', client: 'HAMROZI s.r.o.' },
  { year: 2019, project: 'REKO Tesco Opava', location: 'Opava', work: 'vrtací práce', client: 'IMOS BRNO a.s.' },

  // 2018
  { year: 2018, project: 'Semperflex Optimit', location: 'Odry', work: 'zpevněné plochy, chodníky', client: 'SEMPERFLEX OPTIMIT s.r.o.' },
  { year: 2018, project: 'TŽ', work: 'vrtací práce', client: 'POLANSKÝ s.r.o.' },
  { year: 2018, project: 'LIDL', location: 'Orlová', work: 'vrtací práce', client: 'VAMOZ – SERVIS a.s.' },
  { year: 2018, project: 'Bystřice', location: 'Bystřice', work: 'výkop základů', client: 'CIESLAR s.r.o.' },
  { year: 2018, project: 'ProcedurePak', location: 'Dolní Suchá', work: 'vrtací práce, výkop vodovodní přípojky', client: 'SKANSKA a.s.' },
  { year: 2018, project: 'TŽ', work: 'vrtací práce', client: 'ELEKTROMONT BRNO' },
  { year: 2018, project: 'Ostrava', location: 'Ostrava', work: 'výkop bazénu, základové konstrukce', client: 'RELAX DAYS s.r.o.' },
  { year: 2018, project: 'Kaufland', location: 'Karviná', work: 'zemní práce', client: 'HAMPR a.s.', album: 'kaufland-karvina' },
  { year: 2018, project: 'Semperflex Optimit', location: 'Odry', client: 'STAV MORAVIA spol. s.r.o.' },
  { year: 2018, project: 'TŽ', work: 'vrtací práce', client: 'TEVOS TRADE s.r.o.' },
  { year: 2018, project: 'Semperflex Optimit', location: 'Odry', work: 'výkopové práce', client: 'PRESSBURG s.r.o.' },
  { year: 2018, project: 'Semperflex Optimit', location: 'Odry', work: 'vrtací práce', client: 'IMOS BRNO' },
  { year: 2018, project: 'Areál TATRA', location: 'Kopřivnice', work: 'vrtací práce', client: 'BESKYDSKÁ STAVEBNÍ a.s.' },
  { year: 2018, project: 'TŽ', work: 'vrtací práce', client: '3nc, spol. s.r.o.' },
  { year: 2018, project: 'Semperflex Optimit', location: 'Odry', work: 'zemní práce', client: 'IMOS BRNO' },
  { year: 2018, project: 'Demolice mycí linky', location: 'Ostrava-Hrabová', work: 'demoliční práce', client: 'Trans Energetic', album: 'demolice-myci-linky-ostrava-hrabova' },

  // 2017
  { year: 2017, project: 'Sviadnov', location: 'Sviadnov', work: 'HTÚ, pokládka obrub, asfaltové komunikace', client: 'ONO Development s.r.o.', album: 'sviadnov-asfaltove-komunikace' },
  { year: 2017, project: 'TŽ', work: 'vrtací práce', client: 'ELEKTROMONT BRNO' },
  { year: 2017, project: 'Třinec', location: 'Třinec', work: 'vrtací práce', client: 'HAMROZI s.r.o.' },
  { year: 2017, project: 'TŽ', work: 'vrtací práce', client: 'SKANSKA' },
  { year: 2017, project: 'TŽ', work: 'vrtací práce', client: 'TEVOS TRADE s.r.o.' },
  { year: 2017, project: 'OC', location: 'Poprad', work: 'vrtací práce', client: 'GEMO OLOMOUC, spol. s.r.o.' },
  { year: 2017, project: 'TŽ', work: 'dodávka ocelové konstrukce', client: 'STROJÍRNY A STAVBY TŘINEC a.s.' },
  { year: 2017, project: 'Steel ring', work: 'vrtací práce', client: 'BESKYDSKÁ STAVEBNÍ a.s.' },
  { year: 2017, project: 'Nemocnice', location: 'Sosna', work: 'vrtací práce', client: 'MORYS s.r.o.' },
  { year: 2017, project: 'RD Milíkov', location: 'Milíkov', work: 'základová deska', album: 'rd-milikov' },
  { year: 2017, project: 'Semperflex Optimit', location: 'Odry', work: 'HTÚ, zpevněné plochy, dlažby', client: 'IMOS BRNO', album: 'semperflex-optimit-odry' },
  { year: 2017, project: 'Semperflex Optimit', location: 'Odry', work: 'vrtací práce', client: 'IMOS BRNO' },

  // 2016
  { year: 2016, project: 'Kaufland', location: 'Třinec', work: 'terénní úpravy', client: 'IMOS BRNO', album: 'kaufland-trinec' },
  { year: 2016, project: 'Kaufland', location: 'Havířov', work: 'zakládání stavby', client: 'IMOS BRNO' },
  { year: 2016, project: 'STEELKART', location: 'Třinec', work: 'vrtací práce', client: 'SKANSKA' },
  { year: 2016, project: 'VETERÁN', location: 'Třinec', work: 'vrtací práce', client: 'KOVOPOL-INDUSTRY' },
  { year: 2016, project: 'TŽ', location: 'Třinec', work: 'základové patky', client: 'ELEKTROMONT BRNO' },
  { year: 2016, project: 'Obchodní centrum Třinec – Lyžbice', location: 'Třinec', client: 'IMOS BRNO' },
  { year: 2016, project: 'DONGHEE', location: 'Český Těšín', client: 'SKANSKA' },
  { year: 2016, project: 'ProcedurePak', location: 'Dolní Suchá', work: 'vrtací práce, vnitřní kanalizace', client: 'SKANSKA' },
  { year: 2016, project: 'Tréninková hala', location: 'Třinec', client: 'POTRUBNÍ SYSTÉMY' },

  // 2015
  { year: 2015, project: 'DONGHEE', location: 'Český Těšín', client: 'SKANSKA' },
  { year: 2015, project: 'Tréninková hala', location: 'Třinec', client: 'SYNER' },
  { year: 2015, project: 'Biochemie', location: 'Ústí nad Labem', client: 'ELEKTROMONT' },
  { year: 2015, project: 'IVC', location: 'Třinec', client: 'PORR' },
  { year: 2015, project: 'ČOV', location: 'Bocanovice', client: 'PRŮMSTAV' },
  { year: 2015, project: 'Continental', location: 'Otrokovice', client: 'SKANSKA' },

  // 2014
  { year: 2014, project: 'Úprava koryta řeky', location: 'Horní Lomná', client: 'SWIETELSKY' },
  { year: 2014, project: 'Hyunnam', location: 'Krásno nad Kysucou', client: 'SKANSKA' },
  { year: 2014, project: 'Nemocnice', location: 'Frýdek-Místek', client: 'HOCHTIEF' },
  { year: 2014, project: 'Hala Polárka', location: 'Frýdek-Místek', client: 'GEMO' },
  { year: 2014, project: 'VTP', location: 'Ostrava', client: 'SKANSKA', album: 'vtp-vsb-tu-ostrava' },
  { year: 2014, project: 'DSC', location: 'Třinec', client: 'SKANSKA' },

  // 2013
  { year: 2013, project: 'DSC', location: 'Třinec', client: 'SKANSKA' },
  { year: 2013, project: 'HYUNDAI', location: 'Nošovice', client: 'HYUNDAI' },
  { year: 2013, project: 'CALTEX', location: 'Karviná', client: 'SKANSKA' },
  { year: 2013, project: 'TŽ', location: 'Třinec', client: 'ELEKTROMONT BRNO' },
];

export const referenceYears = Array.from(new Set(references.map((r) => r.year))).sort(
  (a, b) => b - a,
);

// Vybrané realizace pro úvodní přehled – projekty, ke kterým existuje fotogalerie.
export interface FeaturedProject {
  albumSlug: string;
  title: string;
  meta: string;
}

export const featuredProjects: FeaturedProject[] = [
  { albumSlug: 'vtp-vsb-tu-ostrava', title: 'VTP – VŠB TU Ostrava', meta: '2014 · Zemní práce · SKANSKA' },
  { albumSlug: 'revitalizace-mosty-u-jablunkova', title: 'Revitalizace – Mosty u Jablunkova', meta: 'Zemní a revitalizační práce' },
  { albumSlug: 'revitalizace-olse-trinec', title: 'Revitalizace Olše – Třinec', meta: 'Revitalizace koryta řeky' },
  { albumSlug: 'kaufland-trinec', title: 'Kaufland – Třinec', meta: '2016 · Terénní úpravy · IMOS BRNO' },
  { albumSlug: 'semperflex-optimit-odry', title: 'Semperflex Optimit – Odry', meta: 'HTÚ, zpevněné plochy, dlažby' },
  { albumSlug: 'sviadnov-asfaltove-komunikace', title: 'Sviadnov – asfaltové komunikace', meta: '2017 · HTÚ, obruby, komunikace' },
  { albumSlug: 'demolice-myci-linky-ostrava-hrabova', title: 'Demolice mycí linky – Ostrava-Hrabová', meta: '2018 · Demoliční práce' },
  { albumSlug: 'rd-milikov', title: 'RD – Milíkov', meta: '2017 · Základová deska' },
  { albumSlug: 'kaufland-karvina', title: 'Kaufland Karviná', meta: 'Zemní práce · HAMPR' },
];
