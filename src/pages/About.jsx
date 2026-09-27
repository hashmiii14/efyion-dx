import {
  Check,
  ShieldCheck,
  Headset,
  Layers,
  Wrench,
  Microscope,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHero from '../components/sections/PageHero';
import ImageText from '../components/sections/ImageText';
import Workflow from '../components/sections/Workflow';
import CTASection from '../components/sections/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { about } from '../content/pages';
import { site } from '../content/site';

export default function About() {
  usePageMeta({
    title: 'About Efyion Dx | Precision Clinical Diagnostics',
    description:
      'Learn about Efyion Dx: our vision, diagnostic governance, clinical advisory team structure, and structured laboratory onboarding roadmap.',
  });

  return (
    <>
      <PageHero
        title={about.hero.title}
        text={about.hero.text}
        image={about.hero.image}
        crumbs={[{ label: 'About' }]}
      />

      {/* Intro & Core Profile */}
      <ImageText image={about.intro.image} title={about.intro.title}>
        <div className="space-y-4 text-base sm:text-lg text-slate-600">
          {about.intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {about.profile.map((row) => (
            <div key={row.label} className="bg-white p-5">
              <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{row.label}</dt>
              <dd className={`mt-1 font-bold text-sm sm:text-base ${row.value ? 'text-navy-900' : 'text-slate-400'}`}>
                {row.value || site.companyInfo}
              </dd>
            </div>
          ))}
        </dl>
      </ImageText>

      {/* Vision & Mission */}
      <section className="section bg-slate-50/70 border-t border-line">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {[about.vision, about.mission].map((block, i) => {
            const Icon = block.icon;
            return (
              <Reveal
                key={block.title}
                delay={i * 80}
                className={`relative overflow-hidden rounded-2xl p-8 sm:p-10 ${
                  i === 0 ? 'bg-navy-900 text-white' : 'bg-white border border-line shadow-xs'
                }`}
              >
                <Icon size={26} className={i === 0 ? 'text-blue-400' : 'text-blue-600'} aria-hidden="true" />
                <h2 className={`mt-5 text-xs font-bold uppercase tracking-wider ${i === 0 ? 'text-slate-300' : 'text-slate-500'}`}>
                  {block.title}
                </h2>
                <p className={`mt-2.5 text-xl font-extrabold leading-snug tracking-tight sm:text-2xl ${i === 0 ? 'text-white' : 'text-navy-900'}`}>
                  {block.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white border-t border-line">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              title="Guiding Values & Standards"
              text="What we hold ourselves to across every laboratory partnership and analytical platform."
              className="mb-10 lg:mb-12"
            />
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal as="li" key={v.title} delay={i * 60} className="rounded-xl border border-line bg-slate-50/60 p-5 flex flex-col justify-between">
                  <div>
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-white text-blue-600 border border-slate-200 shadow-xs">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-base sm:text-lg font-bold text-navy-900">{v.title}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Diagnostic Governance & Quality Principles */}
      {about.governance && (
        <section className="section bg-slate-50/70 border-t border-line">
          <div className="container-site">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Regulatory Rigor
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight">
                {about.governance.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                {about.governance.lead}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {about.governance.items.map((item) => (
                <div key={item.title} className="rounded-xl border border-line bg-white p-5 sm:p-6 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
                    <ShieldCheck size={16} />
                    <span>Quality Benchmark</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Laboratory Technical Advisory Structure */}
      {about.advisory && (
        <section className="section bg-white border-t border-line">
          <div className="container-site">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Application Expertise
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight">
                {about.advisory.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                {about.advisory.lead}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {about.advisory.roles.map((r, i) => {
                const icons = [Wrench, Microscope, Cpu];
                const Icon = icons[i % icons.length];
                return (
                  <div key={r.role} className="rounded-xl border border-line bg-slate-50/60 p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600 mb-3.5 border border-blue-100">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-navy-900">{r.role}</h3>
                      <p className="mt-1 text-xs font-semibold text-blue-600">{r.focus}</p>
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Structured Laboratory Onboarding Phases */}
      {about.onboardingPhases && (
        <section className="section bg-navy-950 text-white border-t border-slate-800">
          <div className="container-site">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                Implementation Methodology
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Structured Onboarding Roadmap
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                Every platform deployment is managed systematically to ensure zero analytical disruption to your hospital or clinic.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {about.onboardingPhases.map((phase) => (
                <div key={phase.phase} className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">{phase.phase}</span>
                    <h3 className="mt-2 text-sm sm:text-base font-bold text-white">{phase.title}</h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Collaborative Workflow */}
      <section className="section bg-white border-t border-line">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              title={about.approach.title}
              text={about.approach.text}
              className="mb-12 lg:mb-16"
            />
          </Reveal>
          <Workflow />
        </div>
      </section>

      {/* Technology & Innovation Callout */}
      <ImageText
        image={about.technology.image}
        title={about.technology.title}
        text={about.technology.text}
        reverse
      >
        <Button to={about.technology.cta.to} variant="outline">
          {about.technology.cta.label}
        </Button>
      </ImageText>

      {/* Quality Focus */}
      <ImageText
        image={about.quality.image}
        title={about.quality.title}
        text={about.quality.text}
        className="pt-0 sm:pt-0 lg:pt-0"
      />

      <CTASection />
    </>
  );
}
