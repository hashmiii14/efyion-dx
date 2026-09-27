import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const base =
  'group inline-flex items-center justify-center font-bold tracking-tight rounded-full transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 select-none text-[0.875rem] sm:text-[0.9375rem] min-h-[42px] sm:min-h-[46px] leading-tight cursor-pointer';

const variants = {
  primary:
    'bg-navy-900 text-white pl-4 sm:pl-5 pr-1.5 sm:pr-2 gap-2 sm:gap-2.5 hover:bg-violet-700 hover:shadow-lift active:scale-[.98] border border-transparent shadow-sm',
  gradient:
    'bg-gradient-to-r from-violet-600 via-violet-500 to-azure-600 text-white pl-4 sm:pl-5 pr-1.5 sm:pr-2 gap-2 sm:gap-2.5 hover:from-violet-500 hover:to-azure-500 hover:shadow-lift active:scale-[.98] border-0 shadow-md shadow-violet-900/30',
  outline:
    'border border-line bg-white text-navy-900 px-4 sm:px-5 hover:border-navy-900 hover:bg-mist/50 active:scale-[.98]',
  outlineLight:
    'border border-white/40 bg-white/10 text-white px-4 sm:px-5 hover:border-white/80 hover:bg-white/20 active:scale-[.98] backdrop-blur-md',
  light:
    'bg-white text-navy-900 pl-4 sm:pl-5 pr-1.5 sm:pr-2 gap-2 sm:gap-2.5 hover:bg-slate-100 hover:shadow-lift active:scale-[.98] shadow-sm',
  ghostLight:
    'border border-white/30 text-white px-4 sm:px-5 hover:border-white hover:bg-white/10 active:scale-[.98]',
  secondary:
    'bg-azure-50 text-azure-600 px-4 sm:px-5 hover:bg-azure-100 active:scale-[.98] border border-azure-100',
};

/**
 * Responsive button for internal links, external links and button actions.
 * Sized comfortably at 42px on mobile and 46px on desktop with balanced padding.
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const withArrow = variant === 'primary' || variant === 'light' || variant === 'gradient';
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden="true"
          className={`grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${
            variant === 'light'
              ? 'bg-navy-900 text-white'
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
      className={`group inline-flex items-center gap-1.5 text-sm sm:text-[0.9375rem] font-bold cursor-pointer ${
        light ? 'text-white' : 'text-azure-600'
      } ${className}`}
    >
      <span className="link-underline">{children}</span>
      <ArrowRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-1 shrink-0"
        aria-hidden="true"
      />
    </Link>
  );
}
