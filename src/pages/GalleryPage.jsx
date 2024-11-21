import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../styles/pages/galleryPage.css";

import kuhinjeImage from "../assets/images/fullsize/kuhinja/kuhinja_1/IMG_5748.webp";
import ormariImage from "../assets/images/fullsize/ormari/51.webp";
import zidneOblogeImage from "../assets/images/fullsize/Paneli/9.webp";
import hodniciImage from "../assets/images/fullsize/predsoblje/29.webp";
import kupaoniceImage from "../assets/images/fullsize/kupaonice/9.webp";
import ugradbeniOrmari from "../assets/images/fullsize/klizni ormari/1.webp";

import dječjeSobe from "../assets/images/fullsize/djecjeSobe/19.webp";

const categories = [
  {
    title: "Kuhinje po mjeri",
    image: kuhinjeImage,
    description:
      "Naše kuhinje po mjeri omogućuju vam stvaranje prostora koji se savršeno uklapa u vaš dom. Izrađene su od vrhunskih materijala kao što su MDF, iveral i furnir, prilagođene su vašim dimenzijama i potrebama, s modernim i praktičnim dizajnom. Montaža je brza i jednostavna, a održavanje lako zahvaljujući otpornim materijalima.",
    url: "/kuhinje",
  },
  {
    title: "Kupaonice",
    image: kupaoniceImage,
    description:
      "Naš kupaonski namještaj izrađen je od materijala otpornog na vlagu, poput MDF-a i lakiranog drva, koji jamče dugotrajnost i jednostavno održavanje. Dizajn prilagođavamo specifičnim dimenzijama vaše kupaonice, a montaža je profesionalna i brza.",
    url: "/kupaonice",
  },
  {
    title: "Hodnici i predsoblja",
    image: hodniciImage,
    description:
      "Naši hodnici i predsoblja optimiziraju raspoloživi prostor, pružajući funkcionalnost i stil. Koristimo kvalitetne materijale kao što su iveral i MDF. Dizajn je prilagođen vašim željama, a namještaj je jednostavan za održavanje i dugotrajan.",
    url: "/hodnici-i-predsoblja",
  },
  {
    title: "Ugradbeni ormari",
    image: ugradbeniOrmari,
    description:
      "Naši ugradbeni ormari omogućuju optimalno korištenje prostora i organizaciju. Izrađeni su od visokokvalitetnih materijala poput MDF-a i stakla, a klizna vrata osiguravaju lako održavanje i praktičnost u svakodnevnoj uporabi.",
    url: "/ugradbeni-ormari",
  },
  {
    title: "Ormari",
    image: ormariImage,
    description:
      "Naši ormari pružaju maksimalnu iskoristivost prostora. Izrađeni su od izdržljivih materijala poput MDF-a i iverala, jednostavni su za montažu i održavanje te idealni za organizaciju vašeg doma.",
    url: "/ormari",
  },
  {
    title: "Dječje sobe",
    image: dječjeSobe,
    description:
      "Naš namještaj za dječje sobe dizajniran je s naglaskom na sigurnost, funkcionalnost i prilagodbu potrebama vašeg djeteta. Koristimo materijale kao što su MDF, iveral i drvo, a svaki komad namještaja prilagođavamo vašim prostorima i željama.",
    url: "/djecje-sobe",
  },
  {
    title: "Zidne obloge",
    image: zidneOblogeImage,
    description:
      "Naše zidne obloge pružaju elegantan izgled i dodatnu zaštitu zidova u vašem domu. Idealne su za sve prostorije, a izrađene su od visokokvalitetnih materijala poput PVC-a i drveta koji su otporni na vlagu i jednostavni za održavanje.",
    url: "/zidne-obloge",
  },

  

];


const GalleryPage = () => {
  return (
    <div className="gallery-page">
 <Helmet>
        <title>Galerija - Namještaj po mjeri | In-3m Interijeri</title>
        <meta
          name="description"
          content="Pogledajte našu kolekciju namještaja po mjeri, uključujući kuhinje, kupaonice, hodnike, ormariće i više. Kvaliteta i dizajn na dohvat ruke."
        />
        <meta
          name="keywords"
          content="namještaj po mjeri, kuhinje, kupaonice, ormari, hodnici, zidne obloge, ugradbeni ormari, dječje sobe, interijeri"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Galerija - Namještaj po mjeri | In-3m Interijeri" />
        <meta
          property="og:description"
          content="Pogledajte našu kolekciju namještaja po mjeri, uključujući kuhinje, kupaonice, hodnike, ormariće i više. Kvaliteta i dizajn na dohvat ruke."
        />
        <meta property="og:image" content={kuhinjeImage} /> {/* Prikazivanje slike prilikom dijeljenja */}
        <meta property="og:url" content="https:/in-3minterijeri.com/galerija" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galerija - Namještaj po mjeri | In3em Interijeri" />
        <meta
          name="twitter:description"
          content="Pogledajte našu kolekciju namještaja po mjeri, uključujući kuhinje, kupaonice, hodnike, ormariće i više. Kvaliteta i dizajn na dohvat ruke."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/social.webp"  /> {/* Prikazivanje slike na Twitteru */}
        <meta name="twitter:url" content="https://in-3minterijeri.com/galerija" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Naslovnica",
                "item": "https://in-3minterijeri.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Proizvodi",
                "item": "https://in-3minterijeri.com/proizvodi"
              }
        
            ]
          })}
        </script>
      </Helmet>  
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
                  <Link to={category.url}>Vidi galeriju</Link>{" "}
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
