import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';
import { resourceCategories } from '../../content/resources';

export default function ResourceCard({ resource, large = false }) {
  const cat = resourceCategories.find((c) => c.slug === resource.category);

  return (
    <Link
      to={`/resources/${resource.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white p-3.5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-lift"
    >
      <div
        className={`relative overflow-hidden rounded-[1.25rem] bg-mist ${
          large ? 'aspect-[16/10]' : 'aspect-[16/10]'
        }`}
      >
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <SmartImage
            image={resource.image}
            sizes={
              large
                ? '(min-width: 1024px) 55vw, 100vw'
                : '(min-width: 1024px) 30vw, 100vw'
            }
          />
        </div>
        {cat && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy-900 shadow-sm backdrop-blur">
            {cat.name}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2.5 pb-2 pt-4">
        <h3
          className={`font-bold text-navy-900 transition-colors group-hover:text-violet-600 line-clamp-2 ${
            large ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
          }`}
        >
          {resource.title}
        </h3>
        <p className="mt-2 text-sm text-ink leading-relaxed line-clamp-3">
          {resource.excerpt}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-azure-600">
          <span>Read resource</span>
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
