/**
 * Static images copied from `.original-site` — organized by page route under `src/assets/pages/`.
 * Import URLs here so Vite bundles hashes filenames in production.
 */

import siteLogo from './pages/site/logo.png';
import flagFr from './pages/site/flag-fr.png';
import flagUk from './pages/site/flag-uk.png';

import homeCarousel01 from './pages/home/carousel-01.jpg';
import homeEventSectionBg from './pages/home/event-section-bg.jpg';

import blogConsortium from './pages/actualites/consortium.webp';
import blogEmdr from './pages/actualites/emdr.webp';
import blogColloque from './pages/actualites/colloque.webp';
import blogSynergie from './pages/actualites/synergie.webp';
import blogAssemblee from './pages/actualites/assemblee.webp';
import blogDiviser from './pages/actualites/diviser.webp';

import equipeJeanPierre from './pages/notre-equipe/jean-pierre.jpg';
import equipeSvetlana from './pages/notre-equipe/svetlana.png';
import equipeTernovy from './pages/notre-equipe/ternovy.jpg';
import equipeAlain from './pages/notre-equipe/alain-founder.png';
import equipeOksana from './pages/notre-equipe/oksana.png';
import equipeLarissa from './pages/notre-equipe/larissa.png';
import equipeGertrude from './pages/notre-equipe/gertrude.png';
import equipeSergei from './pages/notre-equipe/sergei.png';
import equipeYana from './pages/notre-equipe/yana.png';

import partHerault from './pages/partenaires/herault.webp';
import partMonts from './pages/partenaires/monts.png';
import partEmdr from './pages/partenaires/emdr.jpg';
import partAuFilDesArts from './pages/partenaires/aufildesarts.png';
import partLesApres from './pages/partenaires/lesapres.png';
import partSolidarite from './pages/partenaires/solidarite.png';
import partPasserelles from './pages/partenaires/passerelles.png';
import partDanone from './pages/partenaires/danone.png';
import partCreditAgricole from './pages/partenaires/credit-agricole.png';
import partMaped from './pages/partenaires/maped.png';

import presseUkraineJeune from './pages/presse/ukraine-jeune.png';
import presseHeraultTribune from './pages/presse/herault-tribune.png';
import presseRadioSalvetat from './pages/presse/radio-salvetat.jpg';
import presseMidiLibre from './pages/presse/midi-libre.jpg';

export const site = {
  logo: siteLogo,
  flagFr,
  flagUk,
};

export const home = {
  carousel: [homeCarousel01, blogConsortium, blogEmdr, blogColloque, blogSynergie, blogDiviser],
  eventSectionBackground: homeEventSectionBg,
  eventFeaturedImage: homeCarousel01,
};

export const actualites = {
  consortium: blogConsortium,
  emdr: blogEmdr,
  colloque: blogColloque,
  synergie: blogSynergie,
  assemblee: blogAssemblee,
  diviser: blogDiviser,
};

export const notreEquipe = {
  'jean-pierre': equipeJeanPierre,
  svetlana: equipeSvetlana,
  ternovy: equipeTernovy,
  'alain-founder': equipeAlain,
  oksana: equipeOksana,
  larissa: equipeLarissa,
  gertrude: equipeGertrude,
  sergei: equipeSergei,
  yana: equipeYana,
};

export const partenaires = {
  herault: partHerault,
  monts: partMonts,
  emdr: partEmdr,
  aufildesarts: partAuFilDesArts,
  lesapres: partLesApres,
  solidarite: partSolidarite,
  passerelles: partPasserelles,
  danone: partDanone,
  'credit-agricole': partCreditAgricole,
  maped: partMaped,
};

export const presse = {
  'ukraine-jeune': presseUkraineJeune,
  'herault-tribune': presseHeraultTribune,
  'radio-salvetat': presseRadioSalvetat,
  'midi-libre': presseMidiLibre,
};
