import DotMark from './DotMark';

/**
 * Section title block. `kicker` is optional — use it only when it adds
 * context the heading doesn't already give.
 */
export default function SectionHeading({ kicker, title, text, align = 'left', light = false, as: H = 'h2', className = '' }) {
  const center = align === 'center';
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {kicker && (
        <p className={`mb-4 flex items-center gap-2.5 text-sm font-bold ${center ? 'justify-center' : ''} ${light ? 'text-white/80' : 'text-blue-600'}`}>
          <DotMark light={light} />
          {kicker}
        </p>
      )}
      <H className={`h-section ${light ? 'text-white' : ''}`}>{title}</H>
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-ink'}`}>{text}</p>}
    </div>
  );
}
