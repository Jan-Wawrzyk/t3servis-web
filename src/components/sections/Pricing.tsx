import { AlertTriangle, ArrowRight, Info } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import {
  cuttingPrices,
  drillingPrices,
  drillingTransfer,
  machineryPrices,
  machineryTransfer,
  priceNotice,
  pricingNote,
} from '../../data/pricing';
import type { PriceCell } from '../../types';

function Cell({ value }: { value: PriceCell }) {
  if (value === null) {
    return (
      <span className="text-charcoal-300" aria-label="neuvedeno">
        —
      </span>
    );
  }
  return (
    <span className="tabular-nums">
      {value} <span className="text-charcoal-400">Kč</span>
    </span>
  );
}

function TableWrap({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-charcoal-200/70">
      <table className="w-full min-w-[560px] border-collapse text-sm" aria-label={label}>
        {children}
      </table>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="cenik" aria-labelledby="cenik-title" className="scroll-mt-24 bg-sand-100 py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="cenik-title"
          eyebrow="Ceník"
          title="Ceník služeb mechanizace"
          description="Orientační sazby za pronájem a nasazení strojní techniky, vrtání prostupů a řezání."
        />

        {/* Upozornění */}
        <Reveal className="mt-8">
          <div className="flex items-start gap-3 rounded-lg border border-olive-200 bg-olive-50 p-4 text-olive-900">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-olive-700" aria-hidden="true" />
            <p className="text-sm font-medium">{priceNotice}</p>
          </div>
        </Reveal>

        {/* Stroje a mechanismy */}
        <Reveal className="mt-10">
          <h3 className="mb-4 text-xl font-bold">Stroje a mechanismy</h3>
          <TableWrap label="Ceník strojů a mechanismů">
            <thead>
              <tr className="bg-charcoal-900 text-left text-xs uppercase tracking-wide text-sand-100">
                <th scope="col" className="px-4 py-3 font-semibold">Stroj</th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">Sazba</th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">Přejezd&nbsp;/&nbsp;hod.</th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">Sazba&nbsp;/&nbsp;den</th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">Nad&nbsp;2&nbsp;měsíce</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-100 bg-white">
              {machineryPrices.map((row) => (
                <tr key={row.machine} className="hover:bg-sand-50">
                  <th scope="row" className="px-4 py-3 text-left font-medium text-charcoal-900">
                    {row.machine}
                  </th>
                  <td className="px-4 py-3 text-right"><Cell value={row.rate} /></td>
                  <td className="px-4 py-3 text-right"><Cell value={row.transfer} /></td>
                  <td className="px-4 py-3 text-right"><Cell value={row.perDay} /></td>
                  <td className="px-4 py-3 text-right"><Cell value={row.overTwoMonths} /></td>
                </tr>
              ))}
            </tbody>
          </TableWrap>
          <p className="mt-3 text-sm font-medium text-charcoal-700">{machineryTransfer}</p>
        </Reveal>

        {/* Vrtání + Řezání ve dvou sloupcích */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-4 text-xl font-bold">
              Vrtání prostupů
              <span className="ml-2 text-sm font-normal text-charcoal-500">cena za 1 m vrtu</span>
            </h3>
            <TableWrap label="Ceník vrtání prostupů">
              <thead>
                <tr className="bg-charcoal-900 text-left text-xs uppercase tracking-wide text-sand-100">
                  <th scope="col" className="px-4 py-3 font-semibold">Průměr vrtáku</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">Cihla</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">Železobeton / beton</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-100 bg-white">
                {drillingPrices.map((row) => (
                  <tr key={row.diameter} className="hover:bg-sand-50">
                    <th scope="row" className="px-4 py-2.5 text-left font-medium text-charcoal-900">
                      {row.diameter}
                    </th>
                    <td className="px-4 py-2.5 text-right"><Cell value={row.brick} /></td>
                    <td className="px-4 py-2.5 text-right"><Cell value={row.reinforced} /></td>
                  </tr>
                ))}
              </tbody>
            </TableWrap>
            <p className="mt-3 text-sm font-medium text-charcoal-700">{drillingTransfer}</p>
          </Reveal>

          <Reveal>
            <h3 className="mb-4 text-xl font-bold">
              Řezání
              <span className="ml-2 text-sm font-normal text-charcoal-500">cena dle hloubky řezu</span>
            </h3>
            <TableWrap label="Ceník řezání">
              <thead>
                <tr className="bg-charcoal-900 text-left text-xs uppercase tracking-wide text-sand-100">
                  <th scope="col" className="px-4 py-3 font-semibold">Materiál</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">5 cm</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">10 cm</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">12 cm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-100 bg-white">
                {cuttingPrices.map((row) => (
                  <tr key={row.material} className="hover:bg-sand-50">
                    <th scope="row" className="px-4 py-3 text-left font-medium text-charcoal-900">
                      {row.material}
                    </th>
                    <td className="px-4 py-3 text-right"><Cell value={row.d5} /></td>
                    <td className="px-4 py-3 text-right"><Cell value={row.d10} /></td>
                    <td className="px-4 py-3 text-right"><Cell value={row.d12} /></td>
                  </tr>
                ))}
              </tbody>
            </TableWrap>

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-charcoal-200 bg-white p-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-olive-600" aria-hidden="true" />
              <p className="text-sm text-charcoal-600">{pricingNote}</p>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          <Button as="a" href="#kontakt" variant="primary" size="lg" icon={ArrowRight} iconRight>
            Získat aktuální cenovou nabídku
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
