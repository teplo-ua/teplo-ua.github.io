import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Merci() {
  const { t } = useLanguage();
  const m = t.merci;

  return (
    <div>
      <PageHeader title={m.title} />
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-neutral-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
          <p>{m.text1}</p>
          <p>{m.text2}</p>
        </div>
      </section>
    </div>
  );
}
