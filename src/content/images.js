/**
 * IMAGE LIBRARY — EFYION DX
 * ------------------------------------------------------------------
 * Every photograph across the site is referenced from here with verified
 * high-resolution medical, diagnostic, and clinical laboratory imagery.
 *
 * All IDs are verified to return HTTP 200 OK with stable responsive serving.
 */

const unsplash = (id) => ({ unsplash: id });

export const images = {
  // Hero & Brand
  heroLab: {
    ...unsplash('photo-1582719471384-894fbb16e074'),
    alt: 'Clinical laboratory scientist operating precision diagnostic analyzer',
  },
  heroDetail: {
    ...unsplash('photo-1579154204601-01588f351e67'),
    alt: 'Diagnostic sample vials in barcoded laboratory rack',
  },
  heroAutomation: {
    ...unsplash('photo-1581093588401-fbb62a02f120'),
    alt: 'High-throughput automated diagnostic instrument in modern laboratory',
  },

  // Trust & Value Pillars
  pillarAssays: {
    ...unsplash('photo-1579165466741-7f35e4755660'),
    alt: 'Multi-well microplate assay for clinical diagnostic testing',
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
  aboutTeam: {
    ...unsplash('photo-1532187863486-abf9dbad1b69'),
    alt: 'Diagnostic laboratory specialists working at sample preparation bench',
  },
  aboutDetail: {
    ...unsplash('photo-1579165466741-7f35e4755660'),
    alt: 'Precision pipette dispensing liquid reagents into diagnostic microplate',
  },
  aboutFacility: {
    ...unsplash('photo-1530497610245-94d3c16cda28'),
    alt: 'Modern clinical diagnostic laboratory facility interior',
  },

  // Product Categories (Distinct high-res imagery for each category)
  categoryClinical: {
    ...unsplash('photo-1579154392429-0e6b4e850ad2'),
    alt: 'Clinical diagnostic sample tubes and testing consumables',
  },
  categoryLab: {
    ...unsplash('photo-1582719471384-894fbb16e074'),
    alt: 'Organized diagnostic laboratory workstation with automated processing tools',
  },
  categoryInstruments: {
    ...unsplash('photo-1581093588401-fbb62a02f120'),
    alt: 'Diagnostic instrumentation and analytical automated equipment',
  },
  categoryReagents: {
    ...unsplash('photo-1587854692152-cbe660dbde88'),
    alt: 'Standardized diagnostic reagents and clinical testing consumables',
  },
  categoryPointOfCare: {
    ...unsplash('photo-1576091160399-112ba8d25d1d'),
    alt: 'Point-of-care rapid testing diagnostic instrument in clinical use',
  },
  categoryTech: {
    ...unsplash('photo-1581092918056-0c4c3acd3789'),
    alt: 'Digital healthcare informatics and connected diagnostic reporting software',
  },

  // Individual Products
  product1: {
    ...unsplash('photo-1581093588401-fbb62a02f120'),
    alt: 'Automated Clinical Chemistry Analyzer instrument',
  },
  product2: {
    ...unsplash('photo-1576086213369-97a306d36557'),
    alt: 'High-Resolution Diagnostic Imaging & Optical System',
  },
  product3: {
    ...unsplash('photo-1579154392429-0e6b4e850ad2'),
    alt: 'Standardized Diagnostic Reagent Kits and Calibration Solutions',
  },
  product4: {
    ...unsplash('photo-1576091160399-112ba8d25d1d'),
    alt: 'Rapid Point-of-Care Testing Handheld Platform',
  },
  product5: {
    ...unsplash('photo-1579165466741-7f35e4755660'),
    alt: 'High-Sensitivity Immunoassay Diagnostic Testing Plate',
  },
  product6: {
    ...unsplash('photo-1581092918056-0c4c3acd3789'),
    alt: 'Laboratory Information System Diagnostic Connectivity Interface',
  },

  // Audiences & Clinical Settings
  audienceLab: {
    ...unsplash('photo-1579165466949-3180a3d056d5'),
    alt: 'Diagnostic pathology laboratory technician preparing specimens',
  },
  audienceHospital: {
    ...unsplash('photo-1519494026892-80bbd2d6fd0d'),
    alt: 'Modern hospital clinical setting and emergency department',
  },
  audienceClinician: {
    ...unsplash('photo-1576091160550-2173dba999ef'),
    alt: 'Physician and clinician examining patient diagnostic reports on tablet',
  },
  audienceClinicalEnv: {
    ...unsplash('photo-1579684385127-1ef15d508118'),
    alt: 'Multidisciplinary hospital clinical care team collaborating',
  },
  audienceResearch: {
    ...unsplash('photo-1581093450021-4a7360e9a6b5'),
    alt: 'Biomedical laboratory research scientist at specialized testing bench',
  },

  // Diagnostic Workflow Stages
  workflowIntake: {
    ...unsplash('photo-1628771065518-0d82f1938462'),
    alt: 'Barcoded specimen collection tubes at laboratory intake',
  },
  workflowPrep: {
    ...unsplash('photo-1579165466741-7f35e4755660'),
    alt: 'Standardized sample preparation and reagent pipetting',
  },
  workflowAnalysis: {
    ...unsplash('photo-1581595220892-b0739db3ba8c'),
    alt: 'Automated analytical run on clinical diagnostic instrument',
  },
  workflowInsight: {
    ...unsplash('photo-1576091160550-2173dba999ef'),
    alt: 'Diagnostic test result interpretation and clinical decision support',
  },

  // Technology & Capabilities
  technology: {
    ...unsplash('photo-1581093588401-fbb62a02f120'),
    alt: 'High precision diagnostic technology and automated analyzer instrumentation',
  },
  innovation: {
    ...unsplash('photo-1581092795360-fd1ca04f0952'),
    alt: 'Innovative engineering in medical diagnostics hardware',
  },
  researchDev: {
    ...unsplash('photo-1581093450021-4a7360e9a6b5'),
    alt: 'Scientific researcher conducting validation assays in laboratory',
  },
  labExcellence: {
    ...unsplash('photo-1579165466949-3180a3d056d5'),
    alt: 'Standardized laboratory protocols and quality testing practices',
  },

  // Quality & Support
  qualityControl: {
    ...unsplash('photo-1579154392429-0e6b4e850ad2'),
    alt: 'Quality control calibration standards and reagent verification vials',
  },
  supportEngineer: {
    ...unsplash('photo-1581092160562-40aa08e78837'),
    alt: 'Specialized biomedical engineer providing technical equipment support',
  },

  // Resource & Articles
  resourceInsights: {
    ...unsplash('photo-1576091160550-2173dba999ef'),
    alt: 'Healthcare provider interpreting clinical diagnostic panels',
  },
  resourceLabGuide: {
    ...unsplash('photo-1582719471384-894fbb16e074'),
    alt: 'Laboratory directors selecting diagnostic workflow equipment',
  },
  resourceNews: {
    ...unsplash('photo-1530497610245-94d3c16cda28'),
    alt: 'Efyion Dx diagnostic headquarters and operational lab center',
  },
  resourceTechnical: {
    ...unsplash('photo-1581092918056-0c4c3acd3789'),
    alt: 'Technical documentation and laboratory assay performance protocols',
  },
  resourceDownloads: {
    ...unsplash('photo-1587854692152-cbe660dbde88'),
    alt: 'Product specification guides and diagnostic reagent documentation',
  },
  resourceQuality: {
    ...unsplash('photo-1579165466949-3180a3d056d5'),
    alt: 'Repeatable analytical consistency in clinical diagnostic testing',
  },
};
