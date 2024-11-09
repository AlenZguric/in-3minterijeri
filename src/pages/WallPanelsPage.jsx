import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { wallPanelsData } from '../styles/utils/wallPanelsData';
import '../styles/pages/WallPanelsPage.css';

const scrollAnimations = {
  fadeIn: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
};

const WallPanelsPage = () => {
  const lightbox = useRef(null);

  useEffect(() => {
    // Inicijalizacija PhotoSwipe Lightboxa
    lightbox.current = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
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
    <div className="wall-panels-page">
      <Helmet>
        <title>Zidni Paneli | In3em Interijeri</title>
        <meta
          name="description"
          content="Pogledajte našu kolekciju zidnih panela koji će vašem prostoru dati sofisticiran i moderan izgled."
        />
        <meta
          name="keywords"
          content="zidni paneli, moderni zidni paneli, interijeri, dekoracija zidova"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph metatagi */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zidni Paneli | In3em Interijeri" />
        <meta
          property="og:description"
          content="Pogledajte našu kolekciju zidnih panela koji će vašem prostoru dati sofisticiran i moderan izgled."
        />
        <meta property="og:image" content="https://in3m-interijeri.web.app/social.webp" /> {/* Zamijeniti sa stvarnom slikom */}
        <meta property="og:url" content="https://www.in3em-interijeri.com/zidni-paneli" />

        {/* Twitter Card metatagi */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zidni Paneli | In3em Interijeri" />
        <meta
          name="twitter:description"
          content="Pogledajte našu kolekciju zidnih panela koji će vašem prostoru dati sofisticiran i moderan izgled."
        />
        <meta name="twitter:image" content="https://in3m-interijeri.web.app/social.webp" /> {/* Zamijeniti sa stvarnom slikom */}
        <meta name="twitter:url" content="https://www.in3em-interijeri.com/zidni-paneli" />
      </Helmet>      <main className="panels-main">
        <div id="gallery" className="gallery-grid">
          {wallPanelsData.images.map((image, index) => (
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
                  effect="blur" // Efekt zamagljenja za svaku sliku
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

export default WallPanelsPage;
