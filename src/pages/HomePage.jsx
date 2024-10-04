import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

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
          </article>
        </section>
        <section>
          <article></article>
        </section>
        <section>
          <article></article>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
