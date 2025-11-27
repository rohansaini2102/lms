import React from 'react';

// Happy Student Jumping Illustration (like the reference images)
export const StudentIllustration = ({ className = "", variant = "duo" }: { className?: string, variant?: "duo" | "single" | "group" }) => {
  if (variant === "single") {
    return (
      <svg className={className} viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Single happy student jumping */}
        <ellipse cx="100" cy="270" rx="30" ry="8" fill="#121212" opacity="0.1"/>
        {/* Body */}
        <path d="M85 140 L85 190 Q85 200 95 200 L105 200 Q115 200 115 190 L115 140" fill="#0085FF"/>
        {/* Arms up */}
        <path d="M70 145 Q55 120 60 100" stroke="#FFCCAA" strokeWidth="12" strokeLinecap="round"/>
        <path d="M130 145 Q145 120 140 100" stroke="#FFCCAA" strokeWidth="12" strokeLinecap="round"/>
        {/* Hands */}
        <circle cx="60" cy="95" r="10" fill="#FFCCAA"/>
        <circle cx="140" cy="95" r="10" fill="#FFCCAA"/>
        {/* Head */}
        <circle cx="100" cy="80" r="35" fill="#FFCCAA"/>
        {/* Hair */}
        <path d="M65 70 Q70 40 100 35 Q130 40 135 70 Q130 55 100 50 Q70 55 65 70" fill="#4A3728"/>
        {/* Eyes closed happy */}
        <path d="M85 75 Q90 80 95 75" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
        <path d="M105 75 Q110 80 115 75" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
        {/* Big smile */}
        <path d="M85 90 Q100 105 115 90" stroke="#121212" strokeWidth="2" strokeLinecap="round" fill="none"/>
        {/* Legs jumping */}
        <path d="M90 200 Q80 230 75 250" stroke="#2D3748" strokeWidth="14" strokeLinecap="round"/>
        <path d="M110 200 Q120 230 125 250" stroke="#2D3748" strokeWidth="14" strokeLinecap="round"/>
        {/* Shoes */}
        <ellipse cx="72" cy="255" rx="12" ry="8" fill="#FF0080"/>
        <ellipse cx="128" cy="255" rx="12" ry="8" fill="#FF0080"/>
        {/* Backpack strap */}
        <path d="M75 115 L75 160" stroke="#00E58D" strokeWidth="6" strokeLinecap="round"/>
        <path d="M125 115 L125 160" stroke="#00E58D" strokeWidth="6" strokeLinecap="round"/>
        {/* Backpack */}
        <rect x="78" y="145" width="44" height="50" rx="8" fill="#00E58D"/>
        <rect x="85" y="150" width="30" height="15" rx="4" fill="#00B872"/>
      </svg>
    );
  }

  if (variant === "group") {
    return (
      <svg className={className} viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadows */}
        <ellipse cx="100" cy="285" rx="25" ry="6" fill="#121212" opacity="0.1"/>
        <ellipse cx="200" cy="285" rx="25" ry="6" fill="#121212" opacity="0.1"/>
        <ellipse cx="300" cy="285" rx="25" ry="6" fill="#121212" opacity="0.1"/>
        <ellipse cx="400" cy="285" rx="25" ry="6" fill="#121212" opacity="0.1"/>

        {/* Student 1 - Yellow shirt */}
        <g transform="translate(50, 20)">
          <rect x="35" y="100" width="30" height="45" rx="4" fill="#FFE600"/>
          <path d="M35 120 Q20 100 25 80" stroke="#FFCCAA" strokeWidth="10" strokeLinecap="round"/>
          <path d="M65 120 Q80 100 75 80" stroke="#FFCCAA" strokeWidth="10" strokeLinecap="round"/>
          <circle cx="25" cy="75" r="8" fill="#FFCCAA"/>
          <circle cx="75" cy="75" r="8" fill="#FFCCAA"/>
          <circle cx="50" cy="60" r="28" fill="#FFCCAA"/>
          <path d="M25 50 Q30 25 50 20 Q70 25 75 50 Q65 40 50 38 Q35 40 25 50" fill="#D97706"/>
          <path d="M40 55 Q43 60 46 55" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
          <path d="M54 55 Q57 60 60 55" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 72 Q50 82 60 72" stroke="#121212" strokeWidth="2" fill="none"/>
          <path d="M40 145 Q35 180 30 210" stroke="#1E40AF" strokeWidth="12" strokeLinecap="round"/>
          <path d="M60 145 Q65 180 70 210" stroke="#1E40AF" strokeWidth="12" strokeLinecap="round"/>
          <ellipse cx="28" cy="215" rx="10" ry="6" fill="#8B4513"/>
          <ellipse cx="72" cy="215" rx="10" ry="6" fill="#8B4513"/>
          <path d="M25 100 L25 140" stroke="#8B4513" strokeWidth="5"/>
          <rect x="22" y="130" width="20" height="25" rx="4" fill="#8B4513"/>
        </g>

        {/* Student 2 - Pink backpack girl */}
        <g transform="translate(150, 10)">
          <rect x="35" y="105" width="30" height="45" rx="4" fill="#00E58D"/>
          <path d="M35 125 Q15 105 20 85" stroke="#FFCCAA" strokeWidth="10" strokeLinecap="round"/>
          <path d="M65 125 Q85 105 80 85" stroke="#FFCCAA" strokeWidth="10" strokeLinecap="round"/>
          <circle cx="20" cy="80" r="8" fill="#FFCCAA"/>
          <circle cx="80" cy="80" r="8" fill="#FFCCAA"/>
          <circle cx="50" cy="65" r="28" fill="#FFCCAA"/>
          <path d="M22 55 Q25 30 50 25 Q75 30 78 55" fill="#D97706"/>
          <path d="M78 55 Q80 70 75 85" stroke="#D97706" strokeWidth="8" strokeLinecap="round"/>
          <path d="M40 60 Q43 65 46 60" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
          <path d="M54 60 Q57 65 60 60" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 77 Q50 87 60 77" stroke="#121212" strokeWidth="2" fill="none"/>
          <path d="M40 150 Q30 185 25 215" stroke="#87CEEB" strokeWidth="12" strokeLinecap="round"/>
          <path d="M60 150 Q70 185 75 215" stroke="#87CEEB" strokeWidth="12" strokeLinecap="round"/>
          <ellipse cx="23" cy="220" rx="10" ry="6" fill="#FF0080"/>
          <ellipse cx="77" cy="220" rx="10" ry="6" fill="#FF0080"/>
          <rect x="60" y="105" width="25" height="35" rx="6" fill="#FF0080"/>
          <path d="M55 105 L55 85 Q72 80 85 85 L85 105" stroke="#FF0080" strokeWidth="4"/>
          <rect x="55" y="95" width="15" height="8" rx="2" fill="#1E40AF"/>
        </g>

        {/* Student 3 - Blue shirt guy with book */}
        <g transform="translate(250, 5)">
          <rect x="35" y="110" width="30" height="45" rx="4" fill="#0085FF"/>
          <path d="M32 130 Q10 105 18 80" stroke="#FFCCAA" strokeWidth="10" strokeLinecap="round"/>
          <path d="M68 130 Q90 105 82 80" stroke="#FFCCAA" strokeWidth="10" strokeLinecap="round"/>
          <circle cx="18" cy="75" r="8" fill="#FFCCAA"/>
          <circle cx="82" cy="75" r="8" fill="#FFCCAA"/>
          <rect x="75" y="65" width="20" height="25" rx="2" fill="#8B4513"/>
          <rect x="77" y="67" width="16" height="21" fill="#FFF"/>
          <circle cx="50" cy="70" r="28" fill="#FFCCAA"/>
          <path d="M25 60 Q30 35 50 30 Q70 35 75 60 Q65 50 50 48 Q35 50 25 60" fill="#4A3728"/>
          <path d="M40 65 Q43 70 46 65" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
          <path d="M54 65 Q57 70 60 65" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 82 Q50 92 60 82" stroke="#121212" strokeWidth="2" fill="none"/>
          <path d="M40 155 Q30 190 28 220" stroke="#8B6914" strokeWidth="12" strokeLinecap="round"/>
          <path d="M60 155 Q70 190 72 220" stroke="#8B6914" strokeWidth="12" strokeLinecap="round"/>
          <ellipse cx="26" cy="225" rx="10" ry="6" fill="#FF0080"/>
          <ellipse cx="74" cy="225" rx="10" ry="6" fill="#FF0080"/>
          <rect x="55" y="110" width="25" height="40" rx="6" fill="#0085FF"/>
          <path d="M55 115 L55 95 Q72 90 80 95 L80 115" stroke="#0085FF" strokeWidth="4"/>
        </g>

        {/* Student 4 - Girl with long hair */}
        <g transform="translate(350, 15)">
          <rect x="35" y="105" width="30" height="45" rx="4" fill="#FF0080"/>
          <path d="M35 125 Q20 100 25 80" stroke="#FFCCAA" strokeWidth="10" strokeLinecap="round"/>
          <path d="M65 125 Q80 100 75 80" stroke="#FFCCAA" strokeWidth="10" strokeLinecap="round"/>
          <circle cx="25" cy="75" r="8" fill="#FFCCAA"/>
          <circle cx="75" cy="75" r="8" fill="#FFCCAA"/>
          <circle cx="50" cy="60" r="28" fill="#FFCCAA"/>
          <path d="M22 50 Q25 25 50 20 Q75 25 78 50" fill="#D97706"/>
          <path d="M22 50 Q15 80 20 110" stroke="#D97706" strokeWidth="10" strokeLinecap="round"/>
          <path d="M78 50 Q85 80 80 110" stroke="#D97706" strokeWidth="10" strokeLinecap="round"/>
          <path d="M40 55 Q43 60 46 55" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
          <path d="M54 55 Q57 60 60 55" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 72 Q50 82 60 72" stroke="#121212" strokeWidth="2" fill="none"/>
          <path d="M40 150 Q30 180 25 210" stroke="#1E40AF" strokeWidth="12" strokeLinecap="round"/>
          <path d="M60 150 Q70 180 75 210" stroke="#1E40AF" strokeWidth="12" strokeLinecap="round"/>
          <ellipse cx="23" cy="215" rx="10" ry="6" fill="#FF0080"/>
          <ellipse cx="77" cy="215" rx="10" ry="6" fill="#FF0080"/>
          <rect x="55" y="100" width="22" height="30" rx="5" fill="#FF8C00"/>
          <path d="M55 105 L55 90 Q66 85 77 90 L77 105" stroke="#FF8C00" strokeWidth="4"/>
        </g>
      </svg>
    );
  }

  // Default: duo - two students jumping
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background clouds */}
      <ellipse cx="50" cy="50" rx="30" ry="15" fill="#E2E8F0" opacity="0.5"/>
      <ellipse cx="350" cy="80" rx="35" ry="18" fill="#E2E8F0" opacity="0.5"/>
      <ellipse cx="320" cy="70" rx="25" ry="12" fill="#E2E8F0" opacity="0.3"/>

      {/* Shadows */}
      <ellipse cx="120" cy="280" rx="35" ry="10" fill="#121212" opacity="0.15"/>
      <ellipse cx="280" cy="280" rx="35" ry="10" fill="#121212" opacity="0.15"/>

      {/* Student 1 - Boy with messenger bag */}
      <g transform="translate(50, 30)">
        {/* Body/Shirt */}
        <rect x="55" y="100" width="40" height="55" rx="5" fill="#FFFFFF" stroke="#121212" strokeWidth="2"/>

        {/* Arms up celebrating */}
        <path d="M50 115 Q30 85 35 55" stroke="#FFCCAA" strokeWidth="14" strokeLinecap="round"/>
        <path d="M100 115 Q120 85 115 55" stroke="#FFCCAA" strokeWidth="14" strokeLinecap="round"/>

        {/* Hands */}
        <circle cx="35" cy="50" r="12" fill="#FFCCAA"/>
        <circle cx="115" cy="50" r="12" fill="#FFCCAA"/>

        {/* Head */}
        <circle cx="75" cy="60" r="38" fill="#FFCCAA"/>

        {/* Curly hair */}
        <circle cx="45" cy="40" r="12" fill="#1E3A5F"/>
        <circle cx="60" cy="30" r="14" fill="#1E3A5F"/>
        <circle cx="80" cy="25" r="15" fill="#1E3A5F"/>
        <circle cx="100" cy="30" r="13" fill="#1E3A5F"/>
        <circle cx="105" cy="45" r="10" fill="#1E3A5F"/>

        {/* Happy closed eyes */}
        <path d="M60 55 Q67 62 74 55" stroke="#121212" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M80 55 Q87 62 94 55" stroke="#121212" strokeWidth="3" strokeLinecap="round" fill="none"/>

        {/* Big smile */}
        <path d="M58 75 Q75 95 92 75" stroke="#121212" strokeWidth="3" strokeLinecap="round" fill="none"/>

        {/* Messenger bag strap */}
        <path d="M50 100 L100 155" stroke="#00E58D" strokeWidth="8"/>

        {/* Messenger bag */}
        <rect x="85" y="130" width="45" height="35" rx="8" fill="#00E58D" stroke="#121212" strokeWidth="2"/>
        <rect x="92" y="137" width="30" height="12" rx="4" fill="#00B872"/>

        {/* Pants/Legs - one bent, one straight (jumping pose) */}
        <path d="M62 155 Q50 195 55 235" stroke="#6B7280" strokeWidth="16" strokeLinecap="round"/>
        <path d="M88 155 Q100 185 90 210 Q85 225 95 235" stroke="#6B7280" strokeWidth="16" strokeLinecap="round"/>

        {/* Shoes */}
        <ellipse cx="55" cy="242" rx="15" ry="8" fill="#FF6B6B"/>
        <path d="M45 242 L50 235" stroke="#FFF" strokeWidth="2"/>
        <ellipse cx="98" cy="242" rx="15" ry="8" fill="#FF6B6B"/>
        <path d="M88 242 L93 235" stroke="#FFF" strokeWidth="2"/>
      </g>

      {/* Student 2 - Girl with backpack */}
      <g transform="translate(190, 25)">
        {/* Body/Shirt */}
        <rect x="55" y="105" width="40" height="55" rx="5" fill="#1E3A5F"/>

        {/* Arms up celebrating */}
        <path d="M50 120 Q25 90 30 55" stroke="#FFCCAA" strokeWidth="14" strokeLinecap="round"/>
        <path d="M100 120 Q125 90 120 55" stroke="#FFCCAA" strokeWidth="14" strokeLinecap="round"/>

        {/* Hands */}
        <circle cx="30" cy="50" r="12" fill="#FFCCAA"/>
        <circle cx="120" cy="50" r="12" fill="#FFCCAA"/>

        {/* Head */}
        <circle cx="75" cy="65" r="38" fill="#FFCCAA"/>

        {/* Hair - ponytail style */}
        <path d="M37 55 Q40 25 75 18 Q110 25 113 55" fill="#FF6B8A"/>
        <path d="M110 45 Q130 35 125 60 Q135 80 120 75" fill="#FF6B8A"/>

        {/* Happy closed eyes */}
        <path d="M58 60 Q65 67 72 60" stroke="#121212" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M82 60 Q89 67 96 60" stroke="#121212" strokeWidth="3" strokeLinecap="round" fill="none"/>

        {/* Big smile */}
        <path d="M58 82 Q75 100 92 82" stroke="#121212" strokeWidth="3" strokeLinecap="round" fill="none"/>

        {/* Backpack straps */}
        <path d="M55 105 L55 85 Q55 75 65 75" stroke="#FFF" strokeWidth="6"/>
        <path d="M95 105 L95 85 Q95 75 85 75" stroke="#FFF" strokeWidth="6"/>

        {/* Backpack */}
        <rect x="50" y="120" width="50" height="45" rx="10" fill="#FFF" stroke="#121212" strokeWidth="2"/>
        <rect x="60" y="130" width="30" height="15" rx="4" fill="#E2E8F0"/>

        {/* Skirt */}
        <path d="M55 160 L45 200 L105 200 L95 160" fill="#00E58D"/>

        {/* Legs */}
        <path d="M60 200 Q50 230 55 250" stroke="#FFCCAA" strokeWidth="14" strokeLinecap="round"/>
        <path d="M90 200 Q100 225 95 245 Q90 255 100 260" stroke="#FFCCAA" strokeWidth="14" strokeLinecap="round"/>

        {/* Shoes */}
        <ellipse cx="55" cy="257" rx="15" ry="8" fill="#1E3A5F"/>
        <path d="M45 257 L55 250" stroke="#FFF" strokeWidth="2"/>
        <ellipse cx="103" cy="265" rx="15" ry="8" fill="#1E3A5F"/>
        <path d="M93 265 L103 258" stroke="#FFF" strokeWidth="2"/>
      </g>
    </svg>
  );
};

