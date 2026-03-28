import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';

const LOGO = '/.original-site/assets/static.wixstatic.com/media/946bd9_32723dadc62642d2a26111e6d3b112c4~mv2.png/v1/e8a36fc569bc9291.png';
const FLAG_FR = '/.original-site/assets/static.parastorage.com/services/linguist-flags/1.1005.0/79a1f6c38eef5ac8.png';
const FLAG_UK = '/.original-site/assets/static.parastorage.com/services/linguist-flags/1.1005.0/6c68a722ed37dbb9.png';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projOpen, setProjOpen] = useState(false);
  const langRef = useRef(null);
  const aboutRef = useRef(null);
  const projRef = useRef(null);

  const activeClass = 'text-[#265642] font-semibold';
  const linkClass = 'text-neutral-700 hover:text-[#265642] transition-colors text-sm font-medium px-3 py-2 whitespace-nowrap';

  useEffect(handleOutsideClick, [langOpen, aboutOpen, projOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7E8] border-b border-neutral-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={LOGO} alt="Teplo" className="h-10 w-10 object-cover rounded-full" />
          <span className="text-xl font-light text-[#265642] hidden sm:block" style={{ letterSpacing: '0.05em' }}>
            Teplo
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" end className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>
            {t.nav.home}
          </NavLink>

          <div className="relative" ref={aboutRef}>
            <button
              className={`${linkClass} flex items-center gap-1`}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              {t.nav.about}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                <path d="M5 6L0 0h10z" />
              </svg>
            </button>
            {aboutOpen && (
              <div
                className="absolute top-full left-0 bg-white border border-neutral-200 shadow-lg rounded min-w-48 py-1 z-50"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                {renderSubLink('/histoire', t.nav.aboutSub.history)}
                {renderSubLink('/mission', t.nav.aboutSub.mission)}
                {renderSubLink('/merci', t.nav.aboutSub.thanks)}
                {renderSubLink('/presse', t.nav.aboutSub.press)}
                {renderSubLink('/contacts', t.nav.aboutSub.contacts)}
              </div>
            )}
          </div>

          <div className="relative" ref={projRef}>
            <button
              className={`${linkClass} flex items-center gap-1`}
              onMouseEnter={() => setProjOpen(true)}
              onMouseLeave={() => setProjOpen(false)}
            >
              {t.nav.projects}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                <path d="M5 6L0 0h10z" />
              </svg>
            </button>
            {projOpen && (
              <div
                className="absolute top-full left-0 bg-white border border-neutral-200 shadow-lg rounded min-w-40 py-1 z-50"
                onMouseEnter={() => setProjOpen(true)}
                onMouseLeave={() => setProjOpen(false)}
              >
                {renderSubLink('/projets/realises', t.nav.projectsSub.completed)}
                {renderSubLink('/projets/actuel', t.nav.projectsSub.current)}
                {renderSubLink('/projets/prevu', t.nav.projectsSub.planned)}
              </div>
            )}
          </div>

          <NavLink to="/actualites" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>
            {t.nav.news}
          </NavLink>
          <NavLink to="/notre-equipe" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>
            {t.nav.team}
          </NavLink>
          <NavLink to="/partenaires" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>
            {t.nav.partners}
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative" ref={langRef}>
            <button
              className="flex items-center gap-1.5 border border-neutral-300 rounded px-2 py-1 hover:bg-neutral-100 transition-colors"
              onClick={() => setLangOpen(!langOpen)}
            >
              <img src={language === 'fr' ? FLAG_FR : FLAG_UK} alt={language} className="w-5 h-5 rounded-full object-cover" />
              <svg width="8" height="5" viewBox="0 0 10 6" fill="currentColor" className="text-neutral-500">
                <path d="M5 6L0 0h10z" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-neutral-200 shadow-lg rounded py-1 min-w-32 z-50">
                <button
                  className="w-full flex items-center gap-2 px-3 py-2 hover:bg-neutral-50 text-neutral-700 text-sm"
                  onClick={() => { setLanguage('fr'); setLangOpen(false); }}
                >
                  <img src={FLAG_FR} alt="FR" className="w-5 h-5 rounded-full object-cover" />
                  Français
                </button>
                <button
                  className="w-full flex items-center gap-2 px-3 py-2 hover:bg-neutral-50 text-neutral-700 text-sm"
                  onClick={() => { setLanguage('uk'); setLangOpen(false); }}
                >
                  <img src={FLAG_UK} alt="UK" className="w-5 h-5 rounded-full object-cover" />
                  Українська
                </button>
              </div>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-neutral-700 hover:text-[#265642]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
                : <><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF7E8] border-t border-neutral-200 px-4 pb-4">
          <MobileMenu t={t} onClose={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  );

  function renderSubLink(to, label) {
    return (
      <Link
        key={to}
        to={to}
        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#265642]"
      >
        {label}
      </Link>
    );
  }

  function handleOutsideClick() {
    function handler(e) {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false);
      if (projRef.current && !projRef.current.contains(e.target)) setProjOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }
}

