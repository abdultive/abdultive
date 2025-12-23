import { useState } from 'react';

interface LogoCardProps {
  id: number;
  title: string;
  category: string;
  year: string;
  imageSrc: string;
  bgColor?: string;
}

const LogoCard = ({ id, title, category, year, imageSrc, bgColor = 'bg-card' }: LogoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className={`logo-card group aspect-square ${bgColor} cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo container */}
      <div className="relative h-full w-full flex items-center justify-center p-8 md:p-12">
        <img 
          src={imageSrc}
          alt={`${title} logo`}
          className={`max-w-[70%] max-h-[70%] object-contain transition-all duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      {/* Info overlay */}
      <div 
        className={`absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Top row */}
        <div className="flex justify-between items-start">
          <span className="num-label">
            {String(id).padStart(2, '0')}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {year}
          </span>
        </div>

        {/* Bottom row */}
        <div>
          <h3 className="font-display text-lg font-medium mb-1">
            {title}
          </h3>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            {category}
          </p>
        </div>
      </div>

      {/* Corner accent */}
      <div 
        className={`absolute top-0 right-0 w-8 h-8 transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      >
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-accent">
          <path d="M0 0h32v32" fill="currentColor" fillOpacity="0.1" />
          <path d="M32 0L0 32" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </article>
  );
};

export default LogoCard;
