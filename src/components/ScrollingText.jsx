import React from 'react';
import { Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../styles/components/ScrollingText.css';

const ScrollingText = () => {
  const words = [
    { name: '| ELGRAD |', url: 'https://www.elgrad.hr/' },
    { name: '| IVERPAN |', url: 'https://www.iverpan.hr/' },
    { name: '| DEWALT |', url: 'https://www.dewalt.com/' },
    { name: '| FESTOOL |', url: 'https://www.festool.com/' },
    { name: '| GRASS |', url: 'https://www.grass.eu/' }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="scrolling-component">
      <div className="title-scroll-text">
        <h2>Naši partneri</h2>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        arrows={false}
      >
        {words.map((word, index) => (
          <div key={index} className="scroll-item">
            <Typography>
              <a href={word.url} target="_blank" rel="noopener noreferrer">
                {word.name}
              </a>
            </Typography>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ScrollingText;
