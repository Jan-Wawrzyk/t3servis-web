import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '../../types';

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  caption: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function Lightbox({ images, index, caption, onClose, onIndexChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = images.length;
  const current = images[index];

  const next = useCallback(() => onIndexChange((index + 1) % total), [index, total, onIndexChange]);
  const prev = useCallback(
    () => onIndexChange((index - 1 + total) % total),
    [index, total, onIndexChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [next, prev, onClose]);

  if (!current) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${caption} – fotografie ${index + 1} z ${total}`}
      className="fixed inset-0 z-[100] flex flex-col bg-charcoal-950/95 backdrop-blur-sm"
    >
      {/* horní lišta */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 text-white sm:px-6">
        <p className="truncate text-sm font-medium">
          <span className="text-white">{caption}</span>
          <span className="ml-2 text-white/60">
            {index + 1} / {total}
          </span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Zavřít galerii"
          className="rounded-md p-2 text-white/90 hover:bg-white/10"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* obrázek + navigace */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-2 pb-4 sm:px-16">
        {total > 1 && (
          <button
            type="button"
            onClick={prev}
            aria-label="Předchozí fotografie"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:left-4"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        <img
          key={current.src}
          src={current.src}
          alt={`${caption} – fotografie ${index + 1}`}
          width={current.width}
          height={current.height}
          className="max-h-full max-w-full animate-fade-up rounded object-contain"
          decoding="async"
        />

        {total > 1 && (
          <button
            type="button"
            onClick={next}
            aria-label="Další fotografie"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-4"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* klik do pozadí zavře */}
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 -z-10"
      />
    </div>,
    document.body,
  );
}
