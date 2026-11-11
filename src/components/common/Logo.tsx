import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showSubtitle = true,
  className = '',
  variant = 'light'
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.25em]',
    lg: 'text-[11px] tracking-[0.3em]'
  };

  const isDark = variant === 'dark';

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg ${className}`}
      aria-label="Zippy Tech Softwares - Zippy Enterprises Private Limited Home"
    >
      {/* Official Circular Logo Emblem */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 transition-transform duration-300 group-hover:scale-105 rounded-full overflow-hidden shadow-sm border ${isDark ? 'border-slate-700' : 'border-slate-300'} bg-black`}>
        <img 
          src="/zippy-logo.jpg" 
          alt="Zippy Tech Softwares Emblem" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Typography Brand Name */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-extrabold ${titleSizes[size]} tracking-tight font-sans ${isDark ? 'text-white' : 'text-[#102747]'}`}>
            ZIPPY TECH
          </span>
          <span className={`font-bold text-[10px] sm:text-xs uppercase px-1.5 py-0.5 rounded border tracking-wider ${
            isDark 
              ? 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30' 
              : 'text-blue-700 bg-blue-50 border-blue-200'
          }`}>
            SOFTWARES
          </span>
        </div>
        {showSubtitle && (
          <span className={`font-semibold uppercase ${subtitleSizes[size]} mt-1 font-sans ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            A Unit of Zippy Enterprises Pvt Ltd
          </span>
        )}
      </div>
    </Link>
  );
};
