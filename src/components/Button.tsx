import React, { forwardRef } from 'react';
import { cn } from '../lib/utils';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  { className, variant = 'primary', size = 'md', fullWidth, ...props },
  ref) =>
  {
    const variants = {
      primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-sm',
      secondary:
      'bg-white text-brand-500 border border-brand-500 hover:bg-brand-50',
      outline:
      'bg-transparent text-ink border border-hairline hover:bg-surface',
      ghost: 'bg-transparent text-ink hover:bg-surface'
    };
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm font-medium',
      lg: 'px-6 py-3 text-base font-medium'
    };
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props} />);


  }
);
Button.displayName = 'Button';