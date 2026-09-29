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
import { PENDING } from '../content/catalog';

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
        <div className="space-y-4 text-base sm:text-lg text-ink">
          {about.intro.paragraphs.map((p, idx) => (
            <p key={p} className={idx > 0 ? 'hidden md:block' : ''}>
              {p}
            </p>
          ))}
        </div>
        <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {about.profile.map((row) => (
            <div key={row.label} className="bg-white p-5">
              <dt className="text-xs font-semibold text-ink/75 uppercase tracking-wider">{row.label}</dt>
              <dd className="mt-1 font-bold text-sm sm:text-base text-navy-900">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </ImageText>

      {/* Vision & Mission */}
      <section className="section bg-mist border-t border-line">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {[about.vision, about.mission].map((block, i) => {
            const Icon = block.icon;
            return (
              <Reveal
                key={block.title}
                delay={i * 100}
                className={`relative overflow-hidden rounded-[2rem] p-8 sm:p-12 ${
                  i === 0 ? 'bg-navy-900 text-white' : 'bg-white border border-line shadow-xs'
                }`}
              >
                <Icon size={28} className={i === 0 ? 'text-violet-400' : 'text-violet-600'} aria-hidden="true" />
                <h2 className={`mt-6 text-sm font-bold uppercase tracking-wider ${i === 0 ? 'text-white/70' : 'text-ink/75'}`}>
                  {block.title}
                </h2>
                <p className={`mt-3 text-xl font-extrabold leading-snug tracking-tight sm:text-2xl ${i === 0 ? 'text-white' : 'text-navy-900'}`}>
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
              className="mb-12 lg:mb-16"
            />
          </Reveal>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal as="li" key={v.title} delay={i * 70} className="rounded-2xl border border-line bg-mist/50 p-6 flex flex-col justify-between">
                  <div>
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-violet-600 border border-line shadow-xs">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-navy-900">{v.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-ink/80 leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Diagnostic Governance & Quality Principles (NEW DEPTH) */}
      {about.governance && (
        <section className="section bg-mist border-t border-line">
          <div className="container-site">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                Regulatory Rigor
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                {about.governance.title}
              </h2>
              <p className="mt-3 text-base text-ink">
                {about.governance.lead}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {about.governance.items.map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-white p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center gap-2 text-violet-600 font-bold text-xs uppercase tracking-wider mb-2">
                    <ShieldCheck size={16} />
                    <span>Quality Benchmark</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink/85 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Laboratory Technical Advisory Structure (NEW DEPTH) */}
      {about.advisory && (
        <section className="section bg-white border-t border-line">
          <div className="container-site">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                Application Expertise
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                {about.advisory.title}
              </h2>
              <p className="mt-3 text-base text-ink">
                {about.advisory.lead}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {about.advisory.roles.map((r, i) => {
                const icons = [Wrench, Microscope, Cpu];
                const Icon = icons[i % icons.length];
                return (
                  <div key={r.role} className="rounded-2xl border border-line bg-mist/50 p-6 flex flex-col justify-between">
                    <div>
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-100 text-violet-700 mb-4">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-navy-900">{r.role}</h3>
                      <p className="mt-1 text-xs font-semibold text-violet-700">{r.focus}</p>
                      <p className="mt-3 text-xs sm:text-sm text-ink/80 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Structured Laboratory Onboarding Phases (NEW DEPTH) */}
      {about.onboardingPhases && (
        <section className="section bg-navy-950 text-white border-t border-navy-900">
          <div className="container-site">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                Implementation Methodology
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Structured Onboarding Roadmap
              </h2>
              <p className="mt-3 text-base text-white/75">
                Every platform deployment is managed systematically to ensure zero analytical disruption to your hospital or clinic.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {about.onboardingPhases.map((phase) => (
                <div key={phase.phase} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-violet-400 uppercase tracking-widest">{phase.phase}</span>
                    <h3 className="mt-2 text-base font-bold text-white">{phase.title}</h3>
                    <p className="mt-2 text-xs text-white/70 leading-relaxed">{phase.desc}</p>
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
              className="mb-14 lg:mb-20"
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
