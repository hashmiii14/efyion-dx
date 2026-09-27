import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHero from '../components/sections/PageHero';
import ContactForm from '../components/sections/ContactForm';
import { contact, site } from '../content/site';

export default function Contact() {
  const [params] = useSearchParams();
  usePageMeta({
    title: 'Contact',
    description: `Contact Efyion Dx. Send an enquiry or email ${contact.email}.`,
  });

  return (
    <>
      <PageHero
        title="Get in touch"
        text="Tell us about your setting and what you need. We will get back to you at the email address you provide."
        crumbs={[{ label: 'Contact' }]}
      />
      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 p-8 text-white sm:p-10 lg:sticky lg:top-32 border border-navy-800 shadow-lift">
              <img src="/logo-mark-white.png" alt="" aria-hidden="true" className="h-14 w-auto" />
              <h2 className="mt-8 text-2xl text-white font-bold">{site.name}</h2>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-white/60">{site.tagline}</p>
              <ul className="mt-10 space-y-5">
                <li>
                  <p className="text-sm font-semibold text-white/60">Email</p>
                  <a href={`mailto:${contact.email}`} className="mt-1 inline-flex min-h-[44px] items-center gap-3 break-all text-lg font-bold hover:text-blue-300 hover:underline">
                    <Mail size={20} className="shrink-0 text-blue-400" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
                {contact.phone && (
                  <li>
                    <p className="text-sm font-semibold text-white/60">Phone</p>
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="mt-1 inline-flex min-h-[44px] items-center gap-3 text-lg font-bold hover:text-blue-300 hover:underline">
                      <Phone size={20} className="shrink-0 text-blue-400" aria-hidden="true" />
                      {contact.phone}
                    </a>
                  </li>
                )}
                {contact.address && (
                  <li>
                    <p className="text-sm font-semibold text-white/60">Address</p>
                    <p className="mt-1 flex items-start gap-3 font-semibold text-slate-200">
                      <MapPin size={20} className="mt-1 shrink-0 text-blue-400" aria-hidden="true" />
                      {contact.address}
                    </p>
                  </li>
                )}
              </ul>
              <div className="mt-8 rounded-xl bg-white/10 p-4 border border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">Application Advisory SLA</p>
                <div className="mt-2 space-y-1.5 text-xs text-white/90">
                  <p className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>Emergency Lab Support: <strong>&lt; 2 hour response</strong></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>RFP & Spec Enquiries: <strong>Within 24 business hours</strong></span>
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-sm font-bold text-white">What happens next</p>
                <ol className="mt-3 space-y-2.5 text-sm text-white/75">
                  {[
                    'Clinical review of your testing menu and daily volume',
                    'Tailored technical brochure and specification package',
                    'Direct scheduling with a laboratory application specialist',
                  ].map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl">Send an enquiry</h2>
            <p className="mb-10 mt-3 text-ink">Share as much detail as you can so we can respond with useful information.</p>
            <ContactForm defaultSubject={params.get('subject') || ''} />
          </div>
        </div>
      </section>
    </>
  );
}