// Celebration/Success illustration for quiz completion
export const CelebrationIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Confetti */}
    <rect x="30" y="20" width="12" height="12" fill="#FFE600" transform="rotate(15 30 20)"/>
    <rect x="80" y="40" width="10" height="10" fill="#FF0080" transform="rotate(-20 80 40)"/>
    <rect x="220" y="30" width="14" height="14" fill="#00E58D" transform="rotate(25 220 30)"/>
    <rect x="260" y="60" width="10" height="10" fill="#0085FF" transform="rotate(-15 260 60)"/>
    <rect x="50" y="80" width="8" height="8" fill="#9D00FF" transform="rotate(30 50 80)"/>
    <rect x="250" y="100" width="12" height="12" fill="#FFE600" transform="rotate(-25 250 100)"/>

    {/* Stars */}
    <path d="M45 50 L48 58 L56 58 L50 63 L52 71 L45 66 L38 71 L40 63 L34 58 L42 58 Z" fill="#FFE600"/>
    <path d="M255 45 L257 51 L263 51 L258 55 L260 61 L255 57 L250 61 L252 55 L247 51 L253 51 Z" fill="#FF0080"/>

    {/* Trophy */}
    <g transform="translate(100, 60)">
      {/* Trophy cup */}
      <path d="M30 20 L30 80 Q30 100 50 100 Q70 100 70 80 L70 20" fill="#FFE600" stroke="#121212" strokeWidth="3"/>
      {/* Trophy handles */}
      <path d="M30 30 Q10 30 10 50 Q10 70 30 70" stroke="#FFE600" strokeWidth="8" fill="none"/>
      <path d="M30 30 Q10 30 10 50 Q10 70 30 70" stroke="#121212" strokeWidth="3" fill="none"/>
      <path d="M70 30 Q90 30 90 50 Q90 70 70 70" stroke="#FFE600" strokeWidth="8" fill="none"/>
      <path d="M70 30 Q90 30 90 50 Q90 70 70 70" stroke="#121212" strokeWidth="3" fill="none"/>
      {/* Trophy base */}
      <rect x="35" y="100" width="30" height="15" fill="#FFE600" stroke="#121212" strokeWidth="3"/>
      <rect x="25" y="115" width="50" height="12" rx="3" fill="#FFE600" stroke="#121212" strokeWidth="3"/>
      {/* Star on trophy */}
      <path d="M50 45 L53 55 L63 55 L55 62 L58 72 L50 65 L42 72 L45 62 L37 55 L47 55 Z" fill="#FFF"/>
      {/* #1 */}
      <text x="50" y="90" textAnchor="middle" fill="#121212" fontWeight="bold" fontSize="16">#1</text>
    </g>

    {/* Sparkles around trophy */}
    <circle cx="80" cy="90" r="4" fill="#00E58D"/>
    <circle cx="220" cy="85" r="5" fill="#FF0080"/>
    <circle cx="95" cy="140" r="3" fill="#0085FF"/>
    <circle cx="205" cy="150" r="4" fill="#9D00FF"/>
  </svg>
);

