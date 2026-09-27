import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHero from '../components/sections/PageHero';
import ResourceCard from '../components/sections/ResourceCard';
import CTASection from '../components/sections/CTASection';
import SmartImage from '../components/ui/SmartImage';
import { getResource, resources, resourceCategories } from '../content/resources';
import { contact } from '../content/site';
import NotFound from './NotFound';

/**
 * Article template. Add a `body` array of paragraphs to a resource in
 * content/resources.js and it renders here; until then a neutral
 * "being prepared" note is shown.
 */
export default function ResourceDetail() {
  const { slug } = useParams();
  const r = getResource(slug);
  usePageMeta({ title: r ? r.title : 'Resource not found', description: r?.excerpt });
  if (!r) return <NotFound />;

  const cat = resourceCategories.find((c) => c.slug === r.category);
  const more = resources.filter((x) => x.slug !== r.slug).slice(0, 3);

  return (
    <>
      <PageHero title={r.title} text={r.excerpt} crumbs={[{ label: 'Resources', to: '/resources' }, { label: cat?.name || 'Resource' }]} />
      <article className="pb-20 sm:pb-24">
        <div className="container-site">
          <div className="relative -mt-4 aspect-[16/9] overflow-hidden rounded-2xl bg-blue-50 sm:aspect-[21/9] border border-line">
            <SmartImage image={r.image} priority sizes="100vw" />
          </div>
          <div className="mx-auto mt-14 max-w-2xl text-lg">
            {r.body?.length ? (
              r.body.map((p) => <p key={p} className="mb-6">{p}</p>)
            ) : (
              <div className="rounded-2xl border border-dashed border-line bg-mist p-6 sm:p-8">
                <p className="font-bold text-navy-900">This {cat?.name.toLowerCase().replace(/s$/, '') || 'resource'} is being prepared.</p>
                <p className="mt-2 text-ink">
                  Check back soon, or email <a href={`mailto:${contact.email}`} className="font-bold text-blue-600 hover:underline">{contact.email}</a> if you need information now.
                </p>
              </div>
            )}
            <Link to="/resources" className="mt-10 inline-flex min-h-[44px] items-center gap-2 font-bold text-navy-900 hover:text-blue-600">
              <ArrowLeft size={18} aria-hidden="true" />
              All resources
            </Link>
          </div>
        </div>
      </article>
      <section className="border-t border-line py-20 sm:py-24">
        <div className="container-site">
          <h2 className="h-section">More resources</h2>
          <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <li key={m.slug}><ResourceCard resource={m} /></li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
