import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Contacts() {
  const { t } = useLanguage();
  const c = t.contacts;

  return (
    <div>
      <PageHeader title={c.title} />
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-8 text-center space-y-4">
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Adresse</p>
              <p className="text-lg text-neutral-700" style={{ fontFamily: 'Georgia, serif' }}>{c.address}</p>
            </div>
            <div className="border-t border-neutral-100 pt-4">
              <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Téléphone</p>
              <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-lg text-[#265642] font-semibold hover:text-[#F2693A] transition-colors">
                {c.phone}
              </a>
            </div>
            <div className="border-t border-neutral-100 pt-4">
              <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Email</p>
              <a href={`mailto:${c.email}`} className="text-lg text-[#265642] font-semibold hover:text-[#F2693A] transition-colors underline">
                {c.email}
              </a>
            </div>
            <div className="border-t border-neutral-100 pt-4">
              <a
                href={c.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#265642] hover:text-[#F2693A] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                {c.facebook}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