// Study/Book illustration for features
export const StudyIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stack of books */}
    <rect x="30" y="120" width="100" height="20" rx="3" fill="#0085FF" stroke="#121212" strokeWidth="2"/>
    <rect x="35" y="100" width="95" height="20" rx="3" fill="#FF0080" stroke="#121212" strokeWidth="2"/>
    <rect x="32" y="80" width="98" height="20" rx="3" fill="#00E58D" stroke="#121212" strokeWidth="2"/>
    <rect x="38" y="60" width="90" height="20" rx="3" fill="#FFE600" stroke="#121212" strokeWidth="2"/>

    {/* Open book on top */}
    <g transform="translate(100, 30)">
      <path d="M50 30 Q25 25 0 35 L0 85 Q25 75 50 80" fill="#FFF" stroke="#121212" strokeWidth="2"/>
      <path d="M50 30 Q75 25 100 35 L100 85 Q75 75 50 80" fill="#FFF" stroke="#121212" strokeWidth="2"/>
      {/* Book lines */}
      <line x1="10" y1="45" x2="40" y2="42" stroke="#E2E8F0" strokeWidth="2"/>
      <line x1="10" y1="55" x2="40" y2="52" stroke="#E2E8F0" strokeWidth="2"/>
      <line x1="10" y1="65" x2="35" y2="62" stroke="#E2E8F0" strokeWidth="2"/>
      <line x1="60" y1="42" x2="90" y2="45" stroke="#E2E8F0" strokeWidth="2"/>
      <line x1="60" y1="52" x2="90" y2="55" stroke="#E2E8F0" strokeWidth="2"/>
      <line x1="65" y1="62" x2="90" y2="65" stroke="#E2E8F0" strokeWidth="2"/>
    </g>

    {/* Floating elements */}
    <circle cx="170" cy="50" r="8" fill="#FFE600"/>
    <path d="M25 50 L28 58 L36 58 L30 63 L32 71 L25 66 L18 71 L20 63 L14 58 L22 58 Z" fill="#FF0080"/>
    <rect x="160" y="130" width="15" height="15" rx="3" fill="#00E58D" transform="rotate(15 167 137)"/>
  </svg>
);

