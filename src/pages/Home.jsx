import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Button, { TextLink } from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import SmartImage from '../components/ui/SmartImage';
import Reveal from '../components/ui/Reveal';
import ImageText from '../components/sections/ImageText';
import CategoryCard from '../components/sections/CategoryCard';
import ProductCard from '../components/sections/ProductCard';
import AudienceTabs from '../components/sections/AudienceTabs';
import Workflow from '../components/sections/Workflow';
import CTASection from '../components/sections/CTASection';
import { CurveBackdrop } from '../components/sections/PageHero';
import { home, homeResources } from '../content/pages';
import { categories, products } from '../content/catalog';
import { images } from '../content/images';

export default function Home() {
  usePageMeta({});
  return (
    <>
      <Hero />
      <ImageText
        image={home.about.image}
        detailImage={home.about.detailImage}
        title={home.about.title}
        text={home.about.lead}
      >
        <p className="max-w-xl text-ink">{home.about.body}</p>
        <Button to={home.about.cta.to} variant="outline" className="mt-8">
          {home.about.cta.label}
        </Button>
      </ImageText>
      <Categories />
      <Why />
      <Technology />
      <section className="section">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              title="Who we work with"
              text="Diagnostic needs look different in every setting. Select a setting to see how Efyion Dx approaches it."
              className="mb-12 lg:mb-16"
            />
          </Reveal>
          <Reveal delay={100}>
            <AudienceTabs />
          </Reveal>
        </div>
      </section>
      <FeaturedProducts />
      <section className="section relative overflow-hidden bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              title="How we work with you"
              text="A clear, four-step path from first conversation to ongoing support."
              className="mb-14 lg:mb-20"
            />
          </Reveal>
          <Workflow />
        </div>
      </section>
      <Resources />
      <div className="pt-20 sm:pt-24 lg:pt-28">
        <CTASection />
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  const { hero } = home;
  return (
    <section className="relative isolate -mt-[72px] overflow-hidden bg-mist pt-[72px] lg:-mt-20 lg:pt-20">
      <CurveBackdrop />
      <div className="container-site grid items-center gap-20 pb-24 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-16">
        <div className="lg:col-span-7">
          <h1 className="h-display">
            {hero.titleLines.map((line, i) => (
              <span key={line} className="anim-rise block" style={{ '--delay': `${150 + i * 120}ms` }}>
                {line}
              </span>
            ))}
          </h1>
          <p className="lead anim-rise mt-7 max-w-xl" style={{ '--delay': '420ms' }}>
            {hero.text}
          </p>
          <div className="anim-rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ '--delay': '540ms' }}>
            <Button to={hero.primary.to}>{hero.primary.label}</Button>
            <Button to={hero.secondary.to} variant="outline">
              {hero.secondary.label}
            </Button>
          </div>
          <ul className="anim-rise mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-navy-900/10 pt-6" style={{ '--delay': '660ms' }} aria-label="Focus areas">
            {categories.slice(0, 3).map((c) => (
              <li key={c.slug}>
                <Link to={`/products?category=${c.slug}`} className="group inline-flex min-h-[40px] items-center gap-1.5 text-sm font-bold text-navy-900">
                  {c.name}
                  <ChevronRight size={15} className="text-violet-600 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual: the tube-framed image with rising bubbles echoes the logo */}
        <div className="relative mx-auto w-full max-w-[26rem] sm:max-w-md lg:col-span-5 lg:max-w-none">
          <div aria-hidden="true" className="absolute -top-12 right-[16%] flex flex-col items-center gap-2 sm:-top-16 sm:gap-2.5">
            <span className="anim-bubble h-5 w-5 rounded-full bg-violet-600" style={{ '--delay': '1350ms' }} />
            <span className="anim-bubble -ml-6 h-3.5 w-3.5 rounded-full bg-violet-500/80" style={{ '--delay': '1200ms' }} />
            <span className="anim-bubble h-3 w-3 rounded-full bg-navy-900" style={{ '--delay': '1050ms' }} />
          </div>
          <div className="anim-tube tube frame-hero relative overflow-hidden bg-azure-100 shadow-lift" style={{ '--delay': '250ms' }}>
            <SmartImage image={hero.image} priority sizes="(min-width: 1024px) 40vw, 90vw" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-900/25 to-transparent" />
          </div>
          <div
            className="anim-rise absolute -bottom-8 -left-3 aspect-square w-28 overflow-hidden rounded-full border-[6px] border-mist bg-azure-100 shadow-lift sm:-left-8 sm:w-36 lg:-left-12 lg:w-40"
            style={{ '--delay': '900ms' }}
          >
            <SmartImage image={hero.detailImage} sizes="180px" priority />
          </div>
          <div className="anim-rise absolute -right-2 bottom-10 hidden sm:block lg:-right-6 xl:-right-10" style={{ '--delay': '1050ms' }}>
            <div className="anim-drift w-60 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-lift backdrop-blur-md">
              <p className="text-xs font-bold text-ink">Diagnostic journey</p>
              <ol className="mt-3 space-y-2.5">
                {['Sample', 'Analysis', 'Insight'].map((s, i) => (
                  <li key={s} className="flex items-center gap-3 text-sm font-bold text-navy-900">
                    <span className={`grid h-6 w-6 place-items-center rounded-full ${i < 2 ? 'bg-navy-900 text-white' : 'bg-violet-600 text-white'}`}>
                      <Check size={13} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {s}
                    <span className="ml-auto h-1.5 flex-1 overflow-hidden rounded-full bg-mist">
                      <span className="block h-full rounded-full bg-gradient-to-r from-navy-900 to-violet-600" style={{ width: `${100 - i * 25}%` }} />
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const [first, ...rest] = categories;
  const middle = rest.slice(0, -1);
  const last = rest[rest.length - 1];
  return (
    <section className="section pt-4 sm:pt-8 lg:pt-10">
      <div className="container-site">
        <Reveal className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Diagnostic solutions"
            text="Explore the areas Efyion Dx works across, from the laboratory bench to the point of care."
          />
          <TextLink to="/products" className="shrink-0">View all products</TextLink>
        </Reveal>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <CategoryCard category={first} feature className="h-full lg:min-h-[34rem]" />
          </Reveal>
          {middle.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 80}>
              <CategoryCard category={c} className="h-full" />
            </Reveal>
          ))}
          {last && (
            <Reveal className="md:col-span-2 lg:col-span-3">
              <CategoryCard category={last} feature className="min-h-[20rem] lg:min-h-[18rem]" />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const { why } = home;
  return (
    <section className="section border-t border-line">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <SectionHeading title={why.title} text={why.text} />
            </Reveal>
            <Reveal delay={120} className="relative mt-10 hidden aspect-[5/4] overflow-hidden rounded-[2rem] bg-azure-100 lg:block">
              <SmartImage image={images.microscope} sizes="35vw" />
            </Reveal>
          </div>
        </div>
        <ul className="lg:col-span-7">
          {why.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={i * 60} className="group grid grid-cols-[auto_1fr] gap-5 border-b border-line py-8 first:pt-0 sm:gap-8 sm:py-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mist text-navy-900 transition-colors duration-300 group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl sm:text-[1.75rem]">{item.title}</h3>
                  <p className="mt-2 max-w-md text-ink">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Technology() {
  const { technology: t } = home;
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <svg aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-16 w-full text-white sm:h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0 0H1440V20C1100 90 700 100 0 40Z" fill="currentColor" />
      </svg>
      <div aria-hidden="true" className="absolute -left-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-600/25 blur-3xl" />
      <div className="container-site grid items-center gap-14 pb-20 pt-28 sm:pb-24 sm:pt-36 lg:grid-cols-2 lg:gap-20 lg:pb-32 lg:pt-44">
        <Reveal>
          <SectionHeading light title={t.title} text={t.text} />
          <ul className="mt-8 space-y-4">
            {t.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/85">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-600">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Button to={t.cta.to} variant="light" className="mt-10">
            {t.cta.label}
          </Button>
        </Reveal>
        <Reveal delay={120} className="relative">
          <div className="tube frame-arch relative mx-auto max-w-xl overflow-hidden bg-navy-800">
            <SmartImage image={t.image} />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-navy-900/50 via-transparent to-violet-600/20 mix-blend-multiply" />
          </div>
          <img src="/logo-mark-white.png" alt="" aria-hidden="true" className="absolute -bottom-6 -right-2 w-20 opacity-90 sm:w-24 lg:-right-6" />
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const scroller = useRef(null);
  const featured = products.filter((p) => p.featured);
  const scroll = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector('li');
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 20 : 320), behavior: 'smooth' });
  };

  return (
    <section className="section bg-white pt-0 sm:pt-0 lg:pt-0">
      <div className="container-site">
        <Reveal className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-14">
          <SectionHeading title="Featured products" text="A selection from the Efyion Dx catalogue." />
          <div className={`flex items-center gap-3 ${featured.length <= 4 ? 'xl:hidden' : ''} ${featured.length <= 3 ? 'lg:hidden' : ''}`}>
            <button type="button" onClick={() => scroll(-1)} aria-label="Scroll products left" className="grid h-12 w-12 place-items-center rounded-full border border-line text-navy-900 transition-colors hover:border-navy-900">
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Scroll products right" className="grid h-12 w-12 place-items-center rounded-full border border-line text-navy-900 transition-colors hover:border-navy-900">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
      <div className="container-site !pr-0 sm:!pr-8 lg:!pr-10">
        <ul
          ref={scroller}
          className="-my-4 flex snap-x snap-mandatory gap-5 overflow-x-auto py-4 pr-5 [scrollbar-width:none] sm:pr-0 [&::-webkit-scrollbar]:hidden"
          aria-label="Featured products"
        >
          {featured.map((p) => (
            <li key={p.slug} className="w-[82%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)]">
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </div>
      <div className="container-site mt-10">
        <Button to="/products" variant="outline">View all products</Button>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section className="section pb-0 sm:pb-0 lg:pb-0">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionHeading title="Resources" text="Articles, technical information and updates from Efyion Dx, gathered in one place." />
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem] bg-azure-100">
            <SmartImage image={images.research} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </Reveal>
        <ul className="border-t border-line lg:col-span-7 lg:self-center">
          {homeResources.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal as="li" key={r.title} delay={i * 60}>
                <Link to={r.to} className="group flex items-center gap-5 border-b border-line py-6 sm:gap-7 sm:py-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mist text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xl font-extrabold tracking-tight text-navy-900 sm:text-2xl">{r.title}</span>
                    <span className="mt-1 block text-base text-ink">{r.text}</span>
                  </span>
                  <ArrowRight size={20} className="shrink-0 text-navy-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-violet-600" aria-hidden="true" />
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
