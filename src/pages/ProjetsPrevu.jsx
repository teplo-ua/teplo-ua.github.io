import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function ProjetsPrevu() {
  const { t } = useLanguage();
  const p = t.projetsPrevu;

  return (
    <div>
      <PageHeader title={p.title} />
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
          <p>{p.text}</p>
        </div>
      </section>
    </div>
  );
}
