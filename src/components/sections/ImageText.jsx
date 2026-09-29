import SmartImage from '../ui/SmartImage';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/**
 * Two-column image + text block. The main image uses the tube frame;
 * an optional `detailImage` overlaps it as a small circular inset.
 */
export default function ImageText({ id, image, detailImage, kicker, title, text, reverse = false, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={`relative ${reverse ? 'lg:order-2' : ''}`}>
          <div className="relative mx-auto w-full max-w-xl aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[2rem] border border-line bg-white shadow-lift">
            <SmartImage image={image} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading kicker={kicker} title={title} text={text} />
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
