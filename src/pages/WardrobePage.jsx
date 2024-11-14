import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { wardrobesData } from "../styles/utils/WardrobesData";
import "../styles/pages/WardrobePage.css";

const scrollAnimations = {
  fadeIn: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

const WardrobePage = () => {
  const lightbox = useRef(null);

  useEffect(() => {
    // Inicijalizacija PhotoSwipe Lightboxa
    lightbox.current = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.current.init();

    // Čišćenje nakon unmounta
    return () => {
      if (lightbox.current) {
        lightbox.current.destroy();
      }
    };
  }, []);

  return (
    <div className="wardrobe-page">
      <Helmet>
        <title>Ormari | In-3m interijeri</title>
        <meta
          name="description"
          content="Pogledajte našu kolekciju ormara po mjeri, s jedinstvenim dizajnom i visokokvalitetnim obrtništvom."
        />
        <meta
          name="keywords"
          content="ormari po mjeri, dizajn ormara, moderni ormari, bespoke ormari"
        />
        <meta name="robots" content="index, follow" />
        {/* Open Graph metatagi */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Wardrobe Collection | Ormari po mjeri"
        />
        <meta
          property="og:description"
          content="Pogledajte našu kolekciju ormara po mjeri, s jedinstvenim dizajnom i visokokvalitetnim obrtništvom."
        />
        <meta property="og:image" content="%PUBLIC_URL%/social.webp" />{" "}
        {/* Zamijeniti sa stvarnom slikom */}
        <meta property="og:url" content="https://in-3minterijeri.com/ormari" />
        {/* Twitter Card metatagi */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wardrobe Collection | Ormari po mjeri"
        />
        <meta
          name="twitter:description"
          content="Pogledajte našu kolekciju ormara po mjeri, s jedinstvenim dizajnom i visokokvalitetnim obrtništvom."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/social.webp" />{" "}
        {/* Zamijeniti sa stvarnom slikom */}
        <meta name="twitter:url" content="https://in-3minterijeri.com/ormari" />

        
      </Helmet>{" "}
      <main className="wardrobe-main">
        <div id="gallery" className="gallery-grid">
          {wardrobesData.images.map((image, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              variants={scrollAnimations.fadeIn}
              viewport={{ once: false, amount: 0.2 }}
              className="gallery-item"
            >
              <a
                href={image.src}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                target="_blank"
                rel="noreferrer"
              >
                <LazyLoadImage
                  src={image.thumb}
                  alt={`Wardrobe ${index + 1}`}
                  effect="blur"
                  className="gallery-image"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WardrobePage;
