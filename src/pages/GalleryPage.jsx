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
            {/* Kuhinje po mjeri */}
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={kuhinjeImage}
                  alt="Kuhinje po mjeri"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <h2>Kuhinje po mjeri</h2>
                <p>
                  Naše kuhinje po mjeri koriste visokokvalitetne materijale
                  poput medijapana i iverice s Blum okovima za dugotrajnost.
                  Svaka kuhinja je prilagođena vašem prostoru, uz napredne
                  metode montaže koje omogućuju maksimalnu iskoristivost
                  prostora. Kuhinje su lako održive, otporne na vlagu i
                  ogrebotine, te se lako čiste.
                </p>
              </div>
            </article>

            {/* Ugradbeni ormari */}
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={ormariImage}
                  alt="Ugradbeni ormari"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <h2>Ugradbeni ormari</h2>
                <p>
                  Ugradbeni ormari po mjeri koriste laminat ili furnirano drvo,
                  s prilagodljivim unutarnjim organizatorima. Idealni su za
                  maksimalnu iskoristivost prostora, pružajući praktična
                  rješenja za pohranu s policama i ladicama prilagođenim vašim
                  potrebama. Održavanje je jednostavno, a kvalitetni okovi
                  osiguravaju dugovječnost.
                </p>
              </div>
            </article>

            {/* Zidne obloge */}
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={zidneOblogeImage}
                  alt="Zidne obloge"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <h2>Zidne obloge</h2>
                <p>
                  Naše zidne obloge koriste drvene 3D panele, dodajući toplinu i
                  estetski element vašem prostoru. Ove obloge nude zvučnu
                  izolaciju, te su jednostavne za održavanje uz minimalno
                  čišćenje.
                </p>
              </div>
            </article>

            {/* Dnevni boravci */}
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={dnevniBoravciImage}
                  alt="Dnevni boravci"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <h2>Dnevni boravak</h2>
                <p>
                  Dnevni boravci po mjeri pružaju fleksibilnost s različitim
                  konfiguracijama, korištenjem masivnog drveta i staklenih
                  elemenata. Osigurava optimalan prostor za pohranu,
                  prilagodljive police i ladice, te jednostavno održavanje
                  drvenih površina.
                </p>
              </div>
            </article>

            {/* Dekorativni paneli */}
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={dekorativniPaneliImage}
                  alt="Dekorativni paneli"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <h2>Dekorativni paneli</h2>
                <p>
                  Dekorativni paneli od PVC-a, metala ili drva dodaju
                  dimenzionalni efekt zidovima, pružajući estetski dodatak i
                  pomažući u izolaciji. Lako se montiraju i održavaju, te su
                  idealni za svaki interijer.
                </p>
              </div>
            </article>

            {/* Hodnici i predsoblja */}
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={hodniciImage}
                  alt="Hodnici predsoblja"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <h2>Hodnici i predsoblja</h2>
                <p>
                  Namještaj za hodnike i predsoblja optimizira prostor koristeći
                  kompaktne i prilagodljive module. S ugrađenim klupama,
                  ogledalima i vješalicama, pruža funkcionalnost i estetiku u
                  skučenim prostorima.
                </p>
              </div>
            </article>

            {/* Kupaonice */}
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={kupaoniceImage}
                  alt="Kupaonice"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <h2>Kupaonice</h2>
                <p>
                  Kupaonice izrađene od vodootpornih materijala poput medijapana
                  i stakla, nude maksimalnu funkcionalnost i estetiku. Montaža
                  je prilagođena otpornosti na vlagu, a rješenja za pohranu
                  optimiziraju prostor. Površine se lako čiste i održavaju.
                </p>
              </div>
            </article>

            {/* Ostali namještaj */}
            <article className="article-about">
              <div className="article-about-box">
                <LazyLoadImage
                  src={ostaliNamjestajImage}
                  alt="Ostali namještaj"
                  effect="blur"
                />
              </div>
              <div className="article-about-box-descriptions">
                <h2>Dječje sobe, spavaće sobe, i više</h2>
                <p>
                  Pružamo prilagođena rješenja za dječje sobe, spavaće sobe, te
                  ostale prostore poput ostava, pregradbenih i kliznih vrata.
                  Također nudimo uredski namještaj dizajniran za funkcionalnost
                  i estetiku. Naši materijali uključuju kvalitetno drvo i
                  aluminij, a sustavi kliznih vrata omogućuju jednostavno
                  korištenje i dugotrajnost. Naši dizajni nude maksimalnu
                  iskoristivost prostora uz jednostavno održavanje.
                </p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