// Brain/AI illustration
export const AIBrainIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Brain outline */}
    <path d="M100 30 Q140 30 155 60 Q170 90 155 120 Q165 140 150 160 Q130 180 100 175 Q70 180 50 160 Q35 140 45 120 Q30 90 45 60 Q60 30 100 30" fill="#FF0080" opacity="0.2" stroke="#FF0080" strokeWidth="3"/>

    {/* Brain details */}
    <path d="M100 50 Q80 70 100 90 Q120 70 100 50" stroke="#FF0080" strokeWidth="2" fill="none"/>
    <path d="M70 80 Q90 100 70 120" stroke="#FF0080" strokeWidth="2" fill="none"/>
    <path d="M130 80 Q110 100 130 120" stroke="#FF0080" strokeWidth="2" fill="none"/>
    <path d="M85 130 Q100 150 115 130" stroke="#FF0080" strokeWidth="2" fill="none"/>

    {/* Neural network dots */}
    <circle cx="100" cy="70" r="6" fill="#0085FF"/>
    <circle cx="70" cy="100" r="5" fill="#00E58D"/>
    <circle cx="130" cy="100" r="5" fill="#FFE600"/>
    <circle cx="85" cy="140" r="4" fill="#9D00FF"/>
    <circle cx="115" cy="140" r="4" fill="#FF0080"/>

    {/* Connection lines */}
    <line x1="100" y1="70" x2="70" y2="100" stroke="#0085FF" strokeWidth="2" opacity="0.5"/>
    <line x1="100" y1="70" x2="130" y2="100" stroke="#0085FF" strokeWidth="2" opacity="0.5"/>
    <line x1="70" y1="100" x2="85" y2="140" stroke="#00E58D" strokeWidth="2" opacity="0.5"/>
    <line x1="130" y1="100" x2="115" y2="140" stroke="#FFE600" strokeWidth="2" opacity="0.5"/>

    {/* Sparkles */}
    <path d="M45 40 L48 48 L56 48 L50 53 L52 61 L45 56 L38 61 L40 53 L34 48 L42 48 Z" fill="#FFE600"/>
    <path d="M155 45 L157 51 L163 51 L158 55 L160 61 L155 57 L150 61 L152 55 L147 51 L153 51 Z" fill="#00E58D"/>
    <circle cx="160" cy="140" r="4" fill="#0085FF"/>
    <circle cx="40" cy="145" r="3" fill="#FF0080"/>
  </svg>
);

