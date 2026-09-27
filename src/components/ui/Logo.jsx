import { Link } from 'react-router-dom';
import { site } from '../../content/site';

/** Mark + wordmark lockup. Links home. */
export default function Logo({ light = false, className = '', onClick }) {
  return (
    <Link to="/" onClick={onClick} className={`inline-flex shrink-0 items-center gap-2.5 rounded-lg ${className}`} aria-label={`${site.name} home`}>
      <img src={light ? '/logo-mark-white.png' : '/logo-mark.png'} alt="" width="36" height="40" className="h-10 w-auto" />
      <img src={light ? '/logo-wordmark-white.png' : '/logo-wordmark.png'} alt={site.name} width="120" height="22" className="h-[22px] w-auto" />
    </Link>
  );
}
