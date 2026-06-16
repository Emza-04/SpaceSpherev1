import React, { forwardRef } from 'react';
import { cn } from '../lib/utils';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, icon, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label &&
        <label className="block text-sm font-medium text-ink-charcoal mb-1.5">
            {label}
          </label>
        }
        <div className="relative">
          {icon &&
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          }
          <input
            ref={ref}
            className={cn(
              'flex h-11 w-full rounded-xl border border-hairline bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow',
              icon && 'pl-10',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
            {...props} />
          
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>);

  }
);
Input.displayName = 'Input';