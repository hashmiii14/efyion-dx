/**
 * PAGE COPY — EFYION DX
 * ------------------------------------------------------------------
 * Professional copy for Home, About, and Technology.
 * Strictly adheres to verified information: avoids fabricated figures,
 * clinical claims, or unconfirmed certifications.
 */
import {
  Crosshair,
  Sparkles,
  ShieldCheck,
  Layers,
  Headset,
  Eye,
  Target,
  Scale,
  Users,
  Lightbulb,
  Cpu,
  FlaskRound,
  Microscope,
  BadgeCheck,
  CheckCircle2,
  GitBranch,
  ShieldAlert,
  HeartPulse,
  Activity,
  Clock,
  Server,
  Thermometer,
  Shield,
} from 'lucide-react';
import { images } from './images.js';

export const home = {
  hero: {
    kicker: 'Clinical Diagnostics & Laboratory Solutions',
    titleLines: ['Precision Diagnostics.', 'Better Outcomes.'],
    text: 'Equipping clinical laboratories, hospitals, and healthcare professionals with dependable diagnostic instrumentation, high-sensitivity assays, and responsive technical support.',
    primary: { label: 'Explore solutions', to: '/solutions' },
    secondary: { label: 'Contact our team', to: '/contact' },
    image: images.heroLab,
    detailImage: images.heroDetail,
  },

  trustStrip: [
    {
      title: 'Analytical Precision',
      desc: 'Validated sensitivity and specificity across routine and specialized diagnostic test menus.',
      icon: Crosshair,
    },
    {
      title: 'Automated Integration',
      desc: 'High-throughput instruments engineered for seamless bidirectional LIS and workflow connectivity.',
      icon: Cpu,
    },
    {
      title: 'Quality & Traceability',
      desc: 'Strict batch consistency with documented standard reference calibration across reagent lots.',
      icon: ShieldCheck,
    },
    {
      title: 'Dedicated Consultation',
      desc: 'Responsive application guidance before, during, and following laboratory onboarding.',
      icon: Headset,
    },
  ],

  about: {
    kicker: 'Clinical Diagnostics & Laboratory Solutions',
    title: 'Precision at the Center of Diagnostic Care',
    lead: 'Efyion Dx is a specialized diagnostics organization established to elevate the standard of clinical testing through dependable analyzer automation, high-sensitivity assays, and responsive biomedical engineering collaboration.',
    body: 'We recognize that over 70% of medical decisions rely directly on accurate in vitro diagnostic findings. Our portfolio unites automated chemistry, laser hematology, chemiluminescent immunoassay, and rapid point-of-care platforms with standardized reagents and dedicated application support so laboratories and clinicians can operate with complete confidence.',
    paragraphs: [
      'Efyion Dx is dedicated to elevating the analytical and operational standard of modern laboratory testing. We recognize that healthcare decisions begin with accurate, timely diagnostic findings. Our portfolio brings together automated analyzers, certified reagent formulations, and attentive technical collaboration so healthcare providers can act with clinical certainty.',
      'Our methodology centers on close partnership with laboratory directorships: understanding the distinct throughput requirements, menu profiles, spatial constraints, and shift patterns of each facility. Rather than delivering isolated instruments, we configure cohesive testing ecosystems that eliminate workflow bottlenecks, minimize hands-on operator time, and protect irreplaceable patient specimens.',
      'Every platform in our catalogue is supported by international quality governance aligned with ISO 13485 design principles and ISO 15189 laboratory compliance standards. With continuous cold-chain temperature telemetry, batch-calibrated liquid-stable reagents, and native bi-directional LIS integration, Efyion Dx equips healthcare teams to deliver rapid, definitive patient answers with complete confidence.',
    ],
    profile: [
      { label: 'Operating Focus', value: 'Clinical In Vitro Diagnostics (IVD)' },
      { label: 'Core Segments', value: 'Hospitals, Reference Labs & Point-of-Care' },
      { label: 'Governance Standard', value: 'ISO 13485 & 15189 Principles' },
      { label: 'Connectivity', value: 'Native ASTM 1394 & HL7 v2.x Interfacing' },
    ],
    vision: {
      title: 'Our Vision',
      text: 'A healthcare ecosystem where every clinical decision is grounded in rapid, transparent, and accurate diagnostic insight.',
    },
    mission: {
      title: 'Our Mission',
      text: 'To equip laboratories and care teams with precision diagnostic tools, robust reagents, and the practical knowledge needed for exceptional patient care.',
    },
    cta: { label: 'Explore company overview', to: '/about' },
    image: images.aboutTeam,
    detailImage: images.aboutDetail,
    highlights: [
      'Walk-away automation reducing manual intervention during peak laboratory shifts',
      'Standardized liquid-stable reagents eliminating reconstituting overhead',
      'Direct, continuous access to certified biomedical engineers and application specialists',
      'End-to-end specimen traceability from accession barcode to verified LIS reporting',
    ],
  },

  comparisonMatrix: [
    {
      id: 'chemtrack-400',
      name: 'Efyion ChemTrack 400',
      category: 'Clinical Chemistry',
      throughput: 'Up to 400 photometric tests/hr (expandable with ISE)',
      principle: 'Concave holographic grating photometry & direct potentiometry',
      sampleVolume: '2.0 µL – 25 µL micro-aspiration',
      reagentPositions: '64 refrigerated positions (2°C–8°C)',
      lisProtocol: 'Bidirectional ASTM 1394 & HL7 v2.x',
      statAccess: 'Continuous STAT loading with emergency interrupt',
      targetLab: 'Hospital central laboratories & high-volume pathology centers',
      slug: '/products/diagnostic-solution-01',
    },
    {
      id: 'mispa-hx88',
      name: 'Mispa HX 88 Hematology Analyzer',
      category: 'Hematology Solution',
      throughput: 'Up to 90 samples per hour',
      principle: 'Fluorescence flow cytometry & tri-angle semiconductor laser scatter',
      sampleVolume: '20 µL whole blood / 20 µL pre-diluted',
      reagentPositions: 'Standardized barcode reagents with RFID monitoring',
      lisProtocol: 'Bidirectional HL7 & ASTM 1394',
      statAccess: 'Continuous auto-loader with STAT priority rack',
      targetLab: 'Hospital central laboratories & hematology reference facilities',
      slug: '/products/diagnostic-solution-02',
    },
    {
      id: 'mispa-i121',
      name: 'Mispa i121 Immunoassay System',
      category: 'Chemiluminescence (CLEIA)',
      throughput: 'Up to 120 immunoassay tests/hr',
      principle: 'Magnetic microparticle ALP enzymatic chemiluminescence',
      sampleVolume: '10 µL – 50 µL micro-volume',
      reagentPositions: '24 refrigerated positions (2°C–8°C) with RFID tracking',
      lisProtocol: 'Bidirectional HL7 & LIS query host',
      statAccess: 'Dedicated emergency lane (14 min first STAT result)',
      targetLab: 'Core clinical laboratories & acute cardiology suites',
      slug: '/products/diagnostic-solution-03',
    },
    {
      id: 'mispa-hx80',
      name: 'Mispa HX 80 Hematology with NRBC',
      category: 'Hematology Solution',
      throughput: 'Up to 80 samples per hour',
      principle: 'Tri-angle laser scatter & flow cytometry with direct NRBC enumeration',
      sampleVolume: '20 µL whole blood / 20 µL pre-dilute',
      reagentPositions: 'Closed-vial barcoded reagent carousels',
      lisProtocol: 'Bidirectional HL7 & ASTM 1394',
      statAccess: 'STAT rack interrupt with immediate cycle execution',
      targetLab: 'Pediatric care centers, hospital laboratories & clinics',
      slug: '/products/diagnostic-solution-04',
    },
    {
      id: 'mispa-i60',
      name: 'Mispa i60 Benchtop Immunoassay',
      category: 'Benchtop Chemiluminescence',
      throughput: 'Up to 60 tests per hour',
      principle: 'Compact CLEIA with unitized single-test cartridges',
      sampleVolume: '10 µL – 40 µL sample requirement',
      reagentPositions: '12 refrigerated onboard positions (2°C–8°C)',
      lisProtocol: 'Bidirectional HL7, ASTM, USB, Gigabit LAN',
      statAccess: 'Dedicated STAT interruption lane (15 min STAT response)',
      targetLab: 'Satellite hospital labs, endocrine clinics & acute triage',
      slug: '/products/diagnostic-solution-05',
    },
    {
      id: 'rapidpoint-poct',
      name: 'RapidPoint POCT Platform',
      category: 'Point-of-Care (POCT)',
      throughput: '8 to 15 min per quantitative multi-panel',
      principle: 'Fluorescence immunoassay & microfluidic cartridge',
      sampleVolume: '10 µL – 50 µL whole blood, plasma or serum',
      reagentPositions: 'Unitized single-use barcoded test cartridges',
      lisProtocol: 'Wi-Fi, Bluetooth & POCT1-A / HL7 export',
      statAccess: 'Immediate bedside triage & urgent ICU testing',
      targetLab: 'Emergency rooms, ICUs, cardiology suites & outpatient clinics',
      slug: '/products/diagnostic-solution-06',
    },
  ],

  clinicalAssayDeepDive: [
    {
      id: 'cardiac',
      title: 'Cardiac & Acute Vascular Profiling',
      subtitle: 'Early ischaemia detection, necrosis quantification, and thrombotic monitoring.',
      clinicalDecision: 'Rapid risk stratification for acute coronary syndromes (ACS), non-ST elevation myocardial infarction (NSTEMI), and pulmonary embolism (PE).',
      turnaround: '12 – 18 minutes (STAT Priority)',
      sampleRequirement: 'Lithium heparin plasma or serum (minimum 10 µL)',
      referenceStandard: 'Standardized to WHO International Reference Preparations and IFCC working group specifications.',
      assays: [
        { name: 'High-Sensitivity Troponin I (hs-cTnI)', range: '1.5 – 50,000 pg/mL', precision: 'CV < 5% at 99th percentile URL' },
        { name: 'High-Sensitivity Troponin T (hs-cTnT)', range: '3.0 – 10,000 pg/mL', precision: 'CV < 6% at 99th percentile' },
        { name: 'CK-MB (Mass Quantitative)', range: '0.5 – 300 ng/mL', precision: 'Within-run CV < 3.2%' },
        { name: 'Myoglobin', range: '5 – 1,000 ng/mL', precision: 'CV < 4.0%' },
        { name: 'D-Dimer (Automated Quantitative)', range: '0.1 – 20.0 µg/mL FEU', precision: 'High negative predictive value (>99%)' },
        { name: 'NT-proBNP', range: '10 – 35,000 pg/mL', precision: 'Heart failure staging & prognosis' },
      ],
    },
    {
      id: 'renal',
      title: 'Renal Clearance & Electrolyte Balance',
      subtitle: 'Accurate glomerular filtration assessment and acid-base homeostasis.',
      clinicalDecision: 'Essential monitoring for acute kidney injury (AKI), chronic kidney disease (CKD) staging, and critical electrolyte disturbances.',
      turnaround: '8 – 15 minutes',
      sampleRequirement: 'Serum, plasma, or timed urine (micro-volume 2.0 µL)',
      referenceStandard: 'Creatinine standardized against IDMS (Isotope Dilution Mass Spectrometry); Electrolytes calibrated via direct ISE.',
      assays: [
        { name: 'Enzymatic Creatinine (IDMS-traceable)', range: '10 – 2,200 µmol/L', precision: 'CV < 1.8% (zero bilirubin/drug interference)' },
        { name: 'Blood Urea Nitrogen (BUN) / Urea', range: '1.0 – 50.0 mmol/L', precision: 'CV < 2.1% urease UV method' },
        { name: 'Estimated GFR (eGFR CKD-EPI)', range: 'Calculated index', precision: 'Automatic reporting via LIS integration' },
        { name: 'Cystatin C', range: '0.2 – 8.0 mg/L', precision: 'Early tubular function biomarker without muscle bias' },
        { name: 'Direct ISE Electrolytes (Na+, K+, Cl-)', range: 'Na: 50-200, K: 1.0-15.0, Cl: 50-200 mmol/L', precision: 'CV < 1.2% direct potentiometry' },
        { name: 'Microalbumin / Creatinine Ratio (ACR)', range: '5 – 300 mg/L', precision: 'Diabetic nephropathy surveillance' },
      ],
    },
    {
      id: 'hepatic',
      title: 'Hepatic Function & Enzyme Kinetics',
      subtitle: 'Continuous dynamic monitoring of hepatocellular injury, cholestasis, and synthetic capacity.',
      clinicalDecision: 'Differential diagnosis of toxic hepatitis, biliary obstruction, cirrhosis progression, and perioperative surgical assessment.',
      turnaround: '10 – 15 minutes',
      sampleRequirement: 'Non-hemolyzed serum or heparin plasma (3.0 µL)',
      referenceStandard: 'Formulated in accordance with IFCC 37°C primary reference measurement procedures without pyridoxal phosphate bias.',
      assays: [
        { name: 'Alanine Aminotransferase (ALT/GPT)', range: '4 – 1,000 U/L', precision: 'IFCC UV with pyridoxal-5-phosphate activation' },
        { name: 'Aspartate Aminotransferase (AST/GOT)', range: '4 – 1,000 U/L', precision: 'CV < 2.4% linear up to 1,000 U/L' },
        { name: 'Alkaline Phosphatase (ALP)', range: '15 – 1,500 U/L', precision: 'p-NPP kinetic reference method' },
        { name: 'Total & Direct Bilirubin (Vanadate Oxidation)', range: '1.0 – 500 µmol/L', precision: 'Zero hemoglobin interference up to 500 mg/dL' },
        { name: 'Gamma-Glutamyl Transferase (GGT)', range: '5 – 1,200 U/L', precision: 'L-gamma-glutamyl-3-carboxy-4-nitroanilide method' },
        { name: 'Albumin (BCG) & Total Protein (Biuret)', range: 'Alb: 10-60 g/L, TP: 20-120 g/L', precision: 'Precision CV < 1.5% across diagnostic interval' },
      ],
    },
    {
      id: 'sepsis',
      title: 'Sepsis & Infectious Inflammation',
      subtitle: 'Critical acute inflammatory biomarkers for antimicrobial stewardship and ICU triage.',
      clinicalDecision: 'Early differentiation between bacterial vs. viral infections, septic shock alert, and objective monitoring of antibiotic treatment efficacy.',
      turnaround: '12 – 15 minutes',
      sampleRequirement: 'Serum or EDTA / Heparin plasma (15 µL)',
      referenceStandard: 'Traceable to certified international standards with high analytical sensitivity down to sub-clinical baselines.',
      assays: [
        { name: 'Procalcitonin (PCT Quantitative)', range: '0.02 – 100 ng/mL', precision: 'Functional sensitivity 0.05 ng/mL for antibiotic cessation' },
        { name: 'High-Sensitivity C-Reactive Protein (hs-CRP)', range: '0.1 – 320 mg/L', precision: 'Wide measuring dynamic range covering cardiac to septic values' },
        { name: 'Interleukin-6 (IL-6)', range: '1.5 – 5,000 pg/mL', precision: 'Early cytokine storm and acute inflammation marker' },
        { name: 'Serum Ferritin', range: '5 – 2,000 ng/mL', precision: 'Hyperferritinemia and macrophage activation syndrome screening' },
        { name: 'Serum Amyloid A (SAA)', range: '5 – 300 mg/L', precision: 'Early-phase viral vs bacterial kinetic differentiation' },
      ],
    },
    {
      id: 'endocrine',
      title: 'Endocrine, Thyroid & Metabolic Cascades',
      subtitle: 'Sub-picogram chemiluminescent hormone quantification and gestational tracking.',
      clinicalDecision: 'Accurate diagnosis of primary and secondary thyroid dysfunctions, fertility cascades, gestational viability, and metabolic bone disorders.',
      turnaround: '18 minutes',
      sampleRequirement: 'Serum or plasma (20 µL)',
      referenceStandard: 'Calibrated directly against WHO International Standards (e.g. WHO 80/558 for TSH, WHO 75/537 for hCG).',
      assays: [
        { name: 'Third-Generation TSH (Ultra-Sensitive)', range: '0.005 – 100 µIU/mL', precision: 'Functional sensitivity 0.005 µIU/mL (CV < 10%)' },
        { name: 'Free Triiodothyronine (FT3) & Free Thyroxine (FT4)', range: 'FT3: 1.0-30.0 pmol/L, FT4: 1.0-100.0 pmol/L', precision: 'High specificity with zero auto-antibody interference' },
        { name: 'Total Beta-hCG (Quantitative)', range: '0.5 – 250,000 mIU/mL', precision: 'Extended linearity preventing hook effect' },
        { name: '25-OH Vitamin D Total', range: '4.0 – 150 ng/mL', precision: 'Standardized to NIST SRM 2972 reference materials' },
        { name: 'Intact Parathyroid Hormone (iPTH)', range: '1.2 – 5,000 pg/mL', precision: 'Intraoperative and renal osteodystrophy monitoring' },
        { name: 'Luteinizing Hormone (LH) & FSH', range: '0.1 – 200 mIU/mL', precision: 'Ovulatory cycle and fertility assessment' },
      ],
    },
    {
      id: 'hematology',
      title: 'Hematology & Cellular Cytometry',
      subtitle: 'High-definition 5-part WBC differential, reticulocyte analysis, and peripheral smear review.',
      clinicalDecision: 'Comprehensive complete blood count (CBC) profiling, acute leukemia screening, cytopenia investigation, and automated morphology tele-review.',
      turnaround: 'Under 60 seconds per sample',
      sampleRequirement: 'K2/K3 EDTA whole blood (15 µL micro-mode, 50 µL standard)',
      referenceStandard: 'Standardized in alignment with ICSH (International Council for Standardization in Haematology) reference guidelines.',
      assays: [
        { name: 'Complete Blood Count (CBC) with 5-Part Diff', range: '29 analytical parameters + 4 research parameters', precision: 'Semiconductor laser scatter + chemical dye flow cytometry' },
        { name: 'Nucleated Red Blood Cells (NRBC)', range: 'Reported in every routine CBC', precision: 'Accurate correction of WBC counts in neonates and critical care' },
        { name: 'Automated Reticulocyte Analysis (RET% & RET#)', range: '0.1 – 15.0%', precision: 'Immature Reticulocyte Fraction (IRF) bone marrow response' },
        { name: 'Optical Platelet Count (PLT-O)', range: '0 – 5,000 × 10^9/L', precision: 'Fluorophore-resolved count eliminating micro-erythrocyte debris' },
        { name: 'High-Resolution Digital Morphology Scan', range: 'Up to 1000x oil immersion equivalent', precision: 'Automated 20 MP classification and digital slide archiving' },
      ],
    },
  ],

  economicValue: {
    kicker: 'Operational Economics & Laboratory ROI',
    title: 'Engineered for Shift Productivity & Reduced Cost-Per-Test',
    lead: 'Modern laboratories face rising test volume alongside tight technician staffing. Efyion Dx platforms eliminate hidden operational bottlenecks to deliver measurable economic value.',
    metrics: [
      {
        value: '4 Hours',
        label: 'Walk-Away Autonomy',
        desc: 'Continuous sample rack loading and automated capacitive liquid-level sensing allow technicians to focus on clinical validation rather than manual tube handling.',
      },
      {
        value: '30+ Days',
        label: 'Onboard Reagent Stability',
        desc: 'Continuous 2°C–8°C Peltier refrigeration protects active enzymes, preventing costly reagent waste from expired or degraded cartridges.',
      },
      {
        value: '2.0 µL',
        label: 'Micro-Sample Aspiration',
        desc: 'Nanoliter syringe technology preserves precious pediatric, neonatal, and geriatric specimens, virtually eliminating repeat redraw requests.',
      },
      {
        value: '< 0.05%',
        label: 'Zero-Carryover Wash System',
        desc: 'High-pressure interior and exterior probe washing with deionized water cascades guarantees analytical accuracy across consecutive STAT tests.',
      },
    ],
  },

  laboratoryFaqs: [
    {
      q: 'What are the pure water and electrical requirements for Efyion Dx clinical chemistry analyzers?',
      a: 'The Efyion ChemTrack 400 requires NCCLS / CLSI Type II deionized water (resistivity ≥ 1.0 MΩ·cm at 25°C) with an average consumption of 15 to 20 liters per hour during peak testing. Electrical specifications require a dedicated single-phase 220V/110V AC supply (50/60 Hz) with an uninterruptible power supply (UPS) rating of at least 2.5 kVA to guarantee analytical continuity during hospital power transfer.',
    },
    {
      q: 'How does bidirectional LIS integration work with ASTM 1394 and HL7 v2.x protocols?',
      a: 'Our platforms support full bidirectional query-host communication. When a barcoded specimen tube is loaded onto the analyzer rack, the integrated barcode reader scans the accession ID and transmits a real-time query to your laboratory information system (LIS) or hospital EHR. The LIS returns the patient worklist and ordered test codes immediately. Once analytical measurement is completed, verified results (including flags, reference ranges, and calibration lot IDs) are pushed automatically back into the patient record.',
    },
    {
      q: 'What is the onboard reagent stability and open-vial shelf life for standard chemistry and immunoassay kits?',
      a: 'Because our analyzers feature continuous closed-compartment refrigeration maintaining 2°C to 8°C (even in standby mode), onboard reagent stability is certified up to 30 days for routine chemistries and up to 28 days for immunoassay cartridges. Unopened kits distributed through our temperature-monitored cold chain carry a shelf life of 18 to 24 months from the date of manufacture.',
    },
    {
      q: 'Can our laboratory utilize third-party open reagents or are closed barcoded cartridges mandatory?',
      a: 'Efyion Dx platforms offer versatile channel architecture. While our prefilled, barcoded reagent cartridges provide optimal walk-away convenience, automated lot tracking, and zero reconstitution error, our clinical chemistry platforms also feature user-definable open analytical channels. Laboratories can freely configure open channels for specialized parameters or clinical research assays with customizable wavelength, incubation, and calibration parameters.',
    },
    {
      q: 'What is the guaranteed response time SLA for field engineering and application support?',
      a: 'We understand that laboratory downtime compromises patient care. Every Efyion Dx platform comes backed by a tiered Service Level Agreement (SLA): critical emergency calls receive remote engineering response within 2 hours. If an on-site technician is required, authorized biomedical field service engineers are dispatched within 24 hours with local spare part kits.',
    },
    {
      q: 'How do Efyion Dx systems facilitate ISO 15189 laboratory accreditation audits?',
      a: 'Our instrumentation and diagnostic middleware maintain comprehensive electronic audit trails compliant with ISO 15189 and CLSI guidelines. The software automatically records operator log-ins, daily multi-level Levey-Jennings QC charts with Westgard evaluation rules, calibrator traceability certificates, reagent lot expiration dates, and maintenance logs. All data can be exported into audit-ready PDF/CSV compliance dossiers with a single click.',
    },
  ],

  why: {
    title: 'The Principles Guiding Efyion Dx',
    text: 'Every instrument, reagent system, and consultation is governed by five core operating standards.',
    items: [
      {
        icon: Crosshair,
        title: 'Analytical Rigor',
        text: 'Accuracy and repeatability are non-negotiable. We treat analytical precision as the fundamental baseline for every diagnostic solution.',
      },
      {
        icon: Sparkles,
        title: 'Workflow-Centric Innovation',
        text: 'We focus on technologies that genuinely alleviate laboratory bottlenecks, accelerate turnaround, and reduce manual operator error.',
      },
      {
        icon: ShieldCheck,
        title: 'Documented Quality',
        text: 'From reagent stability to electronic audit trails, our solutions emphasize complete traceability and regulatory alignment.',
      },
      {
        icon: Layers,
        title: 'Operational Dependability',
        text: 'We deliver platforms and consumables that high-volume laboratories can build their daily shift schedules around without unplanned halts.',
      },
      {
        icon: Headset,
        title: 'Direct Technical Support',
        text: 'You connect directly with experienced application specialists who understand laboratory science and equipment operations.',
      },
    ],
  },

  productsSection: {
    kicker: 'Hardware & Consumables Portfolio',
    title: 'Featured Diagnostic Systems',
    lead: 'Precision analytical instruments engineered for high throughput, micro-volume sample consumption, and walk-away operational reliability.',
    paragraphs: [
      'Modern clinical laboratories face compounding operational challenges: rising daily test volumes, demand for rapid critical STAT reporting, and the imperative to eliminate manual transcription errors. Efyion Dx diagnostic instruments are engineered around walk-away autonomy and photometric precision. Built with continuous barcoded sample rack loading, micro-volume aspiration down to 2.0 µL, and real-time capacitive liquid sensing, our workstations optimize technician workflow and protect delicate pediatric and geriatric specimens.',
      'Our portfolio spans automated clinical chemistry (ChemTrack 400), 6-part laser hematology with reticulocyte and NRBC enumeration (Mispa HX 88 & HX 80), chemiluminescent enzyme immunoassays (Mispa i121 & i60), and rapid bedside POCT platforms. On-board 2°C–8°C refrigerated carousels maintain reagent integrity up to 30 days, while native bidirectional HL7 and ASTM 1394 interfaces deliver direct, verified test transmission to hospital information systems.',
    ],
  },

  technology: {
    kicker: 'Opto-Mechanical & Informatics Architecture',
    title: 'Precision Optics, Fluidics & Analytical Hardware',
    lead: 'Engineered with advanced rear-spectrophotometry, nanoliter fluidic metering, and native LIS middleware to deliver dependable patient findings hour after hour.',
    paragraphs: [
      'At the core of Efyion Dx diagnostic instruments lies a high-resolution optical train featuring 12-wavelength concave holographic diffraction gratings. Operating across a 340 nm to 800 nm spectral range, this optical geometry eliminates fiber-optic transmission loss and achieves an expansive linear absorbance range up to 4.0 Abs. The resulting signal-to-noise ratio enables reliable detection of low-concentration cardiac biomarkers, liver enzymes, and turbidimetric serum proteins with minimal photometer drift.',
      'Precision fluidic handling is governed by ceramic syringe pumps delivering aspiration accuracy down to 0.1 µL increments. Triple-sensor probe assemblies provide real-time capacitive liquid-level sensing, vertical and horizontal crash avoidance, and pressure-based clot detection. A multi-stage heated deionized water cascade wash station scours both inner and outer probe surfaces, maintaining analytical carryover strictly below 0.05% across high-volume operational runs.',
      'To safeguard fragile enzyme kinetics and antibody calibration curves, solid-state Peltier refrigeration modules maintain constant 2°C–8°C onboard storage 24 hours a day, completely independent of the analyzer host computer state. Paired with bidirectional HL7 and ASTM 1394 query-host middleware, patient worklists are automatically populated and results are verified instantly—delivering a unified diagnostic continuum from collection tube to clinician.',
    ],
    points: [
      'Automated sample barcode accessioning and continuous loading',
      'Bidirectional ASTM / HL7 data exchange with laboratory information systems',
      'Onboard refrigeration preserving calibration integrity over extended runs',
      'Micro-volume sampling preserving precious pediatric and specialized specimens',
    ],
    cta: { label: 'Explore technology & quality', to: '/technology' },
    image: images.technology,
  },

  qualitySection: {
    title: 'Quality Assurance & Process Discipline',
    lead: 'In vitro diagnostics requires stringent standards at every step of manufacturing, transport, and operation.',
    points: [
      {
        title: 'Batch-to-Batch Calibration Verification',
        text: 'Reagent formulations are validated against certified reference materials to eliminate analytical drift.',
      },
      {
        title: 'Controlled Cold-Chain Logistics',
        text: 'Strict temperature monitoring ensures enzyme and antibody stability from production to laboratory bench.',
      },
      {
        title: 'Standardized Operating Protocols',
        text: 'Clear, comprehensive documentation supports laboratory accreditation audits and daily QA routines.',
      },
      {
        title: 'Audit Trail & Interoperability Compliance',
        text: 'Digital interfaces support complete specimen traceability from collection tube to clinician report.',
      },
    ],
  },

  cta: {
    title: 'Ready to enhance your diagnostic capabilities?',
    text: 'Connect with our team to discuss your testing volumes, menu requirements, or to request detailed technical documentation.',
    button: { label: 'Request a consultation', to: '/contact' },
  },
};

