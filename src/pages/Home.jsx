import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ShieldCheck,
  Cpu,
  Crosshair,
  Headset,
  FlaskConical,
  Activity,
  Layers,
  Sparkles,
  Microscope,
  HeartPulse,
  MonitorSmartphone,
  FileText,
  BadgeCheck,
  Zap,
  Building2,
  Clock,
  Thermometer,
  Shield,
  HelpCircle,
  TrendingUp,
  SlidersHorizontal,
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
import { CurveBackdrop } from '../components/sections/PageHero';
import { home } from '../content/pages';
import { categories, products } from '../content/catalog';
import { resources } from '../content/resources';
import { slots } from '../content/images';

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

      {/* 2. Clinical Credibility & Value Strip */}
      <TrustStrip />

      {/* 3. Company & Brand Introduction */}
      <AboutSection />

      {/* 4. Diagnostic Modalities & Portfolio (Categories) */}
      <CategoriesSection />

      {/* 5. Diagnostic Platform Comparison & Technical Specifications Matrix */}
      <PlatformComparisonSection />

      {/* 6. Featured Diagnostic Systems Showcase */}
      <FeaturedProductsSection />

      {/* 7. Clinical Assay Panels & Diagnostic Menu Deep-Dive */}
      <ClinicalAssayDeepDiveSection />

      {/* 8. Technology & Analytical Capabilities */}
      <TechnologySection />

      {/* 9. Operational Efficiency & Laboratory Economic Value */}
      <EconomicValueSection />

      {/* 10. Clinical Solutions Across Care Settings */}
      <CareSettingsSection />

      {/* 11. Diagnostic Workflow: Intake to Insight */}
      <WorkflowSection />

      {/* 12. Precision & Quality Governance */}
      <QualitySection />

      {/* 13. Laboratory Procurement, Reagent Supply & Technical FAQ */}
      <LaboratoryFaqSection />

      {/* 14. Operating Principles — Why Efyion Dx */}
      <PrinciplesSection />

      {/* 15. Technical Support & Onboarding Framework */}
      <SupportSection />

      {/* 16. Knowledge Hub & Technical Documentation */}
      <ResourcesSection />

      {/* 17. Bottom Conversion CTA */}
      <CTASection />
    </>
  );
}

