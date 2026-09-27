import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Inbox } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHero from '../components/sections/PageHero';
import ResourceCard from '../components/sections/ResourceCard';
import CTASection from '../components/sections/CTASection';
import Reveal from '../components/ui/Reveal';
import { resources, resourceCategories, faqs } from '../content/resources';

function FAQList() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group py-2">
          <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-navy-900 marker:content-none sm:text-xl [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mist transition-transform duration-300 group-open:rotate-180">
              <ChevronDown size={18} aria-hidden="true" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-12 text-ink">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function Resources() {
  const [params, setParams] = useSearchParams();
  const active = params.get('category') || 'all';
  const activeCat = resourceCategories.find((c) => c.slug === active);

  usePageMeta({
    title: activeCat ? `${activeCat.name} | Resources` : 'Resources',
    description: 'Articles, insights, news, technical resources, FAQs and downloads from Efyion Dx.',
  });

  const list = active === 'all' ? resources : resources.filter((r) => r.category === active);
  const showFaqs = active === 'all' || active === 'faqs';
  const [lead, ...rest] = list;

  const select = (slug) => setParams(slug === 'all' ? {} : { category: slug }, { replace: true });

  return (
    <>
      <PageHero
        title="Diagnostic Knowledge & Resources"
        text="Technical documentation, workflow guides, clinical perspectives, and answers to common laboratory questions."
        crumbs={[{ label: 'Resources' }]}
      />

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="container-site">
          <div role="group" aria-label="Filter resources" className="-mx-5 flex gap-2 overflow-x-auto border-b border-line px-5 pb-8 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
            {[{ slug: 'all', name: 'All resources' }, ...resourceCategories].map((c) => {
              const on = active === c.slug;
              const Icon = c.icon;
              return (
                <button
                  key={c.slug}
                  type="button"
                  aria-pressed={on}
                  onClick={() => select(c.slug)}
                  className={`inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-sm font-bold transition-colors ${
                    on ? 'border-navy-900 bg-navy-900 text-white' : 'border-line bg-white text-navy-900 hover:border-navy-900'
                  }`}
                >
                  {Icon && <Icon size={16} aria-hidden="true" />}
                  {c.name}
                </button>
              );
            })}
          </div>

          {active !== 'faqs' &&
            (list.length ? (
              <div className="mt-12 grid gap-x-8 gap-y-14 lg:grid-cols-12">
                <Reveal className="lg:col-span-7">
                  <ResourceCard resource={lead} large />
                </Reveal>
                <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-y-10">
                  {rest.slice(0, 2).map((r) => (
                    <Reveal key={r.slug}>
                      <ResourceCard resource={r} />
                    </Reveal>
                  ))}
                </div>
                {rest.slice(2).map((r, i) => (
                  <Reveal key={r.slug} delay={(i % 3) * 70} className="lg:col-span-4">
                    <ResourceCard resource={r} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="mt-12 rounded-[2rem] border border-dashed border-line bg-mist px-6 py-16 text-center">
                <Inbox size={36} className="mx-auto text-violet-600" aria-hidden="true" />
                <h2 className="mt-5 text-2xl">No {activeCat?.name.toLowerCase()} published yet</h2>
                <p className="mx-auto mt-2 max-w-md text-ink">New material will appear here as it is released. Browse all resources in the meantime.</p>
                <button type="button" onClick={() => select('all')} className="mt-6 min-h-[44px] rounded-full bg-navy-900 px-6 font-bold text-white hover:bg-navy-800">
                  Show all resources
                </button>
              </div>
            ))}

          {showFaqs && (
            <section id="faqs" aria-labelledby="faq-heading" className={`grid gap-10 lg:grid-cols-12 ${active === 'faqs' ? 'mt-12' : 'mt-24 border-t border-line pt-20'}`}>
              <div className="lg:col-span-4">
                <h2 id="faq-heading" className="h-section">Frequently asked questions</h2>
              </div>
              <div className="lg:col-span-8">
                <FAQList />
              </div>
            </section>
          )}
        </div>
      </section>

      <CTASection title="Looking for something specific?" text="If you can’t find the information you need, ask us directly." button={{ label: 'Contact us', to: '/contact' }} />
    </>
  );
}
