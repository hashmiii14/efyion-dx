/**
 * IMAGE SYSTEM & ASSET SLOTS — EFYION DX
 * ------------------------------------------------------------------
 * All random stock photos have been removed in accordance with project requirements.
 * This file defines clearly structured, responsive image slots prepared for the
 * 5–10 real Efyion Dx photographs to be provided.
 *
 * When real images are ready, simply assign the `src` attribute (e.g. src: '/images/hero-analyzer.jpg').
 * In the meantime, each slot renders an elegant, high-precision clinical diagnostic
 * placeholder frame with zero layout shift and no broken image icons.
 */

// Helper to define a clean, production-ready image slot
const createSlot = ({ slot, label, description, aspectRatio = '16/10', src = null, alt = '' }) => ({
  slot,
  src,
  alt: alt || `${label} — Efyion Dx Precision Diagnostics`,
  label,
  description,
  aspectRatio,
  isPlaceholder: !src,
});

export const slots = {
  // Core Brand & Hero Showcase (Primary Slot)
  heroImage: createSlot({
    slot: 'heroImage',
    label: 'Hero Diagnostic Platform',
    description: 'High-throughput automated clinical analyzer platform',
    aspectRatio: '4/3',
    src: '/images/hero-lab.jpg',
    alt: 'Clinical laboratory scientists working with diagnostic equipment — Efyion Dx',
  }),

  // Corporate & Facility
  aboutImage: createSlot({
    slot: 'aboutImage',
    label: 'Clinical Diagnostic Operations',
    description: 'Specialized diagnostic laboratory cleanroom and instrumentation operations',
    aspectRatio: '16/10',
    src: '/images/hero-lab.jpg',
    alt: 'Clinical laboratory scientists working with diagnostic equipment — Efyion Dx',
  }),

  aboutFacility: createSlot({
    slot: 'aboutFacility',
    label: 'Diagnostic Center & Testing Facility',
    description: 'Standardized laboratory workflow facility',
    aspectRatio: '16/10',
  }),

  // Technology & Optics
  technologyImage: createSlot({
    slot: 'technologyImage',
    label: 'Diagnostic Optical & Analytical Hardware',
    description: 'Multi-wavelength photometric optics and digital morphology scanning',
    aspectRatio: '16/10',
  }),

  // Care Settings & Clinical Solutions
  solutionsImage: createSlot({
    slot: 'solutionsImage',
    label: 'Clinical Care Settings & Health Networks',
    description: 'Hospital laboratory and acute diagnostics integration',
    aspectRatio: '16/10',
  }),

  // Diagnostic Workflow
  workflowImage: createSlot({
    slot: 'workflowImage',
    label: 'Laboratory Sample Workflow',
    description: 'Automated sample accessioning, preparation, and analytical verification',
    aspectRatio: '16/10',
  }),

  // Quality Assurance & Governance
  qualityImage: createSlot({
    slot: 'qualityImage',
    label: 'Quality Assurance & Calibration Standards',
    description: 'Traceable reference calibrators and multi-level control verification',
    aspectRatio: '16/10',
  }),

  // Technical Application Support
  supportImage: createSlot({
    slot: 'supportImage',
    label: 'Technical Advisory & Support Advisory',
    description: 'Biomedical engineering, on-site calibration and application support',
    aspectRatio: '16/10',
  }),

  // 6 Diagnostic Product Slots
  productImage1: createSlot({
    slot: 'productImage1',
    label: 'Efyion ChemTrack 400 Analyzer',
    description: 'Automated Clinical Chemistry Workstation',
    aspectRatio: '4/3',
  }),

  productImage2: createSlot({
    slot: 'productImage2',
    label: 'Multi-Parameter Optical System',
    description: 'High-Resolution Diagnostic Imaging & Optical Platform',
    aspectRatio: '4/3',
  }),

  productImage3: createSlot({
    slot: 'productImage3',
    label: 'Standardized Diagnostic Reagents',
    description: 'Liquid-Stable Reagent Kits & Multi-Level Calibrators',
    aspectRatio: '4/3',
  }),

  productImage4: createSlot({
    slot: 'productImage4',
    label: 'Rapid Point-of-Care POCT Platform',
    description: 'Handheld Rapid-Turnaround Diagnostic Platform',
    aspectRatio: '4/3',
  }),

  productImage5: createSlot({
    slot: 'productImage5',
    label: 'High-Sensitivity Immunoassay ECL System',
    description: 'Electrochemiluminescence Immunoassay Analyzer',
    aspectRatio: '4/3',
  }),

  productImage6: createSlot({
    slot: 'productImage6',
    label: 'Diagnostic Informatics & LIS Suite',
    description: 'Laboratory Information Middleware & Digital Connectivity',
    aspectRatio: '4/3',
  }),

  // Contact & Advisory
  contactImage: createSlot({
    slot: 'contactImage',
    label: 'Clinical Consultation & Advisory',
    description: 'Dedicated technical discussion and testing menu evaluation',
    aspectRatio: '16/10',
  }),
};

// Aliases for comprehensive backward compatibility across all existing component imports
export const images = {
  ...slots,
  heroLab: slots.heroImage,
  heroDetail: slots.workflowImage,
  heroAutomation: slots.technologyImage,
  solutionsHero: slots.solutionsImage,

  pillarAssays: slots.productImage3,
  pillarAutomation: slots.heroImage,
  pillarMicroscopy: slots.technologyImage,
  pillarData: slots.productImage6,

  aboutHero: slots.aboutImage,
  aboutTeam: slots.aboutImage,
  aboutDetail: slots.qualityImage,

  categoryClinical: slots.productImage5,
  categoryLab: slots.heroImage,
  categoryInstruments: slots.technologyImage,
  categoryReagents: slots.productImage3,
  categoryPointOfCare: slots.productImage4,
  categoryTech: slots.productImage6,

  product1: slots.productImage1,
  product2: slots.productImage2,
  product3: slots.productImage3,
  product4: slots.productImage4,
  product5: slots.productImage5,
  product6: slots.productImage6,

  audienceLab: slots.heroImage,
  audienceHospital: slots.solutionsImage,
  audienceClinician: slots.supportImage,
  audienceClinicalEnv: slots.productImage4,
  audienceResearch: slots.technologyImage,

  workflowIntake: slots.workflowImage,
  workflowPrep: slots.qualityImage,
  workflowAnalysis: slots.heroImage,
  workflowInsight: slots.productImage6,

  technology: slots.technologyImage,
  innovation: slots.technologyImage,
  researchDev: slots.technologyImage,
  labExcellence: slots.qualityImage,

  qualityControl: slots.qualityImage,
  supportEngineer: slots.supportImage,

  resourceInsights: slots.technologyImage,
  resourceLabGuide: slots.heroImage,
  resourceNews: slots.aboutImage,
  resourceTechnical: slots.qualityImage,
  resourceDownloads: slots.productImage3,
  resourceQuality: slots.qualityImage,

  solutionLab: slots.heroImage,
  solutionClinical: slots.solutionsImage,
  solutionNetwork: slots.solutionsImage,

  techOptics: slots.technologyImage,
  techSampleIntegrity: slots.qualityImage,
  techLims: slots.productImage6,
  contactConsultation: slots.contactImage,
};
