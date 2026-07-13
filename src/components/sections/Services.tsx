import { ArrowRight, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { featuredServices, services } from '../../data/services';

export function Services() {
  const secondary = services.filter((s) => !s.featured);

  return (
    <section id="sluzby" aria-labelledby="sluzby-title" className="scroll-mt-24 bg-sand-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="sluzby-title"
          eyebrow="Co děláme"
          title="Naše služby"
          description="Kompletní zemní a přidružené stavební práce – od přípravy území přes zpevněné plochy až po vrtání a demolice."
        />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal as="li" key={service.slug} delay={i * 0.04}>
                <article className="group flex h-full flex-col rounded-lg border border-charcoal-200/70 bg-white p-6 transition-colors duration-200 hover:border-olive-500">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-olive-50 text-olive-700 ring-1 ring-inset ring-olive-100 transition-colors group-hover:bg-olive-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>

        {/* Ostatní služby jako kompaktní seznam */}
        <Reveal className="mt-8 rounded-lg border border-charcoal-200/70 bg-white p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-500">
            Dále nabízíme
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {secondary.map((service) => {
              const Icon = service.icon;
              return (
                <li key={service.slug} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-olive-600" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-charcoal-900">{service.title}</p>
                    <p className="text-sm text-charcoal-500">{service.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* CTA po sekci služeb */}
        <Reveal className="mt-12">
          <div className="flex flex-col items-start gap-6 rounded-xl bg-charcoal-900 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Potřebujete nacenit zemní nebo stavební práce?
              </h3>
              <p className="mt-2 text-sand-200">
                Ozvěte se nám s popisem zakázky – rádi připravíme nezávaznou nabídku.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button as="a" href="#kontakt" variant="primary" size="lg" icon={ArrowRight} iconRight>
                Kontaktujte nás
              </Button>
              <Button as="a" href="tel:+420737248201" variant="ghost" size="lg" icon={Phone}>
                Zavolat
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
