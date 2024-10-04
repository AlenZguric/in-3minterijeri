import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import {Helmet} from "react-helmet";
import "../styles/components/NavBar.scss"; 
import logo_image from "./../assets/images/thumbnails/logo_image.jpg";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
     
      <header className="header">
         <Helmet>
        <title>In 3m Interijeri - Namještaj po mjeri</title>
        <meta
          name="description"
          content="In 3m Interijeri se bavi izradom namještaja po mjeri. Pogledajte našu galeriju i kontaktirajte nas za više informacija."
        />
      </Helmet>
        <div className="logo">
          <Link to="/"> <img src={logo_image} alt="logo in-3m interijeri" /></Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <CloseIcon fontSize="35px" /> : <MenuOpenIcon fontSize="30px"/>}
        </div>
        <nav className={isOpen ? "nav open" : "nav"}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Početna
              </Link>
            </li>
            <li>
              <Link to="/galerija" onClick={toggleMenu}>
                Galerija
              </Link>
            </li>
            <li>
              <Link to="/o-nama" onClick={toggleMenu}>
                O Nama
              </Link>
            </li>
            <li>
              <Link to="/kontakt" onClick={toggleMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    
  );
};

export default NavBar;
