import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { notreEquipe } from '../assets/paths/index.js';

const TEAM_MEMBERS = [
  {
    id: 'jean-pierre',
    photo: notreEquipe['jean-pierre'],
    nameFr: 'Jean-Pierre FOURRA',
    nameUk: "Jean-Pierre FOURRA",
    roleFr: "Pr\u00E9sident d'honneur de l'association Teplo",
    roleUk: "Почесний президент асоціації Teplo",
    bioFr: "Vice-Pr\u00E9sident de l'Association des anciens parlementaires des pays membres du Conseil de l\u2019Europe",
    bioUk: "Віце-президент Асоціації колишніх парламентарів держав-членів Ради Європи",
    location: '',
  },
  {
    id: 'svetlana',
    photo: notreEquipe.svetlana,
    nameFr: 'Svetlana FERNANDEZ',
    nameUk: 'Свєтлана ФЕРНАНДЕС',
    roleFr: "Vice-pr\u00E9sidente de l'association",
    roleUk: 'Віцепрезидент асоціації',
    bioFr: 'Interim manager',
    bioUk: 'Інтерим-менеджер',
    location: 'La Salvetat-sur-Agout (34)',
  },
  {
    id: 'ternovy',
    photo: notreEquipe.ternovy,
    nameFr: 'Ternovy',
    nameUk: 'Терновий',
    roleFr: "Fondateur de l'association",
    roleUk: 'Засновник асоціації',
    bioFr: "Dramaturge, directeur du Th\u00E9\u00E2tre \u00AB\u202FNa Zhukakh\u202F\u00BB, Kharkiv",
    bioUk: 'Директор театру «На Жуках», Харків',
    location: '',
  },
  {
    id: 'alain-founder',
    photo: notreEquipe['alain-founder'],
    nameFr: 'Alain OTHNIN-GIRARD',
    nameUk: 'Ален ОТНІН-ЖИРАР',
    roleFr: "Fondateur de l'association",
    roleUk: 'Засновник асоціації',
    bioFr: 'Journaliste',
    bioUk: 'Журналіст',
    location: 'Arles (13), Toulouse',
  },
  {
    id: 'oksana',
    photo: notreEquipe.oksana,
    nameFr: 'Oksana KONNOROVA',
    nameUk: 'Оксана КОННОРОВА',
    roleFr: "Pr\u00E9sidente de l\u2019association",
    roleUk: 'Президент асоціації',
    bioFr: "R\u00E9fugi\u00E9e, psychoth\u00E9rapeute de l'association EMDR Europe",
    bioUk: 'Біженка, психотерапевт, член асоціації EMDR Europe',
    location: 'Kyiv → Belfort (90)',
  },
  {
    id: 'larissa',
    photo: notreEquipe.larissa,
    nameFr: 'Larissa SERDECHNA',
    nameUk: 'Лариса СЕРДЕЧНА',
    roleFr: "Coordinatrice de la direction d'accompagnement des bless\u00E9s",
    roleUk: 'Координатор відділу підтримки постраждалих',
    bioFr: "R\u00E9fugi\u00E9e, art-th\u00E9rapeute, enseignante",
    bioUk: 'Біженка, арт-терапевт, вчителька',
    location: 'Odessa → Perpignan (33)',
  },
  {
    id: 'gertrude',
    photo: notreEquipe.gertrude,
    nameFr: 'Gertrude CHPATAKOVSKA',
    nameUk: 'Гертруда ШПАТАКОВСЬКА',
    roleFr: "Consultante scientifique de l'association",
    roleUk: 'Науковий консультант асоціації',
    bioFr: "PhD, psychoth\u00E9rapeute, directrice de la clinique PSYCHE (Ukraine)",
    bioUk: 'Доктор наук, психотерапевт, директор клініки PSYCHE (Україна)',
    location: 'Odessa',
  },
  {
    id: 'sergei',
    photo: notreEquipe.sergei,
    nameFr: 'Sergei OHLOBLYA',
    nameUk: 'Сергій ОГЛОБЛЯ',
    roleFr: "Directeur technique de l'association",
    roleUk: 'Технічний директор асоціації',
    bioFr: "R\u00E9fugi\u00E9, chef d'entreprise",
    bioUk: 'Біженець, підприємець',
    location: 'Kyiv → La Salvetat-sur-Agout (34)',
  },
  {
    id: 'yana',
    photo: notreEquipe.yana,
    nameFr: 'Yana DUB',
    nameUk: 'Яна ДУБ',
    roleFr: "Sp\u00E9cialiste en communication pour Teplo",
    roleUk: 'Спеціаліст з комунікацій Teplo',
    bioFr: "R\u00E9fugi\u00E9e, sp\u00E9cialiste SMM",
    bioUk: 'Біженка, SMM-спеціаліст',
    location: 'Chernihiv → Potenza',
  },
];

export default function NotreEquipe() {
  const { t, language } = useLanguage();

  return (
    <div>
      <PageHeader title={t.equipe.title} />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.id} member={member} language={language} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamCard({ member, language }) {
  const name = language === 'uk' ? member.nameUk : member.nameFr;
  const role = language === 'uk' ? member.roleUk : member.roleFr;
  const bio = language === 'uk' ? member.bioUk : member.bioFr;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100 text-center hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden bg-neutral-100">
        <img
          src={member.photo}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3
          className="text-base font-bold text-neutral-700 mb-1"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {name}
        </h3>
        <p className="text-sm font-semibold text-[#F2693A] mb-2">{role}</p>
        <p className="text-sm text-neutral-600 leading-relaxed">{bio}</p>
        {member.location && (
          <p className="text-xs text-neutral-400 mt-2">{member.location}</p>
        )}
      </div>
    </div>
  );
}
