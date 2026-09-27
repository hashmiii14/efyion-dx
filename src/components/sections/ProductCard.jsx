import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';
import { getCategory } from '../../content/catalog';

export default function ProductCard({ product, className = '' }) {
  const category = getCategory(product.category);

  return (
    <Link
      to={`/products/${product.slug}`}
      className={`group flex h-full flex-col rounded-2xl border border-line bg-white p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
        <SmartImage
          image={product.image}
          label={product.name}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        {category && (
          <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold text-navy-900 shadow-xs border border-slate-100">
            {category.name}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pb-1 pt-3.5">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
            {product.type}
          </p>
        </div>

        <h3 className="mt-1 text-base sm:text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
          {product.summary}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs sm:text-sm font-bold text-blue-600">
          <span>View system details</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1 shrink-0"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
