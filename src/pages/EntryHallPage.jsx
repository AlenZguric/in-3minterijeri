import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { entryHallData } from '../styles/utils/entryHalldata'; // Importiraj entryHallData
import '../styles/pages/EntryHallPage.css'; // Kreiraj odgovarajući CSS za ovu stranicu

const scrollAnimations = {
  fadeIn: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
};

const EntryHallPage = () => {
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
    <div className="entryhall-page">
<Helmet>
        <title>Hodnici i Predsoblja | In-3m Interijeri</title>
        <meta
          name="description"
          content="Pogledajte našu kolekciju hodnika i predsoblja po mjeri, s modernim i funkcionalnim dizajnom koji će vašem prostoru dati sofisticirani izgled."
        />
        <meta
          name="keywords"
          content="hodnici, predsoblja, ugradbeni namještaj, interijeri, moderni hodnici, dizajn predsoblja"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph metatagi */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hodnici i Predsoblja | In-3m Interijeri" />
        <meta
          property="og:description"
          content="Pogledajte našu kolekciju hodnika i predsoblja po mjeri, s modernim i funkcionalnim dizajnom koji će vašem prostoru dati sofisticirani izgled."
        />
        <meta property="og:image" content={entryHallData.images[0].thumb} />
        <meta property="og:url" content="https://in-3minterijeri.com/hodnici-i-predsoblja" />

        {/* Twitter Card metatagi */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hodnici i Predsoblja | In3em Interijeri" />
        <meta
          name="twitter:description"
          content="Pogledajte našu kolekciju hodnika i predsoblja po mjeri, s modernim i funkcionalnim dizajnom koji će vašem prostoru dati sofisticirani izgled."
        />
        <meta name="twitter:image" content={entryHallData.images[0].thumb} />
        <meta name="twitter:url" content="https://in-3minterijeri.com/hodnici-i-predsoblja" />

          {/* Kanonska veza za izbjegavanje dupliciranog sadržaja */}
  <link rel="canonical" href="https://in-3minterijeri.com/hodnici-i-predsoblja" />

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
                "name": "Hodnici i Predsoblja",
                "item": "https://in-3minterijeri.com/hodnici-i-predsoblja"
              }
        
            ]
          })}
        </script>
      </Helmet>   
         <main className="entryhall-main">
        <div id="gallery" className="gallery-grid">
          {entryHallData.images.map((image, index) => (
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
                  alt={`Slika hodnika i predsoblja ${index + 1}`}
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

export default EntryHallPage;
