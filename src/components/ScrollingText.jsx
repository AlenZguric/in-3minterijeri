import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/components/ScrollingText.css';

const ScrollingText = () => {
  const words = [
    { name: '| ELGRAD |', url: 'https://www.elgrad.hr/' },
    { name: '| IVERPAN |', url: 'https://www.iverpan.hr/' },
    { name: '| DEWALT |', url: 'https://www.dewalt.com/' },
    { name: '| FESTOOL |', url: 'https://www.festool.com/' },
    { name: '| GROSS |', url: 'https://www.gross.com.hr/' }
  ];

  return (
    <div className="scrolling-component">
        <div className="title-scroll-text">
            <h2>Naši partneri</h2>
        </div>
      <Box className="scrolling-text">
        {words.map((word, index) => (
          <Typography key={index} className="scroll-item">
            <a href={word.url} target="_blank" rel="noopener noreferrer">
              {word.name}
            </a>
          </Typography>
        ))}
      </Box>
    </div>
  );
};

export default ScrollingText;
