import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { kidsRoomsData } from '../styles/utils/kidsRoomsData';
import '../styles/pages/KidsRoomsPage.css';

const scrollAnimations = {
  fadeIn: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
};

const KidsRoomsPage = () => {
  const lightbox = useRef(null);

  useEffect(() => {
    lightbox.current = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
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
        <title>Dječje Sobe</title>
      </Helmet>
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
