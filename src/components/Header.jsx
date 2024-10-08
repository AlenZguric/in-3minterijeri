import React from "react";
import { motion } from "framer-motion";

import "../styles/components/Header.css";

const Header = () => {
  return (
    <div className="header-component">
      
       <motion.div
        className="background-image"
        initial={{ y: 500, opacity: 0 }} // Početna pozicija (izvan ekrana, dole)
        animate={{ y: 0, opacity: 1 }}  // Ciljna pozicija (normalna)
        transition={{ duration: 3.5 }}    // Trajanje animacije
      ></motion.div>

      <motion.div
        className="box"
        initial={{ opacity: 0, y:-1000}}
        animate={{ opacity: 1, y:0 }}
        transition={{
          duration: 2.5,
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
