import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';
import { navigation, contact, site } from '../../content/site';
import { categories } from '../../content/catalog';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 text-slate-300 border-t border-slate-800">
      <div className="container-site relative grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand & Contact Information */}
        <div className="lg:col-span-5">
          <Logo light />
          <p className="mt-4 max-w-sm text-xs font-bold uppercase tracking-[0.14em] text-blue-400">
            {site.tagline}
          </p>
          <p className="mt-3 max-w-sm text-xs text-slate-400 leading-relaxed">
            Clinical in vitro diagnostics, standardized assay systems, and automated laboratory workflow platforms.
          </p>

          <div className="mt-6 space-y-2.5 text-xs sm:text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail size={16} className="text-blue-400 shrink-0" aria-hidden="true" />
              <span>{contact.email}</span>
            </a>

            {contact.phone && (
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-blue-400 shrink-0" aria-hidden="true" />
                <span>{contact.phone}</span>
              </a>
            )}

            {contact.address && (
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin size={16} className="text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{contact.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Footer Navigation" className="lg:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-slate-300 hover:text-blue-400 transition-colors inline-block py-0.5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Diagnostic Modalities */}
        <div className="lg:col-span-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white">Diagnostic Modalities</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/products?category=${c.slug}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors inline-block py-0.5"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>

          {contact.social.length > 0 && (
            <div className="mt-6 pt-4 border-t border-slate-800">
              <ul className="flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
                {contact.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-navy-950/80">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Corporate Details: {site.companyInfo}</span>
            <a href="#main" className="text-slate-400 hover:text-white transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
