import { ALL_CAMERAS } from 'utils/constants';

export const CURIOSITY_CAMERAS = [
  { value: 'FHAZ', name: 'FHAZ', fullName: 'Front Hazard Avoidance Camera' },
  { value: 'RHAZ', name: 'RHAZ', fullName: 'Rear Hazard Avoidance Camera' },
  { value: 'MAST', name: 'MAST', fullName: 'Mast Camera' },
  { value: 'CHEMCA', name: 'CHEMCA', fullName: 'Chemistry and Camera Complex' },
  { value: 'MAHLI', name: 'MAHLI', fullName: 'Mars Hand Lens Imager	' },
  { value: 'MARDI', name: 'MARDI', fullName: 'Mars Descent Imager	' },
  { value: 'NAVCAM', name: 'NAVCAM', fullName: 'Navigation Camera' },
  ...ALL_CAMERAS,
];

export const OPPORTUNITY_SPIRIT_CAMERAS = [
  { value: 'FHAZ', name: 'FHAZ', fullName: 'Front Hazard Avoidance Camera' },
  { value: 'RHAZ	', name: 'RHAZ	', fullName: 'Rear Hazard Avoidance Camera' },
  { value: 'NAVCAM', name: 'NAVCAM', fullName: 'Navigation Camera' },
  { value: 'PANCAM', name: 'PANCAM', fullName: 'Panoramic Camera' },
  { value: 'MINITE', name: 'MINITE', fullName: 'Miniature Thermal Emission Spectrometer (Mini-TES)' },
  ...ALL_CAMERAS,
];
