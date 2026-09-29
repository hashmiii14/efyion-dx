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
        title="Diagnostic Products & Systems"
        text="Explore the Efyion Dx diagnostic catalogue across clinical instruments, specialized assay panels, standardized reagents, and laboratory informatics."
        crumbs={[{ label: 'Products' }]}
      />

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="container-site">
          {/* Portfolio Architectural Overview */}
          <div className="mb-12 rounded-[2rem] border border-line bg-gradient-to-br from-mist/80 via-white to-azure-50/20 p-6 sm:p-10 shadow-xs">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3.5 py-1.5 rounded-full border border-violet-100">
                Analytical Instrumentation Standards
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                Engineered for High-Throughput Reliability & Clinical Precision
              </h2>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2 text-sm sm:text-base text-ink leading-relaxed font-normal border-t border-line/70 pt-6">
              <p>
                The Efyion Dx diagnostic catalogue is engineered to equip hospital central laboratories, commercial reference facilities, and acute clinical suites with dependable analytical instrumentation. Each platform is built around verified walk-away automation, low micro-volume sample aspiration, and strict photometric precision.
              </p>
              <p className="hidden md:block">
                Our systems span core diagnostic modalities including automated clinical chemistry, 6-part laser hematology with reticulocyte and NRBC channels, chemiluminescent enzyme immunoassays (CLEIA), and rapid point-of-care cartridges. Every instrument operates with standardized liquid-stable reagents, automated barcode accessioning, and bidirectional ASTM / HL7 middleware integration.
              </p>
            </div>

            {/* Core Capability Badges (responsive) */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3 pt-6 border-t border-line/60">
              <div className="rounded-xl bg-white p-4 border border-line/80 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Sample Conservation</span>
                <p className="mt-1 text-sm font-bold text-navy-900">Micro-volume 2.0 µL aspiration</p>
                <p className="mt-1 text-xs text-ink/75 leading-relaxed">Preserves precious pediatric, neonatal, and specialized fluid specimens.</p>
              </div>
              <div className="rounded-xl bg-white p-4 border border-line/80 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-azure-600">Reagent Protection</span>
                <p className="mt-1 text-sm font-bold text-navy-900">2°C–8°C 24/7 Peltier cooling</p>
                <p className="mt-1 text-xs text-ink/75 leading-relaxed">Guarantees onboard enzyme stability and reduces calibration overhead.</p>
              </div>
              <div className="rounded-xl bg-white p-4 border border-line/80 shadow-xs hidden sm:block">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Digital Connectivity</span>
                <p className="mt-1 text-sm font-bold text-navy-900">Native ASTM 1394 & HL7 v2.x</p>
                <p className="mt-1 text-xs text-ink/75 leading-relaxed">Automated worklist download and instantaneous verified result transmission.</p>
              </div>
            </div>
          </div>

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
                    className={`min-h-[44px] shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-bold transition-colors cursor-pointer ${
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
