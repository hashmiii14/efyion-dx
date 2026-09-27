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
      <div
        role="tablist"
        aria-label="Clinical settings we serve"
        aria-orientation="vertical"
        className="flex flex-col lg:col-span-5"
        onKeyDown={onKeyDown}
      >
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
              className={`group flex min-h-[58px] items-center gap-3.5 border-b border-line py-3.5 text-left transition-colors ${
                selected ? 'text-navy-900 font-bold' : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-200 ${
                  selected
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600'
                }`}
              >
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="text-base sm:text-lg">{a.name}</span>
              <span
                aria-hidden="true"
                className={`ml-auto h-2 w-2 rounded-full bg-blue-600 transition-all duration-200 ${
                  selected ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.slug}`}
        aria-labelledby={`tab-${current.slug}`}
        className="flex flex-col rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-xs lg:col-span-7"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
          <SmartImage
            image={current.image}
            label={current.name}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <h3 className="mt-6 text-xl sm:text-2xl font-bold text-navy-900">{current.name}</h3>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">{current.text}</p>
        <div className="mt-6 pt-4 border-t border-line">
          <TextLink to={`/solutions#${current.slug}`}>
            Explore solutions for {current.name.toLowerCase()}
          </TextLink>
        </div>
      </div>
    </div>
  );
}
