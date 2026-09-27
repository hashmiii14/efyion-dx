/**
 * SOLUTIONS & AUDIENCES
 * ------------------------------------------------------------------
 * DRAFT copy — general descriptions that make no product or performance
 * claims. Review and replace with confirmed Efyion Dx offerings.
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
import { images } from './images';

/** Who Efyion Dx serves — used on Home (interactive tabs) and Solutions. */
export const audiences = [
  {
    slug: 'diagnostic-laboratories',
    name: 'Diagnostic Laboratories',
    icon: FlaskConical,
    image: images.pipetteWork,
    text: 'Laboratories need testing they can plan around: consistent supply, clear documentation and support when something needs attention.',
  },
  {
    slug: 'hospitals',
    name: 'Hospitals',
    icon: Building2,
    image: images.hospital,
    text: 'Hospital teams balance speed, volume and patient care. Diagnostic solutions should fit that pace rather than add to it.',
  },
  {
    slug: 'healthcare-professionals',
    name: 'Healthcare Professionals',
    icon: Stethoscope,
    image: images.clinician,
    text: 'Clinicians rely on diagnostic information to decide what happens next. Our focus is on making that information dependable and clear.',
  },
  {
    slug: 'clinical-environments',
    name: 'Clinical Environments',
    icon: ClipboardPlus,
    image: images.hospitalTeam,
    text: 'Clinics and care settings of every size need solutions sized to their space, staff and testing needs.',
  },
  {
    slug: 'research-facilities',
    name: 'Research & Laboratory Facilities',
    icon: Microscope,
    image: images.research,
    text: 'Research environments ask different questions. We aim to support them with flexible tools and responsive collaboration.',
  },
];

/** Solution areas — the main sections of the Solutions page. */
export const solutionAreas = [
  {
    id: 'laboratory',
    name: 'Laboratory Solutions',
    icon: FlaskConical,
    image: images.aboutTeam,
    intro: 'Support for laboratories from sample preparation through to reporting.',
    points: [
      'Solutions matched to laboratory size and testing volume',
      'Guidance on selecting the right instruments and consumables',
      'Documentation to support day-to-day laboratory work',
    ],
  },
  {
    id: 'clinical',
    name: 'Clinical Solutions',
    icon: Stethoscope,
    image: images.clinicianTablet,
    intro: 'Diagnostic support for clinical teams working close to the patient.',
    points: [
      'Testing options suited to clinical settings',
      'Practical formats that respect clinical time',
      'Clear information to support decision making',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare Solutions',
    icon: Building2,
    image: images.hospital,
    intro: 'Working with healthcare organisations on diagnostic needs across departments.',
    points: [
      'A single point of contact for diagnostic requirements',
      'Solutions planned around the whole organisation',
      'Ongoing review as needs change',
    ],
  },
];

/** Diagnostic workflow — rendered as a diagram on Home and Solutions. */
export const workflow = [
  { step: 'Identify', text: 'We start by understanding your setting, testing needs and constraints.' },
  { step: 'Select', text: 'Together we choose the solutions that fit, with clear information on each.' },
  { step: 'Implement', text: 'We help bring solutions into your workflow with as little disruption as possible.' },
  { step: 'Support', text: 'We stay involved after implementation, with guidance whenever it is needed.' },
];

export const supportArea = {
  name: 'Professional Support',
  icon: LifeBuoy,
  secondaryIcon: Workflow,
  image: images.engineer,
  intro:
    'Good diagnostics depends on more than the product. Support covers the questions that come before, during and after a solution is in place.',
  points: [
    { title: 'Pre-purchase guidance', text: 'Help understanding which options suit your requirements.' },
    { title: 'Onboarding', text: 'Assistance getting teams started with new solutions.' },
    { title: 'Ongoing assistance', text: 'A clear route for questions once you are up and running.' },
  ],
};
