import {
  Shovel,
  Layers,
  SquareStack,
  Grid3x3,
  Hammer,
  Mountain,
  Truck,
  Scissors,
  Drill,
  Package,
  Fence,
} from 'lucide-react';
import type { Service } from '../types';

// Služby převzaté 1:1 z původního webu (sekce „O nás“ / nabídka prací).
// Popisy vycházejí z reálných realizací uvedených v referencích – nejsou vymýšleny žádné nové služby.
export const services: Service[] = [
  {
    slug: 'vykopove-prace',
    title: 'Výkopové práce',
    description:
      'Výkopy základů, rýh, přípojek a jam pomocí otočných i kolových rypadel. Realizujeme drobné i rozsáhlé zemní práce.',
    icon: Shovel,
    featured: true,
  },
  {
    slug: 'priprava-uzemi',
    title: 'Příprava území pod zpevněné plochy',
    description:
      'Sejmutí ornice, odkopy, hrubé terénní úpravy a příprava pláně pro následné zpevněné a manipulační plochy.',
    icon: Layers,
    featured: true,
  },
  {
    slug: 'zpevnene-plochy',
    title: 'Zpevněné plochy',
    description:
      'Realizace parkovišť, manipulačních a komunikačních ploch včetně podkladních vrstev a hutnění.',
    icon: SquareStack,
    featured: true,
  },
  {
    slug: 'pokladka-obrubniku',
    title: 'Pokládka obrubníků',
    description:
      'Osazení silničních i chodníkových obrubníků do betonového lože jako součást zpevněných ploch a komunikací.',
    icon: Fence,
    featured: false,
  },
  {
    slug: 'pokladka-dlazby',
    title: 'Pokládka dlažby',
    description:
      'Pokládka zámkové, betonové i vegetační dlažby na chodnících, parkovištích a zpevněných plochách.',
    icon: Grid3x3,
    featured: true,
  },
  {
    slug: 'bouraci-demolicni-prace',
    title: 'Bourací a demoliční práce',
    description:
      'Demolice objektů a konstrukcí s nasazením hydraulického kladiva a rypadel, včetně nakládky a odvozu suti.',
    icon: Hammer,
    featured: true,
  },
  {
    slug: 'terenni-upravy',
    title: 'Terénní úpravy',
    description:
      'Hrubé i dokončovací terénní úpravy, modelace ploch, urovnání a rozprostření zemin a sypkých materiálů.',
    icon: Mountain,
    featured: true,
  },
  {
    slug: 'preprava-vykopu',
    title: 'Přeprava výkopů a sypkých materiálů',
    description:
      'Odvoz vytěžené zeminy a dovoz sypkých materiálů, kameniva a hutního materiálu na stavbu.',
    icon: Truck,
    featured: false,
  },
  {
    slug: 'rezani-spar',
    title: 'Řezání spár',
    description:
      'Řezání spár do asfaltu, betonu a železobetonu řezačkou – například pro dilatace a napojení komunikací.',
    icon: Scissors,
    featured: false,
  },
  {
    slug: 'vrtani',
    title: 'Vrtání do betonu, železobetonu a zdiva',
    description:
      'Jádrové vrtání prostupů do cihelného zdiva, betonu a železobetonu v průměrech od 30 do 300 mm.',
    icon: Drill,
    featured: true,
  },
  {
    slug: 'hutni-material',
    title: 'Nákup a prodej hutního materiálu',
    description:
      'Zajištění a dodávka hutního materiálu a ocelových konstrukcí pro potřeby staveb.',
    icon: Package,
    featured: false,
  },
];

export const featuredServices = services.filter((s) => s.featured);
