/**
 * SITE-WIDE CONTENT
 * ------------------------------------------------------------------
 * Brand details, navigation and contact information.
 * Only confirmed facts live here. Add phone, address or social links
 * to `contact` when they are confirmed — the footer and contact page
 * will show them automatically.
 */

export const site = {
  name: 'Efyion Dx',
  tagline: 'Precision Diagnostics. Better Outcomes.',
  url: '', // e.g. 'https://www.efyiondx.com' — used for canonical/OG URLs once live
  defaultDescription:
    'Efyion Dx is focused on precision diagnostics and healthcare solutions for laboratories, hospitals and healthcare professionals.',
};

export const contact = {
  email: 'efyiondx@gmail.com',
  phone: '', // add when confirmed, e.g. '+91 00000 00000'
  address: '', // add when confirmed
  social: [
    // add when confirmed, e.g. { label: 'LinkedIn', href: 'https://linkedin.com/company/...' }
  ],
  /**
   * Form handling. Paste an endpoint from a form service (Formspree,
   * Getform, Basin, your own API…) to receive enquiries directly.
   * While empty, the form opens the visitor's email app with the
   * enquiry pre-filled and addressed to `email`.
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
