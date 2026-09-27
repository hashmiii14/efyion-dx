import { audiences } from '../../content/solutions';

/**
 * Decorative diagram: Efyion Dx at the centre, connected to each setting it
 * serves. Built from content/solutions.js, so it updates with the audience list.
 */
export default function HubDiagram({ className = '' }) {
  const cx = 300;
  const cy = 300;
  const r = 205;
  const nodes = audiences.map((a, i) => {
    const angle = (-90 + (360 / audiences.length) * i) * (Math.PI / 180);
    return { ...a, x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  const wrap = (label) => {
    const words = label.split(' ');
    if (words.length < 3) return [label];
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
  };

  return (
    <svg viewBox="0 0 600 620" className={className} role="img" aria-label={`Efyion Dx serves ${audiences.map((a) => a.name).join(', ')}`}>
      <defs>
        <linearGradient id="hub-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0B1152" />
          <stop offset="1" stopColor="#7A24B8" />
        </linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#DFE5EF" strokeDasharray="4 8" />
      {nodes.map((n) => (
        <line key={n.slug} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke="url(#hub-line)" strokeWidth="1.5" opacity=".35" />
      ))}
      <circle cx={cx} cy={cy} r="88" fill="#fff" stroke="#E3EBFD" strokeWidth="10" />
      <image href="/logo-mark.png" x={cx - 42} y={cy - 46} width="84" height="92" />
      {nodes.map((n) => {
        const lines = wrap(n.name);
        return (
          <g key={n.slug}>
            <circle cx={n.x} cy={n.y} r="30" fill="#0B1152" />
            <circle cx={n.x} cy={n.y} r="6" fill="#9340CF" />
            {lines.map((l, i) => (
              <text key={l} x={n.x} y={n.y + 52 + i * 19} textAnchor="middle" fontSize="16" fontWeight="700" fill="#0B1152" fontFamily="Manrope Variable, Manrope, sans-serif">
                {l}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