// Badge/Achievement illustration
export const BadgeIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 150 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ribbon tails */}
    <path d="M45 120 L35 170 L55 150 L75 170 L65 120" fill="#FF0080"/>
    <path d="M85 120 L75 170 L95 150 L115 170 L105 120" fill="#FF0080"/>

    {/* Badge circle */}
    <circle cx="75" cy="75" r="55" fill="#FFE600" stroke="#121212" strokeWidth="4"/>
    <circle cx="75" cy="75" r="45" fill="#FFF" stroke="#121212" strokeWidth="2"/>

    {/* Star in center */}
    <path d="M75 35 L82 55 L103 55 L86 68 L93 88 L75 75 L57 88 L64 68 L47 55 L68 55 Z" fill="#FFE600" stroke="#121212" strokeWidth="2"/>

    {/* Decorative dots */}
    <circle cx="75" cy="115" r="4" fill="#121212"/>
    <circle cx="60" cy="110" r="3" fill="#121212"/>
    <circle cx="90" cy="110" r="3" fill="#121212"/>
  </svg>
);

// Exam category icons
export const ExamIcon = ({ type, className = "" }: { type: 'ras' | 'ias' | 'reet' | 'patwar', className?: string }) => {
  const icons = {
    ras: (
      <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rajasthan fort/palace icon */}
        <rect x="15" y="50" width="50" height="25" fill="currentColor" opacity="0.2"/>
        <rect x="20" y="35" width="15" height="40" fill="currentColor"/>
        <rect x="45" y="35" width="15" height="40" fill="currentColor"/>
        <rect x="30" y="45" width="20" height="30" fill="currentColor"/>
        {/* Domes */}
        <ellipse cx="27" cy="35" rx="8" ry="10" fill="currentColor"/>
        <ellipse cx="52" cy="35" rx="8" ry="10" fill="currentColor"/>
        <ellipse cx="40" cy="40" rx="12" ry="15" fill="currentColor"/>
        {/* Flag */}
        <line x1="40" y1="25" x2="40" y2="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M40 10 L55 15 L40 20" fill="currentColor"/>
      </svg>
    ),
    ias: (
      <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Government building with pillars */}
        <rect x="10" y="60" width="60" height="10" fill="currentColor"/>
        <rect x="10" y="20" width="60" height="8" fill="currentColor"/>
        {/* Triangle roof */}
        <path d="M5 20 L40 5 L75 20" fill="currentColor"/>
        {/* Pillars */}
        <rect x="18" y="28" width="8" height="32" fill="currentColor"/>
        <rect x="36" y="28" width="8" height="32" fill="currentColor"/>
        <rect x="54" y="28" width="8" height="32" fill="currentColor"/>
        {/* Emblem circle */}
        <circle cx="40" cy="13" r="5" fill="currentColor"/>
      </svg>
    ),
    reet: (
      <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Graduation cap */}
        <path d="M10 35 L40 20 L70 35 L40 50 Z" fill="currentColor"/>
        <rect x="35" y="35" width="10" height="25" fill="currentColor"/>
        <ellipse cx="40" cy="60" rx="20" ry="8" fill="currentColor"/>
        {/* Tassel */}
        <path d="M65 35 L70 35 L70 55" stroke="currentColor" strokeWidth="3"/>
        <circle cx="70" cy="58" r="4" fill="currentColor"/>
        {/* Book underneath */}
        <rect x="25" y="65" width="30" height="8" rx="2" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    patwar: (
      <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Document/File icon */}
        <path d="M20 10 L50 10 L60 20 L60 70 L20 70 Z" fill="currentColor" opacity="0.2"/>
        <path d="M20 10 L50 10 L60 20 L60 70 L20 70 Z" stroke="currentColor" strokeWidth="3" fill="none"/>
        {/* Folded corner */}
        <path d="M50 10 L50 20 L60 20" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.3"/>
        {/* Lines on document */}
        <line x1="28" y1="30" x2="52" y2="30" stroke="currentColor" strokeWidth="2"/>
        <line x1="28" y1="40" x2="52" y2="40" stroke="currentColor" strokeWidth="2"/>
        <line x1="28" y1="50" x2="45" y2="50" stroke="currentColor" strokeWidth="2"/>
        {/* Checkmark */}
        <path d="M35 55 L40 62 L55 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>
    )
  };

  return icons[type] || null;
};

