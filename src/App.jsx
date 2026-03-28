import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ContactWidget from './components/ContactWidget.jsx';

import Home from './pages/Home.jsx';
import Asso from './pages/Asso.jsx';
import Histoire from './pages/Histoire.jsx';
import Mission from './pages/Mission.jsx';
import Merci from './pages/Merci.jsx';
import Presse from './pages/Presse.jsx';
import Contacts from './pages/Contacts.jsx';
import Projets from './pages/Projets.jsx';
import ProjetsRealises from './pages/ProjetsRealises.jsx';
import ProjetsActuel from './pages/ProjetsActuel.jsx';
import ProjetsPrevu from './pages/ProjetsPrevu.jsx';
import Actualites from './pages/Actualites.jsx';
import BlogPost from './pages/BlogPost.jsx';
import NotreEquipe from './pages/NotreEquipe.jsx';
import Partenaires from './pages/Partenaires.jsx';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/nous-connaitre" element={<Asso />} />
              <Route path="/histoire" element={<Histoire />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/merci" element={<Merci />} />
              <Route path="/presse" element={<Presse />} />
              <Route path="/contacts" element={<Contacts />} />

              <Route path="/projets" element={<Projets />} />
              <Route path="/projets/realises" element={<ProjetsRealises />} />
              <Route path="/projets/actuel" element={<ProjetsActuel />} />
              <Route path="/projets/prevu" element={<ProjetsPrevu />} />

              <Route path="/actualites" element={<Actualites />} />
              <Route path="/actualites/:slug" element={<BlogPost />} />

              <Route path="/notre-equipe" element={<NotreEquipe />} />
              <Route path="/partenaires" element={<Partenaires />} />
            </Routes>
          </main>
          <Footer />
          <ContactWidget />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
