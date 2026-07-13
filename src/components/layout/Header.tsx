import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X, Send } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { navItems, primaryPhone } from '../../data/site';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const sectionIds = navItems.map((n) => n.href.replace('#', ''));

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // zamknout scroll při otevřeném mobilním menu
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const hrefFor = (hash: string) => (onHome ? hash : `/${hash}`);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-charcoal-200/70 bg-sand-50/95 backdrop-blur supports-[backdrop-filter]:bg-sand-50/80'
          : 'border-transparent bg-sand-50'
      }`}
    >
      {/* skip link pro klávesnici */}
      <a
        href={hrefFor('#obsah')}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-charcoal-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Přejít na obsah
      </a>
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link to="/" aria-label="T3servis – úvodní stránka" className="shrink-0 rounded">
          <Logo />
        </Link>

        <nav aria-label="Hlavní navigace" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = onHome && active === id;
              return (
                <li key={item.href}>
                  <a
                    href={hrefFor(item.href)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-olive-700'
                        : 'text-charcoal-700 hover:text-charcoal-900'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-olive-600" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button as="a" href={primaryPhone.phoneHref} variant="outline" size="md" icon={Phone}>
            <span className="hidden xl:inline">{primaryPhone.phone}</span>
            <span className="xl:hidden">Zavolat</span>
          </Button>
          <Button as="a" href={hrefFor('#kontakt')} variant="primary" size="md" icon={Send}>
            Nezávazná poptávka
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-charcoal-800 hover:bg-charcoal-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobilní menu */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobilní navigace"
        >
          <div
            className="fixed inset-0 top-[4.5rem] z-40 bg-charcoal-950/40"
            onClick={() => setOpen(false)}
          />
          <nav
            aria-label="Mobilní navigace"
            className="relative z-40 border-t border-charcoal-200 bg-sand-50 px-4 pb-6 pt-2 shadow-lg"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={hrefFor(item.href)}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-charcoal-800 hover:bg-charcoal-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <Button as="a" href={primaryPhone.phoneHref} variant="outline" size="lg" icon={Phone}>
                {primaryPhone.phone}
              </Button>
              <Button
                as="a"
                href={hrefFor('#kontakt')}
                variant="primary"
                size="lg"
                icon={Send}
                onClick={() => setOpen(false)}
              >
                Nezávazná poptávka
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
