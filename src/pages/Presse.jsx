import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

const BASE = '/.original-site/assets/static.wixstatic.com/media/';

const ARTICLE_IMAGES = {
  'ukraine-jeune': BASE + '946bd9_cd9f4eadfc8f4ca198d39dd82c67be3c~mv2.png/v1/a09b39c5f616c782.png',
  'herault-tribune': BASE + '946bd9_fc17856abbd6477aa69ad0977646f24b~mv2.png/v1/ef5634057850a779.png',
  'radio-salvetat': BASE + '946bd9_5f23b5a94359488ea649425d36db5f2a~mv2.jpg/v1/5f80a8373437bb35.jpg',
  'midi-libre': BASE + '946bd9_381cf0567fd7418db790e267af814df7~mv2.jpg/v1/9f0d647a40ca1dfd.jpg',
};

const GOLD = '#f0c040';
const GOLD_BG = '#f5d060';

export default function Presse() {
  const { t } = useLanguage();
  const p = t.presse;
  const [activeIdx, setActiveIdx] = useState(0);
  const active = p.articles[activeIdx];

  return (
    <div>
      <PageHeader title={p.title} />

      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex border-b-0 overflow-x-auto">
            {p.sources.map((source, i) => (
              <button
                key={source}
                onClick={() => setActiveIdx(i)}
                className="px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors"
                style={{
                  background: i === activeIdx ? GOLD : '#F0EDD8',
                  color: i === activeIdx ? '#1a1a1a' : '#555',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: i === activeIdx ? '300' : '200',
                  borderTop: i === activeIdx ? '2px solid #d4a800' : '2px solid transparent',
                  borderLeft: i === activeIdx ? '1px solid #d4a800' : '1px solid #ddd',
                  borderRight: i === activeIdx ? '1px solid #d4a800' : '1px solid #ddd',
                  borderBottom: 'none',
                  marginRight: '2px',
                }}
              >
                {source}
              </button>
            ))}
          </div>

          <div
            className="rounded-b-lg p-8 md:p-12"
            style={{ background: GOLD_BG, border: `1px solid #d4a800` }}
          >
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 flex flex-col gap-5">
                <h2
                  className="text-4xl md:text-5xl font-semibold leading-tight text-neutral-900"
                >
                  {active.title}
                </h2>
                {active.subtitle && (
                  <p className="text-lg italic text-neutral-700 font-extralight">
                    {active.subtitle}
                  </p>
                )}

                {active.id === 'ukraine-jeune' && (
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
                        <rect width="36" height="44" rx="3" fill="#e53935" />
                        <text x="18" y="20" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">PDF</text>
                        <path d="M8 26h20M8 30h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                )}

                {active.url ? (
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start inline-flex items-center gap-2 px-6 py-2.5 border border-neutral-800 text-neutral-800 text-sm hover:bg-neutral-800 hover:text-white transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: '300' }}
                  >
                    {active.cta} &rsaquo;
                  </a>
                ) : (
                  <span
                    className="self-start inline-flex items-center gap-2 px-6 py-2.5 border border-neutral-400 text-neutral-400 text-sm cursor-not-allowed"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {active.cta}
                  </span>
                )}
              </div>

              <div className="md:w-96 shrink-0">
                <img
                  src={ARTICLE_IMAGES[active.id]}
                  alt={active.title}
                  className="w-full rounded shadow-md object-cover"
                  style={{ maxHeight: '320px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
