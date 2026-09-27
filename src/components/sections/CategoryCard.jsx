import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';

export default function CategoryCard({ category, feature = false, className = '' }) {
  const Icon = category.icon;
  const href = `/products?category=${category.slug}`;

  if (feature) {
    return (
      <Link
        to={href}
        className={`group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl bg-navy-900 p-6 sm:p-8 text-white ${className}`}
      >
        <div className="absolute inset-0 -z-10 transition-transform duration-500 group-hover:scale-[1.03]">
          <SmartImage
            image={category.image}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/95 via-navy-900/60 to-navy-900/10"
        />
        <span className="mb-auto grid h-11 w-11 place-items-center rounded-xl bg-white/15 backdrop-blur text-white">
          <Icon size={20} aria-hidden="true" />
        </span>
        <h3 className="mt-12 text-2xl font-extrabold text-white sm:text-3xl">
          {category.name}
        </h3>
        <p className="mt-2 max-w-md text-sm text-slate-300 leading-relaxed">
          {category.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white">
          Explore category
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </Link>
    );
  }

  return (
    <Link
      to={href}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
        <SmartImage
          image={category.image}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"
        />
        <span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-lg bg-white/95 text-blue-600 shadow-xs border border-slate-100">
          <Icon size={18} aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {category.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs sm:text-sm font-bold text-blue-600">
          <span>Explore solutions</span>
          <ArrowRight
            size={13}
            className="transition-transform duration-200 group-hover:translate-x-1 shrink-0"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
