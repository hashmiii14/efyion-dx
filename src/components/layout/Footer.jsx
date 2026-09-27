import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';
import { navigation, contact, site } from '../../content/site';
import { categories } from '../../content/catalog';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/70">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-3xl" />
      <div className="container-site relative grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo light />
          <p className="mt-6 max-w-xs text-sm font-bold uppercase tracking-[0.14em] text-white">{site.tagline}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex min-h-[44px] items-center gap-3 rounded-full border border-white/15 px-5 font-semibold text-white transition-colors hover:border-white/50"
          >
            <Mail size={18} aria-hidden="true" />
            {contact.email}
          </a>
          {contact.phone && (
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="mt-3 flex items-center gap-3 text-white">
              <Phone size={18} aria-hidden="true" />
              {contact.phone}
            </a>
          )}
          {contact.address && (
            <p className="mt-3 flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0" aria-hidden="true" />
              {contact.address}
            </p>
          )}
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <h2 className="text-sm font-bold text-white">Explore</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1 md:grid-cols-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex min-h-[40px] items-center transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="text-sm font-bold text-white">Product areas</h2>
          <ul className="mt-5 space-y-1">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/products?category=${c.slug}`} className="inline-flex min-h-[40px] items-center transition-colors hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          {contact.social.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-4">
              {contact.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="font-semibold text-white hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <a href="#main" className="text-white/60 hover:text-white">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
