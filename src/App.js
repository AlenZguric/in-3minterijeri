import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
//import NavBar from './components/NavBar';

import '../src/styles/utils/main.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        
      
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nama" element={<AboutPage />} />
            <Route path="/galerija" element={<GalleryPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
     
        <Footer />
      </div>
    </Router>
  );
};

export default App;

