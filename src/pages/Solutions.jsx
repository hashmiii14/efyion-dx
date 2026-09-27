import { Check } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHero from '../components/sections/PageHero';
import ImageText from '../components/sections/ImageText';
import Workflow from '../components/sections/Workflow';
import HubDiagram from '../components/sections/HubDiagram';
import CTASection from '../components/sections/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import SmartImage from '../components/ui/SmartImage';
import Reveal from '../components/ui/Reveal';
import { audiences, solutionAreas, supportArea } from '../content/solutions';
import { images } from '../content/images';

function Points({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((p) => (
        <li key={p} className="flex items-start gap-3 text-navy-900">
          <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
            <Check size={12} strokeWidth={3} aria-hidden="true" />
          </span>
          <span className="font-semibold">{p}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Solutions() {
  usePageMeta({
    title: 'Solutions',
    description: 'Efyion Dx diagnostic solutions for laboratories, hospitals, healthcare professionals, clinical environments and research facilities.',
  });

  return (
    <>
      <PageHero
        title="Solutions for every diagnostic setting"
        text="From busy hospital laboratories to focused research facilities, we shape our solutions around the way each setting works."
        image={images.solutionsHero}
        crumbs={[{ label: 'Solutions' }]}
      />

      {/* Who we serve */}
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              title="One partner, many settings"
              text="Efyion Dx works with organisations across the diagnostic landscape. Each has its own pressures, and each deserves solutions that fit."
            />
          </Reveal>
          <Reveal delay={100} className="hidden lg:block">
            <HubDiagram className="mx-auto w-full max-w-lg" />
          </Reveal>
        </div>
        <div className="container-site mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal
                as="article"
                key={a.slug}
                id={a.slug}
                delay={(i % 3) * 70}
                className={`scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-line bg-white ${i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden bg-azure-100 ${i === 0 ? 'aspect-[16/10] lg:aspect-[4/5]' : 'aspect-[16/10]'}`}>
                  <SmartImage image={a.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="text-violet-600" aria-hidden="true" />
                    <h3 className="text-xl">{a.name}</h3>
                  </div>
                  <p className="mt-3 text-ink">{a.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Solution areas */}
      <div className="bg-mist">
        {solutionAreas.map((area, i) => (
          <ImageText key={area.id} id={area.id} image={area.image} title={area.name} text={area.intro} reverse={i % 2 === 1} className={i > 0 ? 'pt-0 sm:pt-0 lg:pt-0' : ''}>
            <Points items={area.points} />
          </ImageText>
        ))}
      </div>

      {/* Workflow */}
      <section id="workflow" className="relative isolate overflow-hidden bg-navy-900 py-20 sm:py-24 lg:py-32">
        <div aria-hidden="true" className="absolute -right-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-3xl" />
        <div className="container-site">
          <Reveal>
            <SectionHeading
              light
              title="Diagnostic workflow"
              text="Every engagement follows the same clear path, so you always know what comes next."
              className="mb-14 lg:mb-20"
            />
          </Reveal>
          <Workflow light />
        </div>
      </section>

      {/* Support */}
      <ImageText id="support" image={supportArea.image} title={supportArea.name} text={supportArea.intro} reverse>
        <ul className="divide-y divide-line border-y border-line">
          {supportArea.points.map((p) => (
            <li key={p.title} className="py-5">
              <h3 className="text-lg">{p.title}</h3>
              <p className="mt-1 text-ink">{p.text}</p>
            </li>
          ))}
        </ul>
      </ImageText>

      <CTASection title="Let’s find the right fit for your setting." text="Tell us about your organisation and we will help you explore suitable solutions." />
    </>
  );
}
