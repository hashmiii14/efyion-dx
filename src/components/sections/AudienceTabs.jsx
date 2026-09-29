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
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-14 items-stretch">
      {/* Mobile Tab Selector: Horizontal scrollable pills */}
      <div className="flex sm:hidden overflow-x-auto gap-2 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Who we serve">
        {audiences.map((a, i) => {
          const selected = i === active;
          return (
            <button
              key={a.slug}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-full px-4 text-xs font-bold transition-colors ${
                selected ? 'bg-navy-900 text-white shadow-xs' : 'bg-white text-ink border border-line hover:text-navy-900'
              }`}
            >
              {a.name}
            </button>
          );
        })}
      </div>

      {/* Desktop Tab Selector: Vertical list with icons */}
      <div role="tablist" aria-label="Who we serve" aria-orientation="vertical" className="hidden sm:flex flex-col lg:col-span-5 justify-center" onKeyDown={onKeyDown}>
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
              className={`group flex min-h-[64px] items-center gap-4 border-b border-line py-4 text-left transition-colors cursor-pointer ${
                selected ? 'text-navy-900 font-bold' : 'text-ink hover:text-navy-900'
              }`}
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                  selected ? 'bg-navy-900 text-white shadow-xs' : 'bg-mist text-navy-900 group-hover:bg-azure-100'
                }`}
              >
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="text-base lg:text-lg font-bold">{a.name}</span>
              <span
                aria-hidden="true"
                className={`ml-auto h-2 w-2 rounded-full bg-violet-600 transition-all duration-300 ${selected ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${current.slug}`}
        aria-labelledby={`tab-${current.slug}`}
        className="lg:col-span-7 flex flex-col justify-center"
      >
        <div key={current.slug} className="page-enter rounded-[2rem] border border-line bg-white p-4 sm:p-6 shadow-xs">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-slate-50 border border-line/60">
            <SmartImage image={current.image} sizes="(min-width: 1024px) 50vw, 100vw" className="h-full w-full object-cover" />
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="text-sm sm:text-base text-ink leading-relaxed font-normal">{current.text}</p>
            <TextLink to={`/solutions#${current.slug}`} className="shrink-0 text-xs sm:text-sm font-bold">Solutions for {current.name.toLowerCase()}</TextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
