import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { home } from '../../content/pages';
import { contact } from '../../content/site';

/** Closing call to action used at the bottom of every page. */
export default function CTASection({
  title = home.cta.title,
  text = home.cta.text,
  button = home.cta.button,
}) {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container-site">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-12 sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-violet-600/35 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-40 left-1/4 -z-10 h-80 w-80 rounded-full bg-azure-600/25 blur-3xl pointer-events-none"
          />
          <img
            src="/logo-mark-white.png"
            alt=""
            aria-hidden="true"
            className="absolute -bottom-10 right-4 -z-10 hidden w-64 opacity-[.06] md:block lg:right-16 lg:w-80 pointer-events-none"
          />
          <div className="max-w-2xl">
            <h2 className="h-section text-white font-extrabold">{title}</h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              {text}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button to={button.to} variant="light">
                {button.label}
              </Button>
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
