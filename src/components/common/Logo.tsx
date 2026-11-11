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
      aria-label="Zippy Enterprises Private Limited Home"
    >
      {/* High-Tech Vector Hex/Shield Monogram */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="logo-poly-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#1769AA" />
              <stop offset="100%" stopColor="#102747" />
            </linearGradient>
            <linearGradient id="shield-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#0E1B38" : "#F0F7FF"} />
              <stop offset="100%" stopColor={isDark ? "#070D1E" : "#E2EEFF"} />
            </linearGradient>
          </defs>
          
          {/* Base Hexagon Shield */}
          <polygon 
            points="32,4 58,19 58,45 32,60 6,45 6,19" 
            fill="url(#shield-bg)" 
            stroke="#1769AA" 
            strokeWidth="2"
            strokeOpacity="0.8"
          />
          {/* Subtle Accent Glow Ring */}
          <polygon 
            points="32,8 54,21 54,43 32,56 10,43 10,21" 
            fill="none" 
            stroke="#0284C7" 
            strokeWidth="1" 
            strokeOpacity="0.4" 
            strokeDasharray="4 2"
          />
          {/* Stylized High-Speed Z Geometry */}
          <path 
            d="M20 20H44L28 36H44V44H20L36 28H20V20Z" 
            fill="url(#logo-poly-grad)" 
          />
          {/* Kinetic Core Light Points */}
          <circle cx="44" cy="20" r="2.5" fill="#0284C7" />
          <circle cx="20" cy="44" r="2.5" fill="#1769AA" />
        </svg>
      </div>

      {/* Typography Brand Name */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-extrabold ${titleSizes[size]} tracking-wider font-sans ${isDark ? 'text-white' : 'text-[#102747]'}`}>
            ZIPPY
          </span>
          <span className={`font-bold text-xs uppercase px-1.5 py-0.5 rounded border ${
            isDark 
              ? 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30' 
              : 'text-blue-700 bg-blue-50 border-blue-200'
          }`}>
            TECH
          </span>
        </div>
        {showSubtitle && (
          <span className={`font-semibold uppercase ${subtitleSizes[size]} mt-1 font-sans ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Enterprises Pvt Ltd
          </span>
        )}
      </div>
    </Link>
  );
};
