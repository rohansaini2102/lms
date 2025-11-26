import React from 'react';

export const InfiniteMarquee = () => {
  const items = [
    "RAJASTHAN ADMIN SERVICES", "UPSC 2025", "POLICE CONSTABLE", "REET LEVEL 1", "PATWAR EXAM", 
    "HIGH COURT LDC", "RPSC SI", "COLLEGE LECTURER"
  ];

  return (
    <div className="bg-dark text-cream py-6 overflow-hidden rotate-1 border-y-4 border-neon-green mx-[-10px]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex gap-8 mx-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-4xl md:text-5xl font-grotesk font-bold tracking-tighter">
                  {item}
                </span>
                <span className="w-4 h-4 bg-neon-green rounded-full"></span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Sticker = ({ text, color = "bg-neon-yellow", className = "", rotate = "0deg" }: { text: string, color?: string, className?: string, rotate?: string }) => (
  <div 
    className={`absolute ${color} text-dark px-6 py-3 rounded-full font-grotesk font-bold border-2 border-dark shadow-neubrutalism z-20 ${className}`}
    style={{ transform: `rotate(${rotate})` }}
  >
    {text}
  </div>
);

export const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{
    backgroundImage: `linear-gradient(#121212 1px, transparent 1px), linear-gradient(90deg, #121212 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  }}></div>
);