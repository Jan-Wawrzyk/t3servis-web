interface LogoProps {
  className?: string;
  light?: boolean;
}

/** Značka T3 podle originálního loga: olivový blok „T" + antracitový blok „3". */
export function T3Mark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 50"
      className={className}
      role="img"
      aria-label="T3servis"
    >
      <clipPath id="t3-round">
        <rect x="0" y="0" width="100" height="50" rx="6" />
      </clipPath>
      <g clipPath="url(#t3-round)">
        <rect x="0" y="0" width="50" height="50" fill="#5a7212" />
        <rect x="50" y="0" width="50" height="50" fill="#333333" />
        <text
          x="25"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="800"
          fontSize="40"
        >
          T
        </text>
        <text
          x="75"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="800"
          fontSize="40"
        >
          3
        </text>
      </g>
    </svg>
  );
}

/** Logo T3servis: značka T3 + textový wordmark. */
export function Logo({ className = '', light = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <T3Mark className="h-9 w-[4.5rem] shrink-0" />
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
