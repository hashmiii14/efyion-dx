import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, PackageSearch } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHero from '../components/sections/PageHero';
import ProductCard from '../components/sections/ProductCard';
import CTASection from '../components/sections/CTASection';
import { categories, products, getCategory } from '../content/catalog';

export default function Products() {
  const [params, setParams] = useSearchParams();
  const active = params.get('category') || 'all';
  const query = params.get('q') || '';
  const activeCategory = getCategory(active);

  usePageMeta({
    title: activeCategory ? `${activeCategory.name} | Products` : 'Products',
    description: 'Browse the Efyion Dx product catalogue across clinical diagnostics, laboratory solutions, instruments, reagents and healthcare technology.',
  });

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === 'all') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCat = active === 'all' || p.category === active;
      const cat = getCategory(p.category)?.name || '';
      const inQuery = !q || [p.name, p.type, p.summary, cat].join(' ').toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [active, query]);

  const filters = [{ slug: 'all', name: 'All products' }, ...categories];

  return (
    <>
      <PageHero
        title="Products"
        text="Explore the Efyion Dx catalogue by product area, or search for what you need. Full product information will be added as it is confirmed."
        crumbs={[{ label: 'Products' }]}
      />

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="container-site">
          {/* Toolbar */}
          <div className="grid gap-6 border-b border-line pb-8 lg:grid-cols-[1fr_20rem] lg:items-center">
            <div role="group" aria-label="Filter by product area" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
              {filters.map((f) => {
                const on = active === f.slug;
                return (
                  <button
                    key={f.slug}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setParam('category', f.slug)}
                    className={`min-h-[44px] shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-bold transition-colors ${
                      on ? 'border-navy-900 bg-navy-900 text-white' : 'border-line bg-white text-navy-900 hover:border-navy-900'
                    }`}
                  >
                    {f.name}
                  </button>
                );
              })}
            </div>
            <div className="relative">
              <label htmlFor="product-search" className="sr-only">Search products</label>
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink" aria-hidden="true" />
              <input
                id="product-search"
                type="search"
                value={query}
                onChange={(e) => setParam('q', e.target.value)}
                placeholder="Search products"
                className="block min-h-[48px] w-full rounded-full border border-line bg-white pl-11 pr-11 text-base text-navy-900 placeholder:text-ink/60 focus:border-azure-500 focus:outline-none focus:ring-2 focus:ring-azure-500/30 [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button type="button" onClick={() => setParam('q', '')} aria-label="Clear search" className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-ink hover:bg-mist">
                  <X size={16} aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <p className="mt-8 text-sm font-semibold text-ink" aria-live="polite">
            {results.length} {results.length === 1 ? 'product' : 'products'}
            {activeCategory ? ` in ${activeCategory.name}` : ''}
            {query ? ` matching “${query}”` : ''}
          </p>

          {activeCategory && <p className="mt-2 max-w-2xl text-lg text-ink">{activeCategory.summary}</p>}

          {results.length ? (
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((p) => (
                <li key={p.slug}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8 rounded-[2rem] border border-dashed border-line bg-mist px-6 py-16 text-center">
              <PackageSearch size={36} className="mx-auto text-violet-600" aria-hidden="true" />
              <h2 className="mt-5 text-2xl">No products match your search</h2>
              <p className="mx-auto mt-2 max-w-md text-ink">Try a different term or product area, or ask us directly and we will help you find the right solution.</p>
              <button
                type="button"
                onClick={() => setParams({}, { replace: true })}
                className="mt-6 min-h-[44px] rounded-full bg-navy-900 px-6 font-bold text-white hover:bg-navy-800"
              >
                Show all products
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection title="Can’t find what you need?" text="Tell us about your requirements and we will point you to the right solution." button={{ label: 'Send an enquiry', to: '/contact' }} />
    </>
  );
}
