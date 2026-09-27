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
                  className="inline-flex min-h-[38px] items-center rounded-lg border border-slate-200 bg-white px-3.5 text-xs sm:text-sm font-semibold text-navy-900 transition-colors hover:border-blue-600 hover:text-blue-600"
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
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <Icon size={20} aria-hidden="true" />
            </span>
          </ImageText>
        );
      })}

      {/* Opto-Mechanical Hardware Architecture Deep Dive */}
      <section id="architecture" className="scroll-mt-24 section bg-navy-950 text-white relative overflow-hidden">
        <div className="container-site relative">
          <div className="max-w-3xl mb-10 lg:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
              Opto-Mechanical Engineering
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Hardware Architecture & Fluidic Mechanics
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Every analyzer platform is engineered with redundant sensor arrays and optical components designed to deliver consistent analytical findings across multi-shift hospital operations.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {optoMechanical.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between transition-all hover:bg-white/10 hover:border-blue-400/40"
              >
                <div>
                  <span className="inline-block rounded bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold text-blue-300 border border-blue-500/30 uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Validation Standards Card */}
          <div className="mt-10 rounded-xl border border-white/15 bg-white/5 p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Analytical Method Validation & CLSI Guidelines
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prior to clinical commissioning, all assay parameters undergo rigorous verification in accordance with
                CLSI EP5-A2 (Precision), EP6-A (Linearity), and EP17-A (Detection Capability) international guidelines.
              </p>
            </div>
            <Link
              to="/contact?subject=Validation+Protocol+Request"
              className="inline-flex min-h-[42px] items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-bold text-white transition-colors hover:bg-blue-700 shrink-0 shadow-sm"
            >
              Request validation protocols
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Governance Section */}
      <section id="quality" className="scroll-mt-24 section bg-white border-t border-line">
        <div className="container-site">
          <Reveal className="relative isolate overflow-hidden rounded-2xl bg-slate-50/80 p-8 sm:p-12 lg:p-14 border border-line">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <QIcon size={28} className="text-blue-600" aria-hidden="true" />
                <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">{q.title}</h2>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">{q.text}</p>
                <ul className="mt-6 space-y-3">
                  {q.principles.map((p) => (
                    <li key={p} className="flex items-start gap-3 font-semibold text-navy-900 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-600 text-white">
                        <Check size={11} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:pt-2">
                <h3 className="text-lg font-bold text-navy-900">Certifications & Regulatory Alignment</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our quality documentation and data traceability architectures are engineered to support clinical laboratory compliance with international standards.
                </p>

                <div className="mt-5 space-y-3">
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
                    <div key={cert.name} className="flex items-start gap-3.5 rounded-xl bg-white p-4 border border-line shadow-xs">
                      <FileCheck2 className="shrink-0 text-blue-600 mt-0.5" size={18} aria-hidden="true" />
                      <div>
                        <p className="font-bold text-xs sm:text-sm text-navy-900">{cert.name}</p>
                        <p className="mt-0.5 text-xs text-slate-600 leading-relaxed">{cert.desc}</p>
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
