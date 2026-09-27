import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';

/** Hero for inner pages: breadcrumb, title, intro and an optional tube-framed image. */
export default function PageHero({ title, text, image, crumbs = [], children }) {
  return (
    <section className="relative isolate -mt-[72px] overflow-hidden bg-mist pt-[72px] lg:-mt-20 lg:pt-20">
      <CurveBackdrop />
      <div className={`container-site relative grid items-center gap-10 pb-20 pt-10 sm:pb-24 sm:pt-14 lg:gap-16 lg:pb-28 ${image ? 'lg:grid-cols-12' : ''}`}>
        <div className={image ? 'lg:col-span-7' : 'max-w-3xl'}>
          <nav aria-label="Breadcrumb" className="anim-rise">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-ink">
              <li><Link to="/" className="hover:text-navy-900">Home</Link></li>
              {crumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                  <ChevronRight size={14} aria-hidden="true" />
                  {c.to && i < crumbs.length - 1 ? (
                    <Link to={c.to} className="hover:text-navy-900">{c.label}</Link>
                  ) : (
                    <span aria-current="page" className="text-navy-900">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="anim-rise mt-6 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-6xl" style={{ '--delay': '80ms', letterSpacing: '-0.035em' }}>
            {title}
          </h1>
          {text && (
            <p className="lead anim-rise mt-6 max-w-2xl" style={{ '--delay': '160ms' }}>
              {text}
            </p>
          )}
          {children && <div className="anim-rise mt-8" style={{ '--delay': '240ms' }}>{children}</div>}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <div className="anim-tube tube frame-arch relative mx-auto w-full max-w-md overflow-hidden bg-azure-100 shadow-lift" style={{ '--delay': '120ms' }}>
              <SmartImage image={image} priority sizes="(min-width: 1024px) 40vw, 90vw" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/** Soft organic shapes behind hero areas. */
export function CurveBackdrop() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1440 600">
      <path d="M760 0C900 120 1000 60 1120 170C1250 290 1300 420 1440 450V0Z" fill="#E3EBFD" opacity=".7" />
      <path d="M1440 600H0V560C320 610 640 520 900 548C1120 572 1300 600 1440 560Z" fill="#fff" />
    </svg>
  );
}
