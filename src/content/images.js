/**
 * IMAGE LIBRARY
 * ------------------------------------------------------------------
 * Every photograph on the site is referenced from here, so swapping
 * imagery is a one-file job.
 *
 * Current images are placeholders served from Unsplash (free to use
 * under the Unsplash License). Before launch, replace them with
 * Efyion Dx's own photography, or download your chosen images into
 * /public/images and use a local path, e.g. { src: '/images/lab.jpg' }.
 *
 * If an image ever fails to load, <SmartImage> shows a branded
 * placeholder instead of a broken image.
 */

const unsplash = (id) => ({ unsplash: id });

export const images = {
  heroLab: { ...unsplash('photo-1582719471384-894fbb16e074'), alt: 'Laboratory scientist examining sample tubes' },
  heroDetail: { ...unsplash('photo-1579154204601-01588f351e67'), alt: 'Close-up of sample tubes held in a gloved hand' },
  aboutTeam: { ...unsplash('photo-1532187863486-abf9dbad1b69'), alt: 'Scientist working with a pipette in a laboratory' },
  aboutDetail: { ...unsplash('photo-1579165466741-7f35e4755660'), alt: 'Pipette dispensing into a sample plate' },
  microscope: { ...unsplash('photo-1576086213369-97a306d36557'), alt: 'Microscope in a laboratory under blue light' },
  technology: { ...unsplash('photo-1581093588401-fbb62a02f120'), alt: 'Researcher operating laboratory equipment' },
  samples: { ...unsplash('photo-1579154392429-0e6b4e850ad2'), alt: 'Rows of laboratory sample containers' },
  clinician: { ...unsplash('photo-1576091160550-2173dba999ef'), alt: 'Healthcare professional reviewing information on a tablet' },
  clinicianTablet: { ...unsplash('photo-1576091160399-112ba8d25d1d'), alt: 'Clinician using a digital device' },
  hospital: { ...unsplash('photo-1519494026892-80bbd2d6fd0d'), alt: 'Modern hospital room' },
  hospitalTeam: { ...unsplash('photo-1579684385127-1ef15d508118'), alt: 'Clinical team in a hospital environment' },
  research: { ...unsplash('photo-1581093450021-4a7360e9a6b5'), alt: 'Scientist conducting research at a lab bench' },
  analysis: { ...unsplash('photo-1581092918056-0c4c3acd3789'), alt: 'Technician reviewing data in a laboratory' },
  pipetteWork: { ...unsplash('photo-1579165466949-3180a3d056d5'), alt: 'Laboratory sample preparation' },
  engineer: { ...unsplash('photo-1581092160562-40aa08e78837'), alt: 'Engineer working with scientific equipment' },
};
