import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';

/**
 * Diagnostic Category Card.
 * Displays high-resolution relevant imagery, category icon, description, and link.
 */
export default function CategoryCard({ category, feature = false, className = '' }) {
  const Icon = category.icon;
  const href = `/products?category=${category.slug}`;

  if (feature) {
    return (
      <Link
        to={href}
        className={`group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-navy-900 p-6 sm:p-8 text-white transition-all duration-300 hover:shadow-lift ${className}`}
      >
        <div className="absolute inset-0 -z-10 transition-transform duration-700 ease-out group-hover:scale-[1.05]">
          <SmartImage
            image={category.image}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/95 via-navy-900/60 to-navy-900/10"
        />
        <span className="mb-auto grid h-11 w-11 place-items-center rounded-xl bg-white/15 backdrop-blur text-white transition-transform duration-300 group-hover:scale-110">
          <Icon size={22} aria-hidden="true" />
        </span>
        <h3 className="mt-12 text-2xl font-extrabold text-white sm:text-3xl">
          {category.name}
        </h3>
        <p className="mt-2.5 max-w-md text-sm sm:text-base text-white/80 leading-relaxed">
          {category.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
          Explore category
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </span>
      </Link>
    );
  }

  return (
    <Link
      to={href}
      className={`group flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-lift ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-white border-b border-line/60">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.05]">
          <SmartImage
            image={category.image}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"
        />
        <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-xl bg-white/95 text-navy-900 shadow-sm backdrop-blur transition-transform duration-300 group-hover:scale-110">
          <Icon size={20} aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold text-navy-900 group-hover:text-violet-600 transition-colors">
          {category.name}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-ink leading-relaxed">
          {category.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-azure-600">
          Explore solutions
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1.5 shrink-0"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
