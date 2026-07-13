import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { company } from '../../data/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  type: string;
  location: string;
  message: string;
  gdpr: boolean;
}

const initial: FormValues = {
  name: '',
  email: '',
  phone: '',
  type: 'Zemní a výkopové práce',
  location: '',
  message: '',
  gdpr: false,
};

const inquiryTypes = [
  'Zemní a výkopové práce',
  'Zpevněné plochy a dlažby',
  'Demoliční práce',
  'Vrtání do betonu / zdiva',
  'Terénní úpravy',
  'Pronájem mechanizace',
  'Jiné',
];

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) next.name = 'Vyplňte prosím své jméno.';
    if (!values.email.trim()) next.email = 'Vyplňte prosím e-mail.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'Zadejte platnou e-mailovou adresu.';
    if (values.phone && !/^[+\d][\d\s]{5,}$/.test(values.phone))
      next.phone = 'Zadejte platné telefonní číslo.';
    if (!values.message.trim()) next.message = 'Napište prosím krátkou zprávu.';
    if (!values.gdpr) next.gdpr = 'Bez souhlasu nemůžeme poptávku zpracovat.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMailto = () => {
    const subject = `Poptávka z webu – ${values.type}`;
    const body = [
      `Jméno: ${values.name}`,
      `E-mail: ${values.email}`,
      `Telefon: ${values.phone || '—'}`,
      `Typ poptávky: ${values.type}`,
      `Lokalita realizace: ${values.location || '—'}`,
      '',
      values.message,
    ].join('\n');
    return `${company.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Varianta A: Formspree (pokud je nakonfigurováno VITE_FORMSPREE_ID)
    if (FORMSPREE_ID) {
      setStatus('submitting');
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jmeno: values.name,
            email: values.email,
            telefon: values.phone,
            typ_poptavky: values.type,
            lokalita: values.location,
            zprava: values.message,
          }),
        });
        if (res.ok) {
          setStatus('success');
          setValues(initial);
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
      return;
    }

    // Varianta B (fallback): transparentní otevření e-mailového klienta
    window.location.href = buildMailto();
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-olive-200 bg-olive-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-olive-600" aria-hidden="true" />
        <div>
          <h3 className="text-lg font-bold text-charcoal-900">Poptávka odeslána</h3>
          <p className="mt-1 text-charcoal-600">
            Děkujeme za zprávu. Ozveme se vám co nejdříve zpět.
          </p>
        </div>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Odeslat další poptávku
        </Button>
      </div>
    );
  }

  const fieldClass = (err?: string) =>
    `w-full rounded-md border bg-white px-3.5 py-2.5 text-charcoal-900 placeholder:text-charcoal-400 focus:border-olive-500 ${
      err ? 'border-red-400' : 'border-charcoal-300'
    }`;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Poptávkový formulář">
      {!FORMSPREE_ID && (
        <p className="rounded-md bg-sand-100 px-3 py-2 text-xs text-charcoal-500">
          Po odeslání se otevře váš e-mailový klient s předvyplněnou zprávou na adresu{' '}
          {company.email}.
        </p>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1 block text-sm font-medium text-charcoal-800">
            Jméno <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
            className={fieldClass(errors.name)}
          />
          {errors.name && (
            <p id="cf-name-err" className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-email" className="mb-1 block text-sm font-medium text-charcoal-800">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
            className={fieldClass(errors.email)}
          />
          {errors.email && (
            <p id="cf-email-err" className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-phone" className="mb-1 block text-sm font-medium text-charcoal-800">
            Telefon
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'cf-phone-err' : undefined}
            className={fieldClass(errors.phone)}
          />
          {errors.phone && (
            <p id="cf-phone-err" className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-type" className="mb-1 block text-sm font-medium text-charcoal-800">
            Typ poptávky
          </label>
          <select
            id="cf-type"
            value={values.type}
            onChange={(e) => set('type', e.target.value)}
            className={fieldClass()}
          >
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-location" className="mb-1 block text-sm font-medium text-charcoal-800">
          Lokalita realizace
        </label>
        <input
          id="cf-location"
          type="text"
          value={values.location}
          onChange={(e) => set('location', e.target.value)}
          placeholder="Např. Třinec, Frýdek-Místek…"
          className={fieldClass()}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1 block text-sm font-medium text-charcoal-800">
          Zpráva <span className="text-red-500">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={values.message}
          onChange={(e) => set('message', e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
          className={fieldClass(errors.message)}
          placeholder="Popište prosím rozsah prací, termín a další podrobnosti."
        />
        {errors.message && (
          <p id="cf-message-err" className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-charcoal-700">
          <input
            type="checkbox"
            checked={values.gdpr}
            onChange={(e) => set('gdpr', e.target.checked)}
            aria-invalid={!!errors.gdpr}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-charcoal-300 text-olive-600 focus:ring-olive-500"
          />
          <span>
            Souhlasím se zpracováním osobních údajů za účelem vyřízení poptávky v souladu se{' '}
            <a href="/ochrana-osobnich-udaju" className="font-medium text-olive-700 underline">
              zásadami ochrany osobních údajů
            </a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.gdpr && <p className="mt-1 text-sm text-red-600">{errors.gdpr}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>
            Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo nám napište přímo na{' '}
            <a href={company.emailHref} className="font-medium underline">{company.email}</a>.
          </span>
        </div>
      )}

      <Button type="submit" size="lg" icon={status === 'submitting' ? Loader2 : Send} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Odesílám…' : 'Odeslat poptávku'}
      </Button>
    </form>
  );
}
