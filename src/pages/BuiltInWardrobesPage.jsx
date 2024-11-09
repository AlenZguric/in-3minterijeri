// components/BuiltInWardrobesPage.jsx
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { builtInWardrobesData } from '../styles/utils/builtInWardrobesData';
import '../styles/pages/BuiltInWardrobesPage.css';

const scrollAnimations = {
  fadeIn: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
};

const BuiltInWardrobesPage = () => {
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
    <div className="built-in-wardrobes-page">
   <Helmet>
        <title>Ugradbeni ormari | In3em Interijeri</title>
        <meta
          name="description"
          content="Pogledajte našu kolekciju ugradbenih ormara po mjeri, uključujući klizna vrata, unutrašnje rasporede i visokokvalitetne materijale za dugotrajnu uporabu."
        />
        <meta
          name="keywords"
          content="ugradbeni ormari, ormari, ugradbeni namještaj, klizna vrata, interijeri"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ugradbeni ormari | In3em Interijeri" />
        <meta
          property="og:description"
          content="Pogledajte našu kolekciju ugradbenih ormara po mjeri, uključujući klizna vrata, unutrašnje rasporede i visokokvalitetne materijale za dugotrajnu uporabu."
        />
        <meta property="og:image" content={builtInWardrobesData.images[0].thumb} />
        <meta property="og:url" content="https://www.in3em-interijeri.com/ugradbeni-ormari" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ugradbeni ormari | In3em Interijeri" />
        <meta
          name="twitter:description"
          content="Pogledajte našu kolekciju ugradbenih ormara po mjeri, uključujući klizna vrata, unutrašnje rasporede i visokokvalitetne materijale za dugotrajnu uporabu."
        />
        <meta name="twitter:image" content={builtInWardrobesData.images[0].thumb} />
        <meta name="twitter:url" content="https://www.in3em-interijeri.com/ugradbeni-ormari" />
      </Helmet>      <main className="wardrobe-main">
        <div id="gallery" className="gallery-grid">
          {builtInWardrobesData.images.map((image, index) => (
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
                  alt={image.alt}  // Koristi alt iz objekta
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

export default BuiltInWardrobesPage;
