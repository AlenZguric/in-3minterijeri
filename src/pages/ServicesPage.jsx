import React from "react";
import { Helmet } from "react-helmet";
import '../styles/pages/servicesPage.css';
import ContactForm from '../components/ContactForm';

const Services = () => {

  return (
    <div className="services-page">
      <Helmet>
        <title>Naše Usluge - Proces Izrade Namještaja po Mjeri</title>
        <meta
          name="description"
          content="Saznajte više o uslugama profesionalnog dizajna, projektiranja i izrade namještaja po mjeri, uključujući 3D nacrte, CNC obradu i montažu."
        />
      </Helmet>
      <main >   
        <section>
          <article>
            <div className="services-description">
              <div className="title">
                <h2>
                  Usluge{" "}
                  <span>- kako izgleda proces izrade namještaja po mjeri</span>
                </h2>
              </div>
              <div className="description-row">
                <div className="left-side">
                  <ul>
                    <li>
                      Profesionalno savjetovanje o dizajnu i opremanju
                      interijera
                    </li>
                    <li>Precizno mjerenje prostora za opremanje</li>
                    <li>Pomoć pri odabiru kuhinjskih aparata</li>
                    <li>Izrada idejnih rješenja</li>
                    <li>Projektiranje namještaja u prostoru</li>
                    <li>3D prikazi izrađeni u <a href="http://https://corpus.hr/" target="_blank" rel="noopener noreferrer" title="Klikni za više o programu"> Corpus </a> i SketchUp 21</li>
                    <li>Procjena troškova materijala i usluga</li>
                    <li>Izrada namještaja po mjeri</li>
                    <li>Dostava, montaža i ugradnja proizvoda</li>
                  </ul>
                </div>
                <div className="right-side">
                  <ul>
                    <li>Kantiranje rubova do 54 mm</li>
                    <li>Rezanje pod kutom +46/-46°</li>
                    <li>CNC obrada materijala</li>
                    <li>Prešanje i spajanje ploča</li>
                    <li>Krivolinijsko rezanje i kantiranje</li>
                    <li>Priprema za strojnu obradu</li>
                    <li>Bušenje za <a href="http://grass.eu" target="_blank" rel="noopener noreferrer" title="Klikni za više o okovu">Grass</a> okove</li>
                    <li>Serijska montaža namještaja</li>
                    <li>Ugradnja aparata i ploča.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>
        
         
         
      </main>
      <ContactForm/>
    </div>
  );
};

export default Services;
