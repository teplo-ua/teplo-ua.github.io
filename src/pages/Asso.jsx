import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { Link } from 'react-router-dom';

export default function Asso() {
  const { t } = useLanguage();
  const a = t.asso;

  const cards = [
    { to: '/histoire', label: t.nav.aboutSub.history },
    { to: '/mission', label: t.nav.aboutSub.mission },
    { to: '/merci', label: t.nav.aboutSub.thanks },
    { to: '/presse', label: t.nav.aboutSub.press },
    { to: '/contacts', label: t.nav.aboutSub.contacts },
  ];

  return (
    <div>
      <PageHeader title={a.title} />
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-neutral-600 leading-relaxed mb-12" style={{ fontFamily: 'Georgia, serif' }}>
          <p>{a.text1}</p>
          <p>{a.text2}</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="block bg-white border border-neutral-200 hover:border-[#265642] rounded-lg p-5 text-center text-neutral-700 font-semibold hover:text-[#265642] transition-colors shadow-sm hover:shadow-md"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
