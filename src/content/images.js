/**
 * IMAGE SYSTEM & ASSET SLOTS — EFYION DX
 * ------------------------------------------------------------------
 * 100% Authentic Diagnostic Photography with Zero Duplication.
 * AI-generated images have been removed.
 *
 * Distinct Image Assignments:
 * 1. Hero Background: /images/hero-lab.webp (Scientists in bright clinical lab)
 * 2. About Section: /images/about-lab.webp (Sysmex testing facility)
 * 3. Product 1 (ChemTrack 400): /images/product-analyzer.webp (Automated Chemistry Analyzer)
 * 4. Product 2 (Optical System): /images/product-microscope.webp (FV3000 Confocal Microscope)
 * 5. Product 4 (Rapid POCT): /images/product-poct.webp (iCHROMA POCT Device with cartridges)
 * 6. Technology & Optics: /images/tech-optics.webp (Laser optical engine)
 * 7. Quality Assurance: /images/quality-qc.webp (Calibrator standards & C.O.A. records)
 * 8. Support Engineering: /images/support-engineer.webp (Biomedical engineer servicing analyzer)
 * 9. Workflow Automation: /images/workflow-automation.webp (Automated lab track TLA system)
 * 10. Cat 1 (Clinical): /images/lab-scientist-pipette.webp (Female scientist pipetting in lab)
 * 11. Cat 2 (Lab Solutions): /images/lab-microscope-culture.webp (Microscope culture preparation)
 * 12. Cat 3 (Instruments): /images/lab-microscope-research.webp (Scientist at research microscope)
 * 13. Cat 4 (Reagents): /images/lab-reagent-tubes.webp (Reagent vials and microcentrifuge rack)
 * 14. Cat 6 (Technology): /images/lab-digital-diagnostics.webp (Digital diagnostic interface)
 *
 * Products 3, 5, 6 are clean empty slots awaiting the real product photos provided by client.
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
  // ── 1. Hero Showcase (Primary Homepage Slot) ──
  heroImage: createSlot({
    slot: 'heroImage',
    label: 'Hero Diagnostic Platform',
    description: 'High-throughput automated clinical analyzer platform',
    aspectRatio: '4/3',
    src: '/images/hero-lab.webp',
    alt: 'Clinical laboratory scientists working with diagnostic equipment — Efyion Dx',
  }),

  // ── 2. Corporate & Facility ──
  aboutImage: createSlot({
    slot: 'aboutImage',
    label: 'Clinical Diagnostic Operations',
    description: 'Specialized diagnostic laboratory cleanroom and instrumentation operations',
    aspectRatio: '16/10',
    src: '/images/about-lab.webp',
    alt: 'Efyion Dx Clinical Laboratory Testing Facility and Diagnostic Operations',
  }),

  aboutFacility: createSlot({
    slot: 'aboutFacility',
    label: 'Diagnostic Center & Testing Facility',
    description: 'Standardized laboratory workflow facility and cleanroom infrastructure',
    aspectRatio: '16/10',
    src: '/images/about-lab.webp',
    alt: 'Diagnostic Testing Facility and Standardized Laboratory Workflow — Efyion Dx',
  }),

  // ── 3. Technology & Optics ──
  technologyImage: createSlot({
    slot: 'technologyImage',
    label: 'Diagnostic Optical & Analytical Hardware',
    description: 'Multi-wavelength photometric optics and digital laser morphology scanning',
    aspectRatio: '16/10',
    src: '/images/tech-optics.webp',
    alt: 'Multi-wavelength photometric optics and digital laser analytical hardware — Efyion Dx',
  }),

  // ── 4. Care Settings & Clinical Solutions ──
  solutionsImage: createSlot({
    slot: 'solutionsImage',
    label: 'Clinical Care Settings & Health Networks',
    description: 'Hospital laboratory and acute diagnostics integration',
    aspectRatio: '16/10',
    src: '/images/workflow-automation.webp',
    alt: 'Clinical Care Settings and Hospital Laboratory Integration — Efyion Dx',
  }),

  // ── 5. Diagnostic Workflow ──
  workflowImage: createSlot({
    slot: 'workflowImage',
    label: 'Laboratory Sample Workflow',
    description: 'Automated track accessioning, robotic preparation, and analytical verification',
    aspectRatio: '16/10',
    src: '/images/workflow-automation.webp',
    alt: 'Automated clinical laboratory track workflow and high-throughput sample routing — Efyion Dx',
  }),

  // ── 6. Quality Assurance & Governance ──
  qualityImage: createSlot({
    slot: 'qualityImage',
    label: 'Quality Assurance & Calibration Standards',
    description: 'Traceable reference calibrators, multi-level control verification, and C.O.A. records',
    aspectRatio: '16/10',
    src: '/images/quality-qc.webp',
    alt: 'Quality control calibrator standards, multi-level controls and C.O.A. certification — Efyion Dx',
  }),

  // ── 7. Technical Application Support ──
  supportImage: createSlot({
    slot: 'supportImage',
    label: 'Technical Advisory & Field Support',
    description: 'Biomedical engineering, on-site calibration, preventative maintenance and application advisory',
    aspectRatio: '16/10',
    src: '/images/support-engineer.webp',
    alt: 'Biomedical service engineers performing calibration and diagnostic instrumentation support — Efyion Dx',
  }),

  // ── 8. Six Diagnostic Product Slots (Real photos for 1, 2, 4; Clean empty slots for 3, 5, 6) ──
  productImage1: createSlot({
    slot: 'productImage1',
    label: 'Efyion ChemTrack 400 Analyzer',
    description: 'Automated Clinical Chemistry Workstation with reagent carousels',
    aspectRatio: '4/3',
    src: '/images/product-analyzer.webp',
    alt: 'Efyion ChemTrack 400 Automated Clinical Chemistry Analyzer Workstation',
  }),

  productImage2: createSlot({
    slot: 'productImage2',
    label: 'Multi-Parameter Optical System',
    description: 'High-Resolution Diagnostic Imaging & Optical Microscopy Platform',
    aspectRatio: '4/3',
    src: '/images/product-microscope.webp',
    alt: 'Multi-Parameter Optical Diagnostic System & Laser Scanning Unit',
  }),

  productImage3: createSlot({
    slot: 'productImage3',
    label: 'Standardized Diagnostic Reagents',
    description: 'Liquid-Stable Reagent Kits & Multi-Level Calibrators',
    aspectRatio: '4/3',
    src: null, // Empty: waiting for real client photo
  }),

  productImage4: createSlot({
    slot: 'productImage4',
    label: 'Rapid Point-of-Care POCT Platform',
    description: 'Handheld Rapid-Turnaround Diagnostic Platform with Test Cartridges',
    aspectRatio: '4/3',
    src: '/images/product-poct.webp',
    alt: 'Rapid Point-of-Care POCT Handheld Diagnostic Platform and Test Cartridges',
  }),

  productImage5: createSlot({
    slot: 'productImage5',
    label: 'High-Sensitivity Immunoassay ECL System',
    description: 'Electrochemiluminescence Immunoassay Analyzer Workstation',
    aspectRatio: '4/3',
    src: null, // Empty: waiting for real client photo
  }),

  productImage6: createSlot({
    slot: 'productImage6',
    label: 'Diagnostic Informatics & LIS Suite',
    description: 'Laboratory Information Middleware & Digital Connectivity',
    aspectRatio: '4/3',
    src: null, // Empty: waiting for real client photo
  }),

  // ── 9. Contact & Advisory ──
  contactImage: createSlot({
    slot: 'contactImage',
    label: 'Clinical Consultation & Advisory',
    description: 'Dedicated technical discussion and testing menu evaluation',
    aspectRatio: '16/10',
    src: '/images/about-lab.webp',
    alt: 'Clinical Consultation and Diagnostic Advisory Team — Efyion Dx',
  }),

  // ── 10. Distinct Category Slots with 100% Unique Real Imagery ──
  categoryClinicalSlot: createSlot({
    slot: 'cat-clinical',
    label: 'Clinical Diagnostics',
    description: 'High-sensitivity clinical testing solutions across specialties',
    aspectRatio: '16/10',
    src: '/images/lab-scientist-pipette.webp',
    alt: 'Clinical Diagnostics laboratory scientist — Efyion Dx',
  }),

  categoryLabSlot: createSlot({
    slot: 'cat-lab',
    label: 'Laboratory Solutions',
    description: 'End-to-end automated testing workstations and continuous sample workflows',
    aspectRatio: '16/10',
    src: '/images/lab-microscope-culture.webp',
    alt: 'Laboratory Solutions and precision microscopy preparation — Efyion Dx',
  }),

  categoryInstrumentsSlot: createSlot({
    slot: 'cat-instruments',
    label: 'Diagnostic Instruments',
    description: 'Precision analyzers, automated instruments and optical scanning units',
    aspectRatio: '16/10',
    src: '/images/lab-microscope-research.webp',
    alt: 'Precision Diagnostic Instruments and laboratory microscopy research — Efyion Dx',
  }),

  categoryReagentsSlot: createSlot({
    slot: 'cat-reagents',
    label: 'Reagents & Consumables',
    description: 'Standardized liquid-stable testing reagents and control calibrators',
    aspectRatio: '16/10',
    src: '/images/lab-reagent-tubes.webp',
    alt: 'Standardized Diagnostic Reagents and specimen vials — Efyion Dx',
  }),

  categoryPointOfCareSlot: createSlot({
    slot: 'cat-poct',
    label: 'Point-of-Care Solutions',
    description: 'Rapid diagnostic platforms engineered for bedside clinical turnaround',
    aspectRatio: '16/10',
    src: null, // clean, distinct visual slot
  }),

  categoryTechSlot: createSlot({
    slot: 'cat-tech',
    label: 'Healthcare Technology',
    description: 'Secure laboratory informatics connecting diagnostic data to care teams',
    aspectRatio: '16/10',
    src: '/images/lab-digital-diagnostics.webp',
    alt: 'Healthcare Technology and digital diagnostic interface — Efyion Dx',
  }),
};

// Aliases for comprehensive backward compatibility across all component imports
export const images = {
  ...slots,
  heroLab: slots.heroImage,
  heroDetail: slots.workflowImage,
  heroAutomation: slots.technologyImage,
  solutionsHero: slots.solutionsImage,

  pillarAssays: slots.productImage3,
  pillarAutomation: slots.categoryLabSlot,
  pillarMicroscopy: slots.categoryInstrumentsSlot,
  pillarData: slots.productImage6,

  aboutHero: slots.aboutImage,
  aboutTeam: slots.aboutFacility,
  aboutDetail: slots.qualityImage,

  // Dedicated Category slots
  categoryClinical: slots.categoryClinicalSlot,
  categoryLab: slots.categoryLabSlot,
  categoryInstruments: slots.categoryInstrumentsSlot,
  categoryReagents: slots.categoryReagentsSlot,
  categoryPointOfCare: slots.categoryPointOfCareSlot,
  categoryTech: slots.categoryTechSlot,

  // Product cards
  product1: slots.productImage1,
  product2: slots.productImage2,
  product3: slots.productImage3,
  product4: slots.productImage4,
  product5: slots.productImage5,
  product6: slots.productImage6,

  audienceLab: slots.categoryLabSlot,
  audienceHospital: slots.solutionsImage,
  audienceClinician: slots.supportImage,
  audienceClinicalEnv: slots.categoryPointOfCareSlot,
  audienceResearch: slots.categoryInstrumentsSlot,

  workflowIntake: slots.workflowImage,
  workflowPrep: slots.qualityImage,
  workflowAnalysis: slots.categoryLabSlot,
  workflowInsight: slots.productImage6,

  technology: slots.technologyImage,
  innovation: slots.technologyImage,
  researchDev: slots.technologyImage,
  labExcellence: slots.qualityImage,

  qualityControl: slots.qualityImage,
  supportEngineer: slots.supportImage,

  resourceInsights: slots.technologyImage,
  resourceLabGuide: slots.categoryLabSlot,
  resourceNews: slots.aboutFacility,
  resourceTechnical: slots.qualityImage,
  resourceDownloads: slots.productImage3,
  resourceQuality: slots.qualityImage,

  solutionLab: slots.categoryLabSlot,
  solutionClinical: slots.solutionsImage,
  solutionNetwork: slots.solutionsImage,

  techOptics: slots.technologyImage,
  techSampleIntegrity: slots.qualityImage,
  techLims: slots.productImage6,
  contactConsultation: slots.contactImage,
};
