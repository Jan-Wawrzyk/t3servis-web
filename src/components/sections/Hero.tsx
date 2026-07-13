import { motion, useReducedMotion } from 'framer-motion';
import { Send, ArrowRight, MapPin, Layers, Truck } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const trust = [
  { icon: Layers, label: 'Desítky realizovaných projektů' },
  { icon: MapPin, label: 'Česká republika a Slovensko' },
  { icon: Truck, label: 'Vlastní strojní vybavení' },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="uvod" aria-labelledby="hero-title" className="relative overflow-hidden bg-charcoal-900">
      {/* Pozadí – reálná fotografie zemních prací */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Otočné rypadlo při zemních pracích na stavbě"
          className="h-full w-full object-cover"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/92 via-charcoal-950/80 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-industrial opacity-30 mix-blend-overlay" />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <motion.div
          className="max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow text-olive-300">
            <span className="h-px w-6 bg-current" aria-hidden="true" />
            Zemní a stavební práce
          </p>

          <h1
            id="hero-title"
            className="mt-4 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            Spolehlivý partner pro zemní práce a realizaci zpevněných ploch
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-200">
            Provádíme zemní a výkopové práce, přípravu území, komunikace, parkoviště, demolice,
            vrtání a další stavební práce v Moravskoslezském kraji i mimo něj.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#kontakt" variant="primary" size="lg" icon={Send}>
              Nezávazná poptávka
            </Button>
            <Button
              as="a"
              href="#reference"
              variant="ghost"
              size="lg"
              icon={ArrowRight}
              iconRight
            >
              Prohlédnout reference
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Trust strip */}
      <div className="relative border-t border-white/10 bg-charcoal-950/60 backdrop-blur-sm">
        <Container>
          <ul className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 py-4 sm:justify-center sm:px-4">
                <Icon className="h-5 w-5 shrink-0 text-olive-400" aria-hidden="true" />
                <span className="text-sm font-medium text-sand-100">{label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
