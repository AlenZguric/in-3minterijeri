import React, { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import { bathRoomData } from '../styles/utils/bathRoomData';
import '../styles/pages/BathRoomPage.css';

const BathRoomPage = () => {
  const lightbox = useRef(null);

  useEffect(() => {
    // Initialize PhotoSwipe Lightbox
    lightbox.current = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    lightbox.current.init();

    // Cleanup on unmount
    return () => {
      if (lightbox.current) {
        lightbox.current.destroy();
      }
    };
  }, []);

  return (
    <div className="wall-panels-page">
      <main className='bath-main'>
        <section>
          <article>
            <div id="gallery" className="gallery-grid">
              {bathRoomData.images.map((image, index) => (
                <a
                  key={index}
                  href={image.src}
                  data-pswp-width={image.width}
                  data-pswp-height={image.height}
                  target="_blank"
                  rel="noreferrer"
                  className="gallery-item"
                >
                  <img
                    src={image.thumb}
                    alt={`Slika kupaonskog namještaja ${index + 1}`}
                    className="gallery-image"
                  />
                </a>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default BathRoomPage;
