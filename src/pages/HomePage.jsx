import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import WhyChooseUs from "../components/WhyChooseUs ";
import OurProducts from "../components/OurProducts";
import Questions from "../components/Questions";

const HomePage = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Ne tražite namještaj - Izradite ga po mjeri</title>
        <meta
          name="description"
          content="Izradite namještaj po mjeri Vašeg životnog prostora. Pogledajte naše radove i inspiraciju."
        />
        <meta
          name="keywords"
          content="namještaj, izrada namještaja, interijeri, dizajn, izrada namještaja po mjeri, namještaj po mjeri, galerija kuhinja, kuhinje, kuhinje po mjeri"
        />
        <meta name="author" content="Alen Zgurić" />
      </Helmet>
      <header>
        <NavBar />
      </header>

      <main>
        <section>
          <article>
            <Header />
            <WhyChooseUs/>
          </article>
        </section>
        <section>
          <article>
            <OurProducts/>
          </article>
        </section>
        <Questions/>
        <section>
          <article></article>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
