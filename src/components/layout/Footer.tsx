import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { company, contactPersons, navItems } from '../../data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-sand-200">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Značka + popis */}
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-200/80">
              Zemní a výkopové práce, zpevněné plochy, demolice, vrtání a terénní úpravy
              v Moravskoslezském kraji i mimo něj.
            </p>
          </div>

          {/* Navigace */}
          <nav aria-label="Navigace v patičce">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Menu</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={`/${item.href}`} className="text-sm text-sand-200/80 hover:text-olive-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Kontakt</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {contactPersons.map((p) => (
                <li key={p.phone}>
                  <a href={p.phoneHref} className="inline-flex items-center gap-2 text-sand-200/80 hover:text-olive-300">
                    <Phone className="h-4 w-4 text-olive-400" aria-hidden="true" />
                    {p.phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={company.emailHref} className="inline-flex items-center gap-2 text-sand-200/80 hover:text-olive-300">
                  <Mail className="h-4 w-4 text-olive-400" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Adresy */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Adresa</h3>
            <div className="mt-4 space-y-4 text-sm">
              {[company.registeredOffice, company.operatingSite].map((loc) => (
                <div key={loc.street} className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-olive-400" aria-hidden="true" />
                  <address className="not-italic text-sand-200/80">
                    <span className="block text-xs uppercase tracking-wide text-sand-200/50">
                      {loc.label}
                    </span>
                    {loc.street}, {loc.city}
                  </address>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-sand-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name} · IČO: {company.ico} · DIČ: {company.dic}
          </p>
          <nav aria-label="Právní informace" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/ochrana-osobnich-udaju" className="hover:text-olive-300">
              Ochrana osobních údajů
            </Link>
            <Link to="/cookies" className="hover:text-olive-300">
              Cookies
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
