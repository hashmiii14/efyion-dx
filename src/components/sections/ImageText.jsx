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
          <div className="tube frame-arch relative mx-auto max-w-xl overflow-hidden bg-azure-100">
            <SmartImage image={image} />
          </div>
          {detailImage && (
            <div
              className={`absolute -bottom-6 hidden aspect-square w-36 overflow-hidden rounded-full border-[6px] border-white bg-azure-100 shadow-lift sm:block lg:w-44 ${
                reverse ? '-right-2 lg:-right-6' : '-left-2 lg:-left-6'
              }`}
            >
              <SmartImage image={detailImage} sizes="200px" />
            </div>
          )}
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading kicker={kicker} title={title} text={text} />
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
