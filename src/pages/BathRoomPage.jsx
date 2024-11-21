import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { bathRoomData } from '../styles/utils/bathRoomData';
import '../styles/pages/BathRoomPage.css';

const scrollAnimations = {
  fadeIn: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
};

const BathRoomPage = () => {
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
    <div className="bathroom-page">
   <Helmet>
        <title>Kupaonski Namještaj | In3em Interijeri</title>
        <meta
          name="description"
          content="Pogledajte našu kolekciju kupaonskog namještaja po mjeri, uključujući ormariće, police, lavabo i druge komponente. Kvaliteta, funkcionalnost i dizajn."
        />
        <meta
          name="keywords"
          content="kupaonski namještaj, kupaonica, ormarići, police, umivaonici, interijeri, po mjeri"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kupaonski Namještaj | In-3m Interijeri" />
        <meta
          property="og:description"
          content="Pogledajte našu kolekciju kupaonskog namještaja po mjeri, uključujući ormariće, police, lavabo i druge komponente. Kvaliteta, funkcionalnost i dizajn."
        />
        <meta property="og:image" content={bathRoomData.images[0].thumb} /> {/* Prikazivanje slike prilikom dijeljenja */}
        <meta property="og:url" content="https://in-3minterijeri.com/kupaonice" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kupaonski Namještaj | In3em Interijeri" />
        <meta
          name="twitter:description"
          content="Pogledajte našu kolekciju kupaonskog namještaja po mjeri, uključujući ormariće, police, lavabo i druge komponente. Kvaliteta, funkcionalnost i dizajn."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/social.webp" /> {/* Prikazivanje slike na Twitteru */}
        <meta name="twitter:url" content="https://in-3minterijeri.com/kupaonice" />
        
          {/* Kanonska veza za izbjegavanje dupliciranog sadržaja */}
  <link rel="canonical" href="https://in-3minterijeri.com/kupaonice" />

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
                "name": "Kuhinje",
                "item": "https://in-3minterijeri.com/kupaonice"
              }
        
            ]
          })}
        </script>
      </Helmet>  
          <main className="bath-main">
        <div id="gallery" className="gallery-grid">
          {bathRoomData.images.map((image, index) => (
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
                  alt={`Slika kupaonskog namještaja ${index + 1}`}
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

export default BathRoomPage;