// Subject icons for selection cards
export const SubjectIcon = ({ type, className = "" }: { type: string, className?: string }) => {
  if (type.includes('history')) {
    return (
      <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="20" width="30" height="35" rx="2" fill="#FFE600"/>
        <rect x="18" y="23" width="24" height="5" fill="#FFF"/>
        <line x1="20" y1="32" x2="40" y2="32" stroke="#121212" strokeWidth="1"/>
        <line x1="20" y1="37" x2="38" y2="37" stroke="#121212" strokeWidth="1"/>
        <line x1="20" y1="42" x2="35" y2="42" stroke="#121212" strokeWidth="1"/>
        <circle cx="42" cy="18" r="10" fill="#FF0080"/>
        <text x="42" y="22" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="bold">!</text>
      </svg>
    );
  }
  if (type.includes('geography')) {
    return (
      <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="22" fill="#0085FF" stroke="#121212" strokeWidth="2"/>
        <ellipse cx="30" cy="30" rx="22" ry="10" stroke="#00E58D" strokeWidth="2" fill="none"/>
        <path d="M30 8 L30 52" stroke="#00E58D" strokeWidth="2"/>
        <path d="M20 12 Q10 30 20 48" stroke="#FFE600" strokeWidth="2" fill="none"/>
        <path d="M40 12 Q50 30 40 48" stroke="#FFE600" strokeWidth="2" fill="none"/>
      </svg>
    );
  }
  if (type.includes('polity') || type.includes('political')) {
    return (
      <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="40" width="40" height="12" fill="#00E58D"/>
        <rect x="18" y="20" width="6" height="20" fill="#0085FF"/>
        <rect x="27" y="20" width="6" height="20" fill="#0085FF"/>
        <rect x="36" y="20" width="6" height="20" fill="#0085FF"/>
        <path d="M8 20 L30 8 L52 20" fill="#FFE600" stroke="#121212" strokeWidth="2"/>
        <circle cx="30" cy="15" r="3" fill="#FF0080"/>
      </svg>
    );
  }
  // Default book icon
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 15 Q15 10 5 18 L5 50 Q15 42 30 47" fill="#0085FF"/>
      <path d="M30 15 Q45 10 55 18 L55 50 Q45 42 30 47" fill="#00E58D"/>
      <line x1="30" y1="15" x2="30" y2="47" stroke="#121212" strokeWidth="2"/>
    </svg>
  );
};

