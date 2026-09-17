type GraphicProps = {
  className?: string;
};

/** Axonometric massing study — stacked volumes with a single accent plane. */
export function MassingGraphic({ className }: GraphicProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <rect width="400" height="300" fill="var(--milk-deep)" />
      <g fill="none" stroke="var(--ink)" strokeWidth="1">
        <polygon points="70,190 200,140 330,190 200,240" />
        <polygon points="70,190 70,120 200,70 200,140" />
        <polygon points="200,140 200,70 330,120 330,190" />
        <line x1="70" y1="120" x2="200" y2="70" />
        <line x1="200" y1="70" x2="330" y2="120" />
      </g>
      <polygon points="200,140 200,70 330,120 330,190" fill="var(--accent)" opacity="0.18" />
      <g stroke="var(--ink)" strokeWidth="0.6" opacity="0.4">
        <line x1="40" y1="250" x2="360" y2="250" />
        <line x1="40" y1="250" x2="40" y2="242" />
        <line x1="360" y1="250" x2="360" y2="242" />
      </g>
    </svg>
  );
}

/** Simplified floor plan with room divisions and a furniture hint. */
export function PlanGraphic({ className }: GraphicProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <rect width="400" height="300" fill="var(--milk-deep)" />
      <g fill="none" stroke="var(--ink)" strokeWidth="1">
        <rect x="50" y="40" width="300" height="220" />
        <line x1="200" y1="40" x2="200" y2="150" />
        <line x1="50" y1="150" x2="260" y2="150" />
        <line x1="260" y1="150" x2="260" y2="260" />
      </g>
      <rect x="215" y="60" width="120" height="70" fill="var(--accent)" opacity="0.16" />
      <g stroke="var(--ink)" strokeWidth="0.75" opacity="0.6">
        <circle cx="90" cy="200" r="26" fill="none" />
        <line x1="90" y1="174" x2="90" y2="200" />
        <rect x="285" y="180" width="45" height="60" fill="none" />
      </g>
    </svg>
  );
}

/** Structural grid — a facade rhythm of mullions and openings. */
export function GridGraphic({ className }: GraphicProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <rect width="400" height="300" fill="var(--milk-deep)" />
      <g stroke="var(--ink)" strokeWidth="1" fill="none">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v-${i}`} x1={40 + i * 53} y1="30" x2={40 + i * 53} y2="270" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h-${i}`} x1="40" y1={30 + i * 60} x2="358" y2={30 + i * 60} />
        ))}
      </g>
      <rect x="146" y="90" width="53" height="60" fill="var(--accent)" opacity="0.2" />
      <rect x="252" y="150" width="53" height="60" fill="var(--accent)" opacity="0.12" />
    </svg>
  );
}

/** Elevation with a stepped roofline and tree silhouettes. */
export function FacadeGraphic({ className }: GraphicProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <rect width="400" height="300" fill="var(--milk-deep)" />
      <g fill="none" stroke="var(--ink)" strokeWidth="1">
        <polyline points="40,210 40,120 160,120 160,160 300,160 300,110 360,110 360,210" />
        <line x1="40" y1="210" x2="360" y2="210" />
      </g>
      <rect x="70" y="150" width="50" height="60" fill="var(--accent)" opacity="0.18" />
      <g stroke="var(--ink)" strokeWidth="0.6" opacity="0.45">
        <line x1="180" y1="160" x2="180" y2="210" />
        <line x1="220" y1="160" x2="220" y2="210" />
        <line x1="260" y1="160" x2="260" y2="210" />
      </g>
      <line x1="20" y1="230" x2="380" y2="230" stroke="var(--ink)" strokeWidth="0.6" opacity="0.3" />
    </svg>
  );
}

/** Cross-section revealing interior floor levels and a stair. */
export function SectionGraphic({ className }: GraphicProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <rect width="400" height="300" fill="var(--milk-deep)" />
      <g fill="none" stroke="var(--ink)" strokeWidth="1">
        <rect x="50" y="50" width="300" height="200" />
        <line x1="50" y1="150" x2="350" y2="150" />
        <line x1="180" y1="50" x2="180" y2="250" />
      </g>
      <g stroke="var(--ink)" strokeWidth="1" opacity="0.7">
        <line x1="200" y1="150" x2="230" y2="150" />
        <line x1="230" y1="150" x2="230" y2="130" />
        <line x1="230" y1="130" x2="260" y2="130" />
        <line x1="260" y1="130" x2="260" y2="110" />
        <line x1="260" y1="110" x2="290" y2="110" />
        <line x1="290" y1="110" x2="290" y2="90" />
      </g>
      <rect x="60" y="170" width="100" height="70" fill="var(--accent)" opacity="0.14" />
    </svg>
  );
}

/** Material swatch composition — a study of textures and proportion. */
export function MaterialGraphic({ className }: GraphicProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <rect width="400" height="300" fill="var(--milk-deep)" />
      <rect x="40" y="40" width="150" height="220" fill="none" stroke="var(--ink)" strokeWidth="1" />
      <rect x="205" y="40" width="155" height="100" fill="var(--accent)" opacity="0.2" />
      <rect x="205" y="40" width="155" height="100" fill="none" stroke="var(--ink)" strokeWidth="1" />
      <rect x="205" y="155" width="70" height="105" fill="none" stroke="var(--ink)" strokeWidth="1" />
      <rect x="290" y="155" width="70" height="105" fill="none" stroke="var(--ink)" strokeWidth="1" />
      <g stroke="var(--ink)" strokeWidth="0.5" opacity="0.4">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="40" y1={60 + i * 25} x2="190" y2={60 + i * 25} />
        ))}
      </g>
    </svg>
  );
}

export const projectGraphics = {
  massing: MassingGraphic,
  plan: PlanGraphic,
  grid: GridGraphic,
  facade: FacadeGraphic,
  section: SectionGraphic,
  material: MaterialGraphic,
} as const;
