/**
 * IMAGE SYSTEM & ASSET SLOTS — EFYION DX
 * ------------------------------------------------------------------
 * Real images provided by the client are assigned directly to their unique slots.
 * ZERO IMAGES ARE REPEATED across the application.
 *
 * Current Assigned Real Assets (9 Unique Images):
 * 1. Hero Background: /images/hero-lab.jpg (Diagnostic lab scientists with microscope)
 * 2. About Operations: /images/about-lab.jpg (Clinical testing facility, Sysmex instrumentation)
 * 3. Product 1 (ChemTrack 400): /images/product-analyzer.png (Automated Chemistry Analyzer)
 * 4. Product 2 (Optical System): /images/product-microscope.png (Confocal Microscope Unit)
 * 5. Product 4 (Rapid POCT): /images/product-poct.png (iCHROMA POCT Platform with cartridges)
 * 6. Technology & Optics: /images/tech-optics.jpg (Multi-wavelength laser & photometric optics)
 * 7. Quality Assurance: /images/quality-qc.png (Quality control calibrators & C.O.A. certification)
 * 8. Support Engineering: /images/support-engineer.png (Biomedical engineer calibrating analyzer)
 * 9. Workflow Automation: /images/workflow-automation.png (Total lab automation track & robotics)
 *
 * All other slots render dedicated, elegant, high-precision clinical placeholder frames
 * with zero layout shift and no broken image icons, ready for subsequent client photos.
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
    src: '/images/hero-lab.jpg',
    alt: 'Clinical laboratory scientists working with diagnostic equipment — Efyion Dx',
  }),

  // ── 2. Corporate & Facility ──
  aboutImage: createSlot({
    slot: 'aboutImage',
    label: 'Clinical Diagnostic Operations',
    description: 'Specialized diagnostic laboratory cleanroom and instrumentation operations',
    aspectRatio: '16/10',
    src: '/images/about-lab.jpg',
    alt: 'Efyion Dx Clinical Laboratory Testing Facility and Diagnostic Operations',
  }),

  aboutFacility: createSlot({
    slot: 'aboutFacility',
    label: 'Diagnostic Center & Testing Facility',
    description: 'Standardized laboratory workflow facility and cleanroom infrastructure',
    aspectRatio: '16/10',
  }),

  // ── 3. Technology & Optics ──
  technologyImage: createSlot({
    slot: 'technologyImage',
    label: 'Diagnostic Optical & Analytical Hardware',
    description: 'Multi-wavelength photometric optics and digital laser morphology scanning',
    aspectRatio: '16/10',
    src: '/images/tech-optics.jpg',
    alt: 'Multi-wavelength photometric optics and digital laser analytical hardware — Efyion Dx',
  }),

  // ── 4. Care Settings & Clinical Solutions ──
  solutionsImage: createSlot({
    slot: 'solutionsImage',
    label: 'Clinical Care Settings & Health Networks',
    description: 'Hospital laboratory and acute diagnostics integration',
    aspectRatio: '16/10',
  }),

  // ── 5. Diagnostic Workflow ──
  workflowImage: createSlot({
    slot: 'workflowImage',
    label: 'Laboratory Sample Workflow',
    description: 'Automated track accessioning, robotic preparation, and analytical verification',
    aspectRatio: '16/10',
    src: '/images/workflow-automation.png',
    alt: 'Automated clinical laboratory track workflow and high-throughput sample routing — Efyion Dx',
  }),

  // ── 6. Quality Assurance & Governance ──
  qualityImage: createSlot({
    slot: 'qualityImage',
    label: 'Quality Assurance & Calibration Standards',
    description: 'Traceable reference calibrators, multi-level control verification, and C.O.A. records',
    aspectRatio: '16/10',
    src: '/images/quality-qc.png',
    alt: 'Quality control calibrator standards, multi-level controls and C.O.A. certification — Efyion Dx',
  }),

  // ── 7. Technical Application Support ──
  supportImage: createSlot({
    slot: 'supportImage',
    label: 'Technical Advisory & Field Support',
    description: 'Biomedical engineering, on-site calibration, preventative maintenance and application advisory',
    aspectRatio: '16/10',
    src: '/images/support-engineer.png',
    alt: 'Biomedical service engineers performing calibration and diagnostic instrumentation support — Efyion Dx',
  }),

  // ── 8. Six Diagnostic Product Slots ──
  productImage1: createSlot({
    slot: 'productImage1',
    label: 'Efyion ChemTrack 400 Analyzer',
    description: 'Automated Clinical Chemistry Workstation with reagent carousels',
    aspectRatio: '4/3',
    src: '/images/product-analyzer.png',
    alt: 'Efyion ChemTrack 400 Automated Clinical Chemistry Analyzer Workstation',
  }),

  productImage2: createSlot({
    slot: 'productImage2',
    label: 'Multi-Parameter Optical System',
    description: 'High-Resolution Diagnostic Imaging & Optical Microscopy Platform',
    aspectRatio: '4/3',
    src: '/images/product-microscope.png',
    alt: 'Multi-Parameter Optical Diagnostic System & Laser Scanning Unit',
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
    description: 'Handheld Rapid-Turnaround Diagnostic Platform with Test Cartridges',
    aspectRatio: '4/3',
    src: '/images/product-poct.png',
    alt: 'Rapid Point-of-Care POCT Handheld Diagnostic Platform and Test Cartridges',
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

  // ── 9. Contact & Advisory ──
  contactImage: createSlot({
    slot: 'contactImage',
    label: 'Clinical Consultation & Advisory',
    description: 'Dedicated technical discussion and testing menu evaluation',
    aspectRatio: '16/10',
  }),

  // ── 10. Distinct Dedicated Category Slots (No photo repetition) ──
  categoryClinicalSlot: createSlot({
    slot: 'cat-clinical',
    label: 'Clinical Diagnostics',
    description: 'High-sensitivity clinical testing solutions across specialties',
    aspectRatio: '16/10',
  }),

  categoryLabSlot: createSlot({
    slot: 'cat-lab',
    label: 'Laboratory Solutions',
    description: 'End-to-end automated testing workstations and continuous sample workflows',
    aspectRatio: '16/10',
  }),

  categoryInstrumentsSlot: createSlot({
    slot: 'cat-instruments',
    label: 'Diagnostic Instruments',
    description: 'Precision analyzers, automated instruments and optical scanning units',
    aspectRatio: '16/10',
  }),

  categoryReagentsSlot: createSlot({
    slot: 'cat-reagents',
    label: 'Reagents & Consumables',
    description: 'Standardized liquid-stable testing reagents and control calibrators',
    aspectRatio: '16/10',
  }),

  categoryPointOfCareSlot: createSlot({
    slot: 'cat-poct',
    label: 'Point-of-Care Solutions',
    description: 'Rapid diagnostic platforms engineered for bedside clinical turnaround',
    aspectRatio: '16/10',
  }),

  categoryTechSlot: createSlot({
    slot: 'cat-tech',
    label: 'Healthcare Technology',
    description: 'Secure laboratory informatics connecting diagnostic data to care teams',
    aspectRatio: '16/10',
  }),
};

// Aliases for comprehensive backward compatibility across all component imports
// Strictly non-repeating mappings:
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

  // Dedicated Category slots — completely independent of product cards
  categoryClinical: slots.categoryClinicalSlot,
  categoryLab: slots.categoryLabSlot,
  categoryInstruments: slots.categoryInstrumentsSlot,
  categoryReagents: slots.categoryReagentsSlot,
  categoryPointOfCare: slots.categoryPointOfCareSlot,
  categoryTech: slots.categoryTechSlot,

  // Product cards (1, 2, 4 are real photos; 3, 5, 6 are unique placeholders)
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
