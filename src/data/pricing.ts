import type {
  CuttingPriceRow,
  DrillingPriceRow,
  MachineryPriceRow,
} from '../types';

// Ceník služeb mechanizace v roce 2024 – přepsáno přesně z originálního PDF.
// Prázdné buňky v originálu jsou zachovány jako null. Ceny jsou bez DPH.

export const priceNotice =
  'Ceník 2024 – ceny jsou uvedeny bez DPH a byly platné od 1. 2. 2024. Pro aktuální cenu nás kontaktujte.';

// Sloupce: Stroj | Sazba | Přejezd / hod. | Sazba / den | Sazba nad 2 měsíce (hodnoty v Kč)
export const machineryPrices: MachineryPriceRow[] = [
  { machine: 'Komatsu PW 170, lžíce 1,1 m³', rate: '1 200,00', transfer: null, perDay: null, overTwoMonths: '1 100,00' },
  { machine: 'Komatsu PW 180, lžíce 1,1 m³', rate: '1 200,00', transfer: null, perDay: null, overTwoMonths: '1 100,00' },
  { machine: 'Komatsu WB 93R', rate: '980,00', transfer: '980,00', perDay: null, overTwoMonths: '950,00' },
  { machine: 'Hydraulické kladivo 320 kg', rate: '1 350,00', transfer: '980,00', perDay: null, overTwoMonths: '1 350,00' },
  { machine: 'New Holland B110', rate: '980,00', transfer: '980,00', perDay: null, overTwoMonths: '950,00' },
  { machine: 'VVW3403 – ruční válec', rate: null, transfer: null, perDay: '750,00', overTwoMonths: '650,00' },
  { machine: 'Vibrační pěch Weber', rate: null, transfer: null, perDay: '500,00', overTwoMonths: '460,00' },
  { machine: 'Malá vibrační deska Weber RC40', rate: null, transfer: null, perDay: '530,00', overTwoMonths: '490,00' },
  { machine: 'Velká vibrační deska Wacker DPU 6055', rate: null, transfer: null, perDay: '810,00', overTwoMonths: '700,00' },
  { machine: 'Čerpadlo KDFU 100', rate: null, transfer: null, perDay: '140,00', overTwoMonths: '120,00' },
  { machine: 'Centrála 6,5 kW', rate: null, transfer: null, perDay: '660,00', overTwoMonths: '600,00' },
];

export const machineryTransfer = 'Převoz mechanizace: 55 Kč/km';

// Vrtání prostupů – cena za 1 m vrtu (Kč)
export const drillingPrices: DrillingPriceRow[] = [
  { diameter: 'do 30 mm', brick: '1 590,00', reinforced: '1 950,00' },
  { diameter: '35 mm', brick: '1 640,00', reinforced: '1 980,00' },
  { diameter: '40 mm', brick: '1 690,00', reinforced: '2 000,00' },
  { diameter: '45 mm', brick: '1 790,00', reinforced: '2 200,00' },
  { diameter: '50 mm', brick: '1 890,00', reinforced: '2 400,00' },
  { diameter: '60 mm', brick: '1 950,00', reinforced: '2 490,00' },
  { diameter: '70 mm', brick: '2 060,00', reinforced: '2 580,00' },
  { diameter: '80 mm', brick: '2 180,00', reinforced: '2 670,00' },
  { diameter: '100 mm', brick: '2 330,00', reinforced: '2 740,00' },
  { diameter: '110 mm', brick: '2 450,00', reinforced: '2 900,00' },
  { diameter: '120 mm', brick: '2 580,00', reinforced: '3 070,00' },
  { diameter: '130 mm', brick: '2 710,00', reinforced: '3 350,00' },
  { diameter: '150 mm', brick: '2 880,00', reinforced: '3 500,00' },
  { diameter: '160 mm', brick: '2 950,00', reinforced: '3 690,00' },
  { diameter: '180 mm', brick: '3 060,00', reinforced: '3 800,00' },
  { diameter: '200 mm', brick: '3 170,00', reinforced: '4 120,00' },
  { diameter: '250 mm', brick: '3 670,00', reinforced: '4 550,00' },
  { diameter: '300 mm', brick: '4 170,00', reinforced: '5 150,00' },
];

export const drillingTransfer = 'Převoz vozidla: 15 Kč/km';

// Řezání – cena za bm dle hloubky řezu (Kč)
export const cuttingPrices: CuttingPriceRow[] = [
  { material: 'Asfalt', d5: '95,00', d10: '125,00', d12: '130,00' },
  { material: 'Beton / železobeton', d5: '160,00', d10: '270,00', d12: '305,00' },
];

export const pricingNote =
  'Možnost smluvních a individuálních cen podle rozsahu stavby a způsobu nasazení techniky. Při změně cen vstupních surovin nebo právních podmínek mohou být sazby přepočítány.';
