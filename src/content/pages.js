/**
 * PAGE COPY
 * ------------------------------------------------------------------
 * DRAFT wording for Home, About and Technology. It deliberately avoids
 * facts that have not been confirmed (dates, numbers, certifications,
 * performance claims). Edit freely — layout components read from here.
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
} from 'lucide-react';
import { images } from './images';

export const home = {
  hero: {
    titleLines: ['Precision Diagnostics.', 'Better Outcomes.'],
    text: 'Advancing diagnostic possibilities through precision, technology and thoughtful healthcare solutions.',
    primary: { label: 'Explore solutions', to: '/solutions' },
    secondary: { label: 'Get in touch', to: '/contact' },
    image: images.heroLab,
    detailImage: images.heroDetail,
  },
  about: {
    title: 'About Efyion Dx',
    lead: 'Efyion Dx is focused on precision diagnostics and healthcare-oriented solutions.',
    body: 'We believe good healthcare decisions start with dependable diagnostic information. Our work brings together careful product selection, practical technology and attentive support for the laboratories, hospitals and professionals we serve.',
    cta: { label: 'Discover Efyion Dx', to: '/about' },
    image: images.aboutTeam,
    detailImage: images.aboutDetail,
  },
  why: {
    title: 'Why Efyion Dx',
    text: 'The principles that guide how we choose, deliver and support every solution.',
    items: [
      { icon: Crosshair, title: 'Precision', text: 'We treat accuracy and attention to detail as the starting point, not an extra.' },
      { icon: Sparkles, title: 'Innovation', text: 'We look for better ways to solve diagnostic problems, and adopt them thoughtfully.' },
      { icon: ShieldCheck, title: 'Quality focus', text: 'Quality is built into how we select, document and deliver our solutions.' },
      { icon: Layers, title: 'Reliable solutions', text: 'We aim for solutions laboratories and clinicians can plan their work around.' },
      { icon: Headset, title: 'Customer support', text: 'We stay available before, during and after every implementation.' },
    ],
  },
  technology: {
    title: 'Technology Driven. Precision Focused.',
    text: 'Technology is only useful when it makes diagnostic work clearer, faster or more consistent. That is the test we apply to every solution we bring to our customers.',
    points: ['Thoughtfully selected diagnostic technology', 'Solutions designed around real laboratory workflows', 'Continuous review as technology evolves'],
    cta: { label: 'Explore technology', to: '/technology' },
    image: images.technology,
  },
  cta: {
    title: 'Let’s move diagnostics forward.',
    text: 'Connect with Efyion Dx to learn more about our solutions.',
    button: { label: 'Contact us', to: '/contact' },
  },
};

export const homeResources = [
  { title: 'Insights', text: 'Perspectives on diagnostics and healthcare.', to: '/resources?category=insights', icon: Lightbulb },
  { title: 'Technical Resources', text: 'Documentation and technical guidance.', to: '/resources?category=technical', icon: Cpu },
  { title: 'Product Information', text: 'Browse the Efyion Dx catalogue.', to: '/products', icon: FlaskRound },
  { title: 'FAQs', text: 'Answers to common questions.', to: '/resources?category=faqs', icon: Users },
  { title: 'News & Updates', text: 'The latest from Efyion Dx.', to: '/resources?category=news', icon: Sparkles },
];

export const about = {
  hero: {
    title: 'Diagnostics built on care and precision',
    text: 'Efyion Dx exists to help healthcare teams make decisions with confidence, through precise diagnostics and thoughtful support.',
    image: images.aboutTeam,
  },
  intro: {
    title: 'About Efyion Dx',
    paragraphs: [
      'Efyion Dx is a diagnostics company focused on precision and on the outcomes that precision makes possible.',
      'Our approach is simple: understand the needs of each laboratory, hospital and clinician, bring them solutions that fit, and stay with them afterwards.',
    ],
    image: images.microscope,
  },
  /** Company facts — leave value empty and the row shows "To be added". */
  profile: [
    { label: 'Established', value: '' },
    { label: 'Headquarters', value: '' },
    { label: 'Areas served', value: '' },
  ],
  vision: {
    icon: Eye,
    title: 'Our vision',
    text: 'A healthcare system where every diagnostic decision rests on clear, dependable information.',
  },
  mission: {
    icon: Target,
    title: 'Our mission',
    text: 'To provide precise, practical diagnostic solutions and the support that helps healthcare teams use them well.',
  },
  values: [
    { icon: Crosshair, title: 'Precision', text: 'Getting the details right, every time.' },
    { icon: Scale, title: 'Integrity', text: 'Saying what we can do, and doing what we say.' },
    { icon: Users, title: 'Partnership', text: 'Working alongside our customers, not just supplying them.' },
    { icon: Lightbulb, title: 'Curiosity', text: 'Always asking how diagnostics could work better.' },
  ],
  approach: {
    title: 'Our approach',
    text: 'Every engagement follows the same path: understand the need, choose the right solution, implement it carefully and support it for the long term.',
  },
  technology: {
    title: 'Technology & innovation',
    text: 'We follow developments in diagnostic technology closely and adopt new approaches where they genuinely improve how testing is done.',
    image: images.technology,
    cta: { label: 'Explore technology', to: '/technology' },
  },
  quality: {
    title: 'Quality focus',
    text: 'Quality shapes how we select solutions, prepare documentation and support our customers. Details of our quality framework will be published here.',
    image: images.samples,
  },
};

export const technology = {
  hero: {
    title: 'Technology & quality',
    text: 'How we think about the technology behind our solutions, and the standards we hold ourselves to.',
    image: images.microscope,
  },
  sections: [
    {
      id: 'technology',
      icon: Cpu,
      title: 'Technology',
      text: 'We evaluate diagnostic technology by one measure: whether it makes results clearer, workflows smoother or testing more consistent for the people who use it.',
      image: images.technology,
    },
    {
      id: 'innovation',
      icon: Sparkles,
      title: 'Innovation',
      text: 'Innovation means solving real problems. We listen to laboratories and clinicians first, then look for the approaches that address what they actually need.',
      image: images.engineer,
    },
    {
      id: 'research',
      icon: Microscope,
      title: 'Research & development',
      text: 'Information about Efyion Dx research and development activities will be shared here.',
      image: images.research,
    },
    {
      id: 'laboratory-excellence',
      icon: FlaskRound,
      title: 'Laboratory excellence',
      text: 'Well-run laboratories depend on good processes as much as good products. We aim to support both, through solutions and guidance suited to each setting.',
      image: images.pipetteWork,
    },
  ],
  quality: {
    icon: BadgeCheck,
    title: 'Quality focus',
    text: 'Quality is part of every stage of our work, from selecting solutions to supporting customers after implementation.',
    principles: [
      'Careful evaluation before any solution is offered',
      'Clear, accurate documentation',
      'Traceable communication with customers',
      'Continuous review and improvement',
    ],
    /**
     * CERTIFICATIONS — add only confirmed, verifiable certifications, e.g.
     * { name: 'ISO 13485:2016', text: 'Issued by …', href: '/downloads/certificate.pdf' }
     * While empty, a neutral note is shown instead.
     */
    certifications: [],
  },
};
