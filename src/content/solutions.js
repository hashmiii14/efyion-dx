/**
 * SOLUTIONS & AUDIENCES — EFYION DX
 * ------------------------------------------------------------------
 * Diagnostic settings, solution areas and diagnostic workflow frameworks.
 * All image references are 100% unique across the entire library.
 */
import {
  FlaskConical,
  Building2,
  Stethoscope,
  ClipboardPlus,
  Microscope,
  Workflow,
  LifeBuoy,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
} from 'lucide-react';
import { images } from './images.js';

/** Who Efyion Dx serves — used on Home (interactive tabs) and Solutions. */
export const audiences = [
  {
    slug: 'diagnostic-laboratories',
    name: 'Diagnostic Laboratories',
    icon: FlaskConical,
    image: images.audienceLab,
    text: 'Laboratories need testing they can plan around: consistent supply, clear documentation and responsive support when questions arise.',
  },
  {
    slug: 'hospitals',
    name: 'Hospitals & Health Networks',
    icon: Building2,
    image: images.audienceHospital,
    text: 'Hospital teams balance speed, volume and patient care. Diagnostic solutions must fit that pace seamlessly rather than add to operational overhead.',
  },
  {
    slug: 'healthcare-professionals',
    name: 'Healthcare Professionals',
    icon: Stethoscope,
    image: images.audienceClinician,
    text: 'Clinicians rely on diagnostic information to make confident care decisions. Our focus is on making that information clear, dependable, and timely.',
  },
  {
    slug: 'clinical-environments',
    name: 'Clinical Environments & Outpatient',
    icon: ClipboardPlus,
    image: images.audienceClinicalEnv,
    text: 'Outpatient clinics and diagnostic centers of every size need solutions appropriately scaled to their space, staffing, and test volume.',
  },
  {
    slug: 'research-facilities',
    name: 'Research & Biomedical Facilities',
    icon: Microscope,
    image: images.audienceResearch,
    text: 'Research and academic environments ask demanding analytical questions. We support them with flexible platforms and responsive technical collaboration.',
  },
];

/** Solution areas — the main sections of the Solutions page. */
export const solutionAreas = [
  {
    id: 'laboratory',
    name: 'Laboratory Solutions',
    icon: FlaskConical,
    image: images.solutionLab,
    intro: 'Comprehensive workflow support for clinical laboratories from sample intake through analytical testing to final result verification.',
    points: [
      'Instrumentation matched to laboratory throughput, staffing, and specialty requirements',
      'Guidance on selecting compatible analysers, assay panels, calibrators, and consumables',
      'Complete protocol documentation to support day-to-day laboratory operations and audit compliance',
    ],
    specialties: ['Clinical Chemistry', 'Immunoassay Diagnostics', 'Hematology 5-Part Diff', 'Molecular PCR'],
  },
  {
    id: 'clinical',
    name: 'Clinical Diagnostics',
    icon: Stethoscope,
    image: images.solutionClinical,
    intro: 'Diagnostic support engineered for acute clinical care teams requiring rapid, high-sensitivity results close to patient decision points.',
    points: [
      'Validated assay formats suited to hospital emergency, critical care, and urgent care departments',
      'Optimized testing turnaround times that respect demanding clinical schedules',
      'Clear, actionable diagnostic data to assist multidisciplinary care teams in treatment planning',
    ],
    specialties: ['Cardiac Markers & Troponin', 'Metabolic & Electrolyte Panels', 'Infectious Disease', 'Renal Profiles'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare Organisation Solutions',
    icon: Building2,
    image: images.solutionNetwork,
    intro: 'Strategic diagnostic partnerships for healthcare networks operating across multi-facility regional hospital systems.',
    points: [
      'Centralized point of contact for diagnostic supply, calibration contracts, and instrument maintenance',
      'Integrated planning across departments to reduce logistical fragmentation and waste',
      'Scheduled reviews to adjust supply chains and platforms as clinical demands evolve',
    ],
    specialties: ['Standardized Multi-Site Menus', 'Centralized LIS Middleware', 'Bulk Reagent Logistics', 'SLA Support'],
  },
];

/** Diagnostic workflow — rendered as an engaging connected process on Home and Solutions. */
export const workflow = [
  {
    step: 'Identify',
    title: 'Needs Assessment',
    text: 'We assess your clinical setting, target test menus, expected daily volumes, and physical workflow constraints.',
    icon: Activity,
  },
  {
    step: 'Select',
    title: 'Platform Matching',
    text: 'Together we evaluate compatible analysers, reagent configurations, and digital integrations best suited to your requirements.',
    icon: Layers,
  },
  {
    step: 'Implement',
    title: 'Onboarding & Validation',
    text: 'We support verification runs, technician training, and LIS connectivity to ensure seamless operational cutover.',
    icon: Zap,
  },
  {
    step: 'Support',
    title: 'Ongoing Technical Care',
    text: 'Continuous application assistance, proactive reagent logistics, and responsive troubleshooting keep testing uninterrupted.',
    icon: ShieldCheck,
  },
];

export const supportArea = {
  name: 'Professional Diagnostic Support & Advisory',
  icon: LifeBuoy,
  secondaryIcon: Workflow,
  image: images.supportEngineer,
  intro:
    'Reliable diagnostics requires more than quality equipment. Efyion Dx provides specialized technical and application guidance across every phase of implementation.',
  points: [
    {
      title: 'Pre-implementation consultation',
      text: 'Detailed workflow audits and technical guidance to match solutions to your exact laboratory environment and volume requirements.',
    },
    {
      title: 'Workflow onboarding & operator training',
      text: 'Structured procedural guidance to ensure laboratory technicians and operators are fully certified and confident from day one.',
    },
    {
      title: 'Continuous technical advisory & calibration support',
      text: 'Direct communication channels for protocol questions, calibration support, routine maintenance, and ongoing operational reviews.',
    },
  ],
};
