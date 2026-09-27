import { Link, useParams } from 'react-router-dom';
import { ChevronRight, FileDown, CheckCircle2 } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import SmartImage from '../components/ui/SmartImage';
import Button from '../components/ui/Button';
import ProductCard from '../components/sections/ProductCard';
import CTASection from '../components/sections/CTASection';
import Reveal from '../components/ui/Reveal';
import { CurveBackdrop } from '../components/sections/PageHero';
import { getProduct, getCategory, products, PENDING } from '../content/catalog';
import NotFound from './NotFound';

function Pending({ children }) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-mist p-6 text-ink">
      <p>{children}</p>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  usePageMeta({
    title: product ? `${product.name} | Diagnostic Products` : 'Product not found',
    description: product?.summary,
  });

  if (!product) return <NotFound />;

  const category = getCategory(product.category);
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const enquiry = `/contact?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}`;

  const sections = [
    { id: 'overview', label: 'Overview' },
    product.assayMenu?.length && { id: 'assay-menu', label: 'Assay Menu' },
    { id: 'applications', label: 'Applications' },
    { id: 'features', label: 'Features' },
    { id: 'technical', label: 'Technical Specifications' },
    { id: 'downloads', label: 'Downloads' },
  ].filter(Boolean);

  return (
    <>
      {/* Product Hero */}
      <section className="relative isolate overflow-hidden bg-slate-50/70 border-b border-line py-10 sm:py-14 lg:py-16">
        <CurveBackdrop />
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500">
                <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight size={13} aria-hidden="true" className="text-slate-400" />
                  <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
                </li>
                {category && (
                  <li className="flex items-center gap-1.5">
                    <ChevronRight size={13} aria-hidden="true" className="text-slate-400" />
                    <Link to={`/products?category=${category.slug}`} className="hover:text-blue-600 transition-colors">{category.name}</Link>
                  </li>
                )}
              </ol>
            </nav>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">{product.type}</p>
            </div>
            <h1
              className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              {product.name}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">{product.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button to={enquiry}>Enquire about this system</Button>
              <Button href="#technical" variant="outline">Technical specifications</Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-soft border border-slate-200">
            <SmartImage image={product.image} priority label={product.name} />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">On this page</p>
              <ul className="mt-3 space-y-1 border-l border-line text-sm">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 font-semibold text-slate-600 transition-colors hover:border-blue-600 hover:text-navy-900"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="space-y-14 lg:col-span-9 lg:space-y-16">
            <Reveal as="section" id="overview" aria-labelledby="h-overview">
              <h2 id="h-overview" className="text-2xl sm:text-3xl font-extrabold text-navy-900">Overview</h2>
              <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">{product.overview}</p>
            </Reveal>

            {product.assayMenu && product.assayMenu.length > 0 && (
              <Reveal as="section" id="assay-menu" aria-labelledby="h-assay-menu">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h2 id="h-assay-menu" className="text-2xl sm:text-3xl font-extrabold text-navy-900">Assay Menu & Test Panels</h2>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                    Clinical Parameters
                  </span>
                </div>
                <div className="mt-6">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.assayMenu.map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-xl bg-blue-50/40 border border-blue-100/70 px-4 py-3.5 font-semibold text-navy-900">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                        <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            <Reveal as="section" id="applications" aria-labelledby="h-applications">
              <h2 id="h-applications" className="text-2xl sm:text-3xl font-extrabold text-navy-900">Applications</h2>
              <div className="mt-6">
                {product.applications.length ? (
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.applications.map((a) => (
                      <li key={a} className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3.5 font-semibold text-navy-900">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true" />
                        <span className="text-xs sm:text-sm">{a}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Pending>Application areas for this product will be listed here.</Pending>
                )}
              </div>
            </Reveal>

            <Reveal as="section" id="features" aria-labelledby="h-features">
              <h2 id="h-features" className="text-2xl sm:text-3xl font-extrabold text-navy-900">Features</h2>
              <div className="mt-6">
                {product.features.length ? (
                  <ul className="grid gap-5 sm:grid-cols-2">
                    {product.features.map((f) => (
                      <li key={f.title} className="rounded-xl border border-line bg-white p-5 shadow-xs">
                        <h3 className="text-base font-bold text-navy-900">{f.title}</h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{f.text}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Pending>Key features will be added once product information is confirmed.</Pending>
                )}
              </div>
            </Reveal>

            <Reveal as="section" id="technical" aria-labelledby="h-technical">
              <h2 id="h-technical" className="text-2xl sm:text-3xl font-extrabold text-navy-900">Technical Information</h2>
              <div className="mt-6 overflow-hidden rounded-xl border border-line shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <caption className="sr-only">Technical information for {product.name}</caption>
                  <tbody className="divide-y divide-line">
                    {product.specifications.map((s) => (
                      <tr key={s.label} className="grid sm:table-row">
                        <th scope="row" className="bg-slate-50 px-4 py-3 text-xs font-bold text-navy-900 sm:w-2/5">{s.label}</th>
                        <td className={`px-4 py-3 ${s.value === PENDING ? 'text-slate-400' : 'font-semibold text-navy-900'}`}>{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal as="section" id="downloads" aria-labelledby="h-downloads">
              <h2 id="h-downloads" className="text-2xl sm:text-3xl font-extrabold text-navy-900">Downloads & Documentation</h2>
              <div className="mt-6">
                {product.downloads && product.downloads.length > 0 ? (
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.downloads.map((d) => (
                      <li key={d.label}>
                        <Link
                          to={d.href}
                          className="group flex min-h-[64px] items-center gap-3.5 rounded-xl border border-line bg-white p-4 transition-all hover:border-blue-400 hover:shadow-soft"
                        >
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <FileDown size={18} aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="block truncate font-bold text-navy-900 group-hover:text-blue-600 transition-colors text-xs sm:text-sm">{d.label}</span>
                            {d.size && <span className="block text-[11px] font-medium text-slate-500 mt-0.5">{d.size} • Verified Specification</span>}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Pending>
                    Brochures and documents will be available here.{' '}
                    <Link to={enquiry} className="font-bold text-blue-600 underline-offset-4 hover:underline">Request information</Link>
                  </Pending>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line py-16 sm:py-20 bg-slate-50/70">
          <div className="container-site">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900">Related Diagnostic Platforms</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}><ProductCard product={p} /></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection
        title={`Interested in ${product.name}?`}
        text="Send us an enquiry and our team will get back to you with detailed specifications and consultation."
        button={{ label: 'Enquire now', to: enquiry }}
      />
    </>
  );
}
