import { useState } from 'react';
import { ArrowLeft, ImageIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Lightbox } from '../gallery/Lightbox';
import { albums } from '../../data/galleries';

export function Gallery() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeAlbum = albums.find((a) => a.slug === activeSlug) ?? null;

  return (
    <section id="galerie" aria-labelledby="galerie-title" className="scroll-mt-24 bg-sand-100 py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="galerie-title"
          eyebrow="Fotogalerie"
          title="Fotografie z realizací"
          description="Vyberte album a prohlédněte si fotografie z jednotlivých staveb. Všechny snímky pocházejí z reálných zakázek T3servis."
        />

        {!activeAlbum ? (
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((album, i) => (
              <Reveal as="li" key={album.slug} delay={(i % 3) * 0.05}>
                <button
                  type="button"
                  onClick={() => setActiveSlug(album.slug)}
                  className="group block w-full overflow-hidden rounded-lg border border-charcoal-200/70 bg-white text-left transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-olive-500 focus-visible:ring-offset-2"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-charcoal-100">
                    <img
                      src={album.cover}
                      alt={`Náhled alba ${album.title}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-charcoal-950/70 px-2.5 py-1 text-xs font-medium text-white">
                      <ImageIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      {album.images.length}
                    </span>
                  </span>
                  <span className="flex items-center justify-between gap-3 p-4">
                    <span className="font-semibold text-charcoal-900 group-hover:text-olive-700">
                      {album.title}
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </ul>
        ) : (
          <div className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-xl font-bold">{activeAlbum.title}</h3>
              <button
                type="button"
                onClick={() => setActiveSlug(null)}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-charcoal-700 hover:bg-white hover:text-olive-700"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Zpět na alba
              </button>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {activeAlbum.images.map((img, idx) => (
                <li key={img.src}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="group block w-full overflow-hidden rounded-md bg-charcoal-100 focus-visible:ring-2 focus-visible:ring-olive-500 focus-visible:ring-offset-2"
                    aria-label={`Otevřít fotografii ${idx + 1} z alba ${activeAlbum.title}`}
                  >
                    <span className="block aspect-[4/3] overflow-hidden">
                      <img
                        src={img.thumb}
                        alt={`${activeAlbum.title} – fotografie ${idx + 1}`}
                        loading="lazy"
                        decoding="async"
                        width={img.width}
                        height={img.height}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>

      {activeAlbum && lightboxIndex !== null && (
        <Lightbox
          images={activeAlbum.images}
          index={lightboxIndex}
          caption={activeAlbum.title}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
