import { Check } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const focusAreas = [
  'Zemní práce',
  'Příprava území',
  'Hrubé terénní úpravy',
  'Realizace komunikací',
  'Realizace parkovišť',
  'Zpevněné plochy',
  'Kanalizace',
  'Vrtací práce',
];

export function About() {
  return (
    <section id="o-nas" aria-labelledby="o-nas-title" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/images/about.jpg"
                alt="Realizace zpevněných ploch a zemních prací na stavbě obchodního centra"
                className="w-full rounded-lg object-cover shadow-sm"
                loading="lazy"
                decoding="async"
                width={958}
                height={719}
              />
              <div
                className="pointer-events-none absolute -bottom-3 -right-3 -z-0 h-24 w-24 rounded-lg border-2 border-olive-500/60"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              id="o-nas-title"
              eyebrow="O nás"
              title="Zkušenosti z významných staveb v ČR i na Slovensku"
              description="Společnost T3servis se podílela na řadě významných stavebních projektů v České republice a na Slovensku. V současnosti se zaměřujeme především na následující práce:"
            />
            <Reveal className="mt-6">
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2.5">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-olive-100 text-olive-700">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-charcoal-800">{area}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
