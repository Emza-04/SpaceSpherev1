import React from 'react';
import { Globe } from 'lucide-react';
import { cn } from '../lib/utils';
interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}
export function Logo({ className, iconClassName, textClassName }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'bg-brand-500 text-white p-1.5 rounded-lg',
          iconClassName
        )}>
        
        <Globe size={24} strokeWidth={2.5} />
      </div>
      <span
        className={cn(
          'font-bold text-xl tracking-tight text-ink',
          textClassName
        )}>
        
        StaySphere <span className="text-brand-500">Property</span>
      </span>
    </div>);

}