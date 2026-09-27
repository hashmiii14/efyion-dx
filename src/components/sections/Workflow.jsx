import { useInView } from '../../hooks/useInView';
import { workflow } from '../../content/solutions';

/**
 * Four-step process diagram. Horizontal on large screens, vertical on
 * small ones; the connector draws in when it scrolls into view.
 */
export default function Workflow({ light = false }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const text = light ? 'text-white/70' : 'text-ink';
  const title = light ? 'text-white' : 'text-navy-900';

  return (
    <ol ref={ref} className={`relative grid gap-10 lg:grid-cols-4 lg:gap-8 ${inView ? 'is-visible' : ''}`}>
      {/* connectors */}
      <span aria-hidden="true" className="absolute left-7 top-7 hidden h-[2px] w-[calc(75%+1.5rem)] overflow-hidden lg:block">
        <span className="flow-line block h-full w-full bg-gradient-to-r from-navy-900 via-azure-500 to-violet-600" />
      </span>
      <span aria-hidden="true" className="absolute bottom-10 left-7 top-7 w-[2px] overflow-hidden lg:hidden">
        <span className="flow-line-v block h-full w-full bg-gradient-to-b from-navy-900 via-azure-500 to-violet-600" />
      </span>

      {workflow.map((item, i) => (
        <li
          key={item.step}
          className="flow-step relative grid grid-cols-[3.5rem_1fr] gap-5 lg:block"
          style={{ '--delay': `${300 + i * 220}ms` }}
        >
          <span
            className={`relative z-10 grid h-14 w-14 place-items-center rounded-full border-2 text-base font-extrabold ${
              i === workflow.length - 1 ? 'border-violet-600 bg-violet-600 text-white' : light ? 'border-white/30 bg-navy-900 text-white' : 'border-navy-900 bg-white text-navy-900'
            }`}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="lg:mt-7 lg:pr-4">
            <h3 className={`text-2xl ${title}`}>{item.step}</h3>
            <p className={`mt-2 text-base ${text}`}>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
