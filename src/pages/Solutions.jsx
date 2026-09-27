import { Check, ArrowRight, ShieldCheck, Clock, Truck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHero from '../components/sections/PageHero';
import ImageText from '../components/sections/ImageText';
import Workflow from '../components/sections/Workflow';
import HubDiagram from '../components/sections/HubDiagram';
import CTASection from '../components/sections/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import SmartImage from '../components/ui/SmartImage';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { audiences, solutionAreas, supportArea } from '../content/solutions';
import { images } from '../content/images';

function Points({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((p) => (
        <li key={p} className="flex items-start gap-3 text-navy-900">
          <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-blue-600 text-white">
            <Check size={10} strokeWidth={3} aria-hidden="true" />
          </span>
          <span className="font-semibold text-xs sm:text-sm">{p}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Solutions() {
  usePageMeta({
    title: 'Clinical Diagnostic Solutions by Healthcare Setting | Efyion Dx',
    description:
      'Tailored diagnostic instrumentation, standardized reagents, and workflow middleware for hospital central laboratories, reference centers, and point-of-care environments.',
  });

  const settingProfiles = [
    {
      setting: 'Hospital Central Laboratories',
      volume: '500 – 5,000+ tests/day',
      recommended: 'Efyion ChemTrack 400 + ECL Immuno-240 + Informatics Suite',
      tat: '< 45 min routine / 18 min STAT',
      focus: 'Continuous rack loading, emergency STAT interruption, bi-directional LIS integration.',
    },
    {
      setting: 'Commercial Reference Centers',
      volume: '2,000 – 10,000+ tests/day',
      recommended: 'High-throughput chemistry clusters + Automated morphology',
      tat: 'Batch optimization & 4-hour walkaway',
      focus: 'Low cost-per-test, bulk barcoded liquid-stable reagents, multi-site middleware.',
    },
    {
      setting: 'Outpatient Polyclinics & POLs',
      volume: '50 – 300 tests/day',
      recommended: 'Compact benchtop analysers + RapidPoint POCT',
      tat: '15 – 30 min same-visit results',
      focus: 'Small physical footprint, minimal deionized water consumption, single-operator ease.',
    },
    {
      setting: 'Emergency & Acute Care Suites',
      volume: 'Immediate on-demand triage',
      recommended: 'RapidPoint POCT handheld / bedside cartridges',
      tat: '8 – 15 min quantitative readout',
      focus: 'Fingerstick/whole blood cardiac troponin, blood gas, electrolytes, and sepsis markers.',
    },
  ];

  return (
    <>
      <PageHero
        title="Diagnostic solutions for every clinical setting"
        text="From high-throughput central hospital laboratories to bedside point-of-care suites, we align instrumentation with your specific volume and turnaround goals."
        image={images.solutionsHero}
        crumbs={[{ label: 'Solutions' }]}
      />

      {/* Who we serve */}
      <section className="section bg-white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              title="One partner, many diagnostic environments"
              text="Efyion Dx works alongside healthcare organizations across the diagnostic spectrum. Each faces distinct workflow constraints and clinical pressures."
            />
          </Reveal>
          <Reveal delay={100} className="hidden lg:block">
            <HubDiagram className="mx-auto w-full max-w-lg" />
          </Reveal>
        </div>
        <div className="container-site mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal
                as="article"
                key={a.slug}
                id={a.slug}
                delay={(i % 3) * 60}
                className={`scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-white shadow-xs ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-slate-50 ${
                    i === 0 ? 'aspect-[16/10] lg:aspect-[4/5]' : 'aspect-[16/10]'
                  }`}
                >
                  <SmartImage image={a.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2.5">
                    <Icon size={18} className="text-blue-600" aria-hidden="true" />
                    <h3 className="text-lg font-bold text-navy-900">{a.name}</h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{a.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Clinical Setting Profiles Matrix */}
      <section className="section bg-slate-50/70 border-t border-line">
        <div className="container-site">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              Operational Benchmarks
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight">
              Setting Profiles & Throughput Guidelines
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Recommended platform pairings, target turnaround times, and operational priorities by facility type.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {settingProfiles.map((sp) => (
              <div
                key={sp.setting}
                className="rounded-xl border border-line bg-white p-5 sm:p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-navy-900">{sp.setting}</h3>
                  <div className="mt-3 grid grid-cols-2 gap-3 pb-3.5 border-b border-line text-xs">
                    <div>
                      <span className="text-slate-500">Testing Volume:</span>
                      <p className="font-bold text-navy-900 mt-0.5">{sp.volume}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Target TAT:</span>
                      <p className="font-bold text-blue-700 mt-0.5">{sp.tat}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-slate-600">
                    <strong className="text-navy-900">Recommended: </strong>
                    {sp.recommended}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sp.focus}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-line">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-navy-900"
                  >
                    <span>Request facility consultation</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution areas */}
      <div className="bg-white border-t border-line">
        {solutionAreas.map((area, i) => (
          <ImageText
            key={area.id}
            id={area.id}
            image={area.image}
            title={area.name}
            text={area.intro}
            reverse={i % 2 === 1}
            className={i > 0 ? 'pt-0 sm:pt-0 lg:pt-0' : ''}
          >
            <Points items={area.points} />
            {area.specialties && (
              <div className="mt-5 flex flex-wrap gap-2 pt-3.5 border-t border-line/60">
                {area.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-navy-900 border border-blue-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </ImageText>
        ))}
      </div>

      {/* Reagent Supply Chain Security */}
      <section className="section bg-slate-50/70 border-t border-line">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Supply Chain Security
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight">
                Reagent Continuity & Standing Supply Contracts
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Analytical instruments cannot perform without guaranteed reagent availability. Efyion Dx offers scheduled
                standing orders, lot reservation programs, and temperature-logged cold-chain distribution to ensure your laboratory never faces supply shortages.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    title: 'Annual Lot Reservation',
                    desc: 'We lock down single-lot manufacturing batches for your facility, minimizing routine re-calibration and QC drift over 12 months.',
                  },
                  {
                    title: 'Continuous Cold-Chain Telemetry (2°C–8°C)',
                    desc: 'Every shipment is packed with validated insulation and digital temperature dataloggers that verify enzyme viability upon dock arrival.',
                  },
                  {
                    title: 'Emergency Stock Buffer Reserves',
                    desc: 'Regional warehouse hubs maintain safety stock buffers to fulfill urgent demand surges within 24 to 48 hours.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-line bg-white p-4 shadow-xs">
                    <h3 className="text-xs sm:text-sm font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-soft">
                <Truck className="text-blue-600 mb-3.5" size={28} />
                <h3 className="text-lg font-bold text-navy-900">Customized Reagent Supply Agreement</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Establish a predictable monthly consumable schedule tailored to your daily patient volume, ensuring stable operating budgets.
                </p>
                <div className="mt-6 pt-5 border-t border-line">
                  <Button to="/contact?subject=Reagent+Supply+Agreement" className="w-full justify-center text-sm font-bold">
                    Discuss supply contract
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Workflow */}
      <section id="workflow" className="relative isolate overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-24 text-white">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              light
              title="Diagnostic Implementation Pathway"
              text="Every client partnership follows the same disciplined, four-phase path so you always know what to expect."
              className="mb-12 lg:mb-16"
            />
          </Reveal>
          <Workflow light />
        </div>
      </section>

      {/* Support */}
      <ImageText
        id="support"
        image={supportArea.image}
        title={supportArea.name}
        text={supportArea.intro}
        reverse
      >
        <ul className="divide-y divide-line border-y border-line">
          {supportArea.points.map((p) => (
            <li key={p.title} className="py-4">
              <h3 className="text-sm sm:text-base font-bold text-navy-900">{p.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">{p.text}</p>
            </li>
          ))}
        </ul>
      </ImageText>

      <CTASection
        title="Let’s identify the right platform configuration for your setting."
        text="Tell us about your test menus, daily sample volumes, and existing LIS, and our technical advisory team will provide a tailored proposal."
      />
    </>
  );
}
