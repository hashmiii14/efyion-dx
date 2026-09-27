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
    title: 'About',
    description: 'Learn about Efyion Dx, a diagnostics company focused on precision diagnostics and healthcare-oriented solutions.',
  });

  return (
    <>
      <PageHero title={about.hero.title} text={about.hero.text} image={about.hero.image} crumbs={[{ label: 'About' }]} />

      <ImageText image={about.intro.image} title={about.intro.title}>
        <div className="space-y-4 text-lg">
          {about.intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {about.profile.map((row) => (
            <div key={row.label} className="bg-white p-5">
              <dt className="text-sm font-semibold text-ink">{row.label}</dt>
              <dd className={`mt-1 font-bold ${row.value ? 'text-navy-900' : 'text-ink/60'}`}>{row.value || PENDING}</dd>
            </div>
          ))}
        </dl>
      </ImageText>

      {/* Vision & mission */}
      <section className="section bg-mist">
        <div className="container-site grid gap-5 md:grid-cols-2">
          {[about.vision, about.mission].map((block, i) => {
            const Icon = block.icon;
            return (
              <Reveal
                key={block.title}
                delay={i * 100}
                className={`relative overflow-hidden rounded-[2rem] p-8 sm:p-12 ${i === 0 ? 'bg-navy-900 text-white' : 'bg-white'}`}
              >
                <Icon size={28} className={i === 0 ? 'text-violet-500' : 'text-violet-600'} aria-hidden="true" />
                <h2 className={`mt-8 text-lg font-bold ${i === 0 ? 'text-white/70' : 'text-ink'}`}>{block.title}</h2>
                <p className={`mt-3 text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl ${i === 0 ? 'text-white' : 'text-navy-900'}`}>
                  {block.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-site">
          <Reveal>
            <SectionHeading title="Our values" text="What we hold ourselves to in every conversation and every solution." className="mb-12 lg:mb-16" />
          </Reveal>
          <ul className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal as="li" key={v.title} delay={i * 70} className="border-t-2 border-navy-900 pt-6 pb-8">
                  <Icon size={24} className="text-violet-600" aria-hidden="true" />
                  <h3 className="mt-5 text-2xl">{v.title}</h3>
                  <p className="mt-2 text-ink">{v.text}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeading title={about.approach.title} text={about.approach.text} className="mb-14 lg:mb-20" />
          </Reveal>
          <Workflow />
        </div>
      </section>

      <ImageText image={about.technology.image} title={about.technology.title} text={about.technology.text} reverse>
        <Button to={about.technology.cta.to} variant="outline">{about.technology.cta.label}</Button>
      </ImageText>

      <ImageText image={about.quality.image} title={about.quality.title} text={about.quality.text} className="pt-0 sm:pt-0 lg:pt-0" />

      <CTASection />
    </>
  );
}
