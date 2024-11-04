import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/components/NavBar.scss";
import logo_image from "./../assets/images/thumbnails/logo_image.webp";

import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close'; 

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = ()=>{
    setMenuOpen(false);
  }

  return (
    <nav>
      <Link to="/" className="logo-img">
        {" "}
        <img src={logo_image} alt="logo in-3m interijeri" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <CloseIcon style={{ color: "#fff" }} /> : <MenuIcon style={{ color: "#fff" }} />}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={closeMenu}>Naslovnica</NavLink>
        </li>
        <li>
          <NavLink to="/proizvodi" onClick={closeMenu}>Proizvodi</NavLink>
        </li>
        <li>
          <NavLink to="/usluge" onClick={closeMenu}>Usluge</NavLink>
        </li>
        <li>
          <NavLink to="/o-nama" onClick={closeMenu}>O Nama</NavLink>
        </li>
        <li>
          <NavLink to="kontakt" onClick={closeMenu}>Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