// Minimalistic student studying illustration (earth tones)
export const StudentStudyingIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Desk */}
    <rect x="15" y="75" width="90" height="8" rx="2" fill="#B5836E"/>
    <rect x="20" y="83" width="8" height="25" fill="#8B8178"/>
    <rect x="92" y="83" width="8" height="25" fill="#8B8178"/>

    {/* Book on desk */}
    <path d="M35 70 Q35 65 45 65 L75 65 Q85 65 85 70 L85 75 L35 75 Z" fill="#E8DCC4"/>
    <line x1="60" y1="65" x2="60" y2="75" stroke="#8B8178" strokeWidth="1"/>

    {/* Student body */}
    <ellipse cx="60" cy="55" rx="18" ry="20" fill="#7D8E6E"/>

    {/* Head */}
    <circle cx="60" cy="32" r="16" fill="#D4A574"/>

    {/* Hair */}
    <path d="M44 28 Q45 18 60 15 Q75 18 76 28 Q72 22 60 20 Q48 22 44 28" fill="#4A3728"/>

    {/* Eyes looking down at book */}
    <ellipse cx="54" cy="34" rx="2" ry="1.5" fill="#121212"/>
    <ellipse cx="66" cy="34" rx="2" ry="1.5" fill="#121212"/>

    {/* Small smile */}
    <path d="M56 40 Q60 43 64 40" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

    {/* Arms on desk */}
    <path d="M42 55 Q30 60 35 72" stroke="#D4A574" strokeWidth="8" strokeLinecap="round"/>
    <path d="M78 55 Q90 60 85 72" stroke="#D4A574" strokeWidth="8" strokeLinecap="round"/>

    {/* Coffee cup */}
    <rect x="88" y="68" width="8" height="7" rx="1" fill="#C4785B"/>
    <path d="M96 70 Q100 70 100 73 Q100 75 96 75" stroke="#C4785B" strokeWidth="2" fill="none"/>

    {/* Steam from coffee */}
    <path d="M90 65 Q92 62 90 60" stroke="#8B8178" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5"/>
    <path d="M93 66 Q95 63 93 61" stroke="#8B8178" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5"/>
  </svg>
);

// Student taking quiz/exam illustration
export const StudentQuizIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Paper/Quiz sheet */}
    <rect x="30" y="40" width="60" height="75" rx="3" fill="#F5F0E6" stroke="#8B8178" strokeWidth="1"/>

    {/* Quiz lines */}
    <line x1="38" y1="52" x2="82" y2="52" stroke="#E8DCC4" strokeWidth="2"/>
    <line x1="38" y1="62" x2="78" y2="62" stroke="#E8DCC4" strokeWidth="2"/>
    <line x1="38" y1="72" x2="75" y2="72" stroke="#E8DCC4" strokeWidth="2"/>
    <line x1="38" y1="82" x2="70" y2="82" stroke="#E8DCC4" strokeWidth="2"/>

    {/* Checkboxes */}
    <rect x="38" y="90" width="8" height="8" rx="1" stroke="#7D8E6E" strokeWidth="1.5" fill="none"/>
    <rect x="52" y="90" width="8" height="8" rx="1" stroke="#7D8E6E" strokeWidth="1.5" fill="none"/>
    <rect x="66" y="90" width="8" height="8" rx="1" stroke="#7D8E6E" strokeWidth="1.5" fill="none"/>

    {/* Checkmark in first box */}
    <path d="M40 94 L43 97 L46 91" stroke="#7D8E6E" strokeWidth="2" strokeLinecap="round" fill="none"/>

    {/* Student head peeking */}
    <circle cx="60" cy="25" r="18" fill="#D4A574"/>

    {/* Hair */}
    <path d="M42 20 Q45 8 60 5 Q75 8 78 20 Q70 14 60 12 Q50 14 42 20" fill="#4A3728"/>

    {/* Focused eyes */}
    <circle cx="54" cy="26" r="2.5" fill="#121212"/>
    <circle cx="66" cy="26" r="2.5" fill="#121212"/>
    <circle cx="55" cy="25" r="1" fill="#FFF"/>
    <circle cx="67" cy="25" r="1" fill="#FFF"/>

    {/* Thinking expression */}
    <path d="M56 33 L64 33" stroke="#121212" strokeWidth="1.5" strokeLinecap="round"/>

    {/* Pencil in hand */}
    <rect x="78" y="55" width="4" height="25" rx="1" fill="#D4915D" transform="rotate(15 80 67)"/>
    <polygon points="78,80 80,85 82,80" fill="#D4A574" transform="rotate(15 80 82)"/>
  </svg>
);

