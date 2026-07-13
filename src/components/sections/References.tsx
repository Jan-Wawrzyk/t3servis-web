import { useMemo, useState } from 'react';
import { ChevronDown, MapPin, Search, SearchX } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Lightbox } from '../gallery/Lightbox';
import {
  featuredProjects,
  referenceYears,
  references,
} from '../../data/references';
import { albums } from '../../data/galleries';
import type { Reference } from '../../types';

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

function ReferenceRow({ ref }: { ref: Reference }) {
  return (
    <li className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-4">
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-charcoal-900">
          {ref.project}
          {ref.location && (
            <span className="font-normal text-charcoal-500"> — {ref.location}</span>
          )}
        </p>
        {ref.work && <p className="text-sm text-charcoal-600">{ref.work}</p>}
      </div>
      {ref.client && (
        <p className="shrink-0 text-sm text-charcoal-500 sm:text-right sm:w-64">
          {ref.client}
        </p>
      )}
    </li>
  );
}

export function References() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [year, setYear] = useState<number | 'all'>('all');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return references.filter((r) => {
      if (year !== 'all' && r.year !== year) return false;
      if (!q) return true;
      const hay = normalize(
        [r.project, r.location, r.work, r.client].filter(Boolean).join(' '),
      );
      return hay.includes(q);
    });
  }, [query, year]);

  const grouped = useMemo(() => {
    const map = new Map<number, Reference[]>();
    for (const r of filtered) {
      if (!map.has(r.year)) map.set(r.year, []);
      map.get(r.year)!.push(r);
    }
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const activeAlbum = albums.find((a) => a.slug === lightbox) ?? null;

  return (
    <section id="reference" aria-labelledby="reference-title" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="reference-title"
          eyebrow="Reference"
          title="Vybrané realizace"
          description="Přehled projektů, na kterých jsme se podíleli. Kompletní archiv referencí od roku 2013 najdete níže."
        />

        {/* Vybrané realizace s fotografiemi */}
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => {
            const album = albums.find((a) => a.slug === p.albumSlug);
            return (
              <Reveal as="li" key={p.albumSlug} delay={(i % 3) * 0.05}>
                <button
                  type="button"
                  onClick={() => {
                    setLightbox(p.albumSlug);
                    setLightboxIndex(0);
                  }}
                  className="group relative block aspect-[3/2] w-full overflow-hidden rounded-lg bg-charcoal-900 text-left focus-visible:ring-2 focus-visible:ring-olive-500 focus-visible:ring-offset-2"
                  aria-label={`Zobrazit fotografie: ${p.title}`}
                >
                  {album && (
                    <img
                      src={album.cover}
                      alt={`Realizace ${p.title}`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-70"
                    />
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4">
                    <span className="block text-base font-bold text-white">{p.title}</span>
                    <span className="mt-0.5 block text-sm text-sand-200">{p.meta}</span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ul>

        {/* Kompletní archiv */}
        <div className="mt-14 rounded-xl border border-charcoal-200/70 bg-sand-50">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="reference-archiv"
            className="flex w-full items-center justify-between gap-4 p-6 text-left"
          >
            <span>
              <span className="block text-lg font-bold text-charcoal-900">
                Kompletní archiv referencí
              </span>
              <span className="text-sm text-charcoal-500">
                {references.length} realizací z let {referenceYears[referenceYears.length - 1]}–
                {referenceYears[0]}
              </span>
            </span>
            <ChevronDown
              className={`h-6 w-6 shrink-0 text-olive-700 transition-transform ${expanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>

          {expanded && (
            <div id="reference-archiv" className="border-t border-charcoal-200/70 p-6">
              {/* Vyhledávání */}
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Hledat podle projektu, lokality, prací nebo klienta…"
                  aria-label="Vyhledávání v referencích"
                  className="w-full rounded-md border border-charcoal-300 bg-white py-2.5 pl-10 pr-4 text-charcoal-900 placeholder:text-charcoal-400 focus:border-olive-500"
                />
              </div>

              {/* Filtr roků */}
              <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filtr podle roku">
                <button
                  type="button"
                  onClick={() => setYear('all')}
                  aria-pressed={year === 'all'}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    year === 'all'
                      ? 'bg-olive-600 text-white'
                      : 'bg-white text-charcoal-700 ring-1 ring-inset ring-charcoal-200 hover:ring-olive-400'
                  }`}
                >
                  Vše
                </button>
                {referenceYears.map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYear(y)}
                    aria-pressed={year === y}
                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                      year === y
                        ? 'bg-olive-600 text-white'
                        : 'bg-white text-charcoal-700 ring-1 ring-inset ring-charcoal-200 hover:ring-olive-400'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>

              {/* Výsledky */}
              <p className="mt-4 text-sm text-charcoal-500" aria-live="polite">
                Zobrazeno {filtered.length} z {references.length} referencí
              </p>

              {grouped.length === 0 ? (
                <div className="mt-6 flex flex-col items-center gap-3 rounded-lg border border-dashed border-charcoal-300 bg-white py-12 text-center">
                  <SearchX className="h-8 w-8 text-charcoal-400" aria-hidden="true" />
                  <p className="font-medium text-charcoal-700">
                    Žádné reference neodpovídají zadání.
                  </p>
                  <p className="text-sm text-charcoal-500">
                    Zkuste upravit hledaný výraz nebo zvolit jiný rok.
                  </p>
                </div>
              ) : (
                <div className="mt-6 space-y-8">
                  {grouped.map(([y, items]) => (
                    <div key={y}>
                      <h4 className="flex items-center gap-3 text-lg font-bold text-charcoal-900">
                        {y}
                        <span className="h-px flex-1 bg-charcoal-200" aria-hidden="true" />
                        <span className="text-sm font-normal text-charcoal-400">
                          {items.length}
                        </span>
                      </h4>
                      <ul className="mt-2 divide-y divide-charcoal-100 rounded-lg border border-charcoal-100 bg-white">
                        {items.map((r, idx) => (
                          <ReferenceRow key={`${r.project}-${r.client ?? idx}-${idx}`} ref={r} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-charcoal-500">
          <MapPin className="h-4 w-4 text-olive-600" aria-hidden="true" />
          Realizace po celé České republice a na Slovensku.
        </p>
      </Container>

      {activeAlbum && (
        <Lightbox
          images={activeAlbum.images}
          index={lightboxIndex}
          caption={activeAlbum.title}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
