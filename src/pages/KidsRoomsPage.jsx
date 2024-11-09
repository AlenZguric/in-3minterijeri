import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { kidsRoomsData } from "../styles/utils/kidsRoomsData";
import "../styles/pages/KidsRoomsPage.css";

const scrollAnimations = {
  fadeIn: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

const KidsRoomsPage = () => {
  const lightbox = useRef(null);

  useEffect(() => {
    lightbox.current = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.current.init();

    return () => {
      if (lightbox.current) {
        lightbox.current.destroy();
      }
    };
  }, []);

  return (
    <div className="kids-rooms-page">
      <Helmet>
        <title>Dječje Sobe | In3em Interijeri</title>
        <meta
          name="description"
          content="Pogledajte našu kolekciju dječjih soba po mjeri, s funkcionalnim i kreativnim dizajnom koji će pružiti udoban prostor za vašu djecu."
        />
        <meta
          name="keywords"
          content="dječje sobe, namještaj za djecu, dječji interijer, sobe po mjeri, kreativni dizajn"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph metatagi */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dječje Sobe | In3em Interijeri" />
        <meta
          property="og:description"
          content="Pogledajte našu kolekciju dječjih soba po mjeri, s funkcionalnim i kreativnim dizajnom koji će pružiti udoban prostor za vašu djecu."
        />
        <meta property="og:image" content={kidsRoomsData.images[0].thumb} />
        <meta
          property="og:url"
          content="https://www.in3em-interijeri.com/djecje-sobe"
        />

        {/* Twitter Card metatagi */}
        <meta name="twitter:card" content="https://in3m-interijeri.web.app/social.webp" />
        <meta name="twitter:title" content="Dječje Sobe | In3em Interijeri" />
        <meta
          name="twitter:description"
          content="Pogledajte našu kolekciju dječjih soba po mjeri, s funkcionalnim i kreativnim dizajnom koji će pružiti udoban prostor za vašu djecu."
        />
        <meta name="twitter:image" content={kidsRoomsData.images[0].thumb} />
        <meta
          name="twitter:url"
          content="https://www.in3em-interijeri.com/djecje-sobe"
        />
      </Helmet>{" "}
      <main className="kids-main">
        <div id="gallery" className="gallery-grid">
          {kidsRoomsData.images.map((image, index) => (
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
                  alt={image.alt}
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

export default KidsRoomsPage;
