import { useEffect } from 'react';

interface Meta {
  title: string;
  description?: string;
}

/** Nastaví <title> a meta description pro danou stránku (pro placeholder routy). */
export function useDocumentMeta({ title, description }: Meta) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    let metaEl: HTMLMetaElement | null = null;
    let prevDesc: string | null = null;
    if (description) {
      metaEl = document.querySelector('meta[name="description"]');
      if (metaEl) {
        prevDesc = metaEl.getAttribute('content');
        metaEl.setAttribute('content', description);
      }
    }
    return () => {
      document.title = prevTitle;
      if (metaEl && prevDesc !== null) metaEl.setAttribute('content', prevDesc);
    };
  }, [title, description]);
}
