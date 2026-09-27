/**
 * SOLUTIONS & AUDIENCES — EFYION DX
 * ------------------------------------------------------------------
 * Diagnostic settings, solution areas and diagnostic workflow frameworks.
 */
import {
  FlaskConical,
  Building2,
  Stethoscope,
  ClipboardPlus,
  Microscope,
  Workflow,
  LifeBuoy,
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
    name: 'Hospitals',
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
    name: 'Clinical Environments',
    icon: ClipboardPlus,
    image: images.audienceClinicalEnv,
    text: 'Outpatient clinics and diagnostic centers of every size need solutions appropriately scaled to their space, staffing, and test volume.',
  },
  {
    slug: 'research-facilities',
    name: 'Research & Laboratory Facilities',
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
    image: images.categoryLab,
    intro: 'Comprehensive workflow support for laboratories from sample intake through analytical testing to final result verification.',
    points: [
      'Instrumentation matched to laboratory throughput and specialty requirements',
      'Guidance on selecting compatible analysers, assay panels, and consumables',
      'Complete protocol documentation to support day-to-day laboratory operations',
    ],
  },
  {
    id: 'clinical',
    name: 'Clinical Diagnostics',
    icon: Stethoscope,
    image: images.categoryClinical,
    intro: 'Diagnostic support engineered for clinical teams requiring rapid, high-sensitivity results close to patient care.',
    points: [
      'Validated assay formats suited to hospital and acute care settings',
      'Optimized testing times that respect demanding clinical schedules',
      'Clear, actionable diagnostic data to assist multidisciplinary care teams',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare Organisation Solutions',
    icon: Building2,
    image: images.aboutFacility,
    intro: 'Strategic diagnostic partnerships for healthcare organizations operating across multi-facility networks.',
    points: [
      'Centralized point of contact for diagnostic supply and instrument maintenance',
      'Integrated planning across departments to reduce logistical fragmentation',
      'Scheduled reviews to adjust supply chains and platforms as clinical demands evolve',
    ],
  },
];

/** Diagnostic workflow — rendered as an engaging connected process on Home and Solutions. */
export const workflow = [
  {
    step: 'Identify',
    title: 'Needs Assessment',
    text: 'We assess your clinical setting, target test menus, expected daily volumes, and physical workflow constraints.',
  },
  {
    step: 'Select',
    title: 'Platform Matching',
    text: 'Together we evaluate compatible analysers, reagent configurations, and digital integrations best suited to your requirements.',
  },
  {
    step: 'Implement',
    title: 'Onboarding & Validation',
    text: 'We support verification runs, technician training, and LIS connectivity to ensure seamless operational cutover.',
  },
  {
    step: 'Support',
    title: 'Ongoing Technical Care',
    text: 'Continuous application assistance, proactive reagent logistics, and responsive troubleshooting keep testing uninterrupted.',
  },
];

export const supportArea = {
  name: 'Professional Diagnostic Support',
  icon: LifeBuoy,
  secondaryIcon: Workflow,
  image: images.supportEngineer,
  intro:
    'Reliable diagnostics requires more than quality equipment. Efyion Dx provides specialized technical and application guidance across every phase of implementation.',
  points: [
    {
      title: 'Pre-implementation consultation',
      text: 'Detailed workflow audits and technical guidance to match solutions to your exact laboratory environment.',
    },
    {
      title: 'Workflow onboarding & training',
      text: 'Structured procedural guidance to ensure laboratory technicians and operators are confident from day one.',
    },
    {
      title: 'Continuous technical advisory',
      text: 'Direct communication channels for protocol questions, calibration support, and ongoing operational reviews.',
    },
  ],
};
