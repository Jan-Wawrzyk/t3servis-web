import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured: boolean;
}

export interface MachineGroup {
  id: string;
  title: string;
  icon: LucideIcon;
  machines: Machine[];
}

export interface Machine {
  name: string;
  note?: string;
}

export interface Reference {
  year: number;
  project: string;
  location?: string;
  work?: string;
  client?: string;
  /** slug alba ve fotogalerii, pokud k referenci existují fotografie */
  album?: string;
}

export interface GalleryImage {
  src: string;
  thumb: string;
  width: number;
  height: number;
}

export interface GalleryAlbum {
  slug: string;
  title: string;
  cover: string;
  images: GalleryImage[];
}

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  phoneHref: string;
}

/** Buňka ceny – řetězec, nebo null pro prázdnou buňku (dle originálního ceníku). */
export type PriceCell = string | null;

export interface MachineryPriceRow {
  machine: string;
  rate: PriceCell;
  transfer: PriceCell;
  perDay: PriceCell;
  overTwoMonths: PriceCell;
}

export interface DrillingPriceRow {
  diameter: string;
  brick: string;
  reinforced: string;
}

export interface CuttingPriceRow {
  material: string;
  d5: string;
  d10: string;
  d12: string;
}
