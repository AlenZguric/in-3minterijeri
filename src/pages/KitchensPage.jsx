import React from 'react';
import KitchenComponent from '../components/KitchenComponent';
import { kitchensData } from '../styles/utils/kitchensData';
import NavBar from '../components/NavBar';
import { Helmet } from 'react-helmet';

import '../styles/pages/KitchensPage.css';

const KitchensPage = () => {
  
  return (
    <div className="kitchens-page">
      <Helmet>
        <title>Kuhinje</title>
      </Helmet>
      <NavBar />
      <main>
        {kitchensData.map((kitchen, index) => (
          <KitchenComponent key={index} kitchen={kitchen} />
        ))}
      </main>
    </div>
  );
};

export default KitchensPage;