// IAS/Government officer aspiration illustration
export const OfficerIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Building silhouette in background */}
    <rect x="20" y="70" width="80" height="40" fill="#E8DCC4" opacity="0.5"/>
    <rect x="35" y="55" width="15" height="55" fill="#E8DCC4" opacity="0.7"/>
    <rect x="70" y="55" width="15" height="55" fill="#E8DCC4" opacity="0.7"/>
    <path d="M25 70 L60 45 L95 70" fill="#E8DCC4" opacity="0.7"/>

    {/* Person in formal attire */}
    <rect x="45" y="65" width="30" height="40" rx="2" fill="#4A5D4B"/>

    {/* Tie */}
    <path d="M60 65 L57 75 L60 105 L63 75 Z" fill="#C4785B"/>

    {/* Head */}
    <circle cx="60" cy="50" r="18" fill="#D4A574"/>

    {/* Hair - neat/professional */}
    <path d="M42 45 Q45 32 60 30 Q75 32 78 45 Q72 38 60 36 Q48 38 42 45" fill="#2D2D2D"/>

    {/* Confident eyes */}
    <ellipse cx="54" cy="50" rx="2.5" ry="2" fill="#121212"/>
    <ellipse cx="66" cy="50" rx="2.5" ry="2" fill="#121212"/>

    {/* Confident smile */}
    <path d="M54 58 Q60 62 66 58" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

    {/* Shoulders */}
    <path d="M45 65 Q35 70 30 85" stroke="#4A5D4B" strokeWidth="12" strokeLinecap="round"/>
    <path d="M75 65 Q85 70 90 85" stroke="#4A5D4B" strokeWidth="12" strokeLinecap="round"/>

    {/* Small badge/emblem */}
    <circle cx="50" cy="75" r="4" fill="#D4915D"/>
    <circle cx="50" cy="75" r="2" fill="#F5F0E6"/>
  </svg>
);

// Teacher/REET illustration
export const TeacherIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Blackboard */}
    <rect x="15" y="20" width="90" height="60" rx="3" fill="#4A5D4B"/>
    <rect x="20" y="25" width="80" height="50" fill="#3D4F3E"/>

    {/* Chalk writing */}
    <text x="30" y="45" fill="#F5F0E6" fontSize="12" fontFamily="serif">ABC</text>
    <text x="30" y="60" fill="#F5F0E6" fontSize="10" fontFamily="serif">1+1=2</text>

    {/* Teacher body */}
    <ellipse cx="85" cy="95" rx="15" ry="18" fill="#9CAF88"/>

    {/* Head */}
    <circle cx="85" cy="72" r="14" fill="#D4A574"/>

    {/* Hair in bun */}
    <circle cx="85" cy="60" r="8" fill="#4A3728"/>
    <path d="M71 68 Q73 58 85 55 Q97 58 99 68" fill="#4A3728"/>

    {/* Glasses */}
    <circle cx="80" cy="72" r="5" stroke="#8B8178" strokeWidth="1.5" fill="none"/>
    <circle cx="90" cy="72" r="5" stroke="#8B8178" strokeWidth="1.5" fill="none"/>
    <line x1="85" y1="72" x2="85" y2="72" stroke="#8B8178" strokeWidth="1.5"/>

    {/* Eyes behind glasses */}
    <circle cx="80" cy="72" r="1.5" fill="#121212"/>
    <circle cx="90" cy="72" r="1.5" fill="#121212"/>

    {/* Warm smile */}
    <path d="M82 78 Q85 81 88 78" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

    {/* Arm pointing */}
    <path d="M75 88 Q55 75 45 65" stroke="#D4A574" strokeWidth="6" strokeLinecap="round"/>

    {/* Pointer/chalk */}
    <line x1="45" y1="65" x2="35" y2="55" stroke="#F5F0E6" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// Document/Patwar clerk illustration
export const ClerkIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stack of documents */}
    <rect x="55" y="60" width="45" height="50" rx="2" fill="#E8DCC4" stroke="#8B8178" strokeWidth="1"/>
    <rect x="58" y="55" width="45" height="50" rx="2" fill="#F5F0E6" stroke="#8B8178" strokeWidth="1"/>
    <rect x="61" y="50" width="45" height="50" rx="2" fill="#FFF" stroke="#8B8178" strokeWidth="1"/>

    {/* Document lines */}
    <line x1="68" y1="60" x2="98" y2="60" stroke="#E8DCC4" strokeWidth="2"/>
    <line x1="68" y1="68" x2="95" y2="68" stroke="#E8DCC4" strokeWidth="2"/>
    <line x1="68" y1="76" x2="90" y2="76" stroke="#E8DCC4" strokeWidth="2"/>

    {/* Stamp */}
    <circle cx="85" cy="88" r="8" fill="none" stroke="#C4785B" strokeWidth="2"/>
    <text x="85" y="91" textAnchor="middle" fill="#C4785B" fontSize="6" fontWeight="bold">OK</text>

    {/* Person */}
    <ellipse cx="35" cy="85" rx="18" ry="22" fill="#7D8E6E"/>

    {/* Head */}
    <circle cx="35" cy="55" r="16" fill="#D4A574"/>

    {/* Hair */}
    <path d="M19 50 Q22 38 35 35 Q48 38 51 50 Q45 44 35 42 Q25 44 19 50" fill="#4A3728"/>

    {/* Eyes */}
    <ellipse cx="30" cy="55" rx="2" ry="1.5" fill="#121212"/>
    <ellipse cx="40" cy="55" rx="2" ry="1.5" fill="#121212"/>

    {/* Focused expression */}
    <path d="M32 62 Q35 64 38 62" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

    {/* Arm holding pen */}
    <path d="M50 80 Q60 70 70 65" stroke="#D4A574" strokeWidth="6" strokeLinecap="round"/>

    {/* Pen */}
    <rect x="68" y="60" width="3" height="15" rx="1" fill="#4A5D4B" transform="rotate(-30 70 67)"/>
  </svg>
);

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