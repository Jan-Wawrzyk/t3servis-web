interface LogoProps {
  className?: string;
  light?: boolean;
}

/** Textové logo T3servis vycházející z vizuální identity (antracit + olivová). */
export function Logo({ className = '', light = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="grid h-9 w-9 place-items-center rounded-md border-2 border-olive-500 bg-charcoal-900 text-lg font-extrabold leading-none text-white"
        aria-hidden="true"
      >
        T<span className="text-olive-400">3</span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-charcoal-900'}`}
        >
          T3servis
        </span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-olive-600">
          zemní &amp; stavební práce
        </span>
      </span>
    </span>
  );
}
