import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Histoire() {
  const { t } = useLanguage();
  const h = t.histoire;

  return (
    <div>
      <PageHeader title={h.title} />
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-neutral-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
          <p className="text-xl text-neutral-500 italic">{h.text0}</p>
          <p>{h.text1}</p>
          <p>{h.text2}</p>
          <p>{h.text3}</p>
          <p>{h.text4}</p>
          <p>{h.text5}</p>
          <p>{h.text6}</p>
        </div>
      </section>
    </div>
  );
}
