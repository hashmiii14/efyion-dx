import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';

/** Product-area card. `feature` shows the category photograph. */
export default function CategoryCard({ category, feature = false, className = '' }) {
  const Icon = category.icon;
  const href = `/products?category=${category.slug}`;

  if (feature) {
    return (
      <Link
        to={href}
        className={`group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-navy-900 p-7 text-white sm:p-9 ${className}`}
      >
        <div className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-[1.04]">
          <SmartImage image={category.image} sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/95 via-navy-900/50 to-navy-900/0" />
        <span className="mb-auto grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur">
          <Icon size={22} aria-hidden="true" />
        </span>
        <h3 className="mt-16 text-2xl text-white sm:text-3xl">{category.name}</h3>
        <p className="mt-3 max-w-sm text-white/80">{category.summary}</p>
        <span className="mt-6 inline-flex items-center gap-2 font-bold">
          Explore
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      to={href}
      className={`group flex flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-azure-100 hover:shadow-soft sm:p-7 ${className}`}
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-navy-900 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-white">
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-xl">{category.name}</h3>
      <p className="mt-2 text-base text-ink">{category.summary}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-azure-600">
        Explore
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
