import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';

/** Hero for inner pages: breadcrumb, title, intro and an optional clean image slot. */
export default function PageHero({ title, text, image, crumbs = [], children }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50/70 border-b border-line py-12 sm:py-16 lg:py-20">
      <div className={`container-site relative grid items-center gap-10 lg:gap-16 ${image ? 'lg:grid-cols-12' : ''}`}>
        <div className={image ? 'lg:col-span-7' : 'max-w-3xl'}>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500">
                <li>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </li>
                {crumbs.map((c, i) => (
                  <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                    <ChevronRight size={13} aria-hidden="true" className="text-slate-400" />
                    {c.to && i < crumbs.length - 1 ? (
                      <Link to={c.to} className="hover:text-blue-600 transition-colors">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-navy-900 font-bold">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <h1
            className="text-[2.2rem] leading-[1.08] sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            {title}
          </h1>

          {text && (
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {text}
            </p>
          )}

          {children && <div className="mt-6">{children}</div>}
        </div>

        {image && (
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md aspect-[4/3] overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
              <SmartImage image={image} priority sizes="(min-width: 1024px) 40vw, 90vw" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/** Subtle background gradient for clean framing without decorative blur blobs */
export function CurveBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white"
    />
  );
}
