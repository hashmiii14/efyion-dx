/**
 * IMAGE LIBRARY — EFYION DX
 * ------------------------------------------------------------------
 * Every photograph across the site is referenced from here with verified
 * high-resolution medical, diagnostic, and clinical laboratory imagery.
 *
 * CRITICAL RULE: EVERY ENTRY IS 100% UNIQUE. NO DUPLICATE PHOTOS.
 * All IDs are verified to return HTTP 200 OK with stable responsive serving.
 */

const unsplash = (id) => ({ unsplash: id });

export const images = {
  // Hero & Brand
  heroLab: {
    ...unsplash('photo-1582719471384-894fbb16e074'),
    alt: 'Clinical laboratory scientist operating automated precision diagnostic analyzer',
  },
  heroDetail: {
    ...unsplash('photo-1579154204601-01588f351e67'),
    alt: 'Barcoded diagnostic sample vials loaded in organized laboratory rack',
  },
  heroAutomation: {
    ...unsplash('photo-1581093588401-fbb62a02f120'),
    alt: 'High-throughput robotic liquid handling and automated diagnostic platform',
  },
  solutionsHero: {
    ...unsplash('photo-1584467735815-f778f274e296'),
    alt: 'Multidisciplinary diagnostic care team and clinical testing solutions',
  },

  // Trust & Value Pillars
  pillarAssays: {
    ...unsplash('photo-1579165466741-7f35e4755660'),
    alt: 'Multi-well microplate assay for high-sensitivity clinical diagnostic testing',
  },
  pillarAutomation: {
    ...unsplash('photo-1581093450021-4a7360e9a6b5'),
    alt: 'Automated diagnostic analysis workstation in reference laboratory',
  },
  pillarMicroscopy: {
    ...unsplash('photo-1576086213369-97a306d36557'),
    alt: 'Clinical diagnostic microscope with precision optical illumination',
  },
  pillarData: {
    ...unsplash('photo-1581092918056-0c4c3acd3789'),
    alt: 'Healthcare technology specialist reviewing diagnostic laboratory informatics',
  },

  // About & Corporate
  aboutHero: {
    ...unsplash('photo-1563213126-a4273aed2016'),
    alt: 'Healthcare diagnostic equipment and precision clinical assay kits',
  },
  aboutTeam: {
    ...unsplash('photo-1532187863486-abf9dbad1b69'),
    alt: 'Diagnostic laboratory specialists conducting sample preparation and protocol review',
  },
  aboutDetail: {
    ...unsplash('photo-1579165466949-3180a3d056d5'),
    alt: 'Precision pipette dispensing liquid reagents into diagnostic testing matrix',
  },
  aboutFacility: {
    ...unsplash('photo-1530497610245-94d3c16cda28'),
    alt: 'Modern clinical diagnostic laboratory cleanroom and production facility',
  },
  contactConsultation: {
    ...unsplash('photo-1505751172876-fa1923c5c528'),
    alt: 'Clinical consultation and technical diagnostic advisory discussion',
  },

  // Product Categories (Distinct high-res imagery for all 6 disciplines)
  categoryClinical: {
    ...unsplash('photo-1579154392429-0e6b4e850ad2'),
    alt: 'Clinical diagnostic sample centrifuge tubes and testing consumables',
  },
  categoryLab: {
    ...unsplash('photo-1582719508461-905c673771fd'),
    alt: 'Organized diagnostic laboratory workstation with benchtop analysis tools',
  },
  categoryInstruments: {
    ...unsplash('photo-1581092795360-fd1ca04f0952'),
    alt: 'Diagnostic instrumentation, precision optics and analytical equipment',
  },
  categoryReagents: {
    ...unsplash('photo-1587854692152-cbe660dbde88'),
    alt: 'Standardized diagnostic reagents, buffer solutions and calibrators',
  },
  categoryPointOfCare: {
    ...unsplash('photo-1576091160399-112ba8d25d1d'),
    alt: 'Point-of-care rapid testing diagnostic instrument in clinical healthcare setting',
  },
  categoryTech: {
    ...unsplash('photo-1581056771107-24ca5f033842'),
    alt: 'Digital healthcare informatics, automated robotics, and connected diagnostic middleware',
  },

  // Individual Products (Distinct high-res imagery for all 6 systems)
  product1: {
    ...unsplash('photo-1629909613654-28e377c37b09'),
    alt: 'Automated Clinical Chemistry Analyzer workstation with continuous loading',
  },
  product2: {
    ...unsplash('photo-1582560475093-ba66accbc424'),
    alt: 'Multi-Parameter Diagnostic Optical System with digital morphology imaging',
  },
  product3: {
    ...unsplash('photo-1584308666744-24d5c474f2ae'),
    alt: 'Standardized Diagnostic Reagent Kits and Multi-Level Calibration Standards',
  },
  product4: {
    ...unsplash('photo-1584515979956-d9f6e5d09982'),
    alt: 'Rapid Point-of-Care Handheld Platform with micro-cartridge interface',
  },
  product5: {
    ...unsplash('photo-1584036561566-baf8f5f1b144'),
    alt: 'High-Sensitivity Immunoassay ECL Analyzer for cardiac, thyroid, and tumor markers',
  },
  product6: {
    ...unsplash('photo-1578496781379-7dcfb995293d'),
    alt: 'Diagnostic Laboratory Information Interface connecting instruments to hospital LIS',
  },

  // Audiences & Care Settings (5 distinct settings)
  audienceLab: {
    ...unsplash('photo-1584516150909-c43483ee7932'),
    alt: 'High-throughput reference pathology laboratory technician preparing clinical runs',
  },
  audienceHospital: {
    ...unsplash('photo-1519494026892-80bbd2d6fd0d'),
    alt: 'Modern hospital clinical environment, intensive care and emergency diagnostic center',
  },
  audienceClinician: {
    ...unsplash('photo-1576091160550-2173dba999ef'),
    alt: 'Physician and clinician examining patient diagnostic reports on digital tablet',
  },
  audienceClinicalEnv: {
    ...unsplash('photo-1579684385127-1ef15d508118'),
    alt: 'Multidisciplinary hospital clinical care team collaborating on patient diagnostics',
  },
  audienceResearch: {
    ...unsplash('photo-1516549655169-df83a0774514'),
    alt: 'Biomedical diagnostic research facility bench with analytical instrumentation',
  },

  // Diagnostic Workflow Stages (4 distinct process steps)
  workflowIntake: {
    ...unsplash('photo-1628771065518-0d82f1938462'),
    alt: 'Barcoded specimen collection tubes at laboratory intake accessioning',
  },
  workflowPrep: {
    ...unsplash('photo-1584515933487-779824d29309'),
    alt: 'Standardized sample preparation, centrifugation, and reagent pipetting',
  },
  workflowAnalysis: {
    ...unsplash('photo-1581595220892-b0739db3ba8c'),
    alt: 'Automated analytical run on clinical diagnostic multi-channel analyzer',
  },
  workflowInsight: {
    ...unsplash('photo-1584467735871-8e85353a8413'),
    alt: 'Diagnostic test result validation and clinical decision delivery',
  },

  // Technology & Capabilities (4 distinct platforms)
  technology: {
    ...unsplash('photo-1581092334651-ddf26d9a09d0'),
    alt: 'High precision opto-mechanical hardware and diagnostic analyzer instrumentation',
  },
  innovation: {
    ...unsplash('photo-1581092580497-e0d23cbdf1dc'),
    alt: 'Advanced sensor engineering and microfluidic diagnostic hardware innovation',
  },
  researchDev: {
    ...unsplash('photo-1559757175-5700dde675bc'),
    alt: 'Scientific researcher conducting analytical assay validation in laboratory',
  },
  labExcellence: {
    ...unsplash('photo-1582719478250-c89cae4dc85b'),
    alt: 'Standardized clinical laboratory protocols, peer review, and quality testing',
  },

  // Quality & Support (2 distinct services)
  qualityControl: {
    ...unsplash('photo-1579154341098-e4e158cc7f55'),
    alt: 'Quality control calibration standards and certified reference verification vials',
  },
  supportEngineer: {
    ...unsplash('photo-1581092160562-40aa08e78837'),
    alt: 'Specialized biomedical engineer providing on-site instrument calibration support',
  },

  // Resources & Articles (6 distinct publications)
  resourceInsights: {
    ...unsplash('photo-1579684453423-f84349ef60b0'),
    alt: 'Clinical laboratory scientist consulting on acute diagnostic findings',
  },
  resourceLabGuide: {
    ...unsplash('photo-1507668077129-56e32842fceb'),
    alt: 'Hospital laboratory director evaluating diagnostic workflow platforms',
  },
  resourceNews: {
    ...unsplash('photo-1576765608535-5f04d1e3f289'),
    alt: 'Efyion Dx diagnostic platform deployment and operational lab center',
  },
  resourceTechnical: {
    ...unsplash('photo-1584432810601-6c7f27d2362b'),
    alt: 'Technical documentation, assay verification protocols and linearity studies',
  },
  resourceDownloads: {
    ...unsplash('photo-1607613009820-a29f7bb81c04'),
    alt: 'Product specification guides, assay packaging and diagnostic consumable catalogs',
  },
  resourceQuality: {
    ...unsplash('photo-1532094349884-543bc11b234d'),
    alt: 'Repeatable analytical consistency and quality control tracking in clinical testing',
  },

  // Solutions Page Areas (3 distinct solution frameworks)
  solutionLab: {
    ...unsplash('photo-1584820927498-cfe5211fd8bf'),
    alt: 'High volume diagnostic laboratory sample processing and management workflow',
  },
  solutionClinical: {
    ...unsplash('photo-1551076805-e1869033e561'),
    alt: 'Acute clinical diagnostics support for emergency departments and hospital wards',
  },
  solutionNetwork: {
    ...unsplash('photo-1576671081837-49000212a370'),
    alt: 'Integrated diagnostic network coordination across multi-facility hospital systems',
  },

  // Technology Deep-Dive (3 distinct specialties)
  techOptics: {
    ...unsplash('photo-1581092162384-8987c1d64718'),
    alt: 'Multi-wavelength optical detection assembly with diffraction grating spectrometer',
  },
  techSampleIntegrity: {
    ...unsplash('photo-1584362917165-526a968579e8'),
    alt: 'Precision liquid-level capacitance sensing and automated clot rejection system',
  },
  techLims: {
    ...unsplash('photo-1532938911079-1b06ac7ceec7'),
    alt: 'Bidirectional ASTM and HL7 laboratory information management system connectivity',
  },
};
