const CrestedCrane = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 80 60" 
      className={className}
      role="img"
      aria-label="Crested Crane - Uganda National Bird"
      style={{ transform: 'scaleX(-1)' }}
    >
      <defs>
        <linearGradient id="craneBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#2D2D2D" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD100" />
          <stop offset="50%" stopColor="#FFC000" />
          <stop offset="100%" stopColor="#FFD100" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Wing animation group */}
      <g className="animate-[wingFlap_0.8s_ease-in-out_infinite]" style={{ transformOrigin: '35px 28px' }}>
        {/* Upper wing */}
        <path 
          d="M18,22 Q25,8 45,12 Q55,14 58,18 Q50,16 40,18 Q30,20 25,25 Z" 
          fill="url(#craneBodyGradient)"
          stroke="#1A1A1A"
          strokeWidth="0.5"
        />
        {/* Wing feathers detail */}
        <path d="M22,20 Q28,14 38,15" stroke="#3D3D3D" strokeWidth="0.8" fill="none" opacity="0.6"/>
        <path d="M20,22 Q26,17 35,18" stroke="#3D3D3D" strokeWidth="0.6" fill="none" opacity="0.5"/>
      </g>
      
      {/* Body */}
      <ellipse 
        cx="35" 
        cy="32" 
        rx="14" 
        ry="8" 
        fill="url(#craneBodyGradient)"
        stroke="#1A1A1A"
        strokeWidth="0.5"
      />
      
      {/* White neck patch */}
      <path 
        d="M26,28 Q22,22 20,14 Q21,16 24,20 Q26,24 27,28 Z" 
        fill="#FFFFFF"
        opacity="0.9"
      />
      
      {/* Neck */}
      <path 
        d="M28,28 Q22,20 18,10 Q17,8 18,6" 
        stroke="#2D2D2D" 
        strokeWidth="4" 
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Head */}
      <circle cx="18" cy="6" r="5" fill="#2D2D2D" />
      
      {/* Red face patch - larger for visibility */}
      <ellipse cx="16" cy="6" rx="3" ry="2.8" fill="#D21034" />
      
      {/* White cheek */}
      <circle cx="15" cy="5" r="1.2" fill="#FFFFFF" opacity="0.8" />
      
      {/* Crown/Crest - Golden bristles */}
      <g filter="url(#glow)">
        <path d="M17,2 L18,-2 L19,2" stroke="url(#crownGradient)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M15,2 L14,-1 L16,2" stroke="url(#crownGradient)" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <path d="M19,2 L21,-1 L20,2" stroke="url(#crownGradient)" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <path d="M16,1.5 L15,-0.5" stroke="url(#crownGradient)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <path d="M20,1.5 L21,0" stroke="url(#crownGradient)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <circle cx="18" cy="-1" r="1" fill="#FFD100" />
        <circle cx="15" cy="0" r="0.6" fill="#FFD100" />
        <circle cx="21" cy="0" r="0.6" fill="#FFD100" />
      </g>
      
      {/* Beak */}
      <path 
        d="M13,6 L8,5.5 L13,5" 
        fill="#8D8D8D" 
        stroke="#666666"
        strokeWidth="0.3"
      />
      
      {/* Eye */}
      <circle cx="16" cy="5" r="0.8" fill="#1A1A1A" />
      <circle cx="16.2" cy="4.8" r="0.3" fill="#FFFFFF" />
      
      {/* Tail feathers */}
      <g>
        <path d="M48,30 Q58,28 62,32" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M48,32 Q56,32 60,35" stroke="#2D2D2D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M48,34 Q54,36 58,38" stroke="#3D3D3D" strokeWidth="1" fill="none" strokeLinecap="round"/>
      </g>
      
      {/* Legs - extended in flight */}
      <g>
        <path d="M40,38 Q48,48 58,52" stroke="#8D8D8D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M38,38 Q44,46 52,50" stroke="#8D8D8D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Feet */}
        <path d="M58,52 L60,54 M58,52 L59,55 M58,52 L57,54" stroke="#8D8D8D" strokeWidth="0.8" fill="none"/>
        <path d="M52,50 L54,52 M52,50 L53,53 M52,50 L51,52" stroke="#8D8D8D" strokeWidth="0.8" fill="none"/>
      </g>
      
      {/* Lower wing */}
      <g className="animate-[wingFlap_0.8s_ease-in-out_infinite_0.1s]" style={{ transformOrigin: '35px 35px' }}>
        <path 
          d="M22,35 Q18,42 25,52 Q35,55 45,50 Q38,45 32,40 Q26,36 25,34 Z" 
          fill="#3D3D3D"
          stroke="#2D2D2D"
          strokeWidth="0.5"
          opacity="0.9"
        />
        <path d="M25,40 Q28,46 35,50" stroke="#4A4A4A" strokeWidth="0.6" fill="none" opacity="0.5"/>
      </g>
      
      <style>{`
        @keyframes wingFlap {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg); }
        }
      `}</style>
    </svg>
  );
};

export default CrestedCrane;
