import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const base =
  'group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full font-bold text-[0.95rem] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-navy-900 pl-6 pr-2 text-white hover:bg-navy-800 hover:shadow-lift active:scale-[.98]',
  outline: 'border border-line bg-white px-6 text-navy-900 hover:border-navy-900 active:scale-[.98]',
  light: 'bg-white pl-6 pr-2 text-navy-900 hover:shadow-lift active:scale-[.98]',
  ghostLight: 'border border-white/30 px-6 text-white hover:border-white hover:bg-white/10 active:scale-[.98]',
};

/**
 * One button for links and actions.
 *  - `to`   → internal route (React Router)
 *  - `href` → external link / mailto
 *  - neither → <button>
 * Filled variants carry the arrow chip; outline variants don't.
 */
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const withArrow = variant === 'primary' || variant === 'light';
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden="true"
          className={`grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${
            variant === 'primary' ? 'bg-white/15' : 'bg-navy-900 text-white'
          }`}
        >
          <ArrowRight size={16} strokeWidth={2.4} />
        </span>
      )}
    </>
  );
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>;
  return <button className={cls} {...rest}>{content}</button>;
}

/** Text link with an arrow, used inside cards and sections. */
export function TextLink({ to, children, className = '', light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 font-bold ${light ? 'text-white' : 'text-azure-600'} ${className}`}
    >
      <span className="link-underline">{children}</span>
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
