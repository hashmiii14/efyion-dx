import { audiences } from '../../content/solutions';

/**
 * Decorative diagram: Efyion Dx at the centre, connected to each setting it
 * serves. Built dynamically from content/solutions.js.
 */
export default function HubDiagram({ className = '' }) {
  const cx = 300;
  const cy = 300;
  const rNode = 175;
  const rText = 230;

  const nodes = audiences.map((a, i) => {
    const angle = (-90 + (360 / audiences.length) * i) * (Math.PI / 180);
    return {
      ...a,
      x: cx + rNode * Math.cos(angle),
      y: cy + rNode * Math.sin(angle),
      tx: cx + rText * Math.cos(angle),
      ty: cy + rText * Math.sin(angle),
      angleDeg: -90 + (360 / audiences.length) * i,
    };
  });

  const wrap = (label) => {
    const words = label.split(' ');
    if (words.length <= 2) return [label];
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
  };

  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label={`Efyion Dx serves ${audiences.map((a) => a.name).join(', ')}`}
    >
      <defs>
        <linearGradient id="hub-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0B1152" />
          <stop offset="1" stopColor="#7A24B8" />
        </linearGradient>
        <filter id="hub-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0B1152" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Orbit ring */}
      <circle cx={cx} cy={cy} r={rNode} fill="none" stroke="#DFE5EF" strokeDasharray="4 8" />

      {/* Radial connector lines */}
      {nodes.map((n) => (
        <line
          key={n.slug}
          x1={cx}
          y1={cy}
          x2={n.x}
          y2={n.y}
          stroke="url(#hub-line)"
          strokeWidth="1.5"
          opacity=".4"
        />
      ))}

      {/* Center Efyion Dx hub */}
      <circle cx={cx} cy={cy} r="76" fill="#fff" stroke="#E3EBFD" strokeWidth="8" filter="url(#hub-shadow)" />
      <image href="/logo-mark.png" x={cx - 36} y={cy - 40} width="72" height="80" />

      {/* Orbiting audience nodes */}
      {nodes.map((n) => {
        const lines = wrap(n.name);
        return (
          <g key={n.slug}>
            <circle cx={n.x} cy={n.y} r="24" fill="#0B1152" filter="url(#hub-shadow)" />
            <circle cx={n.x} cy={n.y} r="5" fill="#9340CF" />
            {lines.map((l, i) => (
              <text
                key={l}
                x={n.tx}
                y={n.ty + (i - (lines.length - 1) / 2) * 16}
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fill="#0B1152"
                fontFamily="Manrope Variable, Manrope, sans-serif"
              >
                {l}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
