import { Truck, Drill, CircleDot } from 'lucide-react';
import type { MachineGroup } from '../types';

// Strojní a technické vybavení – převzato z původního webu (sekce „Strojní a technické vybavení“)
// a doplněno o techniku uvedenou v ceníku 2024. Žádné stroje nejsou vymýšleny.
export const machineGroups: MachineGroup[] = [
  {
    id: 'bagry-rypadla',
    title: 'Bagry a rypadla',
    icon: Truck,
    machines: [
      { name: 'New Holland B110', note: 'traktorbagr' },
      { name: 'Komatsu PW 170', note: 'otočné rypadlo, lžíce 1,1 m³' },
      { name: 'Komatsu PW 180', note: 'otočné rypadlo, lžíce 1,1 m³' },
      { name: 'Komatsu WB 93R-5EO', note: 'traktorbagr' },
    ],
  },
  {
    id: 'valce',
    title: 'Válce',
    icon: CircleDot,
    machines: [
      { name: 'Vibrační válec – ručně vedený' },
      { name: 'VVW3403', note: 'ruční válec' },
    ],
  },
  {
    id: 'mensi-technika',
    title: 'Menší technika',
    icon: Drill,
    machines: [
      { name: 'Vibrační deska 500 kg' },
      { name: 'Vibrační deska 280 kg' },
      { name: 'Vibrační deska 112 kg' },
      { name: 'Vibrační pěch' },
      { name: 'Řezačka asfaltu' },
      { name: 'Vrtací souprava' },
      { name: 'Elektrocentrála Honda' },
      { name: 'Hydraulické kladivo 320 kg' },
      { name: 'Čerpadlo KDFU 100' },
      { name: 'Centrála 6,5 kW' },
    ],
  },
];
