import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
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
  Microscope,
  HeartPulse,
  MonitorSmartphone,
  FileText,
  BadgeCheck,
  Zap,
  Building2,
  Stethoscope,
  ClipboardPlus,
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Button, { TextLink } from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import SmartImage from '../components/ui/SmartImage';
import CategoryCard from '../components/sections/CategoryCard';
import ProductCard from '../components/sections/ProductCard';
import AudienceTabs from '../components/sections/AudienceTabs';
import Workflow from '../components/sections/Workflow';
import CTASection from '../components/sections/CTASection';
import { CurveBackdrop } from '../components/sections/PageHero';
import { home, homeResources } from '../content/pages';
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

      {/* 5. Featured Diagnostic Systems Showcase */}
      <FeaturedProductsSection />

      {/* 6. Technology & Analytical Capabilities */}
      <TechnologySection />

      {/* 7. Clinical Solutions Across Care Settings */}
      <CareSettingsSection />

      {/* 8. Diagnostic Workflow: Intake to Insight */}
      <WorkflowSection />

      {/* 9. Precision & Quality Governance */}
      <QualitySection />

      {/* 10. Clinical Applications & Test Panel Matrix */}
      <ClinicalPanelsSection />

      {/* 11. Operating Principles — Why Efyion Dx */}
      <PrinciplesSection />

      {/* 12. Technical Support & Onboarding Framework */}
      <SupportSection />

      {/* 13. Knowledge Hub & Technical Documentation */}
      <ResourcesSection />

      {/* 14. Bottom Conversion CTA */}
      <CTASection />
    </>
  );
}

