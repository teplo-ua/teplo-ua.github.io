import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

const BASE = '/.original-site/assets/static.wixstatic.com/media/';

const FRENCH_PARTNERS = [
  {
    id: 'herault',
    logo: BASE + '946bd9_463cd28f25ac4545ad8a62daf4e55000~mv2.webp/v1/14400629c8da81b1.webp',
    nameFr: "Département de l'Hérault",
    nameUk: 'Департамент Еро',
    url: null,
  },
  {
    id: 'monts',
    logo: BASE + '946bd9_f5c596785a76454ca00fef57ed5d951f~mv2.png/v1/b566b56cf2329ba5.png',
    nameFr: 'Communauté de communes des Monts de Lacaune et de la Montagne du Haut Languedoc',
    nameUk: 'Громада муніципалітетів Монт-де-Лакон та Гірського Верхнього Лангедоку',
    url: null,
  },
  {
    id: 'salvetat',
    logo: null,
    nameFr: 'Commune de la Salvetat-sur-Ago\u00FBt en coordination avec Cap Jeunes (H\u00E9rault)',
    nameUk: 'Комуна Ла-Сальвета-сюр-Агу у координації з Cap Jeunes (Еро)',
    url: null,
  },
  {
    id: 'emdr',
    logo: BASE + '946bd9_dc8f8d84e98e409d8eecad3c74e53ce9~mv2.jpg/v1/8c904dfb637d4f72.jpg',
    nameFr: 'Association EMDR France',
    nameUk: 'Асоціація EMDR France',
    url: 'https://www.emdr-france.org',
  },
  {
    id: 'cpie',
    logo: null,
    nameFr: 'Association CPIE de Haut Languedoc, Saint Pons de Thomi\u00E8res',
    nameUk: 'Асоціація CPIE Верхнього Лангедоку, Сен-Пон-де-Том\u2019єр',
    url: null,
  },
  {
    id: 'aufildesarts',
    logo: BASE + '946bd9_9897ec565e424546ac46429dedf2ea08~mv2.png/v1/e9a8a23bf464bba9.png',
    nameFr: 'Association Au fil des arts, Prémian',
    nameUk: 'Асоціація Au fil des arts, Преміан',
    url: null,
  },
  {
    id: 'lesapres',
    logo: BASE + '946bd9_eb48cbc67cb84363829fe5351dbbb720~mv2.png/v1/796e0b383dfbaf10.png',
    nameFr: 'Association Après, Bezins Garraux',
    nameUk: 'Асоціація Après, Безен Гаро',
    url: null,
  },
  {
    id: 'solidarite',
    logo: BASE + '946bd9_72a67a59663d4a91b09c6783d885e298~mv2.png/v1/221f03a9cbcb52a2.png',
    nameFr: 'Association Ukraine-Lyon Solidarité',
    nameUk: 'Асоціація Солідарність Ліон-Україна',
    url: null,
  },
  {
    id: 'passerelles',
    logo: BASE + '946bd9_eece9d4aa4794801b5a04a379a42bc2a~mv2.png/v1/692d7b4fd2d6c4ff.png',
    nameFr: 'Passerelles et Compétences, Montpellier',
    nameUk: 'Passerelles et Compétences, Монпельє',
    url: null,
  },
];

