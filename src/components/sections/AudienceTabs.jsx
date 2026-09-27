import { useRef, useState } from 'react';
import SmartImage from '../ui/SmartImage';
import { TextLink } from '../ui/Button';
import { audiences } from '../../content/solutions';

/** Interactive "who we serve" selector: list of audiences + changing visual. */
export default function AudienceTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const current = audiences[active];

  const onKeyDown = (e) => {
    const last = audiences.length - 1;
    let next = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = active === last ? 0 : active + 1;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = active === 0 ? last : active - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabs.current[next]?.focus();
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
      <div role="tablist" aria-label="Who we serve" aria-orientation="vertical" className="flex flex-col lg:col-span-5" onKeyDown={onKeyDown}>
        {audiences.map((a, i) => {
          const Icon = a.icon;
          const selected = i === active;
          return (
            <button
              key={a.slug}
              ref={(el) => (tabs.current[i] = el)}
              role="tab"
              id={`tab-${a.slug}`}
              aria-selected={selected}
              aria-controls={`panel-${a.slug}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`group flex min-h-[64px] items-center gap-4 border-b border-line py-4 text-left transition-colors ${
                selected ? 'text-navy-900' : 'text-ink hover:text-navy-900'
              }`}
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                  selected ? 'bg-navy-900 text-white' : 'bg-mist text-navy-900 group-hover:bg-azure-100'
                }`}
              >
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="text-lg font-bold sm:text-xl">{a.name}</span>
              <span
                aria-hidden="true"
                className={`ml-auto h-2 w-2 rounded-full bg-violet-600 transition-all duration-300 ${selected ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.slug}`}
        aria-labelledby={`tab-${current.slug}`}
        className="lg:col-span-7"
      >
        <div key={current.slug} className="page-enter">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] bg-azure-100 shadow-soft border border-line">
            <SmartImage image={current.image} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-lg text-lg text-ink">{current.text}</p>
            <TextLink to={`/solutions#${current.slug}`}>Solutions for {current.name.toLowerCase()}</TextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
