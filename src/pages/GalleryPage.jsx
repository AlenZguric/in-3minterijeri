import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../styles/pages/galleryPage.css";

import kuhinjeImage from "../assets/images/fullsize/kuhinja/kuhinja_1/IMG_5748.webp"; 
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
                
              </div>
              <div className="article-about-box-descriptions">
                <p>Kuhinje po mjeri</p>

              </div>
            </article>

            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={ormariImage}
                  alt="Ugradbeni ormari"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <p>Ugradbeni ormari</p>

              </div>

            
            </article>

            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={zidneOblogeImage}
                  alt="Zidne obloge"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <p>Zidne obloge</p>

              </div>

            </article>

            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={dnevniBoravciImage}
                  alt="Dnevni boravci"
                  effect="blur"
                />

              </div>
              <div className="article-about-box-descriptions">
                <p>Dnevni boravak</p>

              </div>

            </article>
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={dekorativniPaneliImage}
                  alt="Dekorativni paneli"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <p>Dekorativni paneli</p>

              </div>

            </article>
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={hodniciImage}
                  alt="Hodnici predsoblja"
                  effect="blur"
                />              

              </div>
              <div className="article-about-box-descriptions">
                <p>Hodnici i predsoblja</p>

              </div>

            </article>
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={kupaoniceImage}
                  alt="Kupaonice"
                  effect="blur"
                />

              </div>
              <div className="article-about-box-descriptions">
                <p>Kupaonice</p>

              </div>

            </article>
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={ostaliNamjestajImage}
                  alt="Ostali namještaj"
                  effect="blur"
                />

              </div>
              <div className="article-about-box-descriptions">
                <p>Ostali namještaj</p>

              </div>

            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
