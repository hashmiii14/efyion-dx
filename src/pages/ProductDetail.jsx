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
  { id: 'applications', label: 'Applications' },
  { id: 'features', label: 'Features' },
  { id: 'technical', label: 'Technical information' },
  { id: 'downloads', label: 'Downloads' },
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
            <p className="lead anim-rise mt-6 max-w-xl" style={{ '--delay': '180ms' }}>{product.summary}</p>
            <div className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ '--delay': '240ms' }}>
              <Button to={enquiry}>Enquire about this product</Button>
              <Button href="#technical" variant="outline">Technical information</Button>
            </div>
          </div>
          <div className="anim-rise relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift" style={{ '--delay': '150ms' }}>
            <SmartImage image={product.image} priority label={`${product.name} image to be added`} />
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
              <p className="mt-5 max-w-3xl text-lg">{product.overview}</p>
            </Reveal>

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
                        <h3 className="text-xl">{f.title}</h3>
                        <p className="mt-2 text-ink">{f.text}</p>
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
              <h2 id="h-downloads" className="text-3xl sm:text-4xl">Downloads</h2>
              <div className="mt-6">
                {product.downloads.length ? (
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.downloads.map((d) => (
                      <li key={d.href}>
                        <a href={d.href} download className="group flex min-h-[64px] items-center gap-4 rounded-2xl border border-line px-5 py-4 transition-colors hover:border-navy-900">
                          <FileDown size={22} className="text-violet-600" aria-hidden="true" />
                          <span className="font-bold text-navy-900">{d.label}</span>
                          {d.size && <span className="ml-auto text-sm text-ink">{d.size}</span>}
                        </a>
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
