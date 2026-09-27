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
    slug: 'liquid-stable-vs-reconstituted-reagents',
    title: 'Liquid-Stable vs. Lyophilized Reagents: A Laboratory Efficiency & TCO Study',
    category: 'technical',
    image: images.resourceTechnical,
    excerpt: 'Examining how ready-to-use liquid-stable chemistry formulations eliminate deionized water pipetting errors, reduce preparation overhead, and extend onboard stability.',
    body: [
      'Manual reagent reconstitution remains one of the most overlooked sources of pre-analytical variation in busy clinical laboratories. Variations in deionized water quality, technician pipetting technique, and dissolution delays introduce subtle calibration shifts.',
      'Ready-to-use liquid-stable reagents eliminate manual preparation entirely. Prefilled into barcoded cartridges, they can be loaded directly into chilled analyzer compartments, instantly verified by automated 2D barcode scanners.',
      'By reducing preparation time from 45 minutes per shift to under 5 minutes, laboratories reclaim valuable technician hours while minimizing reagent discard from expired reconstituted batches.',
    ],
  },
  {
    slug: 'iso-15189-accreditation-guide',
    title: 'Navigating ISO 15189 Accreditation: Electronic Audit Trails & QC Traceability',
    category: 'articles',
    image: images.resourceQuality,
    excerpt: 'A comprehensive operational framework for laboratory supervisors preparing for ISO 15189 quality inspections using automated Levey-Jennings QC tracking.',
    body: [
      'ISO 15189 accreditation demands complete, uninterrupted traceability from specimen collection through instrument calibration to report delivery.',
      'Implementing automated middleware that captures operator IDs, reagent lot expiration dates, and multi-rule Westgard evaluations removes the vulnerability of manual paper logs.',
      'Efyion Dx diagnostic platforms natively log all analytical events into tamper-evident electronic audit trails, enabling one-click generation of inspection-ready compliance dossiers.',
    ],
  },
  {
    slug: 'bidirectional-lis-interfacing',
    title: 'Bidirectional LIS Interfacing: Reducing Clerical Errors and Turnaround Time',
    category: 'insights',
    image: images.resourceInsights,
    excerpt: 'How native ASTM 1394 and HL7 query-host protocols streamline specimen accessioning, eliminate manual worklist entry, and accelerate critical STAT reporting.',
    body: [
      'Manual specimen entry onto analyzer consoles introduces unnecessary delay and clerical error risk into high-throughput testing environments.',
      'Bidirectional query-host interfacing enables the analyzer to scan the tube barcode upon rack insertion, automatically fetch the ordered test codes from the hospital LIS, execute the profile, and return verified results seamlessly.',
      'This closed-loop digital architecture accelerates emergency STAT turnaround times to under 18 minutes while ensuring zero specimen misattribution.',
    ],
  },
  {
    slug: 'pediatric-micro-sampling',
    title: 'Pediatric & Geriatric Micro-Sampling: Conserving Precious Specimen Volumes',
    category: 'technical',
    image: images.resourceTechnical,
    excerpt: 'Overcoming pre-analytical volume limitations in acute neonatal and geriatric care through precision nanoliter aspiration and micro-volume cuvette optics.',
    body: [
      'Drawing venous blood from neonates, pediatric patients, and oncology patients undergoing chemotherapy presents severe clinical challenges.',
      'Modern diagnostic analyzers engineered with precision nanoliter syringes and ultra-sensitive optical gratings reduce the required specimen volume to as little as 2.0 µL per photometric test.',
      'This micro-volume aspiration capability preserves scarce blood volume, prevents iatrogenic anemia, and virtually eliminates painful, repeated redraw requests.',
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
  {
    slug: 'product-documents',
    title: 'Diagnostic Product Guides & Technical Parameter Sheets',
    category: 'downloads',
    image: images.resourceDownloads,
    excerpt: 'Downloadable system summaries, assay parameter sheets, and consumable catalogs available for laboratory procurement teams.',
    body: [
      'Our downloadable library includes system brochures, technical parameter sheets, and consumable specifications to assist procurement committees and laboratory directors.',
      'Detailed parameter cards describe reagent packaging, test cassette stability, barcode specifications, and waste management recommendations.',
      'Specific documentation sets can also be requested directly via our contact channels for tailored project evaluations.',
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
    a: 'All reagent lots are manufactured under rigorous quality control standards, verified against certified standard reference materials (WHO, NIST, IFCC), and supplied with comprehensive certificates of analysis to ensure minimal analytical variation.',
  },
  {
    q: 'Can Efyion Dx platforms integrate with our existing LIS / HIS?',
    a: 'Yes. Our automated analysers and healthcare technology software natively support bidirectional ASTM 1394 and HL7 v2.x clinical communication protocols for automated worklist downloads and result transmission.',
  },
  {
    q: 'What support is provided during instrument onboarding?',
    a: 'We provide structured pre-implementation workflow reviews, technician operational training, verification run assistance, and ongoing application consultation to ensure smooth operational cutover.',
  },
  {
    q: 'What are the pure water and electrical requirements for clinical chemistry analyzers?',
    a: 'Our high-throughput clinical chemistry analyzers require NCCLS / CLSI Type II deionized water (resistivity ≥ 1.0 MΩ·cm) and dedicated clean-power single-phase AC connections with an online UPS rating of at least 2.5 kVA.',
  },
  {
    q: 'What is the onboard reagent stability inside refrigerated compartments?',
    a: 'Reagents loaded into the continuous 2°C to 8°C chilled carousels maintain analytical calibration and active enzyme stability for up to 30 days onboard, drastically reducing consumable wastage.',
  },
];