const FOREIGN_PARTNERS = [
  {
    id: 'psyche',
    logo: null,
    nameFr: 'Association Psyche, Odessa, Ukraine',
    nameUk: 'Асоціація Психе, Одеса, Україна',
  },
  {
    id: 'khayal',
    logo: null,
    nameFr: "Association KHAYAL \u2013 Association pour les Arts et l\u2019\u00C9ducation, Liban",
    nameUk: 'Асоціація KHAYAL — Асоціація мистецтва та освіти, Ліван',
  },
  {
    id: 'feofaniya',
    logo: null,
    nameFr: 'Hôpital clinique Feofaniya, Kyiv, Ukraine',
    nameUk: 'Клінічна лікарня Феофанія, Київ, Україна',
  },
  {
    id: 'dobrobout',
    logo: null,
    nameFr: 'Hôpital privé Dobrobout, Kyiv, Ukraine',
    nameUk: 'Приватна лікарня Добробут, Київ, Україна',
  },
  {
    id: 'gestalt',
    logo: null,
    nameFr: 'Union panukrainienne des psychologues Gestalt (Ukraine)',
    nameUk: 'Всеукраїнська спілка гештальт-психологів (Україна)',
  },
  {
    id: 'kharkiv',
    logo: null,
    nameFr: 'Fondation de recherche psychologique de Kharkiv (Ukraine)',
    nameUk: 'Харківський фонд психологічних досліджень (Україна)',
  },
];

const SPONSORS = [
  {
    id: 'danone',
    logo: BASE + '946bd9_0502d482d7d44c8a9f1ebb3bc9a1bdfa~mv2.png/v1/1470f682d4992095.png',
    nameFr: 'Danone Group',
    nameUk: 'Danone Group',
    url: 'https://www.danone.com',
  },
  {
    id: 'credit-agricole',
    logo: BASE + '946bd9_a6b3f7d5c7c64a0c9f2069e4ae64503f~mv2.png/v1/247fdc921ec6b4ac.png',
    nameFr: 'Crédit Agricole, France',
    nameUk: 'Crédit Agricole, Франція',
    url: 'https://www.credit-agricole.fr',
  },
  {
    id: 'maped',
    logo: BASE + '946bd9_966b75bb0b424b13ae6920ef1c2507bc~mv2.png/v1/a297923138cbd005.png',
    nameFr: 'Maped France',
    nameUk: 'Maped France',
    url: 'https://www.maped.com',
  },
];

export default function Partenaires() {
  const { t, language } = useLanguage();

  return (
    <div>
      <PageHeader title={t.partenaires.title} />
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <PartnerSection
            titleFr="Partenaires institutionnels et associatifs français"
            titleUk="Французькі інституційні та асоціативні партнери"
            partners={FRENCH_PARTNERS}
            language={language}
            withLogos
          />
          <PartnerSection
            titleFr="Partenaires étrangers"
            titleUk="Зарубіжні партнери"
            partners={FOREIGN_PARTNERS}
            language={language}
          />
          <PartnerSection
            titleFr="Sponsors"
            titleUk="Спонсори"
            partners={SPONSORS}
            language={language}
            withLogos
          />
        </div>
      </section>
    </div>
  );
}

function PartnerSection({ titleFr, titleUk, partners, language, withLogos }) {
  const title = language === 'uk' ? titleUk : titleFr;
  return (
    <div>
      <h2
        className="text-2xl font-bold text-neutral-700 mb-8 pb-3 border-b border-neutral-200"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {title}
      </h2>
      {withLogos ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((p) => (
            <PartnerLogoCard key={p.id} partner={p} language={language} />
          ))}
        </div>
      ) : (
        <ul className="space-y-3">
          {partners.map((p) => (
            <li key={p.id} className="flex items-start gap-2">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F2693A] flex-shrink-0" />
              <span className="text-neutral-600 text-sm leading-relaxed">
                {language === 'uk' ? p.nameUk : p.nameFr}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PartnerLogoCard({ partner, language }) {
  const name = language === 'uk' ? partner.nameUk : partner.nameFr;
  const inner = (
    <div className="bg-white border border-neutral-200 rounded-lg p-4 flex flex-col items-center justify-center gap-3 h-full hover:shadow-md transition-shadow">
      {partner.logo && (
        <img
          src={partner.logo}
          alt={name}
          className="max-h-16 max-w-full object-contain"
          loading="lazy"
        />
      )}
      <p className="text-xs text-neutral-600 text-center leading-snug">{name}</p>
    </div>
  );
  if (partner.url) {
    return (
      <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}
