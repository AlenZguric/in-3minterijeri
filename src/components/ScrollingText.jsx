import React from 'react';
import { Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../styles/components/ScrollingText.css';
//import { color } from 'framer-motion';

const ScrollingText = () => {
  const words = [
    { name: ' ELGRAD ', url: 'https://www.elgrad.hr/', color: '#ca1a20' },
    { name: ' IVERPAN ', url: 'https://www.iverpan.hr/', color: 'black' },
    { name: ' DEWALT ', url: 'https://www.dewalt.com/', color: '#ffba00' },
    { name: ' FESTOOL ', url: 'https://www.festool.com/', color: '#46b82e' },
    { name: ' GRASS ', url: 'https://www.grass.eu/', color: 'black' }
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
      items: 2
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
  autoPlaySpeed={1}  // Smanjeni interval za neprekidno klizanje
  customTransition="transform 10000ms linear" // Postavlja glatki prijelaz
  transitionDuration={10000} // Brzina prijelaza
  keyBoardControl={true}
  showDots={false}
  arrows={false}
>
        {words.map((word, index) => (
          <div key={index} className="scroll-item">
            <Typography style={{color: word.color}}>
              <a href={word.url} target="_blank" rel="noopener noreferrer" style={{color: word.color}}>
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
