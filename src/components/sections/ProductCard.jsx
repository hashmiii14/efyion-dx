import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';
import { getCategory } from '../../content/catalog';

export default function ProductCard({ product, className = '' }) {
  const category = getCategory(product.category);
  return (
    <Link
      to={`/products/${product.slug}`}
      className={`group flex h-full flex-col rounded-[1.75rem] border border-line bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
        <SmartImage image={product.image} label={`${product.name} image to be added`} sizes="(min-width: 1024px) 30vw, 90vw" />
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy-900 backdrop-blur">
            {category.name}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <p className="text-sm font-bold text-violet-600">{product.type}</p>
        <h3 className="mt-1.5 text-xl">{product.name}</h3>
        <p className="mt-2 text-base text-ink">{product.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-azure-600">
          View details
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
