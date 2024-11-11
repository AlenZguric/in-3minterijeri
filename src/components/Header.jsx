import React from "react";
import { motion } from "framer-motion";
import "../styles/components/Header.css";

const Header = () => {
  const isMobile = window.innerWidth <= 481; // Možeš prilagoditi ovu širinu ovisno o potrebama

  return (
    <div className="header-component">
      <motion.div
        className="background-image"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: isMobile ? 1 : 1.5 }}  // Smanji trajanje za mobilne uređaje
      ></motion.div>

      <motion.div
        className="box"
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: isMobile ? 1.5 : 2.5,  // Smanji trajanje za mobilne uređaje
          ease: [0, 0.71, 0.2, 2.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <p>
          <span>
            <i>Transformirajte</i>
          </span>
          <span>
            <i>svoj prostor</i>
          </span>
        </p>

        <h2>*  Namještaj koji odražava vaš stil i osobnost</h2>
      </motion.div>
    </div>
  );
};

export default Header;
