import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { Link } from 'react-router-dom';

export default function Projets() {
  const { t } = useLanguage();

  const cards = [
    { to: '/projets/realises', label: t.nav.projectsSub.completed, desc: t.projetsRealises.projects[0]?.title || '' },
    { to: '/projets/actuel', label: t.nav.projectsSub.current, desc: t.projetsActuel.projects[0]?.title || '' },
    { to: '/projets/prevu', label: t.nav.projectsSub.planned, desc: t.projetsPrevu.projects[0]?.title || '' },
  ];

  return (
    <div>
      <PageHeader title={t.projets.title} />
      <section className="py-16 px-4">
        <p className="text-center text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">{t.projets.text}</p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="block bg-white border border-neutral-200 hover:border-[#265642] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-xl font-bold text-neutral-700 group-hover:text-[#265642] mb-3 transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                {c.label}
              </h3>
              <p className="text-sm text-neutral-600">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