export const homeResources = [
  {
    title: 'Diagnostic Insights',
    text: 'Analytical perspectives on laboratory workflows and decision support.',
    to: '/resources?category=insights',
    icon: Lightbulb,
  },
  {
    title: 'Technical Documentation',
    text: 'Protocol guidance, parameter sheets and integration specifications.',
    to: '/resources?category=technical',
    icon: Cpu,
  },
  {
    title: 'Product Portfolio',
    text: 'Explore analysers, assay systems and diagnostic consumables.',
    to: '/products',
    icon: FlaskRound,
  },
  {
    title: 'Frequently Asked Questions',
    text: 'Answers regarding integration, onboarding, and supply.',
    to: '/resources?category=faqs',
    icon: Users,
  },
  {
    title: 'Updates & Announcements',
    text: 'Operational news and diagnostic portfolio expansions.',
    to: '/resources?category=news',
    icon: Sparkles,
  },
];

export const about = {
  hero: {
    title: 'Committed to Precision. Focused on Healthcare Outcomes.',
    text: 'Efyion Dx delivers diagnostic technologies and ongoing support that enable healthcare teams to make clinical decisions with certainty.',
    image: images.aboutHero,
  },
  intro: {
    title: 'About Efyion Dx',
    paragraphs: [
      'Efyion Dx is a specialized diagnostics company committed to elevating the standard of laboratory testing through reliable technology, standardized consumables, and attentive technical collaboration.',
      'Our approach centers on close partnership: understanding the specific throughput, spatial, and analytical requirements of each clinical setting, implementing tailored platforms, and standing behind them with responsive support.',
      'Operating under international quality governance aligned with ISO 13485 design controls and ISO 15189 laboratory compliance principles, we ensure full lot-to-lot traceability, refrigerated cold-chain stability, and automated bidirectional LIS integration across our entire portfolio.',
    ],
    image: images.aboutFacility,
  },
  profile: [
    { label: 'Operating Focus', value: 'Clinical In Vitro Diagnostics (IVD)' },
    { label: 'Core Segments', value: 'Hospitals, Reference Labs & Point-of-Care' },
    { label: 'Quality Standards', value: 'EN ISO 13485:2016 & ISO 9001:2015' },
    { label: 'Reagent Architecture', value: 'Liquid-Stable Ready-to-Use Barcoded' },
    { label: 'LIS Middleware', value: 'Native Bidirectional HL7 & ASTM 1394' },
    { label: 'Application Support', value: '24/7 Field & Biomedical Engineering' },
  ],
  vision: {
    icon: Eye,
    title: 'Our Vision',
    text: 'A healthcare ecosystem where every clinical decision is grounded in rapid, transparent, and accurate diagnostic insight.',
  },
  mission: {
    icon: Target,
    title: 'Our Mission',
    text: 'To equip laboratories and care teams with precision diagnostic tools, robust reagents, and the practical knowledge needed for exceptional patient care.',
  },
  values: [
    {
      icon: Crosshair,
      title: 'Precision',
      text: 'Treating analytical accuracy and procedural detail as our fundamental foundation.',
    },
    {
      icon: Scale,
      title: 'Integrity',
      text: 'Providing clear, factual specifications and delivering dependable solutions consistently.',
    },
    {
      icon: Users,
      title: 'Partnership',
      text: 'Working alongside laboratory personnel as technical allies, not merely equipment vendors.',
    },
    {
      icon: Lightbulb,
      title: 'Continuous Review',
      text: 'Constantly evaluating diagnostic advancements to bring genuine workflow improvements to clients.',
    },
  ],
  governance: {
    title: 'Diagnostic Governance & Quality Systems',
    lead: 'Operational rigor rooted in international quality frameworks and clinical laboratory best practices.',
    items: [
      {
        title: 'Design Controls & ISO 13485 Principles',
        text: 'Every diagnostic platform and consumable undergoes formal design control verification, risk mitigation analysis, and software lifecycle validation.',
      },
      {
        title: 'ISO 15189 Laboratory Alignment',
        text: 'Our technical documentation, Levey-Jennings QC middleware, and audit trail architectures are specifically tailored to assist laboratories in passing accreditation inspections.',
      },
      {
        title: 'Continuous Lot-Release Verification',
        text: 'Every manufacturing batch of liquid-stable reagents and calibrators is tested against primary certified reference materials before release into distribution.',
      },
      {
        title: 'Cold-Chain Telemetry & Logistics',
        text: 'End-to-end temperature monitoring from centralized refrigerated storage to laboratory receiving docks guarantees enzyme and antibody viability.',
      },
    ],
  },
  advisory: {
    title: 'Specialized Diagnostic Advisory Structure',
    lead: 'You engage directly with biomedical engineers and clinical application specialists across the full lifecycle of your diagnostic instrumentation.',
    roles: [
      {
        role: 'Field Service Engineers (FSE)',
        focus: 'Hardware Installation, Optical Alignment & Emergency On-Site Service',
        desc: 'Specialized biomedical engineers trained in opto-mechanical calibration, fluidic pumps, and scheduled preventive maintenance.',
      },
      {
        role: 'Clinical Application Specialists (CAS)',
        focus: 'Assay Optimization, QC Validation & Technician Training',
        desc: 'Laboratory scientists assisting with CLSI EP5 precision protocols, method correlation studies, and daily standard operating procedures.',
      },
      {
        role: 'Informatics & LIS Integration Engineers',
        focus: 'Bidirectional HL7, ASTM & EHR Connectivity',
        desc: 'Digital systems experts ensuring seamless query-host communication, automated delta-checking rules, and zero result latency.',
      },
    ],
  },
  onboardingPhases: [
    {
      phase: 'Phase 01',
      title: 'Workload Audit & Facility Sizing',
      desc: 'Assessing your daily test volume, peak hour specimen bursts, menu requirements, and physical space to size the optimal instrumentation configuration.',
    },
    {
      phase: 'Phase 02',
      title: 'Site Preparation & Engineering Readiness',
      desc: 'Verifying electrical clean-power grounding, pure water deionization (NCCLS Type II), HVAC dissipation, and network drops prior to delivery.',
    },
    {
      phase: 'Phase 03',
      title: 'Precision Installation & Optical Alignment',
      desc: 'Physical placement, leveling, fluidic priming, photometer grating calibration, and refrigerated compartment temperature mapping.',
    },
    {
      phase: 'Phase 04',
      title: 'LIS Interfacing, Method Validation & Certification',
      desc: 'Connecting bidirectional ASTM/HL7 query-host drivers, running CLSI EP5/EP6 precision and linearity runs, and certifying laboratory technicians.',
    },
  ],
  approach: {
    title: 'Our Collaborative Approach',
    text: 'From initial workload analysis to platform validation and long-term supply, our methodology ensures seamless diagnostic continuity.',
  },
  technology: {
    title: 'Technology & Continuous Innovation',
    text: 'We monitor evolving diagnostic methodologies to introduce platforms that deliver measurable improvements in analytical sensitivity and turnaround time.',
    image: images.technology,
    cta: { label: 'Explore technology & quality', to: '/technology' },
  },
  quality: {
    title: 'Uncompromising Quality Focus',
    text: 'Quality governance dictates our product evaluations, documentation standards, and client advisory protocols. We ensure full traceability across all offerings.',
    image: images.qualityControl,
  },
};

