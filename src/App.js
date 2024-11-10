import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import KitchensPage from "./pages/KitchensPage";
import NotFoundPage from "./pages/NotFoundPage";
import BathRoomPage from "./pages/BathRoomPage";

import "../src/styles/utils/main.css";
import Services from "./pages/ServicesPage";
import WallPanelsPage from "./pages/WallPanelsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

import CookieNotice from "../src/components/CookieNotice";
import { useCookies } from "./contexts/CookieContekst";
import { useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";

import "./App.css";
import EntryHallPage from "./pages/EntryHallPage";
import BuiltInWardrobesPage from "./pages/BuiltInWardrobesPage";
import WardrobePage from "./pages/WardrobePage";
import KidsRoomsPage from "./pages/KidsRoomsPage";

const AppContent = () => {
  const { cookiesAccepted } = useCookies(); // Provjeri je li korisnik prihvatio kolačiće
  const location = useLocation(); // Dobij trenutnu rutu

  // Provjeri je li trenutna ruta "/politika-privatnosti"
  const isPrivacyPage = location.pathname === "/politika-privatnosti";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Cookie obavijest će se prikazivati ako kolačići nisu prihvaćeni */}
      {!cookiesAccepted && !isPrivacyPage && <CookieNotice />}

      <div
        className="container"
        // Omogući interakciju samo ako su kolačići prihvaćeni ILI ako je korisnik na stranici politika-privatnosti
        style={
          cookiesAccepted || isPrivacyPage
            ? {}
            : { pointerEvents: "none", opacity: 0.5 }
        }
      >
        <div className="App">
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nama" element={<AboutPage />} />
            <Route path="/proizvodi" element={<GalleryPage />} />
            <Route path="/usluge" element={<Services />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/kuhinje" element={<KitchensPage />} />
            <Route path="/kupaonice" element={<BathRoomPage />} />
            <Route path="/hodnici-i-predsoblja" element={<EntryHallPage />} />
            <Route path="/ugradbeni-ormari" element={<BuiltInWardrobesPage />} />
            <Route path="/ormari" element={<WardrobePage />} />
            <Route path="/djecje-sobe" element={<KidsRoomsPage />} />




            <Route path="/zidne-obloge" element={<WallPanelsPage />} />
            <Route
              path="/politika-privatnosti"
              element={<PrivacyPolicyPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <footer>
            <Footer />
          </footer>
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
