import { useInView } from '../../hooks/useInView';
import { workflow } from '../../content/solutions';

/**
 * Four-step process diagram. Horizontal on large screens, vertical on
 * small ones; clean medical blue gradient connector.
 */
export default function Workflow({ light = false }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const text = light ? 'text-slate-300' : 'text-slate-600';
  const title = light ? 'text-white' : 'text-navy-900';

  return (
    <ol ref={ref} className={`relative grid gap-8 lg:grid-cols-4 lg:gap-8 ${inView ? 'is-visible' : ''}`}>
      {/* connectors */}
      <span aria-hidden="true" className="absolute left-7 top-7 hidden h-[2px] w-[calc(75%+1.5rem)] overflow-hidden lg:block">
        <span className="flow-line block h-full w-full bg-gradient-to-r from-navy-900 via-blue-600 to-sky-400" />
      </span>
      <span aria-hidden="true" className="absolute bottom-10 left-7 top-7 w-[2px] overflow-hidden lg:hidden">
        <span className="flow-line-v block h-full w-full bg-gradient-to-b from-navy-900 via-blue-600 to-sky-400" />
      </span>

      {workflow.map((item, i) => (
        <li
          key={item.step}
          className="flow-step relative grid grid-cols-[3.5rem_1fr] gap-4 lg:block"
          style={{ '--delay': `${200 + i * 150}ms` }}
        >
          <span
            className={`relative z-10 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-xl border-2 text-sm sm:text-base font-extrabold shadow-xs ${
              i === workflow.length - 1
                ? 'border-blue-600 bg-blue-600 text-white'
                : light
                ? 'border-slate-700 bg-navy-900 text-white'
                : 'border-slate-300 bg-white text-navy-900'
            }`}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="lg:mt-6 lg:pr-3">
            <h3 className={`text-lg sm:text-xl font-bold ${title}`}>{item.step}</h3>
            <p className={`mt-1.5 text-xs sm:text-sm leading-relaxed ${text}`}>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
