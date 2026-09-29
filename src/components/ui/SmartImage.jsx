import { useState, useRef, useEffect } from 'react';
import { Microscope, Activity, ShieldCheck, Cpu, FlaskConical, Layers, Award } from 'lucide-react';

/**
 * SmartImage — Production Image & Slot Component for Efyion Dx
 * ------------------------------------------------------------------
 * Handles responsive, zero-CLS rendering with WebP priority,
 * smooth fade-in, and professional diagnostic fallback aesthetics.
 */
export default function SmartImage({
  image,
  className = '',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  label,
  dark = false,
  objectFit,
  objectPosition,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [image?.src]);

  // If image has a genuine valid src and hasn't failed to load
  if (image && image.src && !failed) {
    const webpSrc = image.src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    // Automatically detect product hardware images or respect explicit objectFit
    const isProduct = objectFit === 'contain' || (image.objectFit === 'contain') || (objectFit !== 'cover' && (image.src.includes('/product-') || image.src.includes('product-mispa')));
    const fitClass = isProduct ? 'object-contain' : (objectFit === 'contain' ? 'object-contain' : 'object-cover');
    const posClass = objectPosition || image.objectPosition || 'object-center';

    return (
      <div className={`relative h-full w-full overflow-hidden ${isProduct ? 'bg-white p-2.5 sm:p-3.5 flex items-center justify-center' : 'bg-slate-50'} ${className}`}>
        <picture className={isProduct ? 'h-full w-full flex items-center justify-center' : 'h-full w-full'}>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            ref={imgRef}
            src={image.src}
            alt={image.alt || label || 'Efyion Dx Diagnostic System'}
            sizes={sizes}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`h-full w-full ${fitClass} ${posClass} transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-90'
            }`}
          />
        </picture>
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
 * High-precision clinical media visual card.
 * Replaces missing photography with a bespoke branded diagnostic card.
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
      aria-label={`${label} — Efyion Dx Diagnostic Modality`}
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden p-6 sm:p-8 select-none transition-colors ${
        dark
          ? 'bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white border border-white/10'
          : 'bg-gradient-to-br from-slate-50 via-azure-50/50 to-violet-50/40 text-navy-900 border border-line/80'
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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        <svg viewBox="0 0 240 240" className="w-56 h-56 text-violet-500/40" fill="none" stroke="currentColor">
          <circle cx="120" cy="120" r="100" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="120" cy="120" r="70" strokeWidth="1" />
          <circle cx="120" cy="120" r="40" strokeWidth="1.2" />
          <line x1="120" y1="10" x2="120" y2="230" strokeWidth="0.8" strokeDasharray="2 4" />
          <line x1="10" y1="120" x2="230" y2="120" strokeWidth="0.8" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Subtle Efyion Dx Watermark */}
      <div className="absolute right-4 top-4 opacity-35">
        <img
          src={dark ? '/logo-mark-white.png' : '/logo-mark.png'}
          alt=""
          className="h-7 w-auto"
          aria-hidden="true"
        />
      </div>

      {/* Center Technical Badge */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm px-4">
        <div
          className={`grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl shadow-subtle border ${
            dark
              ? 'bg-white/10 text-violet-400 border-white/15'
              : 'bg-white text-violet-600 border-violet-100 shadow-sm'
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
            className={`mt-1.5 text-xs line-clamp-2 max-w-[260px] leading-relaxed ${
              dark ? 'text-white/60' : 'text-ink/75'
            }`}
          >
            {description}
          </p>
        )}

        <div className="mt-4 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide uppercase ${
              dark
                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                : 'bg-white/90 text-violet-700 border border-violet-200/80 shadow-xs'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Precision Clinical Standard</span>
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
