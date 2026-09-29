import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Cpu,
  Headset,
  Activity,
  Microscope,
  FileText,
  ChevronDown,
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import SmartImage from '../components/ui/SmartImage';
import Reveal from '../components/ui/Reveal';
import CategoryCard from '../components/sections/CategoryCard';
import ProductCard from '../components/sections/ProductCard';
import AudienceTabs from '../components/sections/AudienceTabs';
import Workflow from '../components/sections/Workflow';
import CTASection from '../components/sections/CTASection';
import { home } from '../content/pages';
import { categories, products } from '../content/catalog';
import { resources, faqs } from '../content/resources';
import { slots } from '../content/images';

export default function Home() {
  usePageMeta({
    title: 'Precision Diagnostics & Clinical Laboratory Solutions',
    description:
      'Efyion Dx provides high-sensitivity in vitro diagnostic instruments, standardized reagents, and comprehensive workflow solutions for hospitals and laboratories.',
  });

  return (
    <>
      {/* 1. Hero Showcase */}
      <Hero />

      {/* 2. Clinical Credibility & Value Strip */}
      <TrustStrip />

      {/* 3. Company & Brand Introduction */}
      <AboutSection />

      {/* 4. Diagnostic Modalities & Specialties */}
      <CategoriesSection />

      {/* 5. Featured Diagnostic Platforms */}
      <FeaturedProductsSection />

      {/* 6. Technology & Analytical Architecture */}
      <TechnologySection />

      {/* 7. Clinical Solutions Across Care Settings */}
      <CareSettingsSection />

      {/* 8. Diagnostic Workflow: Intake to Insight */}
      <WorkflowSection />

      {/* 9. Quality Assurance & Regulatory Rigor */}
      <QualitySection />

      {/* 10. Technical Support & Service SLA */}
      <SupportSection />

      {/* 11. Knowledge Hub & Technical Publications */}
      <ResourcesSection />

      {/* 12. Frequently Asked Questions */}
      <HomeFAQSection />

      {/* 13. Bottom Conversion Consultation Prompt */}
      <CTASection />
    </>
  );
}

