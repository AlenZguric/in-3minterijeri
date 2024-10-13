import React from "react";
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

const App = () => {
  return (
    <Router>
      <div class="container">
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nama" element={<AboutPage />} />
            <Route path="/proizvodi" element={<GalleryPage />} />
            <Route path="/usluge" element={<Services />} />
            <Route path="/kontakt" element={<ContactPage />} />

            <Route path="/kuhinje" element={<KitchensPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
