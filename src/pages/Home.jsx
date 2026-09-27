import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Crosshair,
  Headset,
  FlaskConical,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';
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
import { resources } from '../content/resources';
import { images } from '../content/images';

export default function Home() {
  usePageMeta({
    title: 'Precision Diagnostics & Clinical Laboratory Solutions',
    description:
      'Efyion Dx provides high-sensitivity in vitro diagnostic instruments, standardized reagents, and comprehensive workflow solutions for hospitals and laboratories.',
  });

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust & Credibility Strip */}
      <TrustStrip />

      {/* 3. About / Company Overview */}
      <AboutSection />

      {/* 4. Diagnostic Categories Portfolio */}
      <CategoriesSection />

      {/* 5. Technology & Automation Capabilities */}
      <TechnologySection />

      {/* 6. Settings & Applications (Audience Tabs) */}
      <section className="section bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              title="Tailored for Every Diagnostic Setting"
              text="From high-throughput central hospital laboratories to bedside point-of-care suites and research institutions."
              className="mb-12 lg:mb-16"
            />
          </Reveal>
          <Reveal delay={100}>
            <AudienceTabs />
          </Reveal>
        </div>
      </section>

      {/* 7. Featured Diagnostic Systems */}
      <FeaturedProductsSection />

      {/* 8. Diagnostic Workflow: Sample to Insight */}
      <section className="section relative overflow-hidden bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              title="From Initial Assessment to Ongoing Care"
              text="A structured four-phase pathway ensuring smooth instrument commissioning, validation, and long-term diagnostic confidence."
              className="mb-14 lg:mb-20"
            />
          </Reveal>
          <Workflow />
        </div>
      </section>

      {/* 9. Quality, Calibration & Process Control */}
      <QualitySection />

      {/* 10. Professional Support Framework */}
      <SupportSection />

      {/* 11. Diagnostic Insights & Resources */}
      <ResourcesSection />

      {/* 12. Bottom Conversion CTA */}
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <CTASection />
      </div>
    </>
  );
}

/* ==================================================================
   SUB-COMPONENTS FOR HOMEPAGE DEPTH
   ================================================================== */

