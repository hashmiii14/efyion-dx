/**
 * PRODUCT CATALOGUE
 * ------------------------------------------------------------------
 * Categories and products are STRUCTURAL PLACEHOLDERS until the actual
 * Efyion Dx portfolio is confirmed.
 *
 * To add a real product, copy one object in `products`, give it a
 * unique `slug`, and fill in the fields. The product listing, filters,
 * search and detail page are all generated from this file.
 *
 * Leave any field as an empty array/string and the matching section on
 * the product page shows a neutral "to be added" state rather than
 * breaking.
 */
import {
  Activity,
  FlaskConical,
  Microscope,
  TestTubes,
  HeartPulse,
  MonitorSmartphone,
} from 'lucide-react';
import { images } from './images';

export const categories = [
  {
    slug: 'clinical-diagnostics',
    name: 'Clinical Diagnostics',
    icon: Activity,
    image: images.clinician,
    summary: 'Testing solutions that support day-to-day clinical decision making.',
  },
  {
    slug: 'laboratory-solutions',
    name: 'Laboratory Solutions',
    icon: FlaskConical,
    image: images.aboutTeam,
    summary: 'Tools and systems that help laboratories run organised, consistent workflows.',
  },
  {
    slug: 'diagnostic-instruments',
    name: 'Diagnostic Instruments',
    icon: Microscope,
    image: images.microscope,
    summary: 'Analysers and equipment for laboratory and clinical environments.',
  },
  {
    slug: 'reagents-consumables',
    name: 'Reagents & Consumables',
    icon: TestTubes,
    image: images.samples,
    summary: 'The everyday materials that keep diagnostic testing running.',
  },
  {
    slug: 'point-of-care',
    name: 'Point-of-Care Solutions',
    icon: HeartPulse,
    image: images.clinicianTablet,
    summary: 'Testing designed to happen closer to the patient.',
  },
  {
    slug: 'healthcare-technology',
    name: 'Healthcare Technology',
    icon: MonitorSmartphone,
    image: images.analysis,
    summary: 'Digital tools that connect diagnostic information to the people who need it.',
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);

/** Placeholder text used across empty product fields — change once, updates everywhere. */
export const PENDING = 'To be added';

const placeholderProduct = (n, category, type) => ({
  slug: `diagnostic-solution-${String(n).padStart(2, '0')}`,
  name: `Diagnostic Solution ${String(n).padStart(2, '0')}`,
  category,
  type,
  featured: n <= 4,
  image: null, // e.g. images.samples or { src: '/images/products/my-product.jpg', alt: '...' }
  summary: 'Product description to be added.',
  overview:
    'A full overview of this product will appear here once product information is confirmed. Use this space to describe what the product is, who it is for and where it fits in the diagnostic workflow.',
  applications: [], // e.g. ['Routine clinical testing', 'Hospital laboratories']
  features: [], // e.g. [{ title: 'Feature name', text: 'Short explanation' }]
  specifications: [
    // Label/value pairs. Values stay as PENDING until confirmed.
    { label: 'Product type', value: type },
    { label: 'Intended use', value: PENDING },
    { label: 'Sample type', value: PENDING },
    { label: 'Format / configuration', value: PENDING },
    { label: 'Regulatory status', value: PENDING },
  ],
  downloads: [], // e.g. [{ label: 'Product brochure', href: '/downloads/brochure.pdf', size: 'PDF' }]
});

export const products = [
  placeholderProduct(1, 'laboratory-solutions', 'Laboratory Solution'),
  placeholderProduct(2, 'diagnostic-instruments', 'Diagnostic Technology'),
  placeholderProduct(3, 'reagents-consumables', 'Reagent System'),
  placeholderProduct(4, 'point-of-care', 'Point-of-Care Solution'),
  placeholderProduct(5, 'clinical-diagnostics', 'Clinical Diagnostic Solution'),
  placeholderProduct(6, 'healthcare-technology', 'Digital Solution'),
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