/** 1. HERO SECTION */
function Hero() {
  const { hero } = home;

  return (
    <section className="relative isolate -mt-[64px] sm:-mt-[68px] lg:-mt-[74px] overflow-hidden min-h-[92vh] flex flex-col justify-end">
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0 -z-10">
        <picture>
          <source srcSet="/images/hero-lab.webp" type="image/webp" />
          <img
            src="/images/hero-lab.jpg"
            alt="Clinical laboratory scientists working with diagnostic equipment — Efyion Dx"
            className="h-full w-full object-cover object-center lg:object-[65%_center]"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>
        {/* Luminous, light-balanced gradient: keeps the laboratory bright, white, and clinical while ensuring text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-navy-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="container-site relative z-10 pt-[130px] pb-20 sm:pt-[150px] sm:pb-24 lg:pt-[170px] lg:pb-28">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Hero Copy — left side */}
          <div className="lg:col-span-8 xl:col-span-7">
            {/* Kicker Badge */}
            <div className="hero-anim-badge inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white/95 mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_#c084fc]" />
              <span>{hero.kicker}</span>
            </div>

            {/* Headline */}
            <h1
              className="text-[2.5rem] leading-[1.06] sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold text-white tracking-tight"
              style={{ letterSpacing: '-0.035em' }}
            >
              <span className="hero-anim-title-1 block drop-shadow-md">Precision Diagnostics.</span>
              <span className="hero-anim-title-2 block text-gradient-shimmer mt-1">
                Better Outcomes.
              </span>
            </h1>

            {/* Responsive Sub-text */}
            <p className="hero-anim-desc mt-5 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed font-normal">
              <span className="md:hidden">
                Equipping clinical laboratories with high-throughput automated analyzers, standardized assay platforms, and dedicated support.
              </span>
              <span className="hidden md:inline">
                Equipping clinical laboratories, hospitals, and healthcare networks with
                high-throughput automated analyzers, standardized assay platforms, and dedicated application support.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="hero-anim-cta mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                to="/products"
                variant="gradient"
                className="!min-h-[48px] sm:!min-h-[52px] text-sm sm:text-base font-bold shadow-xl shadow-violet-950/50 hover:shadow-violet-600/40 transition-all duration-300 hover:scale-[1.02]"
              >
                Explore diagnostic systems
              </Button>
              <Button
                to="/contact"
                variant="outlineLight"
                className="!min-h-[48px] sm:!min-h-[52px] text-sm sm:text-base font-bold backdrop-blur-md bg-white/5 hover:bg-white/15 transition-all duration-300"
              >
                Request consultation
              </Button>
            </div>

            {/* Quick Metrics */}
            <div className="hero-anim-stats mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              {[
                { value: '400 T/H', label: 'Photometric Capacity' },
                { value: '2.0 µL',  label: 'Micro-Volume Sample'  },
                { value: 'HL7/ASTM', label: 'Bi-Directional LIS'  },
              ].map(({ value, label }) => (
                <div key={label} className="transition-transform duration-300 hover:-translate-y-0.5">
                  <p className="text-xl sm:text-2xl font-extrabold text-white drop-shadow">{value}</p>
                  <p className="text-xs font-semibold text-white/75 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Glass Info Cards — right side, desktop only (original layout preserved) */}
          <div className="hero-anim-stats hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end items-end pb-2">
            <div className="flex flex-col gap-3.5 w-full max-w-[285px]">
              <div className="glass-card-dark flex items-center gap-3.5 rounded-2xl p-4 shadow-2xl animate-float">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/25 text-violet-300 border border-violet-400/30">
                  <Activity size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">Multi-Channel Detection</p>
                  <p className="text-xs font-medium text-white/70">Continuous STAT Access</p>
                </div>
              </div>

              <div className="glass-card-dark flex items-center gap-3.5 rounded-2xl p-4 shadow-2xl animate-float-delayed">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-azure-500/25 text-azure-300 border border-azure-400/30">
                  <ShieldCheck size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">CE-IVD & ISO 13485</p>
                  <p className="text-xs font-medium text-white/70">Standardized Quality Control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

/** 2. TRUST & CREDIBILITY STRIP */
function TrustStrip() {
  const { trustStrip } = home;

  return (
    <section className="border-y border-line bg-gradient-to-b from-white via-slate-50/50 to-white py-10 sm:py-12">
      <div className="container-site">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 80} className="flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-white hover:shadow-xs border border-transparent hover:border-line/60">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-azure-50 text-violet-600 border border-azure-100/80 transition-transform duration-300 hover:scale-110 shadow-xs">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-navy-900">{item.title}</h2>
                  <p className="mt-1 text-xs text-ink/80 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** 3. ABOUT / COMPANY INTRODUCTION */
function AboutSection() {
  const { about } = home;

  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        {/* 2-Column Hero Story — Perfectly Balanced Heights */}
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image Frame (height matched on desktop, zero dead gap) */}
          <Reveal variant="left" className="flex flex-col justify-center">
            <div className="relative w-full h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line flex items-center justify-center">
              <SmartImage
                image={slots.aboutImage}
                label="Clinical Diagnostic Operations"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Right Column: Editorial Narrative (responsive: punchy on mobile, comprehensive on desktop) */}
          <Reveal variant="right" className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3.5 py-1.5 rounded-full border border-violet-100 w-fit">
              {about.kicker || 'Clinical Diagnostics & Laboratory Solutions'}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              {about.title}
            </h2>
            <p className="lead mt-4 font-medium text-navy-900 leading-relaxed">{about.lead}</p>

            {/* Responsive Paragraphs */}
            <div className="mt-5 space-y-3.5 text-base text-ink leading-relaxed font-normal">
              <p>{about.paragraphs[0]}</p>
              <p className="hidden md:block">{about.paragraphs[1]}</p>
            </div>

            {/* Highlights List */}
            <ul className="mt-6 space-y-2.5">
              {about.highlights.slice(0, 3).map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-navy-900">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/about" variant="outline" className="!min-h-[44px] text-sm font-bold">
                {about.cta?.label || 'Learn more about Efyion Dx'}
              </Button>
              <Button to="/contact" variant="ghost" className="!min-h-[44px] text-sm font-bold text-azure-600 hover:text-navy-900">
                Discuss your laboratory setup →
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Full-Width Operational Profile Bar (Page 2 Architecture) */}
        <Reveal delay={100}>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4 shadow-xs">
            {about.profile.map((row) => (
              <div key={row.label} className="bg-white p-5 sm:p-6 transition-colors hover:bg-mist/30">
                <dt className="text-xs font-semibold text-ink/75 uppercase tracking-wider">{row.label}</dt>
                <dd className="mt-1.5 font-extrabold text-sm sm:text-base text-navy-900">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Full-Width Balanced Vision & Mission Row (Page 2 Architecture) */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delay={120}>
            <div className="h-full rounded-[2rem] bg-navy-900 text-white p-8 sm:p-10 border border-navy-800 shadow-lift flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-violet-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  Corporate Direction
                </span>
                <h3 className="mt-5 text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  {about.vision.title}
                </h3>
                <p className="mt-3 text-base text-white/80 leading-relaxed font-normal">
                  {about.vision.text}
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>Empowering Clinical Diagnostic Decision-Making</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="h-full rounded-[2rem] bg-gradient-to-br from-mist via-white to-azure-50/30 p-8 sm:p-10 border border-line shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                  Operational Purpose
                </span>
                <h3 className="mt-5 text-xl sm:text-2xl font-extrabold tracking-tight text-navy-900">
                  {about.mission.title}
                </h3>
                <p className="mt-3 text-base text-ink leading-relaxed font-normal">
                  {about.mission.text}
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-line flex items-center gap-2 text-xs font-semibold text-azure-600">
                <span className="h-1.5 w-1.5 rounded-full bg-azure-600" />
                <span>Standardized Consumables & Application Partnership</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** 4. DIAGNOSTIC MODALITIES & PORTFOLIO (CATEGORIES) */
function CategoriesSection() {
  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            title="Core Diagnostic Modalities"
            text="Comprehensive instrumentation and standardized assay platforms categorized by clinical specialty."
            className="mb-0"
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-violet-600 hover:text-navy-900 transition-colors shrink-0"
          >
            <span>View all products</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, idx) => (
            <Reveal key={c.slug} delay={idx * 60}>
              <CategoryCard category={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 5. FEATURED DIAGNOSTIC SYSTEMS SHOWCASE */
function FeaturedProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3.5 py-1.5 rounded-full border border-violet-100">
              {home.productsSection?.kicker || 'Hardware & Consumables Portfolio'}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              {home.productsSection?.title || 'Featured Diagnostic Systems'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ink font-medium leading-relaxed">
              {home.productsSection?.lead || 'Precision analytical instruments engineered for high throughput, micro-volume sample consumption, and walk-away operational reliability.'}
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-azure-600 hover:text-navy-900 transition-colors shrink-0"
          >
            <span>Complete catalog & specifications</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Informative Editorial Context Paragraphs (responsive: 1 on mobile, 2 on desktop) */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2 text-sm sm:text-[0.9375rem] text-ink leading-relaxed border-t border-line/70 pt-6">
          <p>{home.productsSection?.paragraphs?.[0]}</p>
          <p className="hidden md:block">{home.productsSection?.paragraphs?.[1]}</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-line mb-10">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-navy-900 text-white shadow-xs'
                : 'bg-white text-ink hover:text-navy-900 border border-line'
            }`}
          >
            All Systems (6)
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActiveCategory(c.slug)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                activeCategory === c.slug
                  ? 'bg-navy-900 text-white shadow-xs'
                  : 'bg-white text-ink hover:text-navy-900 border border-line'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 60}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 6. TECHNOLOGY & ANALYTICAL CAPABILITIES */
function TechnologySection() {
  const techPoints = [
    {
      icon: Microscope,
      title: 'Plan-Apochromatic Optics',
      desc: 'Precision multi-wavelength photometry and high-resolution scanning optics for low optical distortion.',
    },
    {
      icon: Activity,
      title: 'Capacitive Fluidics',
      desc: 'Liquid-level sensing, anti-bubble verification, and vertical crash protection for continuous aspiration.',
    },
    {
      icon: Cpu,
      title: 'Bidirectional LIS Engine',
      desc: 'HL7 v2.x and ASTM 1394 interface connectivity for automated worklist querying and instant verified EHR push.',
    },
    {
      icon: ShieldCheck,
      title: 'Peltier Thermal Regulation',
      desc: 'Solid-state 2°C–8°C reagent refrigeration preserving enzyme kinetics across extended operational runs.',
    },
  ];

  return (
    <section className="section bg-navy-950 text-white border-t border-navy-900 relative overflow-hidden">
      {/* Background ambient sapphire & violet glow */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/4 h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-10 h-[26rem] w-[26rem] rounded-full bg-azure-600/20 blur-3xl pointer-events-none"
      />

      <div className="container-site relative z-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md w-fit">
              {home.technology?.kicker || 'Instrumentation Architecture'}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {home.technology?.title || 'Optics, Fluidics & Analytical Hardware'}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-medium max-w-2xl">
              {home.technology?.lead || 'Engineered with precision opto-mechanics, high-accuracy syringe pumps, and automated self-clearing probe technologies to deliver dependable patient findings hour after hour.'}
            </p>

            {/* Authoritative Technical Writing Paragraphs (responsive) */}
            <div className="mt-5 space-y-3.5 text-sm sm:text-base text-white/75 leading-relaxed font-normal max-w-2xl">
              <p>{home.technology?.paragraphs?.[0]}</p>
              {home.technology?.paragraphs?.[1] && (
                <p className="hidden md:block">{home.technology?.paragraphs[1]}</p>
              )}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {techPoints.map((tp, idx) => {
                const Icon = tp.icon;
                return (
                  <Reveal key={tp.title} delay={idx * 60} className={idx >= 2 ? 'hidden sm:block' : ''}>
                    <div className="glass-card-dark rounded-2xl p-4.5 transition-all duration-300 hover:bg-white/12 hover:border-violet-400/40 hover:-translate-y-0.5 h-full">
                      <Icon size={20} className="text-violet-400 mb-2" aria-hidden="true" />
                      <h3 className="text-sm font-bold text-white">{tp.title}</h3>
                      <p className="mt-1 text-xs text-white/65 leading-relaxed">{tp.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button to="/technology" variant="light" className="!min-h-[46px] text-sm font-bold">
                Explore technology & quality
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal variant="scale" className="h-full">
              <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden rounded-[2rem] bg-navy-900 border border-white/15 shadow-2xl flex items-center justify-center">
                <SmartImage
                  image={slots.technologyImage}
                  label="Diagnostic Optical & Analytical Hardware"
                  className="h-full w-full object-cover"
                  dark
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 7. CLINICAL SOLUTIONS ACROSS CARE SETTINGS */
function CareSettingsSection() {
  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site">
        <SectionHeading
          title="Tailored for Every Diagnostic Setting"
          text="From high-throughput central hospital laboratories to bedside point-of-care suites and research institutions."
          className="mb-12 lg:mb-16"
        />
        <Reveal>
          <AudienceTabs />
        </Reveal>
      </div>
    </section>
  );
}

/** 8. DIAGNOSTIC WORKFLOW */
function WorkflowSection() {
  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3.5 py-1.5 rounded-full border border-violet-100">
              Structured Deployment
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              From Initial Assessment to Ongoing Care
            </h2>
            <p className="mt-3 text-base text-ink leading-relaxed">
              A structured four-phase diagnostic pathway ensuring seamless equipment commissioning, CLSI validation runs, and continuous operational confidence.
            </p>
          </div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-violet-600 hover:text-navy-900 transition-colors shrink-0"
          >
            <span>Explore solutions</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <Reveal>
          <div className="rounded-[2.5rem] border border-line bg-gradient-to-br from-mist/80 via-white to-azure-50/20 p-6 sm:p-10 lg:p-12 shadow-xs">
            <Workflow />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 9. QUALITY & REGULATORY RIGOR */
function QualitySection() {
  const { qualitySection } = home;

  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal variant="left">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100 w-fit">
                Quality Governance
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                {qualitySection.title}
              </h2>
              <p className="lead mt-4 text-ink leading-relaxed">{qualitySection.lead}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {qualitySection.points.map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 60} className={idx >= 2 ? 'hidden sm:block' : ''}>
                    <div className="h-full rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:shadow-subtle">
                      <h3 className="text-sm font-bold text-navy-900">{item.title}</h3>
                      <p className="mt-1 text-xs text-ink/80 leading-relaxed">{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button to="/technology#quality" variant="outline" className="!min-h-[42px] text-sm font-bold">
                  Review quality governance
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal variant="right" className="h-full">
              <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line flex items-center justify-center">
                <SmartImage
                  image={slots.qualityImage}
                  label="Quality Assurance & Calibration Standards"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 10. PROFESSIONAL TECHNICAL SUPPORT & ONBOARDING */
function SupportSection() {
  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal variant="left">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100 w-fit">
                Technical Partnership
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                Specialized Application Support & Training
              </h2>
              <p className="mt-4 text-base text-ink leading-relaxed">
                Diagnostic instrumentation demands attentive ongoing collaboration. Efyion Dx provides direct access to
                experienced biomedical engineers and application specialists across every stage of platform deployment.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    title: 'Pre-Installation Workflow Audit',
                    text: 'Matching analyzer throughput and reagent allocations to your daily sample volume and peak hours.',
                  },
                  {
                    title: 'Operator Training & Validation Runs',
                    text: 'On-site technical onboarding ensuring laboratory technicians are confident in calibration routines.',
                  },
                  {
                    title: 'Guaranteed Emergency Support SLA',
                    text: 'Under 2-hour response for critical laboratory inquiries to keep diagnostic testing uninterrupted.',
                  },
                ].map((s, idx) => (
                  <div key={s.title} className={`rounded-2xl border border-line bg-mist/60 p-4 ${idx === 2 ? 'hidden sm:block' : ''}`}>
                    <h3 className="text-sm font-bold text-navy-900">{s.title}</h3>
                    <p className="mt-1 text-xs text-ink/80 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button to="/contact" className="!min-h-[42px] text-sm font-bold">
                  Contact technical support
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal variant="right" className="h-full">
              <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line flex items-center justify-center">
                <SmartImage
                  image={slots.supportImage}
                  label="Technical Advisory & Support Advisory"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 11. KNOWLEDGE HUB & TECHNICAL RESOURCES PREVIEW */
function ResourcesSection() {
  const featuredResources = resources.slice(0, 3);

  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            title="Diagnostic Insights & Technical Guides"
            text="Analytical publications, verification guidance, and platform evaluation guides."
            className="mb-0"
          />
          <Link
            to="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-violet-600 hover:text-navy-900 transition-colors shrink-0"
          >
            <span>All publications</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((r, idx) => (
            <Reveal key={r.slug} delay={idx * 70}>
              <article
                className="h-full flex flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:shadow-subtle hover:-translate-y-1 hover:border-violet-300"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-violet-600">
                  {r.category}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy-900 hover:text-violet-600 transition-colors">
                  <Link to={`/resources/${r.slug}`}>{r.title}</Link>
                </h3>
                <p className="mt-2 text-xs text-ink leading-relaxed line-clamp-3">{r.excerpt}</p>
                <div className="mt-auto pt-4">
                  <Link
                    to={`/resources/${r.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-azure-600 hover:underline"
                  >
                    <span>Read article</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 12. FREQUENTLY ASKED QUESTIONS */
function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3.5 py-1.5 rounded-full border border-violet-100">
                Frequently Asked Questions
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base text-ink max-w-xl mx-auto">
                Practical information regarding our diagnostic instruments, reagent supply reliability, and technical support.
              </p>
            </div>
          </Reveal>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <Reveal key={faq.q} delay={idx * 40}>
                  <div
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-violet-300 bg-slate-50/80 shadow-xs'
                        : 'border-line bg-white hover:border-violet-200'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-bold text-navy-900 pr-4">
                        {faq.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-200 ${
                          isOpen
                            ? 'bg-violet-600 text-white rotate-180'
                            : 'bg-mist text-navy-900'
                        }`}
                      >
                        <ChevronDown size={18} aria-hidden="true" />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-ink leading-relaxed border-t border-line/40 mt-1">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={150}>
            <div className="mt-12 rounded-2xl bg-azure-50/70 border border-azure-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-navy-900">Have a specific question about your laboratory setup?</h3>
                <p className="text-xs sm:text-sm text-ink mt-1">Our application specialists and biomedical team are available to discuss your workflow.</p>
              </div>
              <Button to="/contact" variant="primary" className="shrink-0 text-xs sm:text-sm font-bold">
                Contact our team
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
