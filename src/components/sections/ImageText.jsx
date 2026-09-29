import SmartImage from '../ui/SmartImage';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/**
 * Two-column image + text block.
 * Engineered for balanced heights with zero layout gaps across mobile and desktop.
 */
export default function ImageText({
  id,
  image,
  detailImage,
  kicker,
  title,
  text,
  reverse = false,
  children,
  className = '',
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-site grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image Column: Perfectly matches text height on desktop with zero dead space */}
        <Reveal className={`relative flex flex-col justify-center ${reverse ? 'lg:order-2' : ''}`}>
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden rounded-[2rem] border border-line bg-white shadow-lift flex items-center justify-center">
            <SmartImage
              image={image}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Text Column */}
        <Reveal delay={100} className={`flex flex-col justify-center ${reverse ? 'lg:order-1' : ''}`}>
          <SectionHeading kicker={kicker} title={title} text={text} className="mb-0" />
          {children && <div className="mt-6 sm:mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