/** 1. HERO SECTION */
function Hero() {
  const { hero } = home;

  return (
    <section className="relative isolate -mt-[64px] sm:-mt-[68px] lg:-mt-[74px] overflow-hidden min-h-[95vh] flex flex-col justify-end">

      {/* ── Full-Bleed Background Image ── */}
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
        {/* Balanced gradient overlays for high contrast text while keeping lab & scientists clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/50 to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />
      </div>

      {/* ── Hero Content ── */}
      <div className="container-site relative z-10 pt-[130px] pb-20 sm:pt-[150px] sm:pb-24 lg:pt-[170px] lg:pb-28">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">

          {/* Hero Copy — left side */}
          <div className="lg:col-span-8 xl:col-span-7 anim-rise">

            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 text-xs font-bold text-white/90 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span>{hero.kicker}</span>
            </div>

            {/* Headline */}
            <h1
              className="text-[2.5rem] leading-[1.07] sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold text-white tracking-tight"
              style={{ letterSpacing: '-0.035em' }}
            >
              <span className="drop-shadow-md">Precision Diagnostics.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-300 to-azure-400">
                Better Outcomes.
              </span>
            </h1>

            {/* Sub-text */}
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              Equipping clinical laboratories, hospital networks, and acute care facilities with
              high-throughput automated analyzers, standardized liquid-stable reagents, and
              responsive application advisory.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                to="/products"
                variant="gradient"
                className="!min-h-[48px] sm:!min-h-[52px] text-sm sm:text-base font-bold shadow-xl shadow-violet-950/50 hover:shadow-violet-600/40"
              >
                Explore diagnostic systems
              </Button>
              <Button
                to="/contact"
                variant="outlineLight"
                className="!min-h-[48px] sm:!min-h-[52px] text-sm sm:text-base font-bold"
              >
                Request consultation
              </Button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { value: '400 T/H', label: 'Photometric Capacity' },
                { value: '2.0 µL',  label: 'Micro-Volume Sample'  },
                { value: 'HL7/ASTM', label: 'Bi-Directional LIS'  },
              ].map(({ value, label }) => (
                <div key={label} className="transition-transform duration-300 hover:-translate-y-0.5">
                  <p className="text-xl sm:text-2xl font-extrabold text-white drop-shadow">{value}</p>
                  <p className="text-xs font-semibold text-white/70 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Info Cards — right side, desktop only */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end items-end pb-2">
            <div className="flex flex-col gap-3.5 w-full max-w-[270px]">
              <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-navy-950/60 backdrop-blur-xl p-4 shadow-2xl animate-float">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-500/25 text-violet-300 border border-violet-400/20">
                  <Activity size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Multi-Channel Detection</p>
                  <p className="text-xs font-medium text-white/70">Continuous STAT Access</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-navy-950/60 backdrop-blur-xl p-4 shadow-2xl" style={{ animationDelay: '0.5s' }}>
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-azure-500/25 text-azure-300 border border-azure-400/20">
                  <ShieldCheck size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">CE-IVD Certified</p>
                  <p className="text-xs font-medium text-white/70">ISO 13485 Quality Standards</p>
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
    <section className="border-y border-line bg-white py-10 sm:py-12">
      <div className="container-site">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 80} className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-azure-50 text-violet-600 border border-azure-100/80 transition-transform duration-300 hover:scale-110">
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
    <section className="section bg-white">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Media Slot */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal variant="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line">
                <SmartImage
                  image={slots.aboutImage}
                  label="Clinical Diagnostic Operations"
                />
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal variant="right">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                Diagnostic Excellence
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                {about.title}
              </h2>
              <p className="lead mt-4 font-medium text-navy-900">{about.lead}</p>
              <p className="mt-3 text-base text-ink leading-relaxed">{about.body}</p>

              <ul className="mt-6 space-y-2.5">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-navy-900">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-4">
                <Button to="/about" variant="outline" className="!min-h-[44px] text-sm font-bold">
                  Learn more about Efyion Dx
                </Button>
              </div>
            </Reveal>
          </div>
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

/** 5. DIAGNOSTIC PLATFORM COMPARISON & SPECIFICATIONS MATRIX (NEW DESKTOP DEPTH) */
function PlatformComparisonSection() {
  const [activeTab, setActiveTab] = useState('all');
  const matrix = home.comparisonMatrix || [];

  const filteredMatrix =
    activeTab === 'all'
      ? matrix
      : matrix.filter((item) => {
          if (activeTab === 'chemistry') return item.category.toLowerCase().includes('chemistry');
          if (activeTab === 'immunoassay') return item.category.toLowerCase().includes('chemiluminescence');
          if (activeTab === 'poct') return item.category.toLowerCase().includes('point-of-care');
          if (activeTab === 'digital') return item.category.toLowerCase().includes('pathology') || item.category.toLowerCase().includes('technology');
          return true;
        });

  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
              Technical Comparison Matrix
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Diagnostic Platform Specifications
            </h2>
            <p className="mt-3 text-base text-ink max-w-2xl">
              Compare analytical throughput, measuring principles, sample volumes, and LIS connectivity across our diagnostic systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Platforms (6)' },
              { id: 'chemistry', label: 'Clinical Chemistry' },
              { id: 'immunoassay', label: 'Chemiluminescence' },
              { id: 'poct', label: 'Point-of-Care' },
              { id: 'digital', label: 'Optics & Digital' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-navy-900 text-white shadow-xs'
                    : 'bg-mist text-ink hover:text-navy-900 hover:bg-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Specifications Table */}
        <Reveal>
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-line bg-white shadow-subtle">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-mist/90 text-navy-900 font-bold uppercase tracking-wider text-[11px] border-b border-line">
                  <tr>
                    <th scope="col" className="py-4 px-5">System & Modality</th>
                    <th scope="col" className="py-4 px-4">Throughput / Speed</th>
                    <th scope="col" className="py-4 px-4">Measuring Principle</th>
                    <th scope="col" className="py-4 px-4">Sample Vol.</th>
                    <th scope="col" className="py-4 px-4">Onboard Reagents</th>
                    <th scope="col" className="py-4 px-4">LIS Protocol</th>
                    <th scope="col" className="py-4 px-5 text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-ink">
                  {filteredMatrix.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-5">
                        <div className="font-bold text-navy-900 text-sm">{item.name}</div>
                        <span className="inline-block mt-1 rounded bg-azure-50 px-2 py-0.5 text-[10px] font-bold text-violet-700 border border-azure-100">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-semibold text-navy-900 whitespace-nowrap">
                        {item.throughput}
                      </td>
                      <td className="py-4 px-4 max-w-[200px] leading-relaxed">
                        {item.principle}
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap font-medium text-navy-900">
                        {item.sampleVolume}
                      </td>
                      <td className="py-4 px-4 max-w-[170px] leading-relaxed">
                        {item.reagentPositions}
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap text-navy-900 font-medium">
                        {item.lisProtocol}
                      </td>
                      <td className="py-4 px-5 text-right whitespace-nowrap">
                        <Link
                          to={item.slug}
                          className="inline-flex items-center gap-1 font-bold text-violet-600 hover:text-navy-900 text-xs"
                        >
                          <span>Specifications</span>
                          <ArrowRight size={13} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Mobile & Tablet Specifications Cards */}
        <div className="lg:hidden grid gap-4 sm:grid-cols-2">
          {filteredMatrix.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 50}>
              <div className="rounded-2xl border border-line bg-white p-5 shadow-xs">
                <span className="rounded bg-azure-50 px-2 py-0.5 text-[10px] font-bold text-violet-700 border border-azure-100">
                  {item.category}
                </span>
                <h3 className="mt-2 text-base font-bold text-navy-900">{item.name}</h3>
                <dl className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-line/60 pb-1.5">
                    <dt className="text-ink/75">Throughput:</dt>
                    <dd className="font-bold text-navy-900 text-right">{item.throughput}</dd>
                  </div>
                  <div className="flex justify-between border-b border-line/60 pb-1.5">
                    <dt className="text-ink/75">Sample Volume:</dt>
                    <dd className="font-semibold text-navy-900">{item.sampleVolume}</dd>
                  </div>
                  <div className="flex justify-between border-b border-line/60 pb-1.5">
                    <dt className="text-ink/75">Reagent Slots:</dt>
                    <dd className="font-semibold text-navy-900 text-right">{item.reagentPositions}</dd>
                  </div>
                  <div className="flex justify-between pt-1">
                    <dt className="text-ink/75">LIS Interface:</dt>
                    <dd className="font-semibold text-navy-900">{item.lisProtocol}</dd>
                  </div>
                </dl>
                <div className="mt-4 pt-3 border-t border-line">
                  <Link
                    to={item.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:underline"
                  >
                    <span>View platform specifications</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Engineering Advisory Note */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-azure-100 bg-azure-50/70 p-4 text-xs">
          <div className="flex items-center gap-2.5 text-navy-900 font-medium">
            <Cpu size={16} className="text-violet-600 shrink-0" />
            <span>Need tailored throughput modeling, physical footprint assessments, or custom interface drivers?</span>
          </div>
          <Link
            to="/contact?subject=Technical+Platform+Modeling"
            className="font-bold text-violet-700 hover:text-navy-900 whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            <span>Consult biomedical engineering</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** 6. FEATURED DIAGNOSTIC SYSTEMS SHOWCASE */
function FeaturedProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600">
              Hardware & Consumables
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Featured Diagnostic Systems
            </h2>
            <p className="mt-3 text-base text-ink max-w-2xl">
              Precision analyzers and reagent formulations engineered for continuous operational reliability.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-azure-600 hover:underline shrink-0"
          >
            <span>Complete catalog</span>
            <ArrowRight size={14} />
          </Link>
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

/** 7. CLINICAL ASSAY PANELS & DIAGNOSTIC MENU DEEP-DIVE (EXPANDED INTERACTIVE) */
function ClinicalAssayDeepDiveSection() {
  const panels = home.clinicalAssayDeepDive || [];
  const [activePanelId, setActivePanelId] = useState(panels[0]?.id || 'cardiac');

  const currentPanel = panels.find((p) => p.id === activePanelId) || panels[0];

  const panelIcons = {
    cardiac: HeartPulse,
    renal: Activity,
    hepatic: FlaskConical,
    sepsis: ShieldCheck,
    endocrine: Layers,
    hematology: Microscope,
  };

  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
            Clinical Testing Capabilities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Comprehensive Clinical Assay Menus
          </h2>
          <p className="mt-3 text-base text-ink">
            Targeted biomarker panels configured for high diagnostic sensitivity, minimal analytical interference, and rapid clinical decisions.
          </p>
        </div>

        {/* Specialty Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-line">
          {panels.map((p) => {
            const Icon = panelIcons[p.id] || Activity;
            const isActive = p.id === activePanelId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePanelId(p.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-subtle'
                    : 'bg-mist text-ink hover:text-navy-900 hover:bg-slate-200/70'
                }`}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{p.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Panel Detailed View */}
        {currentPanel && (
          <Reveal key={activePanelId} variant="fade">
            <div className="rounded-[2rem] border border-line bg-mist/60 p-6 sm:p-8 lg:p-10 shadow-subtle">
              {/* Panel Summary Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-line">
                <div>
                  <div className="flex items-center gap-2 text-violet-600 font-bold text-xs uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-violet-600" />
                    <span>Clinical Pathology Focus</span>
                  </div>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-navy-900">
                    {currentPanel.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/80 max-w-2xl">{currentPanel.subtitle}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="rounded-xl border border-line bg-white px-3.5 py-2">
                    <p className="text-[10px] font-bold text-ink/75 uppercase">Target Turnaround</p>
                    <p className="text-xs font-extrabold text-navy-900">{currentPanel.turnaround}</p>
                  </div>
                  <div className="rounded-xl border border-line bg-white px-3.5 py-2">
                    <p className="text-[10px] font-bold text-ink/75 uppercase">Sample Requirement</p>
                    <p className="text-xs font-extrabold text-navy-900">{currentPanel.sampleRequirement}</p>
                  </div>
                </div>
              </div>

              {/* Clinical Decision Note */}
              <div className="mt-6 rounded-xl bg-white p-4 border border-azure-100 text-xs sm:text-sm text-ink leading-relaxed">
                <strong className="text-navy-900">Clinical Utility & Significance: </strong>
                {currentPanel.clinicalDecision}
              </div>

              {/* Assays Grid */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3">
                  Key Parameters & Analytical Linearity
                </h4>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {currentPanel.assays.map((assay) => (
                    <div
                      key={assay.name}
                      className="rounded-xl border border-line bg-white p-4 transition-all hover:border-violet-300"
                    >
                      <p className="text-xs font-bold text-navy-900">{assay.name}</p>
                      <div className="mt-2 flex items-center justify-between text-[11px] text-ink/80 border-t border-line/60 pt-2">
                        <span className="text-ink/65">Linear Range:</span>
                        <span className="font-semibold text-navy-900">{assay.range}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-[11px] text-ink/80">
                        <span className="text-ink/65">Benchmark:</span>
                        <span className="font-medium text-violet-700 text-right">{assay.precision}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traceability Footer */}
              <div className="mt-6 pt-4 border-t border-line/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink/75">
                <p>
                  <strong className="text-navy-900">Reference Standardization: </strong>
                  {currentPanel.referenceStandard}
                </p>
                <Link
                  to="/products/diagnostic-solution-03"
                  className="font-bold text-violet-600 hover:text-navy-900 shrink-0 flex items-center gap-1"
                >
                  <span>Request assay package insert</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/** 8. TECHNOLOGY & ANALYTICAL CAPABILITIES */
function TechnologySection() {
  const techPoints = [
    {
      title: 'Multi-Wavelength Photometric Optics',
      desc: '12 discrete optical wavelengths (340–800 nm) utilizing concave holographic flat-field gratings.',
      icon: Microscope,
    },
    {
      title: 'Triple-Sensor Sample Integrity',
      desc: 'Capacitive liquid-level sensing, mechanical clot detection, and micro-bubble optical rejection.',
      icon: Activity,
    },
    {
      title: 'Refrigerated Reagent Protection',
      desc: 'Continuous 2°C–8°C onboard chilling preserves enzyme activity and calibration curves for 30+ days.',
      icon: FlaskConical,
    },
    {
      title: 'Bi-Directional LIS Interoperability',
      desc: 'Native ASTM 1394 and HL7 v2.x protocols ensure real-time query-host sample accession and result dispatch.',
      icon: Cpu,
    },
  ];

  return (
    <section className="section bg-navy-950 text-white relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-3xl pointer-events-none"
      />

      <div className="container-site relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
              Analytical Precision
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Diagnostic Hardware & Informatics Engineering
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed">
              Clinical decision-making relies fundamentally on repeatable analytical findings. Efyion Dx unites
              precision opto-mechanical hardware with modern digital middleware to minimize technician burden.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {techPoints.map((tp, idx) => {
                const Icon = tp.icon;
                return (
                  <Reveal key={tp.title} delay={idx * 60}>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 transition-all duration-300 hover:bg-white/10 hover:border-violet-400/40">
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

          <div className="lg:col-span-5">
            <Reveal variant="scale">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy-900 border border-white/10 shadow-2xl">
                <SmartImage
                  image={slots.technologyImage}
                  label="Diagnostic Optical & Analytical Hardware"
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

/** 9. OPERATIONAL EFFICIENCY & LABORATORY ECONOMIC VALUE (NEW SECTION) */
function EconomicValueSection() {
  const { economicValue } = home;

  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
            {economicValue.kicker}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {economicValue.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink leading-relaxed">
            {economicValue.lead}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {economicValue.metrics.map((m, idx) => (
            <Reveal key={m.label} delay={idx * 70}>
              <div
                className="h-full rounded-2xl border border-line bg-mist/60 p-6 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-subtle hover:border-violet-300 hover:-translate-y-1"
              >
                <div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-azure-600 tracking-tight">
                    {m.value}
                  </p>
                  <h3 className="mt-2 text-base font-bold text-navy-900">{m.label}</h3>
                  <p className="mt-2 text-xs text-ink/80 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Operational ROI Banner */}
        <Reveal delay={120}>
          <div className="mt-8 rounded-2xl border border-line bg-azure-50/70 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-navy-900">
                Predictable Operational Budgeting & Shift Continuity
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-ink leading-relaxed">
                Standardized liquid-stable packaging, automated 2D barcode lot loading, and multi-analyzer middleware
                streamline technician workflows and reduce routine reagent loss by up to 25% across high-throughput shifts.
              </p>
            </div>
            <Button to="/contact?subject=Economic+Value+and+TCO+Inquiry" className="shrink-0 text-sm font-bold">
              Request TCO & throughput review
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 10. CLINICAL SOLUTIONS ACROSS CARE SETTINGS */
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

/** 11. DIAGNOSTIC WORKFLOW */
function WorkflowSection() {
  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal variant="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line">
                <SmartImage
                  image={slots.workflowImage}
                  label="Laboratory Sample Workflow"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal variant="right">
              <SectionHeading
                title="From Initial Assessment to Ongoing Care"
                text="A structured four-phase pathway ensuring smooth instrument commissioning, validation, and long-term diagnostic confidence."
                className="mb-8"
              />
              <Workflow />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 12. QUALITY & REGULATORY RIGOR */
function QualitySection() {
  const { qualitySection } = home;

  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal variant="left">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                Quality Governance
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                {qualitySection.title}
              </h2>
              <p className="lead mt-4 text-ink">{qualitySection.lead}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {qualitySection.points.map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 60}>
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

          <div className="lg:col-span-5">
            <Reveal variant="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line">
                <SmartImage
                  image={slots.qualityImage}
                  label="Quality Assurance & Calibration Standards"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 13. LABORATORY PROCUREMENT, REAGENT SUPPLY & TECHNICAL FAQ (NEW SECTION) */
function LaboratoryFaqSection() {
  const faqs = home.laboratoryFaqs || [];
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
            Laboratory Technical Advisory
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Frequently Asked Technical & Procurement Questions
          </h2>
          <p className="mt-3 text-base text-ink">
            Answers regarding pure water deionization, LIS query-host interfaces, reagent open-channel flexibility, and maintenance SLAs.
          </p>
        </div>

        <Reveal>
          <div className="max-w-4xl divide-y divide-line rounded-2xl border border-line bg-white shadow-subtle overflow-hidden">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.q} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-slate-50 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-navy-900">
                      {faq.q}
                    </span>
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mist text-violet-600 transition-transform">
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-ink leading-relaxed border-t border-line/40 bg-slate-50/50">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-line bg-mist p-4 text-xs">
          <p className="text-ink">
            Have a custom LIS specification, specific electrical layout, or unique clinical panel inquiry?
          </p>
          <Link
            to="/contact"
            className="font-bold text-violet-600 hover:text-navy-900 shrink-0 flex items-center gap-1"
          >
            <span>Contact scientific advisory</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** 14. OPERATING PRINCIPLES — WHY EFYION DX */
function PrinciplesSection() {
  const { why } = home;

  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site">
        <SectionHeading
          title={why.title}
          text={why.text}
          className="mb-12 lg:mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {why.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 60}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-subtle hover:-translate-y-1 hover:border-violet-300">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-azure-50 text-violet-600 mb-4">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-xs text-ink/80 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** 15. PROFESSIONAL TECHNICAL SUPPORT & ONBOARDING */
function SupportSection() {
  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal variant="left">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
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
                ].map((s) => (
                  <div key={s.title} className="rounded-2xl border border-line bg-mist/60 p-4">
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

          <div className="lg:col-span-5">
            <Reveal variant="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line">
                <SmartImage
                  image={slots.supportImage}
                  label="Technical Advisory & Support Advisory"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 16. KNOWLEDGE HUB & TECHNICAL RESOURCES PREVIEW */
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
