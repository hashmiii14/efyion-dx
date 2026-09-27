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
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white sm:p-10 lg:sticky lg:top-32">
              <div aria-hidden="true" className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-violet-600/40 blur-3xl" />
              <img src="/logo-mark-white.png" alt="" aria-hidden="true" className="h-14 w-auto" />
              <h2 className="mt-8 text-2xl text-white">{site.name}</h2>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-white/60">{site.tagline}</p>
              <ul className="mt-10 space-y-5">
                <li>
                  <p className="text-sm font-semibold text-white/60">Email</p>
                  <a href={`mailto:${contact.email}`} className="mt-1 inline-flex min-h-[44px] items-center gap-3 break-all text-lg font-bold hover:underline">
                    <Mail size={20} className="shrink-0 text-violet-500" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
                {contact.phone && (
                  <li>
                    <p className="text-sm font-semibold text-white/60">Phone</p>
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="mt-1 inline-flex min-h-[44px] items-center gap-3 text-lg font-bold hover:underline">
                      <Phone size={20} className="shrink-0 text-violet-500" aria-hidden="true" />
                      {contact.phone}
                    </a>
                  </li>
                )}
                {contact.address && (
                  <li>
                    <p className="text-sm font-semibold text-white/60">Address</p>
                    <p className="mt-1 flex items-start gap-3 font-semibold">
                      <MapPin size={20} className="mt-1 shrink-0 text-violet-500" aria-hidden="true" />
                      {contact.address}
                    </p>
                  </li>
                )}
              </ul>
              <div className="mt-10 border-t border-white/15 pt-8">
                <p className="text-sm font-bold text-white">What happens next</p>
                <ol className="mt-4 space-y-3 text-white/75">
                  {['We read your enquiry', 'We reply by email with next steps', 'If helpful, we arrange a conversation'].map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-bold text-white">{i + 1}</span>
                      {s}
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
