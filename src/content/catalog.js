/**
 * PRODUCT CATALOGUE — EFYION DX
 * ------------------------------------------------------------------
 * Diagnostic portfolio categorized by clinical specialty and workflow.
 * Full images, applications, detailed assay menus, specifications and feature breakdowns.
 * ALL IMAGES ARE 100% UNIQUE AUTHENTIC HARDWARE & CLINICAL ASSETS.
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
    type: 'Clinical Chemistry Workstation',
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
    name: 'Mispa HX 88 6-Part Automated Hematology Analyzer',
    category: 'diagnostic-instruments',
    type: 'Hematology Solution',
    featured: true,
    image: images.product2,
    summary: '6-Part automated differential hematology analyzer featuring Reticulocyte (RET) and Immature Platelet Fraction (IPF).',
    overview:
      'The Mispa HX 88 is an advanced automated hematology analyzer engineered for hospital central laboratories and clinical pathology institutes. Utilizing semiconductor laser flow cytometry, fluorescence dye technology, and automated tube rack loading, it delivers comprehensive cellular differentials including critical reticulocyte (RET) and immature platelet fraction (IPF) parameters for early clinical intervention.',
    applications: [
      'Hospital central hematology laboratories',
      'Clinical pathology and oncology institutes',
      'Emergency department STAT CBC analysis',
      'Anemia and bone marrow response surveillance',
    ],
    assayMenu: [
      'Complete Blood Count (CBC) with 6-Part Differential (NEU, LYM, MON, EOS, BAS, ALY/LIC)',
      'Reticulocyte Parameters (RET%, RET#, IRF, LFR, MFR, HFR)',
      'Immature Platelet Fraction (IPF%, IPF#)',
      'Nucleated Red Blood Cells (NRBC%, NRBC#)',
      'Body Fluid Cellular Analysis (CSF, Pleural, Synovial, Peritoneal)',
    ],
    features: [
      {
        title: 'Semiconductor laser flow cytometry',
        text: 'Multi-angle laser scatter measures cell volume, internal complexity, and nucleic acid fluorescence with high analytical fidelity.',
      },
      {
        title: 'Dedicated RET + IPF channels',
        text: 'Provides essential reticulocyte counts and immature platelet fraction data to aid in early bone marrow recovery diagnostics.',
      },
      {
        title: 'Continuous rack auto-sampler',
        text: 'Walkaway continuous loading of barcoded sample racks with automated mixing, aspiration, and tube barcode reading.',
      },
      {
        title: 'Micro-aspiration volume',
        text: 'Requires only 20 µL whole blood mode or 10 µL prediluted mode, optimal for pediatric and geriatric patient management.',
      },
    ],
    specifications: [
      { label: 'Analytical throughput', value: 'Up to 90 whole blood samples per hour' },
      { label: 'Measured parameters', value: '34 reported parameters + 6 research parameters + 3D scattergrams' },
      { label: 'Sample loading', value: 'Continuous barcoded rack loading (50 tubes capacity) + STAT priority' },
      { label: 'Sample aspiration volume', value: '20 µL whole blood mode; 10 µL prediluted capillary mode' },
      { label: 'Quality control', value: 'Comprehensive X-R, L-J QC with automated multi-level monitoring' },
      { label: 'Data connectivity', value: 'Bidirectional HL7, ASTM 1394, TCP/IP Ethernet, USB' },
    ],
    downloads: [
      {
        label: 'Mispa HX 88 Hematology System Brochure (PDF)',
        size: '2.1 MB',
        href: '/contact?subject=Brochure+Request:+Mispa+HX+88',
      },
      {
        label: 'RET & IPF Clinical Validation Parameters (PDF)',
        size: '1.9 MB',
        href: '/contact?subject=Validation+Study:+Mispa+HX+88',
      },
    ],
  },
  {
    slug: 'diagnostic-solution-03',
    name: 'Mispa i121 Chemiluminescent Immunoassay Analyzer',
    category: 'clinical-diagnostics',
    type: 'Immunoassay Workstation',
    featured: true,
    image: images.product3,
    summary: 'High-throughput chemiluminescent enzyme immunoassay (CLEIA) platform delivering sensitive biomarker quantification.',
    overview:
      'The Mispa i121 delivers robust chemiluminescent enzyme immunoassay (CLEIA) performance for high-volume hospital laboratories. Combining magnetic micro-particle separation with alkaline phosphatase (ALP) enzymatic chemiluminescence, the system delivers ultra-sensitive quantification across critical endocrine, cardiac, infectious disease, and tumor marker profiles with minimal operator hands-on time.',
    applications: [
      'Hospital central core laboratories',
      'Endocrine and hormone testing centers',
      'Cardiology acute assessment suites',
      'Oncology monitoring and tumor marker panels',
    ],
    assayMenu: [
      'Cardiac Biomarkers (High-Sensitivity Troponin I, NT-proBNP, CK-MB, Myoglobin)',
      'Thyroid Cascade (TSH, Free T3, Free T4, Total T3, Total T4, Anti-TPO, Anti-TG)',
      'Fertility & Sex Hormones (Beta-hCG, LH, FSH, Prolactin, Progesterone, Estradiol, AMH)',
      'Tumor Biomarkers (PSA, Free PSA, CEA, CA-125, CA 19-9, CA 15-3, AFP, HE4)',
      'Inflammation & Sepsis (Procalcitonin PCT, Interleukin-6 IL-6, hsCRP)',
      'Bone & Anemia Metabolism (Ferritin, Folate, Vitamin B12, 25-OH Vitamin D, Intact PTH)',
    ],
    features: [
      {
        title: 'CLEIA magnetic separation',
        text: 'Employs magnetic microparticle enzyme chemiluminescence with ALP substrate for picogram-level analytical sensitivity.',
      },
      {
        title: 'Extended onboard reagent storage',
        text: '24 refrigerated reagent pack positions (2°C–8°C) with continuous RFID tracking and automatic lot calibration recall.',
      },
      {
        title: 'Emergency STAT handling',
        text: 'Dedicated priority lane processes acute cardiac or emergency samples in under 14 minutes without pausing ongoing routine batches.',
      },
      {
        title: 'Intelligent probe sensing',
        text: 'Triple-sensor probe architecture detects liquid levels, clots, and bubble obstructions to guarantee pipetting accuracy.',
      },
    ],
    specifications: [
      { label: 'Analytical throughput', value: 'Up to 120 immunoassay tests per hour' },
      { label: 'First result availability', value: '14 minutes for emergency STAT protocols' },
      { label: 'Reagent capacity', value: '24 refrigerated positions (2°C to 8°C) with RFID tracking' },
      { label: 'Sample positions', value: '60 onboard sample tubes with continuous loading' },
      { label: 'Analytical sensitivity', value: 'Down to 0.005 µIU/mL (TSH) and 1.5 pg/mL (Troponin I)' },
      { label: 'Data connectivity', value: 'Bidirectional HL7, ASTM 1394, LIS query protocol' },
    ],
    downloads: [
      {
        label: 'Mispa i121 Immunoassay System Specifications (PDF)',
        size: '2.8 MB',
        href: '/contact?subject=Specifications:+Mispa+i121',
      },
      {
        label: 'Comprehensive Biomarker Test Menu & Precision Guide (PDF)',
        size: '2.2 MB',
        href: '/contact?subject=Biomarker+Menu:+Mispa+i121',
      },
    ],
  },
  {
    slug: 'diagnostic-solution-04',
    name: 'Rapid Point-of-Care POCT Diagnostic Platform',
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
    name: 'Mispa i60 Benchtop Chemiluminescent Immunoassay Analyzer',
    category: 'laboratory-solutions',
    type: 'Benchtop Immunoassay Solution',
    featured: false,
    image: images.product5,
    summary: 'Compact benchtop chemiluminescent immunoassay analyzer with built-in touchscreen and walkaway automation.',
    overview:
      'Designed for mid-volume laboratories, specialized clinics, and acute satellite facilities, the Mispa i60 packs advanced chemiluminescent enzyme immunoassay technology into a compact benchtop profile. Equipped with an integrated color touchscreen, onboard 2°C–8°C reagent chilling, and automated STAT priority handling, it delivers hospital-grade precision without requiring large laboratory footprints.',
    applications: [
      'Clinical hospital satellite laboratories',
      'Specialized endocrine and reproductive clinics',
      'Cardiology acute assessment and emergency triage',
      'Medium-volume commercial diagnostic laboratories',
    ],
    assayMenu: [
      'Thyroid Panel (TSH, Free T3, Free T4, Total T3, Total T4)',
      'Cardiac Markers (High-Sensitivity Troponin I, NT-proBNP, Myoglobin)',
      'Fertility Hormones (Beta-hCG, LH, FSH, Progesterone, Prolactin)',
      'Infection & Inflammation (Procalcitonin, Interleukin-6, hsCRP)',
      'Metabolic Health (25-OH Vitamin D, Ferritin, Intact PTH)',
    ],
    features: [
      {
        title: 'Space-saving benchtop design',
        text: 'All-in-one footprint integrates analytical mechanics, reagent refrigeration, and touch control computer without external towers.',
      },
      {
        title: 'Single-cup cartridge flexibility',
        text: 'Unitized reagent cartridge formats allow running single urgent tests with zero unused reagent wastage.',
      },
      {
        title: 'On-board refrigerated carousel',
        text: 'Maintains constant 2°C–8°C storage for up to 12 active reagent positions with RFID parameter recognition.',
      },
      {
        title: 'Emergency STAT sample access',
        text: 'Dedicated STAT interruption lane enables prompt turnaround for time-sensitive clinical specimens.',
      },
    ],
    specifications: [
      { label: 'Analytical throughput', value: 'Up to 60 immunoassay tests per hour' },
      { label: 'First result availability', value: '15 minutes for STAT emergency assays' },
      { label: 'Reagent storage', value: '12 refrigerated onboard positions (2°C to 8°C)' },
      { label: 'Sample positions', value: '30 sample positions with STAT priority lane' },
      { label: 'Display & Control', value: 'Built-in color touchscreen with intuitive graphic user interface' },
      { label: 'Data connectivity', value: 'Bidirectional HL7, ASTM, USB, Ethernet' },
    ],
    downloads: [
      {
        label: 'Mispa i60 Benchtop System Brochure (PDF)',
        size: '2.0 MB',
        href: '/contact?subject=Brochure+Request:+Mispa+i60',
      },
      {
        label: 'Benchtop Immunoassay Assay Parameter Sheet (PDF)',
        size: '1.6 MB',
        href: '/contact?subject=Parameter+Sheet:+Mispa+i60',
      },
    ],
  },
  {
    slug: 'diagnostic-solution-06',
    name: 'Diagnostic Informatics & Connected Healthcare Ecosystem',
    category: 'healthcare-technology',
    type: 'Digital Health Solution',
    featured: false,
    image: images.product6,
    summary: 'Intelligent middleware and connected digital ecosystem uniting analyzers, real-time QC, and hospital EHRs.',
    overview:
      'Modern diagnostic care requires frictionless communication between instruments and clinical care teams. The Diagnostic Informatics & Connected Healthcare Ecosystem provides a centralized middleware layer that aggregates data across chemistry, hematology, and immunoassay platforms, applies automated rule-based validation, and dispatches verified reports directly into hospital EHRs and mobile physician workflows.',
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
