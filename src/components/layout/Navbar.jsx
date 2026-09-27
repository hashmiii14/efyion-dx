import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Mail, Sparkles, ArrowRight } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { navigation, contact, site } from '../../content/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  // Solid background once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll, handle Escape, move focus while the menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    panelRef.current?.querySelector('a')?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const links = navigation.filter((n) => n.to !== '/contact');

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility banner */}
      <div className="bg-navy-950 text-white/80 border-b border-white/10 text-xs py-1.5 px-4 sm:px-6">
        <div className="container-site flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 truncate">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse shrink-0" />
            <span className="font-semibold text-white/90">Efyion Dx</span>
            <span className="hidden sm:inline text-white/60">— Precision In Vitro Diagnostics & Laboratory Platforms</span>
          </p>
          <div className="flex items-center gap-4 shrink-0 font-medium">
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail size={12} className="text-violet-400" aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation background */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 border-b transition-[background-color,border-color] duration-300 ${
          scrolled || open
            ? 'border-line bg-white/95 backdrop-blur-md shadow-sm'
            : 'border-transparent bg-white/80 backdrop-blur-sm'
        }`}
      />

      <div className="container-site relative flex h-[68px] sm:h-[72px] lg:h-20 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative rounded-full px-3.5 py-2 text-[0.92rem] font-bold transition-colors ${
                      isActive
                        ? 'text-navy-900 bg-azure-50/80'
                        : 'text-ink hover:text-navy-900 hover:bg-mist/60'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative flex items-center gap-1.5">
                      {item.label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-violet-600"
                        />
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hidden lg:inline-flex rounded-full px-3.5 py-2 text-[0.92rem] font-bold transition-colors ${
                isActive
                  ? 'text-navy-900 bg-azure-50/80'
                  : 'text-ink hover:text-navy-900 hover:bg-mist/60'
              }`
            }
          >
            Contact
          </NavLink>
          <Button to="/contact" className="!min-h-[38px] sm:!min-h-[42px] !text-xs sm:!text-sm">
            Enquire now
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full text-navy-900 transition-colors hover:bg-mist lg:hidden border border-line"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[102px] z-40 overflow-y-auto overscroll-contain bg-white/95 backdrop-blur-xl lg:hidden border-t border-line"
      >
        <nav aria-label="Mobile navigation" className="container-site flex min-h-full flex-col pb-8 pt-4">
          <ul className="divide-y divide-line/60">
            {navigation.map((item, i) => (
              <li key={item.to} className="anim-rise" style={{ '--delay': `${i * 30}ms` }}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex min-h-[52px] items-center justify-between text-xl font-bold tracking-tight py-2 transition-colors ${
                      isActive ? 'text-violet-600' : 'text-navy-900 hover:text-azure-600'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowRight size={18} className="opacity-40" aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3 pt-8 border-t border-line/60">
            <Button to="/contact" className="w-full !min-h-[44px]">
              Enquire now
            </Button>
            <a
              href={`mailto:${contact.email}`}
              className="flex min-h-[42px] items-center justify-center gap-2 text-sm font-semibold text-ink hover:text-navy-900 border border-line rounded-full"
            >
              <Mail size={16} aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
