import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Zarovnání – výchozí vlevo */
  center?: boolean;
  /** true = světlý text na tmavém pozadí */
  light?: boolean;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
  id,
}: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`eyebrow ${light ? 'text-olive-300' : ''}`}>
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`mt-3 text-3xl leading-tight sm:text-4xl ${light ? 'text-white' : ''}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-sand-200' : 'text-charcoal-600'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
