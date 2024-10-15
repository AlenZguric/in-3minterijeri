import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
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

const categories = [
  {
    title: "Kuhinje po mjeri",
    image: kuhinjeImage,
    description:
      "Naše kuhinje po mjeri izrađene su od visokokvalitetnih materijala poput MDF-a, iverala i furnira. Prednosti uključuju mogućnost prilagodbe dimenzija, dizajna i funkcionalnosti. Montaža je brza i efikasna, a održavanje jednostavno s osnovnim sredstvima za čišćenje.",
    url: "/kuhinje",
  },
  {
    title: "Zidne obloge",
    image: zidneOblogeImage,
    description:
      "Zidne obloge unose moderan dizajn i dodatnu zaštitu zidova. Moguće ih je instalirati u svim prostorijama. Izrađuju se od različitih materijala kao što su PVC, drvo i laminat. Lako se održavaju i otporne su na vlagu.",
    url: "/zidne-obloge",
  },
  {
    title: "Dnevni boravci",
    image: dnevniBoravciImage,
    description:
      "Namještaj za dnevne boravke kombinira udobnost i funkcionalnost. Koristimo materijale kao što su masivno drvo, furnir i tkanine otpornije na mrlje. Montaža je prilagođena vašem prostoru, a čišćenje je jednostavno.",
    url: "/dnevni-boravci",
  },
  {
    title: "Dekorativni paneli",
    image: dekorativniPaneliImage,
    description:
      "Dekorativni paneli dodaju eleganciju svakom prostoru. Izrađeni od materijala kao što su MDF i PVC, lako se postavljaju na zidove i jednostavno održavaju. Idealni su za poslovne i stambene prostore.",
    url: "/dekorativni-paneli",
  },
  {
    title: "Hodnici i predsoblja",
    image: hodniciImage,
    description:
      "Naši hodnici i predsoblja su dizajnirani kako bi maksimalno iskoristili prostor. Koristimo materijale poput iverala i MDF-a s mogućnošću ugradnje kliznih vrata. Jednostavno se održavaju i pružaju dugotrajnu upotrebu.",
    url: "/hodnici",
  },
  {
    title: "Kupaonice",
    image: kupaoniceImage,
    description:
      "Kupaonski namještaj izrađujemo od materijala otpornog na vlagu poput MDF-a, lakiranog ili furniranog drva. Dizajni su prilagođeni svakom prostoru, a montaža brza i pouzdana. Održavanje je minimalno uz otporne materijale.",
    url: "/kupaonice",
  },
  {
    title: "Ugradbeni ormari",
    image: ormariImage,
    description:
      "Naši ugradbeni ormari omogućuju maksimalnu iskoristivost prostora. Izrađeni su od kvalitetnih materijala poput iverala, MDF-a i stakla. Jednostavni su za montažu, a klizna vrata čine održavanje lakšim.",
    url: "/ormari",
  },
  {
    title: "Ostali namještaj",
    image: ostaliNamjestajImage,
    description:
      "Izrađujemo namještaj za dječje sobe, spavaće sobe, ostave, pregradbena vrata, klizna vrata i uredski namještaj. Koristimo materijale poput MDF-a, iverala i drva, a svi naši proizvodi prilagodljivi su vašim potrebama i prostoru.",
    url: "/ostali-namjestaj",
  },
];

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
            {categories.map((category, index) => (
              <article key={index} className="article-about">
                <div className="article-about-box">
                  <LazyLoadImage
                    src={category.image}
                    alt={category.title}
                    effect="blur"
                  />
                </div>
                <div className="article-about-box-descriptions">
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                  <Link to={category.url}>Saznajte više</Link>{" "}
                  {/* Link za svaki artikl */}
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
