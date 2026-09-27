import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import Logo from '../ui/Logo';
import { categories } from '../../content/catalog';
import { audiences } from '../../content/solutions';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'solutions' | null
  const [mobileExpanded, setMobileExpanded] = useState({ products: false, solutions: false });
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const headerRef = useRef(null);
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
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
        if (open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
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
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled || open
          ? 'bg-white/98 backdrop-blur-md border-b border-line shadow-sm'
          : 'bg-white border-b border-line/70'
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
                  ? 'text-blue-600 bg-blue-50/80 font-bold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
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
                    ? 'text-blue-600 bg-blue-50/80 font-bold'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`
              }
              onClick={() => setActiveDropdown(null)}
            >
              <span>Products</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-150 ${
                  activeDropdown === 'products' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`}
                aria-hidden="true"
              />
            </NavLink>

            {activeDropdown === 'products' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[560px] rounded-xl border border-line bg-white p-4 shadow-lift z-50">
                <div className="flex items-center justify-between border-b border-line pb-2 mb-2 px-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    Diagnostic Modalities
                  </span>
                  <Link
                    to="/products"
                    onClick={() => setActiveDropdown(null)}
                    className="text-xs font-semibold text-blue-600 hover:text-navy-900 flex items-center gap-1"
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
                        className="group flex items-start gap-2.5 rounded-lg p-2.5 transition-colors hover:bg-blue-50/60 border border-transparent hover:border-blue-100"
                      >
                        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon size={16} aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-xs sm:text-sm text-navy-900 group-hover:text-blue-700 transition-colors">
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
                    ? 'text-blue-600 bg-blue-50/80 font-bold'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`
              }
              onClick={() => setActiveDropdown(null)}
            >
              <span>Solutions</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-150 ${
                  activeDropdown === 'solutions' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`}
                aria-hidden="true"
              />
            </NavLink>

            {activeDropdown === 'solutions' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[500px] rounded-xl border border-line bg-white p-4 shadow-lift z-50">
                <div className="flex items-center justify-between border-b border-line pb-2 mb-2 px-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    Clinical Settings
                  </span>
                  <Link
                    to="/solutions"
                    onClick={() => setActiveDropdown(null)}
                    className="text-xs font-semibold text-blue-600 hover:text-navy-900 flex items-center gap-1"
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
                        className="group flex items-center gap-2.5 rounded-lg p-2.5 transition-colors hover:bg-blue-50/60 border border-transparent hover:border-blue-100"
                      >
                        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon size={16} aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-xs sm:text-sm text-navy-900 group-hover:text-blue-700 transition-colors">
                            {a.name}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate mt-0.5">{a.text}</p>
                        </div>
                        <ArrowRight
                          size={12}
                          className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all"
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
                  ? 'text-blue-600 bg-blue-50/80 font-bold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
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
                  ? 'text-blue-600 bg-blue-50/80 font-bold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
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
                  ? 'text-blue-600 bg-blue-50/80 font-bold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`
            }
          >
            About
          </NavLink>
        </nav>

        {/* Desktop Right Side: Clean Contact Link */}
        <div className="hidden lg:flex items-center gap-3">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-bold transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-navy-900 hover:bg-blue-600 hover:text-white'
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* MOBILE / TABLET HAMBURGER BUTTON (Hidden on Desktop, NO "Enquiry Now" on mobile) */}
        <div className="flex items-center lg:hidden">
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-navy-900 transition-colors hover:bg-slate-50 active:scale-95"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU DRAWER (< 1024px) */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[64px] sm:top-[70px] z-40 bg-white/98 backdrop-blur-xl lg:hidden border-t border-line overflow-y-auto overscroll-contain animate-fadeIn"
        >
          <div className="container-site py-5 flex flex-col min-h-full">
            <nav aria-label="Mobile navigation" className="space-y-1">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                Home
              </NavLink>

              {/* Mobile Products Accordion */}
              <div>
                <div className="flex items-center justify-between rounded-lg px-4 py-1.5 hover:bg-slate-50">
                  <NavLink
                    to="/products"
                    onClick={() => setOpen(false)}
                    className="flex-1 py-1.5 text-base font-semibold text-slate-800"
                  >
                    Products
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('products')}
                    aria-label="Toggle products menu"
                    className="p-2 text-slate-500 hover:text-blue-600"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileExpanded.products ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileExpanded.products && (
                  <div className="mt-1 space-y-1 pl-4 pr-2 pb-2">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/products?category=${c.slug}`}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {c.name}
                      </Link>
                    ))}
                    <Link
                      to="/products"
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-xs font-bold text-blue-600 hover:underline"
                    >
                      All Diagnostic Systems →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Solutions Accordion */}
              <div>
                <div className="flex items-center justify-between rounded-lg px-4 py-1.5 hover:bg-slate-50">
                  <NavLink
                    to="/solutions"
                    onClick={() => setOpen(false)}
                    className="flex-1 py-1.5 text-base font-semibold text-slate-800"
                  >
                    Solutions
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('solutions')}
                    aria-label="Toggle solutions menu"
                    className="p-2 text-slate-500 hover:text-blue-600"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileExpanded.solutions ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileExpanded.solutions && (
                  <div className="mt-1 space-y-1 pl-4 pr-2 pb-2">
                    {audiences.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/solutions#${a.slug}`}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/technology"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                Technology
              </NavLink>

              <NavLink
                to="/resources"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                Resources
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Note: In accordance with project instructions, NO "Enquiry Now" button is in the mobile navigation */}
          </div>
        </div>
      )}
    </header>
  );
}
