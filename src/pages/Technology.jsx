import { Check, FileCheck2 } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHero from '../components/sections/PageHero';
import ImageText from '../components/sections/ImageText';
import CTASection from '../components/sections/CTASection';
import Reveal from '../components/ui/Reveal';
import { technology } from '../content/pages';

export default function Technology() {
  usePageMeta({
    title: 'Technology & Quality',
    description: 'How Efyion Dx approaches diagnostic technology, innovation, research and quality.',
  });
  const q = technology.quality;
  const QIcon = q.icon;

  return (
    <>
      <PageHero title={technology.hero.title} text={technology.hero.text} image={technology.hero.image} crumbs={[{ label: 'Technology & Quality' }]}>
        <nav aria-label="Sections on this page">
          <ul className="flex flex-wrap gap-2">
            {[...technology.sections, { id: 'quality', title: 'Quality focus' }].map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="inline-flex min-h-[40px] items-center rounded-full border border-navy-900/15 bg-white/70 px-4 text-sm font-bold text-navy-900 transition-colors hover:border-navy-900">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

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
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-violet-600">
              <Icon size={22} aria-hidden="true" />
            </span>
          </ImageText>
        );
      })}

      {/* Quality */}
      <section id="quality" className="scroll-mt-24 pb-20 sm:pb-24 lg:pb-28">
        <div className="container-site">
          <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-mist p-8 sm:rounded-[2.5rem] sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <QIcon size={32} className="text-violet-600" aria-hidden="true" />
                <h2 className="h-section mt-6">{q.title}</h2>
                <p className="mt-5 text-lg">{q.text}</p>
                <ul className="mt-8 space-y-3">
                  {q.principles.map((p) => (
                    <li key={p} className="flex items-start gap-3 font-semibold text-navy-900">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:pt-14">
                <h3 className="text-xl">Certifications & regulatory information</h3>
                {q.certifications.length ? (
                  <ul className="mt-5 space-y-3">
                    {q.certifications.map((c) => (
                      <li key={c.name} className="flex items-start gap-4 rounded-2xl bg-white p-5">
                        <FileCheck2 className="shrink-0 text-violet-600" aria-hidden="true" />
                        <div>
                          <p className="font-bold text-navy-900">{c.name}</p>
                          {c.text && <p className="text-sm text-ink">{c.text}</p>}
                          {c.href && <a href={c.href} className="mt-1 inline-block text-sm font-bold text-azure-600 hover:underline">View certificate</a>}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 rounded-2xl border border-dashed border-navy-900/15 bg-white p-6 text-ink">
                    Certification and regulatory details will be published here once confirmed.
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Questions about our technology or quality approach?" text="Our team is happy to share more about how we work." />
    </>
  );
}
