import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation, Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
} from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { categories } from '../../content/catalog';
import { audiences } from '../../content/solutions';
import { contact } from '../../content/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'solutions' | null
  const [mobileExpanded, setMobileExpanded] = useState({ products: false, solutions: false });
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Monitor scroll for subtle elevation on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus immediately on route change
  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setMobileExpanded({ products: false, solutions: false });
  }, [pathname]);

  // Click outside and escape listeners
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Don't close if clicking inside header or inside the portal menu drawer
      if (
        (headerRef.current && headerRef.current.contains(e.target)) ||
        (menuRef.current && menuRef.current.contains(e.target))
      ) {
        return;
      }
      setActiveDropdown(null);
      if (open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        if (open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const handleMouseEnter = (name) => {
    if (window.innerWidth < 1024) return;
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 1024) return;
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  const toggleMobileSubmenu = (section) => {
    setMobileExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled || open
            ? 'bg-white/85 backdrop-blur-xl border-b border-navy-900/10 shadow-[0_4px_24px_rgba(11,17,82,0.06)]'
            : 'bg-white/95 backdrop-blur-md border-b border-line/70'
        }`}
      >
        <div className="container-site flex h-[64px] sm:h-[70px] items-center justify-between gap-4">
          {/* Logo - Kept exactly as provided without modification */}
          <div className="shrink-0 flex items-center">
            <Logo />
          </div>

          {/* DESKTOP NAVIGATION (1024px+) */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-violet-600 bg-violet-50/80 font-bold'
                    : 'text-ink hover:text-violet-600 hover:bg-mist/70'
                }`
              }
            >
              Home
            </NavLink>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive || activeDropdown === 'products'
                      ? 'text-violet-600 bg-violet-50/80 font-bold'
                      : 'text-ink hover:text-violet-600 hover:bg-mist/70'
                  }`
                }
                onClick={() => setActiveDropdown(null)}
              >
                <span>Products</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-150 ${
                    activeDropdown === 'products' ? 'rotate-180 text-violet-600' : 'text-slate-400'
                  }`}
                  aria-hidden="true"
                />
              </NavLink>

              {activeDropdown === 'products' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[560px] rounded-2xl border border-white/80 bg-white/95 backdrop-blur-xl p-4 shadow-[0_20px_50px_rgba(11,17,82,0.12)] z-50 animate-slideDown">
                  <div className="flex items-center justify-between border-b border-line pb-2 mb-2 px-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-violet-600">
                      Diagnostic Modalities
                    </span>
                    <Link
                      to="/products"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-semibold text-azure-600 hover:text-navy-900 flex items-center gap-1"
                    >
                      All products <ArrowRight size={12} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {categories.map((c) => {
                      const Icon = c.icon;
                      return (
                        <Link
                          key={c.slug}
                          to={`/products?category=${c.slug}`}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-start gap-2.5 rounded-xl p-2.5 transition-colors hover:bg-violet-50/60 border border-transparent hover:border-violet-100"
                        >
                          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                            <Icon size={16} aria-hidden="true" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-xs sm:text-sm text-navy-900 group-hover:text-violet-700 transition-colors">
                              {c.name}
                            </p>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{c.summary}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive || activeDropdown === 'solutions'
                      ? 'text-violet-600 bg-violet-50/80 font-bold'
                      : 'text-ink hover:text-violet-600 hover:bg-mist/70'
                  }`
                }
                onClick={() => setActiveDropdown(null)}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-150 ${
                    activeDropdown === 'solutions' ? 'rotate-180 text-violet-600' : 'text-slate-400'
                  }`}
                  aria-hidden="true"
                />
              </NavLink>

              {activeDropdown === 'solutions' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[500px] rounded-2xl border border-white/80 bg-white/95 backdrop-blur-xl p-4 shadow-[0_20px_50px_rgba(11,17,82,0.12)] z-50 animate-slideDown">
                  <div className="flex items-center justify-between border-b border-line pb-2 mb-2 px-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-azure-600">
                      Clinical Settings
                    </span>
                    <Link
                      to="/solutions"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-semibold text-azure-600 hover:text-navy-900 flex items-center gap-1"
                    >
                      Solutions overview <ArrowRight size={12} />
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {audiences.map((a) => {
                      const Icon = a.icon;
                      return (
                        <Link
                          key={a.slug}
                          to={`/solutions#${a.slug}`}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center gap-2.5 rounded-xl p-2.5 transition-colors hover:bg-azure-50/60 border border-transparent hover:border-azure-100"
                        >
                          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-azure-50 text-azure-600 group-hover:bg-azure-600 group-hover:text-white transition-colors">
                            <Icon size={16} aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-xs sm:text-sm text-navy-900 group-hover:text-azure-700 transition-colors">
                              {a.name}
                            </p>
                            <p className="text-[11px] text-slate-500 truncate mt-0.5">{a.text}</p>
                          </div>
                          <ArrowRight
                            size={12}
                            className="text-slate-300 group-hover:text-azure-600 group-hover:translate-x-0.5 transition-all"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/technology"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-violet-600 bg-violet-50/80 font-bold'
                    : 'text-ink hover:text-violet-600 hover:bg-mist/70'
                }`
              }
            >
              Technology
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-violet-600 bg-violet-50/80 font-bold'
                    : 'text-ink hover:text-violet-600 hover:bg-mist/70'
                }`
              }
            >
              Resources
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-violet-600 bg-violet-50/80 font-bold'
                    : 'text-ink hover:text-violet-600 hover:bg-mist/70'
                }`
              }
            >
              About
            </NavLink>
          </nav>

          {/* Desktop Right Side: Clean Contact Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              to="/contact"
              variant="primary"
              className="!min-h-[40px] !text-sm !px-4 shadow-sm"
            >
              Contact
            </Button>
          </div>

          {/* MOBILE / TABLET HAMBURGER BUTTON (Visible for all screens < 1024px) */}
          <div className="flex items-center lg:hidden">
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              className="relative z-[100] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-navy-900 shadow-sm transition-colors hover:bg-mist active:scale-95"
            >
              {open ? <X size={22} className="text-navy-900" /> : <Menu size={22} className="text-navy-900" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE / TABLET MENU DRAWER (< 1024px) Rendered via Portal to ensure 100% viewport coverage without stacking context bugs */}
      {open && typeof document !== 'undefined' && createPortal(
        <div ref={menuRef} className="lg:hidden">
          {/* Backdrop overlay */}
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[64px] sm:top-[70px] z-[998] bg-navy-950/40 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
          />

          {/* Drawer Content */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="fixed inset-x-0 bottom-0 top-[64px] sm:top-[70px] z-[999] overflow-y-auto bg-white border-t border-line shadow-2xl overscroll-contain animate-slideDown flex flex-col"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="container-site py-5 flex flex-col flex-1">
              <nav aria-label="Mobile and tablet navigation" className="space-y-1.5 flex-1">
                <NavLink
                  to="/"
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                      isActive ? 'bg-violet-50 text-violet-600' : 'text-navy-900 hover:bg-mist'
                    }`
                  }
                >
                  Home
                </NavLink>

                {/* Mobile Products Accordion */}
                <div className="rounded-xl border border-line/70 bg-white overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-1">
                    <NavLink
                      to="/products"
                      onClick={() => setOpen(false)}
                      className="flex-1 py-2.5 text-base font-bold text-navy-900"
                    >
                      Products
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu('products')}
                      aria-label="Toggle products categories"
                      className="p-2.5 text-ink hover:text-violet-600 transition-colors"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          mobileExpanded.products ? 'rotate-180 text-violet-600' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {mobileExpanded.products && (
                    <div className="border-t border-line/50 bg-mist/50 p-2 space-y-1">
                      {categories.map((c) => {
                        const Icon = c.icon;
                        return (
                          <Link
                            key={c.slug}
                            to={`/products?category=${c.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-white hover:text-violet-600 transition-colors"
                          >
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white text-violet-600 shadow-xs">
                              <Icon size={14} />
                            </span>
                            <span>{c.name}</span>
                          </Link>
                        );
                      })}
                      <Link
                        to="/products"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold text-azure-600 hover:underline pt-2 border-t border-line/40"
                      >
                        <span>All Diagnostic Systems</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Solutions Accordion */}
                <div className="rounded-xl border border-line/70 bg-white overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-1">
                    <NavLink
                      to="/solutions"
                      onClick={() => setOpen(false)}
                      className="flex-1 py-2.5 text-base font-bold text-navy-900"
                    >
                      Solutions
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu('solutions')}
                      aria-label="Toggle solutions settings"
                      className="p-2.5 text-ink hover:text-azure-600 transition-colors"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          mobileExpanded.solutions ? 'rotate-180 text-azure-600' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {mobileExpanded.solutions && (
                    <div className="border-t border-line/50 bg-mist/50 p-2 space-y-1">
                      {audiences.map((a) => {
                        const Icon = a.icon;
                        return (
                          <Link
                            key={a.slug}
                            to={`/solutions#${a.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-white hover:text-azure-600 transition-colors"
                          >
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white text-azure-600 shadow-xs">
                              <Icon size={14} />
                            </span>
                            <span>{a.name}</span>
                          </Link>
                        );
                      })}
                      <Link
                        to="/solutions"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold text-azure-600 hover:underline pt-2 border-t border-line/40"
                      >
                        <span>All Clinical Settings</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  )}
                </div>

                <NavLink
                  to="/technology"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                      isActive ? 'bg-violet-50 text-violet-600' : 'text-navy-900 hover:bg-mist'
                    }`
                  }
                >
                  Technology & Quality
                </NavLink>

                <NavLink
                  to="/resources"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                      isActive ? 'bg-violet-50 text-violet-600' : 'text-navy-900 hover:bg-mist'
                    }`
                  }
                >
                  Resources & Downloads
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                      isActive ? 'bg-violet-50 text-violet-600' : 'text-navy-900 hover:bg-mist'
                    }`
                  }
                >
                  About Efyion Dx
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                      isActive ? 'bg-violet-50 text-violet-600' : 'text-navy-900 hover:bg-mist'
                    }`
                  }
                >
                  Contact & Consultation
                </NavLink>
              </nav>

              {/* Bottom Drawer Actions */}
              <div className="mt-6 pt-5 border-t border-line space-y-3">
                <Button
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full !min-h-[44px] text-sm font-bold shadow-soft"
                >
                  Request a Consultation
                </Button>

                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex-1 flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-line bg-mist/60 px-3 text-xs font-semibold text-navy-900 hover:bg-white transition-colors"
                  >
                    <Mail size={14} className="text-violet-600" />
                    <span>{contact.email}</span>
                  </a>
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="flex-1 flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-line bg-mist/60 px-3 text-xs font-semibold text-navy-900 hover:bg-white transition-colors"
                    >
                      <Phone size={14} className="text-azure-600" />
                      <span>{contact.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
