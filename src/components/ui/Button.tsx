import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-olive-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary: 'bg-olive-600 text-white hover:bg-olive-700 focus-visible:ring-offset-white',
  secondary:
    'bg-charcoal-900 text-white hover:bg-charcoal-800 focus-visible:ring-offset-white',
  outline:
    'border border-charcoal-300/60 bg-transparent text-charcoal-900 hover:border-olive-600 hover:text-olive-700',
  ghost: 'bg-white/10 text-white hover:bg-white/20 focus-visible:ring-offset-charcoal-900',
};

const sizes: Record<Size, string> = {
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  iconRight?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const {
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconRight = false,
    children,
    className = '',
    ...rest
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {Icon && !iconRight && <Icon className="h-[1.15em] w-[1.15em]" aria-hidden="true" />}
      {children}
      {Icon && iconRight && <Icon className="h-[1.15em] w-[1.15em]" aria-hidden="true" />}
    </>
  );

  if (props.as === 'a') {
    const { as: _as, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      as?: string;
    };
    return (
      <a className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  const { as: _as, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: string;
  };
  return (
    <button className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
