import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import {
  Menu,
  X,
  Mail,
  ChevronDown,
  ArrowRight,
  Headset,
  Activity,
  Layers,
} from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { navigation, contact, site } from '../../content/site';
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

  // Monitor scroll for subtle elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus immediately on navigation
  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Click outside and escape listeners
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
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
      if (window.innerWidth >= 768) setOpen(false);
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
    <header ref={headerRef} className="sticky top-0 z-50 w-full select-none">
      {/* 1. Top Clinical Utility Bar */}
      <div className="bg-navy-950 text-white/80 border-b border-white/10 text-xs py-1.5 px-4 sm:px-6">
        <div className="container-site flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <span className="inline-flex items-center gap-1.5 font-semibold text-white/95">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Efyion Dx</span>
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white/70 truncate">
              Precision Clinical In Vitro Diagnostics & Laboratory Workflow Instrumentation
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 shrink-0 font-medium">
            <div className="hidden lg:flex items-center gap-1.5 text-white/70">
              <Headset size={13} className="text-violet-400" aria-hidden="true" />
              <span>Emergency Lab Advisory: &lt; 2h Response</span>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 text-white/85 font-semibold"
            >
              <Mail size={13} className="text-violet-400" aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`relative transition-[background-color,border-color,box-shadow] duration-200 border-b ${
          scrolled || activeDropdown
            ? 'bg-white/95 backdrop-blur-md shadow-subtle border-line'
            : 'bg-white/90 backdrop-blur-sm border-line/60'
        }`}
      >
        <div className="container-site flex h-[64px] sm:h-[68px] lg:h-[74px] items-center justify-between gap-3 sm:gap-4">
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* DESKTOP NAVIGATION (1024px+) */}
          <nav aria-label="Desktop navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-[0.9rem] font-bold transition-colors ${
                      isActive ? 'text-navy-900 bg-azure-50/80' : 'text-ink hover:text-navy-900 hover:bg-mist/60'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Products Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center">
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-full px-3 py-2 text-[0.9rem] font-bold transition-colors ${
                        isActive || activeDropdown === 'products'
                          ? 'text-navy-900 bg-azure-50/80'
                          : 'text-ink hover:text-navy-900 hover:bg-mist/60'
                      }`
                    }
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>Products</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-150 ${
                        activeDropdown === 'products' ? 'rotate-180 text-violet-600' : 'opacity-60'
                      }`}
                      aria-hidden="true"
                    />
                  </NavLink>
                </div>

                {activeDropdown === 'products' && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[600px] rounded-2xl border border-line bg-white/98 backdrop-blur-xl p-4 shadow-lift z-50">
                    <div className="flex items-center justify-between border-b border-line pb-2.5 mb-2.5 px-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-violet-600">
                        Diagnostic Modalities & Portfolio
                      </p>
                      <Link
                        to="/products"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-bold text-azure-600 hover:underline flex items-center gap-1"
                      >
                        All products <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((c) => {
                        const Icon = c.icon;
                        return (
                          <Link
                            key={c.slug}
                            to={`/products?category=${c.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-start gap-2.5 rounded-xl p-2 transition-colors hover:bg-azure-50/60 border border-transparent hover:border-azure-100"
                          >
                            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                              <Icon size={16} aria-hidden="true" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-xs sm:text-sm text-navy-900 group-hover:text-violet-700 transition-colors">
                                {c.name}
                              </p>
                              <p className="text-[11px] text-ink/75 line-clamp-1 mt-0.5">{c.summary}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </li>

              {/* Solutions Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center">
                  <NavLink
                    to="/solutions"
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-full px-3 py-2 text-[0.9rem] font-bold transition-colors ${
                        isActive || activeDropdown === 'solutions'
                          ? 'text-navy-900 bg-azure-50/80'
                          : 'text-ink hover:text-navy-900 hover:bg-mist/60'
                      }`
                    }
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-150 ${
                        activeDropdown === 'solutions' ? 'rotate-180 text-violet-600' : 'opacity-60'
                      }`}
                      aria-hidden="true"
                    />
                  </NavLink>
                </div>

                {activeDropdown === 'solutions' && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] rounded-2xl border border-line bg-white/98 backdrop-blur-xl p-4 shadow-lift z-50">
                    <div className="flex items-center justify-between border-b border-line pb-2.5 mb-2.5 px-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-violet-600">
                        Clinical Care Settings
                      </p>
                      <Link
                        to="/solutions"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-bold text-azure-600 hover:underline flex items-center gap-1"
                      >
                        Solutions overview <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div className="space-y-1.5">
                      {audiences.map((a) => {
                        const Icon = a.icon;
                        return (
                          <Link
                            key={a.slug}
                            to={`/solutions#${a.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-center gap-2.5 rounded-xl p-2 transition-colors hover:bg-azure-50/60 border border-transparent hover:border-azure-100"
                          >
                            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                              <Icon size={16} aria-hidden="true" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-bold text-xs sm:text-sm text-navy-900 group-hover:text-violet-700 transition-colors">
                                {a.name}
                              </p>
                              <p className="text-[11px] text-ink/75 truncate mt-0.5">{a.text}</p>
                            </div>
                            <ArrowRight
                              size={12}
                              className="text-ink/30 group-hover:text-violet-600 group-hover:translate-x-0.5 transition-all"
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <NavLink
                  to="/technology"
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-[0.9rem] font-bold transition-colors ${
                      isActive ? 'text-navy-900 bg-azure-50/80' : 'text-ink hover:text-navy-900 hover:bg-mist/60'
                    }`
                  }
                >
                  Technology
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-[0.9rem] font-bold transition-colors ${
                      isActive ? 'text-navy-900 bg-azure-50/80' : 'text-ink hover:text-navy-900 hover:bg-mist/60'
                    }`
                  }
                >
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-[0.9rem] font-bold transition-colors ${
                      isActive ? 'text-navy-900 bg-azure-50/80' : 'text-ink hover:text-navy-900 hover:bg-mist/60'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* TABLET INTERMEDIATE NAVIGATION (768px to 1023px) */}
          <nav aria-label="Tablet navigation" className="hidden md:flex lg:hidden items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors ${
                  isActive ? 'text-navy-900 bg-azure-50/80' : 'text-ink hover:text-navy-900'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors ${
                  isActive ? 'text-navy-900 bg-azure-50/80' : 'text-ink hover:text-navy-900'
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors ${
                  isActive ? 'text-navy-900 bg-azure-50/80' : 'text-ink hover:text-navy-900'
                }`
              }
            >
              Solutions
            </NavLink>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors ${
                  isActive ? 'text-navy-900 bg-azure-50/80' : 'text-ink hover:text-navy-900'
                }`
              }
            >
              Tech
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors ${
                  isActive ? 'text-navy-900 bg-azure-50/80' : 'text-ink hover:text-navy-900'
                }`
              }
            >
              About
            </NavLink>
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hidden xl:inline-flex rounded-full px-3 py-2 text-[0.9rem] font-bold transition-colors ${
                  isActive ? 'text-navy-900 bg-azure-50/80' : 'text-ink hover:text-navy-900 hover:bg-mist/60'
                }`
              }
            >
              Contact
            </NavLink>

            {/* Compact CTA */}
            <Button
              to="/contact"
              className="!min-h-[36px] sm:!min-h-[40px] !px-3 sm:!px-4 !text-xs sm:!text-sm font-bold"
            >
              Enquire now
            </Button>

            {/* Mobile Menu Button (< 768px only) */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full text-navy-900 transition-colors hover:bg-mist md:hidden border border-line"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer (< 768px) */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[96px] z-40 overflow-y-auto overscroll-contain bg-white/98 backdrop-blur-2xl md:hidden border-t border-line shadow-2xl"
        >
          <nav aria-label="Mobile navigation" className="container-site flex min-h-full flex-col pb-10 pt-3">
            <ul className="divide-y divide-line/60">
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-[44px] items-center justify-between text-base font-bold py-2 ${
                      isActive ? 'text-violet-600' : 'text-navy-900'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Products Accordion */}
              <li className="py-2">
                <div className="flex items-center justify-between">
                  <NavLink
                    to="/products"
                    onClick={() => setOpen(false)}
                    className="text-base font-bold text-navy-900"
                  >
                    Products
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('products')}
                    aria-label="Toggle products categories"
                    className="p-1.5 text-ink"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-150 ${
                        mobileExpanded.products ? 'rotate-180 text-violet-600' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileExpanded.products && (
                  <ul className="mt-2 space-y-1 pl-3 border-l-2 border-azure-100">
                    {categories.map((c) => (
                      <li key={c.slug}>
                        <Link
                          to={`/products?category=${c.slug}`}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-xs sm:text-sm font-semibold text-ink hover:text-navy-900"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/products"
                        onClick={() => setOpen(false)}
                        className="block py-1 text-xs font-bold text-violet-600 hover:underline"
                      >
                        All 6 diagnostic systems →
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Solutions Accordion */}
              <li className="py-2">
                <div className="flex items-center justify-between">
                  <NavLink
                    to="/solutions"
                    onClick={() => setOpen(false)}
                    className="text-base font-bold text-navy-900"
                  >
                    Solutions
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('solutions')}
                    aria-label="Toggle solutions settings"
                    className="p-1.5 text-ink"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-150 ${
                        mobileExpanded.solutions ? 'rotate-180 text-violet-600' : ''
                      }`}
                    />
                  </button>
                </div>
                {mobileExpanded.solutions && (
                  <ul className="mt-2 space-y-1 pl-3 border-l-2 border-azure-100">
                    {audiences.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to={`/solutions#${a.slug}`}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-xs sm:text-sm font-semibold text-ink hover:text-navy-900"
                        >
                          {a.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <NavLink
                  to="/technology"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-[44px] items-center justify-between text-base font-bold py-2 ${
                      isActive ? 'text-violet-600' : 'text-navy-900'
                    }`
                  }
                >
                  Technology & Quality
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/resources"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-[44px] items-center justify-between text-base font-bold py-2 ${
                      isActive ? 'text-violet-600' : 'text-navy-900'
                    }`
                  }
                >
                  Resources & Downloads
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-[44px] items-center justify-between text-base font-bold py-2 ${
                      isActive ? 'text-violet-600' : 'text-navy-900'
                    }`
                  }
                >
                  About Efyion Dx
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-[44px] items-center justify-between text-base font-bold py-2 ${
                      isActive ? 'text-violet-600' : 'text-navy-900'
                    }`
                  }
                >
                  Contact & Consultation
                </NavLink>
              </li>
            </ul>

            <div className="mt-auto space-y-2.5 pt-6 border-t border-line/60">
              <Button to="/contact" className="w-full !min-h-[42px] text-sm font-bold shadow-subtle">
                Request a Consultation
              </Button>
              <a
                href={`mailto:${contact.email}`}
                className="flex min-h-[40px] items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-navy-900 border border-line rounded-full hover:bg-mist transition-colors"
              >
                <Mail size={15} className="text-violet-600" aria-hidden="true" />
                {contact.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
