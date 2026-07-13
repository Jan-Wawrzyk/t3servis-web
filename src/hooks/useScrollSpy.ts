import { useEffect, useState } from 'react';

/**
 * Sleduje, která sekce je aktuálně ve viewportu, a vrací její id.
 * Používá se pro zvýraznění aktivní položky v navigaci.
 */
export function useScrollSpy(ids: string[], offset = 120): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + offset;
      let current = ids[0] ?? '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      // pokud jsme na konci stránky, aktivuj poslední sekci
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = ids[ids.length - 1] ?? current;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [ids, offset]);

  return active;
}
