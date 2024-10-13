import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../styles/pages/galleryPage.css";

import kuhinjeImage from "../assets/images/smallsize/kuhinja-po-mjeri-img.jpg"; // Dodaj slike
import ormariImage from "../assets/images/smallsize/ormari-img.jpg";
import zidneOblogeImage from "../assets/images/smallsize/zidni-paneli-first-img.jpg";
import dnevniBoravciImage from "../assets/images/smallsize/dnevni- boravak-img.jpg";
import dekorativniPaneliImage from "../assets/images/smallsize/dekorativni-paneli-img.png";
import hodniciImage from "../assets/images/smallsize/hodnici-predsoblje-img.jpg";
import kupaoniceImage from "../assets/images/smallsize/kupaonice-img.jpg";
import ostaliNamjestajImage from "../assets/images/smallsize/ostali namješta-img.jpg";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <header>
        <Helmet></Helmet>
        <NavBar />
      </header>
      <main>
        <div className="main-container">
          <section className="title-section">
            <p>ODABERITE KVALITETNE PROIZVODE IZ NAŠE KOLEKCIJE</p>
          </section>
          <section>
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={kuhinjeImage}
                  alt="Kuhinje po mjeri"
                  effect="blur"
                />
                <h2>Kuhinje po mjeri</h2>
              </div>
            </article>
            <hr />

            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={ormariImage}
                  alt="Ugradbeni ormari"
                  effect="blur"
                />
                  <h2>Ugradbeni ormari</h2>
              </div>
            
            </article>
            <hr />

            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={zidneOblogeImage}
                  alt="Zidne obloge"
                  effect="blur"
                />
                              <h2>Zidne obloge</h2>

              </div>
            </article>
            <hr />

            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={dnevniBoravciImage}
                  alt="Dnevni boravci"
                  effect="blur"
                />
                              <h2>Dnevni boravci</h2>

              </div>
            </article>
            <hr />
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={dekorativniPaneliImage}
                  alt="Dekorativni paneli"
                  effect="blur"
                />
                              <h2>Dekorativni paneli</h2>

              </div>
            </article>
            <hr />
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={hodniciImage}
                  alt="Hodnici predsoblja"
                  effect="blur"
                />              <h2>Hodnici predsoblja</h2>

              </div>
              <hr />
            </article>
            <hr />
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={kupaoniceImage}
                  alt="Kupaonice"
                  effect="blur"
                />
                              <h2>Kupaonice</h2>

              </div>
              <hr />
            </article>
            <hr />
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={ostaliNamjestajImage}
                  alt="Ostali namještaj"
                  effect="blur"
                />
                              <h2>Ostali namještaj</h2>

              </div>
            </article>
            <hr />
          </section>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
