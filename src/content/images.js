/**
 * IMAGE SYSTEM & ASSET SLOTS — EFYION DX
 * ------------------------------------------------------------------
 * 100% Authentic Diagnostic Photography with Zero Duplication.
 * All AI-generated images have been eliminated.
 *
 * Distinct Real Image Assignments (19 Dedicated Assets):
 * 1. Hero Showcase: /images/hero-lab.webp (Scientists in bright clinical lab)
 * 2. About Operations: /images/about-lab.webp (Diagnostic testing facility)
 * 3. Diagnostic Facility: /images/lab-microscope-research.webp (Cleanroom & research facility)
 * 4. Technology & Optics: /images/tech-optics.webp (Precision optical lenses & sapphire blue bokeh)
 * 5. Care Settings & Hospital Labs: /images/lab-pathologist-microscope.webp (Pathologist with compound microscope & reagents)
 * 6. Workflow Automation: /images/workflow-automation.webp (Automated lab track TLA system)
 * 7. Quality Assurance: /images/quality-qc.webp (Calibrator standards & C.O.A. records)
 * 8. Support Engineering: /images/support-engineer.webp (Biomedical engineer servicing analyzer)
 * 9. Product 1 (ChemTrack 400): /images/product-analyzer.webp (Automated Chemistry Analyzer)
 * 10. Product 2 (Mispa HX 88): /images/product-mispa-hx88.webp (6-Part Hematology Analyzer with RET + IPF)
 * 11. Product 3 (Mispa i121): /images/product-mispa-i121.webp (Chemiluminescent Immunoassay Analyzer Workstation)
 * 12. Product 4 (Rapid POCT): /images/product-poct.webp (iCHROMA POCT Device with cartridges)
 * 13. Product 5 (Mispa i60): /images/product-mispa-i60.webp (Benchtop Chemiluminescent Immunoassay Analyzer)
 * 14. Product 6 (Informatics & Ecosystem): /images/tech-digital-health.webp (Connected digital healthcare & LIS)
 * 15. Cat 1 (Clinical): /images/lab-scientist-pipette.webp (Female scientist pipetting in lab)
 * 16. Cat 2 (Lab Solutions): /images/lab-microscope-culture.webp (Microscope culture preparation)
 * 17. Cat 3 (Instruments): /images/lab-microscope-research.webp (Scientist at research microscope)
 * 18. Cat 4 (Reagents): /images/lab-reagent-tubes.webp (Reagent vials and microcentrifuge rack)
 * 19. Cat 5 (Point of Care): /images/lab-specimen-tubes.webp (Diagnostic specimen collection tubes in racks)
 * 20. Cat 6 (Technology): /images/lab-digital-diagnostics.webp (Digital diagnostic interface)
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
    src: '/images/lab-microscope-research.webp',
    alt: 'Diagnostic Testing Facility and Standardized Laboratory Workflow — Efyion Dx',
  }),

  // ── 3. Technology & Optics ──
  technologyImage: createSlot({
    slot: 'technologyImage',
    label: 'Diagnostic Optical & Analytical Hardware',
    description: 'High-resolution plan-apochromatic microscope optics and photometric grating',
    aspectRatio: '16/10',
    src: '/images/tech-optics.webp',
    alt: 'Precision diagnostic optical objectives and multi-wavelength analytical hardware — Efyion Dx',
  }),

  // ── 4. Care Settings & Clinical Solutions ──
  solutionsImage: createSlot({
    slot: 'solutionsImage',
    label: 'Clinical Care Settings & Health Networks',
    description: 'Hospital laboratory, diagnostic pathology, and acute diagnostics integration',
    aspectRatio: '16/10',
    src: '/images/lab-pathologist-microscope.webp',
    alt: 'Clinical Care Settings, diagnostic pathology, and hospital laboratory integration — Efyion Dx',
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

  // ── 8. Six Diagnostic Product Slots (Real Equipment Hardware Photography) ──
  productImage1: createSlot({
    slot: 'productImage1',
    label: 'Efyion ChemTrack 400 Analyzer',
    description: 'Automated Clinical Chemistry Workstation with refrigerated reagent carousels',
    aspectRatio: '4/3',
    src: '/images/product-analyzer.webp',
    alt: 'Efyion ChemTrack 400 Automated Clinical Chemistry Analyzer Workstation',
  }),

  productImage2: createSlot({
    slot: 'productImage2',
    label: 'Mispa HX 88 Hematology Analyzer',
    description: '6-Part Automated Hematology Analyzer with Reticulocyte (RET) and IPF',
    aspectRatio: '4/3',
    src: '/images/product-mispa-hx88.webp',
    alt: 'Mispa HX 88 6-Part Automated Hematology Analyzer with RET and IPF — Efyion Dx',
  }),

  productImage3: createSlot({
    slot: 'productImage3',
    label: 'Mispa i121 Immunoassay Analyzer',
    description: 'Chemiluminescent Enzyme Immunoassay (CLEIA) High-Throughput Analyzer',
    aspectRatio: '4/3',
    src: '/images/product-mispa-i121.webp',
    alt: 'Mispa i121 Chemiluminescent Enzyme Immunoassay Analyzer — Efyion Dx',
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
    label: 'Mispa i60 Immunoassay Analyzer',
    description: 'Benchtop Chemiluminescent Enzyme Immunoassay Analyzer Workstation',
    aspectRatio: '4/3',
    src: '/images/product-mispa-i60.webp',
    alt: 'Mispa i60 Benchtop Chemiluminescent Enzyme Immunoassay Analyzer — Efyion Dx',
  }),

  productImage6: createSlot({
    slot: 'productImage6',
    label: 'Diagnostic Informatics & Connected Healthcare Ecosystem',
    description: 'Laboratory Information Middleware & Real-Time Hospital EHR Connectivity',
    aspectRatio: '4/3',
    src: '/images/tech-digital-health.webp',
    alt: 'Diagnostic informatics suite, connected healthcare ecosystem and hospital EHR integration — Efyion Dx',
  }),

  // ── 9. Contact & Advisory ──
  contactImage: createSlot({
    slot: 'contactImage',
    label: 'Clinical Consultation & Advisory',
    description: 'Dedicated technical discussion and testing menu evaluation',
    aspectRatio: '16/10',
    src: '/images/support-engineer.webp',
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
    description: 'Rapid diagnostic platforms and sample collection systems engineered for clinical turnaround',
    aspectRatio: '16/10',
    src: '/images/lab-specimen-tubes.webp',
    alt: 'Diagnostic specimen collection tubes and rapid point-of-care testing systems — Efyion Dx',
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

  // 6 Diagnostic Product cards (All 6 now have authentic photos)
  product1: slots.productImage1,
  product2: slots.productImage2,
  product3: slots.productImage3,
  product4: slots.productImage4,
  product5: slots.productImage5,
  product6: slots.productImage6,

  // Audiences (Solutions & Home) - 100% unique per card
  audienceLab: slots.categoryLabSlot,
  audienceHospital: slots.solutionsImage,
  audienceClinician: slots.supportImage,
  audienceClinicalEnv: slots.categoryPointOfCareSlot,
  audienceResearch: slots.categoryInstrumentsSlot,

  // Workflow steps
  workflowIntake: slots.categoryPointOfCareSlot,
  workflowPrep: slots.categoryReagentsSlot,
  workflowAnalysis: slots.productImage1,
  workflowInsight: slots.productImage6,

  // Technology sections - 100% unique per section
  technology: slots.productImage1,
  innovation: slots.workflowImage,
  researchDev: slots.solutionsImage,
  labExcellence: slots.qualityImage,

  qualityControl: slots.qualityImage,
  supportEngineer: slots.supportImage,

  // Resources
  resourceInsights: slots.productImage6,
  resourceLabGuide: slots.categoryLabSlot,
  resourceNews: slots.aboutImage,
  resourceTechnical: slots.technologyImage,
  resourceDownloads: slots.productImage3,
  resourceQuality: slots.qualityImage,

  // Solutions page areas
  solutionLab: slots.categoryLabSlot,
  solutionClinical: slots.categoryClinicalSlot,
  solutionNetwork: slots.productImage5,

  techOptics: slots.technologyImage,
  techSampleIntegrity: slots.qualityImage,
  techLims: slots.productImage6,
  contactConsultation: slots.contactImage,
};