function Hero() {
  const { hero } = home;
  return (
    <section className="relative isolate -mt-[102px] overflow-hidden bg-mist pt-[102px] lg:pt-[112px]">
      <CurveBackdrop />
      <div className="container-site grid items-center gap-12 pb-20 pt-8 sm:pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-14">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7">
          <div className="anim-rise inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-violet-50/80 px-3.5 py-1 text-xs font-bold text-violet-700 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600 animate-pulse" />
            <span>Clinical In Vitro Diagnostics</span>
          </div>

          <h1 className="h-display font-black text-navy-900 tracking-tight leading-[1.04]">
            {hero.titleLines.map((line, i) => (
              <span
                key={line}
                className="anim-rise block"
                style={{ '--delay': `${120 + i * 100}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className="lead anim-rise mt-6 max-w-xl text-ink text-base sm:text-lg sm:leading-relaxed"
            style={{ '--delay': `${320}ms` }}
          >
            {hero.text}
          </p>

          {/* Compact, touch-friendly mobile button layout */}
          <div
            className="anim-rise mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            style={{ '--delay': `${420}ms` }}
          >
            <Button to={hero.primary.to}>{hero.primary.label}</Button>
            <Button to={hero.secondary.to} variant="outline">
              {hero.secondary.label}
            </Button>
          </div>

          {/* Focus Areas Quick Links */}
          <div
            className="anim-rise mt-10 border-t border-navy-900/10 pt-5"
            style={{ '--delay': `${520}ms` }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-ink/70 mb-2.5">
              Core Specialty Areas
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Specialty focus areas">
              {categories.slice(0, 4).map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/products?category=${c.slug}`}
                    className="group inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-navy-900 hover:text-violet-600 transition-colors"
                  >
                    <span>{c.name}</span>
                    <ChevronRight
                      size={13}
                      className="text-violet-500 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Visual Composition with Multiple Insets */}
        <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-md lg:col-span-5 lg:max-w-none">
          {/* Decorative rising dots */}
          <div
            aria-hidden="true"
            className="absolute -top-10 right-[15%] flex flex-col items-center gap-2 sm:-top-14"
          >
            <span
              className="anim-bubble h-4 w-4 rounded-full bg-violet-600"
              style={{ '--delay': '1100ms' }}
            />
            <span
              className="anim-bubble -ml-5 h-3 w-3 rounded-full bg-azure-500"
              style={{ '--delay': '950ms' }}
            />
            <span
              className="anim-bubble h-2 w-2 rounded-full bg-navy-900"
              style={{ '--delay': '800ms' }}
            />
          </div>

          {/* Primary Hero Image: Tube Framed Clinical Lab */}
          <div
            className="anim-tube tube frame-hero relative overflow-hidden bg-azure-100 shadow-lift border-2 border-white"
            style={{ '--delay': '200ms' }}
          >
            <SmartImage
              image={hero.image}
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent"
            />
          </div>

          {/* Secondary Inset: Diagnostic Sample Tubes */}
          <div
            className="anim-rise absolute -bottom-6 -left-3 aspect-square w-24 sm:w-32 lg:w-36 overflow-hidden rounded-full border-[5px] border-white bg-azure-100 shadow-lift"
            style={{ '--delay': '750ms' }}
          >
            <SmartImage image={hero.detailImage} sizes="160px" priority />
          </div>

          {/* Floating Diagnostic Card */}
          <div
            className="anim-rise absolute -right-2 bottom-8 hidden sm:block lg:-right-4 xl:-right-8"
            style={{ '--delay': '900ms' }}
          >
            <div className="anim-drift w-56 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lift backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-navy-900">
                  Sample Workflow
                </span>
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <ol className="mt-3 space-y-2 text-xs font-bold text-navy-900">
                {[
                  { step: 'Accession', status: 'Verified' },
                  { step: 'Analysis', status: 'Calibrated' },
                  { step: 'Report', status: 'Validated' },
                ].map((s, i) => (
                  <li key={s.step} className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5">
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-navy-900 text-white text-[9px]">
                        {i + 1}
                      </span>
                      <span>{s.step}</span>
                    </span>
                    <span className="text-[10px] font-semibold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">
                      {s.status}
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

function TrustStrip() {
  const { trustStrip } = home;
  return (
    <section className="border-y border-line bg-white py-10 sm:py-12">
      <div className="container-site">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="flex items-start gap-4 p-2"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-violet-600">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { about: a } = home;
  return (
    <section className="section bg-white">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-5">
          <div className="tube frame-arch relative mx-auto max-w-lg overflow-hidden bg-azure-100 shadow-lift border border-line">
            <SmartImage image={a.image} sizes="(min-width: 1024px) 40vw, 90vw" />
          </div>
          <div className="absolute -bottom-6 -left-3 aspect-square w-28 sm:w-36 overflow-hidden rounded-full border-[5px] border-white bg-azure-100 shadow-lift">
            <SmartImage image={a.detailImage} sizes="160px" />
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <SectionHeading
            kicker="About Efyion Dx"
            title={a.title}
            text={a.lead}
          />
          <p className="mt-5 text-base sm:text-lg text-ink leading-relaxed">
            {a.body}
          </p>

          <ul className="mt-6 space-y-3">
            {a.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm sm:text-base font-semibold text-navy-900">
                <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-violet-600 text-white">
                  <Check size={11} strokeWidth={3} aria-hidden="true" />
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to={a.cta.to} variant="outline">
              {a.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="section bg-mist">
      <div className="container-site">
        <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-14">
          <SectionHeading
            kicker="Diagnostic Portfolio"
            title="Comprehensive Solution Categories"
            text="Explore diagnostic systems engineered for precision across clinical disciplines, sample formats, and healthcare settings."
          />
          <TextLink to="/products" className="shrink-0">
            View full catalogue
          </TextLink>
        </Reveal>

        {/* 6-Card Responsive Grid with Distinct Verified Imagery */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 70}>
              <CategoryCard category={c} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const { technology: t } = home;
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-600/25 blur-3xl"
      />
      <div className="container-site grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <Reveal>
          <SectionHeading
            light
            kicker="Instrumentation & Informatics"
            title={t.title}
            text={t.text}
          />
          <ul className="mt-8 space-y-3.5">
            {t.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/85 text-sm sm:text-base">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-600 text-white">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button to={t.cta.to} variant="light">
              {t.cta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="tube frame-arch relative mx-auto max-w-lg overflow-hidden bg-navy-800 shadow-lift border border-white/10">
            <SmartImage image={t.image} sizes="(min-width: 1024px) 45vw, 90vw" />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-navy-900/60 via-transparent to-violet-600/20 mix-blend-multiply"
            />
          </div>
          <img
            src="/logo-mark-white.png"
            alt=""
            aria-hidden="true"
            className="absolute -bottom-6 -right-2 w-20 opacity-80 sm:w-24 lg:-right-4"
          />
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedProductsSection() {
  const scroller = useRef(null);
  const scroll = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector('li');
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 20 : 320), behavior: 'smooth' });
  };

  return (
    <section className="section bg-white">
      <div className="container-site">
        <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
          <SectionHeading
            kicker="Featured Instrumentation"
            title="Featured Diagnostic Systems"
            text="Selected platforms supporting clinical chemistry, optical review, standardized reagents, and point-of-care testing."
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll products left"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-navy-900 hover:border-navy-900 transition-colors"
            >
              <ArrowLeft size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll products right"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-navy-900 hover:border-navy-900 transition-colors"
            >
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>

      <div className="container-site !pr-0 sm:!pr-6 lg:!pr-8">
        <ul
          ref={scroller}
          className="-my-4 flex snap-x snap-mandatory gap-5 overflow-x-auto py-4 pr-5 [scrollbar-width:none] sm:pr-0 [&::-webkit-scrollbar]:hidden"
          aria-label="Featured diagnostic products"
        >
          {products.map((p) => (
            <li
              key={p.slug}
              className="w-[84%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)]"
            >
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </div>

      <div className="container-site mt-8">
        <Button to="/products" variant="outline">
          View all 6 diagnostic systems
        </Button>
      </div>
    </section>
  );
}

function QualitySection() {
  const { qualitySection: q } = home;
  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            kicker="Standards & Quality"
            title={q.title}
            text={q.lead}
          />
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[2rem] bg-azure-50 border border-line">
            <SmartImage image={images.qualityControl} sizes="(min-width: 1024px) 40vw, 90vw" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <ul className="grid gap-4 sm:grid-cols-2">
            {q.points.map((pt, i) => (
              <Reveal
                as="li"
                key={pt.title}
                delay={i * 60}
                className="rounded-2xl border border-line bg-mist p-5 sm:p-6"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-navy-900 text-white">
                  <ShieldCheck size={18} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy-900">
                  {pt.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-ink leading-relaxed">
                  {pt.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6 lg:order-2">
          <div className="tube frame-arch relative mx-auto max-w-lg overflow-hidden bg-azure-100 shadow-lift border border-line">
            <SmartImage image={images.supportEngineer} sizes="(min-width: 1024px) 45vw, 90vw" />
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-6 lg:order-1">
          <SectionHeading
            kicker="Service & Support"
            title="Specialized Technical Advisory"
            text="Diagnostic reliability extends beyond the physical instrument. Efyion Dx specialists provide structured guidance from initial workflow planning through post-onboarding optimization."
          />

          <ul className="mt-8 space-y-4">
            {[
              {
                title: 'Pre-Purchase Workflow Audits',
                desc: 'Detailed evaluations of your testing space, volume, and menu needs to select the right platform configuration.',
              },
              {
                title: 'Structured Operator Onboarding',
                desc: 'Hands-on operator procedural training ensuring staff are fully confident in running assays and routine maintenance.',
              },
              {
                title: 'Responsive Application Support',
                desc: 'Direct telephone and email communication channels for swift technical inquiries and calibration guidance.',
              },
            ].map((s) => (
              <li key={s.title} className="rounded-2xl border border-line bg-white p-5">
                <h3 className="text-base font-bold text-navy-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="/contact" variant="primary">
              Connect with an advisor
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ResourcesSection() {
  const topArticles = resources.slice(0, 3);

  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-14">
          <SectionHeading
            kicker="Knowledge Hub"
            title="Diagnostic Insights & Resources"
            text="Technical articles, operational guidance, and healthcare diagnostic perspectives from Efyion Dx."
          />
          <TextLink to="/resources" className="shrink-0">
            View all resources
          </TextLink>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topArticles.map((r, i) => (
            <Reveal key={r.slug} delay={i * 70}>
              <Link
                to={`/resources/${r.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-azure-200 hover:shadow-soft h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <SmartImage
                    image={r.image}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-600">
                    {r.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-navy-900 group-hover:text-azure-600 transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink leading-relaxed line-clamp-3">
                    {r.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-azure-600">
                    <span>Read article</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1 shrink-0"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
