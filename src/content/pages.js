/**
 * PAGE COPY — EFYION DX
 * ------------------------------------------------------------------
 * Professional copy for Home, About and Technology.
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
    title: 'Precision at the Center of Diagnostic Care',
    lead: 'Efyion Dx focuses on delivering dependable diagnostic information to support timely clinical decisions.',
    body: 'We recognize that healthcare decisions begin with accurate laboratory findings. Our portfolio unites carefully selected diagnostic analysers, standardized reagent systems, and attentive application support so laboratories and clinicians can work with complete confidence.',
    cta: { label: 'Learn more about Efyion Dx', to: '/about' },
    image: images.aboutTeam,
    detailImage: images.aboutDetail,
    highlights: [
      'Tailored instrumentation matching laboratory volume and staffing',
      'Standardized liquid-stable reagents minimizing prep overhead',
      'Direct, knowledgeable technical support throughout every phase',
    ],
  },

  why: {
    title: 'The Principles Guiding Efyion Dx',
    text: 'Every instrument, reagent system, and consultation is governed by four core operating standards.',
    items: [
      {
        icon: Crosshair,
        title: 'Analytical Rigor',
        text: 'Accuracy and repeatability are non-negotiable. We treat precision as the fundamental baseline for every solution.',
      },
      {
        icon: Sparkles,
        title: 'Workflow-Centric Innovation',
        text: 'We focus on technologies that genuinely alleviate laboratory bottlenecks, accelerate turnaround, and reduce manual error.',
      },
      {
        icon: ShieldCheck,
        title: 'Documented Quality',
        text: 'From reagent stability to electronic audit trails, our solutions emphasize complete traceability and regulatory alignment.',
      },
      {
        icon: Layers,
        title: 'Operational Dependability',
        text: 'We deliver platforms and consumables that high-volume laboratories can build their daily shift schedules around.',
      },
      {
        icon: Headset,
        title: 'Direct Technical Support',
        text: 'You connect directly with experienced application specialists who understand laboratory science and equipment operations.',
      },
    ],
  },

  technology: {
    title: 'Advanced Diagnostic Instrumentation & Informatics',
    text: 'Modern clinical care demands testing platforms that combine high throughput with intuitive operation. Efyion Dx bridges analytical hardware with digital laboratory connectivity.',
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
    image: images.aboutTeam,
  },
  intro: {
    title: 'About Efyion Dx',
    paragraphs: [
      'Efyion Dx is a specialized diagnostics company committed to elevating the standard of laboratory testing through reliable technology, standardized consumables, and attentive technical collaboration.',
      'Our approach centers on close partnership: understanding the specific throughput, spatial, and analytical requirements of each clinical setting, implementing tailored platforms, and standing behind them with responsive support.',
    ],
    image: images.aboutFacility,
  },
  profile: [
    { label: 'Operating Focus', value: 'Clinical In Vitro Diagnostics' },
    { label: 'Core Segments', value: 'Laboratories, Hospitals, Point-of-Care' },
    { label: 'Technical Advisory', value: 'Pre & Post Implementation Support' },
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
    image: images.pillarMicroscopy,
  },
  sections: [
    {
      id: 'technology',
      icon: Cpu,
      title: 'Diagnostic Instrumentation',
      text: 'We evaluate diagnostic hardware based on analytical reproducibility, walk-away capacity, minimal sample requirement, and user-friendly interface design.',
      image: images.technology,
    },
    {
      id: 'innovation',
      icon: Sparkles,
      title: 'Workflow Innovation',
      text: 'True innovation solves concrete laboratory pain points: reducing manual preparation steps, preventing clerical reporting errors, and speeding critical result reporting.',
      image: images.innovation,
    },
    {
      id: 'research',
      icon: Microscope,
      title: 'Analytical Verification & Validation',
      text: 'Every assay platform undergoes thorough verification for analytical linearity, precision limits, and matrix compatibility prior to client deployment.',
      image: images.researchDev,
    },
    {
      id: 'laboratory-excellence',
      icon: FlaskRound,
      title: 'Laboratory Operational Excellence',
      text: 'Optimized diagnostics combines reliable hardware with structured operational protocols. We provide comprehensive standard operating procedure (SOP) guidance.',
      image: images.labExcellence,
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
