import { useState } from 'react';

const widths = [480, 800, 1200, 1600];
const unsplashUrl = (id, w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

/**
 * Responsive image with lazy loading, fade-in transition, and a branded fallback.
 * `image` comes from content/images.js: { unsplash: 'photo-…' } or { src: '/images/…' }, plus `alt`.
 */
export default function SmartImage({
  image,
  className = '',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  label,
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (!image || failed) return <BrandPlaceholder className={className} label={label} />;

  const props = image.unsplash
    ? {
        src: unsplashUrl(image.unsplash, 1200),
        srcSet: widths.map((w) => `${unsplashUrl(image.unsplash, w)} ${w}w`).join(', '),
        sizes,
      }
    : { src: image.src };

  return (
    <div className={`relative h-full w-full overflow-hidden bg-slate-100/80 ${className}`}>
      <img
        {...props}
        alt={image.alt || ''}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          loaded || priority ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

/** Branded stand-in used for missing product images or failed loads. */
export function BrandPlaceholder({ className = '', label }) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-mist via-azure-50 to-violet-100 ${className}`}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[.35]" aria-hidden="true">
        <defs>
          <pattern id="ph-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#1E2A80" opacity=".25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-dots)" />
      </svg>
      <img src="/logo-mark.png" alt="" className="relative w-[22%] min-w-[56px] max-w-[120px] opacity-25" />
    </div>
  );
}
