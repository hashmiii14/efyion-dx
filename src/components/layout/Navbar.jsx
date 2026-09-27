import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { navigation, contact } from '../../content/site';

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
      {/* Background lives on its own layer: a backdrop-filter on <header> itself
          would trap the fixed mobile menu inside the header's box. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 border-b transition-[background-color,border-color] duration-300 ${
          scrolled || open ? 'border-line bg-white/90 backdrop-blur-lg' : 'border-transparent bg-transparent'
        }`}
      />
      <div className="container-site relative flex h-[72px] items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center xl:gap-1">
            {links.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-2.5 py-2 text-[0.92rem] font-semibold transition-colors xl:px-4 xl:text-[0.95rem] ${
                      isActive ? 'text-navy-900' : 'text-ink hover:text-navy-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative">
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-600 transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 xl:gap-2">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hidden rounded-full px-2.5 py-2 text-[0.92rem] font-semibold transition-colors lg:inline-block xl:px-4 xl:text-[0.95rem] ${
                isActive ? 'text-navy-900' : 'text-ink hover:text-navy-900'
              }`
            }
          >
            {({ isActive }) => (
              <span className="relative">
                Contact
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-600 transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </span>
            )}
          </NavLink>
          <Button to="/contact" className="hidden !min-h-[44px] sm:inline-flex">
            Enquire now
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-12 w-12 place-items-center rounded-full text-navy-900 transition-colors hover:bg-mist lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto overscroll-contain bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col pb-10 pt-4">
          <ul className="divide-y divide-line border-b border-line">
            {navigation.map((item, i) => (
              <li key={item.to} className="anim-rise" style={{ '--delay': `${i * 35}ms` }}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex min-h-[60px] items-center justify-between text-2xl font-bold tracking-tight ${
                      isActive ? 'text-violet-600' : 'text-navy-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-4 pt-10">
            <Button to="/contact" className="w-full">
              Enquire now
            </Button>
            <a href={`mailto:${contact.email}`} className="flex min-h-[48px] items-center justify-center gap-2 font-semibold text-ink">
              <Mail size={18} aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
