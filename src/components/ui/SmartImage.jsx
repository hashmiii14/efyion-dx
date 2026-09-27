import { useState } from 'react';
import { Microscope, Activity, ShieldCheck, Cpu, FlaskConical, Layers } from 'lucide-react';

/**
 * SmartImage — Production Image & Slot Component for Efyion Dx
 * ------------------------------------------------------------------
 * Seamlessly handles:
 * 1. Real image display when `image.src` is provided (cover, responsive, zero-CLS).
 * 2. Elegant, high-tech clinical diagnostic placeholder frame when `image.src` is null,
 *    ready for the 5-10 real photos the client will provide later.
 * 3. Zero artificial delay: renders immediately with no blocking fade-outs or spinners.
 */
export default function SmartImage({
  image,
  className = '',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  label,
  dark = false,
}) {
  const [failed, setFailed] = useState(false);

  // If image has a genuine valid src and hasn't failed to load
  if (image && image.src && !failed) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <img
          src={image.src}
          alt={image.alt || label || 'Efyion Dx Diagnostic System'}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  // Otherwise, render the elegant clinical diagnostic visual slot
  return (
    <ClinicalMediaSlot
      slot={image?.slot}
      label={image?.label || label}
      description={image?.description}
      className={className}
      dark={dark}
    />
  );
}

/**
 * Elegant, high-precision clinical media slot.
 * Replaces random stock photography with an intentional, branded diagnostic frame
 * that seamlessly transitions when real photos are supplied.
 */
export function ClinicalMediaSlot({
  slot = 'diagnosticPlatform',
  label = 'Diagnostic System Platform',
  description = 'High-Precision Analytical Workstation',
  className = '',
  dark = false,
}) {
  // Select a relevant clinical diagnostic icon based on slot name
  const getIcon = () => {
    if (slot.includes('tech') || slot.includes('optic')) return Microscope;
    if (slot.includes('workflow') || slot.includes('chem')) return Activity;
    if (slot.includes('quality') || slot.includes('calib')) return ShieldCheck;
    if (slot.includes('informatics') || slot.includes('data')) return Cpu;
    if (slot.includes('reagent') || slot.includes('assay')) return FlaskConical;
    return Layers;
  };

  const IconComponent = getIcon();

  return (
    <div
      role="img"
      aria-label={`${label} — Visual placeholder slot for Efyion Dx asset`}
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden p-6 sm:p-8 select-none transition-colors ${
        dark
          ? 'bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white border border-white/10'
          : 'bg-gradient-to-br from-slate-50 via-azure-50/40 to-violet-50/30 text-navy-900 border border-line/80'
      } ${className}`}
    >
      {/* Precision Technical Grid Background */}
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
        <defs>
          <pattern id={`slot-grid-${slot}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke={dark ? '#94A3B8' : '#3B82F6'}
              strokeWidth="0.75"
              strokeDasharray="2,4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#slot-grid-${slot})`} />
      </svg>

      {/* Optical Reticle & Concentric Crosshairs SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <svg viewBox="0 0 240 240" className="w-56 h-56 text-violet-500/40" fill="none" stroke="currentColor">
          <circle cx="120" cy="120" r="100" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="120" cy="120" r="70" strokeWidth="1" />
          <circle cx="120" cy="120" r="40" strokeWidth="1.2" />
          <line x1="120" y1="10" x2="120" y2="230" strokeWidth="0.8" strokeDasharray="2 4" />
          <line x1="10" y1="120" x2="230" y2="120" strokeWidth="0.8" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Subtle Efyion Dx Watermark */}
      <div className="absolute right-4 top-4 opacity-30">
        <img
          src={dark ? '/logo-mark-white.png' : '/logo-mark.png'}
          alt=""
          className="h-8 w-auto"
          aria-hidden="true"
        />
      </div>

      {/* Center Technical Badge */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm px-4">
        <div
          className={`grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl shadow-subtle border ${
            dark
              ? 'bg-white/10 text-violet-400 border-white/15'
              : 'bg-white text-violet-600 border-violet-100'
          }`}
        >
          <IconComponent size={24} aria-hidden="true" />
        </div>

        <h3
          className={`mt-4 text-sm sm:text-base font-extrabold tracking-tight line-clamp-1 ${
            dark ? 'text-white' : 'text-navy-900'
          }`}
        >
          {label}
        </h3>

        {description && (
          <p
            className={`mt-1 text-xs line-clamp-2 max-w-[260px] leading-relaxed ${
              dark ? 'text-white/60' : 'text-ink/75'
            }`}
          >
            {description}
          </p>
        )}

        <div className="mt-4 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide uppercase ${
              dark
                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                : 'bg-azure-100/70 text-navy-900 border border-azure-200/70'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Slot: {slot}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/** Legacy Fallback Alias */
export function BrandPlaceholder({ className = '', label }) {
  return <ClinicalMediaSlot label={label} className={className} />;
}
