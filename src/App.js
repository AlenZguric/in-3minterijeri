import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import KitchensPage from "./pages/KitchensPage";
//import NavBar from './components/NavBar';

import "../src/styles/utils/main.css";
import Services from "./pages/ServicesPage";
import WallPanelsPage from "./pages/WallPanelsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

import CookieNotice from '../src/components/CookieNotice';
import { useCookies } from './contexts/CookieContekst';
import { useLocation,  useNavigate } from 'react-router-dom'; 

const AppContent = () => {

  const { cookiesAccepted,  } = useCookies(); // Provjeri je li korisnik prihvatio kolačiće
  const location = useLocation();           // Dobij trenutnu rutu
  const navigate = useNavigate();
  // Provjeri je li trenutna ruta "/politika-privatnosti"
  useEffect(() => {
    // Ako kolačići nisu prihvaćeni i korisnik nije na stranici politika privatnosti
    if (!cookiesAccepted && location.pathname !== '/politika-privatnosti') {
      // Preusmjeri ga na stranicu politika privatnosti
      navigate('/politika-privatnosti');
    }
  }, [cookiesAccepted, location.pathname, navigate]); // Ovisnosti useEffecta



  return (
    <>
      {/* Cookie obavijest će se prikazivati ako kolačići nisu prihvaćeni */}
      {!cookiesAccepted && <CookieNotice />}

      <div
        className="container"
        // Omogući interakciju samo ako su kolačići prihvaćeni
        style={cookiesAccepted ? {} : { pointerEvents: 'none', opacity: 0.5 }}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nama" element={<AboutPage />} />
            <Route path="/proizvodi" element={<GalleryPage />} />
            <Route path="/usluge" element={<Services />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/kuhinje" element={<KitchensPage />} />
            <Route path="/zidne-obloge" element={<WallPanelsPage />} />
            <Route path="/politika-privatnosti" element={<PrivacyPolicyPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;