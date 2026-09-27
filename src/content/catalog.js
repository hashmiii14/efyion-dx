/**
 * PRODUCT CATALOGUE — EFYION DX
 * ------------------------------------------------------------------
 * Diagnostic portfolio categorized by clinical specialty and workflow.
 * Full images, applications, specifications and feature breakdowns.
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
    name: 'Automated Clinical Chemistry Analyzer',
    category: 'laboratory-solutions',
    type: 'Laboratory Solution',
    featured: true,
    image: images.product1,
    summary: 'High-throughput automated workstation designed for routine and specialized clinical chemistry profiles.',
    overview:
      'The Automated Clinical Chemistry Analyzer provides mid-to-high volume laboratories with consistent analytical performance and dependable walk-away automation. Designed to minimize hands-on preparation time, the system features integrated sample tracking, continuous reagent loading, and automated quality control scheduling.',
    applications: [
      'Hospital central laboratories',
      'Clinical pathology centers',
      'Routine diagnostic screening',
      'High-throughput reference testing',
    ],
    features: [
      {
        title: 'Walk-away automation',
        text: 'Continuous rack loading and automated clot detection reduce operator intervention during peak shifts.',
      },
      {
        title: 'On-board refrigeration',
        text: 'Maintains reagent integrity and calibration stability across extended testing intervals.',
      },
      {
        title: 'Bidirectional LIS connectivity',
        text: 'Seamlessly transfers patient worklists and diagnostic results directly to hospital informatics systems.',
      },
      {
        title: 'Micro-volume aspiration',
        text: 'Optimized sample probe technology conserves specimen volume while preserving analytical precision.',
      },
    ],
    specifications: [
      { label: 'Product category', value: 'Laboratory Solution' },
      { label: 'Throughput capacity', value: 'Configurable based on lab workload' },
      { label: 'Sample types', value: 'Serum, Plasma, Urine, Cerebrospinal fluid' },
      { label: 'Sample loading', value: 'Continuous barcoded rack loading' },
      { label: 'Data connectivity', value: 'Bidirectional HL7 / ASTM protocols' },
      { label: 'Reagent positions', value: 'Multi-channel chilled carousel' },
    ],
    downloads: [],
  },
  {
    slug: 'diagnostic-solution-02',
    name: 'Multi-Parameter Diagnostic Optical System',
    category: 'diagnostic-instruments',
    type: 'Diagnostic Technology',
    featured: true,
    image: images.product2,
    summary: 'Precision optical and imaging instrumentation for high-resolution laboratory analysis.',
    overview:
      'Engineered for laboratories requiring exceptional optical clarity and reproducible imaging, this diagnostic optical platform combines advanced multi-channel illumination with digital image capture. It supports comprehensive cellular analysis, morphology review, and multi-spectral fluorescence detection.',
    applications: [
      'Cellular pathology analysis',
      'Hematology & cytology review',
      'Biomedical research laboratories',
      'Specialized diagnostic imaging',
    ],
    features: [
      {
        title: 'High-aperture optics',
        text: 'Multi-coated optical elements provide superior contrast and distortion-free specimen visualization.',
      },
      {
        title: 'Digital capture & annotation',
        text: 'Integrated camera system enables rapid digital archiving and tele-pathology collaboration.',
      },
      {
        title: 'Ergonomic benchtop design',
        text: 'Intuitive stage control and adjustable viewing angles support comfort during long review sessions.',
      },
      {
        title: 'Multi-mode illumination',
        text: 'Switch smoothly between brightfield, phase contrast, and LED fluorescence configurations.',
      },
    ],
    specifications: [
      { label: 'Product category', value: 'Diagnostic Technology' },
      { label: 'Optical magnification', value: 'Multi-objective nosepiece configuration' },
      { label: 'Illumination', value: 'Precision LED with uniform field dispersion' },
      { label: 'Digital output', value: 'High-resolution sensor with USB 3.0 / GigE interface' },
      { label: 'Stage configuration', value: 'Double-plate mechanical stage with specimen holder' },
    ],
    downloads: [],
  },
  {
    slug: 'diagnostic-solution-03',
    name: 'Standardized Diagnostic Reagent System',
    category: 'reagents-consumables',
    type: 'Reagent System',
    featured: true,
    image: images.product3,
    summary: 'Liquid-stable diagnostic reagents with rigorous batch-to-batch consistency and long calibration shelf-life.',
    overview:
      'Formulated to meet stringent analytical benchmarks, Efyion Dx reagent systems provide consistent linearity, high specificity, and minimal interferences across routine panels. Ready-to-use liquid formats eliminate reconstitution errors and accelerate daily startup routines.',
    applications: [
      'Routine clinical chemistry panels',
      'Metabolic and renal profiling',
      'Liver function assessments',
      'Lipid and cardiac biomarker panels',
    ],
    features: [
      {
        title: 'Liquid-stable convenience',
        text: 'Ready-to-use formulations avoid manual reconstitution, saving technician time and ensuring uniformity.',
      },
      {
        title: 'Extended calibration stability',
        text: 'Specialized chemical stabilization preserves calibration curves over extended on-board durations.',
      },
      {
        title: 'Traceable manufacturing',
        text: 'Every batch is verified against international standard reference materials for full traceability.',
      },
      {
        title: 'Universal barcoding',
        text: 'Prefilled reagent wedges feature 2D barcodes for automated lot and expiry tracking on compatible analysers.',
      },
    ],
    specifications: [
      { label: 'Product category', value: 'Reagent System' },
      { label: 'Formulation', value: 'Liquid-stable, ready to load' },
      { label: 'Storage temperature', value: '2°C to 8°C controlled storage' },
      { label: 'Compatibility', value: 'Open-channel and dedicated system configurations' },
      { label: 'Quality control', value: 'Calibrator and control sera available across levels' },
    ],
    downloads: [],
  },
  {
    slug: 'diagnostic-solution-04',
    name: 'Rapid Point-of-Care Diagnostic Platform',
    category: 'point-of-care',
    type: 'Point-of-Care Solution',
    featured: true,
    image: images.product4,
    summary: 'Portable, rapid-turnaround diagnostic system for urgent clinical triage and near-patient testing.',
    overview:
      'When treatment decisions cannot wait for remote laboratory turnarounds, the Point-of-Care platform delivers laboratory-comparable results in minutes. Engineered with intuitive touch navigation, automated calibration, and compact benchtop footprint for decentralized settings.',
    applications: [
      'Emergency & urgent care triage',
      'Intensive care bedside testing',
      'Outpatient surgical suites',
      'Remote and decentralized clinics',
    ],
    features: [
      {
        title: 'Rapid turnaround',
        text: 'Delivers definitive quantitative results in minutes from minimal specimen volume.',
      },
      {
        title: 'Self-calibrating cassettes',
        text: 'Individual test cartridges carry factory calibration data to ensure zero day-to-day drift.',
      },
      {
        title: 'Wireless clinical syncing',
        text: 'Direct Wi-Fi / Bluetooth communication uploads patient results directly to electronic health records.',
      },
      {
        title: 'Intuitive user interface',
        text: 'Step-by-step guided workflow on an anti-glare touchscreen prevents procedural test errors.',
      },
    ],
    specifications: [
      { label: 'Product category', value: 'Point-of-Care Solution' },
      { label: 'Sample volume', value: 'Micro-capillary or venous whole blood' },
      { label: 'Turnaround time', value: 'Under 15 minutes per test run' },
      { label: 'User authentication', value: 'Operator ID barcode scan / PIN access control' },
      { label: 'Power supply', value: 'AC adapter with integrated backup rechargeable battery' },
    ],
    downloads: [],
  },
  {
    slug: 'diagnostic-solution-05',
    name: 'High-Sensitivity Clinical Assay System',
    category: 'clinical-diagnostics',
    type: 'Clinical Diagnostic Solution',
    featured: false,
    image: images.product5,
    summary: 'Advanced immunoassay and clinical diagnostic panels providing sensitive biomarker detection.',
    overview:
      'Designed for clinical environments requiring high analytical sensitivity, this assay platform utilizes optimized antibody-antigen kinetics to detect low-abundance targets. It supports a comprehensive range of clinical panels including cardiac markers, thyroid hormones, and inflammatory indicators.',
    applications: [
      'Clinical hospital laboratories',
      'Endocrine and hormone testing',
      'Infectious disease serology',
      'Cardiac marker rapid analysis',
    ],
    features: [
      {
        title: 'Broad dynamic range',
        text: 'Enables accurate quantification without excessive sample pre-dilution.',
      },
      {
        title: 'High specificity',
        text: 'Engineered blocking reagents minimize cross-reactivity and heterophilic antibody interference.',
      },
      {
        title: 'Multi-format flexibility',
        text: 'Available in single-test cartridges or microplate configurations to suit different volume needs.',
      },
      {
        title: 'Standardized controls',
        text: 'Supplied with multi-level control materials to establish consistent confidence bounds.',
      },
    ],
    specifications: [
      { label: 'Product category', value: 'Clinical Diagnostic Solution' },
      { label: 'Detection methodology', value: 'Chemiluminescence / Optical Immunoassay' },
      { label: 'Calibration frequency', value: 'Extended batch calibration with lot-specific RFID' },
      { label: 'Incubation conditions', value: 'Precision thermal incubation at 37°C ± 0.2°C' },
    ],
    downloads: [],
  },
  {
    slug: 'diagnostic-solution-06',
    name: 'Diagnostic Informatics & LIS Connectivity Suite',
    category: 'healthcare-technology',
    type: 'Digital Solution',
    featured: false,
    image: images.product6,
    summary: 'Middleware software unifying diagnostic instruments, automated validation rules and hospital EHRs.',
    overview:
      'Modern diagnostic care requires frictionless communication between instruments and clinical care teams. The Diagnostic Informatics Suite provides a centralized middleware layer that aggregates results across analyzers, applies automated rule-based validation, and dispatches verified reports directly into hospital EHR systems.',
    applications: [
      'Multi-instrument laboratory networks',
      'Hospital diagnostic informatics',
      'Quality control tracking & audits',
      'Turnaround-time monitoring',
    ],
    features: [
      {
        title: 'Automated delta-checking',
        text: 'Flags anomalous result shifts against historical patient records before clinical release.',
      },
      {
        title: 'Centralized QC dashboard',
        text: 'Live Levey-Jennings charts and multi-rule Westgard evaluations across all connected analysers.',
      },
      {
        title: 'Standardized interoperability',
        text: 'Native support for HL7, FHIR, and ASTM clinical integration protocols.',
      },
      {
        title: 'Audit trail compliance',
        text: 'Complete timestamped logging of sample accession, operator sign-offs, and report modifications.',
      },
    ],
    specifications: [
      { label: 'Product category', value: 'Digital Solution' },
      { label: 'Deployment model', value: 'On-premise laboratory server or secure private cloud' },
      { label: 'Interface protocols', value: 'HL7 v2.x / v3, FHIR, ASTM 1394/1381' },
      { label: 'Security & compliance', value: 'Role-based access control, TLS 1.3 encryption, audit logs' },
    ],
    downloads: [],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
