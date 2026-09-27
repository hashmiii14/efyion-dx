/**
 * SITE-WIDE CONTENT — EFYION DX
 * ------------------------------------------------------------------
 * Brand details, navigation, and contact placeholders.
 * All company details are clearly structured for simple client replacement.
 */

export const site = {
  name: 'Efyion Dx',
  tagline: 'Precision Diagnostics. Better Outcomes.',
  url: 'https://efyion-dx.vercel.app',
  defaultDescription:
    'Efyion Dx delivers precision in vitro diagnostic instruments, standardized assays, and laboratory workflow solutions.',
  companyInfo: 'XYZ',
};

export const contact = {
  email: 'info@efyiondx.com',
  phone: '+91 XXXXX XXXXX',
  address: 'XYZ Business Address, India',
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
  /**
   * Form handling endpoint.
   * When empty, the form opens the visitor's mail client addressed to contact.email.
   */
  formEndpoint: '',
};

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Technology', to: '/technology' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];
