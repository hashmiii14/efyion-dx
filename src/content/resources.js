/**
 * RESOURCES — EFYION DX
 * ------------------------------------------------------------------
 * Diagnostic insights, technical documentation, operational guidance and FAQs.
 */
import { Lightbulb, Newspaper, FileText, HelpCircle, Download, BookOpen } from 'lucide-react';
import { images } from './images.js';
import { contact } from './site.js';

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
    title: 'The Vital Role of Precision Diagnostics in Clinical Decision-Making',
    category: 'insights',
    image: images.resourceInsights,
    excerpt: 'An exploration of how timely, standardized laboratory findings reduce clinical uncertainty and support prompt therapeutic interventions across acute and routine care.',
    body: [
      'Clinical decisions rely fundamentally on the fidelity of laboratory data. In modern healthcare environments, over 70% of clinical decisions involve diagnostic testing, making analytical accuracy not merely an operational metric, but a cornerstone of patient care.',
      'From identifying metabolic shifts to confirming acute cardiac or infectious markers, precise instrumentation and quality-controlled assays reduce diagnostic ambiguity, streamline clinical pathways, and optimize hospital bed utilization.',
      'Efyion Dx focuses on equipping laboratories and clinical teams with the platforms and standardized reagents necessary to sustain high diagnostic confidence day in and day out.',
    ],
  },
  {
    slug: 'choosing-laboratory-solutions',
    title: 'A Strategic Guide for Laboratories Selecting Next-Generation Analysers',
    category: 'articles',
    image: images.resourceLabGuide,
    excerpt: 'Key considerations for laboratory directors evaluating instrument footprint, reagent stability, walk-away automation, and bidirectional LIS integration.',
    body: [
      'Upgrading or introducing diagnostic platforms into an established laboratory requires balancing multiple operational demands: workload volume, menu flexibility, technician staffing, and compliance mandates.',
      'Key evaluation criteria include walk-away capacity during peak shifts, onboard reagent refrigeration life, clot and bubble detection mechanisms, and the ease of connecting to existing hospital information systems (LIS/HIS).',
      'By selecting platforms that align with both current testing volumes and anticipated expansions, laboratory managers can avoid workflow bottlenecks while maintaining predictable cost-per-test metrics.',
    ],
  },
  {
    slug: 'efyion-dx-website-launch',
    title: 'Introducing Efyion Dx: Advancing Precision Diagnostics',
    category: 'news',
    image: images.resourceNews,
    excerpt: 'The digital hub for Efyion Dx solutions, providing laboratories and healthcare professionals with direct access to our diagnostic portfolio and consultation channels.',
    body: [
      'We are pleased to introduce the official Efyion Dx platform, created to connect healthcare providers, diagnostic laboratories, and researchers with precision diagnostic technologies.',
      'Our focus is straightforward: providing reliable, standardized diagnostic platforms and attentive technical support so laboratories can concentrate on what matters most—delivering dependable patient results.',
      'Visitors can explore our core solution categories, review instrument capabilities, and directly engage with our technical team for custom consultations.',
    ],
  },
  {
    slug: 'technical-documentation',
    title: 'Diagnostic Technical Documentation & Protocol Architecture',
    category: 'technical',
    image: images.resourceTechnical,
    excerpt: 'Overview of analytical verification frameworks, calibration protocols, and sample handling requirements for Efyion Dx diagnostic platforms.',
    body: [
      'Standardized operating procedures are essential for reproducible laboratory output. Technical documentation for Efyion Dx solutions details recommended specimen collection procedures, centrifuge speeds, and storage guidelines.',
      'Comprehensive analytical verification protocols assist laboratory supervisors in validating linear range, precision limits, and limit of detection (LoD) prior to placing instruments into live diagnostic service.',
      'Detailed integration sheets outlining HL7 message specifications and ASTM 1394 communication handshakes are available upon platform commissioning.',
    ],
  },
  {
    slug: 'product-documents',
    title: 'Diagnostic Product Guides & Technical Specifications',
    category: 'downloads',
    image: images.resourceDownloads,
    excerpt: 'Downloadable system summaries, assay parameter sheets, and consumable catalogs available for laboratory procurement teams.',
    body: [
      'Our downloadable library includes system brochures, technical parameter sheets, and consumable specifications to assist procurement committees and laboratory directors.',
      'Detailed parameter cards describe reagent packaging, test cassette stability, barcode specifications, and waste management recommendations.',
      'Specific documentation sets can also be requested directly via our contact channels for tailored project evaluations.',
    ],
  },
  {
    slug: 'quality-in-the-laboratory',
    title: 'Why Analytical Consistency Matters: Quality Control in Modern Labs',
    category: 'insights',
    image: images.resourceQuality,
    excerpt: 'Examining internal quality control procedures, calibrator traceability, and Westgard multi-rules that safeguard diagnostic integrity.',
    body: [
      'Reproducibility is the benchmark of clinical laboratory excellence. Even minor drift in assay calibration can lead to systemic reporting errors, affecting clinical interpretations.',
      'Implementing strict internal quality control (IQC) routines—supported by multi-level calibrators traceable to international reference materials—allows laboratory staff to detect bias or precision shifts immediately.',
      'Efyion Dx incorporates standardized control materials and automated QC tracking across our portfolio, supporting quality teams in sustaining audit-ready laboratories.',
    ],
  },
];

export const getResource = (slug) => resources.find((r) => r.slug === slug);

export const faqs = [
  {
    q: 'How do I enquire about Efyion Dx diagnostic solutions?',
    a: `Submit an enquiry through our contact page form or email us directly at ${contact.email}. Provide details regarding your laboratory setting, daily testing volume, and target clinical panels, and our technical advisory team will provide a tailored response.`,
  },
  {
    q: 'What types of healthcare settings does Efyion Dx serve?',
    a: 'We support hospital central laboratories, independent diagnostic pathology centers, point-of-care emergency suites, outpatient clinics, and biomedical research facilities.',
  },
  {
    q: 'How does Efyion Dx ensure batch-to-batch reagent consistency?',
    a: 'All reagent lots are manufactured under rigorous quality control standards, verified against certified standard reference materials, and supplied with comprehensive certificates of analysis to ensure minimal analytical variation.',
  },
  {
    q: 'Can Efyion Dx platforms integrate with our existing LIS / HIS?',
    a: 'Yes. Our automated analysers and healthcare technology software natively support bidirectional ASTM and HL7 clinical communication protocols for automated worklist downloads and result transmission.',
  },
  {
    q: 'What support is provided during instrument onboarding?',
    a: 'We provide structured pre-implementation workflow reviews, technician operational training, verification run assistance, and ongoing application consultation to ensure smooth operational cutover.',
  },
];