/** 1. HERO SECTION */
function Hero() {
  const { hero } = home;

  return (
    <section className="relative isolate -mt-[64px] sm:-mt-[68px] lg:-mt-[74px] overflow-hidden bg-mist pt-[64px] sm:pt-[68px] lg:pt-[74px]">
      <CurveBackdrop />

      <div className="container-site relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Hero Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-violet-700 shadow-xs mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-600 animate-pulse" />
              <span>{hero.kicker}</span>
            </div>

            <h1
              className="text-[2.35rem] leading-[1.08] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-navy-900 tracking-tight"
              style={{ letterSpacing: '-0.035em' }}
            >
              <span>Precision Diagnostics.</span>
              <br />
              <span className="text-violet-600">Better Outcomes.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-ink/90 leading-relaxed font-normal">
              Equipping clinical laboratories, hospital networks, and acute care facilities with
              high-throughput automated analyzers, standardized liquid-stable reagents, and
              responsive application advisory.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button to="/products" className="!min-h-[44px] sm:!min-h-[46px] text-sm font-bold">
                Explore diagnostic systems
              </Button>
              <Button
                to="/contact"
                variant="outline"
                className="!min-h-[44px] sm:!min-h-[46px] text-sm font-bold"
              >
                Request consultation
              </Button>
            </div>

            {/* Quick Metrics Tag */}
            <div className="mt-8 pt-6 border-t border-line/60 grid grid-cols-3 gap-3 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-navy-900">400 T/H</p>
                <p className="text-xs font-semibold text-ink/75">Photometric Capacity</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-navy-900">2.0 µL</p>
                <p className="text-xs font-semibold text-ink/75">Micro-Volume Sample</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-navy-900">HL7 / ASTM</p>
                <p className="text-xs font-semibold text-ink/75">Bi-Directional LIS</p>
              </div>
            </div>
          </div>

          {/* Hero Media Slot */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line">
                <SmartImage
                  image={slots.heroImage}
                  label="Efyion Dx Diagnostic Analyzer Platform"
                  priority
                />
              </div>

              {/* Floating Specification Card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 rounded-2xl border border-line bg-white/95 p-3.5 shadow-subtle backdrop-blur-md">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600">
                  <Activity size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-900">Multi-Channel Detection</p>
                  <p className="text-[11px] font-medium text-ink/75">Continuous STAT Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          {trustStrip.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-azure-50 text-violet-600 border border-azure-100/80">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-navy-900">{item.title}</h2>
                  <p className="mt-1 text-xs text-ink/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line">
              <SmartImage
                image={slots.aboutImage}
                label="Clinical Diagnostic Operations"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
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
              <Button to="/about" variant="outline" className="!min-h-[42px] text-sm font-bold">
                Learn more about Efyion Dx
              </Button>
            </div>
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
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
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
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
              activeCategory === 'all'
                ? 'bg-navy-900 text-white shadow-xs'
                : 'bg-mist text-ink hover:text-navy-900'
            }`}
          >
            All Systems (6)
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActiveCategory(c.slug)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                activeCategory === c.slug
                  ? 'bg-navy-900 text-white shadow-xs'
                  : 'bg-mist text-ink hover:text-navy-900'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
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
              {techPoints.map((tp) => {
                const Icon = tp.icon;
                return (
                  <div key={tp.title} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <Icon size={20} className="text-violet-400 mb-2" aria-hidden="true" />
                    <h3 className="text-sm font-bold text-white">{tp.title}</h3>
                    <p className="mt-1 text-xs text-white/65 leading-relaxed">{tp.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button to="/technology" className="!min-h-[44px] text-sm font-bold bg-white !text-navy-900 hover:bg-slate-100">
                Explore technology & quality
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy-900 border border-white/10 shadow-2xl">
              <SmartImage
                image={slots.technologyImage}
                label="Diagnostic Optical & Analytical Hardware"
                dark
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 7. CLINICAL SOLUTIONS ACROSS CARE SETTINGS */
function CareSettingsSection() {
  return (
    <section className="section bg-white">
      <div className="container-site">
        <SectionHeading
          title="Tailored for Every Diagnostic Setting"
          text="From high-throughput central hospital laboratories to bedside point-of-care suites and research institutions."
          className="mb-12 lg:mb-16"
        />
        <AudienceTabs />
      </div>
    </section>
  );
}

/** 8. DIAGNOSTIC WORKFLOW */
function WorkflowSection() {
  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line">
              <SmartImage
                image={slots.workflowImage}
                label="Laboratory Sample Workflow"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              title="From Initial Assessment to Ongoing Care"
              text="A structured four-phase pathway ensuring smooth instrument commissioning, validation, and long-term diagnostic confidence."
              className="mb-8"
            />
            <Workflow />
          </div>
        </div>
      </div>
    </section>
  );
}

/** 9. QUALITY & REGULATORY RIGOR */
function QualitySection() {
  const { qualitySection } = home;

  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
              Quality Governance
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              {qualitySection.title}
            </h2>
            <p className="lead mt-4 text-ink">{qualitySection.lead}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {qualitySection.points.map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-mist/60 p-4">
                  <h3 className="text-sm font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-1 text-xs text-ink/80 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button to="/technology#quality" variant="outline" className="!min-h-[42px] text-sm font-bold">
                Review quality governance
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line">
              <SmartImage
                image={slots.qualityImage}
                label="Quality Assurance & Calibration Standards"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 10. CLINICAL APPLICATIONS & TEST PANEL MATRIX (EXPANDED DEPTH) */
function ClinicalPanelsSection() {
  const panels = [
    {
      title: 'Cardiac & Vascular Assessment',
      icon: HeartPulse,
      tags: ['hs-Troponin I/T', 'CK-MB', 'Myoglobin', 'D-Dimer', 'NT-proBNP'],
      summary: 'High-sensitivity quantitative detection of acute coronary syndromes and thrombotic events.',
    },
    {
      title: 'Comprehensive Metabolic & Renal',
      icon: Activity,
      tags: ['Creatinine', 'BUN/Urea', 'eGFR', 'Electrolytes (Na/K/Cl)', 'Uric Acid'],
      summary: 'Essential renal clearance and metabolic profiling with micro-sample volume requirements.',
    },
    {
      title: 'Hepatic & Liver Function',
      icon: FlaskConical,
      tags: ['ALT', 'AST', 'ALP', 'Total/Direct Bilirubin', 'Albumin', 'Total Protein'],
      summary: 'Routine and specialized enzyme kinetics ensuring accurate liver disease evaluation.',
    },
    {
      title: 'Sepsis & Infectious Inflammation',
      icon: ShieldCheck,
      tags: ['Procalcitonin (PCT)', 'High-Sensitivity CRP', 'Ferritin', 'IL-6'],
      summary: 'Critical inflammatory biomarkers supporting antimicrobial stewardship and ICU triage.',
    },
    {
      title: 'Endocrine & Thyroid Profiles',
      icon: Layers,
      tags: ['TSH', 'Free T3', 'Free T4', 'Anti-TPO', 'Beta-hCG', '25-OH Vitamin D'],
      summary: 'Sub-picogram chemiluminescence sensitivity across comprehensive hormone pathways.',
    },
    {
      title: 'Laboratory Data & Connectivity',
      icon: MonitorSmartphone,
      tags: ['HL7 v2.x', 'ASTM 1394', 'Automated Delta-Check', 'Levey-Jennings QC'],
      summary: 'Bi-directional middleware interfacing analyzers with hospital EHR and LIMS networks.',
    },
  ];

  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site">
        <SectionHeading
          title="Clinical Applications & Test Menus"
          text="Targeted assay configurations supporting decisive clinical triage and routine pathology workloads."
          className="mb-12 lg:mb-16"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {panels.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-line bg-white p-6 transition-all hover:shadow-subtle hover:border-violet-300"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600 mb-4">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-navy-900">{p.title}</h3>
                <p className="mt-1 text-xs text-ink/75 leading-relaxed">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-azure-50 px-2 py-0.5 text-[11px] font-semibold text-navy-900 border border-azure-100/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** 11. OPERATING PRINCIPLES — WHY EFYION DX */
function PrinciplesSection() {
  const { why } = home;

  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site">
        <SectionHeading
          title={why.title}
          text={why.text}
          className="mb-12 lg:mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {why.items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-azure-50 text-violet-600 mb-4">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-xs text-ink/80 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** 12. PROFESSIONAL TECHNICAL SUPPORT & ONBOARDING */
function SupportSection() {
  return (
    <section className="section bg-mist border-t border-line">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
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
                <div key={s.title} className="rounded-2xl border border-line bg-white p-4">
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
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-lift border border-line">
              <SmartImage
                image={slots.supportImage}
                label="Technical Advisory & Support Advisory"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 13. KNOWLEDGE HUB & TECHNICAL RESOURCES PREVIEW */
function ResourcesSection() {
  const featuredResources = resources.slice(0, 3);

  return (
    <section className="section bg-white border-t border-line">
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
          {featuredResources.map((r) => (
            <article
              key={r.slug}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:shadow-subtle"
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
          ))}
        </div>
      </div>
    </section>
  );
}
