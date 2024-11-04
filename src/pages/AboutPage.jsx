import React from "react";
import { Helmet } from "react-helmet";

import "../styles/pages/aboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutUs-page">
      <Helmet>
        
      </Helmet>
      <main style={{ paddingTop: '180px' }}>
        <section>
          <article>
            <div className="title-aboutus">
              <h2>O nama</h2>
            </div>

            <div className="descriprion">
              <p>
              In-3M Interijeri osnovana je 2022. godine s jasnom vizijom postati
        vodeća tvrtka za izradu namještaja po mjeri. Naša misija je zadovoljstvo
        naših kupaca, koje stavljamo na prvo mjesto u svim poslovnim aktivnostima.
        Koristimo samo visoko kvalitetne materijale i okove iz Elgrada, čime
        osiguravamo trajnost i funkcionalnost svakog komada namještaja. Naš tim
        stručnjaka posvećen je stvaranju elegantnih i prilagođenih rješenja koja
        odražavaju jedinstveni stil naših klijenata. U In-3M Interijerima, vaša
        sreća je naš najveći uspjeh!
              </p>
            </div>
          </article>
        </section>
        <section>
          <article></article>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
