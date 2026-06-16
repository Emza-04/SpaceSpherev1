import React, { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { ChevronDown } from 'lucide-react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, icon, error, children, ...props }, ref) => {
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
          <select
            ref={ref}
            className={cn(
              'flex h-11 w-full appearance-none rounded-xl border border-hairline bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow',
              icon && 'pl-10',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
            {...props}>
            
            {children}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
            <ChevronDown size={16} />
          </div>
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>);

  }
);
Select.displayName = 'Select';