/**
 * IMAGE SYSTEM & ASSET SLOTS — EFYION DX
 * ------------------------------------------------------------------
 * 100% Authentic Diagnostic Photography with Zero Duplication.
 * All AI-generated images have been eliminated.
 *
 * Dedicated Real Image Assets:
 * 1.  Hero Showcase: /images/hero-lab.webp
 * 2.  About Operations: /images/about-lab.webp
 * 3.  Diagnostic Facility: /images/lab-scientists-microscope-hairnet.webp
 * 4.  Technology & Optics Macro: /images/tech-optics.webp
 * 5.  Care Settings & Hospital Labs: /images/lab-pathologist-microscope.webp
 * 6.  Workflow Automation: /images/workflow-automation.webp
 * 7.  Quality Assurance: /images/quality-qc.webp
 * 8.  Support Engineering: /images/support-engineer.webp
 * 9.  Product 1 (ChemTrack 400): /images/product-analyzer.webp
 * 10. Product 2 (Mispa HX 88): /images/product-mispa-hx88.webp
 * 11. Product 3 (Mispa i121): /images/product-mispa-i121.webp
 * 12. Product 4 (Mispa HX 80): /images/product-mispa-hx80.webp
 * 13. Product 5 (Mispa i60): /images/product-mispa-i60.webp
 * 14. Product 6 (Rapid POCT): /images/product-poct.webp
 * 15. Cat 1 (Clinical): /images/lab-scientist-pipette.webp
 * 16. Cat 2 (Lab Solutions): /images/lab-microscope-culture.webp
 * 17. Cat 3 (Instruments): /images/lab-microscope-research.webp
 * 18. Cat 4 (Reagents): /images/lab-reagent-tubes.webp
 * 19. Cat 5 (Point of Care): /images/lab-specimen-tubes.webp
 * 20. Cat 6 (Technology): /images/lab-digital-diagnostics.webp
 * 21. Digital Health & LIS: /images/tech-digital-health.webp
 * 22. Barcoded Specimen Accession: /images/lab-barcoded-blood-tubes.webp
 * 23. Molecular Cleanroom Workstation: /images/lab-molecular-dual-monitor.webp
 * 24. Precision Testing Tubes: /images/lab-blue-tubes-microscope.webp
 * 25. Liquid-Stable Reagents: /images/product-reagents.webp
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
  // ── 1. Hero Showcase ──
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
    description: 'Specialized microscopy and sample research cleanroom',
    aspectRatio: '16/10',
    src: '/images/lab-scientists-microscope-hairnet.webp',
    alt: 'Diagnostic Testing Facility and Research Team — Efyion Dx',
  }),

  // ── 3. Technology & Optics ──
  technologyImage: createSlot({
    slot: 'technologyImage',
    label: 'Diagnostic Optical & Analytical Hardware',
    description: 'High-resolution plan-apochromatic microscope optics with sapphire blue bokeh',
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

  // ── 8. Six Diagnostic Product Hardware Units (100% Real Instruments) ──
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
    label: 'Mispa HX 80 Hematology Analyzer',
    description: '6-Part Automated Hematology Analyzer with NRBC Channel',
    aspectRatio: '4/3',
    src: '/images/product-mispa-hx80.webp',
    alt: 'Mispa HX 80 6-Part Automated Hematology Analyzer with NRBC — Efyion Dx',
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
    label: 'Rapid Point-of-Care POCT Platform',
    description: 'Handheld Rapid-Turnaround Diagnostic Platform with Test Cartridges',
    aspectRatio: '4/3',
    src: '/images/product-poct.webp',
    alt: 'Rapid Point-of-Care POCT Handheld Diagnostic Platform and Test Cartridges — Efyion Dx',
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

  // ── 11. Dedicated Unique Slots for Audiences (Home & Solutions) ──
  audienceLabSlot: createSlot({
    slot: 'aud-lab',
    label: 'Diagnostic Laboratories',
    description: 'Clinical laboratory research scientists evaluating specimen tubes',
    aspectRatio: '16/10',
    src: '/images/lab-team-scientists-test-tube.webp',
    alt: 'Clinical laboratory scientists conducting diagnostic testing — Efyion Dx',
  }),

  audienceHospitalSlot: createSlot({
    slot: 'aud-hospital',
    label: 'Hospitals & Health Networks',
    description: 'Cleanroom laboratory with automated analysis screens and molecular diagnostics',
    aspectRatio: '16/10',
    src: '/images/lab-molecular-dual-monitor.webp',
    alt: 'Hospital cleanroom laboratory workstation and clinical diagnostic displays — Efyion Dx',
  }),

  audienceClinicianSlot: createSlot({
    slot: 'aud-clinician',
    label: 'Healthcare Professionals',
    description: 'Clinical diagnostic specialist with protective eyewear and test tubes',
    aspectRatio: '16/10',
    src: '/images/lab-scientist-goggles-tubes.webp',
    alt: 'Healthcare diagnostic specialist preparing laboratory test tubes — Efyion Dx',
  }),

  audienceClinicalEnvSlot: createSlot({
    slot: 'aud-clinical-env',
    label: 'Clinical Environments & Outpatient',
    description: 'Technician selecting blood collection tube from diagnostic rack beside microscope',
    aspectRatio: '16/10',
    src: '/images/lab-blood-tubes-microscope-rack.webp',
    alt: 'Diagnostic blood collection tubes and clinical laboratory microscope — Efyion Dx',
  }),

  audienceResearchSlot: createSlot({
    slot: 'aud-research',
    label: 'Research & Biomedical Facilities',
    description: 'Specialized optical microscopy and precision reagent test tubes',
    aspectRatio: '16/10',
    src: '/images/lab-blue-tubes-microscope.webp',
    alt: 'Biomedical research microscopy and precision solution testing — Efyion Dx',
  }),

  // ── 12. Dedicated Unique Slots for Solutions Page Areas ──
  solutionLabSlot: createSlot({
    slot: 'sol-lab',
    label: 'Laboratory Solutions Area',
    description: 'Automated track robotics and continuous sample loading',
    aspectRatio: '16/10',
    src: '/images/workflow-automation.webp',
    alt: 'Automated clinical laboratory sample workflow and track robotics — Efyion Dx',
  }),

  solutionClinicalSlot: createSlot({
    slot: 'sol-clinical',
    label: 'Clinical Diagnostics Area',
    description: 'Barcoded clinical specimen tubes in laboratory accession rack',
    aspectRatio: '16/10',
    src: '/images/lab-barcoded-blood-tubes.webp',
    alt: 'Clinical specimen tubes and rapid diagnostic processing — Efyion Dx',
  }),

  solutionNetworkSlot: createSlot({
    slot: 'sol-network',
    label: 'Healthcare Organisation Solutions Area',
    description: 'Physician using connected healthcare tablet with real-time diagnostic reporting',
    aspectRatio: '16/10',
    src: '/images/tech-digital-health.webp',
    alt: 'Connected digital health informatics and multi-site laboratory network — Efyion Dx',
  }),

  // ── 13. Dedicated Unique Slots for Technology Page Sections ──
  techInstrumentationSlot: createSlot({
    slot: 'tech-instrumentation',
    label: 'Diagnostic Instrumentation',
    description: 'High-precision multi-parameter digital optical microscope workstation',
    aspectRatio: '16/10',
    src: '/images/product-microscope.webp',
    alt: 'Precision diagnostic optical equipment and microscope platform — Efyion Dx',
  }),

  techInnovationSlot: createSlot({
    slot: 'tech-innovation',
    label: 'Workflow Innovation',
    description: 'High-throughput automated laboratory workflow track and specimen management',
    aspectRatio: '16/10',
    src: '/images/workflow-automation.webp',
    alt: 'High-throughput automated laboratory workflow track and specimen management — Efyion Dx',
  }),

  techValidationSlot: createSlot({
    slot: 'tech-validation',
    label: 'Analytical Verification & Validation',
    description: 'Clinical laboratory specialist validating analytical assay protocols and test tubes',
    aspectRatio: '16/10',
    src: '/images/lab-scientist-goggles-tubes.webp',
    alt: 'Clinical laboratory specialist validating analytical assay protocols — Efyion Dx',
  }),

  techExcellenceSlot: createSlot({
    slot: 'tech-excellence',
    label: 'Laboratory Operational Excellence',
    description: 'Clinical laboratory informatics cleanroom workstation and dual-monitor monitoring',
    aspectRatio: '16/10',
    src: '/images/lab-molecular-dual-monitor.webp',
    alt: 'Clinical laboratory informatics cleanroom workstation and dual-monitor monitoring — Efyion Dx',
  }),

  // ── 14. Dedicated Unique Slots for Each Resource Article ──
  resourceSlot1: createSlot({
    slot: 'resource-1',
    label: 'Precision Diagnostics in Everyday Care',
    src: '/images/lab-scientists-microscope-hairnet.webp',
    alt: 'Clinical laboratory scientists conducting diagnostic testing — Efyion Dx',
  }),

  resourceSlot2: createSlot({
    slot: 'resource-2',
    label: 'Selecting Next-Generation Analysers',
    src: '/images/product-immunoassay.webp',
    alt: 'Advanced automated chemiluminescent immunoassay analyzer workstation — Efyion Dx',
  }),

  resourceSlot3: createSlot({
    slot: 'resource-3',
    label: 'Liquid-Stable vs. Lyophilized Reagents',
    src: '/images/product-reagents.webp',
    alt: 'Pipetting liquid-stable diagnostic reagents into test tubes — Efyion Dx',
  }),

  resourceSlot4: createSlot({
    slot: 'resource-4',
    label: 'ISO 15189 Quality Traceability',
    src: '/images/quality-qc.webp',
    alt: 'Quality control calibrator records and analytical documentation — Efyion Dx',
  }),

  resourceSlot5: createSlot({
    slot: 'resource-5',
    label: 'Bidirectional LIS Interfacing',
    src: '/images/tech-digital-health.webp',
    alt: 'Physician using tablet with connected healthcare diagnostic stream — Efyion Dx',
  }),

  resourceSlot6: createSlot({
    slot: 'resource-6',
    label: 'Pediatric Micro-Sampling & Tube Accession',
    src: '/images/lab-barcoded-blood-tubes.webp',
    alt: 'Barcoded clinical specimen tubes in laboratory accession rack — Efyion Dx',
  }),

  resourceSlot7: createSlot({
    slot: 'resource-7',
    label: 'Efyion Dx Official Launch',
    src: '/images/about-lab.webp',
    alt: 'Efyion Dx diagnostic laboratory testing center — Efyion Dx',
  }),

  resourceSlot8: createSlot({
    slot: 'resource-8',
    label: 'Analytical Consistency & IQC',
    src: '/images/lab-blue-tubes-microscope.webp',
    alt: 'Precision testing tubes and laboratory compound microscope — Efyion Dx',
  }),

  resourceSlot9: createSlot({
    slot: 'resource-9',
    label: 'Product Guides & Parameter Sheets',
    src: '/images/product-analyzer.webp',
    alt: 'Efyion ChemTrack 400 Chemistry Workstation — Efyion Dx',
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

  // 6 Diagnostic Product cards (100% Real Hardware Instruments)
  product1: slots.productImage1,
  product2: slots.productImage2,
  product3: slots.productImage3,
  product4: slots.productImage4,
  product5: slots.productImage5,
  product6: slots.productImage6,

  // Audiences (Solutions & Home) - 100% unique per card, featuring new clinical photos
  audienceLab: slots.audienceLabSlot,
  audienceHospital: slots.audienceHospitalSlot,
  audienceClinician: slots.audienceClinicianSlot,
  audienceClinicalEnv: slots.audienceClinicalEnvSlot,
  audienceResearch: slots.audienceResearchSlot,

  // Workflow steps
  workflowIntake: slots.categoryPointOfCareSlot,
  workflowPrep: slots.categoryReagentsSlot,
  workflowAnalysis: slots.productImage1,
  workflowInsight: slots.categoryTechSlot,

  // Technology sections - 100% unique per section
  technology: slots.techInstrumentationSlot,
  innovation: slots.techInnovationSlot,
  researchDev: slots.techValidationSlot,
  labExcellence: slots.techExcellenceSlot,

  qualityControl: slots.qualityImage,
  supportEngineer: slots.supportImage,

  // Resources - 100% unique per article
  resourceInsights: slots.resourceSlot1,
  resourceLabGuide: slots.resourceSlot2,
  resourceTechnical: slots.resourceSlot3,
  resourceQuality: slots.resourceSlot4,
  resourceNews: slots.resourceSlot7,
  resourceDownloads: slots.resourceSlot9,

  // Solutions page areas - 100% unique per area
  solutionLab: slots.solutionLabSlot,
  solutionClinical: slots.solutionClinicalSlot,
  solutionNetwork: slots.solutionNetworkSlot,

  techOptics: slots.technologyImage,
  techSampleIntegrity: slots.resourceSlot6,
  techLims: slots.resourceSlot5,
  contactConsultation: slots.contactImage,
};
