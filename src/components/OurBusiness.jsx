import React from "react";
import {  Link } from "react-router-dom";
import OurBuisnessImage from "../assets/images/fullsize/OurBusinessImage.jpg";

import '../styles/components/OurBusiness.css';
const OurBusiness = () => {

 

  return (
    <div className="our-business">
      <div className="container">
        <div className="row-image">
          <img src={OurBuisnessImage} alt="Kitchen" />
        </div>
        <div className="row-text">
          <div className="title">
            <h1>
              Naša djelatnost je <span>izrada namještaja po vašim željama</span>
            </h1>
          </div>
          <div className="description">
            <p>
              Unesite novi život u svoj dom s našom ekskluzivnom kolekcijom
              namještaja izrađenog po mjeri. Naši kuhinjski elementi i ugradbeni
              ormari dolaze u raznovrsnim dizajnima, bojama i materijalima,
              prilagođenim vašim osobnim željama. Uz podršku našeg iskusnog
              tima, lako ćete pronaći idealne komade koji savršeno odgovaraju
              vašem prostoru. Naš cilj je osigurati izvanrednu profesionalnost i
              sofisticiranost, stvarajući prostor koji odražava vašu jedinstvenu
              viziju doma iz snova.
            </p>
            <p>
              Mogućnost plaćanja na rate: PBZ, ERSTE: 2-12, 13-24, 25-36 rata
            </p>
          </div>
          <div className="button-see-more">
            <button >
               <Link to='/o-nama'>Saznaj više</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBusiness;
