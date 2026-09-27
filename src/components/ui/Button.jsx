import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const base =
  'group inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 select-none text-[0.875rem] sm:text-[0.9375rem] min-h-[42px] sm:min-h-[46px] leading-tight';

const variants = {
  primary:
    'bg-blue-600 text-white pl-4 sm:pl-5 pr-2 gap-2 sm:gap-2.5 hover:bg-blue-700 hover:shadow-soft active:scale-[.98] border border-blue-600 shadow-sm',
  navy:
    'bg-navy-900 text-white pl-4 sm:pl-5 pr-2 gap-2 sm:gap-2.5 hover:bg-slate-800 hover:shadow-soft active:scale-[.98] border border-navy-900 shadow-sm',
  outline:
    'border border-slate-200 bg-white text-navy-900 px-4 sm:px-5 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/40 active:scale-[.98]',
  light:
    'bg-white text-blue-700 pl-4 sm:pl-5 pr-2 gap-2 sm:gap-2.5 hover:bg-slate-50 hover:shadow-soft active:scale-[.98] shadow-sm',
  ghostLight:
    'border border-white/30 text-white px-4 sm:px-5 hover:border-white hover:bg-white/10 active:scale-[.98]',
  secondary:
    'bg-blue-50 text-blue-700 px-4 sm:px-5 hover:bg-blue-100 active:scale-[.98] border border-blue-100',
};

/**
 * Responsive button for internal links, external links and button actions.
 * Professional medical styling with clean rounded corners and clear affordances.
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const withArrow = variant === 'primary' || variant === 'navy' || variant === 'light';
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden="true"
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg transition-transform duration-200 group-hover:translate-x-0.5 ${
            variant === 'light'
              ? 'bg-blue-50 text-blue-600'
              : 'bg-white/20 text-white'
          }`}
        >
          <ArrowRight size={14} strokeWidth={2.4} />
        </span>
      )}
    </>
  );
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}

/** Text link with an arrow, used inside cards and sections. */
export function TextLink({ to, children, className = '', light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-1.5 text-sm sm:text-[0.9375rem] font-bold ${
        light ? 'text-white' : 'text-blue-600 hover:text-blue-700'
      } ${className}`}
    >
      <span className="link-underline">{children}</span>
      <ArrowRight
        size={14}
        className="transition-transform duration-200 group-hover:translate-x-1 shrink-0"
        aria-hidden="true"
      />
    </Link>
  );
}
