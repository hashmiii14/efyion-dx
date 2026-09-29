import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';
import { getCategory } from '../../content/catalog';

export default function ProductCard({ product, className = '' }) {
  const category = getCategory(product.category);

  return (
    <Link
      to={`/products/${product.slug}`}
      className={`group flex h-full flex-col rounded-[1.75rem] border border-line/80 bg-white p-3.5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-violet-300/80 hover:shadow-[0_20px_40px_-15px_rgba(36,71,201,0.12)] ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-white border border-line/50 p-2 sm:p-3 flex items-center justify-center shadow-xs">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04] flex items-center justify-center">
          <SmartImage
            image={product.image}
            label={product.name}
            objectFit="contain"
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy-900 shadow-xs backdrop-blur-md border border-line/40">
            {category.name}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2.5 pb-2 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-600 animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
            {product.type}
          </p>
        </div>
        <h3 className="mt-1.5 text-base sm:text-lg font-bold text-navy-900 group-hover:text-azure-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-ink leading-relaxed line-clamp-2">
          {product.summary}
        </p>

        {/* Quick Analytical Specs on Desktop */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mt-3 hidden sm:flex flex-wrap gap-1.5 pt-1">
            <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-navy-900 border border-line/60">
              {product.specifications[0]?.value?.split(';')[0]?.slice(0, 32)}
            </span>
          </div>
        )}

        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs sm:text-sm font-bold text-azure-600">
          <span>View system details</span>
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
