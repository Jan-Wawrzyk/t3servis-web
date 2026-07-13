import type { ContactPerson, NavItem } from '../types';

// Základní údaje o společnosti – převzato z původního webu a ceníku 2024.
export const company = {
  name: 'T3servis s.r.o.',
  shortName: 'T3servis',
  ico: '465 79 915',
  dic: 'CZ465 79 915',
  email: 't3servis@seznam.cz',
  emailHref: 'mailto:t3servis@seznam.cz',
  registeredOffice: {
    label: 'Sídlo',
    street: 'Mosty u Jablunkova 299',
    city: '739 98 Mosty u Jablunkova',
    // Odkaz na mapu (Mapy.cz / Google Maps) – bez API klíče
    mapUrl: 'https://mapy.cz/zakladni?q=Mosty%20u%20Jablunkova%20299',
    mapEmbed:
      'https://www.google.com/maps?q=Mosty%20u%20Jablunkova%20299&output=embed',
  },
  operatingSite: {
    label: 'Provozovna',
    street: 'Těšínská 197',
    city: '739 61 Třinec-Konská',
    mapUrl: 'https://mapy.cz/zakladni?q=T%C4%9B%C5%A1%C3%ADnsk%C3%A1%20197%20T%C5%99inec%20Konsk%C3%A1',
    mapEmbed:
      'https://www.google.com/maps?q=T%C4%9B%C5%A1%C3%ADnsk%C3%A1%20197%20T%C5%99inec%20Konsk%C3%A1&output=embed',
  },
  region: 'Moravskoslezský kraj',
} as const;

export const contactPersons: ContactPerson[] = [
  {
    name: 'Jaroslav Turek',
    role: 'Ředitel společnosti',
    phone: '+420 737 248 201',
    phoneHref: 'tel:+420737248201',
  },
  {
    name: 'Miroslav Turek',
    role: 'Jednatel společnosti',
    phone: '+420 605 164 461',
    phoneHref: 'tel:+420605164461',
  },
];

// Primární telefon pro CTA v hlavičce a mobilní liště
export const primaryPhone = contactPersons[0];

export const navItems: NavItem[] = [
  { label: 'Úvod', href: '#uvod' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Technika', href: '#technika' },
  { label: 'Reference', href: '#reference' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Ceník', href: '#cenik' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const seo = {
  title: 'T3servis | Zemní práce, výkopy a zpevněné plochy Třinec',
  description:
    'T3servis provádí zemní a výkopové práce, zpevněné plochy, dlažby, demolice, vrtání a terénní úpravy v Třinci, Mostech u Jablunkova a okolí.',
  url: 'https://www.t3servis.cz/',
  ogImage: '/images/og-image.jpg',
} as const;
