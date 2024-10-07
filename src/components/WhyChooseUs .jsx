import React from 'react';
import '../styles/components/WhyChooseUs.css';
import DiamondIcon from '@mui/icons-material/Diamond';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DesignServicesIcon from '@mui/icons-material/DesignServices';



const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="title">
      <h2>Zašto odabrati nas?</h2>

      </div>
      <div className="benefits">
        <div className="benefit">
        <DiamondIcon style={{ fontSize: 50, color: '#333' }} aria-label="Diamond icon" title="Vrhunska kvaliteta" />

          <h3>Vrhunska Kvaliteta</h3>
          <p>Koristimo samo najkvalitetnije materijale i najmodernije tehnike izrade.</p>
        </div>
        <div className="benefit">
          <DesignServicesIcon style={{ fontSize: 50, color: '#333' }} aria-label="Diamond icon" title="Vrhunska kvaliteta"/>
          <h3>Potpuno Prilagođeno</h3>
          <p>Svi naši proizvodi su prilagođeni vašem prostoru i stilu.</p>
        </div>
        <div className="benefit">
        <SupportAgentIcon style={{ fontSize: 50, color: '#333' }}/>
        <h3>Profesionalna Podrška</h3>
          <p>Naš tim Vam stoji na raspolaganju od početka do kraja projekta.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