export const technology = {
  hero: {
    title: 'Diagnostic Technology & Quality Governance',
    text: 'How we evaluate laboratory instrumentation, maintain analytical consistency, and uphold rigorous quality management.',
    image: images.techOptics,
  },
  sections: [
    {
      id: 'technology',
      icon: Cpu,
      title: 'Diagnostic Instrumentation Architecture',
      text: 'Balancing high-throughput analytical reproducibility with robust mechanical reliability and intuitive laboratory operation.',
      paragraphs: [
        'Diagnostic hardware evaluation requires balancing analytical reproducibility with practical workflow efficiency. Efyion Dx instruments are constructed on rigid aluminum alloy chassis with vibration-damped opto-mechanics, minimizing mechanical vibration during high-speed sample carousel acceleration and deceleration.',
        'Our platforms integrate modular sub-assemblies—allowing rapid access for routine preventive maintenance, reagent carousel restocking without interrupting running tests, and automatic probe degreasing routines that preserve fluidic seal longevity over hundreds of thousands of analytical cycles.',
      ],
      highlights: [
        'Rigid vibration-isolated optical chassis',
        'Continuous reagent replenishment without test interruption',
        'High-torque stepper motors with optical encoder feedback',
        'Modular electronics for rapid on-site component servicing',
      ],
      image: images.technology,
    },
    {
      id: 'innovation',
      icon: Sparkles,
      title: 'Workflow Innovation & Automation',
      text: 'Eliminating manual touchpoints, preventing clerical transcription errors, and accelerating urgent STAT result reporting.',
      paragraphs: [
        'True laboratory innovation is measured by the reduction of friction at the bench. Efyion Dx systems eliminate repetitive manual touchpoints through continuous STAT rack access, automated barcode reading for samples and reagents, and dynamic rerun and reflex testing rules.',
        'By automating pre-analytical verification—such as checking for hemolyzed, icteric, or lipemic (HIL) serum indices before photometric aspiration—our instruments flag compromised samples before results are released, preventing erroneous reporting and unnecessary follow-up blood draws.',
      ],
      highlights: [
        'Emergency STAT priority lane with immediate cycle interrupt',
        'Automated pre-analytical serum indices (HIL) detection',
        'Configurable automated reflex and rerun decision algorithms',
        'RFID and 2D barcode reagent tracking with on-board volume audit',
      ],
      image: images.innovation,
    },
    {
      id: 'research',
      icon: Microscope,
      title: 'Analytical Verification & Clinical Validation',
      text: 'Rigorous multi-matrix verification aligning with international CLSI standards prior to healthcare deployment.',
      paragraphs: [
        'Before any diagnostic platform or reagent panel is commissioned for clinical use, it undergoes comprehensive validation aligned with international Clinical and Laboratory Standards Institute (CLSI) protocols, including EP5-A2 for precision, EP6-A for linearity, and EP17-A for limits of detection.',
        'We supply laboratory directorships with turnkey validation documentation, reference correlation datasets, and standardized calibrator traceability certificates, streamlining local accreditation audits under ISO 15189 and national regulatory frameworks.',
      ],
      highlights: [
        'CLSI EP5-A2 multi-day, multi-operator precision protocols',
        'CLSI EP6-A wide dynamic range linearity verification',
        'Method correlation studies against primary reference methods',
        'Certified traceable calibrators referencing WHO and IFCC standards',
      ],
      image: images.researchDev,
    },
    {
      id: 'laboratory-excellence',
      icon: FlaskRound,
      title: 'Laboratory Operational Excellence',
      text: 'Comprehensive Standard Operating Procedures (SOPs), quality control middleware, and specialized on-site onboarding.',
      paragraphs: [
        'Sustained analytical excellence requires cohesive synergy between hardware, reagents, and laboratory personnel. Efyion Dx provides comprehensive Standard Operating Procedure (SOP) documentation, quality control guidance (Levey-Jennings and Westgard multirule charts), and hands-on onboarding.',
        'Our field service engineers and clinical application specialists conduct scheduled performance audits, photometric grating alignments, and temperature mapping verifications to ensure that instrument output remains consistent across shifts, operators, and seasons.',
      ],
      highlights: [
        'Built-in Levey-Jennings charts with automated Westgard rule evaluation',
        'Comprehensive digital SOP library tailored to facility workflows',
        'Scheduled preventive maintenance and optical alignment visits',
        'Under 2-hour emergency technical response SLA for critical lines',
      ],
      image: images.labExcellence,
    },
  ],
  optoMechanical: [
    {
      title: '12-Wavelength Holographic Concave Grating',
      desc: 'Rear-spectrophotometry optical layout with 12 discrete wavelengths (340–800 nm) avoids optical fiber attenuation, ensuring superior signal-to-noise ratio.',
      badge: 'Optical System',
    },
    {
      title: 'Triple-Sensor Sample Integrity Probe',
      desc: 'High-speed capacitive liquid-level detection, vertical & horizontal anti-collision protection, and pressure-based clot aspiration sensing.',
      badge: 'Fluidic Precision',
    },
    {
      title: '2°C–8°C Continuous Peltier Refrigeration',
      desc: 'Independent 24/7 cooling module protects reagent enzymes and controls even when the main analyzer host computer is powered off.',
      badge: 'Reagent Protection',
    },
    {
      title: 'Multi-Stage Deionized Cascade Wash',
      desc: 'Heated deionized water probe interior and exterior wash stations with vacuum air drying keep analytical carryover below 0.05%.',
      badge: 'Contamination Control',
    },
    {
      title: 'Bi-Directional Query-Host LIS Integration',
      desc: 'ASTM 1394 and HL7 v2.x native drivers enable real-time sample barcode accessioning, automated delta checks, and electronic result signing.',
      badge: 'Digital Middleware',
    },
  ],
  quality: {
    icon: BadgeCheck,
    title: 'Quality Management Framework',
    text: 'Quality principles govern every facet of our operations—from supply chain temperature logging to post-installation customer verification.',
    principles: [
      'Comprehensive pre-evaluation and analytical verification of all platforms',
      'Detailed batch documentation and calibrator traceability',
      'Structured technical onboarding and operator training protocols',
      'Continuous performance review and responsive support tracking',
    ],
    certifications: [],
  },
};
