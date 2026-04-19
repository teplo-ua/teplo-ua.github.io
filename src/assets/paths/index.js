/**
 * Static images copied from `.original-site` — organized by page route under `src/assets/pages/`.
 * Import URLs here so Vite bundles hashes filenames in production.
 */

import siteLogo from '../pages/site/logo.png';
import flagFr from '../pages/site/flag-fr.png';
import flagUk from '../pages/site/flag-uk.png';

import homeEventSectionBg from '../pages/home/event-section-bg.jpg';

import blogConsortium from '../pages/actualites/consortium.webp';
import blogEmdr from '../pages/actualites/emdr.webp';
import blogColloque from '../pages/actualites/colloque.webp';
import blogSynergie from '../pages/actualites/synergie.webp';
import blogAssemblee from '../pages/actualites/assemblee.webp';
import blogDiviser from '../pages/actualites/diviser.webp';

import equipeJeanPierre from '../pages/notre-equipe/jean-pierre.jpg';
import equipeSvetlana from '../pages/notre-equipe/svetlana.png';
import equipeTernovy from '../pages/notre-equipe/ternovy.jpg';
import equipeAlain from '../pages/notre-equipe/alain-founder.png';
import equipeOksana from '../pages/notre-equipe/oksana.png';
import equipeLarissa from '../pages/notre-equipe/larissa.png';
import equipeGertrude from '../pages/notre-equipe/gertrude.png';
import equipeSergei from '../pages/notre-equipe/sergei.png';
import equipeYana from '../pages/notre-equipe/yana.png';

import partHerault from '../pages/partenaires/herault.webp';
import partMonts from '../pages/partenaires/monts.png';
import partEmdr from '../pages/partenaires/emdr.jpg';
import partAuFilDesArts from '../pages/partenaires/aufildesarts.png';
import partLesApres from '../pages/partenaires/lesapres.png';
import partSolidarite from '../pages/partenaires/solidarite.png';
import partPasserelles from '../pages/partenaires/passerelles.png';
import partDanone from '../pages/partenaires/danone.png';
import partCreditAgricole from '../pages/partenaires/credit-agricole.png';
import partMaped from '../pages/partenaires/maped.png';

import presseUkraineJeune from '../pages/presse/ukraine-jeune.png';
import presseHeraultTribune from '../pages/presse/herault-tribune.png';
import presseRadioSalvetat from '../pages/presse/radio-salvetat.jpg';
import presseMidiLibre from '../pages/presse/midi-libre.jpg';

import prRealisesResidence from '../pages/projets-realises/artres22anons.jpg';
import prRealisesConference from '../pages/projets-realises/karim.jpg';

import prActuelJardins from '../pages/projets-actuel/group-young-volunteers-park-they-are-plantin.jpg';
import prActuelCommunaute from '../pages/projets-actuel/14568791609_f3ea8c95f4_z.jpg';

import prPrevuHelp from '../pages/projets-prevu/iluha-zavaley-c3I2gi0pGzg-unsplash.jpg';
import prPrevuArboretums from '../pages/projets-prevu/toa-heftiba-_UIVmIBB3JU-unsplash.jpg';
import prPrevuApprentissage from '../pages/projets-prevu/photo_2022-08-29_10-05-52.jpg';

const homeCarouselModules = import.meta.glob('../pages/home/carousel/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const homeCarouselSlides = Object.keys(homeCarouselModules)
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true }))
  .map((key) => homeCarouselModules[key]);

export const site = {
  logo: siteLogo,
  flagFr,
  flagUk,
};

export const home = {
  carousel: homeCarouselSlides,
  eventSectionBackground: homeEventSectionBg,
  eventFeaturedImage: homeCarouselSlides[0] ?? blogColloque,
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

/** Project section images — order matches `projetsRealises.projects` in i18n */
export const projetsRealises = [prRealisesResidence, prRealisesConference];

/** Order matches `projetsActuel.projects`: Jardins thérapeutiques, Communauté des Âpres */
export const projetsActuel = [prActuelJardins, prActuelCommunaute];

/** Order matches `projetsPrevu.projects`: Help To Help, Arboretums, Apprentissage */
export const projetsPrevu = [prPrevuHelp, prPrevuArboretums, prPrevuApprentissage];
