/**
 * RESOURCES
 * ------------------------------------------------------------------
 * Placeholder resource entries. Replace `excerpt` and `body` with real
 * articles, news and documents as they are published. Each entry gets
 * its own page at /resources/<slug>.
 */
import { Lightbulb, Newspaper, FileText, HelpCircle, Download, BookOpen } from 'lucide-react';
import { images } from './images';
import { contact } from './site';

export const resourceCategories = [
  { slug: 'articles', name: 'Articles', icon: BookOpen },
  { slug: 'insights', name: 'Insights', icon: Lightbulb },
  { slug: 'news', name: 'News', icon: Newspaper },
  { slug: 'technical', name: 'Technical Resources', icon: FileText },
  { slug: 'faqs', name: 'FAQs', icon: HelpCircle },
  { slug: 'downloads', name: 'Downloads', icon: Download },
];

export const resources = [
  {
    slug: 'diagnostics-in-everyday-care',
    title: 'The role of diagnostics in everyday care',
    category: 'insights',
    image: images.clinician,
    excerpt: 'An introduction to how diagnostic information shapes clinical decisions. Full article to be published.',
  },
  {
    slug: 'choosing-laboratory-solutions',
    title: 'What to consider when choosing laboratory solutions',
    category: 'articles',
    image: images.aboutTeam,
    excerpt: 'A practical guide for laboratory teams evaluating new solutions. Full article to be published.',
  },
  {
    slug: 'efyion-dx-website-launch',
    title: 'Introducing the Efyion Dx website',
    category: 'news',
    image: images.heroDetail,
    excerpt: 'Our new website is the home for Efyion Dx updates, resources and product information.',
  },
  {
    slug: 'technical-documentation',
    title: 'Technical documentation library',
    category: 'technical',
    image: images.analysis,
    excerpt: 'Technical documents for Efyion Dx solutions will be available here as they are released.',
  },
  {
    slug: 'product-documents',
    title: 'Product brochures and documents',
    category: 'downloads',
    image: images.samples,
    excerpt: 'Downloadable brochures and product documents will be listed here once available.',
  },
  {
    slug: 'quality-in-the-laboratory',
    title: 'Why consistency matters in the laboratory',
    category: 'insights',
    image: images.pipetteWork,
    excerpt: 'A look at the everyday practices behind dependable results. Full article to be published.',
  },
];

export const getResource = (slug) => resources.find((r) => r.slug === slug);

/** FAQs contain only confirmed information. Add more as answers are confirmed. */
export const faqs = [
  {
    q: 'How do I enquire about Efyion Dx solutions?',
    a: `Use the enquiry form on our contact page or email us at ${contact.email}. Tell us about your setting and requirements and we will get back to you.`,
  },
  {
    q: 'Where can I find product documentation?',
    a: 'Product documents will be published in the Downloads section as they become available. You can also request information through the contact page.',
  },
  {
    q: 'Can Efyion Dx help me choose the right solution?',
    a: 'Yes. Share your requirements through the enquiry form and our team will help you understand which options may suit your needs.',
  },
  {
    q: 'Which regions does Efyion Dx serve?',
    a: 'Service area information will be added here. Please contact us to discuss your location and requirements.',
  },
];
