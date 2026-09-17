export default function HeroGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 640"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <g fill="none" stroke="var(--ink)" strokeWidth="1">
        <polygon points="120,420 320,300 520,420 320,540" />
        <polygon points="120,420 120,180 320,60 320,300" />
        <polygon points="320,300 320,60 520,180 520,420" />
        <line x1="120" y1="180" x2="320" y2="60" />
        <line x1="320" y1="60" x2="520" y2="180" />
      </g>
      <polygon
        points="320,300 320,60 520,180 520,420"
        fill="var(--accent)"
        opacity="0.16"
      />
      <g stroke="var(--ink)" strokeWidth="0.5" opacity="0.35">
        <line x1="160" y1="240" x2="160" y2="400" />
        <line x1="200" y1="220" x2="200" y2="410" />
        <line x1="240" y1="200" x2="240" y2="420" />
        <line x1="280" y1="180" x2="280" y2="430" />
      </g>
      <g stroke="var(--ink)" strokeWidth="0.6" opacity="0.5">
        <circle cx="320" cy="300" r="3" fill="var(--ink)" />
        <line x1="40" y1="560" x2="540" y2="560" />
        <line x1="40" y1="560" x2="40" y2="548" />
        <line x1="540" y1="560" x2="540" y2="548" />
        <line x1="290" y1="560" x2="290" y2="548" />
      </g>
      <text
        x="40"
        y="595"
        fill="var(--ink)"
        opacity="0.55"
        fontFamily="var(--font-sans)"
        fontSize="12"
        letterSpacing="0.05em"
      >
        A—01 · СТУДИЯ ОБЪЁМОВ
      </text>
    </svg>
  );
}
