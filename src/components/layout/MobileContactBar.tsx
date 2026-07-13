import { Mail, Phone, Send } from 'lucide-react';
import { company, primaryPhone } from '../../data/site';

/** Plovoucí kontaktní lišta na mobilu: Zavolat / Napsat e-mail / Poptávka. */
export function MobileContactBar() {
  const items = [
    { href: primaryPhone.phoneHref, icon: Phone, label: 'Zavolat' },
    { href: company.emailHref, icon: Mail, label: 'Napsat e-mail' },
    { href: '#kontakt', icon: Send, label: 'Poptávka', primary: true },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal-800 bg-charcoal-950/95 backdrop-blur md:hidden">
      <ul className="grid grid-cols-3">
        {items.map(({ href, icon: Icon, label, primary }) => (
          <li key={label}>
            <a
              href={href}
              className={`flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium ${
                primary ? 'bg-olive-600 text-white' : 'text-sand-100'
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
