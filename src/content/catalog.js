/**
 * PRODUCT CATALOGUE — EFYION DX
 * ------------------------------------------------------------------
 * Diagnostic portfolio categorized by clinical specialty and workflow.
 * Full images, applications, detailed assay menus, specifications and feature breakdowns.
 * ALL IMAGES ARE 100% UNIQUE ACROSS THE ENTIRE APPLICATION.
 */
import {
  Activity,
  FlaskConical,
  Microscope,
  TestTubes,
  HeartPulse,
  MonitorSmartphone,
} from 'lucide-react';
import { images } from './images.js';

export const categories = [
  {
    slug: 'clinical-diagnostics',
    name: 'Clinical Diagnostics',
    icon: Activity,
    image: images.categoryClinical,
    summary: 'High-sensitivity testing solutions that support reliable clinical decision making across specialties.',
  },
  {
    slug: 'laboratory-solutions',
    name: 'Laboratory Solutions',
    icon: FlaskConical,
    image: images.categoryLab,
    summary: 'End-to-end systems and workstations helping laboratories run consistent, streamlined sample workflows.',
  },
  {
    slug: 'diagnostic-instruments',
    name: 'Diagnostic Instruments',
    icon: Microscope,
    image: images.categoryInstruments,
    summary: 'Precision analysers, automated instruments and optical equipment for hospital and laboratory settings.',
  },
  {
    slug: 'reagents-consumables',
    name: 'Reagents & Consumables',
    icon: TestTubes,
    image: images.categoryReagents,
    summary: 'Standardized testing reagents, control calibrators and certified consumables for continuous lab operation.',
  },
  {
    slug: 'point-of-care',
    name: 'Point-of-Care Solutions',
    icon: HeartPulse,
    image: images.categoryPointOfCare,
    summary: 'Rapid diagnostic platforms engineered for timely clinical insights directly at the point of care.',
  },
  {
    slug: 'healthcare-technology',
    name: 'Healthcare Technology',
    icon: MonitorSmartphone,
    image: images.categoryTech,
    summary: 'Secure digital tools and laboratory informatics connecting diagnostic data to care teams in real time.',
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);

export const PENDING = 'To be confirmed upon configuration';

export const products = [
  {
    slug: 'diagnostic-solution-01',
    name: 'Efyion ChemTrack 400 Automated Chemistry Analyzer',
    category: 'laboratory-solutions',
    type: 'Laboratory Solution',
    featured: true,
    image: images.product1,
    summary: 'High-throughput automated workstation designed for routine and specialized clinical chemistry profiles.',
    overview:
      'The Efyion ChemTrack 400 provides mid-to-high volume clinical laboratories with dependable walk-away automation, rapid turnaround times, and consistent photometric precision. Built with continuous barcoded rack loading, onboard refrigerated reagent carousels, and automated clot detection, the system optimizes technician time and preserves analytical integrity across high-demand shifts.',
    applications: [
      'Hospital central laboratories',
      'Clinical pathology centers',
      'Routine and emergency STAT screening',
      'High-throughput reference testing',
    ],
    assayMenu: [
      'Hepatic / Liver Function (ALT, AST, ALP, Total & Direct Bilirubin, Albumin, Total Protein)',
      'Renal / Kidney Profile (Creatinine, BUN/Urea, Uric Acid, Microalbumin)',
      'Lipid Panel (Total Cholesterol, HDL, LDL, Triglycerides, Apolipoproteins A1/B)',
      'Electrolytes & Metabolic (Na+, K+, Cl-, CO2, Calcium, Inorganic Phosphorus, Magnesium)',
      'Cardiac & Inflammatory (CK, CK-MB, LDH, High-Sensitivity CRP)',
      'Diabetes Care (Glucose Hexokinase, Glycated Albumin)',
    ],
    features: [
      {
        title: 'Walk-away automation',
        text: 'Continuous rack loading and automated capacitive liquid-level sensing reduce operator hands-on time during peak shift hours.',
      },
      {
        title: 'On-board refrigerated storage',
        text: 'Maintains 2°C–8°C reagent compartment climate to preserve calibration curves and reagent stability up to 30 days onboard.',
      },
      {
        title: 'Bidirectional LIS connectivity',
        text: 'Native ASTM 1394 and HL7 v2.x protocols seamlessly transfer patient worklists and verified results to laboratory informatics systems.',
      },
      {
        title: 'Micro-volume aspiration',
        text: 'Optimized nanoliter sample probe technology reduces required specimen volume to 2.0 µL, ideal for pediatric and critical care samples.',
      },
    ],
    specifications: [
      { label: 'Analytical throughput', value: 'Up to 400 photometric tests/hour (expandable with ISE module)' },
      { label: 'Sample types', value: 'Serum, Plasma, Urine, Cerebrospinal Fluid (CSF)' },
      { label: 'Sample capacity', value: '80 sample positions with STAT priority continuous loading' },
      { label: 'Reagent capacity', value: '64 refrigerated reagent positions with barcode lot reading' },
      { label: 'Reaction volume', value: 'Minimum reaction volume 100 µL in optical cuvettes' },
      { label: 'Photometric range', value: '0 to 3.5 Absorbance Units; 340 nm to 800 nm wavelengths' },
      { label: 'Data interface', value: 'Bidirectional HL7, ASTM 1394, TCP/IP Ethernet, USB' },
      { label: 'Dimensions & Weight', value: '1100 mm (W) × 780 mm (D) × 1150 mm (H); 185 kg' },
    ],
    downloads: [
      {
        label: 'Efyion ChemTrack 400 Product Brochure (PDF)',
        size: '2.4 MB',
        href: '/contact?subject=Brochure+Request:+ChemTrack+400',
      },
      {
        label: 'Complete Assay Parameter & Linearity Guide (PDF)',
        size: '1.8 MB',
        href: '/contact?subject=Technical+Parameters:+ChemTrack+400',
      },
    ],
  },
  {
    slug: 'diagnostic-solution-02',
    name: 'Multi-Parameter Diagnostic Optical & Digital System',
    category: 'diagnostic-instruments',
    type: 'Diagnostic Technology',
    featured: true,
    image: images.product2,
    summary: 'Precision optical instrumentation with high-resolution digital morphology imaging and automated scanning.',
    overview:
      'Engineered for laboratories demanding optical clarity and reproducible imaging, this diagnostic optical platform combines advanced plan-achromat optics with automated digital capture. It supports comprehensive cellular review, hematology morphology, cytology screening, and multi-spectral fluorescence analysis with tele-pathology streaming.',
    applications: [
      'Cellular pathology analysis',
      'Hematology & cytology morphology review',
      'Biomedical research laboratories',
      'Specialized diagnostic tele-pathology',
    ],
    assayMenu: [
      'Peripheral Blood Smear Morphology Review',
      'Bone Marrow Aspirate Review & Differential',
      'Cervical & Body Fluid Cytopathology Screening',
      'Fluorescence In Situ Hybridization (FISH) Imaging',
      'Automated Cell Classification & Archive',
    ],
    features: [
      {
        title: 'Plan-apochromatic optics',
        text: 'Multi-coated optical elements provide superior contrast, flat-field edge resolution, and distortion-free specimen visualization.',
      },
      {
        title: 'High-resolution digital sensor',
        text: 'Integrated 20 MP scientific CMOS camera enables rapid digital archiving, image analysis, and secure tele-consultation.',
      },
      {
        title: 'Motorized precision stage',
        text: 'Sub-micron XY motorized stage enables automated multi-field scanning, stitching, and coordinate recall.',
      },
      {
        title: 'Multi-mode LED illumination',
        text: 'Uniform Köhler illumination with instant switching between brightfield, darkfield, phase contrast, and epi-fluorescence.',
      },
    ],
    specifications: [
      { label: 'Magnification range', value: '40x, 100x, 200x, 400x, 1000x oil immersion' },
      { label: 'Digital camera sensor', value: '20 MP High-Sensitivity Back-Illuminated sCMOS' },
      { label: 'Illumination system', value: 'Eco-friendly daylight LED with constant color temperature' },
      { label: 'Stage travel range', value: '76 mm × 52 mm with 0.1 µm positional resolution' },
      { label: 'Image output formats', value: 'DICOM, TIFF, JPEG2000 with embedded metadata' },
      { label: 'Interface connectivity', value: 'USB 3.0 SuperSpeed, Gigabit Ethernet, HDMI live output' },
    ],
    downloads: [
      {
        label: 'Diagnostic Optical Platform Specification Sheet (PDF)',
        size: '1.9 MB',
        href: '/contact?subject=Specifications:+Diagnostic+Optical+System',
      },
      {
        label: 'Digital Morphology Software Workflow Guide (PDF)',
        size: '2.1 MB',
        href: '/contact?subject=Workflow+Guide:+Digital+Optical+System',
      },
    ],
  },
  {
    slug: 'diagnostic-solution-03',
    name: 'Standardized Diagnostic Reagents & Calibrator Systems',
    category: 'reagents-consumables',
    type: 'Reagent System',
    featured: true,
    image: images.product3,
    summary: 'Liquid-stable diagnostic reagents with documented batch-to-batch consistency and traceable calibrators.',
    overview:
      'Formulated to meet stringent analytical benchmarks, Efyion Dx reagent systems provide consistent linearity, high specificity, and minimal interferences across routine and specialized diagnostic panels. Ready-to-use liquid formats eliminate reconstitution errors, reduce technician preparation time, and maintain extended onboard stability.',
    applications: [
      'Routine clinical chemistry panels',
      'Renal and metabolic profiling',
      'Hepatic function assays',
      'Lipid and cardiac biomarker panels',
    ],
    assayMenu: [
      'Ready-to-Use Liquid Chemistry Assays (45+ parameters)',
      'Multi-Analyte Calibrator Sets (Level 1, 2 & 3)',
      'Assayed Quality Control Sera (Normal & Pathological)',
      'Washing Solutions, Diluents & System Cleaners',
    ],
    features: [
      {
        title: 'Liquid-stable convenience',
        text: 'Ready-to-use formulations avoid manual pipetting or reconstitution with deionized water, preventing clerical error.',
      },
      {
        title: 'Extended onboard stability',
        text: 'Specialized chemical stabilization preserves calibration curves and active enzyme integrity up to 30 days inside chilled compartments.',
      },
      {
        title: 'Traceable manufacturing',
        text: 'Every production lot is standardized against WHO and NIST international reference materials with detailed Certificates of Analysis.',
      },
      {
        title: 'Universal 2D barcoding',
        text: 'Prefilled reagent cartridges feature machine-readable barcodes for automated lot number, expiry, and test count tracking.',
      },
    ],
    specifications: [
      { label: 'Formulation', value: 'Liquid-stable, ready-to-load prefilled containers' },
      { label: 'Storage temperature', value: '2°C to 8°C controlled cold-chain distribution' },
      { label: 'Shelf life', value: 'Up to 18 to 24 months from manufacturing date' },
      { label: 'Analyzer compatibility', value: 'Dedicated barcoded bottles + open-channel universal vials' },
      { label: 'Quality documentation', value: 'Lot-specific Certificate of Analysis (CoA) and SDS included' },
    ],
    downloads: [
      {
        label: 'Clinical Chemistry Reagents & Calibrators Catalog (PDF)',
        size: '3.1 MB',
        href: '/contact?subject=Catalog+Request:+Diagnostic+Reagents',
      },
      {
        label: 'Reagent Stability & Storage Protocol Sheet (PDF)',
        size: '1.2 MB',
        href: '/contact?subject=Protocol+Sheet:+Reagent+Storage',
      },
    ],
  },
  {
    slug: 'diagnostic-solution-04',
    name: 'Rapid Point-of-Care Diagnostic Platform',
    category: 'point-of-care',
    type: 'Point-of-Care Solution',
    featured: true,
    image: images.product4,
    summary: 'Portable, rapid-turnaround diagnostic system for urgent clinical triage, bedside care, and remote testing.',
    overview:
      'When clinical treatment decisions require immediate answers, the Efyion RapidPoint platform delivers laboratory-grade quantitative results in under 15 minutes. Engineered with intuitive touch navigation, automated internal calibration, and micro-sample cartridge architecture for emergency rooms, intensive care units, and outpatient clinics.',
    applications: [
      'Emergency & urgent care triage',
      'Intensive care unit bedside monitoring',
      'Outpatient surgical and cardiology clinics',
      'Remote and decentralized health facilities',
    ],
    assayMenu: [
      'Cardiac Panel (High-Sensitivity Troponin I, CK-MB, Myoglobin)',
      'Thromboembolism & Vascular (D-Dimer quantitative)',
      'Infection & Sepsis (Procalcitonin, CRP, Full-Range hsCRP)',
      'Blood Gas & Critical Care (pH, pCO2, pO2, Lactate, Electrolytes)',
      'Infectious Respiratory Screening (Influenza A/B, RSV, SARS-CoV-2)',
    ],
    features: [
      {
        title: 'Rapid turnaround in minutes',
        text: 'Delivers definitive quantitative results in 8 to 15 minutes directly from minimal fingerstick or venous whole blood.',
      },
      {
        title: 'Factory-calibrated test cartridges',
        text: 'Individual test cartridges carry factory lot calibration curves on microchip RFID tags to ensure zero calibration overhead.',
      },
      {
        title: 'Wireless clinical EHR syncing',
        text: 'Direct Wi-Fi / Bluetooth communication uploads patient results directly to hospital electronic health records and central LIS.',
      },
      {
        title: 'Operator lockout & audit compliance',
        text: 'Integrated barcode scanner captures operator badge and patient wristband IDs, preventing uncertified test execution.',
      },
    ],
    specifications: [
      { label: 'Specimen requirement', value: '10 µL to 50 µL whole blood, plasma, or serum' },
      { label: 'Testing time', value: 'Quantitative results displayed in 8 to 15 minutes' },
      { label: 'Display & Interface', value: '7-inch color capacitive touchscreen with guided UI' },
      { label: 'Connectivity', value: 'Wi-Fi 802.11ac, Bluetooth 5.0, USB, POCT1-A / HL7 export' },
      { label: 'Power architecture', value: 'Universal AC adapter + rechargeable Li-ion battery (8 hrs operation)' },
      { label: 'Weight & Dimensions', value: '240 mm × 190 mm × 110 mm; 1.8 kg handheld portability' },
    ],
    downloads: [
      {
        label: 'Rapid Point-of-Care System Technical Brochure (PDF)',
        size: '1.7 MB',
        href: '/contact?subject=Brochure+Request:+RapidPoint+POCT',
      },
      {
        label: 'Bedside Clinical Validation & Correlation Study (PDF)',
        size: '2.5 MB',
        href: '/contact?subject=Validation+Study:+RapidPoint+POCT',
      },
    ],
  },
  {
    slug: 'diagnostic-solution-05',
    name: 'High-Sensitivity Immunoassay ECL Analyzer',
    category: 'clinical-diagnostics',
    type: 'Clinical Diagnostic Solution',
    featured: false,
    image: images.product5,
    summary: 'Advanced chemiluminescent immunoassay (ECL) platform delivering sensitive biomarker detection for hospitals.',
    overview:
      'Engineered for clinical hospital laboratories requiring ultra-sensitive analyte detection, this platform utilizes electrochemiluminescence (ECL) magnetic microbead technology. It supports comprehensive clinical diagnostic panels including cardiac troponins, thyroid cascades, fertility hormones, bone metabolism, and tumor markers with wide linear measuring ranges.',
    applications: [
      'Clinical hospital core laboratories',
      'Endocrine and hormone testing centers',
      'Cardiology acute assessment suites',
      'Oncology follow-up and monitoring clinics',
    ],
    assayMenu: [
      'Thyroid Function (TSH, Free T3, Free T4, Anti-TPO, Anti-TG)',
      'Cardiac Biomarkers (High-Sensitivity Troponin T, NT-proBNP, Myoglobin)',
      'Fertility & Hormones (Beta-hCG, LH, FSH, Prolactin, Progesterone, Estradiol)',
      'Tumor Markers (PSA, Free PSA, CEA, CA-125, CA 19-9, CA 15-3, AFP)',
      'Bone & Vitamin Metabolism (25-OH Vitamin D, Intact PTH, Ferritin)',
      'Inflammatory & Autoimmune (IL-6, hsCRP, Procalcitonin)',
    ],
    features: [
      {
        title: 'Electrochemiluminescence detection',
        text: 'Utilizes ruthenium-complex ECL chemistry with magnetic bead capture for picogram-level analytical sensitivity.',
      },
      {
        title: 'Extensive measuring range',
        text: 'Enables precise quantification from ultra-low trace levels to high concentrations without routine pre-dilution.',
      },
      {
        title: 'Clot, bubble & liquid level detection',
        text: 'Triple-sensor intelligent pipetting probe flags fibrin clots and volume shortages to prevent erroneous report dispatch.',
      },
      {
        title: 'Continuous specimen loading',
        text: 'Dedicated STAT priority lane processes critical emergency samples in under 18 minutes without pausing routine batch runs.',
      },
    ],
    specifications: [
      { label: 'Analytical throughput', value: 'Up to 180 immunoassay tests per hour' },
      { label: 'First result availability', value: '18 minutes for STAT cardiac / emergency assays' },
      { label: 'Reagent storage', value: '30 refrigerated reagent packs (4°C to 10°C) with RFID tracking' },
      { label: 'Sample positions', value: '75 onboard sample tubes with continuous loading' },
      { label: 'Analytical sensitivity', value: 'Down to 0.005 µIU/mL (TSH) and 1.5 pg/mL (Troponin)' },
      { label: 'Data connectivity', value: 'Bidirectional HL7, ASTM, LIS query protocol' },
    ],
    downloads: [
      {
        label: 'ECL Immunoassay System Technical Specifications (PDF)',
        size: '2.8 MB',
        href: '/contact?subject=Specifications:+ECL+Immunoassay',
      },
      {
        label: 'Comprehensive Biomarker Test Menu & Precision Data (PDF)',
        size: '2.2 MB',
        href: '/contact?subject=Biomarker+Menu:+ECL+Immunoassay',
      },
    ],
  },
  {
    slug: 'diagnostic-solution-06',
    name: 'Diagnostic Informatics & LIS Middleware Suite',
    category: 'healthcare-technology',
    type: 'Digital Solution',
    featured: false,
    image: images.product6,
    summary: 'Intelligent middleware software connecting multi-vendor analyzers, automated delta checks, and hospital EHRs.',
    overview:
      'Modern diagnostic care requires frictionless communication between instruments and clinical care teams. The Diagnostic Informatics Suite provides a centralized middleware layer that aggregates data across chemistry, hematology, and immunoassay platforms, applies automated rule-based validation, and dispatches verified reports directly into hospital EHRs.',
    applications: [
      'Multi-instrument hospital central laboratories',
      'Regional diagnostic network core facilities',
      'Laboratory quality management & audit readiness',
      'Real-time analytical turnaround monitoring',
    ],
    assayMenu: [
      'Bi-Directional LIS/HIS Driver Engine (HL7 v2.x, v3.0, FHIR, ASTM 1394)',
      'Automated Rule-Based Result Verification & Delta Checking',
      'Centralized Real-Time Levey-Jennings Quality Control Tracking',
      'Instrument Utilization & Turnaround Time (TAT) Analytics Dashboard',
      'Specimen Traceability & Chain-of-Custody Electronic Audit Trail',
    ],
    features: [
      {
        title: 'Intelligent delta-checking',
        text: 'Automatically compares new results against patient historical records to flag acute physiological changes or specimen mislabels.',
      },
      {
        title: 'Centralized QC dashboard',
        text: 'Live Levey-Jennings charts and multi-rule Westgard evaluations across all connected analyzers in the hospital network.',
      },
      {
        title: 'Standards-compliant interoperability',
        text: 'Turnkey certified drivers for Epic, Cerner, Meditech, SoftLab, and custom SQL/REST hospital informatics frameworks.',
      },
      {
        title: 'Immutable audit logging',
        text: 'Complete timestamped records of sample accession, operator sign-offs, re-runs, and report deliveries meet ISO 15189 compliance.',
      },
    ],
    specifications: [
      { label: 'Deployment architecture', value: 'On-premise virtual machine or secure ISO 27001 private cloud' },
      { label: 'Supported interfaces', value: 'HL7 v2.x / v3, HL7 FHIR, ASTM 1394/1381, REST API, WebSocket' },
      { label: 'Concurrent instruments', value: 'Scalable from 2 to 64+ diagnostic analyzers per server node' },
      { label: 'Security & Encryption', value: 'TLS 1.3 in-transit, AES-256 at-rest, role-based RBAC access control' },
      { label: 'Operating system', value: 'Linux (Ubuntu/RHEL) / Windows Server 2022+' },
    ],
    downloads: [
      {
        label: 'Informatics & Middleware Architecture Whitepaper (PDF)',
        size: '1.6 MB',
        href: '/contact?subject=Whitepaper:+Informatics+Suite',
      },
      {
        label: 'HL7 & ASTM Interface Compatibility Specifications (PDF)',
        size: '1.4 MB',
        href: '/contact?subject=Interface+Specs:+Informatics+Suite',
      },
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
