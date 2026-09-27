import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { home } from '../../content/pages';
import { contact } from '../../content/site';

/** Closing call to action used at the bottom of pages. Clean medical styling without purple blobs. */
export default function CTASection({
  title = home.cta.title,
  text = home.cta.text,
  button = home.cta.button,
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <Reveal className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 border border-navy-800 shadow-lift">

          <img
            src="/logo-mark-white.png"
            alt=""
            aria-hidden="true"
            className="absolute -bottom-10 right-4 -z-10 hidden w-64 opacity-[.04] md:block lg:right-16 lg:w-80 pointer-events-none"
          />

          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tight">
              {title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
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
