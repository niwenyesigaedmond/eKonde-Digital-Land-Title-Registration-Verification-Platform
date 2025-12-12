const UgandaFlag = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 48 36" 
      className={className}
      role="img"
      aria-label="Uganda Flag"
    >
      {/* Black stripe */}
      <rect x="0" y="0" width="48" height="6" fill="#000000" />
      {/* Yellow stripe */}
      <rect x="0" y="6" width="48" height="6" fill="#FFD100" />
      {/* Red stripe */}
      <rect x="0" y="12" width="48" height="6" fill="#D21034" />
      {/* Black stripe */}
      <rect x="0" y="18" width="48" height="6" fill="#000000" />
      {/* Yellow stripe */}
      <rect x="0" y="24" width="48" height="6" fill="#FFD100" />
      {/* Red stripe */}
      <rect x="0" y="30" width="48" height="6" fill="#D21034" />
      
      {/* White circle for crane emblem */}
      <circle cx="24" cy="18" r="8" fill="#FFFFFF" />
      
      {/* Simplified Crested Crane - stylized representation */}
      <g transform="translate(24, 18)">
        {/* Crane body */}
        <ellipse cx="0" cy="1" rx="3" ry="2.5" fill="#8D8D8D" />
        {/* Crane neck */}
        <path d="M-1,-1 Q-1.5,-3 -0.5,-4" stroke="#8D8D8D" strokeWidth="1" fill="none" />
        {/* Crane head */}
        <circle cx="-0.5" cy="-4.5" r="1.2" fill="#8D8D8D" />
        {/* Crown/crest */}
        <path d="M-1.5,-5.5 L-0.5,-6.5 L0.5,-5.5" stroke="#FFD100" strokeWidth="0.5" fill="none" />
        {/* Red crown spot */}
        <circle cx="-0.5" cy="-5.5" r="0.5" fill="#D21034" />
        {/* Crane leg */}
        <path d="M0,3 L0.5,5.5" stroke="#8D8D8D" strokeWidth="0.6" fill="none" />
        <path d="M1,3 L1.5,5.5" stroke="#8D8D8D" strokeWidth="0.6" fill="none" />
      </g>
    </svg>
  );
};

export default UgandaFlag;
