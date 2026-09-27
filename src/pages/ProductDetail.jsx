import { Link, useParams } from 'react-router-dom';
import { ChevronRight, FileDown, CheckCircle2, CircleDashed } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Button from '../components/ui/Button';
import SmartImage from '../components/ui/SmartImage';
import Reveal from '../components/ui/Reveal';
import ProductCard from '../components/sections/ProductCard';
import CTASection from '../components/sections/CTASection';
import { CurveBackdrop } from '../components/sections/PageHero';
import { getProduct, getCategory, products, PENDING } from '../content/catalog';
import NotFound from './NotFound';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'assay-menu', label: 'Assay menu & panels' },
  { id: 'applications', label: 'Applications' },
  { id: 'features', label: 'Features' },
  { id: 'technical', label: 'Technical specifications' },
  { id: 'downloads', label: 'Documents & downloads' },
];

/** Shown when a product field has not been filled in yet. */
function Pending({ children }) {
  return (
    <p className="flex items-start gap-3 rounded-2xl border border-dashed border-line bg-mist px-5 py-4 text-ink">
      <CircleDashed size={20} className="mt-0.5 shrink-0 text-ink/60" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);
  usePageMeta({
    title: product ? product.name : 'Product not found',
    description: product ? `${product.name} — ${product.summary}` : undefined,
  });

  if (!product) return <NotFound />;

  const category = getCategory(product.category);
  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).concat(products.filter((p) => p.slug !== product.slug && p.category !== product.category)).slice(0, 3);
  const enquiry = `/contact?subject=${encodeURIComponent(`Product enquiry: ${product.name}`)}`;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-[72px] overflow-hidden bg-mist pt-[72px] lg:-mt-20 lg:pt-20">
        <CurveBackdrop />
        <div className="container-site grid items-center gap-10 pb-20 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-16 lg:pb-28">
          <div>
            <nav aria-label="Breadcrumb" className="anim-rise">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-ink">
                <li><Link to="/" className="hover:text-navy-900">Home</Link></li>
                <li className="flex items-center gap-1.5"><ChevronRight size={14} aria-hidden="true" /><Link to="/products" className="hover:text-navy-900">Products</Link></li>
                {category && (
                  <li className="flex items-center gap-1.5"><ChevronRight size={14} aria-hidden="true" /><Link to={`/products?category=${category.slug}`} className="hover:text-navy-900">{category.name}</Link></li>
                )}
              </ol>
            </nav>
            <p className="anim-rise mt-8 font-bold text-violet-600" style={{ '--delay': '60ms' }}>{product.type}</p>
            <h1 className="anim-rise mt-2 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-6xl" style={{ '--delay': '120ms', letterSpacing: '-0.035em' }}>
              {product.name}
            </h1>
            <p className="lead anim-rise mt-5 max-w-xl text-ink" style={{ '--delay': '180ms' }}>{product.summary}</p>
            <div className="anim-rise mt-8 flex flex-wrap items-center gap-3 sm:gap-4" style={{ '--delay': '240ms' }}>
              <Button to={enquiry}>Enquire about this system</Button>
              <Button href="#technical" variant="outline">Technical specifications</Button>
            </div>
          </div>
          <div className="anim-rise relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line" style={{ '--delay': '150ms' }}>
            <SmartImage image={product.image} priority label={product.name} />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="On this page" className="sticky top-32">
              <p className="text-sm font-bold text-navy-900">On this page</p>
              <ul className="mt-4 space-y-1 border-l border-line">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="-ml-px block border-l-2 border-transparent py-2 pl-4 font-semibold text-ink transition-colors hover:border-violet-600 hover:text-navy-900">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="space-y-16 lg:col-span-9 lg:space-y-20">
            <Reveal as="section" id="overview" aria-labelledby="h-overview">
              <h2 id="h-overview" className="text-3xl sm:text-4xl">Overview</h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed">{product.overview}</p>
            </Reveal>

            {product.assayMenu && product.assayMenu.length > 0 && (
              <Reveal as="section" id="assay-menu" aria-labelledby="h-assay-menu">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h2 id="h-assay-menu" className="text-3xl sm:text-4xl">Assay Menu & Test Panels</h2>
                  <span className="text-sm font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                    Clinical Parameters
                  </span>
                </div>
                <div className="mt-6">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.assayMenu.map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-2xl bg-azure-50/50 border border-azure-100/60 px-5 py-4 font-semibold text-navy-950">
                        <span className="mt-1 h-2 w-2 rounded-full bg-violet-600 shrink-0" aria-hidden="true" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            <Reveal as="section" id="applications" aria-labelledby="h-applications">
              <h2 id="h-applications" className="text-3xl sm:text-4xl">Applications</h2>
              <div className="mt-6">
                {product.applications.length ? (
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.applications.map((a) => (
                      <li key={a} className="flex items-start gap-3 rounded-2xl bg-mist px-5 py-4 font-semibold text-navy-900">
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-violet-600" aria-hidden="true" />
                        {a}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Pending>Application areas for this product will be listed here.</Pending>
                )}
              </div>
            </Reveal>

            <Reveal as="section" id="features" aria-labelledby="h-features">
              <h2 id="h-features" className="text-3xl sm:text-4xl">Features</h2>
              <div className="mt-6">
                {product.features.length ? (
                  <ul className="grid gap-5 sm:grid-cols-2">
                    {product.features.map((f) => (
                      <li key={f.title} className="border-t-2 border-navy-900 pt-5">
                        <h3 className="text-xl font-bold">{f.title}</h3>
                        <p className="mt-2 text-ink leading-relaxed">{f.text}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Pending>Key features will be added once product information is confirmed.</Pending>
                )}
              </div>
            </Reveal>

            <Reveal as="section" id="technical" aria-labelledby="h-technical">
              <h2 id="h-technical" className="text-3xl sm:text-4xl">Technical information</h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-line">
                <table className="w-full text-left">
                  <caption className="sr-only">Technical information for {product.name}</caption>
                  <tbody className="divide-y divide-line">
                    {product.specifications.map((s) => (
                      <tr key={s.label} className="grid sm:table-row">
                        <th scope="row" className="bg-mist px-5 pb-1 pt-4 text-sm font-bold text-navy-900 sm:w-2/5 sm:py-4">{s.label}</th>
                        <td className={`px-5 pb-4 pt-1 sm:py-4 ${s.value === PENDING ? 'text-ink/60' : 'font-semibold text-navy-900'}`}>{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal as="section" id="downloads" aria-labelledby="h-downloads">
              <h2 id="h-downloads" className="text-3xl sm:text-4xl">Downloads & Documentation</h2>
              <div className="mt-6">
                {product.downloads && product.downloads.length > 0 ? (
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.downloads.map((d) => (
                      <li key={d.label}>
                        <Link to={d.href} className="group flex min-h-[68px] items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-all hover:border-violet-600 hover:shadow-subtle">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                            <FileDown size={20} aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="block truncate font-bold text-navy-900 group-hover:text-violet-600 transition-colors">{d.label}</span>
                            {d.size && <span className="block text-xs font-medium text-ink/70 mt-0.5">{d.size} • Verified Specification</span>}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Pending>
                    Brochures and documents will be available here.{' '}
                    <Link to={enquiry} className="font-bold text-azure-600 underline-offset-4 hover:underline">Request information</Link>
                  </Pending>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line py-20 sm:py-24">
          <div className="container-site">
            <h2 className="h-section">Related products</h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}><ProductCard product={p} /></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection title={`Interested in ${product.name}?`} text="Send us an enquiry and our team will get back to you with more information." button={{ label: 'Enquire now', to: enquiry }} />
    </>
  );
}
