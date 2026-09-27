import { Link } from 'react-router-dom';
import SmartImage from '../ui/SmartImage';
import { resourceCategories } from '../../content/resources';

export default function ResourceCard({ resource, large = false }) {
  const cat = resourceCategories.find((c) => c.slug === resource.category);
  return (
    <Link to={`/resources/${resource.slug}`} className="group flex h-full flex-col">
      <div className={`overflow-hidden rounded-[1.5rem] bg-mist ${large ? 'aspect-[16/10]' : 'aspect-[16/10]'}`}>
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
          <SmartImage image={resource.image} sizes={large ? '(min-width: 1024px) 55vw, 100vw' : '(min-width: 1024px) 30vw, 100vw'} />
        </div>
      </div>
      <p className="mt-5 text-sm font-bold text-violet-600">{cat?.name}</p>
      <h3 className={`mt-2 transition-colors group-hover:text-azure-600 ${large ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{resource.title}</h3>
      <p className="mt-2 text-base text-ink">{resource.excerpt}</p>
    </Link>
  );
}
