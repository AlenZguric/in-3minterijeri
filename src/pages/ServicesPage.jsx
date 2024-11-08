import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
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
      <main>
        <section>
          <article>
            <div className="services-description">
              <div className="title">
                <motion.div
                className="title-motion"
                initial={{ y: '-100vh' }} // Početna pozicija lijevo izvan ekrana
                animate={{ y: 0 }} // Pozicija pri animaciji
                transition={{ delay: .2, duration: 1.2 }}>
                <h2>
                 
                 <span>Kako izgleda </span><br />
                 proces izrade namještaja po mjeri
               </h2>
                </motion.div>
              
              </div>
              <div className="description-row">
                <motion.div
                  className="left-side"
                  initial={{ x: '-100vw' }} // Početna pozicija lijevo izvan ekrana
                  animate={{ x: 0 }} // Pozicija pri animaciji
                  transition={{ delay: .2, duration: 1.5 }} // Animacija počinje nakon 1.5 sekunde i traje 3 sekunde
                >
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
                </motion.div>
                <motion.div
                  className="right-side"
                  initial={{ x: '100vw' }} // Početna pozicija desno izvan ekrana
                  animate={{ x: 0 }} // Pozicija pri animaciji
                  transition={{ delay: 1.1, duration: 2 }} // Animacija počinje nakon 1.5 sekunde i traje 3 sekunde
                >
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
                </motion.div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <ContactForm />
    </div>
  );
};

export default Services;
