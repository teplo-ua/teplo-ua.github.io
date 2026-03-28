import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#265642] text-neutral-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3" style={{ fontFamily: 'Georgia, serif' }}>Teplo</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Association loi 1901 — Soutien psychothérapeutique aux réfugiés ukrainiens
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">{t.nav.about}</h3>
            <ul className="space-y-1.5">
              <li><Link to="/histoire" className="text-sm text-neutral-300 hover:text-white transition-colors">{t.nav.aboutSub.history}</Link></li>
              <li><Link to="/mission" className="text-sm text-neutral-300 hover:text-white transition-colors">{t.nav.aboutSub.mission}</Link></li>
              <li><Link to="/contacts" className="text-sm text-neutral-300 hover:text-white transition-colors">{t.nav.aboutSub.contacts}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-1.5">
              <li className="text-sm text-neutral-300">LE PRE DU ROY, 34330 LA SALVETAT-SUR-AGOUT</li>
              <li>
                <a href="mailto:teplo.fr@gmail.com" className="text-sm text-neutral-300 hover:text-white transition-colors">
                  teplo.fr@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Teplo.fr" target="_blank" rel="noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 mt-8 pt-4 text-center">
          <p className="text-sm text-neutral-400">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
