import type { ElementType, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Obsahový kontejner s max. šířkou ~1280 px a bočním odsazením. */
export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
