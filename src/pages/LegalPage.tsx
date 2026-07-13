import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { company } from '../data/site';

interface Block {
  heading: string;
  paragraphs: string[];
}

interface LegalPageProps {
  title: string;
  intro: string;
  blocks: Block[];
}

/** Sdílená šablona pro placeholder právní stránky (GDPR, cookies). */
export function LegalPage({ title, intro, blocks }: LegalPageProps) {
  useDocumentMeta({ title: `${title} | ${company.shortName}` });

  return (
    <main id="obsah" className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-olive-700 hover:text-olive-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Zpět na úvod
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">{title}</h1>
        <p className="mt-4 text-charcoal-600">{intro}</p>

        <div className="mt-8 space-y-8">
          {blocks.map((block) => (
            <section key={block.heading}>
              <h2 className="text-xl font-bold">{block.heading}</h2>
              {block.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-charcoal-700">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-charcoal-200 bg-sand-50 p-5 text-sm text-charcoal-600">
          <p className="font-semibold text-charcoal-800">{company.name}</p>
          <p>
            {company.registeredOffice.street}, {company.registeredOffice.city} · IČO:{' '}
            {company.ico} · DIČ: {company.dic}
          </p>
          <p>
            E-mail:{' '}
            <a href={company.emailHref} className="font-medium text-olive-700 underline">
              {company.email}
            </a>
          </p>
        </div>

        <p className="mt-6 text-xs text-charcoal-400">
          Toto je vzorový text připravený jako podklad. Před spuštěním webu doporučujeme nechat
          znění zkontrolovat a doplnit dle skutečného zpracování údajů.
        </p>
      </Container>
    </main>
  );
}
