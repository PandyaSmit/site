export default function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-logo-svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <circle cx="50" cy="50" r="45" fill="var(--saffron-dim)" opacity="0.5" filter="url(#glow)" />
      <circle cx="50" cy="50" r="45" stroke="var(--saffron)" strokeWidth="2" strokeDasharray="10 10" />

      {/* S */}
      <path
        d="M 50 35 C 38 35 34 40 34 45 C 34 55 58 55 58 65 C 58 70 54 75 42 75 C 32 75 28 68 28 62"
        stroke="var(--text-heading)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* P */}
      <path
        d="M 64 25 L 64 75 M 64 25 C 80 25 84 35 84 40 C 84 45 80 55 64 55"
        stroke="var(--saffron)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
