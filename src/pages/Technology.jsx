import {
  Check,
  FileCheck2,
  Cpu,
  Microscope,
  Activity,
  Layers,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Database,
  BarChart2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHero from '../components/sections/PageHero';
import ImageText from '../components/sections/ImageText';
import CTASection from '../components/sections/CTASection';
import Reveal from '../components/ui/Reveal';
import { technology } from '../content/pages';

export default function Technology() {
  usePageMeta({
    title: 'Diagnostic Technology & Quality Governance | Efyion Dx',
    description:
      'Explore the opto-mechanical hardware architecture, digital LIS connectivity, and rigorous quality governance behind Efyion Dx diagnostic platforms.',
  });

  const q = technology.quality;
  const QIcon = q.icon;
  const optoMechanical = technology.optoMechanical || [];

  return (
    <>
      <PageHero
        title={technology.hero.title}
        text={technology.hero.text}
        image={technology.hero.image}
        crumbs={[{ label: 'Technology & Quality' }]}
      >
        <nav aria-label="Sections on this page">
          <ul className="flex flex-wrap gap-2">
            {[
              ...technology.sections,
              { id: 'architecture', title: 'Hardware architecture' },
              { id: 'quality', title: 'Quality framework' },
            ].map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex min-h-[40px] items-center rounded-full border border-navy-900/15 bg-white/70 px-4 text-xs sm:text-sm font-bold text-navy-900 transition-colors hover:border-navy-900 hover:bg-white"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {/* Primary Technology Sections */}
      {technology.sections.map((s, i) => {
        const Icon = s.icon;
        return (
          <ImageText
            key={s.id}
            id={s.id}
            image={s.image}
            title={s.title}
            text={s.text}
            reverse={i % 2 === 1}
            className={`scroll-mt-24 ${i > 0 ? 'pt-0 sm:pt-0 lg:pt-0' : ''}`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-1">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-azure-50 text-violet-600 border border-azure-100 shadow-xs">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                  Engineering Architecture
                </span>
              </div>

              {s.paragraphs?.map((p, idx) => (
                <p key={idx} className="text-base text-ink leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              {s.highlights && (
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 pt-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-navy-900">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-700">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ImageText>
        );
      })}

      {/* Opto-Mechanical Hardware Architecture Deep Dive (NEW DEPTH) */}
      <section id="architecture" className="scroll-mt-24 section bg-navy-950 text-white relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-3xl pointer-events-none"
        />

        <div className="container-site relative">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
              Opto-Mechanical Engineering
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Hardware Architecture & Fluidic Mechanics
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed">
              Every analyzer platform is engineered with redundant sensor arrays and optical components designed to deliver consistent analytical findings across multi-shift hospital operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {optoMechanical.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between transition-all hover:bg-white/10 hover:border-violet-400/40"
              >
                <div>
                  <span className="inline-block rounded-md bg-violet-500/20 px-2.5 py-1 text-[10px] font-bold text-violet-300 border border-violet-500/30 uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Validation Standards Card */}
          <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-white">
                Analytical Method Validation & CLSI Guidelines
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                Prior to clinical commissioning, all assay parameters undergo rigorous verification in accordance with
                CLSI EP5-A2 (Precision), EP6-A (Linearity), and EP17-A (Detection Capability) international guidelines.
              </p>
            </div>
            <Link
              to="/contact?subject=Validation+Protocol+Request"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-navy-900 transition-colors hover:bg-slate-100 shrink-0"
            >
              Request validation protocols
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Governance Section */}
      <section id="quality" className="scroll-mt-24 section bg-white border-t border-line">
        <div className="container-site">
          <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-mist p-8 sm:rounded-[2.5rem] sm:p-12 lg:p-16 border border-line">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <QIcon size={32} className="text-violet-600" aria-hidden="true" />
                <h2 className="mt-6 text-3xl font-extrabold text-navy-900 tracking-tight">{q.title}</h2>
                <p className="mt-4 text-base sm:text-lg text-ink leading-relaxed">{q.text}</p>
                <ul className="mt-8 space-y-3.5">
                  {q.principles.map((p) => (
                    <li key={p} className="flex items-start gap-3 font-semibold text-navy-900 text-sm sm:text-base">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:pt-6">
                <h3 className="text-xl font-bold text-navy-900">Certifications & Regulatory Alignment</h3>
                <p className="mt-2 text-xs sm:text-sm text-ink leading-relaxed">
                  Our quality documentation and data traceability architectures are engineered to support clinical laboratory compliance with international standards.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      name: 'ISO 13485 Design Control Principles',
                      desc: 'Design verification, risk mitigation, and software lifecycle traceability for IVD medical equipment.',
                    },
                    {
                      name: 'ISO 15189 Laboratory Alignment',
                      desc: 'Automated Levey-Jennings QC tracking, multi-rule Westgard validation, and electronic operator audit logs.',
                    },
                    {
                      name: 'WHO & NIST Calibrator Traceability',
                      desc: 'Reagents and multi-analyte calibrators traceable to certified reference materials (CRM) with lot-specific CoAs.',
                    },
                  ].map((cert) => (
                    <div key={cert.name} className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-line shadow-xs">
                      <FileCheck2 className="shrink-0 text-violet-600 mt-1" size={20} aria-hidden="true" />
                      <div>
                        <p className="font-bold text-sm text-navy-900">{cert.name}</p>
                        <p className="mt-1 text-xs text-ink/80 leading-relaxed">{cert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Questions about our technology or quality approach?"
        text="Our biomedical engineering and applications team is available to discuss analytical specifications and facility integration."
      />
    </>
  );
}
