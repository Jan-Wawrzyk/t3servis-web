import { Mail, MapPin, Phone, Building2, ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ContactForm } from '../contact/ContactForm';
import { company, contactPersons } from '../../data/site';

export function Contact() {
  const locations = [company.registeredOffice, company.operatingSite];

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="kontakt-title"
          eyebrow="Kontakt"
          title="Nezávazná poptávka"
          description="Napište nám nebo zavolejte – rádi s vámi probereme rozsah prací a připravíme cenovou nabídku."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Kontaktní údaje */}
          <div className="space-y-8">
            {/* Kontaktní osoby */}
            <Reveal>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactPersons.map((p) => (
                  <li key={p.phone} className="rounded-lg border border-charcoal-200/70 bg-sand-50 p-5">
                    <p className="font-bold text-charcoal-900">{p.name}</p>
                    <p className="text-sm text-charcoal-500">{p.role}</p>
                    <a
                      href={p.phoneHref}
                      className="mt-3 inline-flex items-center gap-2 font-semibold text-olive-700 hover:text-olive-800"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {p.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* E-mail + IČO/DIČ */}
            <Reveal>
              <div className="flex flex-col gap-4 rounded-lg border border-charcoal-200/70 p-5 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={company.emailHref}
                  className="inline-flex items-center gap-2 font-semibold text-charcoal-900 hover:text-olive-700"
                >
                  <Mail className="h-5 w-5 text-olive-600" aria-hidden="true" />
                  {company.email}
                </a>
                <div className="text-sm text-charcoal-500">
                  <span className="mr-4">IČO: <strong className="text-charcoal-700">{company.ico}</strong></span>
                  <span>DIČ: <strong className="text-charcoal-700">{company.dic}</strong></span>
                </div>
              </div>
            </Reveal>

            {/* Adresy + mapy */}
            <Reveal>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {locations.map((loc) => (
                  <div key={loc.street} className="rounded-lg border border-charcoal-200/70 p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-olive-700">
                      <Building2 className="h-4 w-4" aria-hidden="true" />
                      {loc.label}
                    </p>
                    <address className="mt-2 not-italic text-charcoal-800">
                      {loc.street}
                      <br />
                      {loc.city}
                    </address>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-olive-700 hover:text-olive-800"
                    >
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      Zobrazit na mapě
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Embed mapy provozovny */}
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-charcoal-200/70">
                <iframe
                  title="Mapa – provozovna Těšínská 197, Třinec-Konská"
                  src={company.operatingSite.mapEmbed}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Formulář */}
          <Reveal>
            <div className="rounded-xl border border-charcoal-200/70 bg-sand-50 p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