function MobileMenu({ t, onClose }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projOpen, setProjOpen] = useState(false);

  const linkCls = 'block py-2.5 text-neutral-700 hover:text-[#265642] font-medium border-b border-neutral-100';

  return (
    <nav className="flex flex-col pt-2">
      <NavLink to="/" end className={linkCls} onClick={onClose}>{t.nav.home}</NavLink>

      <button className={`${linkCls} flex justify-between items-center w-full text-left`} onClick={() => setAboutOpen(!aboutOpen)}>
        {t.nav.about}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`}>
          <path d="M5 6L0 0h10z" />
        </svg>
      </button>
      {aboutOpen && (
        <div className="pl-4 bg-neutral-50 rounded mb-1">
          <NavLink to="/histoire" className="block py-2 text-sm text-neutral-600 hover:text-[#265642]" onClick={onClose}>{t.nav.aboutSub.history}</NavLink>
          <NavLink to="/mission" className="block py-2 text-sm text-neutral-600 hover:text-[#265642]" onClick={onClose}>{t.nav.aboutSub.mission}</NavLink>
          <NavLink to="/merci" className="block py-2 text-sm text-neutral-600 hover:text-[#265642]" onClick={onClose}>{t.nav.aboutSub.thanks}</NavLink>
          <NavLink to="/presse" className="block py-2 text-sm text-neutral-600 hover:text-[#265642]" onClick={onClose}>{t.nav.aboutSub.press}</NavLink>
          <NavLink to="/contacts" className="block py-2 text-sm text-neutral-600 hover:text-[#265642]" onClick={onClose}>{t.nav.aboutSub.contacts}</NavLink>
        </div>
      )}

      <button className={`${linkCls} flex justify-between items-center w-full text-left`} onClick={() => setProjOpen(!projOpen)}>
        {t.nav.projects}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className={`transition-transform ${projOpen ? 'rotate-180' : ''}`}>
          <path d="M5 6L0 0h10z" />
        </svg>
      </button>
      {projOpen && (
        <div className="pl-4 bg-neutral-50 rounded mb-1">
          <NavLink to="/projets/realises" className="block py-2 text-sm text-neutral-600 hover:text-[#265642]" onClick={onClose}>{t.nav.projectsSub.completed}</NavLink>
          <NavLink to="/projets/actuel" className="block py-2 text-sm text-neutral-600 hover:text-[#265642]" onClick={onClose}>{t.nav.projectsSub.current}</NavLink>
          <NavLink to="/projets/prevu" className="block py-2 text-sm text-neutral-600 hover:text-[#265642]" onClick={onClose}>{t.nav.projectsSub.planned}</NavLink>
        </div>
      )}

      <NavLink to="/actualites" className={linkCls} onClick={onClose}>{t.nav.news}</NavLink>
      <NavLink to="/notre-equipe" className={linkCls} onClick={onClose}>{t.nav.team}</NavLink>
      <NavLink to="/partenaires" className={linkCls} onClick={onClose}>{t.nav.partners}</NavLink>
    </nav>
  );
}
