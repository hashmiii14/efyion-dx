import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { home } from '../../content/pages';
import { contact } from '../../content/site';

/** Closing call to action used at the bottom of every page. */
export default function CTASection({ title = home.cta.title, text = home.cta.text, button = home.cta.button }) {
  return (
    <section className="pb-20 sm:pb-24 lg:pb-28">
      <div className="container-site">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-14 sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div aria-hidden="true" className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-violet-600/40 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-40 left-1/4 -z-10 h-80 w-80 rounded-full bg-azure-600/30 blur-3xl" />
          <img
            src="/logo-mark-white.png"
            alt=""
            aria-hidden="true"
            className="absolute -bottom-10 right-4 -z-10 hidden w-64 opacity-[.07] md:block lg:right-16 lg:w-80"
          />
          <div className="max-w-2xl">
            <h2 className="h-section text-white">{title}</h2>
            <p className="mt-5 text-lg text-white/75 sm:text-xl">{text}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to={button.to} variant="light">{button.label}</Button>
              <Button href={`mailto:${contact.email}`} variant="ghostLight">
                {contact.email}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
